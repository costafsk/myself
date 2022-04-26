import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  css: ['@/assets/sass/main.sass'],
  colorMode: {
    classSuffix: ''
  }
});
