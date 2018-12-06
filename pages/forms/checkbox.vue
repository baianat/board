<template lang="pug">
div
  h1 Checkbox
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        label.checkbox
          input.checkbox-input(type='checkbox')
          span.checkbox-label Checkbox
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Inline
        label.checkbox.is-inline
          input.checkbox-input(type='checkbox' name="inline")
          span.checkbox-label Coding
        label.checkbox.is-inline
          input.checkbox-input(type='checkbox' name="inline")
          span.checkbox-label Music
        label.checkbox.is-inline
          input.checkbox-input(type='checkbox' name="inline")
          span.checkbox-label Gaming
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        label.checkbox.is-inline(v-for="size in sizes" :class="size")
          input.checkbox-input(type='checkbox' name="size")
          span.checkbox-label {{size}}


</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Checkbox'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
