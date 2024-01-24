/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { useContext } from 'react';
import DarkThemeContext from '../store/ThemeContext';
import ContactForm from '../components/ContactForm';
import clsx from 'clsx';

export default function Contact() {
  const { isDarkTheme } = useContext(DarkThemeContext);

  const darkModeClasses = isDarkTheme
    ? 'bg-gradient-to-t from-slate-950 via-slate-600 to-slate-950 text-slate-200'
    : 'bg-gradient-to-b from-slate-100 via-slate-300 to-slate-100 text-slate-200';

  return (
    <main
      className={clsx(
        'flex min-h-screen flex-col items-start p-8',
        darkModeClasses
      )}
    >
      <p className="w-full block text-left text-orange-500 uppercase mb-8 md:mb-24 -mt-4">
        contact me
      </p>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center shadow-2xl bg-orange-500 mx-auto max-w-5xl w-full rounded-lg">
        <ContactForm />
        <div className="bg-orange-500 p-8 rounded-r-lg hidden lg:block">
          <Image
            src={'/contact.png'}
            width={700}
            height={700}
            priority
            alt="contact me"
          />
        </div>
      </section>
    </main>
  );
}
