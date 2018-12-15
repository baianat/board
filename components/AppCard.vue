<template lang="pug">
.AppCard
  .AppCard-header(v-if="hasHeaderSlot")
    slot(name="header")
  .AppCard-body(v-if="hasBodySlot")
    slot
  .AppCard-footer(v-if="hasFooterSlot")
    slot(name="footer")
</template>

<style lang="stylus">
.AppCard
  background: $white
  border-radius: ($border-radius * 2)
  box-shadow: $boxShadow

  &.is-full
    height: 100%

  &-header
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    flex-wrap: wrap
    padding: 30px 30px

    >*
      margin: 0

  &-body
    padding: 0 30px 30px

    &:first-child
      padding: 30px

  &.is-fit-body
    .AppCard-body
      padding: 0

  &-noPadding
    margin-left: -30px
    margin-right: -30px

  &-footer
    padding: 0 30px 30px
    flex-wrap: wrap
    display: flex
    align-items: center

  .apexcharts-canvas
    color: $black

  for color in $modifiers-color
    $accent = lookup('$' + color)
    $text = isLight(color) ? $black : $white

    &.is-{color}
      background: $accent
      color: $text
      border-color: alpha($text, 0.1)

      .AppCard
        &-header
          border-bottom-color: alpha($text, 0.1)

        &-footer
          border-top-color: alpha($text, 0.1)

  &.is-light
    box-shadow: none

  &.is-clean
    box-shadow: $boxShadow
    box-shadow: none
    background: transparent !important
    color: $black

    .AppCard
      &-header, &-footer, &-body
        padding-left: 0
        padding-right: 0
</style>

<script>
export default {
  name: 'AppCard',
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    },
    hasBodySlot() {
      return !!this.$slots.default
    }
  }
}
</script>
