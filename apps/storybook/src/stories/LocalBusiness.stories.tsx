import type { Meta, StoryObj } from '@storybook/react';
import { LocalBusiness, AggregateRating } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/LocalBusiness' };
export default meta;

export const Restoran: StoryObj = {
  name: 'LocalBusiness + AggregateRating',
  render: () => (
    <SchemaStory
      title="LocalBusiness"
      description="Yerel işletme şeması. Adres, telefon, çalışma saatleri ve derecelendirme içerir."
      source={`<LocalBusiness
  name="Kapadokya Mutfağı"
  telephone="+90 384 555 0101"
  priceRange="₺₺"
  openingHours="Mo-Su 09:00-23:00"
  url="https://kapadokyamutfagi.example.com"
>
  <AggregateRating
    prop="aggregateRating"
    ratingValue={4.7}
    reviewCount={523}
    bestRating={5}
  />
</LocalBusiness>`}
    >
      <LocalBusiness
        name="Kapadokya Mutfağı"
        telephone="+90 384 555 0101"
        priceRange="₺₺"
        openingHours="Mo-Su 09:00-23:00"
        url="https://kapadokyamutfagi.example.com"
      >
        <AggregateRating
          prop="aggregateRating"
          ratingValue={4.7}
          reviewCount={523}
          bestRating={5}
        />
      </LocalBusiness>
      <div className="local-card">
        <h2>Kapadokya Mutfağı</h2>
        <p>Yerel lezzetler, samimi atmosfer.</p>
        <div className="stars">★★★★★ <span style={{ color: '#888', fontSize: '0.85rem' }}>4.7 (523 değerlendirme)</span></div>
        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#555' }}>
          📞 +90 384 555 0101 &nbsp;·&nbsp; ₺₺ &nbsp;·&nbsp; 09:00–23:00
        </p>
        <div className="badge purple">LocalBusiness</div>
      </div>
    </SchemaStory>
  ),
};
