import React from 'react';
import { css } from '@emotion/core';
import MessagesProvider from '../../state-providers/messages/MessagesProvider';
import Hero from '../../components/hero/Hero';

import logo from '../../../img/icons/logo-192.png';

function MessagesPage() {
  return (
    <MessagesProvider>
      <div className="max-1140">
        <Hero className="row tac hero-centered-v">
          <img
            src={logo}
            css={css`
              max-width: 50px;
            `}
          />
          <h1>Ministry Media</h1>
        </Hero>
      </div>
    </MessagesProvider>
  );
}

export default MessagesPage;
