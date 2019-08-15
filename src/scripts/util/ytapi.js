import gapi from '../non-npm-vendors/gapi';

import { ats_g_creds } from './constants';

const DISCOVERY_DOCS =
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';
const CHANNEL_ID = 'UCqFli9wWwqO3TLknsrAbibw';
const PLAYLIST_ID = 'PL-p9HX8OT1Y5KjmIVdoM7S8vDr81-TU6K';
const SCOPE = 'https://www.googleapis.com/auth/youtube.readonly';
const AUTH_SCOPE = 'https://www.googleapis.com/auth/youtube.force-ssl';
const PARTS = 'snippet,contentDetails,statistics';

// Initialize the API client library
function approach1() {
  function initClient() {
    gapi.client
      .init({
        discoveryDocs: [DISCOVERY_DOCS],
        clientId: g_creds.client_id,
        scope: SCOPE,
      })
      .then(function() {
        // do stuff with loaded APIs
        console.log('it worked');
        gapi.client.youtube.channels
          .list({
            part: PARTS,
            forUsername: CHANNEL_ID,
          })
          .then(resp => {
            console.log('got channels.list resp', resp);
          })
          .catch(err => {
            console.log('got error', err);
          });
      });
  }

  gapi.load('client:auth2', initClient);
}
