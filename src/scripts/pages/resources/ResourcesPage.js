import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';

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
    api.getMediaPages().then(data => setPages(data));
  }, []);

  return (
    <div className="row">
      <div className="container-xl" css={styles}>
        <Hero bg="worship" layout="centered">
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
            <h2>LW Store</h2>
            <p>
              Find the details you need and get your questions answered to make
              your first visit to Living Word comfortable and meaningful for you
              and your family.
            </p>
            <a href="http://store.lwcc.org/">Store &rarr;</a>
          </div>
        </Hero>

        <div className="row mb-5">
          <div className="col-12 col-sm-4">
            <ThreeUpTile
              bg="mhministries"
              url="http://machammond.org"
              title="Mac Hammond Ministries"
              cta="Learn More"
            />
          </div>
          <div className="col-12 col-sm-4">
            <ThreeUpTile
              bg="lhministries"
              url="http://lynnehammond.org/"
              title="Lynne Hammond Ministries"
              cta="Learn More"
            />
          </div>
          <div className="col-12 col-sm-4">
            <ThreeUpTile
              bg="location-bp"
              url="#"
              title="Living Word Resources"
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
              Find the details you need and get your questions answered to make
              your first visit to Living Word comfortable and meaningful for you
              and your family.
            </p>
            <a href="https://www.cfaith.com/">cfaith &rarr;</a>
          </div>
        </Hero>
      </div>

      <div className="container-fluid">
        <NewsletterSignup />
      </div>
    </div>
  );
}

export default ResourcesPage;
