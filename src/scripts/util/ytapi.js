import gapi from '../non-npm-vendors/gapi';
import axios from 'axios';

import { g_creds } from './constants';
import logger from './logger';

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

export function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: AUTH_SCOPE })
    .then(
      () => {
        logger.log('Sign-in successful');
      },
      err => {
        logger.error('Error signing in', err);
      }
    );
}

export function loadClient() {
  gapi.client.setApiKey(g_creds.api_key);
  return gapi.client.load(DISCOVERY_DOCS).then(
    () => {
      logger.log('GAPI client loaded for API');
    },
    err => {
      logger.error('Error loading GAPI client for API', err);
    }
  );
}

export function execute() {
  // return gapi.client.youtube.search.list({}).then(
  //   response => {
  //     // Handle the results here (response.result has the parsed body).
  //     logger.log('Response', response);
  //   },
  //   err => {
  //     logger.error('Execute error', err);
  //   }
  // );

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
}

gapi.load('client:auth2', () => {
  logger.log('Loading gapi client...');
  gapi.auth2
    .init({
      client_id: g_creds.client_id,
    })
    .then(() => {
      logger.log('Load complete');
    });
});

export function simple() {
  return axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${g_creds.api_key}&part=snippet,contentDetails&maxResults=20&playlistId=${PLAYLIST_ID}`
  );
}
