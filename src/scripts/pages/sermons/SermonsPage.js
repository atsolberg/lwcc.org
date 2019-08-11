import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';

import api from '../../util/api';
import logo from '../../../img/icons/logo-192.png';

import Hero from '../../components/hero/Hero';
import SubNav from '../../components/media-nav/MediaNav';
import PlaylistBar from '../../components/playlist-bar/PlaylistBar';
import MessagesProvider from '../../state-providers/messages/MessagesProvider';

import styles from './styles';

function SermonsPage() {
  const [pages, setPages] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    api.getMediaPages().then(data => setPages(data));
    api.getPlayLists('sermons').then(data => setPlaylists(data));
  }, []);

  return (
    <MessagesProvider>
      <div className="max-1140" css={styles}>
        <Hero className="row tac hero-centered-v">
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
        <PlaylistBar lists={playlists} />
      </div>
    </MessagesProvider>
  );
}

export default SermonsPage;
