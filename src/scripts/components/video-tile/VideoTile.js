import React from 'react';
import { string } from 'prop-types';

import { prop } from '../../util/object';
import { format } from '../../util/misc';
import { parseVideo } from '../../util/youtube';
import { videoType } from '../../types/youtube';

import styles from './styles';

function VideoTile({ data, prefix = '' }) {
  const { snippet } = data;
  const video = parseVideo(data);
  const id = prop(data, 'id.videoId') || prop(snippet, 'resourceId.videoId');

  return (
    <a href={`${prefix}/?id=${id}`} className="video-tile" css={styles}>
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
            <time className="date">{format.date(video.date)}</time>
            {video.speaker && <> | {video.speaker} </>}
            <h3
              className="title"
              dangerouslySetInnerHTML={{ __html: video.title }}
            />
          </div>
        </figcaption>
      </figure>
    </a>
  );
}
VideoTile.propTypes = {
  data: videoType.isRequired,
  prefix: string,
};

export default VideoTile;
