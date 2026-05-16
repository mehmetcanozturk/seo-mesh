import type { ReactNode } from 'react';

export type SchemaContext = 'https://schema.org';

export type SchemaOrgType =
  // Products & Commerce
  | 'Product'
  | 'Offer'
  | 'AggregateOffer'
  // Articles & Content
  | 'Article'
  | 'BlogPosting'
  | 'NewsArticle'
  | 'TechArticle'
  | 'ScholarlyArticle'
  | 'SocialMediaPosting'
  // People & Organizations
  | 'Person'
  | 'Organization'
  | 'Corporation'
  | 'NGO'
  // Local Business
  | 'LocalBusiness'
  | 'Restaurant'
  | 'Store'
  | 'Hotel'
  | 'LodgingBusiness'
  | 'MedicalBusiness'
  // Events
  | 'Event'
  | 'BusinessEvent'
  | 'SocialEvent'
  | 'MusicEvent'
  | 'SportsEvent'
  | 'EducationEvent'
  // Media
  | 'VideoObject'
  | 'ImageObject'
  | 'AudioObject'
  | 'MediaObject'
  // Music
  | 'MusicRecording'
  | 'MusicAlbum'
  | 'MusicGroup'
  | 'MusicPlaylist'
  // Creative Works
  | 'Book'
  | 'Movie'
  | 'TVSeries'
  | 'TVEpisode'
  | 'CreativeWork'
  | 'Dataset'
  | 'Game'
  | 'SoftwareApplication'
  | 'WebApplication'
  // Education
  | 'Course'
  | 'CourseInstance'
  | 'EducationalOccupationalCredential'
  // Jobs
  | 'JobPosting'
  | 'Occupation'
  | 'EmployerAggregateRating'
  // Reviews & Ratings
  | 'Review'
  | 'Rating'
  | 'AggregateRating'
  | 'ClaimReview'
  | 'ItemReview'
  // Navigation & Structure
  | 'BreadcrumbList'
  | 'ListItem'
  | 'ItemList'
  | 'WebSite'
  | 'WebPage'
  | 'QAPage'
  | 'FAQPage'
  | 'ProfilePage'
  | 'CollectionPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CheckoutPage'
  // Q&A
  | 'Question'
  | 'Answer'
  // How-To & Recipe
  | 'HowTo'
  | 'HowToStep'
  | 'HowToSupply'
  | 'HowToTool'
  | 'Recipe'
  // Actions (for potentialAction)
  | 'SearchAction'
  | 'ReadAction'
  | 'BuyAction'
  | 'WatchAction'
  | 'ViewAction'
  | 'EntryPoint'
  // Misc
  | 'Speakable'
  | 'SpeakableSpecification'
  | 'FloorPlan'
  | 'MedicalCondition'
  | 'Drug'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {});

export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdObject
  | JsonLdValue[];

export type JsonLdObject = {
  '@context'?: SchemaContext;
  '@type': string;
  [key: string]: JsonLdValue | SchemaContext | string | undefined;
};

export type SchemaNode = {
  '@context': SchemaContext;
  '@type': string;
  [key: string]: JsonLdValue | SchemaContext | string;
};

export interface SchemaScopeProps {
  type: SchemaOrgType;
  prop?: string;
  children: ReactNode;
}

export interface SchemaPropProps {
  name: string;
  value?: JsonLdValue;
  children?: ReactNode;
}

export interface TraverseOptions {
  type: SchemaOrgType;
  SchemaPropRef: unknown;
  SchemaScopeRef: unknown;
  isRoot?: boolean;
}
