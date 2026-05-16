import type { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type OgType = 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'video.movie' | (string & {});
type TwitterCard = 'summary' | 'summary_large_image' | 'app' | 'player';

export interface OpenGraphProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: OgType;
  url?: string;
  siteName?: string;
  locale?: string;
  twitterCard?: TwitterCard;
  twitterSite?: string;
  twitterCreator?: string;
}

export function OpenGraph(props: OpenGraphProps): ReactNode {
  const {
    title, description, image, imageAlt, imageWidth, imageHeight,
    type = 'website', url, siteName, locale,
    twitterCard = image ? 'summary_large_image' : 'summary',
    twitterSite, twitterCreator,
  } = props;

  return (
    <>
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      {locale && <meta property="og:locale" content={locale} />}
      {image && <meta property="og:image" content={image} />}
      {image && imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      {image && imageWidth && <meta property="og:image:width" content={String(imageWidth)} />}
      {image && imageHeight && <meta property="og:image:height" content={String(imageHeight)} />}

      {/* Twitter / X Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {image && imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
    </>
  );
}
