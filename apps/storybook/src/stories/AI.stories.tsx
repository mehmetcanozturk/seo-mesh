import type { Meta, StoryObj } from '@storybook/react';
import { Article, Person, AiBotPolicy, Speakable } from '@seo-mesh/react';
import { generateLlmsTxt } from '@seo-mesh/next';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Advanced/AI' };
export default meta;

export const LlmsTxt: StoryObj = {
  name: 'llms.txt Generator',
  render: () => {
    const output = generateLlmsTxt({
      siteName: 'seo-mesh',
      tagline: 'Component-first JSON-LD engine for React & Next.js',
      sections: [
        {
          title: 'Docs',
          links: [
            { label: 'Getting Started', url: 'https://seo-mesh.dev/docs/start', description: 'Kurulum ve temel kullanım' },
            { label: 'Named Components', url: 'https://seo-mesh.dev/docs/components', description: 'Tüm şema bileşenleri' },
          ],
        },
        {
          title: 'Examples',
          links: [
            { label: 'Product Page', url: 'https://seo-mesh.dev/urun', description: 'Product + Offer demo' },
            { label: 'FAQ Page', url: 'https://seo-mesh.dev/sss', description: 'FAQPage demo' },
          ],
        },
      ],
    });

    return (
      <div className="story-layout">
        <div className="story-left">
          <div className="story-label">seo-mesh · AI</div>
          <div className="story-title">llms.txt Generator</div>
          <div className="story-desc">
            LLM crawler'lara sitenin yapısını açıklar. <code>GET /llms.txt</code> endpoint'inde sunulur.
          </div>
          <div className="product-card">
            <h2>Kullanım</h2>
            <p>Next.js App Router'da <code>app/llms.txt/route.ts</code> oluşturun:</p>
            <div className="source-code" style={{ marginTop: '0.75rem' }}>{`import { generateLlmsTxt } from '@seo-mesh/next';

export function GET() {
  return new Response(
    generateLlmsTxt({
      siteName: 'My Site',
      tagline: 'What my site does',
      sections: [{ title: 'Docs', links: [...] }],
    }),
    { headers: { 'Content-Type': 'text/plain' } }
  );
}`}</div>
          </div>
        </div>
        <div className="story-right">
          <div className="jsonld-header">
            <div className="jsonld-title">Üretilen llms.txt</div>
            <div className="jsonld-type-badge">text/plain</div>
          </div>
          <pre className="jsonld-code" style={{ whiteSpace: 'pre-wrap' }}>{output}</pre>
        </div>
      </div>
    );
  },
};

export const SpeakableDemo: StoryObj = {
  name: 'Speakable — AI Summarization',
  render: () => (
    <SchemaStory
      title="Speakable"
      description="Google Assistant ve AI Overview'lara hangi CSS selector'larındaki içeriğin özet alınabileceğini bildirir."
      source={`<Article
  headline="Next.js ile JSON-LD"
  datePublished="2026-05-15"
>
  <Person prop="author" name="Can Kaptaner" />
  <Speakable
    prop="speakable"
    cssSelector={[".article-intro", "h1"]}
  />
</Article>

// → "speakable": {
//     "@type": "SpeakableSpecification",
//     "cssSelector": [".article-intro", "h1"]
//   }`}
    >
      <Article headline="Next.js ile JSON-LD" datePublished="2026-05-15">
        <Person prop="author" name="Can Kaptaner" />
        <Speakable prop="speakable" cssSelector={['.article-intro', 'h1']} />
      </Article>
      <div className="article-card">
        <h2 className="article-intro">Next.js ile JSON-LD</h2>
        <p className="article-intro">Bu içerik AI Overview için işaretlendi.</p>
        <div className="badge blue" style={{ marginTop: '0.75rem' }}>SpeakableSpecification</div>
        <p className="meta" style={{ marginTop: '0.5rem' }}>cssSelector: .article-intro, h1</p>
      </div>
    </SchemaStory>
  ),
};

export const AiBotPolicyDemo: StoryObj = {
  name: 'AiBotPolicy — AI Crawler Kontrolü',
  render: () => (
    <div className="story-layout">
      <div className="story-left">
        <div className="story-label">seo-mesh · AI</div>
        <div className="story-title">AiBotPolicy</div>
        <div className="story-desc">
          GPTBot, CCBot gibi AI crawler'ları meta tag ile engeller veya izin verir.
        </div>
        <div className="product-card">
          <h2>Seçici Engelleme</h2>
          <p style={{ marginBottom: '0.75rem' }}>Sadece eğitim verisi toplayan bot'ları engelle:</p>
          <div className="source-code">{`<AiBotPolicy
  deny={['GPTBot', 'CCBot', 'Google-Extended']}
  noAiImages
/>
// → <meta name="GPTBot" content="noindex" />
// → <meta name="CCBot" content="noindex" />
// → <meta name="Google-Extended" content="noindex" />
// → <meta name="robots" content="noimageai" />`}</div>
          <h2 style={{ marginTop: '1rem' }}>İzin Listesi</h2>
          <p style={{ marginBottom: '0.75rem' }}>Sadece belirtilenlere izin ver, diğerlerini engelle:</p>
          <div className="source-code">{`<AiBotPolicy
  allow={['PerplexityBot']}
/>
// → Diğer tüm AI bot'lar için noindex`}</div>
        </div>
        <div className="product-card" style={{ marginTop: '1rem' }}>
          <h2>Bilinen Bot'lar</h2>
          {[
            ['GPTBot', 'OpenAI'],
            ['Google-Extended', 'Google AI eğitim'],
            ['CCBot', 'Common Crawl'],
            ['ClaudeBot / anthropic-ai', 'Anthropic'],
            ['PerplexityBot', 'Perplexity AI'],
            ['cohere-ai', 'Cohere'],
            ['Amazonbot', 'Amazon Alexa'],
            ['Bytespider', 'TikTok / ByteDance'],
          ].map(([bot, owner]) => (
            <div key={bot} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid #1e1e1e', fontSize: '0.8rem' }}>
              <code style={{ color: '#60a5fa' }}>{bot}</code>
              <span style={{ color: '#555' }}>{owner}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="story-right">
        <div className="jsonld-header">
          <div className="jsonld-title">Render Edilen Meta Tag'ler</div>
          <div className="jsonld-type-badge">HTML</div>
        </div>
        <div className="jsonld-code">{[
          '<meta name="GPTBot" content="noindex" />',
          '<meta name="CCBot" content="noindex" />',
          '<meta name="Google-Extended" content="noindex" />',
          '<meta name="robots" content="noimageai" />',
        ].join('\n')}</div>
        <div style={{ marginTop: '1.5rem' }}>
          <div className="source-label">Gerçek render (DOM'da)</div>
          <AiBotPolicy deny={['GPTBot', 'CCBot', 'Google-Extended']} noAiImages />
          <p className="meta" style={{ marginTop: '0.5rem' }}>
            Yukarıdaki meta tag'ler bu bileşen tarafından DOM'a eklendi.
          </p>
        </div>
      </div>
    </div>
  ),
};
