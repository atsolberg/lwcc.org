import React from 'react';
import { createRoot } from 'react-dom/client';

import './util/polyfill';
import { docReady } from './util/misc';

import Header from './components/headerv2/Headerv2';
import Footer from './components/footer/Footer';

function init() {
  const { head } = document;
  const header = document.createElement('div');
  const footer = document.createElement('div');

  // Use tailwind's recommended font
  // @see https://tailwindui.com/documentation#optional-add-the-inter-font-family
  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://rsms.me/inter/inter.css';
  head.appendChild(font);

  // If header-footer.html is the entry file, the css will be added
  // When header-footer.js is the entry file, we need to add it
  const existing_css =
    Array.from(document.querySelectorAll('link')).filter((l) =>
      l.href.includes('tw-output')
    ).length > 0;
  const inject_stylesheet =
    !existing_css && !window.location.host.match(/vercel\.app$/i);
  if (inject_stylesheet) {
    console.log('injecting tw-output.css');

    // Add the stylesheet link
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '/public/tw-output.css';
    link.onload = () => (header.style.opacity = '1');
    link.onerror = () => (header.style.opacity = '1');

    head.appendChild(link);
  }

  // Remove the old header/footer elements
  const old_top = document.getElementById('top-header');
  const old_header = document.getElementById('main-header');
  const old_footer = document.getElementById('main-footer');

  old_top.parentNode.removeChild(old_top);
  old_header.parentNode.removeChild(old_header);

  const parent = document.getElementById('page-container');

  parent.removeAttribute('style');
  parent.style.paddingTop = '0';

  header.id = 'react-header';
  header.style.opacity = inject_stylesheet ? '0' : '1';
  header.style.transition = 'opacity 400ms ease-in-out';
  parent.prepend(header);

  const root_header = createRoot(header);
  root_header.render(<Header />);

  footer.id = 'react-footer';
  old_footer.insertAdjacentElement('afterend', footer);
  old_footer.parentNode.removeChild(old_footer);

  const root_footer = createRoot(footer);
  root_footer.render(<Footer />);
}

docReady(init);
