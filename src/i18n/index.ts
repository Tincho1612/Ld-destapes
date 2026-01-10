import type { Locale, Translations } from './types';
import { es } from './es';
import { en } from './en';

const translations: Record<Locale, Translations> = {
  es,
  en,
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale] || translations.es;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to Spanish if key not found
      value = translations.es;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key;
        }
      }
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.es;
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  return 'es';
}

export { translations, type Locale, type Translations };
