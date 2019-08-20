import React from 'react';
import cx from 'classnames';

import styles from './styles';

function Video({ data }) {
  const loading = !data;

  return (
    <div css={styles} className={cx({ loading })}>
      {!loading && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${data.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default Video;
