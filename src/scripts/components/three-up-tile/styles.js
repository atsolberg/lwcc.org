import { css } from '@emotion/core';
import v from '../../../../exported_scss_vars';

const styles = css`
  &.three-up-tile {
    img {
      width: 100%;
    }

    .cta {
      background-color: ${v.sectionBg};
      padding: 30px 18%;
      text-align: center;
    }
    .title {
      font-size: 15px;
      margin-bottom: 22px;
    }
  }
`;

export default styles;
