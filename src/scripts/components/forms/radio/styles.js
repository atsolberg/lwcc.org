import { css } from '@emotion/core';
import v from '../../../../styles/variables';

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
    border: 1px solid ${v.darkGray};
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
    background-color: ${v.primary};
    border-color: ${v.primary};
    box-shadow: inset 0 0 0 4px #fff;
  }

  input:focus:checked + .radio-button::before {
    background-color: ${v.primary};
  }

  &.disabled label {
    color: ${v.black};
  }

  input:disabled + .radio-button::before {
    background-color: ${v.darkGray};
    border-color: ${v.darkGray};
    box-shadow: inset 0 0 0 4px #fff;
    border: 1px solid ${v.darkGray};
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
