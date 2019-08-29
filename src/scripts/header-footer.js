import React from 'react';
import { render } from 'react-dom';
import './util/polyfill';
import './util/hub';
import './util/cookie';
import './util/storage';

import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/main.scss';
import { docReady } from './util/misc';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function init() {
  // Add css, but why do I need to do this?
  const { head } = document;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = '/public/scripts/header-footer.css';

  head.appendChild(link);

  // Remove the old header elements
  const old_top = document.getElementById('top-header');
  const old_header = document.getElementById('main-header');
  const old_footer = document.getElementById('main-footer');

  old_top.parentNode.removeChild(old_top);
  old_header.parentNode.removeChild(old_header);

  const header = document.createElement('div');
  const footer = document.createElement('div');
  const parent = document.getElementById('page-container');
  parent.removeAttribute('style');
  parent.style.paddingTop = '0';

  parent.prepend(header);

  render(<Header />, header);

  old_footer.insertAdjacentElement('afterend', footer);
  old_footer.parentNode.removeChild(old_footer);

  render(<Footer />, footer);
}

docReady(init);