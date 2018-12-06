<template lang="pug">
div
  h1 Progress
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        .progress
          .progress-bar(style='width: 25%;')
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title With label
        .progress
          .progress-bar(style='width: 50%;')
            span 50%
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors
        .progress(v-for="(color , idx) in colors")
          .progress-bar(:class="color" :style='`width: ${idx+1}0%;`')
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Height
        .progress(v-for="(color , idx) in colors" :style="`height: ${(idx+1)*2}px;`")
          .progress-bar(:class="color" :style='`width: ${idx+1}0%;`')
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Icons

        .progress(v-for="(color , idx) in colors")
          .progress-bar(:style='`width: ${idx+1}0%;`' :class="color")
          .progress-icon(:class="color")
            AppIcon(:name="Object.keys(icons)[Math.floor((Math.random() * 100) + 1)]")





</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
import icons from '~/assets/data/icons.json'

export default {
  head() {
    return {
      title: 'Progress'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes,
    icons: icons
  })
}
</script>
