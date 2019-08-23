import React from 'react';
import cx from 'classnames';

import styles from './styles';
import { ytVideoType } from '../../types/youtube';
import { parseVideo } from '../../util/youtube';

function VideoDescription({ data }) {
  const loading = !data;
  const video = !loading && parseVideo(data);

  return (
    <div css={styles} className={cx({ loading })}>
      {!loading && (
        <>
          <h3 dangerouslySetInnerHTML={{ __html: video.title }} />
          <div dangerouslySetInnerHTML={{ __html: video.description }} />
        </>
      )}
    </div>
  );
}
VideoDescription.propTypes = {
  data: ytVideoType,
};

export default VideoDescription;
