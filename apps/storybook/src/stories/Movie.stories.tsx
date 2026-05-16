import type { Meta, StoryObj } from '@storybook/react';
import { Movie, Person, AggregateRating } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/Movie' };
export default meta;

export const Film: StoryObj = {
  name: 'Movie',
  render: () => (
    <SchemaStory
      title="Movie"
      description="Film şeması. Google'da film kartı ve bilgi paneli olarak görünür."
      source={`<Movie
  name="Kod: Sıfır"
  description="Bir yazılım mühendisinin yapay zeka..."
  dateCreated="2026-01-15"
  contentRating="PG-13"
  duration="PT2H15M"
  inLanguage="tr"
>
  <Person prop="director" name="Ayşe Demir" />
  <Person prop="actor" name="Mehmet Yıldız" />
  <Person prop="actor" name="Zeynep Arslan" />
  <AggregateRating
    prop="aggregateRating"
    ratingValue={7.8}
    reviewCount={1240}
    bestRating={10}
  />
</Movie>`}
    >
      <Movie
        name="Kod: Sıfır"
        description="Bir yazılım mühendisinin yapay zeka ile girdiği tehlikeli oyun."
        dateCreated="2026-01-15"
        contentRating="PG-13"
        duration="PT2H15M"
        inLanguage="tr"
      >
        <Person prop="director" name="Ayşe Demir" />
        <Person prop="actor" name="Mehmet Yıldız" />
        <Person prop="actor" name="Zeynep Arslan" />
        <AggregateRating prop="aggregateRating" ratingValue={7.8} reviewCount={1240} bestRating={10} />
      </Movie>
      <div className="product-card">
        <h2>Kod: Sıfır</h2>
        <p>Bir yazılım mühendisinin yapay zeka ile girdiği tehlikeli oyun.</p>
        <div className="stars">★★★★☆ <span style={{ color: '#888', fontSize: '0.85rem' }}>7.8/10 (1.240 değerlendirme)</span></div>
        <p className="meta" style={{ marginTop: '0.5rem' }}>Yönetmen: Ayşe Demir · 2 sa 15 dk · PG-13</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <div className="badge purple">Movie</div>
          <div className="badge blue">Türkçe</div>
        </div>
      </div>
    </SchemaStory>
  ),
};
