import type { Meta, StoryObj } from '@storybook/react';
import { Dataset, Person, Organization } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/Dataset' };
export default meta;

export const VeriSeti: StoryObj = {
  name: 'Dataset',
  render: () => (
    <SchemaStory
      title="Dataset"
      description="Veri seti şeması. Google Dataset Search'te görünür. Bilimsel ve açık veri paylaşımları için kullanılır."
      source={`<Dataset
  name="Türkiye E-Ticaret Kullanıcı Davranışları 2025"
  description="2025 yılında 50.000 kullanıcıdan..."
  url="https://datasets.example.com/eticaret-2025"
  keywords="e-ticaret, kullanıcı davranışı, Türkiye"
  license="https://creativecommons.org/licenses/by/4.0/"
  datePublished="2026-01-10"
  temporalCoverage="2025-01-01/2025-12-31"
>
  <Organization prop="creator" name="DataLab TR" />
</Dataset>`}
    >
      <Dataset
        name="Türkiye E-Ticaret Kullanıcı Davranışları 2025"
        description="2025 yılında 50.000 kullanıcıdan toplanan e-ticaret alışkanlık verileri."
        url="https://datasets.example.com/eticaret-2025"
        keywords="e-ticaret, kullanıcı davranışı, Türkiye"
        license="https://creativecommons.org/licenses/by/4.0/"
        datePublished="2026-01-10"
        temporalCoverage="2025-01-01/2025-12-31"
      >
        <Organization prop="creator" name="DataLab TR" />
      </Dataset>
      <div className="product-card">
        <h2>Türkiye E-Ticaret Kullanıcı Davranışları 2025</h2>
        <p>2025 yılında 50.000 kullanıcıdan toplanan e-ticaret alışkanlık verileri.</p>
        <p className="meta" style={{ marginTop: '0.5rem' }}>Yayın: 10 Oca 2026 · Kapsam: 2025 yılı tamamı</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <div className="badge blue">Dataset</div>
          <div className="badge">CC BY 4.0</div>
          <div className="badge purple">DataLab TR</div>
        </div>
      </div>
    </SchemaStory>
  ),
};
