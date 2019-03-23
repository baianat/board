<template lang="pug">
.files
  .files-breadcrumb
    nav(aria-label='breadcrumb')
      ol.breadcrumb
        li.breadcrumb-item
          a(href='#') Files
        li.breadcrumb-item
          a(href='#') Sub folder
        li.breadcrumb-item.is-active(aria-current='page') Current folder
  FilesHeader(
    :selected="selectedItems"
      @unselect="unselect"
      @newFolder="newFolder = true"
      @copy="copy = true"
      @move="move = true"
      @remove="remove = true"
     )

  .files-items.u-mt-normal(
    :class="{ 'is-darg': dragActive }"
    @dragenter.stop.prevent="dragActive = true"
    @dragover.stop.prevent="dragActive = true"
    @dragleave.stop.prevent="dragActive = false"
    @drop.stop.prevent="dragActive = false; handleDrop($event);"
  )
    .files-items-drag(v-if="dragActive"): AppIcon(name="cloud-upload")
    FilesItem(
      v-for="file in files"
      ref="items"
      :key="file.id"
      :id="file.id"
      :name="file.name"
      :type="file.type"
      :url="file.url"
      @selected="select"
      @rename="rename = true"
      @edit="edit = true"
      @copy="copy = true"
      @move="move = true"
      @remove="remove = true"
      @share="share = true"
    )
  .files-uploading(v-if="uploading")
    AppIcon(name="refresh")
    span uploading file.jpg - 5 secs left
    .progress
      .progress-bar(style='width: 0%;' ref="progress")

  AppModal(v-if="newFolder" @close="newFolder = false")
    template(slot="header")
      h4.AppCard-title #[AppIcon(name="folder")] #[span  Create new folder]
    form.form.u-full
      .field
        label.field-label Name this folder
        input.input(type='text')
    template(slot="footer")
      button.button.is-primary Create
      button.button.is-dark.is-outlined(@click="newFolder = false") Cancel

  AppModal(v-if="rename" @close="rename = false")
    template(slot="header")
      h4.AppCard-title #[AppIcon(name="edit")] #[span  Rename]
    form.form.u-full
      .field
        label.field-label Rename this file
        input.input(type='text' value="Tellus.jpg")
    template(slot="footer")
      button.button.is-primary Save
      button.button.is-dark.is-outlined(@click="rename = false") Cancel

  AppModal(v-if="edit" @close="edit = false")
    template(slot="header")
      h4.AppCard-title #[AppIcon(name="edit")] #[span  Edit]
    form.form.u-full
      .field
        label.field-label Name
        input.input(type='text' value="Tellus.jpg")
      .field
        label.field-label Caption
        input.input(type='text')
      .field
        label.field-label Alt
        input.input(type='text')
      .field
        label.field-label Description
        input.input(type='text')
    template(slot="footer")
      button.button.is-primary Save
      button.button.is-dark.is-outlined(@click="edit = false") Cancel

  AppModal(v-if="remove" @close="remove = false")
    template(slot="header")
      h4.AppCard-title #[AppIcon(name="delete")]  Delete file?
    p Are you sure you want to delete #[b InConsequatUt.png] from your Files?
    template(slot="footer")
      button.button.is-primary Delete
      button.button.is-dark.is-outlined(@click="remove = false") Cancel

  AppModal(v-if="copy" @close="copy = false")
    template(slot="header")
      h4.AppCard-title #[AppIcon(name="edit")] #[span  Copy 1 item to…]
    .u-full
      nav(aria-label='breadcrumb' class="u-mb-small")
        ol.breadcrumb
          li.breadcrumb-item
            a(href='#') Files
          li.breadcrumb-item
            a(href='#') Sub folder
          li.breadcrumb-item.is-active(aria-current='page') Current folder
      ul.files-folders
        li.is-selected
          span
            AppIcon(name="folder")
            span folder 1
          AppIcon(name="keyboard-arrow-right")
        li
          span
            AppIcon(name="folder")
            span folder 2
          AppIcon(name="keyboard-arrow-right")
        li(v-for="i in 5")
          span
            AppIcon(name="folder")
            span folder {{i+2}}
    template(slot="footer")
      button.button.is-primary Copy
      button.button.is-dark.is-outlined(@click="copy = false") Cancel

  AppModal(v-if="move" @close="move = false")
    template(slot="header")
      h4.AppCard-title #[AppIcon(name="edit")] #[span  Move 1 item to…]
    .u-full
      nav(aria-label='breadcrumb' class="u-mb-small")
        ol.breadcrumb
          li.breadcrumb-item
            a(href='#') Files
          li.breadcrumb-item
            a(href='#') Sub folder
          li.breadcrumb-item.is-active(aria-current='page') Current folder
      ul.files-folders
        li.is-selected
          span
            AppIcon(name="folder")
            span folder 1
          AppIcon(name="keyboard-arrow-right")
        li
          span
            AppIcon(name="folder")
            span folder 2
          AppIcon(name="keyboard-arrow-right")
        li(v-for="i in 5")
          span
            AppIcon(name="folder")
            span folder {{i+2}}
    template(slot="footer")
      button.button.is-primary Move
      button.button.is-dark.is-outlined(@click="move = false") Cancel

  AppModal(v-if="share" @close="share = false")
    template(slot="header")
      h4.AppCard-title #[AppIcon(name="share")] #[span  InConsequatUt.png]
    .u-full
      form.form
        .field
          label.field-label To:
          Multiselect(
            v-model="shareInput",
            :options="shareUsers",
            :multiple="true",
            :taggable="true",
            @tag="addTag",
            :clear-on-select="false",
            :close-on-select="false",
            track-by="name",
            label="name",
            placeholder="Email or name",
          )
      ul.files-share-users
        li
          .files-share-users-header
            figure.avatar.is-small.is-inline.is-secondary
              span.avatar-initials BI
            span
              span.files-share-users-name Baianat Info
              span.files-share-users-email support@baianat.com
          .files-share-users-footer
            AppDropdown.is-right.is-small
              span(slot="trigger" class="u-font-small")
                span Can view
                AppIcon(name="arrow-drop-down" classes="is-massive")
              a.dropdown-item(href='#0' ) Can view
              a.dropdown-item(href='#0' ) Can edit
              a.dropdown-item(href='#0' ) Remove

        li
          .files-share-users-header
            figure.avatar.is-small.is-inline
              span.avatar-initials BS
            span
              span.files-share-users-name Baianat Support
              span.files-share-users-email support@baianat.com
          .files-share-users-footer
            span.u-font-small Owner



    template(slot="footer")
      button.button.is-primary Share
      button.button.is-dark.is-outlined(@click="share = false") Cancel

</template>

<script>
import FilesHeader from '~/components/Files/FilesHeader'
import FilesItem from '~/components/Files/FilesItem'
import files from '~/assets/data/files'
export default {
  head() {
    return {
      title: 'Files'
    }
  },
  components: {
    FilesHeader,
    FilesItem
  },
  data: () => ({
    uploading: false,
    files: files,
    selectedItems: [],
    dragActive: false,
    newFolder: false,
    rename: false,
    edit: false,
    copy: false,
    move: false,
    remove: false,
    share: false,
    shareInput: [],
    shareUsers: [
      { name: 'Baianat Support', email: 'abc@gmail.com' },
      { name: 'Baianat Info', email: 'abc@gmail.com' },
      { name: 'Baianat Design', email: 'abc@gmail.com' },
      { name: 'Baianat Branding', email: 'abc@gmail.com' }
    ]
  }),
  methods: {
    select(e) {
      if (e.val === true) {
        this.selectedItems.push(e.id)
      } else {
        let idx = this.selectedItems.indexOf(e.id)
        if (idx > -1) {
          this.selectedItems.splice(idx, 1)
        }
      }
    },
    unselect() {
      this.selectedItems = []
      this.$refs.items.forEach(el => {
        if (el.$el.classList.contains('is-selected')) {
          el._data.selected = false
        }
      })
    },
    addTag(newTag) {
      const shareInput = {
        name: newTag,
        email: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      }
      this.shareUsers.push(shareInput)
      this.shareInput.push(shareInput)
    },
    handleDrop(e) {
      this.uploading = true
      var elem = this.$refs.progress
      var width = 1
      var id = setInterval(frame, 10)
      function frame() {
        if (width >= 100) {
          clearInterval(id)
          this.uploading = false
        } else {
          width++
          elem.style.width = width + '%'
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.files
  &-items
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))
    grid-gap: 16px
    position: relative

    &-drag
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
      background: alpha($primary, 0.1)
      border-radius: $border-radius
      z-index: 3
      border: 2px dashed $primary
      color: $white
      display: flex
      align-items: center
      justify-content: center
      font-size: 200px

      .icon
        fill: $white

  &-folders
    list-style-type: none
    padding: 0
    margin: 0
    max-height: 40vh
    overflow: auto

    >li
      padding: 10px
      display: flex
      align-items: center
      justify-content: space-between
      cursor: pointer

      &:not(:last-child)
        border-bottom: 1px solid $gray

      &:hover
        background: $light

      &.is-selected
        background: alpha($primary, 0.1)

  &-share-users
    list-style-type: none
    padding: 0
    margin: 0

    li
      padding: 5px 0
      display: flex
      align-items: center
      justify-content: space-between

    &-header
      display: flex
      align-items: center

    &-name
      display: block

    &-email
      display: block
      font-size: 12px
      color: $slategray

  &-uploading
    position: fixed
    bottom: 20px
    left: 50%
    transform: translateX(-50%)
    padding: 8px 16px
    background: $white
    border: 1px solid $gray
    border-radius: $border-radius
    z-index: 5

    .icon
      font-size: 24px
      animation: spin 1.2s linear infinite

    .progress
      height: 2px
      margin: 0
      position: absolute
      bottom: 0
      left: 0
      right: 0

@keyframes spin
  0%
    transform: rotate(0deg)

  100%
    transform: rotate(360deg)
</style>
