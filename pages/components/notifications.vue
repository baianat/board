<template lang="pug">
div
  h1 Notifications
  p For docs visit #[a(href="https://github.com/euvl/vue-notification/" target="_blank") #[code vue-notification]]

  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        button.button(@click="notify('','Hello user! This is a notification')") Default
        button.button(@click="notify('Important message','Hello user! This is a notification')") With title
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors
        button.button.is-primary(@click="notify('Important message','Hello user! This is a notification','is-primary')") Primary
        button.button.is-secondary(@click="notify('Important message','Hello user! This is a notification','is-secondary')") Secondary
        button.button.is-success(@click="notify('Important message','Hello user! This is a notification','is-success')") Success
        button.button.is-danger(@click="notify('Important message','Hello user! This is a notification','is-danger')") Danger
        button.button.is-warning(@click="notify('Important message','Hello user! This is a notification','is-warning')") Warning
        button.button.is-info(@click="notify('Important message','Hello user! This is a notification','is-info')") Info
        button.button.is-black(@click="notify('Important message','Hello user! This is a notification','is-black')") Black
        button.button.is-dark(@click="notify('Important message','Hello user! This is a notification','is-dark')") Dark
        button.button.is-light(@click="notify('Important message','Hello user! This is a notification','is-light')") Light
        button.button.is-white(@click="notify('Important message','Hello user! This is a notification','is-white')") White
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        button.button(@click="notify('','Hello user! This is a notification','is-tiny')") Tiny
        button.button(@click="notify('','Hello user! This is a notification','is-small')") Small
        button.button(@click="notify('','Hello user! This is a notification','is-normal')") Normal
        button.button(@click="notify('','Hello user! This is a notification','is-large')") Large
        button.button(@click="notify('','Hello user! This is a notification','is-massive')") Massive







</template>

<script>
export default {
  head() {
    return {
      title: 'Notifications'
    }
  },
  methods: {
    notify: function(title, text, type) {
      this.$notify({
        group: 'global',
        title: title,
        text: text,
        type: type
      })
    }
  }
}
</script>
