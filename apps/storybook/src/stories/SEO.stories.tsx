import type { Meta, StoryObj } from '@storybook/react';
import { OpenGraph, Canonical, HreflangAlternate } from '@seo-mesh/react';
import { generateSitemap, generateRobotsTxt, auditPage } from '@seo-mesh/next';

const meta: Meta = { title: 'Advanced/SEO Meta' };
export default meta;

// ─── OpenGraph ────────────────────────────────────────────────────────────────
export const OpenGraphDemo: StoryObj = {
  name: 'OpenGraph — Social Meta Tags',
  render: () => {
    const tags = [
      '<meta property="og:title" content="seo-mesh" />',
      '<meta property="og:description" content="Component-first JSON-LD engine" />',
      '<meta property="og:image" content="https://seo-mesh.dev/og.png" />',
      '<meta property="og:image:alt" content="seo-mesh banner" />',
      '<meta property="og:image:width" content="1200" />',
      '<meta property="og:image:height" content="630" />',
      '<meta property="og:type" content="website" />',
      '<meta property="og:url" content="https://seo-mesh.dev" />',
      '<meta property="og:site_name" content="seo-mesh" />',
      '<meta property="og:locale" content="tr_TR" />',
      '<meta name="twitter:card" content="summary_large_image" />',
      '<meta name="twitter:site" content="@seomesh" />',
    ];
    return (
      <div className="story-layout">
        <div className="story-left">
          <div className="story-label">seo-mesh · SEO Meta</div>
          <div className="story-title">OpenGraph</div>
          <div className="story-desc">
            Facebook, Twitter, LinkedIn, WhatsApp için og:* ve twitter:* meta tag'lerini tek bileşenle yönetin.
          </div>
          <div className="product-card">
            <h2>Kullanım</h2>
            <div className="source-code">{`import { OpenGraph } from '@seo-mesh/react';

// Next.js layout.tsx içinde:
<OpenGraph
  title="seo-mesh"
  description="Component-first JSON-LD engine"
  image="https://seo-mesh.dev/og.png"
  imageAlt="seo-mesh banner"
  imageWidth={1200}
  imageHeight={630}
  type="website"
  url="https://seo-mesh.dev"
  siteName="seo-mesh"
  locale="tr_TR"
  twitterCard="summary_large_image"
  twitterSite="@seomesh"
/>`}</div>
          </div>
          <div className="product-card" style={{ marginTop: '1rem' }}>
            <h2>Sosyal Önizleme</h2>
            <div style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', background: '#111' }}>
              <div style={{ background: '#222', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', fontSize: '0.8rem' }}>
                og:image (1200×630)
              </div>
              <div style={{ padding: '0.75rem' }}>
                <div style={{ color: '#888', fontSize: '0.7rem', marginBottom: '0.25rem' }}>seo-mesh.dev</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>seo-mesh</div>
                <div style={{ color: '#aaa', fontSize: '0.8rem', marginTop: '0.25rem' }}>Component-first JSON-LD engine</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <OpenGraph
              title="seo-mesh"
              description="Component-first JSON-LD engine"
              image="https://seo-mesh.dev/og.png"
              imageAlt="seo-mesh banner"
              imageWidth={1200}
              imageHeight={630}
              type="website"
              url="https://seo-mesh.dev"
              siteName="seo-mesh"
              locale="tr_TR"
              twitterCard="summary_large_image"
              twitterSite="@seomesh"
            />
          </div>
        </div>
        <div className="story-right">
          <div className="jsonld-header">
            <div className="jsonld-title">Render Edilen Meta Tag'ler</div>
            <div className="jsonld-type-badge">HTML</div>
          </div>
          <pre className="jsonld-code" style={{ whiteSpace: 'pre-wrap' }}>{tags.join('\n')}</pre>
        </div>
      </div>
    );
  },
};

// ─── Canonical ────────────────────────────────────────────────────────────────
export const CanonicalDemo: StoryObj = {
  name: 'Canonical — Duplicate Content',
  render: () => (
    <div className="story-layout">
      <div className="story-left">
        <div className="story-label">seo-mesh · SEO Meta</div>
        <div className="story-title">Canonical</div>
        <div className="story-desc">
          Duplicate content sorununu önlemek için canonical URL belirtir. Google, bu URL'yi tercih eder.
        </div>
        <div className="product-card">
          <h2>Kullanım</h2>
          <div className="source-code">{`import { Canonical } from '@seo-mesh/react';

// Her sayfa için canonical belirtin:
<Canonical href="https://seo-mesh.dev/blog/json-ld" />
// → <link rel="canonical" href="https://seo-mesh.dev/blog/json-ld" />`}</div>
        </div>
        <div className="product-card" style={{ marginTop: '1rem' }}>
          <h2>Ne Zaman Gerekli?</h2>
          {[
            ['?ref=twitter', 'UTM / referral parametreleri'],
            ['/urun?sort=fiyat', 'Filtreleme query string\'leri'],
            ['http vs https', 'Protokol farklılıkları'],
            ['www vs non-www', 'Subdomain farklılıkları'],
          ].map(([example, reason]) => (
            <div key={example} style={{ padding: '0.4rem 0', borderBottom: '1px solid #1e1e1e', fontSize: '0.8rem' }}>
              <code style={{ color: '#60a5fa' }}>{example}</code>
              <span style={{ color: '#666', marginLeft: '0.5rem' }}>→ {reason}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Canonical href="https://seo-mesh.dev/blog/json-ld" />
        </div>
      </div>
      <div className="story-right">
        <div className="jsonld-header">
          <div className="jsonld-title">Render Edilen Tag</div>
          <div className="jsonld-type-badge">HTML</div>
        </div>
        <pre className="jsonld-code">{`<link
  rel="canonical"
  href="https://seo-mesh.dev/blog/json-ld"
/>`}</pre>
      </div>
    </div>
  ),
};

// ─── HreflangAlternate ────────────────────────────────────────────────────────
export const HreflangDemo: StoryObj = {
  name: 'HreflangAlternate — i18n SEO',
  render: () => {
    const locales = [
      { lang: 'tr', href: 'https://seo-mesh.dev/tr/blog' },
      { lang: 'en', href: 'https://seo-mesh.dev/en/blog' },
      { lang: 'de', href: 'https://seo-mesh.dev/de/blog' },
    ];
    const tags = [
      ...locales.map(l => `<link rel="alternate" hrefLang="${l.lang}" href="${l.href}" />`),
      `<link rel="alternate" hrefLang="x-default" href="${locales[0]!.href}" />`,
    ];
    return (
      <div className="story-layout">
        <div className="story-left">
          <div className="story-label">seo-mesh · SEO Meta</div>
          <div className="story-title">HreflangAlternate</div>
          <div className="story-desc">
            Çok dilli siteler için Google'a hangi sayfanın hangi dile hizmet ettiğini bildirir.
          </div>
          <div className="product-card">
            <h2>Kullanım</h2>
            <div className="source-code">{`import { HreflangAlternate } from '@seo-mesh/react';

<HreflangAlternate
  includeXDefault
  locales={[
    { lang: 'tr', href: 'https://seo-mesh.dev/tr/blog' },
    { lang: 'en', href: 'https://seo-mesh.dev/en/blog' },
    { lang: 'de', href: 'https://seo-mesh.dev/de/blog' },
  ]}
/>`}</div>
          </div>
          <div className="product-card" style={{ marginTop: '1rem' }}>
            <h2>x-default</h2>
            <p style={{ color: '#aaa', fontSize: '0.85rem' }}>
              <code>includeXDefault</code> açıkken ilk locale x-default olarak atanır — dil eşleşmediğinde Google bu sayfayı gösterir.
            </p>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <HreflangAlternate locales={locales} includeXDefault />
          </div>
        </div>
        <div className="story-right">
          <div className="jsonld-header">
            <div className="jsonld-title">Render Edilen Tag'ler</div>
            <div className="jsonld-type-badge">HTML</div>
          </div>
          <pre className="jsonld-code" style={{ whiteSpace: 'pre-wrap' }}>{tags.join('\n')}</pre>
        </div>
      </div>
    );
  },
};

// ─── Sitemap ──────────────────────────────────────────────────────────────────
export const SitemapDemo: StoryObj = {
  name: 'Sitemap Generator',
  render: () => {
    const output = generateSitemap({
      entries: [
        {
          url: 'https://seo-mesh.dev',
          lastmod: '2026-05-15',
          changefreq: 'weekly',
          priority: 1.0,
          alternates: [
            { lang: 'tr', href: 'https://seo-mesh.dev/tr' },
            { lang: 'en', href: 'https://seo-mesh.dev/en' },
          ],
        },
        { url: 'https://seo-mesh.dev/blog', lastmod: '2026-05-15', changefreq: 'weekly', priority: 0.9 },
        { url: 'https://seo-mesh.dev/urun', lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.8 },
      ],
    });
    return (
      <div className="story-layout">
        <div className="story-left">
          <div className="story-label">seo-mesh · SEO Meta</div>
          <div className="story-title">Sitemap Generator</div>
          <div className="story-desc">
            XML sitemap üretir. Çok dilli siteler için xhtml:link alternates desteği vardır.
          </div>
          <div className="product-card">
            <h2>Kullanım (Next.js)</h2>
            <div className="source-code">{`// app/sitemap.xml/route.ts
import { generateSitemap } from '@seo-mesh/next';

export function GET() {
  return new Response(
    generateSitemap({
      entries: [
        {
          url: 'https://mysite.com',
          lastmod: '2026-05-15',
          changefreq: 'weekly',
          priority: 1.0,
          alternates: [
            { lang: 'tr', href: 'https://mysite.com/tr' },
            { lang: 'en', href: 'https://mysite.com/en' },
          ],
        },
      ],
    }),
    { headers: { 'Content-Type': 'application/xml' } }
  );
}`}</div>
          </div>
        </div>
        <div className="story-right">
          <div className="jsonld-header">
            <div className="jsonld-title">Üretilen sitemap.xml</div>
            <div className="jsonld-type-badge">XML</div>
          </div>
          <pre className="jsonld-code" style={{ whiteSpace: 'pre-wrap', fontSize: '0.72rem' }}>{output}</pre>
        </div>
      </div>
    );
  },
};

// ─── Robots.txt ───────────────────────────────────────────────────────────────
export const RobotsTxtDemo: StoryObj = {
  name: 'Robots.txt Generator',
  render: () => {
    const output = generateRobotsTxt({
      rules: [
        { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
        { userAgent: ['GPTBot', 'CCBot', 'Google-Extended'], disallow: '/' },
        { userAgent: 'Googlebot-Image', crawlDelay: 5 },
      ],
      sitemap: 'https://seo-mesh.dev/sitemap.xml',
      host: 'seo-mesh.dev',
    });
    return (
      <div className="story-layout">
        <div className="story-left">
          <div className="story-label">seo-mesh · SEO Meta</div>
          <div className="story-title">robots.txt Generator</div>
          <div className="story-desc">
            Çoklu User-agent kuralları, AI bot engelleme ve Crawl-delay ile robots.txt üretir.
          </div>
          <div className="product-card">
            <h2>Kullanım (Next.js)</h2>
            <div className="source-code">{`// app/robots.txt/route.ts
import { generateRobotsTxt } from '@seo-mesh/next';

export function GET() {
  return new Response(
    generateRobotsTxt({
      rules: [
        { userAgent: '*', allow: '/', disallow: '/api/' },
        {
          userAgent: ['GPTBot', 'CCBot'],
          disallow: '/',
        },
      ],
      sitemap: 'https://mysite.com/sitemap.xml',
    }),
    { headers: { 'Content-Type': 'text/plain' } }
  );
}`}</div>
          </div>
        </div>
        <div className="story-right">
          <div className="jsonld-header">
            <div className="jsonld-title">Üretilen robots.txt</div>
            <div className="jsonld-type-badge">text/plain</div>
          </div>
          <pre className="jsonld-code" style={{ whiteSpace: 'pre-wrap' }}>{output}</pre>
        </div>
      </div>
    );
  },
};

// ─── SEO Audit ────────────────────────────────────────────────────────────────
export const AuditDemo: StoryObj = {
  name: 'auditPage — SEO Skoru',
  render: () => {
    const perfect = auditPage({
      title: 'seo-mesh — Component-first JSON-LD',
      description: 'Next.js ve React için component tabanlı yapılandırılmış veri paketi. Google Rich Results destekli.',
      canonical: 'https://seo-mesh.dev',
      og: {
        title: 'seo-mesh',
        description: 'Component-first JSON-LD engine',
        image: 'https://seo-mesh.dev/og.png',
        imageAlt: 'seo-mesh banner',
      },
      schema: {
        '@type': 'WebSite',
        name: 'seo-mesh',
        description: 'Component-first JSON-LD engine for React and Next.js',
        url: 'https://seo-mesh.dev',
      },
    });

    const poor = auditPage({
      title: 'Ana Sayfa',
    });

    const impactColor = (impact: string) => ({ error: '#ef4444', warning: '#f59e0b', info: '#60a5fa' }[impact] ?? '#aaa');

    return (
      <div className="story-layout">
        <div className="story-left">
          <div className="story-label">seo-mesh · SEO Meta</div>
          <div className="story-title">auditPage</div>
          <div className="story-desc">
            Bir sayfanın SEO kalitesini 0–100 arası puanlar. Eksik alanları kategorilere ayırır.
          </div>
          <div className="product-card">
            <h2>Kullanım</h2>
            <div className="source-code">{`import { auditPage } from '@seo-mesh/next';

const result = auditPage({
  title: 'Sayfa Başlığı',
  description: 'Meta açıklama...',
  canonical: 'https://mysite.com/sayfa',
  og: { title: '...', image: '...' },
  schema: { '@type': 'Article', ... },
});

// result.score  → 0-100
// result.passed → geçen kurallar
// result.issues → { rule, message, impact }`}</div>
          </div>

          <div className="product-card" style={{ marginTop: '1rem' }}>
            <h2>Yetersiz Sayfa — Skor: {poor.score}</h2>
            <div style={{ background: '#1a1a1a', borderRadius: '4px', padding: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ color: '#aaa', fontSize: '0.8rem' }}>SEO Skoru</span>
                <span style={{ color: poor.score < 50 ? '#ef4444' : '#f59e0b', fontWeight: 700 }}>{poor.score}/100</span>
              </div>
              <div style={{ background: '#333', borderRadius: '2px', height: '6px' }}>
                <div style={{ background: '#ef4444', width: `${poor.score}%`, height: '100%', borderRadius: '2px' }} />
              </div>
            </div>
            {poor.issues.map((issue) => (
              <div key={issue.rule} style={{ fontSize: '0.75rem', padding: '0.3rem 0', borderBottom: '1px solid #222', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: impactColor(issue.impact), minWidth: '50px' }}>{issue.impact}</span>
                <span style={{ color: '#aaa' }}>{issue.message}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="story-right">
          <div className="jsonld-header">
            <div className="jsonld-title">Tam SEO — Skor: {perfect.score}</div>
            <div className="jsonld-type-badge" style={{ background: perfect.score >= 90 ? '#22c55e22' : '#f59e0b22', color: perfect.score >= 90 ? '#22c55e' : '#f59e0b' }}>
              {perfect.score}/100
            </div>
          </div>
          <div style={{ background: '#1a1a1a', borderRadius: '4px', padding: '0.75rem', margin: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#aaa', fontSize: '0.8rem' }}>SEO Skoru</span>
              <span style={{ color: '#22c55e', fontWeight: 700 }}>{perfect.score}/100</span>
            </div>
            <div style={{ background: '#333', borderRadius: '2px', height: '8px' }}>
              <div style={{ background: '#22c55e', width: `${perfect.score}%`, height: '100%', borderRadius: '2px' }} />
            </div>
          </div>
          <div style={{ padding: '0 1rem' }}>
            <div style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>✓ Geçen Kontroller ({perfect.passed.length})</div>
            {perfect.passed.map((p) => (
              <div key={p} style={{ fontSize: '0.75rem', color: '#aaa', padding: '0.2rem 0', borderBottom: '1px solid #1e1e1e' }}>
                ✓ {p}
              </div>
            ))}
            {perfect.issues.length > 0 && (
              <>
                <div style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: 600, margin: '0.75rem 0 0.5rem' }}>
                  ⚠ Sorunlar ({perfect.issues.length})
                </div>
                {perfect.issues.map((issue) => (
                  <div key={issue.rule} style={{ fontSize: '0.75rem', padding: '0.3rem 0', borderBottom: '1px solid #222', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: impactColor(issue.impact), minWidth: '50px' }}>{issue.impact}</span>
                    <span style={{ color: '#aaa' }}>{issue.message}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    );
  },
};
