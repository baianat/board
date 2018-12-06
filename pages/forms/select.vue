<template lang="pug">
div
  h1 Select
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        select.select
          option Select dropdown
          option(v-for="o in 5") Option {{o}}

        h4 Multiple
        select.select(multiple="multiple")
          option Select dropdown
          option(v-for="o in 5") Option {{o}}

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        select.select(v-for="size in sizes" :class="`${size} `")
          option Select dropdown
          option(v-for="o in 5") Option {{o}}

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors
        select.select(v-for="color in colors" :class="color")
          option Select dropdown
          option(v-for="o in 5") Option {{o}}

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Rounded
        select.select(v-for="color in colors" :class="`${color} is-rounded`")
          option Select dropdown
          option(v-for="o in 5") Option {{o}}



</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Select'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
