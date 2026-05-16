import type { Meta, StoryObj } from '@storybook/react';
import { NewsArticle, Person, Organization } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/NewsArticle' };
export default meta;

export const HaberMakalesi: StoryObj = {
  name: 'NewsArticle',
  render: () => (
    <SchemaStory
      title="NewsArticle"
      description="Haber makalesi şeması. Google Haberler ve Top Stories karuselinde görünmek için gereklidir. Article'dan farklı olarak dateline ve baskı bilgileri içerir."
      source={`<NewsArticle
  headline="Türkiye'de Yapay Zeka Yatırımları Rekor Kırdı"
  datePublished="2026-05-15T09:00:00+03:00"
  dateModified="2026-05-15T11:30:00+03:00"
  inLanguage="tr"
  isAccessibleForFree="True"
>
  <Person prop="author" name="Elif Şahin" url="https://haberler.example.com/elif" />
  <Organization
    prop="publisher"
    name="TechHaber"
    url="https://haberler.example.com"
    logo="https://haberler.example.com/logo.png"
  />
</NewsArticle>`}
    >
      <NewsArticle
        headline="Türkiye'de Yapay Zeka Yatırımları Rekor Kırdı"
        datePublished="2026-05-15T09:00:00+03:00"
        dateModified="2026-05-15T11:30:00+03:00"
        inLanguage="tr"
        isAccessibleForFree="True"
      >
        <Person prop="author" name="Elif Şahin" url="https://haberler.example.com/elif" />
        <Organization prop="publisher" name="TechHaber" url="https://haberler.example.com" logo="https://haberler.example.com/logo.png" />
      </NewsArticle>
      <div className="article-card">
        <p className="meta">TechHaber · 15 Mayıs 2026, 09:00</p>
        <h2>Türkiye'de Yapay Zeka Yatırımları Rekor Kırdı</h2>
        <p>Yazan: Elif Şahin</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <div className="badge blue">NewsArticle</div>
          <div className="badge">Ücretsiz Erişim</div>
        </div>
      </div>
    </SchemaStory>
  ),
};

export const OdemeliIcerik: StoryObj = {
  name: 'Paywall (isAccessibleForFree)',
  render: () => (
    <SchemaStory
      title="NewsArticle — Ücretli İçerik"
      description="Paywall arkasındaki içerik için isAccessibleForFree ve hasPart kullanılır. Google, abonelik içeriklerini özel etiketle gösterir."
      source={`<NewsArticle
  headline="Yapay Zekanın Ekonomiye Etkisi: Kapsamlı Analiz"
  datePublished="2026-05-15"
  inLanguage="tr"
  isAccessibleForFree="False"
  hasPart={JSON.stringify({
    "@type": "WebPageElement",
    "isAccessibleForFree": "False",
    "cssSelector": ".premium-content"
  })}
>
  <Person prop="author" name="Dr. Ahmet Koç" />
  <Organization prop="publisher" name="Ekonomi Gazetesi" />
</NewsArticle>`}
    >
      <NewsArticle
        headline="Yapay Zekanın Ekonomiye Etkisi: Kapsamlı Analiz"
        datePublished="2026-05-15"
        inLanguage="tr"
        isAccessibleForFree="False"
      >
        <Person prop="author" name="Dr. Ahmet Koç" />
        <Organization prop="publisher" name="Ekonomi Gazetesi" />
      </NewsArticle>
      <div className="article-card">
        <p className="meta">Ekonomi Gazetesi · 15 Mayıs 2026</p>
        <h2>Yapay Zekanın Ekonomiye Etkisi: Kapsamlı Analiz</h2>
        <p>Yazan: Dr. Ahmet Koç</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <div className="badge blue">NewsArticle</div>
          <div className="badge" style={{ background: '#2e1a1a', color: '#f87171', borderColor: '#f8717144' }}>Abonelik Gerekli</div>
        </div>
      </div>
    </SchemaStory>
  ),
};
