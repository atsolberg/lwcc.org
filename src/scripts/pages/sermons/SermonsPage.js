import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import gapi from '../../non-npm-vendors/gapi';

import logger from '../../util/logger';
import api from '../../util/api';
import { g_creds } from '../../util/constants';
import logo from '../../../img/icons/logo-192.png';

import MessagesProvider from '../../state-providers/messages/MessagesProvider';
import Hero from '../../components/hero/Hero';
import SubNav from '../../components/media-nav/MediaNav';
import PlaylistBar from '../../components/playlist-bar/PlaylistBar';
import VideoSection from '../../components/video-section/VideoSection';
import NewsletterSignup from '../../components/newsletter-signup/NewletterSignup';

import styles from './styles';

// Initialize the API client library
function approach1() {
  function initClient() {
    gapi.client
      .init({
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
        ],
        clientId: g_creds.client_id,
        scope: 'https://www.googleapis.com/auth/youtube.readonly',
      })
      .then(function() {
        // do stuff with loaded APIs
        console.log('it worked');
        gapi.client.youtube.channels
          .list({
            part: 'snippet,contentDetails,statistics',
            forUsername: 'UCqFli9wWwqO3TLknsrAbibw',
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

function approach2() {
  function authenticate() {
    return gapi.auth2
      .getAuthInstance()
      .signIn({ scope: 'https://www.googleapis.com/auth/youtube.force-ssl' })
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
    gapi.client.setApiKey(g_creds.api_key);
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

  function execute() {
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
        part: 'snippet,contentDetails,statistics',
        forUsername: 'UCqFli9wWwqO3TLknsrAbibw',
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

  authenticate().then(loadClient);
}

function SermonsPage() {
  const [pages, setPages] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [currentSeriesName, setCurrentSeriesName] = useState('');
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Authenticate for Youtube data
    approach2();

    api.getMediaPages().then(data => setPages(data));
    api.getPlayLists('sermons').then(data => setPlaylists(data));
    api.getCurrentSeriesPlaylistName().then(name => {
      setCurrentSeriesName(name);
      api.getVideosForPlayList(name).then(data => {
        setLoading(false);
        setVideos(data);
      });
    });
  }, []);

  function onPlaylist({ target: { value } }) {
    logger.log('playlist clicked', value);
  }

  return (
    <MessagesProvider>
      <div className="max-1140" css={styles}>
        <Hero bg="worship" layout="centered" variant="contained">
          <img
            alt="logo"
            src={logo}
            css={css`
              max-width: 50px;
            `}
          />
          <h1>Ministry Media</h1>
        </Hero>

        <SubNav items={pages} />

        <PlaylistBar
          className="playlist-section"
          lists={playlists}
          onPlaylist={onPlaylist}
        />

        <VideoSection
          loading={loading}
          title={currentSeriesName}
          videos={videos}
        />
      </div>

      <NewsletterSignup />
    </MessagesProvider>
  );
}

export default SermonsPage;
