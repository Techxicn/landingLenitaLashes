// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ PLACEHOLDER: Reemplaza con la URL real de producción antes de publicar
  site: 'https://TU_DOMINIO.com',
  output: 'static',
  integrations: [sitemap()],
});
