import { generateLlmsTxt } from '@seo-mesh/next';

export function GET() {
  const content = generateLlmsTxt({
    siteName: 'seo-mesh',
    tagline: 'Component-first JSON-LD structured data engine for React & Next.js',
    sections: [
      {
        title: 'Docs',
        links: [
          { label: 'Getting Started', url: 'https://seo-mesh.dev/docs/start', description: 'Installation and basic usage' },
          { label: 'Named Components', url: 'https://seo-mesh.dev/docs/components', description: 'Product, Article, FAQPage and all schema types' },
          { label: 'SchemaGraph', url: 'https://seo-mesh.dev/docs/schema-graph', description: 'Merge multiple schemas into a single @graph block' },
          { label: 'AI Features', url: 'https://seo-mesh.dev/docs/ai', description: 'llms.txt, Speakable, AiBotPolicy' },
        ],
      },
      {
        title: 'API',
        links: [
          { label: '@seo-mesh/react', url: 'https://seo-mesh.dev/api/react', description: 'React server component exports' },
          { label: '@seo-mesh/next', url: 'https://seo-mesh.dev/api/next', description: 'Next.js App Router integration' },
          { label: '@seo-mesh/core', url: 'https://seo-mesh.dev/api/core', description: 'Framework-agnostic traversal and serialization' },
        ],
      },
      {
        title: 'Examples',
        links: [
          { label: 'Product Page', url: 'https://seo-mesh.dev/urun', description: 'Product + Offer schema demo' },
          { label: 'Blog Post', url: 'https://seo-mesh.dev/blog', description: 'Article + Person schema demo' },
          { label: 'FAQ Page', url: 'https://seo-mesh.dev/sss', description: 'FAQPage + Question + Answer demo' },
        ],
      },
    ],
  });

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
