import { css } from '@emotion/core';
import bs from '../../../../postcss_vars';
import v from '../../../../exported_scss_vars';
import { desktop } from '../../../styles/breakpoints';

const styles = css`
  .navbar-topper {
    height: 50px;
    line-height: 50px;
    background-color: ${v.darkBarBg};
    color: #fff;
    font-size: 14px;

    a,
    button {
      margin-left: 30px;
      color: #fff;

      &.link-primary {
        color: ${bs.primary};
        margin-left: 0;
      }
    }
  }

  .searchbar {
    background-color: ${bs.light};
  }

  .navbar {
    color: ${bs.dark};
    width: 100%;

    ${desktop} {
      .dropdown-toggle::after {
        display: none;
      }

      .nav-link {
        margin-left: 16px;

        &.here {
          color: ${bs.primary};
        }
      }
    }
  }
`;

export default styles;
