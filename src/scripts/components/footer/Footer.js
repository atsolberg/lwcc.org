import React from 'react';
import styles from './styles';

import PhoneEmail from './PhoneEmail';
import Facebook from '../icons/Facebook';
import Twitter from '../icons/Twitter';
import Vimeo from '../icons/Vimeo';
import Instagram from '../icons/Instagram';
import Youtube from '../icons/Youtube';
import Logo from '../icons/Logo';
import bs from '../../../../postcss_vars';

/**
 * Footer component for the site.
 */
function Footer() {
  return (
    <footer css={styles}>
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="footer-section col-12 col-sm-6 col-lg-3">
              <a className="db footer-logo-link" href="/">
                <Logo width="80%" color={bs.primary} />
              </a>
              <ul className="social-icons list-unstyled list-inline">
                <li className="social-icon list-inline-item">
                  <a href="http://www.facebook.com/livingwordmn">
                    <Facebook />
                  </a>
                </li>
                <li className="social-icon list-inline-item">
                  <a href="http://www.twitter.com/livingwordmn">
                    <Twitter />
                  </a>
                </li>
                <li className="social-icon list-inline-item">
                  <a href="http://www.instagram.com/livingwordmn">
                    <Instagram />
                  </a>
                </li>
                <li className="social-icon list-inline-item">
                  <a href="http://www.vimeo.com/livingwordmn">
                    <Vimeo />
                  </a>
                </li>
                <li className="social-icon list-inline-item">
                  <a href="http://www.youtube.com/livingwordmn">
                    <Youtube />
                  </a>
                </li>
              </ul>
              <p>
                <a href="https://lwcc.buzzsprout.com/">
                  Sunday Service Podcast
                </a>
              </p>
              <p>
                <a href="https://podcasts.apple.com/us/podcast/the-final-hour/id1609783460">
                  The Final Hour Podcast
                </a>
              </p>
              <p>Copyright Living Word 2022</p>
              <p>
                <a href="/privacy-policy">Privacy Policy</a>
              </p>
            </div>

            {/* Brooklyn Park */}
            <div className="footer-section col-12 col-sm-6 col-lg-3">
              <p>
                <a
                  href="https://www.lwcc.org/locations/brooklynpark/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Brooklyn Park</strong>
                </a>
              </p>

              <p>
                9201 75th Avenue North
                <br />
                Brooklyn Park, MN 55428
              </p>

              <PhoneEmail p="763.315.7000" e="info@lwcc.org" />

              <p>
                <strong>Service Times</strong>
                <br />
                Sun 9 &amp; 11 a.m.
                <br />
                Sat 5 p.m.
                <br />
                Wed 7 p.m.
              </p>
            </div>

            {/* Iglesia Español */}
            <div className="footer-section col-12 col-sm-6 col-lg-3">
              <p>
                <a
                  href="https://www.lwcc.org/iglesiaespanol/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Iglesia Español</strong>
                </a>
              </p>

              <p>
                9201 75th Avenue North
                <br />
                Brooklyn Park, MN 55428
                <br />
                Main Campus Chapel
              </p>

              <PhoneEmail p="763.315.7000" e="info@lwcc.org" />

              <p>
                <strong>Service Times</strong>
                <br />
                Sun 10:45 a.m.
                <br />
                Wed 7 p.m.
              </p>
            </div>

            {/* Rogers */}
            <div className="footer-section col-12 col-sm-6 col-lg-3">
              <p>
                <a
                  href="https://www.lwcc.org/northwest/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Northwest</strong>
                </a>
              </p>
              <p>
                Emagine Theatre
                <br />
                13692 Rogers Dr.
                <br />
                Rogers, MN 55374
              </p>

              <PhoneEmail p="763.315.7000" e="northwest@lwcc.org" />

              <p>
                <strong>Service Times</strong>
                <br />
                11 a.m.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
