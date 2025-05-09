import { defineConfig } from 'cypress';
//import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      //viteConfig,
    },
    supportFile: 'cypress/support/component.ts', 
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
});
