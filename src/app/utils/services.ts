// services.ts
import {
  FaReact,
  FaNodeJs,
  FaPaintBrush,
  FaMobileAlt,
  FaDatabase,
  FaBootstrap,
} from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiGraphql, SiRsocket } from 'react-icons/si';
import { ReactElement, ComponentType } from 'react';

interface Service {
  title: string;
  Icon: ComponentType;
  description: string;
}

export const services: Service[] = [
  {
    title: 'React Development',
    Icon: FaReact,
    description:
      'Building interactive websites and unique user experiences with React.',
  },
  {
    title: 'Next.js Development',
    Icon: SiNextdotjs,
    description:
      'Creating fast and optimized web applications with Next.js, offering SEO-friendly solutions.',
  },
  {
    title: 'Backend Development',
    Icon: FaNodeJs,
    description:
      'Developing applications with Express, Koa.js, and Django; managing databases using MongoDB, PostgreSQL, and Supabase or Firebase.',
  },
  {
    title: 'UI/UX Design',
    Icon: FaPaintBrush,
    description:
      'Designing and implementing goal-oriented, user-friendly design solutions.',
  },
  {
    title: 'Frontend Technologies',
    Icon: FaMobileAlt,
    description:
      'Creating responsive websites using Bootstrap and Tailwind CSS, integrating animations and interactive elements.',
  },
  {
    title: 'Database Management',
    Icon: FaDatabase,
    description:
      'Strong database management skills, experienced in using MongoDB, PostgreSQL, Firebase, and Supabase.',
  },
  {
    title: 'Bootstrap & Tailwind CSS',
    Icon: FaBootstrap,
    description:
      'Developing customized and rapidly deployable user interfaces with Bootstrap and Tailwind CSS.',
  },
  {
    title: 'Redux State Management',
    Icon: SiRedux,
    description:
      'Advanced knowledge of Redux for complex state management and scalable application architecture.',
  },
  {
    title: 'GraphQL APIs',
    Icon: SiGraphql,
    description:
      'Efficient and flexible data retrieval with GraphQL, designing optimized and well-structured API solutions.',
  },
  {
    title: 'WebSocket Technologies',
    Icon: SiRsocket,
    description:
      'Developing real-time applications using WebSocket technology, creating interactive communication channels.',
  },
  // További szolgáltatások...
];
