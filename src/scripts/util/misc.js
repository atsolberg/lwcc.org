/**
 * MISC UTILS
 */

import { pad } from './string';

// Is the browser in debug mode
let debugMode = false;

export const timezone =
  'Intl' in window
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : 'America/Chicago';

/**
 * Parses the inner text contents of 'selector' as JSON and returns it.
 * Returns undefined if not target is found for 'selector'.
 * @param {string} selector - The css selector to the element parse text contents of.
 */
export const json = selector => {
  const target = $(selector);
  return target.length ? JSON.parse(target.text()) : undefined;
};

export const formats = {
  date: {
    SIMPLE: date =>
      date.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
      }),

    MONTH_ABR_DAY_YEAR: date =>
      date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),

    MONTH_DAY_YEAR: date => date.toLocaleDateString('en-US'),

    /* eslint-disable prefer-template */
    /* See https://www.iso.org/iso-8601-date-and-time-format.html */
    ISO: date =>
      date.getUTCFullYear() +
      '-' +
      pad(date.getUTCMonth() + 1, 2) +
      '-' +
      pad(date.getUTCDate(), 2),
    /* eslint-enable prefer-template */
  },
  time: {
    SIMPLE: time =>
      time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short',
      }),

    ARMY: time =>
      time.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      }),

    PRECISE: time =>
      `${pad(time.getHours(), 2)}` +
      `:${pad(time.getMinutes(), 2)}` +
      `:${pad(time.getSeconds(), 2)}` +
      `.${pad(time.getMilliseconds(), 3)}`,
  },
  datetime: {
    SIMPLE: datetime =>
      datetime.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short',
      }),
  },
};

/** Formatters */
export const format = {
  /**
   ** Format a Date object into a date, with the browser's timezone and a configurable format
   * @param {Date} [date] - Unix timestamp to format as a readable date-time. Defaults to now.
   * @param {Function} [formatter] - The format to use. Defaults to 'MMM D, YYYY'.
   */
  date: (date = new Date(), formatter = formats.date.MONTH_ABR_DAY_YEAR) =>
    // TODO: Remove this new Date() and validate usages
    formatter(new Date(date)),
};

/** Returns the browser locale. Defaults to `en-US`. */
export const locale = () =>
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  'en-US';

/** Retrieve a request parameter by name. */
export const getParameterByName = (name, url = window.location.href) => {
  const sanitizedName = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regexS = `[\\?&]${sanitizedName}=([^&#]*)`;
  const results = new RegExp(regexS, 'i').exec(url);

  if (results === null) {
    return null;
  }
  return decodeURIComponent(results[1].replace(/\+/g, ' '));
};

/** Turns a path into just letters */
export function getFlatPathName(url = window.location.pathname) {
  return url.replace(new RegExp('[^\\w]', 'g'), '');
}

/**
 * Get Element by ID
 * @param id
 * @returns {HTMLElement | null}
 */
export const gebi = id => document.getElementById(id);

debugMode = getParameterByName('debug') !== null;
export const isDebugMode = () => debugMode;

export const isDevMode = () => window.location.hostname === 'localhost';
