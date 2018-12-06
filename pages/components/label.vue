<template lang="pug">
div
  h1 Label
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        .label label
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        .label(v-for="size in sizes" :class="size") label
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors
        .label(v-for="color in colors" :class="color") label
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Rounded
        .label.is-rounded(v-for="color in colors" :class="color") label
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Icon
        .label(v-for="color in colors" :class="color") #[AppIcon(name="antenna")] #[span label]
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Image
        .label(v-for="color in colors" :class="color") #[img(src="https://picsum.photos/512/512?image=1057")] #[span label]





</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Label'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
