import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | seo-mesh demo',
    default: 'seo-mesh demo',
  },
  description: 'Component-first JSON-LD structured data engine for React & Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <nav>
          <span className="logo">seo-mesh</span>
          <a href="/">Ana Sayfa</a>
          <a href="/urun">Ürün</a>
          <a href="/blog">Blog</a>
          <a href="/sss">SSS</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
