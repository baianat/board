<template lang="pug">
.TheHeader
  .TheHeader-logo
    nuxt-link(to="/"): AppIcon(name="logo")


  .TheHeader-actions
    AppDropdown.is-large.is-right
      AppIcon(name="notifications" slot="trigger" type="outlined")
      AppList(:items="notificationIcons")
      button.button.is-tiny.is-dark.is-wide.u-mt-small View all
    AppDropdown.is-right
      figure.avatar.is-tiny(slot="trigger" )
        img(src='/users/1.jpg', alt='avatar')
      a.dropdown-item(href='#0') Profile
      a.dropdown-item(href='#0') Messages
      a.dropdown-item(href='#0') Logout
    .TheHeader-icon.is-sidebar(@click.prevent="$emit('sidebar')")
      AppIcon(name="menu")

</template>
<style lang="stylus">
.TheHeader
  background: $primary
  color: $white
  height: 50px
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 40px
  position: fixed
  z-index: 1050
  top: 0
  right: 0
  left: 0

  +mq($until: 'desktop')
    padding: 0 30px

  +mq($until: 'mobile')
    padding: 0 20px

  &-logo
    max-height: 40px

    >a
      display: block

    img
      max-height: 40px

    .icon-logo
      height: 26px
      width: 90px
      fill: $white

  &-icon
    font-size: 24px
    cursor: pointer

    .icon
      fill: $white
      display: block

    &.is-sidebar
      +mq($from: 'desktop')
        display: none

  &-actions
    display: flex
    align-items: center
    margin: 0 -10px

    .dropdown
      margin: 0 !important

    .dropdown-toggle
      height: 60px
      display: flex
      align-items: center
      cursor: pointer

      >.icon
        fill: $white
        font-size: 24px

    >div
      padding: 0 10px
      margin: 0
</style>

<script>
import {
  notificationIcons,
  notificationIconsState,
  notificationThumbs,
  notificationThumbsState
} from '~/assets/data/notification'
export default {
  name: 'TheHeader',
  data: () => ({
    notificationIcons: notificationIcons,
    notificationIconsState: notificationIconsState,
    notificationThumbs: notificationThumbs,
    notificationThumbsState: notificationThumbsState
  })
}
</script>
