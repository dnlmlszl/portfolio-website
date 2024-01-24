'use client';
import { useContext, CSSProperties, FC } from 'react';
import Link from 'next/link';
import DarkThemeContext from '../store/ThemeContext';
import PortfolioContext from '../store/PortfolioContext';

const useDarkTheme = () => {
  const { isDarkTheme } = useContext(DarkThemeContext);
  return {
    darkModeClasses: isDarkTheme
      ? 'bg-slate-900 text-slate-200'
      : 'bg-slate-200 text-slate-800',
    linkHoverColor: isDarkTheme
      ? 'hover:bg-orange-500 hover:text-white'
      : 'hover:bg-orange-300 hover:text-gray-900',
  };
};

export default function Sidebar() {
  const { darkModeClasses, linkHoverColor } = useDarkTheme();
  const { showSidebar, toggleSidebarHandler } = useContext(PortfolioContext);

  const sidebarStyles: CSSProperties = {
    transform: showSidebar ? 'translateX(0)' : 'translateX(-120%)',
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <aside
      className={`fixed top-8 left-8 z-50 fadeInFromLeft mt-6 md:hidden w-44 overflow-y-auto shadow-lg rounded-r-3xl ${darkModeClasses}`}
      style={sidebarStyles}
    >
      <div className={`flex flex-col p-4 gap-4`}>
        {['/', '/about', '/services', '/projects', '/contact'].map(
          (path, index) => (
            <Link
              key={index}
              href={path}
              onClick={toggleSidebarHandler}
              className={`text-lg font-medium capitalize p-3 rounded-lg transition-all duration-300 ${linkHoverColor}`}
            >
              {path.substring(1) || 'Home'}
            </Link>
          )
        )}
      </div>
    </aside>
  );
}
