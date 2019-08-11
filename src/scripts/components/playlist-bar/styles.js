import { css } from '@emotion/core';

import { sm } from '../../../styles/breakpoints';
import v from '../../../../exported_scss_vars';

const styles = css`
  font-size: 14px;
  ${sm} {
    font-size: 18px;
  }

  ul {
    margin-bottom: 0;

    li:not(:last-child) {
      margin-right: 25px;
    }
  }

  a {
    color: ${v.bodyColor};
    &.active,
    &:hover,
    &:focus {
      color: ${v.primary};
    }
  }
`;

export default styles;
