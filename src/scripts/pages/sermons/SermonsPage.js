import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';

import logger from '../../util/logger';
import api from '../../util/api';
import { simple } from '../../util/ytapi';
import logo from '../../../img/icons/logo-192.png';

import MessagesProvider from '../../state-providers/messages/MessagesProvider';
import Hero from '../../components/hero/Hero';
import SubNav from '../../components/media-nav/MediaNav';
import PlaylistBar from '../../components/playlist-bar/PlaylistBar';
import VideoSection from '../../components/video-section/VideoSection';
import NewsletterSignup from '../../components/newsletter-signup/NewletterSignup';

import styles from './styles';

function SermonsPage() {
  const [pages, setPages] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [currentSeriesName, setCurrentSeriesName] = useState('');
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Authenticate for Youtube data
    simple()
      .then(data => console.log('youtube data', data))
      .catch(err => console.log('youtube error', err));

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
