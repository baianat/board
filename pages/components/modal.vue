<template lang="pug">
div
  h1 Modal
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Default
        button.button.is-secondary.is-large(@click="modal_1 = true") Basic modal
        AppModal(v-if="modal_1" @close="modal_1 = false")

          .u-flex-start
            figure.avatar.is-inline.is-massive.is-square(style="flex: 0 0 3em")
              img(src='https://picsum.photos/600/600?image=50', alt='Getting ready to launch')
            div
              .u-font-bold Getting ready to launch
              .u-color-primary.u-font-small Wed, 3 Aug / 12:00
              p.u-mt-small.u-color-slategray We collected the most popular design patterns and layouts to save from drawing blocks scratch.
              button.button.is-primary.is-tiny Learn more
              button.button.is-dark.is-outlined.is-tiny(@click="modal_1 = false") close


    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors
        p You could use these colors also
          code is-primary
          code is-secondary
          code is-success
          code is-danger
          code is-warning
          code is-info
          code is-black
          code is-dark
          code is-light
          code is-white
        button.button.is-primary.is-large(@click="modal_2 = true") Modal - is-primary
        AppModal(v-if="modal_2" @close="modal_2 = false" color="is-primary")
          template(slot="header")
            h4 Modal title
          p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
          template(slot="footer")
            button.button.is-primary Save changes
            button.button.is-dark.is-outlined(@click="modal_2 = false") close

        button.button.is-success.is-large(@click="modal_3 = true") Modal - is-success
        AppModal(v-if="modal_3" @close="modal_3 = false" color="is-success")
          template(slot="header")
            h4 Modal title
          p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
          template(slot="footer")
            button.button.is-success Save changes
            button.button.is-dark.is-outlined(@click="modal_3 = false") close

        button.button.is-danger.is-large(@click="modal_4 = true") Modal - is-danger
        AppModal(v-if="modal_4" @close="modal_4 = false" color="is-danger")
          template(slot="header")
            h4 Modal title
          p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
          template(slot="footer")
            button.button.is-danger Save changes
            button.button.is-dark.is-outlined(@click="modal_4 = false") close

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Outlined
        button.button.is-primary.is-large(@click="modal_5 = true") Modal - is-primary
        AppModal(v-if="modal_5" @close="modal_5 = false" color="is-primary is-outlined")
          template(slot="header")
            h4 Modal title
          p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
          template(slot="footer")
            button.button.is-primary Save changes
            button.button.is-dark.is-outlined(@click="modal_5 = false") close

        button.button.is-success.is-large(@click="modal_6 = true") Modal - is-success
        AppModal(v-if="modal_6" @close="modal_6 = false" color="is-success is-outlined")
          template(slot="header")
            h4 Modal title
          p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
          template(slot="footer")
            button.button.is-success Save changes
            button.button.is-dark.is-outlined(@click="modal_6 = false") close

        button.button.is-danger.is-large(@click="modal_7 = true") Modal - is-danger
        AppModal(v-if="modal_7" @close="modal_7 = false" color="is-danger is-outlined")
          template(slot="header")
            h4 Modal title
          p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel. Donec sed est id metus vestibulum auctor. Vestibulum leo justo, accumsan id lacus ullamcorper, sodales gravida neque. Donec vitae ipsum sed dui porttitor consectetur nec eget erat.
          template(slot="footer")
            button.button.is-danger Save changes
            button.button.is-dark.is-outlined(@click="modal_7 = false") close



</template>

<script>
export default {
  head() {
    return {
      title: 'Modal'
    }
  },
  data: () => ({
    modal_1: false,
    modal_2: false,
    modal_3: false,
    modal_4: false,
    modal_5: false,
    modal_6: false,
    modal_7: false
  })
}
</script>
