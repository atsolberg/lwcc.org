import React from 'react';
import cx from 'classnames';
import { string, node, any, oneOf, bool } from 'prop-types';

import styles, { bgs } from './styles';

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
      css={[styles, bgs[bg]]}
      className={cx(className, 'row', 'hero', `-${layout}`, {
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
  bg: string.isRequired,
  layout: oneOf(['normal', 'centered', 'centered-v']),
  faded: bool,
  short: bool,
  className: any,
  children: node,
};

export default Hero;
