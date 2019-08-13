import React from 'react';
import cx from 'classnames';
import { node, any, oneOf, bool } from 'prop-types';

import styles from './styles';

function Hero({
  bg,
  children,
  className,
  variant = 'contained',
  layout = 'normal',
  faded = false,
  ...rest
}) {
  return (
    <div
      css={styles}
      className={cx(
        className,
        'row',
        'hero',
        `-${layout}`,
        `-${variant}`,
        `-${bg}`,
        { '-faded': faded }
      )}
      {...rest}
    >
      <div className="container hero-content">{children}</div>
    </div>
  );
}
Hero.propTypes = {
  bg: oneOf(['worship', 'city']).isRequired,
  variant: oneOf(['contained', 'full-width']),
  layout: oneOf(['centered', 'normal']),
  faded: bool,
  className: any,
  children: node,
};

export default Hero;
