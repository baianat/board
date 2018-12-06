<template lang="pug">
div
  h1 Lists
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        AppList(:items="notificationIcons")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Icons
        AppList(:items="notificationThumbs")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Timeline Basic
        AppList.is-timeline(:items="notificationIcons")
        h6.u-mt-normal State Colors
        AppList.is-timeline(:items="notificationIconsState")

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Timeline Icons
        AppList.is-timeline(:items="notificationThumbs")
        h6.u-mt-normal State Colors
        AppList.is-timeline(:items="notificationThumbsState")






</template>


<script>
import { getUser } from '~/assets/data/user'
import {
  notificationIcons,
  notificationIconsState,
  notificationThumbs,
  notificationThumbsState
} from '~/assets/data/notification'

export default {
  head() {
    return {
      title: 'Lists'
    }
  },
  data: () => ({
    users: getUser(8),
    notificationIcons: notificationIcons,
    notificationIconsState: notificationIconsState,
    notificationThumbs: notificationThumbs,
    notificationThumbsState: notificationThumbsState
  })
}
</script>
