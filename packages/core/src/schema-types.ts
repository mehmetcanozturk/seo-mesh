// ─── Products & Commerce ───────────────────────────────────────────────────

export type ProductProps =
  | 'name' | 'description' | 'image' | 'offers' | 'brand' | 'sku'
  | 'gtin' | 'gtin8' | 'gtin12' | 'gtin13' | 'gtin14' | 'mpn'
  | 'aggregateRating' | 'review' | 'color' | 'material' | 'url'
  | 'category' | 'isRelatedTo' | 'isSimilarTo' | 'productID'
  | 'weight' | 'width' | 'height' | 'depth' | 'award';

export type OfferProps =
  | 'price' | 'priceCurrency' | 'availability' | 'url' | 'validFrom'
  | 'validThrough' | 'seller' | 'priceValidUntil' | 'itemCondition'
  | 'shippingDetails' | 'hasMerchantReturnPolicy' | 'offeredBy';

export type AggregateOfferProps =
  | 'lowPrice' | 'highPrice' | 'priceCurrency' | 'offerCount' | 'offers';

// ─── Articles & Content ────────────────────────────────────────────────────

export type ArticleProps =
  | 'headline' | 'author' | 'datePublished' | 'dateModified' | 'image'
  | 'publisher' | 'description' | 'url' | 'inLanguage' | 'keywords'
  | 'articleSection' | 'wordCount' | 'thumbnailUrl' | 'video'
  | 'speakable' | 'isAccessibleForFree' | 'hasPart' | 'mainEntityOfPage';

export type NewsArticleProps = ArticleProps | 'dateline' | 'printColumn' | 'printEdition' | 'printPage' | 'printSection';

export type TechArticleProps = ArticleProps | 'proficiencyLevel' | 'dependencies';

// ─── People & Organizations ────────────────────────────────────────────────

export type PersonProps =
  | 'name' | 'url' | 'image' | 'jobTitle' | 'email' | 'telephone'
  | 'address' | 'sameAs' | 'description' | 'givenName' | 'familyName'
  | 'birthDate' | 'nationality' | 'worksFor' | 'affiliation' | 'award';

export type OrganizationProps =
  | 'name' | 'url' | 'logo' | 'description' | 'address' | 'telephone'
  | 'email' | 'sameAs' | 'foundingDate' | 'numberOfEmployees' | 'award'
  | 'contactPoint' | 'department' | 'legalName' | 'taxID' | 'vatID';

// ─── Local Business ────────────────────────────────────────────────────────

export type LocalBusinessProps =
  | 'name' | 'address' | 'telephone' | 'openingHours' | 'url' | 'image'
  | 'priceRange' | 'geo' | 'aggregateRating' | 'review' | 'email'
  | 'faxNumber' | 'openingHoursSpecification' | 'hasMap' | 'currenciesAccepted'
  | 'paymentAccepted' | 'servesCuisine' | 'menu' | 'acceptsReservations'
  | 'sameAs' | 'description' | 'logo';

export type LodgingBusinessProps =
  | LocalBusinessProps | 'starRating' | 'amenityFeature' | 'checkinTime'
  | 'checkoutTime' | 'numberOfRooms' | 'petsAllowed' | 'availableLanguage';

// ─── Events ────────────────────────────────────────────────────────────────

export type EventProps =
  | 'name' | 'startDate' | 'endDate' | 'location' | 'description' | 'image'
  | 'organizer' | 'performer' | 'offers' | 'url' | 'eventStatus'
  | 'eventAttendanceMode' | 'inLanguage' | 'isAccessibleForFree'
  | 'previousStartDate' | 'recordedIn' | 'sponsor' | 'typicalAgeRange'
  | 'workFeatured' | 'audience';

// ─── Media Objects ─────────────────────────────────────────────────────────

export type VideoObjectProps =
  | 'name' | 'description' | 'thumbnailUrl' | 'uploadDate' | 'duration'
  | 'contentUrl' | 'embedUrl' | 'publisher' | 'author' | 'inLanguage'
  | 'regionsAllowed' | 'interactionStatistic' | 'isFamilyFriendly'
  | 'expires' | 'hasPart' | 'isLiveBroadcast' | 'publication';

export type ImageObjectProps =
  | 'url' | 'width' | 'height' | 'caption' | 'author' | 'contentUrl'
  | 'name' | 'description' | 'license' | 'acquireLicensePage'
  | 'creditText' | 'copyrightNotice' | 'creator';

export type AudioObjectProps =
  | 'name' | 'description' | 'contentUrl' | 'duration' | 'uploadDate'
  | 'publisher' | 'author' | 'inLanguage';

// ─── Music ─────────────────────────────────────────────────────────────────

export type MusicRecordingProps =
  | 'name' | 'byArtist' | 'duration' | 'inAlbum' | 'url' | 'image'
  | 'isrcCode' | 'recordingOf' | 'inPlaylist';

export type MusicAlbumProps =
  | 'name' | 'byArtist' | 'datePublished' | 'numTracks' | 'track'
  | 'url' | 'image' | 'aggregateRating' | 'albumRelease' | 'albumProductionType'
  | 'albumReleaseType' | 'award';

export type MusicGroupProps =
  | 'name' | 'url' | 'image' | 'genre' | 'member' | 'track'
  | 'album' | 'description' | 'foundingDate' | 'dissolutionDate' | 'sameAs';

// ─── Creative Works ────────────────────────────────────────────────────────

export type BookProps =
  | 'name' | 'author' | 'isbn' | 'datePublished' | 'description' | 'image'
  | 'inLanguage' | 'numberOfPages' | 'publisher' | 'url' | 'aggregateRating'
  | 'bookEdition' | 'bookFormat' | 'award' | 'genre' | 'workExample'
  | 'illustrator' | 'translator';

export type MovieProps =
  | 'name' | 'description' | 'image' | 'director' | 'actor' | 'dateCreated'
  | 'aggregateRating' | 'trailer' | 'url' | 'contentRating' | 'duration'
  | 'genre' | 'musicBy' | 'productionCompany' | 'countryOfOrigin'
  | 'award' | 'inLanguage' | 'subtitleLanguage' | 'review';

export type TVSeriesProps =
  | 'name' | 'description' | 'image' | 'actor' | 'director' | 'startDate'
  | 'endDate' | 'numberOfEpisodes' | 'numberOfSeasons' | 'containsSeason'
  | 'aggregateRating' | 'genre' | 'url' | 'productionCompany' | 'award';

export type DatasetProps =
  | 'name' | 'description' | 'url' | 'creator' | 'license' | 'sameAs'
  | 'version' | 'keywords' | 'distribution' | 'datePublished' | 'dateModified'
  | 'variableMeasured' | 'measurementTechnique' | 'temporalCoverage'
  | 'spatialCoverage' | 'includedInDataCatalog' | 'issn';

// ─── Education ─────────────────────────────────────────────────────────────

export type CourseProps =
  | 'name' | 'description' | 'provider' | 'url' | 'hasCourseInstance'
  | 'educationalLevel' | 'inLanguage' | 'image' | 'instructor' | 'offers'
  | 'timeRequired' | 'coursePrerequisites' | 'educationalCredentialAwarded'
  | 'teaches' | 'assesses' | 'about' | 'keywords' | 'aggregateRating';

export type CourseInstanceProps =
  | 'courseMode' | 'startDate' | 'endDate' | 'location' | 'instructor'
  | 'offers' | 'courseSchedule' | 'courseWorkload' | 'inLanguage';

// ─── Jobs ──────────────────────────────────────────────────────────────────

export type JobPostingProps =
  | 'title' | 'description' | 'datePosted' | 'validThrough' | 'employmentType'
  | 'hiringOrganization' | 'jobLocation' | 'baseSalary' | 'url'
  | 'applicantLocationRequirements' | 'jobLocationType' | 'identifier'
  | 'skills' | 'qualifications' | 'responsibilities' | 'educationRequirements'
  | 'experienceRequirements' | 'industry' | 'occupationalCategory'
  | 'workHours' | 'jobBenefits' | 'directApply' | 'totalJobOpenings';

export type EmployerAggregateRatingProps =
  | 'itemReviewed' | 'ratingValue' | 'bestRating' | 'worstRating'
  | 'ratingCount' | 'reviewCount' | 'author';

// ─── Reviews & Ratings ─────────────────────────────────────────────────────

export type ReviewProps =
  | 'reviewBody' | 'author' | 'datePublished' | 'reviewRating' | 'itemReviewed'
  | 'publisher' | 'url' | 'inLanguage';

export type RatingProps =
  | 'ratingValue' | 'bestRating' | 'worstRating' | 'author' | 'ratingExplanation';

export type AggregateRatingProps =
  | 'ratingValue' | 'reviewCount' | 'ratingCount' | 'bestRating' | 'worstRating'
  | 'itemReviewed';

export type ClaimReviewProps =
  | 'url' | 'claimReviewed' | 'datePublished' | 'author' | 'itemReviewed'
  | 'reviewRating' | 'inLanguage' | 'publisher';

// ─── Navigation & Structure ────────────────────────────────────────────────

export type BreadcrumbListProps = 'itemListElement' | 'name';

export type ListItemProps = 'position' | 'name' | 'item' | 'url';

export type ItemListProps =
  | 'name' | 'description' | 'itemListElement' | 'itemListOrder' | 'numberOfItems';

export type WebSiteProps =
  | 'name' | 'url' | 'description' | 'publisher' | 'potentialAction'
  | 'inLanguage' | 'sameAs' | 'alternateName';

export type WebPageProps =
  | 'name' | 'url' | 'description' | 'image' | 'datePublished' | 'dateModified'
  | 'author' | 'breadcrumb' | 'inLanguage' | 'isPartOf' | 'speakable'
  | 'primaryImageOfPage' | 'reviewedBy' | 'lastReviewed';

export type QAPageProps = 'mainEntity' | 'name' | 'url' | 'description';

// ─── FAQ & Q&A ─────────────────────────────────────────────────────────────

export type FAQPageProps = 'mainEntity';

export type QuestionProps = 'name' | 'acceptedAnswer' | 'suggestedAnswer' | 'answerCount' | 'author';

export type AnswerProps = 'text' | 'author' | 'datePublished' | 'upvoteCount' | 'url';

// ─── How-To & Recipe ───────────────────────────────────────────────────────

export type HowToProps =
  | 'name' | 'description' | 'image' | 'totalTime' | 'estimatedCost'
  | 'supply' | 'tool' | 'step' | 'yield' | 'url';

export type HowToStepProps =
  | 'name' | 'text' | 'image' | 'url' | 'itemListElement';

export type RecipeProps =
  | 'name' | 'description' | 'image' | 'author' | 'datePublished'
  | 'prepTime' | 'cookTime' | 'totalTime' | 'recipeYield' | 'recipeCategory'
  | 'recipeCuisine' | 'recipeIngredient' | 'recipeInstructions' | 'nutrition'
  | 'keywords' | 'aggregateRating' | 'review' | 'video' | 'suitableForDiet'
  | 'cookingMethod' | 'url';

// ─── Software ──────────────────────────────────────────────────────────────

export type SoftwareApplicationProps =
  | 'name' | 'description' | 'applicationCategory' | 'operatingSystem'
  | 'offers' | 'aggregateRating' | 'url' | 'downloadUrl' | 'featureList'
  | 'fileSize' | 'installUrl' | 'memoryRequirements' | 'processorRequirements'
  | 'releaseNotes' | 'screenshot' | 'softwareRequirements' | 'softwareVersion'
  | 'storageRequirements' | 'countriesNotSupported' | 'countriesSupported'
  | 'availableOnDevice';

// ─── Actions ───────────────────────────────────────────────────────────────

export type SearchActionProps = 'target' | 'query-input' | 'result';

export type ReadActionProps = 'target' | 'object' | 'result';

export type EntryPointProps = 'urlTemplate' | 'actionPlatform' | 'inLanguage' | 'contentType';

// ─── Mapped type ───────────────────────────────────────────────────────────

export type SchemaPropsFor<T extends string> =
  T extends 'Product' ? ProductProps
  : T extends 'Offer' ? OfferProps
  : T extends 'AggregateOffer' ? AggregateOfferProps
  : T extends 'Article' | 'SocialMediaPosting' | 'ScholarlyArticle' ? ArticleProps
  : T extends 'BlogPosting' ? ArticleProps
  : T extends 'NewsArticle' ? NewsArticleProps
  : T extends 'TechArticle' ? TechArticleProps
  : T extends 'Person' ? PersonProps
  : T extends 'Organization' | 'Corporation' | 'NGO' ? OrganizationProps
  : T extends 'LocalBusiness' | 'Restaurant' | 'Store' | 'MedicalBusiness' ? LocalBusinessProps
  : T extends 'Hotel' | 'LodgingBusiness' ? LodgingBusinessProps
  : T extends 'Event' | 'BusinessEvent' | 'SocialEvent' | 'MusicEvent' | 'SportsEvent' | 'EducationEvent' ? EventProps
  : T extends 'VideoObject' ? VideoObjectProps
  : T extends 'ImageObject' ? ImageObjectProps
  : T extends 'AudioObject' ? AudioObjectProps
  : T extends 'MusicRecording' ? MusicRecordingProps
  : T extends 'MusicAlbum' ? MusicAlbumProps
  : T extends 'MusicGroup' ? MusicGroupProps
  : T extends 'Book' ? BookProps
  : T extends 'Movie' ? MovieProps
  : T extends 'TVSeries' ? TVSeriesProps
  : T extends 'Dataset' ? DatasetProps
  : T extends 'Course' ? CourseProps
  : T extends 'CourseInstance' ? CourseInstanceProps
  : T extends 'JobPosting' ? JobPostingProps
  : T extends 'EmployerAggregateRating' ? EmployerAggregateRatingProps
  : T extends 'Review' | 'ItemReview' ? ReviewProps
  : T extends 'Rating' ? RatingProps
  : T extends 'AggregateRating' ? AggregateRatingProps
  : T extends 'ClaimReview' ? ClaimReviewProps
  : T extends 'BreadcrumbList' ? BreadcrumbListProps
  : T extends 'ListItem' ? ListItemProps
  : T extends 'ItemList' ? ItemListProps
  : T extends 'WebSite' ? WebSiteProps
  : T extends 'WebPage' | 'AboutPage' | 'ContactPage' | 'CheckoutPage' | 'ProfilePage' | 'CollectionPage' ? WebPageProps
  : T extends 'QAPage' ? QAPageProps
  : T extends 'FAQPage' ? FAQPageProps
  : T extends 'Question' ? QuestionProps
  : T extends 'Answer' ? AnswerProps
  : T extends 'HowTo' ? HowToProps
  : T extends 'HowToStep' ? HowToStepProps
  : T extends 'Recipe' ? RecipeProps
  : T extends 'SoftwareApplication' | 'WebApplication' ? SoftwareApplicationProps
  : T extends 'SearchAction' ? SearchActionProps
  : T extends 'ReadAction' ? ReadActionProps
  : T extends 'EntryPoint' ? EntryPointProps
  : string;

// ─── Required / Optional ayrımı (Google Rich Results zorunlu alanlar) ──────

type RequiredMap = {
  Article:        'headline' | 'datePublished';
  BlogPosting:    'headline' | 'datePublished';
  NewsArticle:    'headline' | 'datePublished';
  TechArticle:    'headline' | 'datePublished';
  Product:        'name';
  Offer:          'price' | 'priceCurrency';
  Event:          'name' | 'startDate' | 'location';
  MusicEvent:     'name' | 'startDate' | 'location';
  SportsEvent:    'name' | 'startDate' | 'location';
  BusinessEvent:  'name' | 'startDate' | 'location';
  EducationEvent: 'name' | 'startDate' | 'location';
  JobPosting:     'title' | 'datePosted' | 'description' | 'hiringOrganization' | 'jobLocation';
  Recipe:         'name' | 'recipeIngredient' | 'recipeInstructions';
  HowTo:          'name' | 'step';
  HowToStep:      'text';
  Review:         'reviewBody' | 'reviewRating';
  ClaimReview:    'url' | 'claimReviewed' | 'reviewRating';
  Course:         'name' | 'description' | 'provider';
  VideoObject:    'name' | 'description' | 'thumbnailUrl' | 'uploadDate';
  Book:           'name' | 'author';
  Question:       'name' | 'acceptedAnswer';
  LocalBusiness:  'name' | 'address';
  Restaurant:     'name' | 'address';
  Store:          'name' | 'address';
};

export type RequiredPropsFor<T extends string> =
  T extends keyof RequiredMap ? RequiredMap[T] : never;

export type OptionalPropsFor<T extends string> =
  Exclude<SchemaPropsFor<T>, RequiredPropsFor<T>>;
