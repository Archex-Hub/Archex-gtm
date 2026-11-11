import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const dmSerifDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/dm-serif-display.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
});

const instrumentSans = localFont({
  src: [
    {
      path: '../../public/fonts/instrument-sans-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/instrument-sans-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/instrument-sans-600.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Archex GTM — Something Is Taking Shape',
  description:
    'A new Archex practice focused on bringing ideas, products and businesses to market. Coming soon.',
  metadataBase: new URL('https://gtm.archexweb.in'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Archex GTM — Something Is Taking Shape',
    description:
      'A new Archex practice focused on bringing ideas, products and businesses to market. Coming soon.',
    url: 'https://gtm.archexweb.in',
    siteName: 'Archex GTM',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archex GTM — Something Is Taking Shape',
    description:
      'A new Archex practice focused on bringing ideas, products and businesses to market. Coming soon.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${instrumentSans.variable}`}
    >
      <body className="min-h-screen bg-ink text-paper antialiased flex flex-col selection:bg-signal selection:text-paper-soft">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

