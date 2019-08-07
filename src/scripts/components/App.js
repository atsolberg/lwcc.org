import React from 'react';

import '../util/polyfill';
import '../util/hub';
import '../util/cookie';
import '../util/storage';

import '@fortawesome/fontawesome-free/css/all.css';
import '../../styles/styles.scss';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';
import MessagesPage from '../pages/messages/MessagesPage';

/**
 * The top level react component for our site.
 */
function App() {
  return (
    <div id="react-page-container">
      <Header />
      <Main>
        {/* Later this might be a SPA with react router routes here */}
        <MessagesPage />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
