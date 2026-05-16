import type { Meta, StoryObj } from '@storybook/react';
import { WebSite, SearchAction } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/Actions' };
export default meta;

export const SitelinkSearchBox: StoryObj = {
  name: 'WebSite + SearchAction (Sitelinks Searchbox)',
  render: () => (
    <SchemaStory
      title="WebSite + SearchAction"
      description="Google arama sonuçlarında sitenizin altında arama kutusu göstermek için kullanılır (Sitelinks Searchbox). WebSite'a potentialAction olarak eklenir."
      source={`<WebSite
  name="seo-mesh"
  url="https://seo-mesh.dev"
>
  <SearchAction
    prop="potentialAction"
    target="https://seo-mesh.dev/ara?q={search_term_string}"
    query-input="required name=search_term_string"
  />
</WebSite>`}
    >
      <WebSite name="seo-mesh" url="https://seo-mesh.dev">
        <SearchAction
          prop="potentialAction"
          target="https://seo-mesh.dev/ara?q={search_term_string}"
          query-input="required name=search_term_string"
        />
      </WebSite>
      <div className="website-card">
        <h2>seo-mesh</h2>
        <p>Google arama sonuçlarında sitenizin altında arama kutusu görünür.</p>
        <div style={{ marginTop: '0.75rem', background: '#111', border: '1px solid #222', borderRadius: '8px', padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#444', fontSize: '0.85rem' }}>🔍</span>
          <span style={{ color: '#444', fontSize: '0.85rem' }}>seo-mesh'te ara…</span>
        </div>
        <p className="meta" style={{ marginTop: '0.5rem' }}>Google SERP'te Sitelinks Searchbox olarak görünür</p>
        <div className="badge blue" style={{ marginTop: '0.5rem' }}>potentialAction</div>
      </div>
    </SchemaStory>
  ),
};
