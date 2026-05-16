import type { Metadata } from 'next';
import { Article, Person, OpenGraph, Canonical } from '@seo-mesh/next';

export const metadata: Metadata = {
  title: 'Next.js ile JSON-LD Nasıl Eklenir?',
};

export default function BlogPage() {
  return (
    <>
      <OpenGraph
        title="Next.js ile JSON-LD Nasıl Eklenir?"
        description="seo-mesh ile React Server Components'te component tabanlı JSON-LD eklemeyi öğrenin."
        image="https://seo-mesh.dev/og/blog.png"
        imageAlt="Next.js JSON-LD rehberi"
        type="article"
        url="https://seo-mesh.dev/blog"
      />
      <Canonical href="https://seo-mesh.dev/blog" />
      <Article
        headline="Next.js App Router ile JSON-LD Nasıl Eklenir?"
        datePublished="2026-05-15"
        dateModified="2026-05-15"
        inLanguage="tr"
      >
        <Person prop="author" name="Mehmet Can Öztürk" />
      </Article>

      <div className="container">
        <div className="page-header">
          <p className="meta">15 Mayıs 2026 · 5 dk okuma</p>
          <h1>Next.js App Router ile JSON-LD Nasıl Eklenir?</h1>
          <p className="meta" style={{ marginTop: '0.75rem' }}>
            Yazan: Mehmet Can Öztürk
          </p>
        </div>

        <div className="article-body">
          <p>
            Geleneksel yöntemde JSON-LD, sayfa bileşeninin içine manuel olarak{' '}
            <code>dangerouslySetInnerHTML</code> ile eklenir. Bu yaklaşım hata yapmaya açık
            ve bakımı zordur.
          </p>
          <p>
            <strong>seo-mesh</strong> ile şema bileşenleri JSX olarak yazarsınız;
            kütüphane gerisini halleder. React Server Components&apos;te bile React Context
            gerektirmeden çalışır — JSX ağacını statik olarak gezerek metadata toplar.
          </p>
          <p>
            Bu yaklaşımın güzelliği: şema yapısı ve görsel içerik tamamen ayrıdır.
            Şema bileşenleri hiçbir görsel çıktı üretmez, sadece JSON-LD inject eder.
          </p>
        </div>

        <div className="schema-preview">
          <h4>Üretilen JSON-LD</h4>
          <pre>{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Next.js App Router ile JSON-LD Nasıl Eklenir?",
  "datePublished": "2026-05-15",
  "author": {
    "@type": "Person",
    "name": "Mehmet Can Öztürk"
  }
}`}</pre>
        </div>
      </div>
    </>
  );
}
