import type { Metadata } from 'next';
import { FAQPage, Question, Answer, OpenGraph, Canonical } from '@seo-mesh/next';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular',
};

const sorular = [
  {
    id: 'q1',
    soru: 'seo-mesh React Server Components ile çalışır mı?',
    cevap:
      'Evet. seo-mesh, React Context gerektirmez. JSX ağacını statik olarak gezer, bu sayede RSC ile tam uyumludur.',
  },
  {
    id: 'q2',
    soru: 'JSON-LD nereye enjekte edilir?',
    cevap:
      'Şema bileşenleri <script type="application/ld+json"> etiketini doğrudan bileşen çıktısına render eder. Next.js bu etiketi <head> içine taşır.',
  },
  {
    id: 'q3',
    soru: 'İç içe şemalar destekleniyor mu?',
    cevap:
      'Evet. prop="..." vererek şema bileşenlerini iç içe geçirebilirsiniz. Birden fazla aynı prop\'lu bileşen otomatik olarak diziye dönüşür.',
  },
  {
    id: 'q4',
    soru: 'Tip güvenliği nasıl sağlanıyor?',
    cevap:
      'Her şema bileşeni kendi schema.org tipine özel prop\'lara sahiptir. TypeScript otomatik tamamlama ve tip kontrolü sağlar.',
  },
];

export default function SSSPage() {
  return (
    <>
      <OpenGraph
        title="Sıkça Sorulan Sorular — seo-mesh demo"
        description="seo-mesh hakkında merak ettiğiniz her şey: RSC uyumluluğu, JSON-LD enjeksiyonu, iç içe şemalar ve tip güvenliği."
        type="website"
        url="https://seo-mesh.dev/sss"
      />
      <Canonical href="https://seo-mesh.dev/sss" />
      <FAQPage>
        {sorular.map((s) => (
          <Question key={s.id} prop="mainEntity" name={s.soru}>
            <Answer prop="acceptedAnswer" text={s.cevap} />
          </Question>
        ))}
      </FAQPage>

      <div className="container">
        <div className="page-header">
          <h1>Sıkça Sorulan Sorular</h1>
        </div>

        {sorular.map((s) => (
          <div key={s.id} className="faq-item">
            <h3>{s.soru}</h3>
            <p>{s.cevap}</p>
          </div>
        ))}

        <div className="schema-preview">
          <h4>Üretilen JSON-LD (kısaltılmış)</h4>
          <pre>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "seo-mesh React Server Components ile çalışır mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet. seo-mesh, React Context gerektirmez..."
      }
    },
    ...
  ]
}`}</pre>
        </div>
      </div>
    </>
  );
}
