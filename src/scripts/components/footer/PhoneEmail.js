import React from 'react';
import FooterLink from './FooterLink';

function PhoneEmail({ p, e }) {
  return (
    <p className="mb-8">
      <FooterLink
        className="lg:block xl:inline"
        href={`tel:${p.replace(new RegExp('[^\\d]', 'g'), '')}`}
      >
        {p}
      </FooterLink>
      <span className="lg:hidden xl:inline"> | </span>
      <FooterLink className="lg:block xl:inline" href={`mailto:${e}`}>
        {e}
      </FooterLink>
    </p>
  );
}

export default PhoneEmail;
