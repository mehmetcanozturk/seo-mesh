import type { Meta, StoryObj } from '@storybook/react';
import { ClaimReview, Organization, Rating } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/ClaimReview' };
export default meta;

export const IddiaDegerlendirme: StoryObj = {
  name: 'ClaimReview',
  render: () => (
    <SchemaStory
      title="ClaimReview"
      description="Gerçek doğrulama (fact-check) şeması. Google'da arama sonuçlarında iddia değerlendirme etiketi olarak görünür."
      source={`<ClaimReview
  url="https://factcheck.example.com/iddia-1"
  claimReviewed="Yapay zeka insan zekasını 2025'te geçti."
  datePublished="2026-05-10"
  inLanguage="tr"
>
  <Organization prop="author" name="FactCheck TR" url="https://factcheck.example.com" />
  <Rating
    prop="reviewRating"
    ratingValue={1}
    bestRating={5}
    worstRating={1}
    ratingExplanation="Yanıltıcı"
  />
</ClaimReview>`}
    >
      <ClaimReview
        url="https://factcheck.example.com/iddia-1"
        claimReviewed="Yapay zeka insan zekasını 2025'te geçti."
        datePublished="2026-05-10"
        inLanguage="tr"
      >
        <Organization prop="author" name="FactCheck TR" url="https://factcheck.example.com" />
        <Rating prop="reviewRating" ratingValue={1} bestRating={5} worstRating={1} ratingExplanation="Yanıltıcı" />
      </ClaimReview>
      <div className="product-card">
        <p className="meta">Fact Check · 10 May 2026</p>
        <h2 style={{ fontSize: '1rem', marginTop: '0.35rem' }}>İddia: "Yapay zeka insan zekasını 2025'te geçti."</h2>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', alignItems: 'center' }}>
          <div className="badge" style={{ background: '#2e1a1a', color: '#f87171', borderColor: '#f8717144' }}>
            ✗ Yanıltıcı
          </div>
          <span className="meta">FactCheck TR tarafından değerlendirildi</span>
        </div>
      </div>
    </SchemaStory>
  ),
};
