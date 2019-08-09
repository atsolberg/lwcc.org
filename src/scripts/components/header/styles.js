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

  /* MAIN NAV
  --------------------------------------------------------------- */

  .navbar-light {
    color: ${bs.dark};
    width: 100%;

    /* HAMBURGER TOGGLE
      --------------------------------------------------------------- */

    .navbar-toggler {
      border: none;
      background-color: transparent;
      transition: 0.3s;

      &:focus,
      &:hover {
        background-color: transparent;
      }
    }

    .navbar-toggler .icon-bar {
      background-color: ${bs.primary};
      display: block;
      width: 22px;
      height: 2px;
      border-radius: 1px;
    }
    .navbar-toggler .icon-bar + .icon-bar {
      margin-top: 4px;
    }

    // Cross on collapse
    .navbar-toggler .icon-bar {
      position: relative;
      transition: 0.3s;
    }
    .navbar-toggler.collapsed .icon-bar:nth-of-type(2) {
      top: 6px;
      transform: rotate(45deg);
    }
    .navbar-toggler.collapsed .icon-bar:nth-of-type(3) {
      background-color: transparent;
    }
    .navbar-toggler.collapsed .icon-bar:nth-of-type(4) {
      top: -6px;
      transform: rotate(-45deg);
    }

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

    /* MENU ITEMS
    --------------------------------------------------------------- */
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
