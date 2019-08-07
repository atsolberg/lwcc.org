import { css } from '@emotion/core';

import v from '../../../styles/variables';

const styles = css`
  &.sorting-header:hover {
    cursor: pointer;
  }
  &.sorting-header .fa {
    color: ${v.primary};
  }
  &.sorting-header:not(.active) .fa {
    visibility: hidden;
  }
  &.sorting-header:not(.active):hover .fa {
    visibility: visible;
  }
`;

export default styles;
