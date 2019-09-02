import { css } from '@emotion/core';
import { sm, md } from '../../../styles/breakpoints';
import bs from '../../../../postcss_vars';

const styles = css`
  &.related-videos {
    background-color: #f6f6f6;
    padding: 20px 30px;
    ${sm} {
      padding: 50px 80px;
    }

    .carousel-control-prev,
    .carousel-control-next {
      display: none;
    }

    .carousel-control-prev,
    .carousel-control-next {
      color: ${bs.primary};
      font-size: 24px;
    }
    .carousel-indicators {
      display: none;
      ${md} {
        display: flex;
      }
      bottom: -38px;
      li {
        background-color: ${bs.primary};
      }
    }

    .related-videos-carousel {
      display: flex;
      align-items: center;
    }

    .video-tile .title {
      font-size: 14px;
      ${sm} {
        font-size: 16px;
      }
    }

    .video-tile figure {
      min-height: inherit;
    }
  }
`;

export default styles;
