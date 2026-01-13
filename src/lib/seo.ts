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
    ? 'Destapes el Toro - Destapes Urgentes Mar del Plata | Empresa de Destapes'
    : 'Destapes el Toro - Industrial Drain Cleaning Services';
  const defaultDescription = locale === 'es'
    ? 'Empresa de destapes en Mar del Plata. Destapes de cañerías urgentes y destape de cloacas urgente disponibles 24/7. Servicios profesionales con maquinaria de última tecnología en Mar del Plata y Batán.'
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
