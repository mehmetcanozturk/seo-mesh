import type { Meta, StoryObj } from '@storybook/react';
import { Book, Person, Organization, AggregateRating, Offer } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/Book' };
export default meta;

export const TemelKitap: StoryObj = {
  name: 'Book',
  render: () => (
    <SchemaStory
      title="Book"
      description="Kitap şeması. Google'da kitap kartı olarak görünür, ISBN ile eşleştirme yapılır."
      source={`<Book
  name="React ile Modern Uygulama Geliştirme"
  isbn="978-605-123-456-7"
  datePublished="2026-03-01"
  inLanguage="tr"
  numberOfPages={420}
  bookFormat="https://schema.org/EBook"
>
  <Person prop="author" name="Mehmet Can Öztürk" />
  <Organization prop="publisher" name="Dev Yayınları" />
  <AggregateRating prop="aggregateRating" ratingValue={4.7} reviewCount={84} />
  <Offer prop="workExample" price={149} priceCurrency="TRY" />
</Book>`}
    >
      <Book
        name="React ile Modern Uygulama Geliştirme"
        isbn="978-605-123-456-7"
        datePublished="2026-03-01"
        inLanguage="tr"
        numberOfPages={420}
        bookFormat="https://schema.org/EBook"
      >
        <Person prop="author" name="Mehmet Can Öztürk" />
        <Organization prop="publisher" name="Dev Yayınları" />
        <AggregateRating prop="aggregateRating" ratingValue={4.7} reviewCount={84} />
        <Offer prop="workExample" price={149} priceCurrency="TRY" />
      </Book>
      <div className="product-card">
        <h2>React ile Modern Uygulama Geliştirme</h2>
        <p>Mehmet Can Öztürk · Dev Yayınları · 420 sayfa</p>
        <div className="stars">★★★★★ <span style={{ color: '#888', fontSize: '0.85rem' }}>4.7 (84 değerlendirme)</span></div>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <div className="badge">E-Kitap</div>
          <div className="badge blue">ISBN: 978-605-123-456-7</div>
        </div>
        <p className="meta" style={{ marginTop: '0.5rem' }}>₺149</p>
      </div>
    </SchemaStory>
  ),
};
