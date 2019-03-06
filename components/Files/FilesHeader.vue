<template lang="pug">
.files-header.u-mt-normal
  button.button.is-primary(@click="$refs.upload.click()")
    input(type="file" name="upload" ref="upload" style="display: none;" )
    AppIcon(name="cloud-upload" classes="is-massive")
    span Upload files
  button.button(@click.prevent="$emit('newFolder')")
    AppIcon(name="create-new-folder"  class="is-massive")
    span Create new folder
  AppDropdown
    button(slot="trigger" class="button")
      AppIcon(name="insert-file" classes="is-massive")
      span Create new file
    a.dropdown-item(href='#0')
      svg.icon.is-massive(focusable='false', width='24px', height='24px', viewBox='0 0 24 24', role='img')
        path(d='M1 3l13-2v21L1 20V3z', fill='#2B579A')
        path(d='M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z', fill='#2B579A')
        path(fill='#fff', d='M14 4h8v15h-8z')
        path(fill='#2B579A', d='M13 6h7v1h-7zM13 9h7V8h-7zM13 11h7v-1h-7zM13 13h7v-1h-7zM13 15h7v-1h-7zM13 17h7v-1h-7z')
        path(d='M12 8l-1.687 7H8.72l-1.06-4.49a4.084 4.084 0 0 1-.102-.787H7.54c-.027.32-.065.581-.116.786L6.338 15h-1.66L3 8h1.571l.9 4.662c.038.198.066.465.084.8h.027c.011-.25.054-.524.129-.82L6.868 8h1.54l1.046 4.7c.039.173.073.424.102.753h.018c.012-.258.043-.518.094-.781L10.549 8H12z', fill='#fff')
      span Microsoft Word
    a.dropdown-item(href='#0')
      svg.icon.is-massive(focusable='false', width='24px', height='24px', viewBox='0 0 24 24', role='img')
        path(d='M1 3l13-2v21L1 20V3z', fill='#217346')
        path(d='M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z', fill='#217346')
        path(fill='#fff', d='M14 4h8v15h-8z')
        path(fill='#217346', d='M14 14h2v-1h-2zM14 16h2v-1h-2zM14 10h2V9h-2zM14 12h2v-1h-2zM14 8h2V7h-2zM17 14h3v-1h-3zM17 16h3v-1h-3zM17 10h3V9h-3zM17 12h3v-1h-3zM17 8h3V7h-3z')
        path(d='M6 7H4l2 4.5L4 16h2l1-3 1 3h2l-2-4.5L10 7H8l-1 3-1-3z', fill='#fff')
      span Microsoft Excel
  AppDropdown(v-if="selected.length > 0")
    button(slot="trigger" class="button is-primary")
      AppIcon(name="insert-file" classes="is-massive")
      span {{selected.length}} Selected Items
    a.dropdown-item(href='#0' @click.prevent="$emit('unselect')") Unselect All
    a.dropdown-item(href='#0' @click="$emit('download')" ) Download
    a.dropdown-item(href='#0' @click="$emit('move')" ) Move
    a.dropdown-item(href='#0' @click="$emit('copy')" ) Copy
    a.dropdown-item(href='#0' @click="$emit('remove')" ) Delete
  .files-header-search
    input.input(placeholder='Search here', type='search')
</template>

<style lang="stylus">
.files-header
  display: flex
  align-items: flex-start
  justify-content: space-between

  +mq($until: 'tablet')
    flex-wrap: wrap

  &-search
    width: 100%

  .button
    white-space: nowrap

  +mq($until: 'mobile')
    .button, .dropdown, .dropdown-toggle
      width: 100%
      margin-right: 0
      margin-left: 0

    .button
      justify-content: flex-start
</style>

<script>
export default {
  name: 'FilesHeader',
  props: {
    selected: {
      type: Array,
      required: true
    }
  }
}
</script>
