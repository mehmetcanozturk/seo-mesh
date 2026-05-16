import type { Meta, StoryObj } from '@storybook/react';
import { SchemaGraph, WebSite, Organization, Article, Person, BreadcrumbList, ListItem } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Advanced/SchemaGraph' };
export default meta;

export const TemelGraph: StoryObj = {
  name: '@graph — WebSite + Organization',
  render: () => (
    <SchemaStory
      title="SchemaGraph"
      description="Birden fazla root schema bileşenini tek bir @graph bloğunda birleştirir. Layout'ta kullanmak için idealdir."
      source={`// app/layout.tsx
<SchemaGraph>
  <WebSite name="seo-mesh" url="https://seo-mesh.dev" />
  <Organization
    name="seo-mesh"
    url="https://seo-mesh.dev"
    email="hello@seo-mesh.dev"
  />
  {children}
</SchemaGraph>

// → TEK <script> etiketi:
// { "@context": "...", "@graph": [ WebSite, Organization ] }`}
    >
      <SchemaGraph>
        <WebSite name="seo-mesh" url="https://seo-mesh.dev" />
        <Organization name="seo-mesh" url="https://seo-mesh.dev" email="hello@seo-mesh.dev" />
      </SchemaGraph>
      <div className="website-card">
        <h2>SchemaGraph</h2>
        <p>İki ayrı bileşen → tek <code>@graph</code> bloğu olarak enjekte edilir.</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <div className="badge blue">WebSite</div>
          <div className="badge purple">Organization</div>
          <div className="badge">→ @graph</div>
        </div>
      </div>
    </SchemaStory>
  ),
};

export const SayfaGraph: StoryObj = {
  name: '@graph — Article + BreadcrumbList',
  render: () => (
    <SchemaStory
      title="SchemaGraph — Sayfa İçi"
      description="Sayfa düzeyinde birden fazla schema türü tek @graph içinde birleşir. Google bu yapıyı entity-graph olarak anlar."
      source={`<SchemaGraph>
  <BreadcrumbList>
    <ListItem prop="itemListElement" position={1} name="Ana Sayfa" item="https://seo-mesh.dev" />
    <ListItem prop="itemListElement" position={2} name="Blog" item="https://seo-mesh.dev/blog" />
  </BreadcrumbList>
  <Article
    headline="Next.js ile JSON-LD"
    datePublished="2026-05-15"
    inLanguage="tr"
  >
    <Person prop="author" name="Can Kaptaner" />
  </Article>
</SchemaGraph>`}
    >
      <SchemaGraph>
        <BreadcrumbList>
          <ListItem prop="itemListElement" position={1} name="Ana Sayfa" item="https://seo-mesh.dev" />
          <ListItem prop="itemListElement" position={2} name="Blog" item="https://seo-mesh.dev/blog" />
        </BreadcrumbList>
        <Article headline="Next.js ile JSON-LD" datePublished="2026-05-15" inLanguage="tr">
          <Person prop="author" name="Can Kaptaner" />
        </Article>
      </SchemaGraph>
      <div className="article-card">
        <p className="meta">Ana Sayfa › Blog</p>
        <h2>Next.js ile JSON-LD</h2>
        <p>Yazan: Can Kaptaner · 15 Mayıs 2026</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <div className="badge blue">BreadcrumbList</div>
          <div className="badge">Article</div>
          <div className="badge">→ @graph</div>
        </div>
      </div>
    </SchemaStory>
  ),
};

export const IdReferans: StoryObj = {
  name: '@id — Entity Referansı',
  render: () => (
    <SchemaStory
      title="@id ile Entity Referansı"
      description="id prop'u JSON-LD'de @id olarak yazılır. Aynı entity'ye birden fazla yerden referans verilebilir."
      source={`<SchemaGraph>
  <Organization
    id="https://seo-mesh.dev/#org"
    name="seo-mesh"
    url="https://seo-mesh.dev"
  />
  <Article
    headline="seo-mesh Nedir?"
    datePublished="2026-05-15"
  >
    {/* Aynı org'a sadece @id ile referans */}
    <Organization prop="publisher" id="https://seo-mesh.dev/#org" />
  </Article>
</SchemaGraph>`}
    >
      <SchemaGraph>
        <Organization id="https://seo-mesh.dev/#org" name="seo-mesh" url="https://seo-mesh.dev" />
        <Article headline="seo-mesh Nedir?" datePublished="2026-05-15">
          <Organization prop="publisher" id="https://seo-mesh.dev/#org" />
        </Article>
      </SchemaGraph>
      <div className="article-card">
        <h2>seo-mesh Nedir?</h2>
        <p>Yayıncı: seo-mesh — <code>@id</code> ile referans edilir, tekrar tanımlanmaz.</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <div className="badge purple">@id referansı</div>
          <div className="badge blue">entity deduplication</div>
        </div>
      </div>
    </SchemaStory>
  ),
};
