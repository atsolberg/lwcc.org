import { css } from '@emotion/react';
import v from '../../../../exported_scss_vars';
import { sm, md } from '../../../styles/breakpoints';

const styles = css`
  // Sizes below are in 'em's so the component will scale up and down with
  // the font size of the list.
  &.media-nav {
    margin-bottom: 0;
    padding: 0.5em 0.8em;

    li {
      position: relative;
      a {
        color: ${v.bodyColor};
        &:hover,
        &:focus {
          text-decoration: none;
        }
      }
      &.active a {
        color: ${v.primary};
      }
    }

    li:not(:last-child) {
      margin-right: 1.2em;
    }

    li:not(:last-child)::after {
      content: '|';
      font-size: 0.75em;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 0.65em;
    }

    // Variants - normal, mini, centered
    &.-normal {
      font-size: 16px;
      ${sm} {
        font-size: 22px;
      }
      ${md} {
        font-size: 30px;
      }
    }

    &.-mini {
      font-size: 14px;
    }

    &.-centered {
      display: flex;
      justify-content: center;
    }
  }
`;

export default styles;
