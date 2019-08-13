/**
 * Api module for the site, all ajax requests should live here.
 * @module api
 */
import axios from 'axios';

import { namespace } from './object';
import { host } from './constants';

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
            slug: 'weekend-services',
          },
          {
            title: 'Wednesdays',
            slug: 'wednesdays',
          },
          {
            title: 'Guest',
            slug: 'guest',
          },
          {
            title: 'St. Paul',
            slug: 'st-paul',
          },
          {
            title: 'Northwest',
            slug: 'northwest',
          },
          {
            title: 'Iglesia Espanol',
            slug: 'spanish',
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
        resolve("Paul's Wrestling");
      }, 500);
    });
  },

  getVideosForPlayList: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{ name: 'some video', author: 'some guy' }]);
      }, 500);
    });
  },
};

namespace('lwcc.api', api);
export default api;
