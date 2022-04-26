<template lang="pug">
.under-construction
  h1 {{ title }}
  section
    img(src="~assets/images/development-light.svg" width="322" height="261")
    NuxtLink(id="reference-to-artist" to="https://blush.design/collections/tech-life/scenes-virtual-reality/8WiQB58Z4" target="_blank" rel="noopener noreferrer") Virtual Reality - by Karthik Srinivas
    SharedBadge(id="page-status-badge" label="Under construction" variant="primary")
</template>

<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<style lang="sass" scoped>
.under-construction
  display: flex
  flex-direction: column

  width: 100%

  section
    display: flex
    flex-direction: column
    align-items: center

    #reference-to-artist
      color: black
      margin: 2rem 0rem
</style>
