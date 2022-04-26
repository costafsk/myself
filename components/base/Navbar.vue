<template lang="pug">
header
  nav
    ul
      NuxtLink(to="/")
        img(src="~assets/images/me-caricature.svg" width="50" height="50" alt="Diego caricature")
      li(v-for="page of ['projects', 'books', 'posts']" :key="page")
        NuxtLink(:to="page") {{ page }}
</template>

<style lang="sass" scoped>
nav
  margin-right: auto
  margin-left: auto

  max-width: 70rem

  ul
    display: flex
    align-items: center

    grid-gap: 1.75rem
    gap: 1.75rem

    li
      list-style-type: none

      a
        color: rgba(75, 85, 99, 1)

        text-transform: capitalize
        text-decoration: none

        transition: 0.2ms all

        &:hover
          color: rgba(17, 24, 39, 1)
</style>
