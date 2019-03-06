<template lang="pug">
.dropdown( @mouseleave="dropdown = false" )
  .dropdown-toggle(@click.prevent="dropdown = !dropdown")
    slot(name="trigger")
  transition(name="fade")
    .dropdown-menu(v-if="dropdown")
      slot

</template>

<style lang="stylus">
.dropdown
  position: relative
  display: inline-flex

  &-menu
    position: absolute
    top: 100%
    {$dir-start}: 0
    min-width: 220px
    max-width: 300px
    transform: none
    padding: 1em
    z-index: 3
    align-items: flex-start

  &-item
    width: 100%

  &.is-right
    .dropdown-menu
      {$dir-start}: auto
      {$dir-end}: 0

  &.is-center
    .dropdown-menu
      left: 50%
      transform: translateX(-50%)

  &.is-large
    .dropdown
      &-menu
        width: 300px

  generateSizes()
</style>

<script>
export default {
  name: 'AppDropdown',
  data: () => ({
    dropdown: false
  })
}
</script>
