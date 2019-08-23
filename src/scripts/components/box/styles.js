import { css } from '@emotion/core';

import v from '../../../../exported_scss_vars';
import { sm, max } from '../../../styles/breakpoints';

const styles = css`
  &.box {
    background-color: ${v.sectionBg};
    font-size: 14px;

    .container-xl & {
      ${max} {
        border-radius: 4px;
        margin-left: 0;
        margin-right: 0;
      }
    }
  }

  .box-content {
    padding: 15px;

    ${sm} {
      font-size: 18px;
      padding: 32px 70px;
    }
  }
`;

export default styles;
