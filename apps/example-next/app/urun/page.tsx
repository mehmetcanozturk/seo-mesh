import type { Metadata } from 'next';
import { Product, Offer, OpenGraph, Canonical } from '@seo-mesh/next';

export const metadata: Metadata = {
  title: 'WordPress Hosting',
};

export default function UrunPage() {
  return (
    <>
      <OpenGraph
        title="WordPress Hosting — seo-mesh demo"
        description="Hızlı NVMe SSD diskler, LiteSpeed web sunucusu ve ücretsiz SSL ile profesyonel WordPress hosting."
        image="https://seo-mesh.dev/og/urun.png"
        imageAlt="WordPress Hosting"
        type="website"
        url="https://seo-mesh.dev/urun"
      />
      <Canonical href="https://seo-mesh.dev/urun" />
      <Product name="WordPress Hosting" description="Hızlı NVMe SSD diskler, LiteSpeed web sunucusu ve ücretsiz SSL sertifikası ile profesyonel WordPress hosting çözümü.">
        <Offer
          prop="offers"
          price={99.9}
          priceCurrency="TRY"
          availability="https://schema.org/InStock"
          url="https://seo-mesh.dev/urun"
        />
      </Product>

      <div className="container">
        <div className="page-header">
          <h1>WordPress Hosting</h1>
          <p className="meta">
            Hızlı NVMe SSD diskler, LiteSpeed web sunucusu ve ücretsiz SSL sertifikası ile
            profesyonel WordPress hosting çözümü.
          </p>
        </div>

        <div className="price-box">
          <span className="amount">99,90</span>
          <span className="currency">TRY</span>
          <span className="period">/ ay</span>
        </div>

        <ul className="features">
          <li>50 GB NVMe SSD disk alanı</li>
          <li>Sınırsız bant genişliği</li>
          <li>Ücretsiz SSL sertifikası (Let&apos;s Encrypt)</li>
          <li>LiteSpeed + LSCache önbelleği</li>
          <li>Günlük otomatik yedekleme</li>
          <li>7/24 teknik destek</li>
        </ul>

        <div className="schema-preview">
          <h4>Bu sayfadan üretilen JSON-LD (kaynak kodu görüntüle → &lt;head&gt;)</h4>
          <pre>{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "WordPress Hosting",
  "description": "Hızlı NVMe SSD diskler...",
  "offers": {
    "@type": "Offer",
    "price": 99.9,
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock"
  }
}`}</pre>
        </div>
      </div>
    </>
  );
}
