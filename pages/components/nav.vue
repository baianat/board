<template lang="pug">
div
  h1 Nav
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        nav.nav
          ul.nav-menu
            li.nav-label Developers
            li.nav-item.is-active
              button.nav-toggle
                | Getting Started
                .nav-icon
              ul.nav-submenu
                li.nav-item
                  a.nav-link(href='') Installation
                li.nav-item
                  a.nav-link(href='') Methodology
            li.nav-item
              button.nav-toggle
                | Layout
                .nav-icon
              ul.nav-submenu
                li.nav-item
                  a.nav-link(href='') Installation
                li.nav-item
                  a.nav-link(href='') Methodology
            li.nav-label Developers
            li.nav-item
              a.nav-link(href='')
                | Home
                span.label.is-tiny soon

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Icons
        nav.nav.has-icons
          ul.nav-menu
            li.nav-label Developers
            li.nav-item.is-active
              button.nav-toggle
                AppIcon(name="assignment-late")
                |         Getting Started
                .nav-icon
              ul.nav-submenu
                li.nav-item
                  a.nav-link(href='') Installation
                li.nav-item
                  a.nav-link(href='') Methodology
            li.nav-item
              button.nav-toggle
                AppIcon(name="assignment-turned")
                |         Layout
                .nav-icon
              ul.nav-submenu
                li.nav-item
                  a.nav-link(href='') Installation
                li.nav-item
                  a.nav-link(href='') Methodology
            li.nav-label Developers
            li.nav-item
              a.nav-link(href='')
                AppIcon(name="assignment")
                |         Home
                span.label.is-tiny soon




</template>

<script>
export default {
  head() {
    return {
      title: 'Nav'
    }
  }
}
</script>
