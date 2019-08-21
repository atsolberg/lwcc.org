import { css } from '@emotion/core';
import { md } from '../../../styles/breakpoints';
import bs from '../../../../postcss_vars';

const styles = css`
  background-color: #f6f6f6;
  padding: 50px 80px;

  .carousel-control-prev {
    transform: translateX(-70%);
  }
  .carousel-control-next {
    transform: translateX(70%);
  }

  .carousel-control-prev,
  .carousel-control-next {
    color: ${bs.primary};
    font-size: 24px;
  }
  .carousel-indicators {
    bottom: -38px;
    li {
      background-color: ${bs.primary};
    }
  }
`;

export default styles;
