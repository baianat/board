<template lang="pug">
div
  h1 Button
  .grid.is-tablet-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Colors

        button.button(v-for="color in colors" :class="color") {{color}}

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Outlined
        button.button.is-outlined(v-for="color in colors" :class="color") {{color}}

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Gradient

        button.button.is-gradient.is-primary .is-primary
        button.button.is-gradient.is-secondary .is-secondary
        button.button.is-gradient.is-success .is-success
        button.button.is-gradient.is-danger .is-danger
        button.button.is-gradient.is-warning .is-warning
        button.button.is-gradient.is-info .is-info
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Bright

        button.button.is-bright.is-primary .is-primary
        button.button.is-bright.is-secondary .is-secondary
        button.button.is-bright.is-success .is-success
        button.button.is-bright.is-danger .is-danger
        button.button.is-bright.is-warning .is-warning
        button.button.is-bright.is-info .is-info
        button.button.is-bright.is-black .is-black
        button.button.is-bright.is-dark .is-dark
        button.button.is-bright.is-light .is-light
        button.button.is-bright.is-white .is-white

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Rounded

        button.button.is-rounded.is-primary .is-rounded
        button.button.is-rounded.is-outlined.is-secondary .is-rounded
        button.button.is-rounded.is-success .is-rounded
        button.button.is-rounded.is-outlined.is-danger .is-rounded
        button.button.is-rounded.is-warning .is-rounded
        button.button.is-rounded.is-outlined.is-info .is-rounded
        button.button.is-rounded.is-black .is-rounded
        button.button.is-rounded.is-outlined.is-dark .is-rounded
        button.button.is-rounded.is-light .is-rounded
        button.button.is-rounded.is-white .is-rounded
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Clean

        button.button.is-clean.is-primary .is-clean
        button.button.is-clean.is-secondary .is-clean
        button.button.is-clean.is-success .is-clean
        button.button.is-clean.is-danger .is-clean
        button.button.is-clean.is-warning .is-clean
        button.button.is-clean.is-info .is-clean
        button.button.is-clean.is-black .is-clean
        button.button.is-clean.is-dark .is-clean
        button.button.is-clean.is-light .is-clean
        button.button.is-clean.is-white .is-clean
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Sizes

        button.button.is-tiny .is-tiny
        button.button.is-small .is-small
        button.button.is-normal .is-normal
        button.button.is-large .is-large
        button.button.is-massive .is-massive


    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Icons

        button.button.is-primary #[AppIcon(name="favorite")] #[span .is-primary]
        button.button.is-secondary #[AppIcon(name="favorite")]
        button.button.is-success.is-rounded #[AppIcon(name="favorite")]
        button.button.is-danger.is-outlined #[AppIcon(name="favorite")] #[span .is-danger]
        button.button.is-warning.is-gradient #[AppIcon(name="favorite")] #[span .is-warning]
        button.button.is-info.is-rounded #[AppIcon(name="favorite")] #[span .is-info]
        button.button.is-black #[AppIcon(name="favorite")] #[span .is-black]
        button.button.is-dark #[AppIcon(name="favorite")] #[span .is-dark]
        button.button.is-light #[AppIcon(name="favorite")] #[span .is-light]
        button.button.is-white #[AppIcon(name="favorite")] #[span .is-white]

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Block

        button.button.is-block.is-primary .is-block
        button.button.is-block.is-outlined.is-secondary .is-block
        button.button.is-block.is-gradient.is-danger .is-block


    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Loading
        button.button.is-loading(v-for="color in colors" :class="color") .is-loading

</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Button'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
