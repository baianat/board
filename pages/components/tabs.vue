<template lang="pug">
div
  h1 Tabs
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        AppTabs
          AppTabsItem(name="Messages" selected)
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dolor sed risus euismod porttitor. Cras scelerisque tincidunt justo. Suspendisse pulvinar vulputate felis at dignissim. Sed non dapibus quam. Maecenas.
          AppTabsItem(name="Settings")
            p Integer sit amet ante at nibh mattis tincidunt quis sit amet diam. Mauris dictum lectus sed massa molestie interdum. Donec mauris lorem, posuere et rhoncus in, pharetra at sapien. Integer.
          AppTabsItem(name="Logs")
            p Proin nec purus venenatis, eleifend lorem vel, rutrum ante. In hac habitasse platea dictumst. Pellentesque dictum quis velit ut tempor. Duis nec suscipit risus. Donec accumsan massa mollis ornare aliquam.



    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Icons
        AppTabs
          AppTabsItem(name="Messages" selected icon="message")
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dolor sed risus euismod porttitor. Cras scelerisque tincidunt justo. Suspendisse pulvinar vulputate felis at dignissim. Sed non dapibus quam. Maecenas.
          AppTabsItem(name="Settings" icon="settings-button")
            p Integer sit amet ante at nibh mattis tincidunt quis sit amet diam. Mauris dictum lectus sed massa molestie interdum. Donec mauris lorem, posuere et rhoncus in, pharetra at sapien. Integer.
          AppTabsItem(name="Logs" icon="local-phone")
            p Proin nec purus venenatis, eleifend lorem vel, rutrum ante. In hac habitasse platea dictumst. Pellentesque dictum quis velit ut tempor. Duis nec suscipit risus. Donec accumsan massa mollis ornare aliquam.

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Centered
        AppTabs(classes="is-centered")
          AppTabsItem(name="Messages" selected)
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dolor sed risus euismod porttitor. Cras scelerisque tincidunt justo. Suspendisse pulvinar vulputate felis at dignissim. Sed non dapibus quam. Maecenas.
          AppTabsItem(name="Settings")
            p Integer sit amet ante at nibh mattis tincidunt quis sit amet diam. Mauris dictum lectus sed massa molestie interdum. Donec mauris lorem, posuere et rhoncus in, pharetra at sapien. Integer.
          AppTabsItem(name="Logs")
            p Proin nec purus venenatis, eleifend lorem vel, rutrum ante. In hac habitasse platea dictumst. Pellentesque dictum quis velit ut tempor. Duis nec suscipit risus. Donec accumsan massa mollis ornare aliquam.

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title End
        AppTabs(classes="is-end")
          AppTabsItem(name="Messages" selected)
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dolor sed risus euismod porttitor. Cras scelerisque tincidunt justo. Suspendisse pulvinar vulputate felis at dignissim. Sed non dapibus quam. Maecenas.
          AppTabsItem(name="Settings")
            p Integer sit amet ante at nibh mattis tincidunt quis sit amet diam. Mauris dictum lectus sed massa molestie interdum. Donec mauris lorem, posuere et rhoncus in, pharetra at sapien. Integer.
          AppTabsItem(name="Logs")
            p Proin nec purus venenatis, eleifend lorem vel, rutrum ante. In hac habitasse platea dictumst. Pellentesque dictum quis velit ut tempor. Duis nec suscipit risus. Donec accumsan massa mollis ornare aliquam.

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Boxed
        AppTabs(classes="is-boxed")
          AppTabsItem(name="Messages" selected)
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dolor sed risus euismod porttitor. Cras scelerisque tincidunt justo. Suspendisse pulvinar vulputate felis at dignissim. Sed non dapibus quam. Maecenas.
          AppTabsItem(name="Settings")
            p Integer sit amet ante at nibh mattis tincidunt quis sit amet diam. Mauris dictum lectus sed massa molestie interdum. Donec mauris lorem, posuere et rhoncus in, pharetra at sapien. Integer.
          AppTabsItem(name="Logs")
            p Proin nec purus venenatis, eleifend lorem vel, rutrum ante. In hac habitasse platea dictumst. Pellentesque dictum quis velit ut tempor. Duis nec suscipit risus. Donec accumsan massa mollis ornare aliquam.
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Boxed with icons
        AppTabs(classes="is-boxed")
          AppTabsItem(name="Messages" selected icon="message")
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dolor sed risus euismod porttitor. Cras scelerisque tincidunt justo. Suspendisse pulvinar vulputate felis at dignissim. Sed non dapibus quam. Maecenas.
          AppTabsItem(name="Settings" icon="settings-button")
            p Integer sit amet ante at nibh mattis tincidunt quis sit amet diam. Mauris dictum lectus sed massa molestie interdum. Donec mauris lorem, posuere et rhoncus in, pharetra at sapien. Integer.
          AppTabsItem(name="Logs" icon="local-phone")
            p Proin nec purus venenatis, eleifend lorem vel, rutrum ante. In hac habitasse platea dictumst. Pellentesque dictum quis velit ut tempor. Duis nec suscipit risus. Donec accumsan massa mollis ornare aliquam.




</template>

<script>
export default {
  head() {
    return {
      title: 'Tabs'
    }
  }
}
</script>
