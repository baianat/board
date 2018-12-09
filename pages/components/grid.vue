<template lang="pug">
div
  h1 Grid
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        p Grid layout is consest of two main elements:
        p #[code .grid] : Container that wrap columns
        p #[code .columns]: Elements that hold your conent
        p Each column will have an equal width, no matter the number of columns.
        .grid.has-space
          .column
            span.button.is-dark.u-mb-0.is-block First column
          .column
            span.button.is-dark.u-mb-0.is-block Second column
          .column
            span.button.is-dark.u-mb-0.is-block Third column
          .column
            span.button.is-dark.u-mb-0.is-block Fourth column

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        p If you want a specific for column you can choses between #[code 12] sizes, there are size classes for each division:
        .grid.has-space
          .column.is-12
            span.button.is-dark.u-mb-0.is-block is-12
        .grid.has-space
          .column.is-10
            span.button.is-dark.u-mb-0.is-block is-10
          .column
            span.button.is-dark.u-mb-0.is-block auto
          .column
            span.button.is-dark.u-mb-0.is-block auto
        .grid.has-space
          .column.is-8
            span.button.is-dark.u-mb-0.is-block is-8
          .column
            span.button.is-dark.u-mb-0.is-block auto
          .column
            span.button.is-dark.u-mb-0.is-block auto
        .grid.has-space
          .column.is-4
            span.button.is-dark.u-mb-0.is-block is-4
          .column
            span.button.is-dark.u-mb-0.is-block auto
          .column
            span.button.is-dark.u-mb-0.is-block auto
        p If you want all column to be the same width you can add modifier on gird element, to apply to all nested columns.`
        .grid.is-3.has-space
          .column
            span.button.is-dark.u-mb-0.is-block auto
          .column
            span.button.is-dark.u-mb-0.is-block auto
          .column
            span.button.is-dark.u-mb-0.is-block auto



    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Grid Display
        p You can control columns arrangend in the .grid using display modifiers
        p #[code .is-shrink]: Columns take only the size of their content

        .grid.is-shrink.has-space
          .column
            span.button.is-dark.u-mb-0 Small content
          .column
            span.button.is-dark.u-mb-0 Very longe content here
          .column
            span.button.is-dark.u-mb-0 Curabitur mattis maximus feugiat.

        p.u-mt-large #[code .is-fit]: Removes gutters between columns
        .grid.is-fit.has-space
          .column.is-7
            span.button.is-dark.is-block.u-mb-0 column
          .column.is-5
            span.button.is-dark.is-block.u-mb-0 column


        p.u-mt-large #[code .is-vertical]: Arrange columns in a vertical order
        .grid.is-vertical.has-space
          .column.is-7
            span.button.is-dark.is-block.u-mb-0  is-7
          .column.is-5
            span.button.is-dark.is-block.u-mb-0  is-5
          .column.is-3
            span.button.is-dark.is-block.u-mb-0  is-3


    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Vertical Align

        p #[code .is-top ] : Align columns to the top of the grid container
        .example-v-grid
          .grid.is-top.has-space
            .column
              span.button.is-dark.is-block.u-mb-0 column
            .column
              span.button.is-dark.is-block.u-mb-0 column
            .column
              span.button.is-dark.is-block.u-mb-0 column
        p.u-mt-large #[code .is-middle ] : Align columns to vertically middle of the grid container
        .example-v-grid
          .grid.is-middle.has-space
            .column
              span.button.is-dark.is-block.u-mb-0 column
            .column
              span.button.is-dark.is-block.u-mb-0 column
            .column
              span.button.is-dark.is-block.u-mb-0 column
        p.u-mt-large #[code .is-bottom ] : Align columns to the middle of the grid container
        .example-v-grid
          .grid.is-bottom.has-space
            .column
              span.button.is-dark.is-block.u-mb-0 column
            .column
              span.button.is-dark.is-block.u-mb-0 column
            .column
              span.button.is-dark.is-block.u-mb-0 column

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Offest
        .grid.has-space
          .column.is-4.is-offset-4
            span.button.is-dark.u-mb-0.is-block is-offset-4
        .grid.has-space
          .column.is-4.is-offset-3
            span.button.is-dark.u-mb-0.is-block is-offset-3
        .grid.has-space
          .column.is-4.is-offset-2
            span.button.is-dark.u-mb-0.is-block is-offset-2

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Responsive
        table.table
          thead
            tr
              th Modifier
              th Description
          tbody
            tr
              td
                code .is-mobile-x
              td control column width in any screen size
            tr
              td
                code .is-tablet-x
              td
                | control column width from screen size
                strong 768px
                |  and up
            tr
              td
                code .is-desktop-x
              td
                | control column width from screen size
                strong 991px
                |  and up
            tr
              td
                code .is-widescreen-x
              td
                | control column width from screen size
                strong 1360px
                |  and up
            tr
              td
                code .is-ultrawide-x
              td
                | control column width from screen size
                strong 1920px
                |  and up

</template>
<style lang="stylus">
.example-v-grid
  padding: ($gutter * 2)
  background: $light

  .grid
    height: 100px
</style>

<script>
export default {
  head() {
    return {
      title: 'Grid'
    }
  }
}
</script>
