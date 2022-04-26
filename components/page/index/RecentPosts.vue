<template lang="pug">
article
  h3 Recent posts ✏️
  section
    SharedBadge(id="posts-status-badge" label="Coming soon" variant="primary")
</template>

<style lang="sass" scoped>
article
  display: flex
  align-items: flex-start
  justify-content: flex-start
  flex-direction: column

  width: 100%

  margin-bottom: 2rem

  section
    display: flex
    justify-content: center

    margin-top: 2rem

    width: 100%
</style>
