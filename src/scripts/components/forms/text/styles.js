import { css } from '@emotion/react';

const styles = css`
  .error-message {
    margin-top: 8px;
  }

  &.-piped {
    .input-group-prepend {
      position: relative;
    }
    .input-group-text {
      background-color: #fff;
    }
    .input-group-text::after {
      content: ' ';
      position: absolute;
      background-color: #ccc;
      width: 1px;
      height: 26px;
      left: 46px;
      top: 12px;
    }

    .form-control {
      border-left: 0;
    }
  }
`;

export default styles;
