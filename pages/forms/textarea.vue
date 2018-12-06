<template lang="pug">
div
  h1 Tooltip
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        textarea.textarea(placeholder="Textarea")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Disabled
        textarea.textarea.is-disabled(placeholder="Textarea")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors
        textarea.textarea(placeholder="Textarea" v-for="color in colors" :class="color")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        textarea.textarea(placeholder="Textarea" v-for="size in sizes" :class="size")





</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Tooltip'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
