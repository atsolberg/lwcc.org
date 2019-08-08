import { css } from '@emotion/core';
import bs from '../../../../../postcss_vars';

const styles = css`
  label {
    display: flex;
    padding-left: 0;
  }
  input {
    opacity: 0;
  }
  input + .radio-button::before {
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid ${bs.grayDark};
    content: '';
    cursor: pointer;
    display: inline-block;
    height: 20px;
    margin-right: 8px;
    position: relative;
    text-align: center;
    top: 2px;
    transition: all 250ms ease;
    vertical-align: top;
    width: 20px;
  }

  input:checked + .radio-button::before {
    background-color: ${bs.primary};
    border-color: ${bs.primary};
    box-shadow: inset 0 0 0 4px #fff;
  }

  input:focus:checked + .radio-button::before {
    background-color: ${bs.primary};
  }

  &.disabled label {
    color: ${bs.dark};
  }

  input:disabled + .radio-button::before {
    background-color: ${bs.grayDark};
    border-color: ${bs.grayDark};
    box-shadow: inset 0 0 0 4px #fff;
    border: 1px solid ${bs.grayDark};
    cursor: not-allowed;
  }

  &.busy {
    .input-spinner {
      position: absolute;
      top: 0;
      left: -2px;
    }
    input + .radio-button::before {
      opacity: 0;
    }
  }
`;

export default styles;
