<template lang="pug">
div
  h1 Switcher
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        label.switcher
          input.switcher-input(type='checkbox')
          span.switcher-body
            span.switcher-handle
        label.switcher
          input.switcher-input(type='checkbox' checked)
          span.switcher-body
            span.switcher-handle

        label.switcher
          input.switcher-input(type='checkbox')
          span.switcher-body
            span.switcher-handle
            span.switcher-true On
            span.switcher-false Off

        label.switcher
          input.switcher-input(type='checkbox' checked)
          span.switcher-body
            span.switcher-handle
            span.switcher-true On
            span.switcher-false Off

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        label.switcher(v-for="size in sizes" :class="size")
          input.switcher-input(type='checkbox')
          span.switcher-body
            span.switcher-handle
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Radio
        label.switcher
          input.switcher-input(type='radio', name='switcherRadio')
          span.switcher-body
            span.switcher-handle
            span.switcher-true on
            span.switcher-false off
        label.switcher
          input.switcher-input(type='radio', name='switcherRadio' checked)
          span.switcher-body
            span.switcher-handle
            span.switcher-true on
            span.switcher-false off
        label.switcher
          input.switcher-input(type='radio', name='switcherRadio')
          span.switcher-body
            span.switcher-handle
            span.switcher-true on
            span.switcher-false off


</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Switcher'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
