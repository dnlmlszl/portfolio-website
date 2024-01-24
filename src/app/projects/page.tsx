'use client';
import Image from 'next/image';
import { useContext, useState } from 'react';
import DarkThemeContext from '../store/ThemeContext';
import PortfolioItem from '../components/PortfolioItem';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_PORTFOLIO_DATA } from '../grapql/queries';
import clsx from 'clsx';

interface Sys {
  id: string;
  firstPublishedAt: string;
  publishedAt: string;
}

interface ImageAsset {
  url: string;
  title: string;
  width: number;
  height: number;
}

interface Items {
  sys: Sys;
  title: string;
  imageCollection: {
    items: ImageAsset[];
  };
  description: string;
  stack: string[];
  type: string;
  url: string;
  web: string;
}

export default function Projects() {
  const { isDarkTheme } = useContext(DarkThemeContext);
  const [selectedStack, setSelectedStack] = useState('all');

  const { data, error, loading } = useQuery(GET_PORTFOLIO_DATA, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const portfolioItems = data?.portfolioCollection?.items || [];

  const filteredItems = portfolioItems.filter(
    (item: Items) =>
      selectedStack === 'all' || item.type.includes(selectedStack)
  );

  const buttonClasses = (type: string) =>
    `text-lg font-medium tracking-widest ${
      selectedStack === type ? 'text-orange-500' : ''
    }`;

  const darkModeClasses = isDarkTheme
    ? 'bg-gradient-to-t from-slate-950 via-slate-600 to-slate-950 text-slate-200'
    : 'bg-gradient-to-b from-slate-100 via-slate-300 to-slate-100 text-slate-600';

  return (
    <main
      className={clsx(
        'flex min-h-screen flex-col items-center p-4',
        darkModeClasses
      )}
    >
      <div className="self-start">
        <p className="w-full block text-left text-orange-500 uppercase mb-8 ml-4">
          portfolio
        </p>
        <div className="flex justify-center gap-4 ml-4 text-blue-600 dark:text-blue-400">
          <button
            onClick={() => setSelectedStack('all')}
            className={buttonClasses('all')}
          >
            All
          </button>
          <button
            onClick={() => setSelectedStack('Frontend')}
            className={buttonClasses('Frontend')}
          >
            Frontend
          </button>
          <button
            onClick={() => setSelectedStack('Backend')}
            className={buttonClasses('Backend')}
          >
            Backend
          </button>
          <button
            onClick={() => setSelectedStack('Full stack')}
            className={buttonClasses('Full stack')}
          >
            Fullstack
          </button>
        </div>
      </div>

      <div className="flex justify-centerrounded-lg px-4 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mx-auto gap-2 px-12">
          {filteredItems.map((item: Items) => (
            <PortfolioItem
              key={item.sys.id}
              sys={item.sys}
              title={item.title}
              description={item.description}
              imageCollection={item.imageCollection}
              stack={item.stack}
              type={item.type}
              url={item.url}
              web={item.web}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
