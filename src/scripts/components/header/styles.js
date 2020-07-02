import { css } from '@emotion/core';
import bs from '../../../../postcss_vars';
import v from '../../../../exported_scss_vars';
import { mobile, tablet, md } from '../../../styles/breakpoints';

const styles = css`
  .navbar-topper {
    height: 50px;
    line-height: 50px;
    background-color: ${v.darkBarBg};
    color: #fff;
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;

    a,
    button {
      margin-left: 15px;
      color: #fff;

      &.link-primary {
        color: ${bs.primary};
        margin-left: 0;
      }
    }

    .search-btn {
      min-width: 42px; // search icon is wider than close, stops the jitter
      margin-left: 10px;
      @media (min-width: 375px) {
        margin-left: 30px;
      }
    }

    ${tablet} {
      a,
      button {
        margin-left: 30px;
      }
    }
  }

  /* MAIN NAV
  --------------------------------------------------------------- */

  .navbar-light {
    color: ${bs.dark};
    width: 100%;

    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    ${md} {
      padding-top: 1.8rem;
      padding-bottom: 1.8rem;
    }

    /* HAMBURGER MENU
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
    .navbar-toggler:not(.collapsed) .icon-bar:nth-of-type(2) {
      top: 6px;
      transform: rotate(45deg);
    }
    .navbar-toggler:not(.collapsed) .icon-bar:nth-of-type(3) {
      background-color: transparent;
    }
    .navbar-toggler:not(.collapsed) .icon-bar:nth-of-type(4) {
      top: -6px;
      transform: rotate(-45deg);
    }

    /* MENU ITEMS
    --------------------------------------------------------------- */
    .nav-link.here {
      color: ${bs.primary};
    }

    ${md} {
      .nav-link {
        // Use smaller font between 768 and 840 since we don't have room,
        // bump it back up after 840.
        font-size: 14px;

        // Primary color when on that page
        &.here {
          color: ${bs.primary};
        }
      }

      // Hide dropdown arrows
      .dropdown-toggle::after {
        display: none;
      }
    }

    @media (min-width: 840px) {
      .nav-link {
        font-size: inherit;
        margin-left: 16px;
      }
    }
  }

  /* MENU NAV - make it dark background with light text
    --------------------------------------------------------------- */
  ${mobile} {
    .navbar-collapse {
      margin-left: -30px;
      margin-right: -30px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: ${v.darkBarBg};
    }
    .navbar-light .navbar-nav .nav-link {
      color: #fff;

      // Primary color when on that page
      &.here {
        color: ${bs.primary};
      }
    }
  }
`;

export default styles;
