<template lang="pug">
.TheSidebar
  .TheSidebar-bg(@click.prevent="$emit('sidebar')")
  aside.TheSidebar-container
    nav.nav
      ul.nav-menu
        template(v-for="item in items")
          li(v-if="item.items").nav-item.has-subs
            button.nav-toggle(@click.prevent="navToggle")
              AppIcon(:name="item.icon" v-if="item.icon" type="outlined").is-large
              | {{item.title}}
              .nav-icon
            ul.nav-submenu
              li.nav-item(v-for="(subItem, i) in item.items")
                nuxt-link(:to="subItem.href" v-if="subItem.href").nav-link {{subItem.title}}


          li(v-else)
            li.nav-item
              nuxt-link(:to="item.href" v-if="item.href").nav-link
                AppIcon(:name="item.icon" v-if="item.icon" type="outlined").is-large
                | {{item.title}}


</template>
<style lang="stylus">
.TheSidebar
  display: block
  position: fixed
  z-index: 1060
  top: 50px
  {$dir-start}: 0
  bottom: 0
  width: 260px

  +mq($until: 'desktop')
    top: 0
    {$dir-end}: 0
    width: 100%
    transform: translateX(-100%)
    opacity: 0
    transition: 0.3s ease-in-out

    if ($dir == rtl)
      transform: translateX(100%)

  &-bg
    position: absolute
    z-index: -1
    background: alpha($black, 0.1)
    top: 0
    bottom: 0
    left: 0
    right: 0

  &-container
    position: absolute
    top: 0
    {$dir-start}: 0
    bottom: 0
    overflow-y: auto
    -webkit-overflow-scrolling: touch
    width: 100%
    width: 260px
    background: $white
    transition: 200ms
    padding: 25px 15px
    padding-{$dir-start}: 25px

    +mq($until: 'desktop')
      top: 50px

    &::-webkit-scrollbar
      width: 0.5em

    &::-webkit-scrollbar-track
      -webkit-box-shadow: none

    &::-webkit-scrollbar-thumb
      background-color: $light
      outline: 0 solid $slategray

.sidebar-open
  .TheSidebar
    transform: none

    +mq($until: 'desktop')
      opacity: 1
</style>

<script>
export default {
  name: 'TheSidebar',
  data: () => ({
    items: [
      { icon: 'slideshow', title: 'Dashboard', href: '/' },
      {
        title: 'Components',
        icon: 'widgets',
        items: [
          { title: 'Typography', href: '/components/typography' },
          { title: 'Grid', href: '/components/grid' },
          { title: 'Card', href: '/components/card' },
          { title: 'Item', href: '/components/item' },
          { title: 'Tables', href: '/components/tables' },
          { title: 'Progress', href: '/components/progress' },
          { title: 'Dropdown', href: '/components/dropdown' },
          { title: 'Tabs', href: '/components/tabs' },
          { title: 'Modal', href: '/components/modal' },
          { title: 'Tooltip', href: '/components/tooltip' },
          { title: 'Nav', href: '/components/nav' },
          { title: 'Alert', href: '/components/alert' },
          { title: 'Notifications', href: '/components/notifications' },
          { title: 'Avatar', href: '/components/avatar' },
          { title: 'Label', href: '/components/label' },
          { title: 'Lists', href: '/components/lists' },
          { title: 'Pagination', href: '/components/pagination' },
          { title: 'Breadcrumb', href: '/components/breadcrumb' }
        ]
      },
      {
        icon: 'tab',
        title: 'Buttons',
        items: [
          { title: 'Button', href: '/buttons' },
          { title: 'Button Group', href: '/buttons/group' }
        ]
      },
      {
        title: 'Forms & Controls',
        icon: 'input-component',
        items: [
          { title: 'Form', href: '/forms' },
          { title: 'Input', href: '/forms/input' },
          { title: 'Input Group', href: '/forms/input-group' },
          { title: 'Textarea', href: '/forms/textarea' },
          { title: 'Checkbox', href: '/forms/checkbox' },
          { title: 'Radio', href: '/forms/radio' },
          { title: 'Select', href: '/forms/select' },
          { title: 'Switcher', href: '/forms/switcher' },
          { title: 'Validation', href: '/forms/validation' },
          { title: 'Vue-multiselect', href: '/forms/vue-multiselect' },
          { title: 'Dropzone', href: '/forms/dropzone' },
          { title: 'Flatpicker', href: '/forms/flatpicker' },
          { title: 'Tiptab Editor', href: '/forms/tiptab-editor' },
          { title: 'Vue2 Editor', href: '/forms/vue2-editor' }
        ]
      },
      { icon: 'loyalty', title: 'Icons', href: '/icons' },
      { icon: 'layer-mask', title: 'Colors', href: '/colors' },
      {
        title: 'Charts',
        icon: 'donut-chart',
        href: '/apex-charts'
      },
      {
        title: 'DataTable',
        icon: 'view-module',
        href: '/datatable'
      },
      {
        title: 'Widgets',
        icon: 'developer-board',
        href: '/widgets'
      },
      {
        title: 'Pages',
        icon: 'view-quilt',
        items: [
          { title: 'Clean', href: '/pages/clean' },
          { title: 'Login', href: '/pages/login' },
          { title: 'Login2', href: '/pages/login2' },
          { title: 'Sign up', href: '/pages/signup' },
          { title: 'Sign up2', href: '/pages/signup2' },
          { title: 'Welcome', href: '/pages/welcome' },
          { title: 'Chat', href: '/pages/chat' },
          { title: 'New post', href: '/pages/new-post' }
        ]
      },

      { icon: 'settings-button', title: 'Settings', href: '/settings' }
    ]
  }),
  methods: {
    navToggle: function(event) {
      if (event) {
        if (event.target.closest('.has-subs:not(.is-active)')) {
          const allSubs = document.querySelectorAll('.nav .has-subs')
          for (const sub of allSubs) {
            sub.classList.remove('is-active')
          }
        }

        event.target.closest('.has-subs').classList.toggle('is-active')
      }
    }
  }
}
</script>
