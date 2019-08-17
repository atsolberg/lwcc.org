/**
 * Module to execute api request to Youtube that require OAuth2.
 * @see https://developers.google.com/youtube/v3/live/docs/liveBroadcasts/list
 */
import gapi from '../non-npm-vendors/gapi';

import { ats_g_creds } from './constants';
import logger from './logger';

const ATS_CHANNEL_ID = 'UCqFli9wWwqO3TLknsrAbibw';
const ATS_CLIENT_ID =
  '270265825575-mo560kra42i9es2gi7gshsbudbtmtchv.apps.googleusercontent.com';

/**
 * Sample JavaScript code for youtube.liveBroadcasts.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */

function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: 'https://www.googleapis.com/auth/youtube.readonly' })
    .then(
      () => {
        logger.log('Sign-in successful');
      },
      err => {
        logger.error('Error signing in', err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey(ats_g_creds.api_key);
  return gapi.client
    .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
    .then(
      () => {
        logger.log('GAPI client loaded for API');
      },
      err => {
        logger.error('Error loading GAPI client for API', err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.liveBroadcasts
    .list({
      part: 'status',
      mine: true,
    })
    .then(
      response => {
        // Handle the results here (response.result has the parsed body).
        logger.log('Response', response);
      },
      err => {
        logger.error('Execute error', err);
      }
    );
}

gapi.load('client:auth2', () => {
  gapi.auth2.init({ client_id: ATS_CLIENT_ID });
});

window.ytapi = {
  authAndLoad: () => {
    authenticate().then(loadClient);
  },
  execute,
};
