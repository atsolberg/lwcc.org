import { css } from '@emotion/react';
import bs from '../../../../postcss_vars';
import v from '../../../../exported_scss_vars';
import { desktop, tablet, xl } from '../../../styles/breakpoints';

const styles = css`
  color: #fff;
  font-size: 14px;
  background-color: ${v.darkBarBg};
  padding: 30px 15px;

  a {
    color: #fff;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${bs.primary};
    }

    &.footer-logo-link {
      margin-bottom: 20px;
    }
  }

  strong {
    font-size: 16px;
  }

  .footer-section {
    margin-bottom: 24px;
    ${tablet} {
      margin-bottom: 48px;
    }
  }

  .social-icons {
    margin-left: auto;
    margin-right: auto;
  }

  .social-icon {
    height: 18px;
    &:not(:last-child) {
      margin-right: 30px;
      ${desktop} {
        margin-right: 20px;
      }
      ${xl} {
        margin-right: 30px;
      }
    }
  }
`;

export default styles;
