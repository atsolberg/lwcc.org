import JsCookie from 'js-cookie';

/** Retrieve a request parameter by name. */
export const getParameterByName = (name, url = window.location.href) => {
  const sanitizedName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regexS = `[\\?&]${sanitizedName}=([^&#]*)`;
  const results = new RegExp(regexS, 'i').exec(url);

  if (results === null) {
    return null;
  }
  return decodeURIComponent(results[1].replace(/\+/g, ' '));
};

/**
 * Get Element by ID
 * @param id
 * @returns {HTMLElement | null}
 */
export const gebi = (id) => document.getElementById(id);

/**
 * A suitable replacement for jquery's document ready
 * @param callback
 */
export function docReady(callback) {
  // in case the document is already rendered
  if (document.readyState !== 'loading') {
    callback();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    console.warn('Could not fire docReady callback :(');
  }
}

export function isDebugMode() {
  return JsCookie.get('debug') === 'true';
}

/**
 * Set the debug cookie
 * @param {boolean} value
 */
export function setDebugMode(value) {
  JsCookie.set('debug', value);
}

export function toggleDebugMode() {
  setDebugMode(!isDebugMode());
}
window.toggleDebugMode = toggleDebugMode;
