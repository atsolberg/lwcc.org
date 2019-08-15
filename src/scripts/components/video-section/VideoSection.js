import React from 'react';
import { string, arrayOf, shape, bool } from 'prop-types';

import { prop } from '../../util/object';

import Loadable from '../loadable/Loadable';
import VideoTile from '../video-tile/VideoTile';
import Box from '../box/Box';

import styles from './styles';

function VideoSection({ title, videos, loading }) {
  return (
    <Box className="videos-section" css={styles}>
      <Loadable loading={loading}>
        {title && <h2 className="title">{title}</h2>}
        <div className="row">
          {prop(videos, 'length') &&
            videos.map(v => (
              <div className="col-12 col-lg-6">
                <VideoTile key={v.id} data={v} speaker="Mac Hammond" />
              </div>
            ))}
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
};

export default VideoSection;
