<template lang="pug">
div
  h1 Add new post

  .grid.is-ultrawide-5.is-widescreen-8.has-space
    .column
      form.form
        .field
          label.field-label Enter title here
          input.input(type='text'  v-model="post.title")
        .field
          label.field-label Enter content
          VueEditor(id="editor-basic" v-model="post.content")
        .u-mt-large
          button.button.is-primary Save
          button.button Publish
</template>


<script>
export default {
  head() {
    return {
      title: 'New post'
    }
  },
  data: () => ({
    post: {
      title: null,
      content: null
    }
  })
}
</script>
