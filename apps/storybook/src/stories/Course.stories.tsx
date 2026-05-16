import type { Meta, StoryObj } from '@storybook/react';
import { Course, CourseInstance, Organization, Person, Offer } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/Course' };
export default meta;

export const TemelKurs: StoryObj = {
  name: 'Course + CourseInstance',
  render: () => (
    <SchemaStory
      title="Course"
      description="Eğitim kursu şeması. Google'da kurs kartı olarak görünür. CourseInstance ile ders programı eklenir."
      source={`<Course
  name="Next.js ile Modern Web Geliştirme"
  description="App Router, RSC ve TypeScript ile..."
  educationalLevel="Intermediate"
  inLanguage="tr"
>
  <Organization prop="provider" name="seo-mesh Academy" />
  <Offer prop="offers" price={299} priceCurrency="TRY" />
  <CourseInstance
    prop="hasCourseInstance"
    courseMode="online"
    startDate="2026-06-01"
    endDate="2026-08-31"
  />
</Course>`}
    >
      <Course
        name="Next.js ile Modern Web Geliştirme"
        description="App Router, RSC ve TypeScript ile tam kapsamlı Next.js kursu."
        educationalLevel="Intermediate"
        inLanguage="tr"
      >
        <Organization prop="provider" name="seo-mesh Academy" />
        <Offer prop="offers" price={299} priceCurrency="TRY" />
        <CourseInstance
          prop="hasCourseInstance"
          courseMode="online"
          startDate="2026-06-01"
          endDate="2026-08-31"
        />
      </Course>
      <div className="product-card">
        <h2>Next.js ile Modern Web Geliştirme</h2>
        <p>App Router, RSC ve TypeScript ile tam kapsamlı Next.js kursu.</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <div className="badge blue">Online</div>
          <div className="badge">Intermediate</div>
          <div className="badge purple">seo-mesh Academy</div>
        </div>
        <p className="meta" style={{ marginTop: '0.75rem' }}>1 Haz – 31 Ağu 2026 · ₺299</p>
      </div>
    </SchemaStory>
  ),
};
