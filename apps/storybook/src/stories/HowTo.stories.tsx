import type { Meta, StoryObj } from '@storybook/react';
import { HowTo, HowToStep } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/HowTo' };
export default meta;

const adimlar = [
  { name: 'pnpm ile kurun', text: 'pnpm add @seo-mesh/next komutunu çalıştırın.' },
  { name: 'Bileşeni import edin', text: 'import { Product, Offer } from "@seo-mesh/next" ile import edin.' },
  { name: 'JSX\'e ekleyin', text: 'Şema bileşenini sayfa bileşeninize ekleyin.' },
  { name: 'JSON-LD\'yi doğrulayın', text: 'schema.org/validator adresinden doğrulayın.' },
];

export const NasilYapilir: StoryObj = {
  name: 'HowTo',
  render: () => (
    <SchemaStory
      title="HowTo"
      description="Nasıl yapılır şeması. Google'da adım adım rehber olarak görünür. Her HowToStep için name ve text gereklidir."
      source={`<HowTo
  name="seo-mesh Nasıl Kurulur?"
  description="4 adımda seo-mesh kurulumu."
  totalTime="PT5M"
>
  <HowToStep prop="step" name="pnpm ile kurun" text="pnpm add @seo-mesh/next" />
  <HowToStep prop="step" name="Import edin" text="import { Product } from '@seo-mesh/next'" />
  <HowToStep prop="step" name="JSX'e ekleyin" text="Bileşeni sayfanıza ekleyin." />
  <HowToStep prop="step" name="Doğrulayın" text="schema.org/validator ile kontrol edin." />
</HowTo>`}
    >
      <HowTo
        name="seo-mesh Nasıl Kurulur?"
        description="4 adımda seo-mesh kurulumu ve kullanımı."
        totalTime="PT5M"
      >
        {adimlar.map((a, i) => (
          <HowToStep key={i} prop="step" name={a.name} text={a.text} />
        ))}
      </HowTo>
      <div className="faq-card">
        <h2>seo-mesh Nasıl Kurulur?</h2>
        {adimlar.map((a, i) => (
          <div key={i} className="faq-item" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '1.5rem', height: '1.5rem', background: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#000', marginTop: '0.1rem' }}>
              {i + 1}
            </div>
            <div>
              <h4>{a.name}</h4>
              <p>{a.text}</p>
            </div>
          </div>
        ))}
      </div>
    </SchemaStory>
  ),
};
