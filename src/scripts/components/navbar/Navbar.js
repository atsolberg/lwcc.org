import React, { Fragment } from 'react';
import cx from 'classnames';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Logo from '../icons/Logo';
import { dasherize } from '../../util/string';

const where = window.location.pathname.replace('/', '');

function getHere(url) {
  try {
    const here = new URL(url).pathname.replace(new RegExp('/', 'g'), '');
    return here;
  } catch (err) {
    return '';
  }
}

function getPath(url) {
  return new URL(url).pathname;
}

/**
 * Shorten some titles for mobile
 * @param {string} title - the title text to adjust
 */
export function fixTitles(title) {
  if (title.toLowerCase() === 'member log in') {
    return (
      <>
        <span
          className="hidden sm:inline"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <span className="sm:hidden">Login</span>
      </>
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: title }} />;
}

function NavLink({ menu }) {
  const id = dasherize(menu.title);
  const href = menu.url;
  const active = where === getHere(menu.url);

  const base = [
    'group',
    'relative',
    'inline-flex items-center',
    'border-b-2',
    'px-1 pt-1',
    'text-sm text-base',
    'sm:text-xs',
    'md:text-sm',
    'xl:text-base',
  ];
  const classes = cx(base, {
    'border-primary text-gray-900': active,
    'border-transparent text-gray-500 hover:border-primary hover:text-gray-700':
      !active,
  });
  return (
    <a id={id} href={href} className={classes}>
      {fixTitles(menu.title)}
      {menu?.child_items?.length ? (
        <NavLinkMenu items={menu.child_items} />
      ) : null}
    </a>
  );
}

function NavLinkMenu({ items }) {
  return (
    <div
      className={cx([
        'hidden group-hover:block',
        'absolute top-[100%] left-[-2px]',
        'z-10',
        'bg-transparent',
      ])}
    >
      <div
        className={cx([
          'bg-white',
          'mt-2',
          'py-2 px-0',
          'rounded',
          'min-w-[150px]',
          'text-left',
          'border',
        ])}
      >
        <ul className="list-none">
          {items.map((item) => (
            <li key={item.ID}>
              <a
                className={cx([
                  'block',
                  'w-full',
                  'py-1',
                  'px-5',
                  'whitespace-nowrap',
                  'text-base',
                  'hover:bg-gray-50',
                ])}
                href={getPath(item.url)}
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileNavLink({ item }) {
  const active = where === getHere(item.url);

  const base = 'block border-l-4 py-2 pl-3 pr-4 text-base font-medium';
  const classes = [base];
  if (active) classes.push('border-primary bg-teal-50 text-teal-700');
  if (!active)
    classes.push(
      'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
    );

  return (
    <Disclosure.Button as="a" href={item.url} className={cx(classes)}>
      {fixTitles(item.title)}
    </Disclosure.Button>
  );
}

function Navbar({ menus }) {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <a href="/">
                    <Logo color="#4C4E54" width={180} />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-1 md:space-x-4 lg:space-x-8">
                  {(menus?.main?.items || []).map((m) => (
                    <Fragment key={m.ID}>
                      <NavLink menu={m} />
                    </Fragment>
                  ))}
                </div>
              </div>

              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {(menus?.main?.items || []).map((m) => (
                <MobileNavLink key={m.ID} item={m} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
