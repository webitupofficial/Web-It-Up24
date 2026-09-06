import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Web It Up 24 — Web Design & Development Agency for Startups',
  description: 'We design and develop fast, conversion-focused websites, brand identities, SEO foundations, and automation systems for ambitious startups and technology companies worldwide.',
  metadataBase: new URL('https://webitup24.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Web It Up 24 — International Web Design & Development Agency',
    description: 'Design, code development, SEO foundations, brand identity, performance optimization, and automation for growing businesses.',
    url: 'https://webitup24.com',
    siteName: 'Web It Up 24',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web It Up 24 — Web Design & Development Agency',
    description: 'We build websites that help modern businesses move forward.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* Anti-FOUC theme detector script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('webitup24-theme');
                  if (saved === 'dark' || saved === 'light') {
                    document.documentElement.setAttribute('data-theme', saved);
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5R5T3YHNQX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5R5T3YHNQX');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
