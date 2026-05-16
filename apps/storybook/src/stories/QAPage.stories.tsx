import type { Meta, StoryObj } from '@storybook/react';
import { QAPage, Question, Answer, Person } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/QAPage' };
export default meta;

export const SoruCevap: StoryObj = {
  name: 'QAPage',
  render: () => (
    <SchemaStory
      title="QAPage"
      description="Soru-cevap sayfası şeması. FAQPage'den farklı: birden fazla cevap olabilir, upvoteCount ile en iyi cevap seçilir. Stack Overflow tarzı sayfalar için uygundur."
      source={`<QAPage name="seo-mesh GitHub Q&A">
  <Question
    prop="mainEntity"
    name="SchemaScope ile SchemaProp farkı nedir?"
    answerCount={2}
  >
    <Answer
      prop="acceptedAnswer"
      text="SchemaScope bir JSON-LD bloğu başlatır..."
      upvoteCount={42}
    >
      <Person prop="author" name="Can Kaptaner" />
    </Answer>
    <Answer
      prop="suggestedAnswer"
      text="Kısaca: SchemaScope konteyner, SchemaProp değer..."
      upvoteCount={18}
    >
      <Person prop="author" name="Ahmet Yılmaz" />
    </Answer>
  </Question>
</QAPage>`}
    >
      <QAPage name="seo-mesh GitHub Q&A">
        <Question prop="mainEntity" name="SchemaScope ile SchemaProp farkı nedir?" answerCount={2}>
          <Answer prop="acceptedAnswer" text="SchemaScope bir JSON-LD bloğu başlatır, SchemaProp ise o bloğa değer ekler." upvoteCount={42}>
            <Person prop="author" name="Can Kaptaner" />
          </Answer>
          <Answer prop="suggestedAnswer" text="Kısaca: SchemaScope konteyner, SchemaProp değer işaretleyici." upvoteCount={18}>
            <Person prop="author" name="Ahmet Yılmaz" />
          </Answer>
        </Question>
      </QAPage>
      <div className="faq-card">
        <h2>seo-mesh GitHub Q&A</h2>
        <div className="faq-item">
          <h4>SchemaScope ile SchemaProp farkı nedir?</h4>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#888' }}>2 cevap</p>
          <div style={{ marginTop: '0.5rem', background: '#1a2e1a', border: '1px solid #22c55e33', borderRadius: '6px', padding: '0.75rem' }}>
            <p style={{ fontSize: '0.85rem', color: '#ccc' }}>✓ SchemaScope bir JSON-LD bloğu başlatır, SchemaProp ise o bloğa değer ekler.</p>
            <p className="meta" style={{ marginTop: '0.35rem' }}>Can Kaptaner · 42 oy</p>
          </div>
        </div>
      </div>
    </SchemaStory>
  ),
};
