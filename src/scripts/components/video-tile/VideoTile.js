import React from 'react';
import { any } from 'prop-types';
import { format } from '../../util/misc';

import styles from './styles';

function VideoTile({ data }) {
  return (
    <figure className="video-tile" css={styles}>
      <a href="#">
        <img className="video-thumb" src={data.snippet.thumbnails.medium.url} />
      </a>
      <figcaption className="meta">
        <time className="date">
          {format.date(new Date(data.snippet.publishedAt))}
        </time>
        <div className="details">
          <p className="title">
            <a href="#">{data.snippet.title}</a>
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
VideoTile.propTypes = {
  data: any.isRequired,
};

export default VideoTile;
