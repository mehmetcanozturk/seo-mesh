import type { Meta, StoryObj } from '@storybook/react';
import { VideoObject, Person, Organization } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/VideoObject' };
export default meta;

export const Video: StoryObj = {
  name: 'VideoObject',
  render: () => (
    <SchemaStory
      title="VideoObject"
      description="Video şeması. Google'da video kartı ve karusel olarak görünür. uploadDate ve thumbnailUrl zorunludur."
      source={`<VideoObject
  name="Next.js App Router Tam Rehber"
  description="App Router, Server Components ve..."
  uploadDate="2026-05-10"
  duration="PT1H23M"
  contentUrl="https://www.youtube.com/watch?v=abc123"
  embedUrl="https://www.youtube.com/embed/abc123"
  thumbnailUrl="https://img.youtube.com/vi/abc123/maxresdefault.jpg"
  inLanguage="tr"
>
  <Person prop="author" name="Mehmet Can Öztürk" />
  <Organization prop="publisher" name="seo-mesh" />
</VideoObject>`}
    >
      <VideoObject
        name="Next.js App Router Tam Rehber"
        description="App Router, Server Components ve Streaming ile modern Next.js geliştirme."
        uploadDate="2026-05-10"
        duration="PT1H23M"
        contentUrl="https://www.youtube.com/watch?v=abc123"
        embedUrl="https://www.youtube.com/embed/abc123"
        thumbnailUrl="https://img.youtube.com/vi/abc123/maxresdefault.jpg"
        inLanguage="tr"
      >
        <Person prop="author" name="Mehmet Can Öztürk" />
        <Organization prop="publisher" name="seo-mesh" />
      </VideoObject>
      <div className="product-card">
        <div style={{ background: '#111', borderRadius: '8px', padding: '2rem', textAlign: 'center', marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '2rem' }}>▶</div>
          <p className="meta" style={{ marginTop: '0.25rem' }}>1 sa 23 dk</p>
        </div>
        <h2>Next.js App Router Tam Rehber</h2>
        <p>App Router, Server Components ve Streaming ile modern Next.js geliştirme.</p>
        <p className="meta" style={{ marginTop: '0.5rem' }}>Mehmet Can Öztürk · seo-mesh · 10 May 2026</p>
        <div className="badge blue" style={{ marginTop: '0.5rem' }}>VideoObject</div>
      </div>
    </SchemaStory>
  ),
};
