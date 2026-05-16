import type { Meta, StoryObj } from '@storybook/react';
import { Article, Offer, JobPosting, Organization } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Advanced/Validation' };
export default meta;

export const ZorunluAlanEksik: StoryObj = {
  name: 'Dev uyarısı — eksik required field',
  render: () => (
    <SchemaStory
      title="Runtime Validation"
      description="Dev modunda zorunlu alan eksikse console.warn ile uyarı verilir. Browser DevTools Console'u açın."
      source={`// ❌ headline eksik → console.warn
<Article datePublished="2026-05-15" />

// ✅ tüm zorunlu alanlar var
<Article
  headline="Next.js ile JSON-LD"
  datePublished="2026-05-15"
/>`}
    >
      {/* Bu bileşen console'a uyarı verecek */}
      <Article datePublished="2026-05-15" headline={undefined as unknown as string} />
      <div className="product-card">
        <h2>Validation Demo</h2>
        <p>Browser DevTools → Console sekmesini açın.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#f87171' }}>
          ⚠ [seo-mesh] &lt;Article&gt; missing required field: "headline"
        </p>
        <div className="badge" style={{ marginTop: '0.75rem', background: '#2e2a1a', color: '#fbbf24', borderColor: '#fbbf2444' }}>
          Dev-only warning
        </div>
      </div>
    </SchemaStory>
  ),
};

export const ZorunluAlanTam: StoryObj = {
  name: 'TypeScript — required props zorunlu',
  render: () => (
    <SchemaStory
      title="TypeScript Zorlaması"
      description="headline ve datePublished Article için zorunludur. Eksik bırakılırsa TypeScript derleme hatası verir."
      source={`// ✅ Tüm zorunlu alanlar verildi
<Article
  headline="Next.js App Router ile JSON-LD"
  datePublished="2026-05-15"
  dateModified="2026-05-15"
  inLanguage="tr"
/>

// ✅ Offer için price + priceCurrency zorunlu
<Offer price={99.9} priceCurrency="TRY" />

// ✅ JobPosting için 5 alan zorunlu
<JobPosting
  title="Frontend Engineer"
  datePosted="2026-05-15"
  description="React ile..."
  hiringOrganization="seo-mesh"
  jobLocation="Remote"
/>`}
    >
      <Article
        headline="Next.js App Router ile JSON-LD"
        datePublished="2026-05-15"
        dateModified="2026-05-15"
        inLanguage="tr"
      />
      <div className="article-card">
        <h2>Tüm zorunlu alanlar mevcut</h2>
        <p>Console'da uyarı yok. TypeScript da hata vermiyor.</p>
        <div className="badge" style={{ marginTop: '0.75rem' }}>✓ Valid schema</div>
      </div>
    </SchemaStory>
  ),
};
