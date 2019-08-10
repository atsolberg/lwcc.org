import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/es/NavDropdown';

import styles from './styles';
import { isMobile } from '../../util/device';

/**
 * A RBS NavDropdown that opens on hover instead of click
 * but only on tablet+
 */
function HoverNav(props) {
  const [open, setOpen] = useState(false);

  // Control the open state on tablet+ but let the dropdown handle it
  // for mobile
  return (
    <NavDropdown
      {...props}
      css={styles}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...{
        ...(isMobile() ? {} : { show: open }),
      }}
    />
  );
}

export default HoverNav;
