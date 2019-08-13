import React from 'react';
import { node } from 'prop-types';

import styles from './styles';

function Box({ children, ...rest }) {
  return (
    <div className="max-1140" {...rest}>
      <div css={styles} className="row box">
        <div className="col-12 box-content">{children}</div>
      </div>
    </div>
  );
}
Box.propTypes = {
  children: node.isRequired,
};

export default Box;
