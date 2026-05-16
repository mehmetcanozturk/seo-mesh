export {
  // Low-level
  SchemaScope, SchemaProp, JsonLdScript, SchemaGraph, Speakable, AiBotPolicy,
  OpenGraph, Canonical, HreflangAlternate, createSchemaComponent,
  // Products & Commerce
  Product, Offer, AggregateOffer,
  // Articles & Content
  Article, BlogPosting, NewsArticle, TechArticle, ScholarlyArticle, SocialMediaPosting,
  // People & Organizations
  Person, Organization, Corporation,
  // Local Business
  LocalBusiness, Restaurant, Store, Hotel, LodgingBusiness,
  // Events
  Event, BusinessEvent, MusicEvent, SportsEvent, EducationEvent,
  // Media
  VideoObject, ImageObject, AudioObject,
  // Music
  MusicRecording, MusicAlbum, MusicGroup, MusicPlaylist,
  // Creative Works
  Book, Movie, TVSeries, Dataset, SoftwareApplication, WebApplication,
  // Education
  Course, CourseInstance,
  // Jobs
  JobPosting, EmployerAggregateRating,
  // Reviews & Ratings
  Review, Rating, AggregateRating, ClaimReview,
  // Navigation & Structure
  BreadcrumbList, ListItem, ItemList, WebSite, WebPage, QAPage, FAQPage, Question, Answer,
  // How-To & Recipe
  HowTo, HowToStep, Recipe,
  // Actions
  SearchAction, ReadAction, EntryPoint,
} from '@seo-mesh/react';

export { buildSchemaFromTraversal, schemaToMetadataScript } from './generateSchemaMetadata';
export { generateLlmsTxt } from './generateLlmsTxt';
export type { LlmsTxtOptions, LlmsTxtSection, LlmsTxtLink } from './generateLlmsTxt';
export { generateSitemap } from './generateSitemap';
export type { SitemapEntry, SitemapOptions } from './generateSitemap';
export { generateRobotsTxt } from './generateRobotsTxt';
export type { RobotsRule, RobotsTxtOptions } from './generateRobotsTxt';
export { auditPage } from './auditPage';
export type { AuditPageOptions, AuditResult, AuditIssue } from './auditPage';
export type { BuildSchemaOptions } from './generateSchemaMetadata';

export type {
  SchemaOrgType,
  SchemaNode,
  JsonLdObject,
  JsonLdValue,
  SchemaScopeProps,
  SchemaPropProps,
} from '@seo-mesh/core';
