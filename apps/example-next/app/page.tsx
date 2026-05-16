import type { Metadata } from 'next';
import { WebSite } from '@seo-mesh/next';

export const metadata: Metadata = {
  title: 'seo-mesh — Component-First Structured Data',
};

export default function HomePage() {
  return (
    <>
      <WebSite
        name="seo-mesh demo"
        url="https://seo-mesh.dev"
        description="Component-first JSON-LD engine for React & Next.js"
      />

      <div className="container">
        <div className="hero">
          <div className="badge">
            <span>●</span> JSON-LD otomatik oluşturuluyor
          </div>
          <h1>seo-mesh</h1>
          <p>
            Şema bileşenleri JSX olarak yazarsınız — JSON-LD otomatik üretilir.
            RSC uyumlu, sıfır config, tam tip güvenliği.
          </p>
        </div>

        <div className="card-grid">
          <div className="card">
            <h3>🛍 Ürün Sayfası</h3>
            <p>Product + Offer şeması. Nested bileşenler otomatik compose edilir.</p>
            <a className="demo-link" href="/urun">Demo →</a>
          </div>
          <div className="card">
            <h3>📝 Blog Yazısı</h3>
            <p>Article + Person şeması. Yazar bilgisi prop ile bağlanır.</p>
            <a className="demo-link" href="/blog">Demo →</a>
          </div>
          <div className="card">
            <h3>❓ SSS Sayfası</h3>
            <p>FAQPage + Question + Answer. Dizi otomatik oluşur.</p>
            <a className="demo-link" href="/sss">Demo →</a>
          </div>
        </div>

        <div className="schema-preview">
          <h4>Kaynak → JSON-LD (otomatik)</h4>
          <pre>{`import { Product, Offer } from "@seo-mesh/react";

<Product name="WordPress Hosting" description="Hızlı hosting">
  <Offer prop="offers" price={99.9} priceCurrency="TRY" />
</Product>

// ↓ Sayfaya enjekte edilen JSON-LD:

{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "WordPress Hosting",
  "description": "Hızlı hosting",
  "offers": {
    "@type": "Offer",
    "price": 99.9,
    "priceCurrency": "TRY"
  }
}`}</pre>
        </div>
      </div>
    </>
  );
}
