<template lang="pug">
footer
  img(src="~assets/images/me-caricature@2x.svg" width="100" height="100")
  .socials
    NuxtLink.social(v-for="{title, address} of socials" :to="address" target="_blank" rel="noopener noreferrer") {{ title }}
  .by
    span Desenvolvido com ❤️ utilizando
    img(src="~assets/icons/nuxtjs.svg")
</template>

<script lang="ts" setup>
interface ISocial {
  title: string;
  address: string;
}

const socials: ISocial[] = [
  { title: 'LinkedIn', address: 'https://www.linkedin.com/in/costafsk' },
  { title: 'GitHub', address: 'https://github.com/costafsk' }
];
</script>

<style lang="sass" scoped>
footer
  display: flex
  flex-direction: column
  align-items: center

  padding-top: 4rem
  padding-bottom: 1rem

  width: 100%

  background-color: rgba(246, 246, 246, 1)

  .socials
    display: flex

    margin-top: 1rem
    margin-bottom: 2rem

    grid-gap: 0.75rem
    gap: 0.75rem

    .social
      color: black

  .by
    display: flex
    align-items: center

    margin-top: 1rem

    span
      margin-right: 0.25rem
</style>
