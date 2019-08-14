/**
 * Api module for the site, all ajax requests should live here.
 * @module api
 */
import axios from 'axios';

import { namespace } from './object';
import { g_creds, host } from './constants';
import { isDevMode } from './misc';
import TEST_PL_ITEMS_DATA from '../__tests__/data/pl_items_pauls_wrestling';
import TEST_PL_DATA from '../__tests__/data/pl_pauls_wrestling';

const TEST_PL_ID = 'PL-p9HX8OT1Y5KjmIVdoM7S8vDr81-TU6K';
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
            title: 'Weekend Services',
            slug: TEST_PL_ID,
          },
          {
            title: 'Wednesdays',
            slug: TEST_PL_ID,
          },
          {
            title: 'Guest',
            slug: TEST_PL_ID,
          },
          {
            title: 'St. Paul',
            slug: TEST_PL_ID,
          },
          {
            title: 'Northwest',
            slug: TEST_PL_ID,
          },
          {
            title: 'Iglesia Espanol',
            slug: TEST_PL_ID,
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
  getCurrentSeriesPlaylistName: () => {
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
        maxResults: '20',
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
};

namespace('lwcc.api', api);
export default api;
