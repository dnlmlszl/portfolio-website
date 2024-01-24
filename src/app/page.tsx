'use client';

import Image from 'next/image';
import { useContext } from 'react';
import DarkThemeContext from './store/ThemeContext';
import Link from 'next/link';
import {
  FaArrowRight,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMeta,
  FaTwitter,
} from 'react-icons/fa6';
import clsx from 'clsx';

export default function Home() {
  const { isDarkTheme } = useContext(DarkThemeContext);

  const darkModeClasses = isDarkTheme
    ? 'bg-slate-950 text-slate-100'
    : 'bg-slate-100 text-slate-600';

  const socialIcons = [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/laszlo-daniel-a39a956b/',
      icon: <FaLinkedinIn />,
    },
    {
      name: 'github',
      url: 'https://github.com/dnlmlszl',
      icon: <FaGithub />,
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/dn1el_lszl0',
      icon: <FaTwitter />,
    },
    {
      name: 'discord',
      url: 'https://www.discord.com/lmd_dev/',
      icon: <FaDiscord />,
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/lmd.dev/',
      icon: <FaMeta />,
    },
  ];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center py-16 ${darkModeClasses}`}
    >
      <section className="w-full xl:w-10/12 max-w-7xl px-4">
        <article className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 w-full">
          <Image
            src={'/LMD.png'}
            alt="LMD professional"
            width={700}
            height={700}
            priority
            className={clsx(
              'hidden lg:block absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0',
              'fadeIn'
            )}
          />

          <div className="flex flex-col gap-8 lg:gap-28 z-10 flex-1">
            <div className="flex flex-col items-center lg:items-start text-section-1 contentDropBounce">
              <h3 className="mb-4 text-center lg:text-left text-2xl uppercase tracking-widest">
                About me
              </h3>
              <p className="text-sm xl:text-base text-justify lg:text-left dark:text-slate-100 max-w-[25rem]">
                Numbers whisperer by day, web dev enthusiast by night.
                Documenting my coding odyssey at X, one post at a time. Fuelled
                by sports, questioning the status quo.
              </p>
              <Link
                href="/about"
                className="flex items-center gap-2 w-48 mt-8 uppercase tracking-widest text-orange-600 hover:text-blue-400 transition duration-200"
              >
                Learn more <FaArrowRight />
              </Link>
            </div>
            <div className="flex flex-col items-center lg:items-start text-section-2 contentDropBounce">
              <h3 className="mb-4 text-2xl text-center lg:text-left uppercase tracking-widest">
                My work
              </h3>
              <p className="text-sm xl:text-base text-justify lg:text-left dark:text-slate-100 max-w-[25rem]">
                I specialize in crafting web applications with a commitment to
                quality and an exceptional user experience. By dedicating my
                full attention to a single project at a time, I ensure
                continuous support and meticulous focus, which is the
                cornerstone of the premium service I offer. This approach not
                only enriches the quality of work but also elevates the overall
                user satisfaction.
              </p>
              <Link
                href="/projects"
                className=" flex items-center gap-2 w-48 mt-8 uppercase tracking-widest text-orange-600 hover:text-blue-400 transition duration-200"
              >
                Visit portfolio <FaArrowRight />
              </Link>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-4 text-section-3 contentDropBounce">
              <p className="mb-4 text-sm lg:text-base mt-12 max-w-[25rem] lg:max-w-[30rem] lg:mt-0 uppercase tracking-widest">
                Join my tech journey on social media for daily insights and
                behind-the-scenes content!
              </p>
              <div className="flex">
                {socialIcons.map((icon) => (
                  <Link
                    key={icon.name}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pr-4 tracking-widest text-2xl hover:text-blue-400 transition duration-200 iconRotate"
                  >
                    {icon.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col order-first lg:order-last items-center lg:items-end flex-1 z-10 mt-8 lg:mt-0 lg:w-full">
            <h1 className="text-3xl xl:text-4xl text-orange-500 mb-2 lg:mb-4 text-center lg:text-justify contentDropBounce tracking-widest uppercase">
              Hi, my name is LMD!
            </h1>
            <p className="text-sm xl:text-base text-justify lg:text-right dark:text-slate-100 max-w-[25rem] lg:max-w-full">
              As an economist deeply invested in web development, I bring the
              precision and rigor of an internal auditor to every task I
              undertake. Rest assured, my approach is as stringent and
              uncompromising as you would expect from the sharpest of minds in
              the field.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
