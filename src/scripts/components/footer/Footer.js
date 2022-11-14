import React from 'react';
import cx from 'classnames';

import Facebook from '../icons/Facebook';
import Twitter from '../icons/Twitter';
import Vimeo from '../icons/Vimeo';
import Instagram from '../icons/Instagram';
import Youtube from '../icons/Youtube';
import Logo from '../icons/Logo';

import PhoneEmail from './PhoneEmail';
import FooterLink from './FooterLink';

function FooterSection({ className, ...rest }) {
  return <div className={cx(className, 'px-4 mb-6 sm:mb-9')} {...rest} />;
}

function FooterSocialIcon({ className, ...rest }) {
  return (
    <li
      className={cx(
        className,
        'h-[18px]',
        'inline-block',
        'mr-8',
        'sm:mr-5',
        'lg:mr-6',
        'last:mr-0',
      )}
      {...rest}
    />
  );
}

function Footer() {
  return (
    <footer className={cx('text-white', 'bg-coal', 'text-sm', 'py-8 px-4')}>
      <div className="container mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <FooterSection>
            <FooterLink className="block mb-5" href="/">
              <Logo width="80%" className="text-primary" />
            </FooterLink>
            <ul className="mb-4 mx-auto pl-0 list-none">
              <FooterSocialIcon>
                <FooterLink href="https://www.facebook.com/livingwordmn">
                  <Facebook />
                </FooterLink>
              </FooterSocialIcon>
              <FooterSocialIcon>
                <FooterLink href="https://www.twitter.com/livingwordmn">
                  <Twitter />
                </FooterLink>
              </FooterSocialIcon>
              <FooterSocialIcon>
                <FooterLink href="https://www.instagram.com/livingwordmn">
                  <Instagram />
                </FooterLink>
              </FooterSocialIcon>
              <FooterSocialIcon>
                <FooterLink href="https://www.vimeo.com/livingwordmn">
                  <Vimeo />
                </FooterLink>
              </FooterSocialIcon>
              <FooterSocialIcon>
                <FooterLink href="https://www.youtube.com/livingwordmn">
                  <Youtube />
                </FooterLink>
              </FooterSocialIcon>
            </ul>
            <p className="mb-8">
              <FooterLink href="https://lwcc.buzzsprout.com/">
                Sunday Service Podcast
              </FooterLink>
            </p>
            <p className="mb-8">
              <FooterLink href="https://www.thefinalhourpodcast.com">
                The Final Hour Podcast
              </FooterLink>
            </p>
            <p className="mb-8">Copyright Living Word 2022</p>
            <p className="mb-8">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </p>
          </FooterSection>

          {/* Brooklyn Park */}
          <FooterSection>
            <p className="mb-8">
              <FooterLink
                href="https://www.lwcc.org/locations/brooklynpark/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="text-base">Brooklyn Park</strong>
              </FooterLink>
            </p>

            <p className="mb-8">
              9201 75th Avenue North
              <br />
              Brooklyn Park, MN 55428
            </p>

            <PhoneEmail p="763.315.7000" e="info@lwcc.org" />

            <p className="mb-8">
              <strong className="text-base">Service Times</strong>
              <br />
              Sun 9 &amp; 11 a.m.
              <br />
              Sat 5 p.m.
              <br />
              Wed 7 p.m.
            </p>
          </FooterSection>

          {/* Iglesia Español */}
          <FooterSection>
            <p className="mb-8">
              <FooterLink
                href="https://www.lwcc.org/iglesiaespanol/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="text-base">Iglesia Español</strong>
              </FooterLink>
            </p>

            <p className="mb-8">
              9201 75th Avenue North
              <br />
              Brooklyn Park, MN 55428
              <br />
              Main Campus Chapel
            </p>

            <PhoneEmail p="763.315.7000" e="info@lwcc.org" />

            <p className="mb-8">
              <strong className="text-base">Service Times</strong>
              <br />
              Sun 10:45 a.m.
              <br />
              Wed 7 p.m.
            </p>
          </FooterSection>

          {/* Rogers */}
          <FooterSection>
            <p className="mb-8">
              <FooterLink
                href="https://www.lwcc.org/northwest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="text-base">Northwest</strong>
              </FooterLink>
            </p>
            <p className="mb-8">
              10925 Trail Haven Rd,
              <br />
              Rogers, MN 55374
            </p>

            <PhoneEmail p="763.315.7000" e="northwest@lwcc.org" />

            <p className="mb-8">
              <strong className="text-base">Service Times</strong>
              <br />
              Sun 10:30 a.m.
            </p>
          </FooterSection>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
