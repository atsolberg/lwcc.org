import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';

import api from '../../util/api';
import logo from '../../../img/icons/logo-192.png';
import { getFlatPathName, getParameterByName } from '../../util/misc';

import Hero from '../../components/hero/Hero';
import MediaNav from '../../components/media-nav/MediaNav';
import NewsletterSignup from '../../components/newsletter-signup/NewletterSignup';
import Video from '../../components/video/Video';
import VideoDescription from '../../components/video-description/VideoDescription';

import styles from './styles';
import RelatedVideos from '../../components/related-videos/RelatedVideos';

function getHeroData() {
  const path = getFlatPathName();
  const data = {
    title: 'Ministry Media',
    bg: 'connected',
  };

  if (path.startsWith('mediasermons')) {
    data.title = 'Sermons';
    data.bg = 'bible';
  }
  if (path.startsWith('mediastories')) {
    data.title = 'Stories';
    data.bg = 'connected';
  }

  return data;
}

function VideoPage() {
  const [pages, setPages] = useState([]);
  const [data, setData] = useState(null);
  const id = getParameterByName('id');
  const heroData = getHeroData();

  useEffect(() => {
    api.getMediaPages().then(data => setPages(data));
    api.getVideoDetails(id).then(details => {
      setData(details);
    });
  }, [id]);

  return (
    <div className="row">
      <div className="container-xl" css={styles}>
        <Hero bg="media" layout="centered">
          <img
            alt="logo"
            src={logo}
            css={css`
              width: 50px;
            `}
          />
          <h1>{heroData.title}</h1>
        </Hero>

        <MediaNav className="mb-4" items={pages} variant="mini" />

        <div className="row mb-5">
          <div className="col-12 col-sm-6 mt-3">
            <Video data={data} />
          </div>
          <div className="col-12 col-sm-6 mt-3">
            <VideoDescription data={data} />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <RelatedVideos videoId={id} />
      </div>
    </div>
  );
}

export default VideoPage;
