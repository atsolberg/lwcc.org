import React, { useState, useEffect, useRef, Fragment } from 'react';
import cx from 'classnames';

import Navbar from 'react-bootstrap/es/Navbar';
import Nav from 'react-bootstrap/es/Nav';
import NavDropdown from 'react-bootstrap/es/NavDropdown';
import Collapse from 'react-bootstrap/es/Collapse';

import api from '../../util/api';
import { prop } from '../../util/object';
import logo from '../../../img/logo.png';
import styles from './styles';

import HoverNav from '../hover-nav/HoverNav';
import Button from '../button';

function getHere(url) {
  const here = new URL(url).pathname.replace('/', '');
  return here;
}

/**
 * Header component for the site.
 */
function Header() {
  const searchRef = useRef();
  const [searching, setSearching] = useState(false);
  const [broadcast, setBroadcast] = useState({
    live: true,
    title: 'Pastor Lynn on Healing',
  });
  const [menus, setMenus] = useState({ top: [], main: [] });

  function toggleSearch() {
    if (!searching) {
      setTimeout(() => {
        searchRef.current.focus();
      }, 1);
    }
    setSearching(!searching);
  }

  // Fetch Menus
  useEffect(() => {
    api.getMenus('main', 'top-bar').then(([{ data: main }, { data: top }]) => {
      console.log('main: ', main);
      console.log('top: ', top);
      setMenus({ main, top });
    });
  }, []);

  const where = window.location.pathname.replace('/', '');

  return (
    <header css={styles}>
      <div className="navbar-topper">
        <div className="container">
          {broadcast.live && (
            <a className="link-primary" href="/watch/live">
              Watch {broadcast.title && broadcast.title} &mdash; Live Now →
            </a>
          )}
          <div className="float-right">
            {(prop(menus, 'top.items') || []).map(m => (
              <a key={m.title} href={m.url}>
                {m.title}
              </a>
            ))}
            <Button variant="link" onClick={toggleSearch}>
              <i className="fa fa-search" />
            </Button>
          </div>
        </div>
      </div>

      <Collapse in={searching}>
        <div className="row bg-light">
          <div className="container searchbar padded-sm">
            <input tabIndex={0} ref={searchRef} className="form-control" />
          </div>
        </div>
      </Collapse>

      <Navbar collapseOnSelect expand="md" sticky="top">
        <div className="container">
          <Navbar.Brand href="#home">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {(prop(menus, 'main.items') || []).map(m => (
                <Fragment key={m.title}>
                  {prop(m, 'child_items.length') > 0 && (
                    <HoverNav title={m.title} id="collasible-nav-dropdown">
                      {m.child_items.map(c => (
                        <NavDropdown.Item key={c.title} href={c.url}>
                          {c.title}
                        </NavDropdown.Item>
                      ))}
                    </HoverNav>
                  )}
                  {!prop(m, 'child_items.length') && (
                    <Nav.Link
                      href={m.url}
                      className={cx({ here: where === getHere(m.url) })}
                    >
                      {m.title}
                    </Nav.Link>
                  )}
                </Fragment>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
