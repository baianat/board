<template lang="pug">
div
  h1 Alert
  .grid.is-desktop-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        .alert
          AppIcon(name="report" )
          span.alert-content This is an awesome alert!
          button.alert-dismiss
            AppIcon(name="close")

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        .alert( v-for="size in sizes" :class="size")
          AppIcon(name="report" )
          span.alert-content This is an awesome alert!
          button.alert-dismiss
            AppIcon(name="close")


    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors

        .alert( v-for="color in colors" :class="color")
          AppIcon(name="report" )
          span.alert-content This is an awesome alert!
          button.alert-dismiss
            AppIcon(name="close")
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Bright

        .alert.is-bright( v-for="color in colors" :class="color")
          AppIcon(name="report" )
          span.alert-content This is an awesome alert!
          button.alert-dismiss
            AppIcon(name="close")
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Outlined

        .alert.is-outlined( v-for="color in colors" :class="color")
          AppIcon(name="report" )
          span.alert-content This is an awesome alert!
          button.alert-dismiss
            AppIcon(name="close")
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Rounded

        .alert.is-rounded( v-for="color in colors" :class="color")
          AppIcon(name="report" )
          span.alert-content This is an awesome alert!
          button.alert-dismiss
            AppIcon(name="close")



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
