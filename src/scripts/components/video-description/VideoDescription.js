import React from 'react';
import cx from 'classnames';

import styles from './styles';

function VideoDescription({ data }) {
  const loading = !data;

  return (
    <div css={styles} className={cx({ loading })}>
      {!loading && (
        <div dangerouslySetInnerHTML={{ __html: data.snippet.description }} />
      )}
    </div>
  );
}

export default VideoDescription;
