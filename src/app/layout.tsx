import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Providers } from './providers';
// @ts-ignore
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });

export const metadata: Metadata = {
  title: {
    default: 'ConstructHire - India\'s Construction Workforce Platform',
    template: '%s - ConstructHire',
  },
  description: 'Connect with verified construction workers, contractors, and companies. Find jobs, hire talent, bid on projects. The #1 platform for India\'s construction workforce.',
  keywords: ['construction', 'jobs', 'workers', 'contractors', 'hiring', 'India'],
  openGraph: {
    title: 'ConstructHire - India\'s Construction Workforce Platform',
    description: 'Connect with verified construction professionals',
    url: 'https://constructhire.in',
    siteName: 'ConstructHire',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable}`}
    >
      <body className="bg-background text-foreground">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}