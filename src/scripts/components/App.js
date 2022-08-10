import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
import StoriesPage from '../pages/stories/StoriesPage';
import ResourcesPage from '../pages/resources/ResourcesPage';
import VideoPage from '../pages/video/VideoPage';
import { useAppState } from '../state-providers/app/AppStateProvider';
import testImg from '../../img/video-placeholder.jpg';

/**
 * The top level react component for our site.
 */
function App() {
  const { dispatch } = useAppState();

  // Detect connection speed and set in store.
  useEffect(() => {
    const startTime = new Date().getTime();
    const download = new Image();
    download.onload = () => {
      const endTime = new Date().getTime();
      const speed = endTime - startTime;
      dispatch({ type: 'speed', payload: speed });
    };

    const url = `${testImg}?_=${startTime}`;
    download.src = url;
  }, [dispatch]);

  return (
    <div id="react-page-container">
      <Header />
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/media-sermons" element={<SermonsPage />} />
            <Route path="/media-sermons.html" element={<SermonsPage />} />
            <Route path="/media-stories" element={<StoriesPage />} />
            <Route path="/media-resources" element={<ResourcesPage />} />
            <Route path="/media-sermons/sermon" element={<VideoPage />} />
            <Route path="/media-stories/story" element={<VideoPage />} />
            <Route path="/media-video" element={<VideoPage />} />
          </Routes>
        </BrowserRouter>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
