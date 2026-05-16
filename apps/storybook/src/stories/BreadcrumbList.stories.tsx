import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbList, ListItem } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/BreadcrumbList' };
export default meta;

const items = [
  { name: 'Ana Sayfa', item: 'https://seo-mesh.dev' },
  { name: 'Ürünler', item: 'https://seo-mesh.dev/urunler' },
  { name: 'WordPress Hosting', item: 'https://seo-mesh.dev/urunler/wordpress-hosting' },
];

export const Breadcrumb: StoryObj = {
  name: 'BreadcrumbList',
  render: () => (
    <SchemaStory
      title="BreadcrumbList"
      description="Gezinti yolu şeması. position otomatik sıralanır, Google arama sonuçlarında gösterilir."
      source={`<BreadcrumbList>
  <ListItem prop="itemListElement" position={1} name="Ana Sayfa" item="https://..." />
  <ListItem prop="itemListElement" position={2} name="Ürünler"   item="https://..." />
  <ListItem prop="itemListElement" position={3} name="WordPress Hosting" item="https://..." />
</BreadcrumbList>`}
    >
      <BreadcrumbList>
        {items.map((it, i) => (
          <ListItem key={it.item} prop="itemListElement" position={i + 1} name={it.name} item={it.item} />
        ))}
      </BreadcrumbList>
      <div className="breadcrumb-card">
        <h2 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#888' }}>Gezinti Yolu</h2>
        <div className="breadcrumbs">
          {items.map((it, i) => (
            <span key={it.item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {i > 0 && <span>›</span>}
              <a href={it.item}>{it.name}</a>
            </span>
          ))}
        </div>
        <div className="badge" style={{ marginTop: '0.75rem' }}>BreadcrumbList</div>
      </div>
    </SchemaStory>
  ),
};
