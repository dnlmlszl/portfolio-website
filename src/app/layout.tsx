import './globals.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { DarkThemeContextProvider } from './store/ThemeContext';
import { PortfolioContextProvider } from './store/PortfolioContext';
import { ApolloWrapper } from './lib/ApolloWrapper';
import clsx from 'clsx';
import { nunito } from './utils/font';

interface ViewPort {
  viewport: string;
}
interface Metadata {
  metadataBase: URL;
  title: string;
  description: string;
  authors: string;
  keywords: string[];
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    site: string;
    creator: string;
    images: string;
  };
}

export const viewport: ViewPort = {
  viewport: 'width=device-width, initial-scale=1.0',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lmdcode.dev'),
  title: 'LMD Website - Full Stack Web Developer',
  description:
    'Short introduction about myself and about my services. Explore my professional journey and portfolio',
  authors: 'LMD',

  keywords: [
    'full-stack development',
    'web development',
    'programming',
    'frontend development',
    'backend development',
    'software engineering',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'Koa.js',
    'Tailwind CSS',
    'GraphQL',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
  ],
  canonical: 'https://www.lmdcode.dev',
  openGraph: {
    title: 'LMD Website',
    description:
      'Explore the professional journey and portfolio of LMD, a full-stack web developer specializing in modern web technologies.',
    image: 'https://www.lmdcode.dev/LMDpic.jpg',
    url: 'https://www.lmdcode.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LMD Website - Full Stack Web Developer',
    site: '@dn1el_lszl0',
    creator: '@dn1el_lszl0',
    description:
      'Explore the professional journey and portfolio of LMD, a full-stack web developer specializing in modern web technologies.',
    images: 'https://www.lmdcode.dev/LMDpic.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DarkThemeContextProvider>
      <PortfolioContextProvider>
        <html lang="en">
          <body
            className={clsx('bg-white dark:bg-slate-950', nunito.className)}
          >
            <Navbar />
            <Sidebar />
            <ApolloWrapper>{children}</ApolloWrapper>
          </body>
        </html>
      </PortfolioContextProvider>
    </DarkThemeContextProvider>
  );
}
