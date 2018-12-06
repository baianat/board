<template lang="pug">
div
  h1 Vue Dropzone
  p For docs visit #[a(href="https://rowanwins.github.io/vue-dropzone/docs/dist/index.html" target="_blank") #[code Vue-Dropzone]]
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Single File Upload
        Dropzone(id="dropzoneSingle" :options="singleOptions")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Multiple File Upload
        Dropzone(id="dropzoneMultiple" :options="multipleOptions")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Accept images only
        Dropzone(id="dropzoneImages" :options="imagesOptions")


</template>


<script>
export default {
  head() {
    return {
      title: 'Vue Dropzone'
    }
  },
  data: () => ({
    singleOptions: {
      url: 'https://httpbin.org/post',
      maxFiles: 1,
      addRemoveLinks: true
    },
    multipleOptions: {
      url: 'https://httpbin.org/post',
      addRemoveLinks: true
    },
    imagesOptions: {
      url: 'https://httpbin.org/post',
      addRemoveLinks: true,
      acceptedFiles: 'image/*'
    }
  })
}
</script>
