import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import logo from '../../../img/icons/logo-192.png';
import cfaithLogo from '../../../img/logos/cfaith.png';
import api from '../../util/api';

import Hero from '../../components/hero/Hero';
import MediaNav from '../../components/media-nav/MediaNav';
import NewsletterSignup from '../../components/newsletter-signup/NewletterSignup';
import ThreeUpTile from '../../components/three-up-tile/ThreeUpTile';

import styles from './styles';

function ResourcesPage() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    api.getMediaPages().then((data) => setPages(data));
  }, []);

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
          <h1>Ministry Media</h1>
        </Hero>

        <MediaNav items={pages} centered />

        <Hero className="mb-5" bg="store" layout="centered-v" height="md">
          <div className="mw-480 mr-auto">
            <h2>Mac Hammond Ministries Store</h2>
            <p>
              Conveniently providing Bible-based books and resources as well as
              digital media from our weekly services to help you grow
              spiritually and win in every area of life!
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://store.machammond.org/"
            >
              Store &rarr;
            </a>
          </div>
        </Hero>

        <div className="row">
          <div className="col-12 col-sm-4 mb-5">
            <ThreeUpTile
              bg="mhministries"
              url="http://machammond.org"
              title="Mac Hammond Ministries"
              cta="Learn More"
            />
          </div>
          <div className="col-12 col-sm-4 mb-5">
            <ThreeUpTile
              bg="lhministries"
              url="http://lynnehammond.org/"
              title="Lynne Hammond Ministries"
              cta="Learn More"
            />
          </div>
          <div className="col-12 col-sm-4 mb-5">
            <ThreeUpTile
              bg="bible"
              url="http://www.machammond.com/"
              title="Mac Hammond Free Resources"
              cta="Learn More"
            />
          </div>
        </div>

        <Hero
          className="mb-5"
          bg="logo-blue-440"
          bgColor="section"
          color="dark"
          layout="centered-v"
          height="md"
        >
          <div className="mw-650 mr-auto">
            <img className="mb-4" src={cfaithLogo} alt="cfaith logo" />
            <p>
              Providing access to an ever-expanding library of multimedia
              biblical teachings that will assist and enhance your spiritual
              growth, help you connect with other believers, and strengthen your
              relationship with Jesus Christ.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.cfaith.com/"
            >
              cfaith &rarr;
            </a>
          </div>
        </Hero>

        <Hero
          className="mb-5"
          bg="mhm-blog"
          bgColor="section"
          layout="centered-v"
          height="md"
        >
          <div className="mw-480 mr-auto">
            <h2>Mac Hammond Ministries Blog</h2>
            <p>
              Looking for hope, want to grow spiritually? Visit our MHM blog for
              weekly teachings filled with practical insights and encouragement
              that will strengthen and energize you to run your race of faith to
              the fullest!
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://machammond.org/blog/"
            >
              Read more &rarr;
            </a>
          </div>
        </Hero>
      </div>
    </div>
  );
}

export default ResourcesPage;
