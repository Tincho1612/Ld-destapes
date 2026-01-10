import type { Locale } from '@/i18n';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  locale?: Locale;
  path?: string;
}

export function getSEO({ title, description, image, locale = 'es', path = '' }: SEOProps) {
  const siteName = 'Destapes el Toro';
  const defaultTitle = locale === 'es' 
    ? 'Destapes el Toro - Servicios de Destapes Industriales'
    : 'Destapes el Toro - Industrial Drain Cleaning Services';
  const defaultDescription = locale === 'es'
    ? 'Servicios profesionales de destapes industriales de cañerías y cloacas con maquinaria de última tecnología. Soluciones rápidas y eficientes.'
    : 'Professional industrial drain cleaning services for pipes and sewers with state-of-the-art machinery. Fast and efficient solutions.';
  
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const fullDescription = description || defaultDescription;
  const siteUrl = 'https://destapeseltoro.com';
  const fullPath = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullPath,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
  };
}
