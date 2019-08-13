import { css } from '@emotion/core';

import { desktop, max } from '../../../styles/breakpoints';
import imgWorship from '../../../img/heroes/hero-worship.jpg';
import imgCity from '../../../img/heroes/hero-city.jpg';

const styles = css`
  background-color: #fff;
  background-position: center;
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  height: auto;
  min-height: 265px;
  ${desktop} {
    min-height: 440px;
  }

  padding: 4% 0;

  .hero-content {
    position: relative;

    color: #fff;

    h1 {
      font-size: 38px;
    }
  }

  // Variants - contained, full width
  &.-contained {
    ${max} {
      border-radius: 4px;
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

  // Backgrounds
  &.-worship {
    background-image: url(${imgWorship});
    &.-faded {
      background-image: linear-gradient(
          rgba(101, 203, 201, 0.7),
          rgba(101, 203, 201, 0.7)
        ),
        url(${imgWorship});
    }
  }

  &.-city {
    background-image: url(${imgCity});
    &.-faded {
      background-image: linear-gradient(
          rgba(101, 203, 201, 0.7),
          rgba(101, 203, 201, 0.7)
        ),
        url(${imgCity});
    }
  }
`;

export default styles;
