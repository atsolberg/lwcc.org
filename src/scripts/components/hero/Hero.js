import React from 'react';
import { css } from '@emotion/core';

import styles from './styles';

function Hero({ bg, children, ...rest }) {
  return (
    <div
      css={[
        styles,
        css`
          background-image: url(http://52.26.12.22/wp-content/uploads/2019/07/HeaderImage_Hompage.jpg);
        `,
      ]}
      {...rest}
    >
      <div className="container hero-content">{children}</div>
    </div>
  );
}
export default Hero;
