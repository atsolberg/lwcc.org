import { css } from '@emotion/core';

import { desktop, max } from '../../../styles/breakpoints';

const styles = css`
  height: auto;
  min-height: 265px;
  ${desktop} {
    min-height: 440px;
  }

  padding: 4% 0;
  background-color: #fff;
  background-position: center;
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  ${max} {
    border-radius: 4px;
  }

  .hero-content {
    position: relative;

    color: #fff;

    h1 {
      font-size: 38px;
    }
  }

  &.hero-centered-v .hero-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default styles;
