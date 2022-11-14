import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid';

import api from '../../util/api';
import nav_top from '../../__tests__/data/nav_top';
import nav_main from '../../__tests__/data/nav_main';

import Navbar, { fixTitles } from '../navbar/Navbar';
import Button from '../button/Button';
import SearchBar from '../searchbar/SearchBar';

function TopBar({ menus, search, broadcast }) {
  const [searching, setSearching] = search;
  return (
    <div className="h-[50px] bg-coal text-white text-sm px-4 flex justify-end items-center">
      {broadcast.live && (
        <a className="text-primary ml-0" href="https://lwcc.churchonline.org/">
          <span className="md:hidden">Watch Live →</span>{' '}
          <span className="hidden: md:inline">
            Watch {broadcast.title && broadcast.title} &mdash; Live Now →
          </span>
        </a>
      )}
      {(menus?.top?.items || []).map((m) => (
        <a
          className="ml-4 text-white hover:underline"
          key={m.title}
          href={m.url}
        >
          {fixTitles(m.title)}
        </a>
      ))}
      <Button
        className="ml-4 text-white min-w-[42px] ml-2 sm:ml-8 search-btn"
        variant="link"
        color="text-white"
        onClick={() => setSearching(!searching)}
      >
        {searching ? (
          <XMarkIcon width="22px" />
        ) : (
          <MagnifyingGlassIcon width="22px" />
        )}
      </Button>
    </div>
  );
}

function Header() {
  const search = useState(false);
  const [broadcast] = useState({ live: false, title: '' });
  const [menus, setMenus] = useState({ top: [], main: [] });

  // Fetch menus on mount
  // Fall back to our test data nav payloads on error
  useEffect(() => {
    api
      .getMenus('main', 'top-bar')
      .then(([{ data: main }, { data: top }]) => setMenus({ main, top }))
      .catch(() => setMenus({ main: nav_main, top: nav_top }));
  }, []);

  return (
    <header className="bg-white">
      <TopBar menus={menus} search={search} broadcast={broadcast} />
      <SearchBar search={search} />
      <Navbar menus={menus} />
    </header>
  );
}

export default Header;
