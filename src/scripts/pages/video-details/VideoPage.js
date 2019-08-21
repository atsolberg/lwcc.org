import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';

import api from '../../util/api';
import logo from '../../../img/icons/logo-192.png';
import { getParameterByName } from '../../util/misc';

import Hero from '../../components/hero/Hero';
import MediaNav from '../../components/media-nav/MediaNav';
import NewsletterSignup from '../../components/newsletter-signup/NewletterSignup';
import Video from '../../components/video/Video';
import VideoDescription from '../../components/video-description/VideoDescription';

import styles from './styles';
import RelatedVideos from '../../components/related-videos/RelatedVideos';

function VideoPage() {
  const [pages, setPages] = useState([]);
  const [data, setData] = useState(null);
  const id = getParameterByName('id');

  useEffect(() => {
    api.getMediaPages().then(data => setPages(data));
    api.getVideoDetails(id).then((details) => {
      setData(details);
    });
  }, [id]);

  return (
    <div>
      <div className="max-1140" css={styles}>
        <Hero bg="bible" layout="centered" variant="contained" short>
          <img
            alt="logo"
            src={logo}
            css={css`
              width: 50px;
            `}
          />
          <h1>Sermons</h1>
        </Hero>

        <MediaNav className="mb-4" items={pages} variant="mini" />

        <div className="row mb-5">
          <div className="col-12 col-sm-6">
            <Video data={data} />
          </div>
          <div className="col-12 col-sm-6">
            <VideoDescription data={data} />
          </div>
        </div>
      </div>

      <RelatedVideos videoId={id} />
      <NewsletterSignup />
    </div>
  );
}

export default VideoPage;
