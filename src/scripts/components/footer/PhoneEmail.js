import React from 'react';

function PhoneEmail({ p, e }) {
  return (
    <p className="phone-email">
      <a
        className="d-lg-block d-xl-inline"
        href={`tel:${p.replace(new RegExp('[^\\d]', 'g'), '')}`}
      >
        {p}
      </a>
      <span className="d-lg-none d-xl-inline"> | </span>
      <a className="d-lg-block d-xl-inline" href={`mailto:${e}`}>
        {e}
      </a>
    </p>
  );
}

export default PhoneEmail;
