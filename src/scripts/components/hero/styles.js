import { css } from '@emotion/core';

import { lg, maxWithGutters } from '../../../styles/breakpoints';
import imgWorship from '../../../img/heroes/hero-worship.jpg';
import imgCity from '../../../img/heroes/hero-city.jpg';
import imgBible from '../../../img/heroes/hero-bible.jpg';

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
  &.-short {
    min-height: 200px;
    ${lg} {
      min-height: 220px;
    }
  }


  .hero-content {
    position: relative;

    color: #fff;

    h1 {
      font-size: 38px;
    }
  }

  // Variants - contained, full width
  .max-1140 & {
    ${maxWithGutters} {
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
    ${faded(imgWorship)};
    }
  }

  &.-city {
    background-image: url(${imgCity});
    ${faded(imgCity)};
  }

  &.-bible {
    background-image: url(${imgBible});
    ${faded(imgBible)};
  }
`;

export default styles;
