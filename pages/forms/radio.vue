<template lang="pug">
div
  h1 Radio
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        label.radio
          input.radio-input(type='radio')
          span.radio-label Radio
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Inline
        label.radio.is-inline
          input.radio-input(type='radio' name="inline")
          span.radio-label Coding
        label.radio.is-inline
          input.radio-input(type='radio' name="inline")
          span.radio-label Music
        label.radio.is-inline
          input.radio-input(type='radio' name="inline")
          span.radio-label Gaming
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        label.radio.is-inline(v-for="size in sizes" :class="size")
          input.radio-input(type='radio' name="size")
          span.radio-label {{size}}


</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Radio'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
