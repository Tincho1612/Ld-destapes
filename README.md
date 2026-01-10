# Destapes el Toro - Landing Page

Landing page moderna y profesional para **Destapes el Toro**, empresa especializada en servicios de destapes industriales de cañerías y cloacas. Construida con Astro, React, TypeScript y TailwindCSS. Diseñada con una estética premium inspirada en el toro, con soporte completo de internacionalización (ES/EN).

## 🚀 Características

- ⚡ **Astro** - Framework moderno y rápido
- ⚛️ **React** - Islands para interactividad
- 🎨 **TailwindCSS** - Estilos utility-first
- 🌍 **i18n** - Soporte para Español e Inglés
- 📱 **Responsive** - Mobile-first design
- ♿ **Accesible** - ARIA labels y navegación por teclado
- 🔍 **SEO** - Meta tags, OpenGraph, Twitter Cards
- 🎭 **Animaciones** - Suaves y livianas con Intersection Observer
- 🎯 **TypeScript** - Tipado completo
- 🧹 **ESLint + Prettier** - Código limpio y consistente

## 📋 Requisitos Previos

- Node.js 24 LTS o superior
- npm (incluido con Node.js)

## 🛠️ Instalación

1. Clona el repositorio o navega al directorio del proyecto:
```bash
cd Landing-destapes
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita .env con tus valores reales
# Las variables con prefijo PUBLIC_ están disponibles en el cliente
```

**Variables de entorno disponibles:**
- `PUBLIC_SITE_NAME` - Nombre del sitio 
- `PUBLIC_SITE_DESCRIPTION` - Descripción para SEO
- `PUBLIC_SITE_URL` - URL del sitio 
- `PUBLIC_WHATSAPP_LINK` - Link de WhatsApp

**Nota**: El archivo `.env` está en `.gitignore` y no se subirá al repositorio.

## 🏃 Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

- Español: `http://localhost:4321/es/`
- Inglés: `http://localhost:4321/en/`

## 🏗️ Build

Genera la versión de producción:

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/`.

## 👀 Preview

Para previsualizar la build de producción localmente:

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
├── public/                 # Archivos estáticos
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── ui/            # Componentes UI base
│   │   ├── sections/      # Secciones de la landing
│   │   └── islands/        # Wrappers para React islands
│   ├── layouts/           # Layouts de página
│   ├── pages/
│   │   ├── es/            # Páginas en español
│   │   └── en/            # Páginas en inglés
│   ├── react/             # Componentes React
│   │   ├── ui/            # Componentes UI React
│   │   └── features/      # Features React
│   ├── i18n/              # Sistema de traducciones
│   ├── lib/               # Utilidades y constantes
│   └── styles/            # Estilos globales
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.ts     # Configuración de Tailwind
├── tsconfig.json          # Configuración de TypeScript
└── package.json
```

## 🎨 Personalización

### Cambiar el nombre de la marca

Edita `src/lib/constants.ts`:

```typescript
export const SITE_NAME = 'Destapes el Toro';
```

### Modificar colores

Edita `tailwind.config.ts` para ajustar la paleta de colores.

### Agregar traducciones

1. Agrega las keys en `src/i18n/types.ts`
2. Agrega las traducciones en `src/i18n/es.ts` y `src/i18n/en.ts`

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera la build de producción
- `npm run preview` - Previsualiza la build
- `npm run lint` - Ejecuta ESLint
- `npm run format` - Formatea el código con Prettier

## 🌐 Internacionalización

El proyecto soporta dos idiomas:
- **Español (ES)** - Idioma por defecto
- **Inglés (EN)**

Las URLs:
- `/` - Versión en español (ruta base, sin prefijo)
- `/en/` - Versión en inglés

El selector de idioma está disponible en el header.

## 🎯 SEO

El proyecto incluye:
- Meta tags optimizados
- OpenGraph tags
- Twitter Cards
- Sitemap XML
- robots.txt
- URLs canónicas
- Tags hreflang para SEO internacional

## 📦 Tecnologías

- [Astro](https://astro.build/) - Framework web
- [React](https://react.dev/) - Biblioteca UI
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Lucide React](https://lucide.dev/) - Iconos
- [ESLint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Formateador

## 📄 Licencia

Este proyecto es privado y propietario.

## 🤝 Contribuciones

Este es un proyecto privado. Para sugerencias o mejoras, contacta al equipo de desarrollo.

---

Desarrollado con ❤️ usando Astro
