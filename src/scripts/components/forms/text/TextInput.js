import React, { useRef } from 'react';
import {
  node,
  oneOfType,
  func,
  string,
  bool,
  oneOf,
  any,
  shape,
} from 'prop-types';
import cx from 'classnames';

import FormLabel from 'react-bootstrap/es/FormLabel';
import FormControl from 'react-bootstrap/es/FormControl';
import FormGroup from 'react-bootstrap/es/FormGroup';
import InputGroup from 'react-bootstrap/es/InputGroup';

import HtmlId from '../../html-id/HtmlId';
import { rif } from '../../../util/jsx';
import { uuid } from '../../../util/string';
import styles from './styles';

function TextInput({
  id,
  type = 'text',
  size,
  error,
  label,
  labelHidden,
  helpText,
  required = false,
  'aria-describedby': ariaDescribedby,
  formGroupClasses = '',
  labelClasses = '',
  inputGroupClasses = '',
  prepend,
  append,
  children,
  ...rest
}) {
  const errorDescriptorRef = useRef(uuid());

  const describers = [];

  if (ariaDescribedby) describers.push(ariaDescribedby);
  if (error) describers.push(errorDescriptorRef.current);

  const dynamicAttrs = { ...rest };

  if (describers.length) {
    dynamicAttrs['aria-describedby'] = describers.join(' ');
  }

  if (error) {
    dynamicAttrs['aria-invalid'] = true;
  }

  return (
    <HtmlId id={id}>
      {htmlId => (
        <FormGroup
          className={cx(formGroupClasses, { 'has-error': !!error })}
          css={styles}
          controlId={htmlId}
        >
          {required && <span className="required-label">*</span>}

          <FormLabel className={cx(labelClasses, { 'sr-only': labelHidden })}>
            {label}
          </FormLabel>

          <InputGroup className={inputGroupClasses} size={size}>
            {rif(prepend, <div className="input-group-prepend">{prepend}</div>)}
            <FormControl type={type} required={required} {...dynamicAttrs} />
            {rif(append, append)}
          </InputGroup>

          {children}

          {rif(helpText, <div className="input-text">{helpText}</div>)}

          {rif(
            error,
            <div
              className="input-text text-danger"
              id={errorDescriptorRef.current}
              role="alert"
              aria-atomic
            >
              {error}
            </div>
          )}
        </FormGroup>
      )}
    </HtmlId>
  );
}
TextInput.propTypes = {
  id: string,
  type: oneOf(['text', 'number', 'email', 'search']),
  size: string,
  label: node.isRequired,
  labelHidden: bool,
  helpText: node,
  error: string,
  required: bool,
  inputRef: oneOfType([func, shape({ current: any })]),
  'aria-describedby': string,
  prepend: node,
  append: node,
  formGroupClasses: any,
  labelClasses: any,
  inputGroupClasses: any,
  children: node,
};

export default TextInput;
