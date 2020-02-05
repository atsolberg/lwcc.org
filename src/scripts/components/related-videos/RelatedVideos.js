import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

import api from '../../util/api';
import { arrays } from '../../util/array';
import { parseVideo } from '../../util/youtube';
import useSizeChange from '../../hooks/useSizeChange';

import VideoTile from '../video-tile/VideoTile';

import styles from './styles';
import { viewport } from '../../util/device';
import Button from '../button';

function getCol() {
  const { w } = viewport();
  if (w <= 768) return 1;
  if (w <= 1080) return 2;
  return 3;
}

function RelatedVideos({ videoId }) {
  const [index, setIndex] = useState(0);
  const [videos, setVideos] = useState([]);
  const [col, setCol] = useState(getCol());
  const chunks = arrays.chunk(videos, col);

  useEffect(() => {
    api.getRelatedVideos(videoId).then(videos => {
      const parsed = videos.map(v => parseVideo(v));
      setVideos(parsed);
    });
  }, [videoId]);

  useSizeChange(() => {
    setCol(getCol());
  }, []);

  return (
    <div className="row related-videos" css={styles}>
      <div className="container-xl">
        <h3>Suggested or Related Videos</h3>
        <div className="related-videos-carousel">
          <div className="related-videos-prev">
            <Button
              variant="link"
              disabled={index === 0}
              onClick={() => setIndex(index - 1)}
            >
              <i aria-hidden="true" className="fa fa-chevron-left" />
            </Button>
          </div>
          <Carousel
            interval={null}
            activeIndex={index}
            onSelect={i => setIndex(i)}
          >
            {chunks.map(chunk => {
              const key = chunk.map(v => v.id).join('-');
              return (
                <Carousel.Item key={key}>
                  <div className="row">
                    {chunk.map(v => (
                      <div key={v.id} className={`col-${12 / col}`}>
                        <VideoTile video={v} />
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className="related-videos-nex">
            <Button
              variant="link"
              disabled={index >= chunks.length - 1}
              onClick={() => setIndex(index + 1)}
            >
              <i aria-hidden="true" className="fa fa-chevron-right" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
RelatedVideos.propTypes = {
  videoId: string.isRequired,
};

export default RelatedVideos;
