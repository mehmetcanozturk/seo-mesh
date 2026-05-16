import type { Meta, StoryObj } from '@storybook/react';
import { Product, Offer, AggregateRating } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/Product' };
export default meta;

export const TemelUrun: StoryObj = {
  name: 'Temel Ürün',
  render: () => (
    <SchemaStory
      title="Product"
      description="Tek bir ürün sayfası. Fiyat bilgisi Offer ile iç içe geçirilir."
      source={`<Product
  name="WordPress Hosting"
  description="Hızlı NVMe SSD, LiteSpeed, ücretsiz SSL."
>
  <Offer
    prop="offers"
    price={99.9}
    priceCurrency="TRY"
    availability="https://schema.org/InStock"
  />
</Product>`}
    >
      <Product
        name="WordPress Hosting"
        description="Hızlı NVMe SSD, LiteSpeed, ücretsiz SSL."
      >
        <Offer
          prop="offers"
          price={99.9}
          priceCurrency="TRY"
          availability="https://schema.org/InStock"
        />
      </Product>
      <div className="product-card">
        <h2>WordPress Hosting</h2>
        <p>Hızlı NVMe SSD, LiteSpeed, ücretsiz SSL.</p>
        <div>
          <span className="price">₺99,90</span>
          <span className="price-currency">/ ay</span>
        </div>
        <div className="badge" style={{ marginTop: '0.75rem' }}>Stokta</div>
      </div>
    </SchemaStory>
  ),
};

export const CokluOffer: StoryObj = {
  name: 'Çoklu Offer (Dizi)',
  render: () => (
    <SchemaStory
      title="Product — Çoklu Offer"
      description="Aynı prop ile birden fazla Offer eklenince otomatik dizi oluşur."
      source={`<Product name="Hosting Paketi">
  <Offer prop="offers" price={49.9}  priceCurrency="TRY" />
  <Offer prop="offers" price={99.9}  priceCurrency="TRY" />
  <Offer prop="offers" price={199.9} priceCurrency="TRY" />
</Product>`}
    >
      <Product name="Hosting Paketi">
        <Offer prop="offers" price={49.9}  priceCurrency="TRY" />
        <Offer prop="offers" price={99.9}  priceCurrency="TRY" />
        <Offer prop="offers" price={199.9} priceCurrency="TRY" />
      </Product>
      <div className="product-card">
        <h2>Hosting Paketi</h2>
        <p>3 farklı fiyat kademesi — hepsi tek JSON-LD içinde dizi olarak.</p>
        {[49.9, 99.9, 199.9].map((p) => (
          <div key={p} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
            <span className="price" style={{ fontSize: '1.2rem' }}>₺{p.toFixed(2)}</span>
            <span className="price-currency">/ ay</span>
          </div>
        ))}
      </div>
    </SchemaStory>
  ),
};

export const UrunDegerlendirme: StoryObj = {
  name: 'Product + AggregateRating',
  render: () => (
    <SchemaStory
      title="Product + AggregateRating"
      description="Kullanıcı derecelendirmesi ürün şemasına eklenir."
      source={`<Product name="WordPress Hosting" description="Profesyonel hosting.">
  <Offer prop="offers" price={99.9} priceCurrency="TRY" />
  <AggregateRating
    prop="aggregateRating"
    ratingValue={4.8}
    reviewCount={312}
    bestRating={5}
  />
</Product>`}
    >
      <Product name="WordPress Hosting" description="Profesyonel hosting.">
        <Offer prop="offers" price={99.9} priceCurrency="TRY" />
        <AggregateRating
          prop="aggregateRating"
          ratingValue={4.8}
          reviewCount={312}
          bestRating={5}
        />
      </Product>
      <div className="product-card">
        <h2>WordPress Hosting</h2>
        <p>Profesyonel hosting.</p>
        <div className="stars">★★★★★ <span style={{ color: '#888', fontSize: '0.85rem' }}>4.8 (312 değerlendirme)</span></div>
        <div style={{ marginTop: '0.5rem' }}>
          <span className="price">₺99,90</span>
          <span className="price-currency">/ ay</span>
        </div>
      </div>
    </SchemaStory>
  ),
};
