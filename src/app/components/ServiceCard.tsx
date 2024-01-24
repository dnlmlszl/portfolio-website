'use client';

import { useContext } from 'react';
import DarkThemeContext from '../store/ThemeContext';
import clsx from 'clsx';

export default function ServiceCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: JSX.Element;
  children: string;
}) {
  const { isDarkTheme } = useContext(DarkThemeContext);

  const darkModeClasses = isDarkTheme
    ? 'bg-slate-950 text-slate-200'
    : 'bg-slate-100 text-slate-800';
  return (
    <div
      className={clsx(
        'border p-4 max-w-[20rem] rounded-lg shadow-xl flex items-start hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-105',
        darkModeClasses
      )}
    >
      <div className="text-2xl mr-4 text-emerald-600">{icon}</div>
      <div className="">
        <h3 className="text-base font-medium mb-2">{title}</h3>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
}
