import { css } from '@emotion/core';
import bs from '../../../../postcss_vars';
import v from '../../../../exported_scss_vars';

const styles = css`
  color: #fff;
  background-color: ${v.darkBarBg};
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 30px 15px;

  a {
    color: #fff;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${bs.primary};
    }
  }
`;

export default styles;
