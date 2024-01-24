'use client';

import { useContext } from 'react';
import DarkThemeContext, {
  DarkThemeContextProvider,
} from './store/ThemeContext';
import clsx from 'clsx';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { isDarkTheme } = useContext(DarkThemeContext);

  const darkModeClasses = isDarkTheme
    ? 'bg-slate-950 text-slate-200'
    : 'bg-slate-100 text-slate-800';
  return (
    <DarkThemeContextProvider>
      <html>
        <body className={clsx('p-8', darkModeClasses)}>
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </body>
      </html>
    </DarkThemeContextProvider>
  );
}
