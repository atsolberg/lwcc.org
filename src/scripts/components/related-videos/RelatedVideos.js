import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import Carousel from 'react-bootstrap/es/Carousel';

import api from '../../util/api';
import { arrays } from '../../util/array';
import VideoTile from '../video-tile/VideoTile';

import styles from './styles';
import { parseVideo } from '../../util/youtube';

function RelatedVideos({ videoId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.getRelatedVideos(videoId).then(videos => {
      const parsed = videos.map(v => parseVideo(v));
      const chunked = arrays.chunk(parsed, 3);
      setVideos(chunked);
    });
  }, [videoId]);

  return (
    <div className="row" css={styles}>
      <div className="container-xl">
        <h3>Suggested or Related Videos</h3>
        <Carousel
          interval={null}
          prevIcon={<i aria-hidden="true" className="fa fa-chevron-left" />}
          nextIcon={<i aria-hidden="true" className="fa fa-chevron-right" />}
        >
          {videos.map(chunk => {
            const key = chunk.map(v => v.id).join('-');
            return (
              <Carousel.Item key={key}>
                <div className="row">
                  {chunk.map(v => (
                    <div key={v.id} className="col-4">
                      <VideoTile video={v} />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
RelatedVideos.propTypes = {
  videoId: string.isRequired,
};

export default RelatedVideos;
