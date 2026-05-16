import type { Meta, StoryObj } from '@storybook/react';
import { SoftwareApplication, Offer, AggregateRating } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/SoftwareApplication' };
export default meta;

export const Uygulama: StoryObj = {
  name: 'SoftwareApplication',
  render: () => (
    <SchemaStory
      title="SoftwareApplication"
      description="Yazılım uygulaması şeması. App Store, Google Play veya web uygulamaları için kullanılır."
      source={`<SoftwareApplication
  name="seo-mesh"
  applicationCategory="DeveloperApplication"
  operatingSystem="Web"
  url="https://seo-mesh.dev"
>
  <Offer prop="offers" price={0} priceCurrency="USD" />
  <AggregateRating
    prop="aggregateRating"
    ratingValue={4.9}
    reviewCount={87}
    bestRating={5}
  />
</SoftwareApplication>`}
    >
      <SoftwareApplication
        name="seo-mesh"
        applicationCategory="DeveloperApplication"
        operatingSystem="Web"
        url="https://seo-mesh.dev"
      >
        <Offer prop="offers" price={0} priceCurrency="USD" />
        <AggregateRating prop="aggregateRating" ratingValue={4.9} reviewCount={87} bestRating={5} />
      </SoftwareApplication>
      <div className="software-card">
        <h2>seo-mesh</h2>
        <p>Component-first JSON-LD engine for React & Next.js</p>
        <div className="stars">★★★★★ <span style={{ color: '#888', fontSize: '0.85rem' }}>4.9 (87 değerlendirme)</span></div>
        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#555' }}>Web · DeveloperApplication</p>
        <div className="badge" style={{ marginTop: '0.5rem' }}>Ücretsiz</div>
      </div>
    </SchemaStory>
  ),
};
