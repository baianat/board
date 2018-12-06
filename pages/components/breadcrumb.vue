<template lang="pug">
div
  h1 Breadcrumb
  .grid.is-desktop-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic

        nav(aria-label='breadcrumb')
          ol.breadcrumb
            li.breadcrumb-item
              a(href='#') Home
            li.breadcrumb-item
              a(href='#') Categories
            li.breadcrumb-item.is-active(aria-current='page') Music

        nav(aria-label='breadcrumb')
          ol.breadcrumb()
            li.breadcrumb-item
              a(href='#') Home
            li.breadcrumb-item
              a(href='#') Categories
            li.breadcrumb-item
              a(href='#') Music
            li.breadcrumb-item.is-active(aria-current='page') Song
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Custom divider



        nav(aria-label='breadcrumb')
          ol.breadcrumb
            li.breadcrumb-item(data-divider=">")
              a(href='#') Home
            li.breadcrumb-item(data-divider=">")
              a(href='#') Categories
            li.breadcrumb-item.is-active(data-divider=">" aria-current='page') Music

        nav(aria-label='breadcrumb')
          ol.breadcrumb
            li.breadcrumb-item(data-divider=">>")
              a(href='#') Home
            li.breadcrumb-item(data-divider=">>")
              a(href='#') Categories
            li.breadcrumb-item(data-divider=">>")
              a(href='#') Music
            li.breadcrumb-item.is-active(data-divider=">>" aria-current='page') Song

        nav(aria-label='breadcrumb')
          ol.breadcrumb
            li.breadcrumb-item(data-divider="->")
              a(href='#') Home
            li.breadcrumb-item(data-divider="->")
              a(href='#') Categories
            li.breadcrumb-item(data-divider="->")
              a(href='#') Music
            li.breadcrumb-item.is-active(data-divider="->" aria-current='page') Song

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes

        nav(aria-label='breadcrumb' v-for="size in sizes")
          ol.breadcrumb(:class="size")
            li.breadcrumb-item
              a(href='#') Home
            li.breadcrumb-item
              a(href='#') Categories
            li.breadcrumb-item.is-active(aria-current='page') Music


</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Breadcrumb'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
