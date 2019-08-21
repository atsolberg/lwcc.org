import React from 'react';
import cx from 'classnames';
import { node, any, oneOf, bool } from 'prop-types';

import styles from './styles';

function Hero({
  bg,
  children,
  className,
  layout = 'normal',
  faded = false,
  short = false,
  ...rest
}) {
  return (
    <div
      css={styles}
      className={cx(className, 'row', 'hero', `-${layout}`, `-${bg}`, {
        '-short': short,
        '-faded': faded,
      })}
      {...rest}
    >
      <div className="container hero-content">{children}</div>
    </div>
  );
}
Hero.propTypes = {
  bg: oneOf(['worship', 'city', 'bible']).isRequired,
  layout: oneOf(['centered', 'centered-v']),
  faded: bool,
  short: bool,
  className: any,
  children: node,
};

export default Hero;
