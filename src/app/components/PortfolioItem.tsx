'use client';

import Image from 'next/image';
import Link from 'next/link';
import { truncateWithFullWords } from '../utils/truncate-words';
import { FaGithub, FaCode } from 'react-icons/fa';
import clsx from 'clsx';

interface ImageAsset {
  url: string;
  title: string;
  width: number;
  height: number;
}

interface Sys {
  id: string;
  firstPublishedAt: string;
  publishedAt: string;
}

interface PortfolioItemProps {
  sys: Sys;
  title: string;
  url: string;
  imageCollection: {
    items: ImageAsset[];
  };
  description: string;
  stack: string[];
  type: string;
  web: string;
}
export default function PortfolioItem(props: PortfolioItemProps): JSX.Element {
  const firstImage = props.imageCollection.items[0];
  return (
    <div className="relative p-0 md:p-2 mb-6">
      <div className="backdrop-filter backdrop-blur-md dark:bg-slate-300 dark:bg-opacity-30 bg-slate-300/30 border dark:border-gray-200/30 shadow-lg rounded-lg overflow-hidden p-6">
        <div className="p-2 md:p-6 space-y-2">
          <h3 className="text-2xl font-semibold capitalize tracking-widest">
            {props.title}
          </h3>

          <div className="w-ful flex flex-wrap gap-1 -ml-2">
            {props.stack.map((stck, index) => (
              <span
                key={index}
                className="text-xs lg:text-sm hover:bg-orange-500 py-1 px-2 rounded hover:text-white"
              >
                {stck}
              </span>
            ))}
          </div>
          <div className="flex flex-col">
            <p className="text-opacity-70 text-xs md:text-sm lg:text-base max-w-[25rem]">
              {truncateWithFullWords(props.description, 90)}
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Link
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-black text-white hover:bg-black/80 py-2 md:py-3 px-2 md:px-4 rounded font-medium tracking-widest shadow-md hover:shadow-xl transition duration-200 linear"
              >
                <FaGithub size={25} />
                <span className="text-sm lg:text-lg">GitHub</span>
              </Link>
              <Link
                href={props.web || ''}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  `${!props.web ? 'pointer-events-none' : ''}`,
                  'flex items-center justify-center w-full gap-2  bg-orange-500 text-black hover:bg-orange-500/90 py-2 md:py-3 px-2 md:px-4 rounded font-medium tracking-widest shadow-md hover:shadow-xl transition duration-200 linear'
                )}
              >
                <FaCode size={25} />
                <span className="text-sm lg:text-lg">Website</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 capitalize text-sm bg-opacity-10 bg-slate-700 hover:bg-orange-500 hover:text-white px-2 py-1 rounded">
          {props.type}
        </div>
        {firstImage && (
          <div className="relative w-full h-32 md:h-64">
            <Image
              src={firstImage.url}
              alt={props.title}
              priority
              width={firstImage.width}
              height={firstImage.height}
              className="absolute inset-0 w-full h-full object-cover rounded-md px-2 md:px-6 mt-2 md:mt-0"
            />
          </div>
        )}
      </div>
    </div>
  );
}
