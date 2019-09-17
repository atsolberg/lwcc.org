import React from 'react';
import { string } from 'prop-types';
import { Link } from '@reach/router';

import { format, formats } from '../../util/misc';
import { videoType } from '../../types/video';

import styles from './styles';
import { useAppState } from '../../state-providers/app/AppStateProvider';

function VideoTile({ video, prefix = '/media-video' }) {
  const {
    state: { speed },
  } = useAppState();

  // Use higher res thumb if the download speed is good.
  const thumb =
    speed < 100 && video.highResThumb ? video.highResThumb : video.thumb;

  return (
    <Link to={`${prefix}/?id=${video.id}`} className="video-tile" css={styles}>
      <figure>
        <img className="thumb img-fluid" src={thumb} alt="thumbnail" />
        <figcaption className="meta">
          {video.portrait && (
            <img
              className="portrait"
              src={video.portrait}
              alt="speaker portrait"
            />
          )}
          <div className="details">
            <div className="date-speaker">
              {video.data && (
                <time className="date">
                  {format.date(video.date, formats.date.SIMPLE_DOTTED)}
                </time>
              )}
              {video.data && video.speaker && <span> | </span>}
              {video.speaker && (
                <span
                  dangerouslySetInnerHTML={{
                    __html: video.speaker,
                  }}
                />
              )}
            </div>
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
