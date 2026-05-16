import type { Meta, StoryObj } from '@storybook/react';
import { JobPosting, Organization } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/JobPosting' };
export default meta;

export const TemelIlanı: StoryObj = {
  name: 'JobPosting',
  render: () => (
    <SchemaStory
      title="JobPosting"
      description="İş ilanı şeması. Google Jobs'ta görünmek için gerekli alanlar: title, datePosted, description, hiringOrganization, jobLocation."
      source={`<JobPosting
  title="Senior Frontend Engineer"
  datePosted="2026-05-15"
  validThrough="2026-07-01"
  employmentType="FULL_TIME"
  description="React, TypeScript ve Next.js ile..."
  jobLocationType="TELECOMMUTE"
>
  <Organization
    prop="hiringOrganization"
    name="seo-mesh"
    url="https://seo-mesh.dev"
  />
</JobPosting>`}
    >
      <JobPosting
        title="Senior Frontend Engineer"
        datePosted="2026-05-15"
        validThrough="2026-07-01"
        employmentType="FULL_TIME"
        description="React, TypeScript ve Next.js ile modern web uygulamaları geliştirme."
        jobLocationType="TELECOMMUTE"
      >
        <Organization prop="hiringOrganization" name="seo-mesh" url="https://seo-mesh.dev" />
      </JobPosting>
      <div className="product-card">
        <h2>Senior Frontend Engineer</h2>
        <p>React, TypeScript ve Next.js ile modern web uygulamaları geliştirme.</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <div className="badge">Tam Zamanlı</div>
          <div className="badge blue">Uzaktan</div>
          <div className="badge purple">seo-mesh</div>
        </div>
        <p className="meta" style={{ marginTop: '0.75rem' }}>İlan: 15 May 2026 · Bitiş: 1 Tem 2026</p>
      </div>
    </SchemaStory>
  ),
};
