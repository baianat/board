<template lang="pug">
div
  h1 Tooltip
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        button.button(tooltip="Hi, I'm a tooltip!") Click me
        button.button(tooltip="Hi, I'm a tooltip!" tooltip-rounded) Tooltip - rounded
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Directions
        button.button(tooltip="Hi, I'm a tooltip!", tooltip-position='top') Tooltip on top
        button.button(tooltip="Hi, I'm a tooltip!", tooltip-position='bottom') Tooltip on bottom
        button.button(tooltip="Hi, I'm a tooltip!", tooltip-position='left') Tooltip on left
        button.button(tooltip="Hi, I'm a tooltip!", tooltip-position='right') Tooltip on right






</template>

<script>
export default {
  head() {
    return {
      title: 'Tooltip'
    }
  }
}
</script>
