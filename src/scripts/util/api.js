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
};

namespace('lwcc.api', api);
export default api;
