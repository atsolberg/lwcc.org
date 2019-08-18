import React, { useState } from 'react';
import cx from 'classnames';

import { isMobile } from '../../util/device';
import bs from '../../../../postcss_vars';

import User from '../icons/User';
import Envelope from '../icons/Envelope';
import Button from '../button';
import Hero from '../hero/Hero';
import useSizeChange from '../../hooks/useSizeChange';
import TextInput from '../forms/text/TextInput';

function NewsletterSignup() {
  const [mobile, setMobile] = useState(isMobile);
  useSizeChange(() => {
    setMobile(isMobile());
  });

  return (
    <Hero bg="city" layout="centered-v" faded>
      <h3>Connect with Living Word</h3>
      <label>Sign up for our email newsletter</label>
      <form className={cx({ 'form-inline': !mobile })}>
        <TextInput
          label="Your Name"
          labelHidden
          placeholder="Your Name"
          prepend={
            <span className="input-group-text">
              <User color={bs.primary} />
            </span>
          }
          name="name"
          size="lg"
          formGroupClasses="-piped"
        />

        <TextInput
          label="Your Email Address"
          labelHidden
          placeholder="Your Email Address"
          prepend={
            <span className="input-group-text">
              <Envelope color={bs.primary} />
            </span>
          }
          name="email"
          type="email"
          size="lg"
          formGroupClasses={cx('-piped', { 'mx-sm-3': !mobile })}
        />

        <Button size="lg" type="submit" variant="secondary">
          Sign Up
        </Button>
      </form>
    </Hero>
  );
}

export default NewsletterSignup;
