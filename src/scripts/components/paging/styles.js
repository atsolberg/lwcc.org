import { css } from '@emotion/core';

import { tablet } from '../../../styles/breakpoints';
import v from '../../../styles/variables';

const styles = css`
  &.paging {
    border-top: 1px solid ${v.gray};
    padding: 15px 0;
    text-align: center;
  }

  .paging-pages {
    font-weight: bold;
    padding: 0 60px;
  }
  .paging-pages li {
    padding: 0 10px;
  }

  .paging-link {
    cursor: pointer;
    &,
    &:hover,
    &:focus {
      color: ${v.primary};
      text-transform: uppercase;
    }
    &.disabled,
    &.disabled:hover,
    &.btn-link[disabled] {
      opacity: 1;
      color: ${v.darkGray};
      cursor: default;
    }
  }

  // to avoid underlining arrow icons
  .paging-pages .paging-link,
  .paging-link .paging-link-label {
    font-weight: bold;

    &,
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .paging-link--prev {
    float: left;
  }
  .paging-link--next {
    float: right;
  }

  ${tablet} {
    .paging-pages li {
      padding: 0 20px;
    }
  }
`;

export default styles;
