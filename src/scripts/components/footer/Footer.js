import React from 'react';
import styles from './styles';

function Footer() {
  return (
    <footer css={styles}>
      Built by{' '}
      <a
        href="https://github.com/atsolberg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        atsolberg
      </a>{' '}
      with ⚛
    </footer>
  );
}

export default Footer;
