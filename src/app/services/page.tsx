'use client';

import { useContext } from 'react';
import DarkThemeContext from '../store/ThemeContext';

import {
  FaReact,
  FaNodeJs,
  FaPaintBrush,
  FaMobileAlt,
  FaDatabase,
  FaBootstrap,
  FaCss3Alt,
} from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiGraphql, SiRsocket } from 'react-icons/si';
import ServiceCard from '../components/ServiceCard';
import { services } from '../utils/services';

export default function Services(): JSX.Element {
  const { isDarkTheme } = useContext(DarkThemeContext);

  const darkModeClasses = isDarkTheme
    ? 'bg-gradient-to-t from-slate-950 via-slate-600 to-slate-950 text-slate-200'
    : 'bg-gradient-to-b from-slate-100 via-slate-300 to-slate-100 text-slate-600';

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 ${darkModeClasses}`}
    >
      <div className="self-start">
        <p className="w-full block text-left text-orange-500 uppercase mb-8 ml-4">
          services
        </p>
      </div>
      <div className="container">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-center mb-6 text-blue-400 drop-shadow-2xl">
          Expertise in Cutting-Edge Web Technologies
        </h1>
        <div className="flex justify-center max-w-7xl mx-auto px-4 py-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-8 px-12">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                icon={<service.Icon />}
              >
                {service.description}
              </ServiceCard>
            ))}
          </div>
        </div>
        <p className="text-sm md:text-base lg:text-lg text-center text-emerald-600 tracking-wider mb-2 md:mb-8 drop-shadow-xl">
          Full stack web development using modern technologies...
        </p>
      </div>
    </main>
  );
}
