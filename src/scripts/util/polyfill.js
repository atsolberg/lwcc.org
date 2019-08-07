/**
 * A moderate set of polyfills.
 * Probably should just let babel do this programmatically for last 2 versions
 * of supported browsers.
 */

import 'url-polyfill';
import 'custom-event-polyfill';

import 'core-js/es/array/includes';
import 'core-js/es/array/find';
import 'core-js/es/array/find-index';
import 'core-js/es/array/from';
import 'core-js/es/object/assign';
import 'core-js/es/object/values';
import 'core-js/es/object/entries';
import 'core-js/es/string/ends-with';
import 'core-js/es/string/includes';
import 'core-js/es/string/starts-with';
import 'core-js/es/string/trim';
import 'core-js/es/set';
import 'core-js/es/map';

/**
 * String.prototype.contains
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#String.prototype.contains
 *
 * Still needed because of a recent rename of 'contains' to 'includes'.
 */
if (!String.prototype.contains) {
  String.prototype.contains = String.prototype.includes; // eslint-disable-line no-extend-native
}
