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

  function onSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <Hero bg="city" layout="centered-v" faded>
      <h3>Connect with Living Word</h3>
      <label>Sign up for our email newsletter</label>
      <form method="POST" action="/wp-admin/admin-ajax.php" onSubmit={onSubmit}>
        <div className={cx({ 'form-inline': !mobile })}>
          <input
            type="hidden"
            name="action"
            value="et_pb_submit_subscribe_form"
          />
          <input type="hidden" name="et_frontend_nonce" value="9537daae3e" />
          <input type="hidden" name="et_list_id" value="a5e1e66d77" />
          <input type="hidden" name="et_provider" value="mailchimp" />
          <input type="hidden" name="et_account" value="Living Word" />
          <input type="hidden" name="et_ip_address" value="true" />
          <TextInput
            label="First Name"
            labelHidden
            placeholder="First Name"
            prepend={
              <span className="input-group-text">
                <User color={bs.primary} />
              </span>
            }
            name="et_firstname"
            size="lg"
            formGroupClasses="-piped"
          />

          <TextInput
            label="Last Name"
            labelHidden
            placeholder="Last Name"
            prepend={
              <span className="input-group-text">
                <User color={bs.primary} />
              </span>
            }
            name="et_lastname"
            size="lg"
            formGroupClasses={cx('-piped', { 'ml-sm-3': !mobile })}
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
            name="et_email"
            type="email"
            size="lg"
            formGroupClasses={cx('-piped', { 'mx-sm-3': !mobile })}
          />
        </div>
        <div className="mt-3">
          <Button size="lg" type="submit" variant="secondary">
            Sign Up
          </Button>
        </div>
      </form>
    </Hero>
  );
}

export default NewsletterSignup;
