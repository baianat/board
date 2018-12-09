<template lang="pug">
div
  .AppChat
    .AppChat-sidebar
      .AppChat-sidebar-header
        h4 Chat room
        button.button.is-rounded.is-outlined.is-small: AppIcon(name="add-circle" classes="is-massive")
      .AppChat-users
        .AppChat-users-item(v-for="user in users")
          .AppChat-users-item-thumb
            figure.avatar.is-inline.is-tiny
              img(:src='user.avatar', alt='avatar')
              span.avatar-icon.is-success
          .AppChat-users-item-name.u-font-bold {{user.name}}

    .AppChat-body
      .AppChat-current
        h2.AppChat-current-name Marcus Erickson
        .AppChat-current-status.is-online
      .AppChat-messages(ref="AppChatMessages")
        .AppChat-messages-item(title="20-11-2019")
          .AppChat-messages-item-thumb: img(src="https://randomuser.me/api/portraits/women/67.jpg")
          .AppChat-messages-item-content
            span Hi ,
            span What are doing?
            span Are you here
        .AppChat-messages-item.is-mine(title="20-11-2019")
          .AppChat-messages-item-thumb: img(src="https://randomuser.me/api/portraits/men/81.jpg")
          .AppChat-messages-item-content
            span Yes
            span I'm here
            span Aliquam felis massa, tristique at semper vel, ultrices eu nulla.
        .AppChat-messages-item(title="20-11-2019")
          .AppChat-messages-item-thumb: img(src="https://randomuser.me/api/portraits/women/67.jpg")
          .AppChat-messages-item-content
            span Ok Ok
            span In eget rhoncus ante. Nullam ipsum arcu, suscipit ut dolor vitae, ultrices pulvinar ligula. Phasellus semper auctor sem at tristique. Donec ac tortor dapibus, commodo mauris in, suscipit mi.
            span Fusce a nisl fermentum, rhoncus arcu quis, tempus ex.

      .AppChat-footer
        div.AppChat-footer-input(autofocus ref="msg" role="button" contenteditable @input="updateMessage"   @keydown="handleKey"  placeholder="Type a message..." )
        .AppChat-footer-actions
          .AppChat-footer-upload(@click="$refs.upload.click()")
            input(type="file" ref="upload")
            button.button.is-clean.AppChat-footer-upload-trigger #[AppIcon(name="attach-file")]
          button.button.is-clean(): AppIcon(name="send")



</template>

<style lang="stylus">
.AppChat
  display: flex

  &-users
    max-height: 65vh
    overflow-x: hidden
    overflow-y: auto
    -webkit-overflow-scrolling: touch

    &::-webkit-scrollbar
      width: 0.5em

    &::-webkit-scrollbar-track
      -webkit-box-shadow: none

    &::-webkit-scrollbar-thumb
      background-color: $light
      outline: 0 solid $slategray

    &-item
      display: flex
      margin-bottom: 20px
      align-items: center
      font-size: 12px
      color: $slategray
      cursor: pointer

      &:hover
        color: $primary

      &-name
        transition: 0.2s

      &-thumb
        margin-right: 10px
        border-radius: 20em
        overflow: hidden

        img
          width: 100%
          height: 100%

  &-sidebar
    width: 240px
    flex: 0 0 240px
    margin-right: 80px
    position: relative

    &-header
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 32px

      >*
        margin-bottom: 10px

  &-current
    display: flex
    align-items: center
    margin-bottom: 40px

    &-name
      margin-bottom: 0

    &-status
      content: ''
      width: 8px
      height: 8px
      border-radius: 10px
      background: $gray
      margin: 0 20px

      &.is-online
        background: $success

  &-body
    flex: auto
    max-width: 800px
    position: relative
    display: flex
    flex-direction: column

  &-messages
    flex: 1 1 0%
    height: 50vh
    overflow-y: auto

    &::-webkit-scrollbar
      width: 0.5em

    &::-webkit-scrollbar-track
      -webkit-box-shadow: none

    &::-webkit-scrollbar-thumb
      background-color: $light
      outline: 0 solid $slategray

    &-item
      display: flex
      margin-bottom: 10px

      &-thumb
        width: 45px
        height: 45px
        margin-right: 10px
        flex: 0 0 45px
        border-radius: 20em
        overflow: hidden

        img
          width: 100%
          height: 100%

      &-content
        display: flex
        flex-direction: column
        max-width: 80%
        align-items: flex-start
        font-size: 14px

        >span
          padding: 6px 15px
          background: $light
          margin-bottom: 10px
          display: block
          border-radius: 8px

          img
            width: 100%
            height: auto

      &.is-mine
        justify-content: flex-end

        .AppChat-messages-item
          &-thumb
            order: 2
            margin-right: 0
            margin-left: 10px

          &-content
            align-items: flex-end

            >span
              background: $primary
              color: $white

  &-footer
    position: relative
    background: $light
    border-radius: $border-radius

    &-input
      margin: 0
      width: 100%
      resize: none
      border: none
      outline: none
      border-radius: 0
      background: none
      box-sizing: border-box
      padding: 15px
      font-size: 14px
      padding-right: 80px
      line-height: 1.33
      white-space: pre-wrap
      word-wrap: break-word
      -webkit-font-smoothing: antialiased
      max-height: 131px
      overflow: scroll
      bottom: 0
      overflow-x: hidden
      overflow-y: auto

      &:empty:before
        content: attr(placeholder)
        display: block
        -webkit-filter: contrast(15%)
        filter: contrast(15%)
        outline: none

    &-actions
      position: absolute
      right: 10px
      top: 50%
      transform: translateY(-50%)
      display: flex

      .button
        margin-bottom: 0

    &-upload
      position: relative
      overflow: hidden
      cursor: pointer
      overflow: hidden

      >input
        opacity: 0
        position: absolute
        top: 0
        bottom: 0
        left: -99999px
        right: 0
        z-index: 2
        cursor: pointer
</style>

<script>
import { getUser } from '~/assets/data/user'
export default {
  head() {
    return {
      title: 'Chat'
    }
  },
  data: () => ({
    users: getUser(8),
    message: null
  }),
  mounted() {
    this.$refs.AppChatMessages.scrollTop = this.$refs.AppChatMessages.scrollHeight
  },
  methods: {
    handleKey(event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        event.preventDefault()
      }
    },
    updateMessage: function(event) {
      this.message = event.target.innerText
    }
  }
}
</script>
