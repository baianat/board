<template lang="pug">
div
  h1 Button
  .grid.is-tablet-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Colors
        .buttons.is-primary
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-secondary
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-danger
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-warning
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-info
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-black
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-dark
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-light
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-white
          button.button one
          button.button two
          button.button three
        br

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Outlined
        .buttons.is-outlined.is-primary
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-outlined.is-secondary
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-outlined.is-danger
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-outlined.is-warning
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-outlined.is-info
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-outlined.is-black
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-outlined.is-dark
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-outlined.is-light
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-outlined.is-white
          button.button one
          button.button two
          button.button three
        br

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Rounded
        .buttons.is-rounded.is-primary
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-rounded.is-secondary
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-rounded.is-danger
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-rounded.is-warning
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-rounded.is-info
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-rounded.is-black
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-rounded.is-dark
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-rounded.is-light
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-rounded.is-white
          button.button one
          button.button two
          button.button three
        br
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Block
        .buttons.is-block.is-primary
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-block.is-secondary
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-block.is-danger
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-block.is-warning
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-block.is-info
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-block.is-black
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-block.is-dark
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-block.is-light
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-block.is-white
          button.button one
          button.button two
          button.button three
        br
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Sizes
        .buttons.is-tiny
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-small
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-normal
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-large
          button.button one
          button.button two
          button.button three
        br
        .buttons.is-massive
          button.button one
          button.button two
          button.button three
        br



    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Icons
        br
        .buttons.is-outlined.is-black
          button.button
            AppIcon(name="align-left")
          button.button
            AppIcon(name="align-center")
          button.button
            AppIcon(name="align-right")
        br
        .buttons.is-primary.is-rounded
          button.button
            AppIcon(name="align-left")
          button.button
            AppIcon(name="align-center")
          button.button
            AppIcon(name="align-right")
        br
        .buttons.is-outlined.is-black
          button.button
            AppIcon(name="align-left")
            span align left
          button.button
            AppIcon(name="align-center")
            span align center
          button.button
            AppIcon(name="align-right")
            span align right
        br
        .buttons.is-outlined.is-secondary.is-rounded
          button.button
            AppIcon(name="align-left")
            span align left
          button.button
            AppIcon(name="align-center")
            span align center
          button.button
            AppIcon(name="align-right")
            span align right


</template>



<script>
export default {
  head() {
    return {
      title: 'Buttons'
    }
  }
}
</script>
