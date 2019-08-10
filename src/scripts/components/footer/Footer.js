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
              <p>Copyright Living Word 2019</p>
              <p>
                <a href="/privacy-policy">Privacy Policy</a>
                <span className="sep"> | </span>
                <a href="/terms-of-use">Terms of Use</a>
              </p>
            </div>
            <div className="footer-section col-12 col-sm-6 col-lg-3">
              <p>
                <strong>Brooklyn Park</strong>
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
                Sun 9 &amp; 11 am
                <br />
                Sat 5 pm
                <br />
                Wed 7 pm
              </p>
            </div>
            <div className="footer-section col-12 col-sm-6 col-lg-3">
              <p>
                <strong>Saint Paul</strong>
              </p>
              <p>
                Union Depot
                <br />
                240 E Kellogg Blvd #70
                <br />
                St Paul, MN 55101
              </p>

              <PhoneEmail p="763.315.7000" e="saintpaul@lwcc.org" />

              <p>
                <strong>Service Times</strong>
                <br />
                Sun 11 am &amp; 5 pm
              </p>
            </div>
            <div className="footer-section col-12 col-sm-6 col-lg-3">
              <p>
                <a
                  href="https://lwcc.org/northwest"
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
                Sun 10:45 am
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
