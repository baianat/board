<template lang="pug">
div
  h1 Card
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Basic Card
        p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
        p Donec ut scelerisque dolor. Nullam imperdiet dui in pulvinar luctus. Sed convallis vehicula ipsum vitae cursus. Etiam imperdiet massa ac elit interdum scelerisque. Phasellus id elit sed metus tincidunt fringilla. Curabitur commodo mollis ullamcorper. Phasellus tortor dolor, molestie eu dolor feugiat, euismod blandit felis. Cras nec pretium dui, vitae faucibus mi.
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  #[AppIcon(name="contact-phone")] #[span Icon Title]
        p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
        p Donec ut scelerisque dolor. Nullam imperdiet dui in pulvinar luctus. Sed convallis vehicula ipsum vitae cursus. Etiam imperdiet massa ac elit interdum scelerisque. Phasellus id elit sed metus tincidunt fringilla. Curabitur commodo mollis ullamcorper. Phasellus tortor dolor, molestie eu dolor feugiat, euismod blandit felis. Cras nec pretium dui, vitae faucibus mi.

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Card Footer
        p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
        p Donec ut scelerisque dolor. Nullam imperdiet dui in pulvinar luctus. Sed convallis vehicula ipsum vitae cursus. Etiam imperdiet massa ac elit interdum scelerisque. Phasellus id elit sed metus tincidunt fringilla. Curabitur commodo mollis ullamcorper. Phasellus tortor dolor, molestie eu dolor feugiat, euismod blandit felis. Cras nec pretium dui, vitae faucibus mi.
        template(slot="footer")
          button.button.is-success.u-mb-0 Submit
          button.button.is-clean.u-mb-0 Cancel
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Card Actions
          .buttons.is-secondary
            button.button: AppIcon(name="settings-input-svideo")
            button.button: AppIcon(name="thumb-up")
            button.button: AppIcon(name="delete")
        p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
        p Donec ut scelerisque dolor. Nullam imperdiet dui in pulvinar luctus. Sed convallis vehicula ipsum vitae cursus. Etiam imperdiet massa ac elit interdum scelerisque. Phasellus id elit sed metus tincidunt fringilla. Curabitur commodo mollis ullamcorper. Phasellus tortor dolor, molestie eu dolor feugiat, euismod blandit felis. Cras nec pretium dui, vitae faucibus mi.
        template(slot="footer")
          button.button.is-secondary.u-mb-0 Submit
          button.button.is-clean.u-mb-0 Cancel
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Card Dropdown
          AppDropdown(class="is-right")
            button(slot="trigger" class="button is-success u-mb-0") #[AppIcon(name="more-vert")]
            a.dropdown-item(href='#0') Rename
            a.dropdown-item(href='#0') Move
            a.dropdown-item(href='#0') Delete

        p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
        p Donec ut scelerisque dolor. Nullam imperdiet dui in pulvinar luctus. Sed convallis vehicula ipsum vitae cursus. Etiam imperdiet massa ac elit interdum scelerisque. Phasellus id elit sed metus tincidunt fringilla. Curabitur commodo mollis ullamcorper. Phasellus tortor dolor, molestie eu dolor feugiat, euismod blandit felis. Cras nec pretium dui, vitae faucibus mi.
        template(slot="footer")
          button.button.is-success.u-mb-0 Submit
          button.button.is-clean.u-mb-0 Cancel

    .column.is-desktop-6
      AppCard.is-full.is-light.is-clean
        template(slot="header")
          h4.AppCard-title  Clean
          AppDropdown(class="is-right")
            button(slot="trigger" class="button  u-mb-0") #[AppIcon(name="more-vert")]
            a.dropdown-item(href='#0') Rename
            a.dropdown-item(href='#0') Move
            a.dropdown-item(href='#0') Delete

        p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
        p Donec ut scelerisque dolor. Nullam imperdiet dui in pulvinar luctus. Sed convallis vehicula ipsum vitae cursus. Etiam imperdiet massa ac elit interdum scelerisque. Phasellus id elit sed metus tincidunt fringilla. Curabitur commodo mollis ullamcorper. Phasellus tortor dolor, molestie eu dolor feugiat, euismod blandit felis. Cras nec pretium dui, vitae faucibus mi.
        template(slot="footer")
          button.button.u-mb-0 Submit
          button.button.is-clean.u-mb-0 Cancel

    .column.is-desktop-6( v-for="color in colors" )
      AppCard.is-full(:class="color")
        template(slot="header")
          h4.AppCard-title  {{color}}
        p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
        p Donec ut scelerisque dolor. Nullam imperdiet dui in pulvinar luctus. Sed convallis vehicula ipsum vitae cursus. Etiam imperdiet massa ac elit interdum scelerisque. Phasellus id elit sed metus tincidunt fringilla. Curabitur commodo mollis ullamcorper. Phasellus tortor dolor, molestie eu dolor feugiat, euismod blandit felis. Cras nec pretium dui, vitae faucibus mi.
        template(slot="footer")
          button.button.is-white.u-mb-0 Submit




</template>

<script>
import colors from '~/assets/data/colors'
export default {
  head() {
    return {
      title: 'Card'
    }
  },
  data: () => ({
    colors: colors
  })
}
</script>
