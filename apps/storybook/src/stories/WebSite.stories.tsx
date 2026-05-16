import type { Meta, StoryObj } from '@storybook/react';
import { WebSite, Organization } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/WebSite' };
export default meta;

export const SiteSchema: StoryObj = {
  name: 'WebSite',
  render: () => (
    <SchemaStory
      title="WebSite"
      description="Tüm site için kök seviye şema. Genellikle layout.tsx içine bir kere yerleştirilir."
      source={`<WebSite
  name="seo-mesh"
  url="https://seo-mesh.dev"
  description="Component-first JSON-LD engine for React & Next.js"
/>`}
    >
      <WebSite
        name="seo-mesh"
        url="https://seo-mesh.dev"
        description="Component-first JSON-LD engine for React & Next.js"
      />
      <div className="website-card">
        <h2>seo-mesh</h2>
        <p>Component-first JSON-LD engine for React & Next.js</p>
        <p style={{ fontSize: '0.8rem', color: '#444', marginTop: '0.5rem' }}>https://seo-mesh.dev</p>
        <div className="badge blue">WebSite</div>
      </div>
    </SchemaStory>
  ),
};

export const OrganizasyonPlusWebSite: StoryObj = {
  name: 'WebSite + Organization',
  render: () => (
    <SchemaStory
      title="WebSite + Organization"
      description="İki bağımsız root schema bileşeni aynı sayfada kullanılır — her biri kendi <script> etiketini üretir."
      source={`// İki bağımsız root bileşen → iki ayrı <script> etiketi
<WebSite name="seo-mesh" url="https://seo-mesh.dev" />
<Organization
  name="seo-mesh"
  url="https://seo-mesh.dev"
  email="hello@seo-mesh.dev"
/>`}
    >
      <WebSite name="seo-mesh" url="https://seo-mesh.dev" />
      <Organization name="seo-mesh" url="https://seo-mesh.dev" email="hello@seo-mesh.dev" />
      <div className="website-card">
        <h2>seo-mesh</h2>
        <p>İki farklı şema tipi — her biri ayrı JSON-LD bloğu olarak enjekte edilir.</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <div className="badge blue">WebSite</div>
          <div className="badge purple">Organization</div>
        </div>
      </div>
    </SchemaStory>
  ),
};
