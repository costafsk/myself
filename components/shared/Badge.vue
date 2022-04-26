<template lang="pug">
.badge(:class="variant" :id="id")
  small {{ label }}
</template>

<script lang="ts" setup>
defineProps<{
  id: string;
  label: string;
  variant: 'primary' | 'success' | 'danger';
}>();
</script>

<style lang="sass" scoped>
.badge
  display: flex
  align-items: center
  justify-content: center

  border: 1px solid
  border-radius: 4px

  padding: 0.25rem 1.25rem

  width: fit-content

  small
    @apply nowrap

  &.primary
    background-color: #e2f2fe
    border-color: #55acee
    color: #55acee

  &.success
    border-color: rgb(16, 201, 16)
    background-color: rgb(209, 246, 209)
    color: green

  &.danger
    background-color: #fff4f4
    border-color: #ffb8b8
    color: #7e0000
</style>
