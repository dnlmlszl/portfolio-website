'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import DarkThemeContext from '../store/ThemeContext';
import { clsx } from 'clsx';
import { FaSun, FaMoon } from 'react-icons/fa';

import PortfolioContext from '../store/PortfolioContext';

export default function Navbar() {
  const { isDarkTheme, toggleThemeHandler } = useContext(DarkThemeContext);
  const { toggleSidebarHandler } = useContext(PortfolioContext);
  const pathname = usePathname();

  const darkModeClasses = isDarkTheme
    ? 'bg-slate-950 text-slate-300'
    : 'bg-white text-slate-950';

  return (
    <nav className={clsx('shadow py-4 px-8', darkModeClasses)}>
      <div className={clsx('flex justify-between items-center')}>
        <div className="hidden md:flex gap-4">
          {['/', '/about', '/services', '/projects', '/contact'].map(
            (path, index) => (
              <Link
                key={index}
                href={path}
                className={clsx(
                  'text-base tracking-widest capitalize transition duration-200 linear',
                  {
                    'text-blue-600 font-semibold border-b-2 border-blue-600':
                      pathname === `${path}`,
                  }
                )}
              >
                {path.substring(1) || 'Home'}
              </Link>
            )
          )}
        </div>
        <div className="md:hidden">
          {/* Hamburger ikon */}
          <button
            className="flex flex-col space-y-2"
            onClick={toggleSidebarHandler}
          >
            <span className="block w-8 h-0.5 bg-slate-600"></span>
            <span className="block w-8 h-0.5 bg-slate-600"></span>
            <span className="block w-8 h-0.5 bg-slate-600"></span>
          </button>
        </div>
        {isDarkTheme ? (
          <FaSun
            className="text-yellow-500 text-xl cursor-pointer"
            onClick={toggleThemeHandler}
          />
        ) : (
          <FaMoon
            className="text-slate-700 text-xl cursor-pointer"
            onClick={toggleThemeHandler}
          />
        )}
      </div>
    </nav>
  );
}
