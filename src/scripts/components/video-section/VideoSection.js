import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { string, arrayOf, shape, bool } from 'prop-types';

import { prop } from '../../util/object';

import Loadable from '../loadable/Loadable';
import VideoTile from '../video-tile/VideoTile';
import Box from '../box/Box';

import styles from './styles';
import { rif } from '../../util/jsx';
import Button from '../button';

function sort(a, b) {
  return b.snippet.publishedAt.localeCompare(a.snippet.publishedAt);
}

function VideoSection({ title, videos, loading, prefix }) {
  const [visible, setVisible] = useState(6);
  useEffect(() => {
    setVisible(6);
  }, [videos]);

  function loadMore() {
    setVisible(visible + 6);
  }

  return (
    <Box className="videos-section" css={styles}>
      <Loadable loading={loading}>
        {title && <h2 className="title">{title}</h2>}
        <div className="row">
          {rif(
            prop(videos, 'length'),
            [...videos]
              .sort(sort)
              .slice(0, visible)
              .map(v => (
                <div
                  key={prop(v, 'id.videoId') || v.id}
                  className="col-12 col-lg-6"
                >
                  <VideoTile data={v} prefix={prefix} />
                </div>
              )),
            <small className="font-italic">No videos found</small>
          )}
        </div>
        <div
          className={cx('tac bump-down-md', {
            'd-none': visible >= videos.length,
          })}
        >
          <Button
            onClick={loadMore}
            variant="primary"
            style={{ minWidth: '224px' }}
          >
            Load More
          </Button>
        </div>
      </Loadable>
    </Box>
  );
}
VideoSection.propTypes = {
  title: string,
  videos: arrayOf(
    shape({
      name: string,
      author: string,
    })
  ),
  loading: bool,
  prefix: string.isRequired,
};

export default VideoSection;
