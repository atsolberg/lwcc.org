import { css } from '@emotion/react';

import bs from '../../../../postcss_vars';

const styles = css`
  &.sorting-header:hover {
    cursor: pointer;
  }
  &.sorting-header .fa {
    color: ${bs.primary};
  }
  &.sorting-header:not(.active) .fa {
    visibility: hidden;
  }
  &.sorting-header:not(.active):hover .fa {
    visibility: visible;
  }
`;

export default styles;
