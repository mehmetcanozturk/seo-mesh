import type { Meta, StoryObj } from '@storybook/react';
import { Article, BlogPosting, Person, Organization } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/Article' };
export default meta;

export const TemelMakale: StoryObj = {
  name: 'Temel Article',
  render: () => (
    <SchemaStory
      title="Article"
      description="Blog yazısı ya da haber makalesi şeması. Yazar Person ile bağlanır."
      source={`<Article
  headline="Next.js App Router ile JSON-LD"
  datePublished="2026-05-15"
  dateModified="2026-05-15"
  inLanguage="tr"
>
  <Person prop="author" name="Mehmet Can Öztürk" />
</Article>`}
    >
      <Article
        headline="Next.js App Router ile JSON-LD"
        datePublished="2026-05-15"
        dateModified="2026-05-15"
        inLanguage="tr"
      >
        <Person prop="author" name="Mehmet Can Öztürk" />
      </Article>
      <div className="article-card">
        <p className="meta">15 Mayıs 2026 · 5 dk okuma</p>
        <h2>Next.js App Router ile JSON-LD</h2>
        <p>Yazan: Mehmet Can Öztürk</p>
        <div className="badge blue">Article</div>
      </div>
    </SchemaStory>
  ),
};

export const BlogYazisi: StoryObj = {
  name: 'BlogPosting + Organization publisher',
  render: () => (
    <SchemaStory
      title="BlogPosting + Organization"
      description="BlogPosting tipinde yayıncı Organization olarak eklenir."
      source={`<BlogPosting
  headline="React Server Components Rehberi"
  datePublished="2026-04-10"
  inLanguage="tr"
>
  <Person prop="author" name="Ahmet Yılmaz" url="https://example.com/ahmet" />
  <Organization
    prop="publisher"
    name="TechBlog TR"
    url="https://techblog.example.com"
  />
</BlogPosting>`}
    >
      <BlogPosting
        headline="React Server Components Rehberi"
        datePublished="2026-04-10"
        inLanguage="tr"
      >
        <Person prop="author" name="Ahmet Yılmaz" url="https://example.com/ahmet" />
        <Organization prop="publisher" name="TechBlog TR" url="https://techblog.example.com" />
      </BlogPosting>
      <div className="article-card">
        <p className="meta">10 Nisan 2026</p>
        <h2>React Server Components Rehberi</h2>
        <p>Yazan: Ahmet Yılmaz · Yayıncı: TechBlog TR</p>
        <div className="badge blue">BlogPosting</div>
      </div>
    </SchemaStory>
  ),
};
