import { css } from '@emotion/core';

import { sm } from '../../../styles/breakpoints';
import v from '../../../../exported_scss_vars';
import bs from '../../../../postcss_vars';

const styles = css`
  &.playlist-bar {
    font-size: 14px;
    ${sm} {
      font-size: 18px;
    }

    .playlist-list {
      overflow-x: auto;
      white-space: nowrap;
    }

    a {
      color: ${v.bodyColor};
      &.active,
      &:hover,
      &:focus {
        color: ${v.primary};
      }
    }

    ${sm} {
      display: flex;
      justify-content: space-between;

      .playlist-list {
        flex-grow: 1;
        margin-bottom: 0;
        margin-right: 15px;
        overflow-x: inherit;
        white-space: normal;

        .btn:not(.active) {
          color: ${bs.dark};
        }
      }

      .playlist-search {
        // Without setting align-content, the button takes up all vertical space,
        // Might be a bootstrap bug
        align-content: center;
        max-width: 275px;

        .input-group-append {
          align-self: flex-start;
        }
      }
    }
  }
`;

export default styles;
