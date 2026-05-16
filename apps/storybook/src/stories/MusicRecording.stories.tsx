import type { Meta, StoryObj } from '@storybook/react';
import { MusicRecording, MusicAlbum, MusicGroup, Person } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/Music' };
export default meta;

export const Sarki: StoryObj = {
  name: 'MusicRecording',
  render: () => (
    <SchemaStory
      title="MusicRecording"
      description="Müzik kaydı şeması. Şarkı, albüm ve sanatçı bilgilerini birbirine bağlar."
      source={`<MusicRecording
  name="Seni Gördüğümde"
  duration="PT3M42S"
  isrcCode="TRA172600001"
  url="https://music.example.com/sarki/seni-gordigumde"
>
  <MusicGroup prop="byArtist" name="Duman" url="https://music.example.com/duman" />
  <MusicAlbum prop="inAlbum" name="Belki de" datePublished="2026-03-10" />
</MusicRecording>`}
    >
      <MusicRecording
        name="Seni Gördüğümde"
        duration="PT3M42S"
        isrcCode="TRA172600001"
        url="https://music.example.com/sarki/seni-gordigumde"
      >
        <MusicGroup prop="byArtist" name="Duman" url="https://music.example.com/duman" />
        <MusicAlbum prop="inAlbum" name="Belki de" datePublished="2026-03-10" />
      </MusicRecording>
      <div className="product-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <div style={{ width: '48px', height: '48px', background: '#1e1e2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>🎵</div>
          <div>
            <h2 style={{ fontSize: '1rem' }}>Seni Gördüğümde</h2>
            <p className="meta">Duman · Belki de · 3:42</p>
          </div>
        </div>
        <div className="badge purple">MusicRecording</div>
      </div>
    </SchemaStory>
  ),
};

export const Album: StoryObj = {
  name: 'MusicAlbum',
  render: () => (
    <SchemaStory
      title="MusicAlbum"
      description="Müzik albümü şeması. Sanatçı, parçalar ve yayın tarihi bilgilerini içerir."
      source={`<MusicAlbum
  name="Belki de"
  datePublished="2026-03-10"
  numTracks={12}
  url="https://music.example.com/album/belki-de"
>
  <MusicGroup prop="byArtist" name="Duman" />
</MusicAlbum>`}
    >
      <MusicAlbum
        name="Belki de"
        datePublished="2026-03-10"
        numTracks={12}
        url="https://music.example.com/album/belki-de"
      >
        <MusicGroup prop="byArtist" name="Duman" />
      </MusicAlbum>
      <div className="product-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <div style={{ width: '64px', height: '64px', background: '#1e1e2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>💿</div>
          <div>
            <h2 style={{ fontSize: '1rem' }}>Belki de</h2>
            <p className="meta">Duman · 12 parça · 10 Mart 2026</p>
          </div>
        </div>
        <div className="badge purple">MusicAlbum</div>
      </div>
    </SchemaStory>
  ),
};
