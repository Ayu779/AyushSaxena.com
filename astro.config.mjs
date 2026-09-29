import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://ayushsaxena.com',
  output: 'static',
  adapter: vercel({ imageService: true }),
  server: { port: 4600 },
  vite: {
    css: { preprocessorOptions: {} }
  }
});
