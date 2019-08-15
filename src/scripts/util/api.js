/**
 * Api module for the site, all ajax requests should live here.
 * @module api
 */
import axios from 'axios';

import { namespace } from './object';
import { g_creds, host } from './constants';
import { isDevMode } from './misc';
import TEST_PL_ITEMS_DATA from '../__tests__/data/pl_items_the_simple_life';
import TEST_PL_DATA from '../__tests__/data/pl_the_simple_life';

const TEST_PL_ID = 'PL7LE6jm_pt7yg5Xw-z1HS8T-wEacfYy2r';
const WORSHIP_PL_ID = 'PL7LE6jm_pt7z29u9zIYPbwNY73jm6FqGU';

const YT_API = 'https://www.googleapis.com/youtube/v3';

const api = {
  /**
   * Fetch all menus for the site, or particular menus if specified.
   */
  getMenus: (...ids) => {
    // Fetch all
    if (!ids.length) {
      return axios.get(`${host}/wp-json/menus/v1/menus`);
    }
    // Fetch the one specified
    if (ids.lenth === 1) {
      return axios.get(`${host}/wp-json/menus/v1/menus/${ids[0]}`);
    }
    // Fetch all specified
    return Promise.all(
      ids.map(id => axios.get(`${host}/wp-json/menus/v1/menus/${id}`))
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
          url: '/ministry-media-sermons',
        },
        {
          title: 'Stories',
          url: '/ministry-media-stories',
        },
        {
          title: 'Resources',
          url: '/ministry-media-resources',
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
      if (page === 'sermons')
        resolve([
          {
            id: 'series',
            title: 'Current Series',
            pl_id: TEST_PL_ID,
          },
          {
            id: 'weekend',
            title: 'Weekend Services',
            pl_id: TEST_PL_ID,
          },
          {
            id: 'wednesdays',
            title: 'Wednesdays',
            pl_id: TEST_PL_ID,
          },
          {
            id: 'guest',
            title: 'Guest',
            pl_id: 'PL7LE6jm_pt7yXaIukwACfPn8GWamj7NGO',
          },
          {
            id: 'st-paul',
            title: 'St. Paul',
            pl_id: TEST_PL_ID,
          },
          {
            id: 'northwest',
            title: 'Northwest',
            pl_id: TEST_PL_ID,
          },
          {
            id: 'spanish',
            title: 'Iglesia Espanol',
            pl_id: TEST_PL_ID,
          },
        ]);
    });

    return playlists;
  },

  /**
   * Get the current series playlist name from the cms.
   * This may come from the api later, hardcoded for now.
   * @return {Promise<string>}
   */
  getCurrentSeriesId: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(TEST_PL_ID);
      }, 500);
    });
  },

  getVideosForPlayList: id => {
    if (isDevMode()) {
      return new Promise(resolve => {
        resolve(TEST_PL_ITEMS_DATA);
      });
    }

    return axios.get(`${YT_API}/playlistItems`, {
      params: {
        key: g_creds.api_key,
        part: 'snippet,contentDetails',
        playlistId: id,
      },
    });
  },

  getPlayList: id => {
    if (isDevMode()) {
      return new Promise(resolve => {
        resolve(TEST_PL_DATA);
      });
    }

    return axios.get(`${YT_API}/playlists`, {
      params: {
        key: g_creds.api_key,
        part: 'snippet',
        id,
      },
    });
  },

  getVideoDetails: id => {
    return axios.get(`${YT_API}/videos`, {
      params: {
        key: g_creds.api_key,
        part: 'snippet',
        id,
        fields: 'items(snippet(title,description,tags))',
      },
    });
  },
};

namespace('lwcc.api', api);
export default api;
