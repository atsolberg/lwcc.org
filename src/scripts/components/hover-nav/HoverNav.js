import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/es/NavDropdown';

import styles from './styles';

/**
 * A RBS NavDropdown that opens on hover instead of click
 */
function HoverNav(props) {
  const [open, setOpen] = useState(false);
  return (
    <NavDropdown
      {...props}
      css={styles}
      show={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    />
  );
}

export default HoverNav;
