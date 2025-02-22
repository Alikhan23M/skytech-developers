import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SkyTech Developers | Home',
  description: 'Leading software development agency specializing in web development, mobile apps, UI/UX design, and cybersecurity solutions.',
  keywords: 'SkyTech Developers, software development, web development, mobile apps, UI/UX design, cybersecurity, IT consulting, business websites, SaaS development, e-commerce solutions, cloud computing, software engineering, technology services',
  icons: {
    icon: "/images/icons/favicon.ico", 
    shortcut: "/images/icons/favicon-16x16.png", 
    apple: "/images/icons/apple-touch-icon.png", 
},
  openGraph: {
    title: 'SkyTech Developers - Modern Software Solutions Agency',
    description: 'Leading software development agency specializing in web development, mobile apps, UI/UX design, and cybersecurity solutions.',
    url: 'https://skytech-developers.vercel.app',
    siteName: 'SkyTech Developers',
    images: [
      {
        url: 'https://skytech-developers.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'SkyTech Developers Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkyTech Developers - Modern Software Solutions Agency',
    description: 'Leading software development agency specializing in web development, mobile apps, UI/UX design, and cybersecurity solutions.',
    images: ['https://skytech-developers.vercel.app/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
