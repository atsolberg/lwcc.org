import { css } from '@emotion/core';

const styles = css`
  height: auto;
  min-height: 50%;

  padding: 4% 0;
  background-color: #fff;
  background-position: center;
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  .hero-content {
    position: relative;
    min-height: 539px;
    color: #fff;

    h1 {
      font-size: 38px;
    }
  }

  &.hero-centered-v .hero-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default styles;
