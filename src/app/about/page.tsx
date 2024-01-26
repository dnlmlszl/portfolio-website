/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { useContext } from 'react';
import DarkThemeContext from '../store/ThemeContext';
import Link from 'next/link';

import clsx from 'clsx';

export default function About() {
  const { isDarkTheme } = useContext(DarkThemeContext);

  const darkModeClasses = isDarkTheme
    ? 'bg-gradient-to-t from-slate-100 via-slate-600 to-slate-950 text-slate-200'
    : 'bg-gradient-to-b from-slate-100 via-slate-300 to-slate-100 text-slate-600';
  return (
    <main
      className={clsx(
        'flex min-h-screen flex-col items-center justify-start p-2 md:p-4 lg:p-8 relative mb-4',
        darkModeClasses
      )}
    >
      <p className="w-full block text-left text-orange-500 uppercase mb-4 md:mb-24 mt-2 md:-mt-4 pl-4 md:pl-0">
        about
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:mx-0 gap-24">
        <div className="px-12 z-10">
          <h1 className="text-4xl tracking-widest capitalize">hello you</h1>
          <p className="uppercase my-8">
            my name is{' '}
            <span className="text-orange-500 font-medium">daniel</span> and i am
            a freelance web application developer
          </p>
          <p className="text-md mt-2 mb-8 pt-0 max-w-[38rem]">
            Welcome to my website! Starting my career in{' '}
            <span className="text-orange-500 font-medium">economics</span>, I've
            been immersed in the world of web development for over a years now.
            My journey in coding and embracing new technologies is{' '}
            <span className="text-orange-500 font-medium">self-taught</span>
            ...
          </p>
          <p className="text-md my-8 mt-0 pt-0 max-w-[38rem]">
            I pay meticulous attention to detail and believe that thoroughness
            is the key to success. My expertise in both{' '}
            <span className="text-orange-500 font-medium">front-end</span> and
            <span className="text-orange-500 font-medium"> back-end</span>{' '}
            development is a testament to my comprehensive understanding.
          </p>
          <p className="text-md my-8 mt-0 pt-0 max-w-[38rem]">
            When I’m not coding, I enjoy reading about economics and staying
            <span className="text-orange-500 font-medium">
              {' '}
              up-to-date
            </span>{' '}
            with technological trends.
          </p>
          <p className="text-md my-2 mb-16 pt-0 max-w-[38rem]">
            My latest projects include an innovative web application for
            analyzing economic data, and a community platform that facilitates
            dialogue...
          </p>
          <Link
            href="/contact"
            className="uppercase text-xs sm:text-base px-2 py-4 sm:px-8 sm:py-4 bg-orange-500 hover:bg-blue-400 text-slate-800 tracking-widest mb-4"
          >
            contact me for a chat
          </Link>
        </div>
        <div className="hidden xl:block mt-[-2rem]">
          <Image
            src={'/LMD.png'}
            alt="LMD"
            width={420}
            height={420}
            priority
            className="rounded-md w-4/5 h-auto mt-[2rem]"
          />
        </div>
      </div>
    </main>
  );
}
