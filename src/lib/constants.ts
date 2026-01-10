export const SITE_NAME = import.meta.env.PUBLIC_SITE_NAME;
export const SITE_DESCRIPTION =
  import.meta.env.PUBLIC_SITE_DESCRIPTION;
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL;
export const WHATSAPP_LINK = import.meta.env.PUBLIC_WHATSAPP_LINK;

export const BRAND_COLORS = {
  primary: '#003380',
  white: '#ffffff',
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
} as const;
