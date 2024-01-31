'use client';

import Image from 'next/image';
import Link from 'next/link';
import { truncateWithFullWords } from '../utils/truncate-words';
import { FaGithub, FaCode, FaTimes } from 'react-icons/fa';
import clsx from 'clsx';
import { useState } from 'react';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    props.imageCollection.items[0]
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectImage = (image: any) => {
    setSelectedImage(image);
  };

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
                className={clsx(
                  'flex items-center justify-center gap-2 w-full bg-black text-white hover:bg-black/80 py-2 md:py-3 px-2 md:px-4 font-medium tracking-widest shadow-md hover:shadow-xl transition duration-200 linear',
                  'animatedButton'
                )}
              >
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                <FaGithub size={25} />
                <span className="text-sm lg:text-lg">GitHub</span>
              </Link>
              <Link
                href={props.web || ''}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  `${!props.web ? 'pointer-events-none' : ''}`,
                  'flex items-center justify-center w-full gap-2  bg-orange-500 text-black hover:bg-orange-500/90 py-2 md:py-3 px-2 md:px-4 font-medium tracking-widest shadow-md hover:shadow-xl transition duration-200 linear'
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
          <div className="relative w-full h-32 md:h-64" onClick={openModal}>
            <Image
              src={firstImage.url}
              alt={props.title}
              priority
              width={firstImage.width}
              height={firstImage.height}
              className="absolute inset-0 w-full h-full object-cover object-left-top rounded-md px-2 md:px-6 mt-2 md:mt-0"
            />
          </div>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-[1000]">
          <div className="bg-white/50 p-8 rounded-lg max-w-3xl w-full">
            <button
              onClick={closeModal}
              className={clsx(
                'relative inline-flex items-center justify-center p-2 rounded-full mb-4 tracking-widest',
                'bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300',
                'transition duration-300 ease-in-out transform hover:scale-105'
              )}
            >
              <span className="text-white font-medium text-lg">
                <FaTimes />
              </span>
            </button>

            {/* Main picture */}
            <div className="mb-12">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                width={selectedImage.width}
                height={selectedImage.height}
                className="w-full object-cover object-left-top rounded-md"
              />
            </div>

            {/* Small gallery */}
            <div className="flex items-center overflow-x-auto justify-start gap-4">
              {props.imageCollection.items.map((image, index) => (
                <Image
                  key={index}
                  src={image.url}
                  alt={image.title}
                  width={image.width}
                  height={image.height}
                  className="w-auto h-24 mr-2 cursor-pointer object-cover object-left-top"
                  onClick={() => selectImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
