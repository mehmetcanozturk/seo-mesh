export { SchemaScope } from './SchemaScope';
export { SchemaProp } from './SchemaProp';
export { JsonLdScript } from './JsonLdScript';
export { SchemaGraph } from './SchemaGraph';
export { Speakable } from './Speakable';
export { AiBotPolicy } from './AiBotPolicy';
export { OpenGraph } from './OpenGraph';
export type { OpenGraphProps } from './OpenGraph';
export { Canonical } from './Canonical';
export type { CanonicalProps } from './Canonical';
export { HreflangAlternate } from './HreflangAlternate';
export type { HreflangAlternateProps, HreflangLocale } from './HreflangAlternate';
export { createSchemaComponent } from './createSchemaComponent';

export type {
  SchemaOrgType,
  SchemaNode,
  JsonLdObject,
  JsonLdValue,
  SchemaScopeProps,
  SchemaPropProps,
} from '@seo-mesh/core';

import { createSchemaComponent } from './createSchemaComponent';

// ─── Products & Commerce ───────────────────────────────────────────────────
export const Product            = createSchemaComponent('Product');
export const Offer              = createSchemaComponent('Offer');
export const AggregateOffer     = createSchemaComponent('AggregateOffer');

// ─── Articles & Content ────────────────────────────────────────────────────
export const Article            = createSchemaComponent('Article');
export const BlogPosting        = createSchemaComponent('BlogPosting');
export const NewsArticle        = createSchemaComponent('NewsArticle');
export const TechArticle        = createSchemaComponent('TechArticle');
export const ScholarlyArticle   = createSchemaComponent('ScholarlyArticle');
export const SocialMediaPosting = createSchemaComponent('SocialMediaPosting');

// ─── People & Organizations ────────────────────────────────────────────────
export const Person             = createSchemaComponent('Person');
export const Organization       = createSchemaComponent('Organization');
export const Corporation        = createSchemaComponent('Corporation');

// ─── Local Business ────────────────────────────────────────────────────────
export const LocalBusiness      = createSchemaComponent('LocalBusiness');
export const Restaurant         = createSchemaComponent('Restaurant');
export const Store              = createSchemaComponent('Store');
export const Hotel              = createSchemaComponent('Hotel');
export const LodgingBusiness    = createSchemaComponent('LodgingBusiness');

// ─── Events ────────────────────────────────────────────────────────────────
export const Event              = createSchemaComponent('Event');
export const BusinessEvent      = createSchemaComponent('BusinessEvent');
export const MusicEvent         = createSchemaComponent('MusicEvent');
export const SportsEvent        = createSchemaComponent('SportsEvent');
export const EducationEvent     = createSchemaComponent('EducationEvent');

// ─── Media Objects ─────────────────────────────────────────────────────────
export const VideoObject        = createSchemaComponent('VideoObject');
export const ImageObject        = createSchemaComponent('ImageObject');
export const AudioObject        = createSchemaComponent('AudioObject');

// ─── Music ─────────────────────────────────────────────────────────────────
export const MusicRecording     = createSchemaComponent('MusicRecording');
export const MusicAlbum         = createSchemaComponent('MusicAlbum');
export const MusicGroup         = createSchemaComponent('MusicGroup');
export const MusicPlaylist      = createSchemaComponent('MusicPlaylist');

// ─── Creative Works ────────────────────────────────────────────────────────
export const Book               = createSchemaComponent('Book');
export const Movie              = createSchemaComponent('Movie');
export const TVSeries           = createSchemaComponent('TVSeries');
export const Dataset            = createSchemaComponent('Dataset');
export const SoftwareApplication = createSchemaComponent('SoftwareApplication');
export const WebApplication     = createSchemaComponent('WebApplication');

// ─── Education ─────────────────────────────────────────────────────────────
export const Course             = createSchemaComponent('Course');
export const CourseInstance     = createSchemaComponent('CourseInstance');

// ─── Jobs ──────────────────────────────────────────────────────────────────
export const JobPosting         = createSchemaComponent('JobPosting');
export const EmployerAggregateRating = createSchemaComponent('EmployerAggregateRating');

// ─── Reviews & Ratings ─────────────────────────────────────────────────────
export const Review             = createSchemaComponent('Review');
export const Rating             = createSchemaComponent('Rating');
export const AggregateRating    = createSchemaComponent('AggregateRating');
export const ClaimReview        = createSchemaComponent('ClaimReview');

// ─── Navigation & Structure ────────────────────────────────────────────────
export const BreadcrumbList     = createSchemaComponent('BreadcrumbList');
export const ListItem           = createSchemaComponent('ListItem');
export const ItemList           = createSchemaComponent('ItemList');
export const WebSite            = createSchemaComponent('WebSite');
export const WebPage            = createSchemaComponent('WebPage');
export const QAPage             = createSchemaComponent('QAPage');
export const FAQPage            = createSchemaComponent('FAQPage');
export const Question           = createSchemaComponent('Question');
export const Answer             = createSchemaComponent('Answer');

// ─── How-To & Recipe ───────────────────────────────────────────────────────
export const HowTo              = createSchemaComponent('HowTo');
export const HowToStep          = createSchemaComponent('HowToStep');
export const Recipe             = createSchemaComponent('Recipe');

// ─── Actions ───────────────────────────────────────────────────────────────
export const SearchAction       = createSchemaComponent('SearchAction');
export const ReadAction         = createSchemaComponent('ReadAction');
export const EntryPoint         = createSchemaComponent('EntryPoint');
