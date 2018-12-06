<template lang="pug">
div
  h1 Pagination
  .grid.is-tablet-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        .pagination
          button.pagination-prev
            AppIcon(name="keyboard-arrow-left")
          button.pagination-item 7
          button.pagination-item.is-active  8
          button.pagination-item 9
          button.pagination-next
            AppIcon(name="keyboard-arrow-right")

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        .pagination(v-for="size in sizes" :class="size")
          button.pagination-prev
            AppIcon(name="keyboard-arrow-left")
          button.pagination-item 7
          button.pagination-item.is-active  8
          button.pagination-item 9
          button.pagination-next
            AppIcon(name="keyboard-arrow-right")


</template>

<script>
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Pagination'
    }
  },
  data: () => ({
    sizes: sizes
  })
}
</script>
