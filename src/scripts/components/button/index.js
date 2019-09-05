import React from 'react';
import BsButton from 'react-bootstrap/es/Button';
import Spinner from '../spinner/Spinner';

/**
 * Use this to produce buttons instead of html button tags.
 */
const Button = ({ label, busy, busyLabel, disabled, children, ...rest }) => {
  const btnLabel = busy && busyLabel ? busyLabel : label || children;

  return (
    <BsButton disabled={busy || disabled} {...rest}>
      {busy && <Spinner className="mr-sm" />}
      {btnLabel}
    </BsButton>
  );
};

export default Button;
