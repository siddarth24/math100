import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://siddarth24.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
});
