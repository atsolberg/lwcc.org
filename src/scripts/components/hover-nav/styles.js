import { css } from '@emotion/react';
import { mobile } from '../../../styles/breakpoints';

const styles = css`
  .dropdown-menu {
    margin-top: 0;
  }

  // Remove the dropdown arrows, and dropdown menus for now
  ${mobile} {
    .dropdown-toggle::after {
      display: none;
    }
    .dropdown-menu.show {
      display: none;
    }
  }
`;

export default styles;
