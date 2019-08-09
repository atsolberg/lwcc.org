import React from 'react';
import styles from './styles';

/**
 * Footer component for the site.
 */
function Footer() {
  return (
    <footer css={styles}>
      <a
        href="https://github.com/atsolberg/lwcc.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Footer Link
      </a>{' '}
    </footer>
  );
}

export default Footer;
