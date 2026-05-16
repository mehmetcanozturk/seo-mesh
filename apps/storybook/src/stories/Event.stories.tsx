import type { Meta, StoryObj } from '@storybook/react';
import { Event, MusicEvent, Organization, Person, Offer } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/Event' };
export default meta;

export const TemelEtkinlik: StoryObj = {
  name: 'Event — Online',
  render: () => (
    <SchemaStory
      title="Event (Online)"
      description="Etkinlik şeması. Google'da etkinlik kartı olarak görünür. eventAttendanceMode ile online/fiziksel/karma belirtilir."
      source={`<Event
  name="React İstanbul Meetup #12"
  startDate="2026-06-20T18:00:00+03:00"
  endDate="2026-06-20T21:00:00+03:00"
  eventStatus="https://schema.org/EventScheduled"
  eventAttendanceMode="https://schema.org/OnlineEventAttendanceMode"
  inLanguage="tr"
  isAccessibleForFree="True"
>
  <Organization prop="organizer" name="React İstanbul" url="https://reactistanbul.dev" />
  <Offer prop="offers" price={0} priceCurrency="TRY" availability="https://schema.org/InStock" />
</Event>`}
    >
      <Event
        name="React İstanbul Meetup #12"
        startDate="2026-06-20T18:00:00+03:00"
        endDate="2026-06-20T21:00:00+03:00"
        eventStatus="https://schema.org/EventScheduled"
        eventAttendanceMode="https://schema.org/OnlineEventAttendanceMode"
        inLanguage="tr"
        isAccessibleForFree="True"
      >
        <Organization prop="organizer" name="React İstanbul" url="https://reactistanbul.dev" />
        <Offer prop="offers" price={0} priceCurrency="TRY" availability="https://schema.org/InStock" />
      </Event>
      <div className="product-card">
        <h2>React İstanbul Meetup #12</h2>
        <p className="meta">20 Haziran 2026, 18:00 – 21:00</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <div className="badge blue">Online</div>
          <div className="badge">Ücretsiz</div>
          <div className="badge purple">React İstanbul</div>
        </div>
      </div>
    </SchemaStory>
  ),
};

export const MuzikKonseri: StoryObj = {
  name: 'MusicEvent — Fiziksel',
  render: () => (
    <SchemaStory
      title="MusicEvent"
      description="Müzik etkinliği şeması. Konser, festival gibi müzik etkinlikleri için MusicEvent kullanılır."
      source={`<MusicEvent
  name="Duman Akustik Konser"
  startDate="2026-07-15T21:00:00+03:00"
  endDate="2026-07-15T23:30:00+03:00"
  eventStatus="https://schema.org/EventScheduled"
  eventAttendanceMode="https://schema.org/OfflineEventAttendanceMode"
  location="Volkswagen Arena, İstanbul"
>
  <Person prop="performer" name="Kaan Tangöze" />
  <Offer prop="offers" price={750} priceCurrency="TRY" availability="https://schema.org/LimitedAvailability" />
</MusicEvent>`}
    >
      <MusicEvent
        name="Duman Akustik Konser"
        startDate="2026-07-15T21:00:00+03:00"
        endDate="2026-07-15T23:30:00+03:00"
        eventStatus="https://schema.org/EventScheduled"
        eventAttendanceMode="https://schema.org/OfflineEventAttendanceMode"
        location="Volkswagen Arena, İstanbul"
      >
        <Person prop="performer" name="Kaan Tangöze" />
        <Offer prop="offers" price={750} priceCurrency="TRY" availability="https://schema.org/LimitedAvailability" />
      </MusicEvent>
      <div className="product-card">
        <h2>Duman Akustik Konser</h2>
        <p className="meta">15 Temmuz 2026, 21:00 · Volkswagen Arena, İstanbul</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <div className="badge purple">MusicEvent</div>
          <div className="badge" style={{ background: '#2e2a1a', color: '#fbbf24', borderColor: '#fbbf2444' }}>Sınırlı Bilet</div>
        </div>
        <p className="meta" style={{ marginTop: '0.5rem' }}>₺750</p>
      </div>
    </SchemaStory>
  ),
};
