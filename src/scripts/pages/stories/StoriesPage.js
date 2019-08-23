import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';

import logger from '../../util/logger';
import api from '../../util/api';
import logo from '../../../img/icons/logo-192.png';

import Hero from '../../components/hero/Hero';
import MediaNav from '../../components/media-nav/MediaNav';
import PlaylistBar from '../../components/playlist-bar/PlaylistBar';
import VideoSection from '../../components/video-section/VideoSection';
import NewsletterSignup from '../../components/newsletter-signup/NewletterSignup';

import styles from './styles';
import { parseVideo } from '../../util/youtube';

function StoriesPage() {
  const [pages, setPages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [header, setHeader] = useState('');

  const [playlists, setPlaylists] = useState([]);
  const [activePlaylist, setActivePlaylist] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getMediaPages().then(data => setPages(data));

    api.getPlayLists('stories').then(data => {
      setPlaylists(data);

      const [first] = data;
      setHeader(first.title);
      setActivePlaylist(first.id);
      api.getVideosForPlayList(first.pl_id).then(videos => {
        setLoading(false);
        setVideos(videos.map(v => parseVideo(v)));
      });
    });
  }, []);

  /** Select Playlist */
  function onPlaylist({
    target: {
      value,
      dataset: { title },
    },
  }) {
    setActivePlaylist(value);
    setHeader(title);

    const id = playlists.find(pl => pl.id === value).pl_id;

    api.getVideosForPlayList(id).then(videos => {
      setVideos(videos.map(v => parseVideo(v)));
    });
  }

  /** Search all videos */
  function onSearch({ target: { value: q = '' } }) {
    if (q.trim().length > 0) {
      api
        .searchVideos(q)
        .then(videos => {
          setActivePlaylist(null);
          setVideos(videos.map(v => parseVideo(v)));
          setHeader(`Search results for: "${q}"`);
        })
        .catch(err => logger.error('search error: ', err));
    }
  }

  return (
    <div className="row">
      <div className="container-xl" css={styles}>
        <Hero bg="worship" layout="centered" variant="contained">
          <img
            alt="logo"
            src={logo}
            css={css`
              width: 50px;
            `}
          />
          <h1>Ministry Media</h1>
        </Hero>

        <MediaNav items={pages} centered />

        <PlaylistBar
          className="playlist-section"
          lists={playlists}
          active={activePlaylist}
          onSelect={onPlaylist}
          onSearch={onSearch}
        />

        <VideoSection
          loading={loading}
          title={header}
          videos={videos}
          prefix="/media-stories/story"
        />
      </div>

      <div className="container-fluid">
        <NewsletterSignup />
      </div>
    </div>
  );
}

export default StoriesPage;
