
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Illuminated Links",
  description = "Your trusted source for insurance solutions including Life & Health Insurance, Annuities, and Medicare Solutions.",
  canonicalUrl,
  ogImage = "/og-image.png"
}) => {
  const siteTitle = title === "Illuminated Links" ? title : `${title} | Illuminated Links`;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
