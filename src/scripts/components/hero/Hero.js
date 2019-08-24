import React from 'react';
import cx from 'classnames';
import { string, node, any, oneOf, bool } from 'prop-types';
import { css } from '@emotion/core';

import styles, { bgs } from './styles';

function Hero({
  bg, // The background image name
  bgColor = 'transparent', // The bg-{color} class
  color = 'white', // The text-{color} class
  blend = 'normal', // The background-blend-mode value
  children,
  className,
  layout = 'normal',
  faded = false,
  height,
  ...rest
}) {
  return (
    <div
      css={[
        styles,
        bgs[bg],
        css`
          background-blend-mode: ${blend};
        `,
      ]}
      className={cx(
        className,
        'row',
        'hero',
        `bg-${bgColor}`,
        `text-${color}`,
        `-${layout}`,
        {
          [`-${height}`]: !!height,
          '-faded': faded,
        }
      )}
      {...rest}
    >
      <div className="container-xl hero-content">{children}</div>
    </div>
  );
}
Hero.propTypes = {
  bg: string.isRequired,
  bgColor: oneOf([
    'section',
    'transparent',
    'white',
    'dark',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
  ]),
  color: oneOf([
    'white',
    'dark',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
  ]),
  blend: oneOf([
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity',
  ]),
  layout: oneOf(['normal', 'centered', 'centered-v']),
  faded: bool,
  height: oneOf(['sm', 'md']),
  className: any,
  children: node,
};

export default Hero;
