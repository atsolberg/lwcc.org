/**
 * Api module for the site, all ajax requests should live here.
 * @module api
 */
import axios from 'axios';

import logger from './logger';
import { isTestMode } from './misc';
import { namespace } from './object';
import { g_creds, host } from './constants';
import TEST_PL_ITEMS_DATA from '../__tests__/data/pl_items_the_simple_life';
import TEST_PL_DATA from '../__tests__/data/pl_the_simple_life';
import MicroCache from './cache';

const YT_CHANNEL_ID = 'UC6OtG9IPpnEoVpXwaxsXR4g';
const MAX_RESULTS = 50; // 50 is the largest valid value for Youtube search results
const TEST_PL_ID = 'PL7LE6jm_pt7yg5Xw-z1HS8T-wEacfYy2r';

const YT_API = 'https://www.googleapis.com/youtube/v3';

const cache = new MicroCache();

/**
 * Make sure we only include videos from our channel and videos that are not private.
 * Even when specifying our chanel, sometimes yt search
 * includes non-lwcc videos.
 * @param {YoutubeVideo[]} items - array of youtube video search results.
 * @return {YoutubeVideo[]} the filtered array of videos
 */
function filterForOurs(items) {
  return items.filter(
    item =>
      item.snippet.channelId === YT_CHANNEL_ID &&
      item.snippet.title !== 'Private video'
  );
}

async function getPagedPlaylistItems(id, pageToken) {
  if (isTestMode()) {
    return new Promise(resolve => {
      resolve(TEST_PL_ITEMS_DATA);
    });
  }

  const key = `playlist-items-${id}`;
  if (cache.has(key)) {
    return new Promise(resolve => {
      resolve(cache.get(key));
    });
  }

  const params = {
    key: g_creds.api_key,
    maxResults: MAX_RESULTS,
    part: 'snippet,contentDetails',
    playlistId: id,
  };

  if (pageToken) params.pageToken = pageToken;

  const ts = Date.now();
  const all = await axios
    .get(`${YT_API}/playlistItems?_=${ts}`, {
      params,
    })
    .then(async function handlePlaylists({ data: { items, nextPageToken } }) {
      const videos = filterForOurs(items);

      // Recursively fetch the next page if needed.
      if (nextPageToken) {
        const nextPage = await getPagedPlaylistItems(id, nextPageToken);
        return [...videos, ...nextPage];
      }

      return videos;
    });

  cache.put(key, all);
  return all;
}

const api = {
  /**
   * Fetch all menus for the site, or particular menus if specified.
   */
  getMenus: (...ids) => {
    const ts = Date.now();
    // Fetch all
    if (!ids.length) {
      return axios.get(`${host}/wp-json/menus/v1/menus?_=${ts}`);
    }
    // Fetch the one specified
    if (ids.lenth === 1) {
      return axios.get(`${host}/wp-json/menus/v1/menus/${ids[0]}?_=${ts}`);
    }
    // Fetch all specified
    return Promise.all(
      ids.map(id => axios.get(`${host}/wp-json/menus/v1/menus/${id}?_=${ts}`))
    );
  },

  /**
   * Get a list of media pages like sermons, stories, ect.
   * This may come from the api later, hardcoded for now.
   * @return {Promise<any>}
   */
  getMediaPages: () => {
    const pages = new Promise(resolve => {
      resolve([
        {
          title: 'Sermons',
          url: '/media-sermons',
        },
        {
          title: 'Stories',
          url: '/media-stories',
        },
        {
          title: 'Resources',
          url: '/media-resources',
        },
      ]);
    });

    return pages;
  },

  /**
   * Get play-lists for a media page.
   * This may come from the api later, hardcoded for now.
   * @param {string} page - the page to get playlists for
   * @return {Promise<Object[]>}
   */
  getPlayLists: page => {
    const playlists = new Promise(resolve => {
      if (page === 'sermons') {
        resolve([
          {
            id: 'series',
            title: 'Current Series',
            pl_id: TEST_PL_ID,
          },
          {
            id: 'sundays',
            title: 'Sundays',
            pl_id: 'PL7LE6jm_pt7yDmn0VlPwmERrHlFDP6GXF',
          },
          {
            id: 'saturdays',
            title: 'Saturdays',
            pl_id: 'PL7LE6jm_pt7z8CIobPbY0RDUcZYUo9GQK',
          },
          {
            id: 'wednesdays',
            title: 'Wednesdays',
            pl_id: 'PL7LE6jm_pt7zYd5mEq0otXWotKYpM4m7B',
          },
          {
            id: 'spanish',
            title: 'Iglesia Espanol',
            pl_id: 'PL7LE6jm_pt7w109nBh94aqhRuelaBK7Da',
          },
          {
            id: 'guest',
            title: 'Guest',
            pl_id: 'PL7LE6jm_pt7yXaIukwACfPn8GWamj7NGO',
          },
        ]);
      }

      if (page === 'stories') {
        resolve([
          {
            id: 'testimonies',
            title: 'Testimonies',
            pl_id: 'PL7LE6jm_pt7xgNy3u8SIDojkZULftrcV1',
          },
          {
            id: 'outreach',
            title: 'Outreach',
            pl_id: 'PL7LE6jm_pt7ypzOtw40juQo-W3fw56V1j',
          },
          {
            id: 'worship',
            title: 'Worship',
            pl_id: 'PL7LE6jm_pt7z29u9zIYPbwNY73jm6FqGU',
          },
        ]);
      }
    });

    return playlists;
  },

  /**
   * Get the current series playlist name from the cms.
   * This may come from the api later, hardcoded for now.
   * @return {Promise<string>}
   */
  getCurrentSeriesId: () => {
    const ts = Date.now();
    return new Promise(resolve => {
      axios
        .get(`${host}/wp-json/wp/v2/playlists/2669?_=${ts}`)
        .then(({ data }) => {
          resolve(data.acf.id);
        })
        .catch(err => {
          logger.error('Failed to fetch current series id from wp api:', err);
          resolve(TEST_PL_ID);
        });
    });
  },

  getVideosForPlayList: getPagedPlaylistItems,

  getPlayList: id => {
    if (isTestMode()) {
      return new Promise(resolve => {
        resolve(TEST_PL_DATA);
      });
    }

    const ts = Date.now();
    const key = `playlist-${id}`;
    if (cache.has(key)) {
      return new Promise(resolve => {
        resolve(cache.get(key));
      });
    }

    return axios
      .get(`${YT_API}/playlists?_=${ts}`, {
        params: {
          key: g_creds.api_key,
          part: 'snippet,contentDetails',
          id,
        },
      })
      .then(({ data: { items: [pl] } }) => {
        cache.put(key, pl);
        return pl;
      });
  },

  getVideoDetails: id => {
    const key = `details-${id}`;
    if (cache.has(key)) {
      return new Promise(resolve => {
        resolve(cache.get(key));
      });
    }

    const ts = Date.now();
    return axios
      .get(`${YT_API}/videos?_=${ts}`, {
        params: {
          key: g_creds.api_key,
          part: 'id,snippet',
          id,
        },
      })
      .then(({ data: { items: [details] } }) => {
        cache.put(key, details);
        return details;
      });
  },

  searchVideos: q => {
    const key = `search-${q}`;
    if (cache.has(key)) {
      return new Promise(resolve => {
        resolve(cache.get(key));
      });
    }

    const ts = Date.now();
    return axios
      .get(`${YT_API}/search?_=${ts}`, {
        params: {
          key: g_creds.api_key,
          part: 'id,snippet',
          type: 'video',
          maxResults: MAX_RESULTS,
          channelId: YT_CHANNEL_ID,
          q,
        },
      })
      .then(({ data: { items } }) => {
        const videos = filterForOurs(items);
        cache.put(key, videos);
        return videos;
      });
  },

  getRelatedVideos: id => {
    const key = `related-${id}`;
    if (cache.has(key)) {
      return new Promise(resolve => {
        resolve(cache.get(key));
      });
    }

    const ts = Date.now();
    return axios
      .get(`${YT_API}/search?_=${ts}`, {
        params: {
          key: g_creds.api_key,
          part: 'id,snippet',
          type: 'video',
          maxResults: MAX_RESULTS,
          relatedToVideoId: id,
        },
      })
      .then(({ data: { items } }) => {
        const videos = filterForOurs(items);
        cache.put(key, videos);
        return videos;
      });
  },
};

namespace('lwcc.api');
window.lwcc.api = api;
export default api;
