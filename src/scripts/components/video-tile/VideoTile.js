import React from 'react';
import { any } from 'prop-types';

import styles from './styles';

function VideoTile({ data }) {
  return (
    <div className="video-tile" css={styles}>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
VideoTile.propTypes = {
  data: any.isRequired,
};

export default VideoTile;
