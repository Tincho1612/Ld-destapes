export type Locale = 'es' | 'en';

export interface Translations {
  nav: {
    features: string;
    coverage: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  logos: {
    title: string;
  };
  coverage: {
    title: string;
    subtitle: string;
    areas: Array<{
      name: string;
      description: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    description: string;
    links: {
      product: string;
      company: string;
      legal: string;
      social: string;
    };
    product: Array<{ label: string; href: string }>;
    company: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
    copyright: string;
  };
  urgencias?: {
    title: string;
    subtitle: string;
    hero: {
      title: string;
      description: string;
      cta: string;
      ctaSecondary: string;
    };
    availability: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    services: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    contact: {
      title: string;
      description: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    areas: {
      title: string;
      description: string;
      items: Array<{
        name: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
}
