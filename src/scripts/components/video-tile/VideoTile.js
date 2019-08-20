import React from 'react';
import { any, string } from 'prop-types';

import { prop } from '../../util/object';
import { format } from '../../util/misc';
import speakers from '../../../img/speakers/*.jpg';
import styles from './styles';

function findSpeaker(data) {
  const speaker = {};
  const { title } = data.snippet;
  const sepIdx = title.indexOf('-');

  if (sepIdx !== -1) {
    const name = title.substring(sepIdx + 1).trim();
    speaker.name = name;
    speaker.title = title.substring(0, sepIdx).trim();

    const file = name.replace(' ', '-').toLowerCase();
    const portrait = speakers[file];
    if (portrait) speaker.portrait = portrait;
  } else {
    speaker.title = title;
  }

  speaker.thumb = prop(data, 'snippet.thumbnails.high.url');
  prop(data, 'snippet.thumbnails.standard.url');

  return speaker;
}

function VideoTile({ data, prefix = '' }) {
  const { snippet } = data;
  const speaker = findSpeaker(data);
  const id = prop(data, 'id.videoId') || prop(snippet, 'resourceId.videoId');

  return (
    <a href={`${prefix}/?id=${id}`} className="video-tile" css={styles}>
      <figure>
        <img className="thumb img-fluid" src={speaker.thumb} alt="thumbnail" />
        <figcaption className="meta">
          {speaker.portrait && (
            <img
              className="portrait"
              src={speaker.portrait}
              alt="speaker portrait"
            />
          )}
          <div className="details">
            <time className="date">
              {format.date(new Date(data.snippet.publishedAt))}
            </time>
            {speaker.name && <> | {speaker.name} </>}
            <h3
              className="title"
              dangerouslySetInnerHTML={{ __html: speaker.title }}
            />
          </div>
        </figcaption>
      </figure>
    </a>
  );
}
VideoTile.propTypes = {
  data: any.isRequired,
  prefix: string,
};

export default VideoTile;
