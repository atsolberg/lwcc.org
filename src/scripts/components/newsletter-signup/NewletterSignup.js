import React, { useState } from 'react';
import cx from 'classnames';

import { isMobile } from '../../util/device';

import User from '../icons/User';
import Envelope from '../icons/Envelope';
import Button from '../button';
import Hero from '../hero/Hero';
import useSizeChange from '../../hooks/useSizeChange';

function NewsletterSignup() {
  const [mobile, setMobile] = useState(isMobile);
  useSizeChange(() => {
    setMobile(isMobile());
  });

  return (
    <Hero bg="city" variant="centered-v" faded>
      <h3>Connect with Living Word</h3>
      <label>Sign up for our email newsletter</label>
      <form className={cx({ 'form-inline': !mobile })}>
        <div className="form-group">
          <label className="sr-only">Your Name</label>
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <User />
              </span>
            </div>
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className={cx('form-group', { 'mx-sm-3': !mobile })}>
          <label className="sr-only">Your Email Address</label>
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                <Envelope />
              </span>
            </div>
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Your Email Address"
            />
          </div>
        </div>
        <Button size="lg" type="submit" variant="secondary">
          Sign Up
        </Button>
      </form>
    </Hero>
  );
}

export default NewsletterSignup;
