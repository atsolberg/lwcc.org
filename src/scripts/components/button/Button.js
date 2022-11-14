import React from 'react';
import cx from 'classnames';
import { any, bool, node, oneOf, string } from 'prop-types';

import Spinner from '../spinner/Spinner';

const sizes = {
  1: 'px-2.5 py-1.5 text-xs',
  2: 'px-3 py-2 text-sm leading-4',
  3: 'px-4 py-2 text-sm',
  4: 'px-4 py-2 text-base',
  5: 'px-6 py-3 text-base',
};

const borders = {
  primary: 'border-primary',
  secondary: 'border-gray-300',
  link: '',
};

const bgs = {
  primary: 'bg-primary hover:bg-primary focus:ring-primary',
  secondary: 'bg-white hover:bg-gray-50 focus:ring-primary',
  link: 'bg-transparent focus:ring-primary',
};

const colors = {
  primary: 'text-white',
  secondary: 'text-gray-700',
  link: 'text-gray-700',
};

function classes(variant, size, color) {
  const base = [
    'inline-flex',
    'items-center',
    'font-medium',
    'rounded',
    'shadow-sm',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'border',
  ];
  return cx(
    base,
    color ? color : colors[variant],
    bgs[variant],
    sizes[size],
    borders[variant],
  );
}

/**
 * Use this to produce buttons instead of html button tags.
 */
Button.propTypes = {
  className: any,
  variant: oneOf(['primary', 'secondary', 'link']),
  size: oneOf([1, 2, 3, 4, 5]),
  color: string,
  label: node,
  busy: bool,
  busyLabel: node,
  disabled: bool,
  children: node,
};
function Button({
  className,
  variant = 'primary',
  size = 3,
  color,
  label,
  busy,
  busyLabel,
  disabled,
  children,
  ...rest
}) {
  const btnLabel = busy && busyLabel ? busyLabel : label || children;

  return (
    <button
      type="button"
      className={cx(className, classes(variant, size, color))}
      disabled={busy || disabled}
      {...rest}
    >
      {busy && <Spinner className="mr-2" />}
      {btnLabel}
    </button>
  );
}

export default Button;
