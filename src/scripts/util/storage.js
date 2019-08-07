/**
 * Module to store data as json in local storage.
 * Data is storage as stringified json since local storage
 * only supports string values.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 */

import logger from './logger';
import { namespace } from './object';

namespace('lwcc.storage');

const mod = {};

const _name = 'lwcc';

/**
 * Retrieve value stored in local storage.
 * @param {string} key - The key to lookup the value, will be prefixed with 'lwcc-'.
 * @param {string} defaultValue - Returned if the key is not found.
 */
mod.get = (key, defaultValue) => {
  const value = JSON.parse(localStorage[`${_name}-${key}`] || null);
  return value || defaultValue;
};

/**
 * Sets a value in local storage.
 * @param {string} key - The key to store the value at, will be prefixed with 'lwcc-'.
 * @param {string} value - Value to store.
 */
mod.set = (key, value) => {
  try {
    localStorage[`${_name}-${key}`] = JSON.stringify(value);
  } catch (e) {
    logger.error(`localStorage set failed`, `key: ${key}`, `value:`, value);
  }
};

mod.getName = () => _name;

window.lwcc.storage = mod;
export default mod;
