import { css } from '@emotion/core';
import v from '../../../../exported_scss_vars';
import { sm, md } from '../../../styles/breakpoints';

const styles = css`
  &.media-nav {
    position: relative;
    font-size: 16px;
    padding: 15px 26px;
    display: flex;
    justify-content: center;
    margin-bottom: 0;

    ${sm} {
      font-size: 22px;
    }

    ${md} {
      font-size: 30px;
    }

    li {
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
      margin-right: 36px;
    }

    li:not(:last-child)::after {
      content: '|';
      font-size: 0.75em;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 15px;
    }
  }
`;

export default styles;
