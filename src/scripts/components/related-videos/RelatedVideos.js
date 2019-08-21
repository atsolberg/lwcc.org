import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import Carousel from 'react-bootstrap/es/Carousel';

import api from '../../util/api';
import { arrays } from '../../util/array';
import VideoTile from '../video-tile/VideoTile';

import styles from './styles';

function RelatedVideos({ videoId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.getRelatedVideos(videoId).then(videos => {
      setVideos(arrays.chunk(videos, 3));
    });
  }, [videoId]);

  return (
    <div className="row" css={styles}>
      <div className="container">
        <h3>Suggested or Related Videos</h3>
        <Carousel
          interval={null}
          prevIcon={<i aria-hidden="true" className="fa fa-chevron-left" />}
          nextIcon={<i aria-hidden="true" className="fa fa-chevron-right" />}
        >
          {videos.map(chunk => {
            const key = chunk.map(v => v.snippet.id).join('-');
            return (
              <Carousel.Item key={key}>
                <div className="row">
                  {chunk.map(v => (
                    <div className="col-4">
                      <VideoTile data={v} />
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
