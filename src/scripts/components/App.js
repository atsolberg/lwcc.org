import React from 'react';
import { Router } from '@reach/router';

import '../util/polyfill';
import '../util/hub';
import '../util/cookie';
import '../util/storage';

import '@fortawesome/fontawesome-free/css/all.css';
import '../../styles/main.scss';

import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';

import SermonsPage from '../pages/sermons/SermonsPage';
import VideoPage from '../pages/video-details/VideoPage';

/**
 * The top level react component for our site.
 */
function App() {
  return (
    <div id="react-page-container">
      <Header />
      <Main>
        <Router>
          <SermonsPage path="/media-sermons" />
          <VideoPage path="/media-sermons/sermon" />
        </Router>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
