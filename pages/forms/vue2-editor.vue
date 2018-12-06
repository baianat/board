<template lang="pug">
div
  h1 Vue2Editor
  p For docs visit #[a(href="https://www.vue2editor.com/" target="_blank") #[code Vue2Editor]]

  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        VueEditor(id="editor-basic" v-model="editor.basic")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Custom Toolbar
        VueEditor(id="editor-custom" v-model="editor.editorCustom" :editorToolbar="editor.customToolbar")
</template>

<script>
export default {
  head() {
    return {
      title: 'Tibtab'
    }
  },
  data: () => ({
    editor: {
      basic: '<h1>Some initial content</h1>',
      editorCustom: '<h1>Some initial content</h1>',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block']
      ]
    }
  })
}
</script>
