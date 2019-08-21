import { css } from '@emotion/core';
import { sm } from '../../../styles/breakpoints';

const styles = css`
  &.video-tile {
    display: block;
    color: #fff;
    text-shadow: 1px 1px 1px black;

    figure {
      position: relative;
      // Keeps the tile from looking bad while image is loading on slow
      // connections. 217 is the img height on an iphone 5.
      min-height: 217px;
    }

    .thumb {
      width: 100%;
      border-radius: 4px;
    }

    figcaption {
      display: flex;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 15px;
    }

    .portrait {
      width: 18%;
      height: 18%;
      border-radius: 50%;
      margin-right: 15px;
    }

    .details {
      font-size: 16px;
      flex-grow: 1;
      align-self: center;
    }
    .title {
      font-size: 20px;
      ${sm} {
        font-size: 24px;
      }
      margin-bottom: 0;
    }
  }
`;

export default styles;
