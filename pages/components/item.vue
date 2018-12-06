<template lang="pug">
div
  h1 Item
  .grid.has-space
    .column.is-ultrawide-2.is-widescreen-3.is-desktop-4.is-tablet-6(v-for="i in 6")
      AppItem(title="Design Works" :img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`"  excerpt="It is a long established fact that a reader will be distracted by the readable content.")
  .grid.has-space
    .column.is-ultrawide-2.is-widescreen-3.is-desktop-4.is-tablet-6(v-for="i in 6")
      AppItem(title="Design Works" :img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`" )
  .grid.has-space
    .column.is-ultrawide-2.is-widescreen-3.is-desktop-4.is-tablet-6(v-for="i in 6")
      AppItem(title="Design Works"  excerpt="It is a long established fact that a reader will be distracted by the readable content.")
  .grid.has-space
    .column.is-ultrawide-2.is-widescreen-3.is-desktop-4.is-tablet-6(v-for="i in 6")
      AppItem.is-clean(title="Design Works" :img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`"  excerpt="It is a long established fact that a reader will be distracted by the readable content.")
  .grid.has-space
    .column.is-ultrawide-3.is-widescreen-6(v-for="i in 4")
      AppItem.is-wide.is-clean(title="Design Works" :img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`"  excerpt="It is a long established fact that a reader will be distracted by the readable content.")
  .grid.has-space
    .column.is-ultrawide-3.is-widescreen-6(v-for="i in 4")
      AppItem.is-wide.is-small.is-clean(:img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`"  excerpt="It is a long established fact that a reader will be distracted by the readable content.")
  .grid.has-space
    .column.is-ultrawide-3.is-widescreen-6(v-for="i in 4")
      AppItem.is-wide.is-small(:img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`"  excerpt="It is a long established fact that a reader will be distracted by the readable content.")
  .grid.has-space
    .column.is-ultrawide-3.is-widescreen-6(v-for="i in 4")
      AppItem.is-wide(title="Design Works" :img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`"  excerpt="It is a long established fact that a reader will be distracted by the readable content.")
  .grid.has-space
    .column.is-ultrawide-2.is-widescreen-3.is-desktop-4.is-tablet-6(v-for="i in 6")
      AppItem(title="Design Works" :img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`"  excerpt="It is a long established fact that a reader will be distracted by the readable content.")
        button.button.is-primary Download

  .u-mt-small
    .grid.has-space
      .column.is-ultrawide-2.is-widescreen-3.is-desktop-4.is-tablet-6(v-for="i in 6")
        AppItem(title="Design Works" :img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`" )
          span.u-font-small.u-color-slategray.u-mt-tiny Gourmet  |  Last Update: 29 Dec 2016
          .u-divider
          div
            .grid.is-tiny.is-6
              .column
                .u-font-small.u-color-slategray 9,680 USD
                .u-font-small.u-color-slategray.u-mt-tiny Budget / Salary
              .column
                .u-font-small.u-color-slategray Late Jan 2017
                .u-font-small.u-color-slategray.u-mt-tiny Deadline
  .u-mt-small
    .grid.has-space.is-small
      .column.is-ultrawide-2.is-widescreen-3.is-desktop-4.is-tablet-6(v-for="i in 6")
        AppItem.is-clean(title="Design Works" :img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`" )
          span.u-font-small.u-color-slategray.u-mt-tiny Gourmet  |  Last Update: 29 Dec 2016
          .u-divider
          div
            .grid.is-tiny.is-6
              .column
                .u-font-small.u-color-slategray 9,680 USD
                .u-font-small.u-color-slategray.u-mt-tiny Budget / Salary
              .column
                .u-font-small.u-color-slategray Late Jan 2017
                .u-font-small.u-color-slategray.u-mt-tiny Deadline

</template>

<script>
import colors from '~/assets/data/colors'
export default {
  head() {
    return {
      title: 'Item'
    }
  },
  data: () => ({
    colors: colors
  })
}
</script>
