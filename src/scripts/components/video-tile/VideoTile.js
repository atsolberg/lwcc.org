import React from 'react';
import { string } from 'prop-types';
import { Link } from '@reach/router';

import { format, formats } from '../../util/misc';
import { videoType } from '../../types/video';

import styles from './styles';

function VideoTile({ video, prefix = '' }) {
  return (
    <Link to={`${prefix}/?id=${video.id}`} className="video-tile" css={styles}>
      <figure>
        <img className="thumb img-fluid" src={video.thumb} alt="thumbnail" />
        <figcaption className="meta">
          {video.portrait && (
            <img
              className="portrait"
              src={video.portrait}
              alt="speaker portrait"
            />
          )}
          <div className="details">
            <time className="date">
              {format.date(video.date, formats.date.SIMPLE_DOTTED)}
            </time>
            {video.speaker && <> | {video.speaker} </>}
            <h3
              className="title"
              dangerouslySetInnerHTML={{ __html: video.title }}
            />
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}
VideoTile.propTypes = {
  video: videoType.isRequired,
  prefix: string,
};

export default VideoTile;
