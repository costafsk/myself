<template lang="pug">
Html
  Head
    Title Diego Costa
  Body
    .layout
      .container
        BaseNavbar
        main
          slot
      BaseFooter
</template>

<style lang="sass" scoped>
.layout
  width: 100%

  .container
    padding: 1rem 1rem 0rem 1rem

    margin-bottom: 2rem

    main
      padding-top: 5rem

      margin: 0rem auto

      min-height: 50vh
      max-width: 40rem
</style>
