import { css } from '@emotion/core';
import v from '../../../../exported_scss_vars';
import { sm, md } from '../../../styles/breakpoints';

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