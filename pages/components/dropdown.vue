<template lang="pug">
div
  h1 Dropdown
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Basic Examples
        AppDropdown
          button(slot="trigger" class="button is-primary") #[sapn Dropdown] #[AppIcon(name="expand-more")]
          a.dropdown-item(href='#0') Dropdown item
          a.dropdown-item(href='#0') Active dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
        AppDropdown
          button(slot="trigger" class="button is-secondary is-rounded") #[sapn Dropdown] #[AppIcon(name="expand-more")]
          a.dropdown-item(href='#0') Dropdown item
          a.dropdown-item(href='#0') Active dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
        AppDropdown
          button(slot="trigger" class="button is-danger is-gradient")  #[AppIcon(name="more-vert")]
          a.dropdown-item(href='#0') Dropdown item
          a.dropdown-item(href='#0') Active dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
        AppDropdown
          button(slot="trigger" class="button is-clean")  #[AppIcon(name="more-horiz")]
          a.dropdown-item(href='#0') Dropdown item
          a.dropdown-item(href='#0') Active dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
        AppDropdown
          button(slot="trigger" class="button is-info ")  #[AppIcon(name="more-vert")]
          a.dropdown-item(href='#0') Dropdown item
          a.dropdown-item(href='#0') Active dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
        AppDropdown
          button(slot="trigger" class="button is-success is-rounded")  #[AppIcon(name="more-horiz")]
          a.dropdown-item(href='#0') Dropdown item
          a.dropdown-item(href='#0') Active dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Position Examples

        p Dropdowns can be aligned to #[code left] , #[code center] and #[code right] :


        AppDropdown.is-left
          button(slot="trigger" class="button is-primary") #[sapn Dropdown - left] #[AppIcon(name="expand-more")]
          a.dropdown-item(href='#0') Dropdown item
          a.dropdown-item(href='#0') Active dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
        AppDropdown.is-center
          button(slot="trigger" class="button is-secondary") #[sapn Dropdown - center] #[AppIcon(name="expand-more")]
          a.dropdown-item(href='#0') Dropdown item
          a.dropdown-item(href='#0') Active dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
        AppDropdown.is-right
          button(slot="trigger" class="button is-success") #[sapn Dropdown - right] #[AppIcon(name="expand-more")]
          a.dropdown-item(href='#0') Dropdown item
          a.dropdown-item(href='#0') Active dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item
          a.dropdown-item(href='#0') Other dropdown item

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Lists Examples
        AppDropdown.is-large
          button(slot="trigger" class="button is-primary") #[sapn Dropdown] #[AppIcon(name="expand-more")]
          AppList(:items="notificationIcons")
        AppDropdown.is-large
          button(slot="trigger" class="button is-secondary") #[sapn Dropdown] #[AppIcon(name="expand-more")]
          AppList.is-timeline(:items="notificationIconsState")
        AppDropdown.is-large
          button(slot="trigger" class="button is-success") #[sapn Dropdown] #[AppIcon(name="expand-more")]
          AppList(:items="notificationThumbs")
        AppDropdown.is-large
          button(slot="trigger" class="button is-warning") #[sapn Dropdown] #[AppIcon(name="expand-more")]
          AppList.is-timeline(:items="notificationThumbsState")

</template>

<script>
import {
  notificationIcons,
  notificationIconsState,
  notificationThumbs,
  notificationThumbsState
} from '~/assets/data/notification'
export default {
  head() {
    return {
      title: 'Typography'
    }
  },
  data: () => ({
    notificationIcons: notificationIcons,
    notificationIconsState: notificationIconsState,
    notificationThumbs: notificationThumbs,
    notificationThumbsState: notificationThumbsState
  })
}
</script>
