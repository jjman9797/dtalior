import { defineConfig } from 'astro/config';

const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: githubPages ? 'https://jjman9797.github.io' : undefined,
  base: githubPages ? '/dtalior' : '/',
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
