'use client';
import { createContext, ReactElement, useEffect, useState } from 'react';

const PortfolioContext = createContext({
  showSidebar: false,
  toggleSidebarHandler: () => {},
  setPortfolioDataInContext: (data: any) => {},
  portfolioItems: [],
});

interface PortfolioProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export function PortfolioContextProvider(props: PortfolioProps): ReactElement {
  const [showSidebar, setShowSidebar] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState([]);

  const setPortfolioDataInContext = (data: any) => {
    setPortfolioItems(data);
  };

  function toggleSidebarHandler(): void {
    setShowSidebar(!showSidebar);
  }

  return (
    <PortfolioContext.Provider
      value={{
        showSidebar,
        toggleSidebarHandler,
        portfolioItems,
        setPortfolioDataInContext,
      }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContext;
