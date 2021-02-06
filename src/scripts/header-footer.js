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
  const { head } = document;
  const header = document.createElement('div');
  const footer = document.createElement('div');

  // If header-footer.html is the entry file, the css will be added
  // When header-footer.js is the entry file, we need to add it
  const inject_stylesheet = !window.location.host.match(/vercel\.app$/i);
  if (inject_stylesheet) {
    // Add the stylesheet link
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '/public/scripts/header-footer.css';
    link.onload = () => (header.style.opacity = '1');
    link.onerror = () => (header.style.opacity = '1');

    head.appendChild(link);
  }

  // Remove the old header elements
  const old_top = document.getElementById('top-header');
  const old_header = document.getElementById('main-header');
  const old_footer = document.getElementById('main-footer');

  old_top.parentNode.removeChild(old_top);
  old_header.parentNode.removeChild(old_header);

  const parent = document.getElementById('page-container');

  parent.removeAttribute('style');
  parent.style.paddingTop = '0';

  header.id = 'react-header';
  header.style.opacity = inject_stylesheet ? '1' : '0';
  header.style.transition = 'opacity 400ms ease-in-out';
  parent.prepend(header);

  render(<Header />, header);

  footer.id = 'react-footer';
  old_footer.insertAdjacentElement('afterend', footer);
  old_footer.parentNode.removeChild(old_footer);

  render(<Footer />, footer);
}

docReady(init);
