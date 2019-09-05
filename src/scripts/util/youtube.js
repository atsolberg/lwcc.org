/**
 * Module to house youtube data utilities.
 */

import { prop } from './object';
import speakers from '../../img/speakers/*.jpg';

/**
 * The video data parsed a youtube video search result.
 * @typedef {Object} Video
 * @property {string} title - the video title
 * @property {string} description - the video description
 * @property {string} speaker - the speaker in the video if available
 * @property {string} portrait - the speakers portrait file name if available
 * @property {date} date - the date the video was published
 */

/**
 * Parses the raw youtube video search response into ui parts.
 * @param [object] data - the raw youtube api data response.
 * @return {Video} the parsed video data.
 */
export function parseVideo(data) {
  const video = {};
  const v_publishedAt = prop(data, 'contentDetails.videoPublishedAt');
  const { title, publishedAt: sn_publishedAt, description } = data.snippet;
  const publishedAt = v_publishedAt || sn_publishedAt;

  video.id =
    prop(data, 'id.videoId') ||
    prop(data.snippet, 'resourceId.videoId') ||
    data.id;

  const sepIdx = title.indexOf('-');
  if (sepIdx !== -1) {
    const speaker = title.substring(sepIdx + 1).trim();
    video.speaker = speaker;
    video.title = title.substring(0, sepIdx).trim();

    const file = speaker.replace(' ', '-').toLowerCase();
    const portrait = speakers[file];
    if (portrait) video.portrait = portrait;
  } else {
    video.title = title;
  }

  video.thumb =
    prop(data, 'snippet.thumbnails.medium.url') ||
    prop(data, 'snippet.thumbnails.maxres.url') ||
    prop(data, 'snippet.thumbnails.standard.url');

  video.highResThumb = prop(data, 'snippet.thumbnails.maxres.url');

  video.date = new Date(publishedAt);
  video.description = description;

  video.url = `https://youtu.be/${video.id}`;

  return video;
}
