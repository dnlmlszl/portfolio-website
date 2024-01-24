'use client';
import { createContext, ReactElement, useEffect, useState } from 'react';

const DarkThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function DarkThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem('isDarkTheme');
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('isDarkTheme', `true`);
      document!.querySelector('body')!.classList.add('dark');
      setIsDarkTheme(true);
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem('isDarkTheme')!
      );
      isDarkTheme && document!.querySelector('body')!.classList.add('dark');
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleThemeHandler(): void {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem('isDarkTheme')!
    );
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector('body')!.classList.toggle('dark');
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem('isDarkTheme', `${!isDarkTheme}`);
  }

  return (
    <DarkThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </DarkThemeContext.Provider>
  );
}

export default DarkThemeContext;
