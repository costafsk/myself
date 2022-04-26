<template lang="pug">
.page
  PageIndexPresentation
  SharedBadge(id="availability-badge" label="Not available for new projects" variant="danger")
  PageIndexRecentPosts
</template>

<style lang="sass" scoped>
.page
  display: flex
  flex-direction: column
  align-items: center

  #availability-badge
    margin: 2.5rem 0rem
</style>
