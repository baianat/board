<template lang="pug">
div
  h1 Add new post

  .grid.is-ultrawide-5.is-widescreen-8.has-space
    .column
      p Enter title here
      input.input(type='text'  v-model="post.title")
      p Enter content
      VueEditor(id="editor-basic" v-model="post.content")
      .u-mt-large
        button.button.is-primary Save
        button.button Publish
</template>


<script>
export default {
  head() {
    return {
      title: 'Dashboard'
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
