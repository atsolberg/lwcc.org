import React from 'react';
import { any } from 'prop-types';

import { format } from '../../util/misc';
import speakers from '../../../img/speakers/*.jpg';
import styles from './styles';

function VideoTile({ data, speaker = '' }) {
  const portrait =
    speakers[
      speaker
        .trim()
        .replace(' ', '-')
        .toLowerCase()
    ];
  return (
    <a href="#" className="video-tile" css={styles}>
      <figure>
        <img
          className="thumb img-fluid"
          src={data.snippet.thumbnails.medium.url}
        />
        <figcaption className="meta">
          {portrait && (
            <img className="portrait" src={portrait} alt="speaker portrait" />
          )}
          <div className="details">
            <time className="date">
              {format.date(new Date(data.snippet.publishedAt))}
            </time>
            {speaker && <> | {speaker} </>}
            <h3 className="title">{data.snippet.title}</h3>
          </div>
        </figcaption>
      </figure>
    </a>
  );
}
VideoTile.propTypes = {
  data: any.isRequired,
};

export default VideoTile;
