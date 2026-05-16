const REQUIRED: Record<string, string[]> = {
  // Articles
  Article:        ['headline', 'datePublished'],
  BlogPosting:    ['headline', 'datePublished'],
  NewsArticle:    ['headline', 'datePublished'],
  TechArticle:    ['headline', 'datePublished'],
  // Products & Commerce
  Product:        ['name'],
  Offer:          ['price', 'priceCurrency'],
  // Events
  Event:          ['name', 'startDate', 'location'],
  MusicEvent:     ['name', 'startDate', 'location'],
  SportsEvent:    ['name', 'startDate', 'location'],
  BusinessEvent:  ['name', 'startDate', 'location'],
  EducationEvent: ['name', 'startDate', 'location'],
  // Jobs
  JobPosting:     ['title', 'datePosted', 'description', 'hiringOrganization', 'jobLocation'],
  // Recipes
  Recipe:         ['name', 'recipeIngredient', 'recipeInstructions'],
  // How-To
  HowTo:          ['name', 'step'],
  HowToStep:      ['text'],
  // Reviews
  Review:         ['reviewBody', 'reviewRating'],
  ClaimReview:    ['url', 'claimReviewed', 'reviewRating'],
  // Education
  Course:         ['name', 'description', 'provider'],
  // Media
  VideoObject:    ['name', 'description', 'thumbnailUrl', 'uploadDate'],
  // Books
  Book:           ['name', 'author'],
  // Q&A
  Question:       ['name', 'acceptedAnswer'],
  // Local Business
  LocalBusiness:  ['name', 'address'],
};

declare const process: { env: { NODE_ENV?: string } } | undefined;

export function validateSchema(type: string, schema: Record<string, unknown>): void {
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') return;
  const required = REQUIRED[type];
  if (!required) return;
  for (const field of required) {
    if (schema[field] === undefined) {
      console.warn(`[seo-mesh] <${type}> missing required field: "${field}"`);
    }
  }
}

export { REQUIRED as REQUIRED_SCHEMA_FIELDS };

const AI_ARTICLE_TYPES = ['Article', 'BlogPosting', 'NewsArticle', 'TechArticle', 'ScholarlyArticle'];
const AI_CONTENT_TYPES = [...AI_ARTICLE_TYPES, 'Product', 'LocalBusiness', 'Course', 'Event'];

export function validateForAI(type: string, schema: Record<string, unknown>): void {
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') return;

  const desc = schema['description'] as string | undefined;

  if (AI_CONTENT_TYPES.includes(type)) {
    if (desc === undefined) {
      console.warn(`[seo-mesh/ai] <${type}> missing "description" — AI systems use this for summaries`);
    } else if (desc.length < 50) {
      console.warn(`[seo-mesh/ai] <${type}> description too short for AI summarization (${desc.length} chars, recommend 50+)`);
    }
  }

  if (AI_ARTICLE_TYPES.includes(type)) {
    if (!schema['author']) {
      console.warn(`[seo-mesh/ai] <${type}> missing "author" — AI systems use this for source attribution`);
    }
    if (!schema['image']) {
      console.info(`[seo-mesh/ai] <${type}> no "image" — Google AI Overviews prefer articles with images`);
    }
  }
}
