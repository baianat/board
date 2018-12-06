<template lang="pug">
.TheApp(:class="{ 'sidebar-open': sidebar }")
  TheHeader(@sidebar="sidebarToggle")
  TheSidebar(@sidebar="sidebarToggle")
  .TheBody
    nuxt

    notifications(group='global' position="bottom right")
      template(slot='body', slot-scope='props')
        .alert(:class="props.item.type")
          .alert-content
            .alert-title(v-if="props.item.title") {{props.item.title}}
            div(v-html='props.item.text' v-if="props.item.text")
          button.alert-dismiss(@click='props.close')
            AppIcon(name="close")
</template>

<style lang="stylus">
@import '~@blexar/framework/blexar.styl'
@import '~assets/css/app.styl'

.TheApp
  min-height: 100vh
  overflow: hidden

.TheBody
  padding-top: 100px
  padding-bottom: 40px
  padding-{$dir-end}: 40px
  padding-{$dir-start}: 320px
  transition: transform 0.3s ease-in-out

  +mq($until: 'desktop')
    padding-{$dir-start}: 30px
    padding-{$dir-end}: 30px

  +mq($until: 'mobile')
    padding: 20px

.sidebar-open
  .TheBody
    +mq($until: 'desktop')
      transform: translateX(300px)

      if ($dir == rtl)
        transform: translateX(-300px)
</style>

<script>
import TheHeader from '~/components/TheHeader'
import TheSidebar from '~/components/TheSidebar'
export default {
  components: {
    TheHeader,
    TheSidebar
  },
  data: () => ({
    sidebar: false
  }),
  methods: {
    sidebarToggle: function() {
      this.sidebar = !this.sidebar
    }
  }
}
</script>
