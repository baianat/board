<template lang="pug">
.files-item(@contextmenu.prevent="$refs.menu.open($event, { foo: 'bar' })" name="name" :class="{'is-selected' : selected}")
  .files-item-header
    .files-item-header-downloads(v-if="downloads")  #[span {{ downloads }}]
    .files-item-header-thumb
      img(:src="url" v-if="type.startsWith('image')")
      AppIcon(name="folder" v-else-if="type.startsWith('folder')")
      AppIcon(name="video-file" v-else-if="type.startsWith('video')")
      svg.icon.is-massive( v-else-if="type.endsWith('excel')" focusable='false', width='24px', height='24px', viewBox='0 0 24 24', role='img')
        path(d='M1 3l13-2v21L1 20V3z', fill='#217346')
        path(d='M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z', fill='#217346')
        path(fill='#fff', d='M14 4h8v15h-8z')
        path(fill='#217346', d='M14 14h2v-1h-2zM14 16h2v-1h-2zM14 10h2V9h-2zM14 12h2v-1h-2zM14 8h2V7h-2zM17 14h3v-1h-3zM17 16h3v-1h-3zM17 10h3V9h-3zM17 12h3v-1h-3zM17 8h3V7h-3z')
        path(d='M6 7H4l2 4.5L4 16h2l1-3 1 3h2l-2-4.5L10 7H8l-1 3-1-3z', fill='#fff')
      svg.icon.is-massive( v-else-if="type.endsWith('word')" focusable='false', width='24px', height='24px', viewBox='0 0 24 24', role='img')
        path(d='M1 3l13-2v21L1 20V3z', fill='#2B579A')
        path(d='M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z', fill='#2B579A')
        path(fill='#fff', d='M14 4h8v15h-8z')
        path(fill='#2B579A', d='M13 6h7v1h-7zM13 9h7V8h-7zM13 11h7v-1h-7zM13 13h7v-1h-7zM13 15h7v-1h-7zM13 17h7v-1h-7z')
        path(d='M12 8l-1.687 7H8.72l-1.06-4.49a4.084 4.084 0 0 1-.102-.787H7.54c-.027.32-.065.581-.116.786L6.338 15h-1.66L3 8h1.571l.9 4.662c.038.198.066.465.084.8h.027c.011-.25.054-.524.129-.82L6.868 8h1.54l1.046 4.7c.039.173.073.424.102.753h.018c.012-.258.043-.518.094-.781L10.549 8H12z', fill='#fff')
      svg.icon.is-massive( v-else-if="type.endsWith('powerpoint')" focusable='false', width='24px', height='24px', viewBox='0 0 24 24', role='img')
        path(d='M1 3l13-2v21L1 20V3z', fill='#D24726')
        path(d='M7 13v3H5V7h2.897C9.966 7 11 7.956 11 9.868c0 .904-.298 1.636-.893 2.197A3.388 3.388 0 0 1 7.73 13H7zm0-4.444v2.806h.576c.985 0 1.477-.473 1.477-1.418 0-.925-.492-1.388-1.477-1.388H7z', fill='#fff')
        path(d='M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z', fill='#D24726')
        path(fill='#fff', d='M14 4h8v15h-8z')
        path(fill='#D24726', d='M14 15h6v-1h-6zM14 17h6v-1h-6z')
        path(fill-rule='evenodd', clip-rule='evenodd', d='M16 13a3 3 0 0 0 3-3h-3V7a3 3 0 0 0 0 6z', fill='#D24726')
        path(fill-rule='evenodd', clip-rule='evenodd', d='M20 9a3 3 0 0 0-3-3v3h3z', fill='#D24726')

      AppIcon(name="insert-file" v-else)
  .files-item-footer
    span {{ name }}
  .files-item-checkbox
    label.checkbox
      input.checkbox-input(type='checkbox' v-model="selected" ref="check")
  FilesContextMenu(ref="menu")
    ul(slot-scope="child")
      li(@click="$emit('share')")   Share
      li(@click="$emit('download')")   Download
      li(@click="$emit('rename')")   Rename
      li(@click="$emit('move')")   Move
      li(@click="$emit('copy')")  Copy
      li(@click="$emit('remove')")  Delete


</template>
<style lang="stylus">
.files-item
  cursor: pointer
  background: $white
  border-radius: ($border-radius * 2)
  box-shadow: $boxShadow
  overflow: hidden
  transition: 200ms
  user-select: none
  font-size: 14px
  position: relative

  &-header
    padding-top: 100%
    position: relative

    &-downloads
      border-top-left-radius: $border-radius
      background: $white
      position: absolute
      bottom: 0
      right: 0
      z-index: 3
      padding: 2px 8px
      font-size: 12px

    &-thumb
      height: 100%
      left: 0
      position: absolute
      top: 0
      width: 100%
      display: flex

      img
        height: 100%
        width: 100%
        object-fit: cover
        object-position: center

      .icon
        margin: auto
        font-size: 60px
        display: flex

        +mq($until: 480px)
          font-size: 40px

      .icon
        width: 1em
        height: 1em
        margin: auto

  &-footer
    overflow: hidden
    position: relative
    text-overflow: ellipsis

    span
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      padding: 14px
      display: block

  &-checkbox
    position: absolute
    top: 10px
    left: 10px
    z-index: 2

  &.is-selected
    background: alpha($primary, 0.1)
</style>


<script>
import FilesContextMenu from '~/components/Files/FilesContextMenu'

export default {
  name: 'FilesItem',
  components: {
    FilesContextMenu
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    downloads: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    isUploading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    selected: false
  }),
  watch: {
    selected(val) {
      this.$emit('selected', { val, id: this.id })
    }
  },
  methods: {}
}
</script>
