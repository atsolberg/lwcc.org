import { css } from '@emotion/core';
import { sm } from '../../../styles/breakpoints';

const styles = css`
  .playlist-section,
  .videos-section {
    margin-bottom: 30px;
    ${sm} {
      margin-bottom: 42px;
    }
  }
`;

export default styles;
