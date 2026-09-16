import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jjman9797.github.io',
  base: '/dtalior',
  trailingSlash: 'always',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
