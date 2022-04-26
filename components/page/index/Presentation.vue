<template lang="pug">
section
  img(src="~assets/images/me.svg" height="150" width="150" alt="photo of Diego")
  .about-me
    h1 Hi, I'm Diego Costa.
    h2 I'm a software developer in Brazil 🇧🇷, currently collaborating as a front-end developer at <NuxtLink to="https://landing.solfacil.com.br/" target="_blank" rel="noopener noreferrer">Solfácil</NuxtLink>.
</template>

<style lang="sass" scoped>
section
  display: flex
  flex-direction: column
  align-items: center

  @media(min-width: 768px)
    flex-direction: row

  .about-me
    margin-left: 0rem

    @media(min-width: 768px)
      margin-left: 3rem

    h1, h2
      text-align: center

      @media(min-width: 768px)
        text-align: left

    h2
      font-weight: 400

      a
        color: black
</style>
