import React from 'react';
import cx from 'classnames';

function FooterLink({ className, children, ...rest }) {
  return (
    <a
      className={cx(
        className,
        'text-white',
        'no-underline',
        'hover:text-primary',
        'focus:text-primary',
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

export default FooterLink;
