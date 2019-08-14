import React from 'react';
import { any } from 'prop-types';

import styles from './styles';

function VideoTile({ data }) {
  return (
    <figure className="video-tile" css={styles}>
      <a href="http://www.lwcc.org/watch/more-than-enough-iv-severing-the-past-forever/">
        <img
          className="archive"
          src="http://i.vimeocdn.com/video/805598492_640.jpg"
        />
      </a>
      <figcaption className="meta">
        <time className="date">Aug 11</time>
        <div className="details">
          <p className="title">
            <a href="http://www.lwcc.org/watch/more-than-enough-iv-severing-the-past-forever/">
              More Than Enough IV: Severing the Past Forever
            </a>
          </p>
          <p className="author">Mac Hammond</p>
          {JSON.stringify(data, null, 2)}
        </div>
      </figcaption>
    </figure>
  );
}
VideoTile.propTypes = {
  data: any.isRequired,
};

export default VideoTile;
