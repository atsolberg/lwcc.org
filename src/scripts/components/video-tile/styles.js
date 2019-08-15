import { css } from '@emotion/core';
import { sm, md } from '../../../styles/breakpoints';

const styles = css`
  &.video-tile {
    display: block;
    color: #fff;
    text-shadow: 1px 1px 1px black;

    figure {
      position: relative;
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
      padding-left: 15px;
      padding-bottom: 15px;
    }

    .portrait {
      width: 65px;
      height: 65px;
      ${md} {
        width: 89px;
        height: 89px;
      }
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
