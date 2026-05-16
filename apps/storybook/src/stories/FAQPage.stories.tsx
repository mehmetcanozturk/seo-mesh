import type { Meta, StoryObj } from '@storybook/react';
import { FAQPage, Question, Answer } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/FAQPage' };
export default meta;

const sorular = [
  {
    id: 'q1',
    soru: 'seo-mesh React Server Components ile çalışır mı?',
    cevap: 'Evet. seo-mesh, React Context gerektirmez. JSX ağacını statik olarak gezer, bu sayede RSC ile tam uyumludur.',
  },
  {
    id: 'q2',
    soru: 'JSON-LD nereye enjekte edilir?',
    cevap: 'Şema bileşenleri <script type="application/ld+json"> etiketini render eder. Next.js bu etiketi <head> içine taşır.',
  },
  {
    id: 'q3',
    soru: 'İç içe şemalar destekleniyor mu?',
    cevap: 'Evet. prop="..." ile şema bileşenlerini iç içe geçirebilirsiniz. Birden fazla aynı prop\'lu bileşen otomatik olarak diziye dönüşür.',
  },
];

export const TemelSSS: StoryObj = {
  name: 'FAQPage',
  render: () => (
    <SchemaStory
      title="FAQPage"
      description="Sıkça sorulan sorular. Her Question otomatik olarak mainEntity dizisine eklenir."
      source={`<FAQPage>
  <Question prop="mainEntity" name="seo-mesh RSC ile çalışır mı?">
    <Answer prop="acceptedAnswer" text="Evet, React Context gerektirmez." />
  </Question>
  <Question prop="mainEntity" name="JSON-LD nereye enjekte edilir?">
    <Answer prop="acceptedAnswer" text="<head> içine, script etiketiyle." />
  </Question>
</FAQPage>`}
    >
      <FAQPage>
        {sorular.map((s) => (
          <Question key={s.id} prop="mainEntity" name={s.soru}>
            <Answer prop="acceptedAnswer" text={s.cevap} />
          </Question>
        ))}
      </FAQPage>
      <div className="faq-card">
        <h2>Sıkça Sorulan Sorular</h2>
        {sorular.map((s) => (
          <div key={s.id} className="faq-item">
            <h4>{s.soru}</h4>
            <p>{s.cevap}</p>
          </div>
        ))}
      </div>
    </SchemaStory>
  ),
};
