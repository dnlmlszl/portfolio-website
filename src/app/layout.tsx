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
  og: {
    title: string;
    description: string;
    image: string;
  };
  twitter: {
    card: string;
    description: string;
    images: string;
  };
}

export const viewport: ViewPort = {
  viewport: 'width=device-width, initial-scale=1.0',
};

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'LMD Website',
  description: 'Short introduction about myself and about my services',
  authors: 'LMD',

  keywords: [
    'full-stack development',
    'web development',
    'web-app development',
    'programming',
  ],
  og: {
    title: 'LMD Website',
    description: 'Short introduction about myself and about my services',
    image: 'http://localhost:3000/LMDpic.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Short introduction about myself and about my services',
    images: 'http://localhost:3000/LMDpic.jpg',
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
