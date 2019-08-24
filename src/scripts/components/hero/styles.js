import { css } from '@emotion/core';

import { lg, max } from '../../../styles/breakpoints';
import jpegs from '../../../img/heroes/*.jpg';
import pngs from '../../../img/heroes/*.png';

const imgs = { ...jpegs, ...pngs };

function faded(img) {
  return css`
    &.-faded {
      background-image: linear-gradient(
          rgba(101, 203, 201, 0.7),
          rgba(101, 203, 201, 0.7)
        ),
        url(${img});
    }
  `;
}

const styles = css`
  background-color: #fff;
  background-position: center;
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  height: auto;
  padding: 4% 0;

  // Sizes - normal, short
  min-height: 265px;
  ${lg} {
    min-height: 440px;
  }
  &.-md {
    min-height: 265px;
    ${lg} {
      min-height: 340px;
    }
  }
  &.-sm {
    min-height: 200px;
    ${lg} {
      min-height: 220px;
    }
  }

  .hero-content {
    position: relative;
    padding-left: 10%;
    padding-right: 10%;

    h1 {
      font-size: 38px;
    }
  }

  // Variants - contained, full width
  .container-xl & {
    ${max} {
      border-radius: 4px;
      margin-left: 0;
      margin-right: 0;
    }
  }

  // Layouts
  &.-centered .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &.-centered-v .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const bgs = Object.keys(imgs).reduce((result, name) => {
  const img = imgs[name];
  result[name.replace('hero-', '')] = css`
    background-image: url(${img});
    ${faded(img)};
  `;
  return result;
}, {});

export default styles;
