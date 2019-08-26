import React, { useState, useEffect, Fragment } from 'react';
import cx from 'classnames';

import Navbar from 'react-bootstrap/es/Navbar';
import Nav from 'react-bootstrap/es/Nav';
import NavDropdown from 'react-bootstrap/es/NavDropdown';

import api from '../../util/api';
import { prop } from '../../util/object';
import nav_top from '../../__tests__/data/nav_top';
import nav_main from '../../__tests__/data/nav_main';

import HoverNav from '../hover-nav/HoverNav';
import Button from '../button';
import SearchBar from '../searchbar/SearchBar';
import Logo from '../icons/Logo';

import styles from './styles';

function getHere(url) {
  const here = new URL(url).pathname.replace(new RegExp('/', 'g'), '');
  return here;
}

function getPath(url) {
  return new URL(url).pathname;
}

/**
 * Shorten some titles for mobile
 * @param {string} title - the title text to adjust
 */
function fixTitles(title) {
  if (title.toLowerCase() === 'member log in') {
    return (
      <>
        <span className="d-none d-sm-inline">{title}</span>
        <span className="d-sm-none">Login</span>
      </>
    );
  }

  return title;
}

/**
 * Header component for the site.
 */
function Header() {
  const [searching, setSearching] = useState(false);
  const [broadcast] = useState({
    live: false,
    title: '',
  });
  const [menus, setMenus] = useState({ top: [], main: [] });

  // Fetch menus on mount
  useEffect(() => {
    api
      .getMenus('main', 'top-bar')
      .then(([{ data: main }, { data: top }]) => {
        setMenus({ main, top });
      })
      .catch(() => {
        // Fall back to our test data nav payloads
        setMenus({ main: nav_main, top: nav_top });
      });
  }, []);

  const where = window.location.pathname.replace('/', '');

  return (
    <header css={styles}>
      {/* TOP BAR */}
      <div className="navbar-topper">
        <div className="container-xl">
          {broadcast.live && (
            <a className="link-primary" href="https://lwcc.churchonline.org/">
              <span className="d-md-none">Watch Live →</span>{' '}
              <span className="d-none d-md-inline">
                Watch {broadcast.title && broadcast.title} &mdash; Live Now →
              </span>
            </a>
          )}
          <div className="float-right">
            {(prop(menus, 'top.items') || []).map(m => (
              <a key={m.title} href={m.url}>
                {fixTitles(m.title)}
              </a>
            ))}
            <Button
              className="search-btn"
              variant="link"
              onClick={() => setSearching(!searching)}
            >
              <i className={`fa fa-${searching ? 'times' : 'search'}`} />
            </Button>
          </div>
        </div>
      </div>

      <SearchBar search={[searching, setSearching]} />

      {/* MAIN NAV BAR */}
      <div className="container-xl">
        <Navbar collapseOnSelect expand="md" sticky="top">
          <Navbar.Brand href="/">
            <Logo color="#4C4E54" width={180} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* `navbar` prop should be set to true by <Navbar> but it's not
             * when doing a production build
             */}
            <Nav className="ml-auto navbar-nav" navbar>
              {(prop(menus, 'main.items') || []).map(m => (
                <Fragment key={m.ID}>
                  {/* Dropdown Nav Item */}
                  {prop(m, 'child_items.length') > 0 && (
                    <HoverNav
                      title={fixTitles(m.title)}
                      id="collasible-nav-dropdown"
                    >
                      {m.child_items.map(c => (
                        <NavDropdown.Item key={c.ID} href={getPath(c.url)}>
                          {c.title}
                        </NavDropdown.Item>
                      ))}
                    </HoverNav>
                  )}
                  {/* Link Nav Item */}
                  {!prop(m, 'child_items.length') && (
                    <Nav.Link
                      href={getPath(m.url)}
                      className={cx({
                        here: where === getHere(m.url),
                      })}
                      data-where={where}
                      data-here={getHere(m.url)}
                    >
                      {fixTitles(m.title)}
                    </Nav.Link>
                  )}
                </Fragment>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
