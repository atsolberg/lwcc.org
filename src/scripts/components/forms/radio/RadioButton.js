import React from 'react';
import { string, bool, any } from 'prop-types';
import cx from 'classnames';
import FormGroup from 'react-bootstrap/FormGroup';
import FormCheck from 'react-bootstrap/FormCheck';

import HtmlId from '../../html-id/HtmlId';
import Spinner from '../../spinner/Spinner';

import styles from './styles';

function RadioButton({
  busy,
  children,
  disabled,
  id,
  className,
  error,
  ...rest
}) {
  return (
    <HtmlId id={id}>
      {htmlId => (
        <FormGroup className={cx({ 'has-error': !!error })} controlId={htmlId}>
          <FormCheck
            type="radio"
            disabled={disabled || busy}
            css={styles}
            className={cx(className, { busy })}
            {...rest}
          >
            <span className="radio-button " />
            {busy && (
              <div className="input-spinner">
                <Spinner className="fa-lg" />
              </div>
            )}
            <div className="radio-label">{children}</div>
          </FormCheck>
        </FormGroup>
      )}
    </HtmlId>
  );
}
RadioButton.propTypes = {
  busy: bool,
  children: any,
  disabled: bool,
  id: string,
  className: any,
  error: string,
};

export default RadioButton;
