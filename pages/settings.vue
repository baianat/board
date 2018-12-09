<template lang="pug">
div
  h1 Settings

  .grid.is-ultrawide-5.is-widescreen-8.has-space
    .column
      form.form
      .grid.is-tablet-6
        .column
          .field
            label.field-label Full name
            input.input(type='text' )
        .column
          .field
            label.field-label Email
            input.input(type='text' )
        .column
          .field
            label.field-label Country
            input.input(type='text' )
        .column
          .field
            label.field-label City
            input.input(type='text' )

      button.button.is-primary Save Changes

</template>


<script>
export default {
  head() {
    return {
      title: 'Settings'
    }
  },
  data: () => ({})
}
</script>
