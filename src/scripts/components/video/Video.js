import React from 'react';
import cx from 'classnames';

import { ytVideoType } from '../../types/youtube';
import styles from './styles';

function Video({ data }) {
  const loading = !data;

  return (
    <div css={styles} className={cx({ loading })}>
      {!loading && (
        <div className="youtube-wrapper">
          <iframe
            className="rounded"
            src={`https://www.youtube.com/embed/${data.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
Video.propTypes = {
  data: ytVideoType,
};

export default Video;
