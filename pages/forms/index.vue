<template lang="pug">
div
  h1 Form
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        form.form
          .field
            label.field-label Email
            input.input(type='email', placeholder='Enter email')
            small.field-text We'll never share your email with anyone else.
          .field
            label.field-label Password
            input.input(type='password', placeholder='Enter password')
          .field
            label.checkbox
              input.checkbox-input(type='checkbox')
              span.checkbox-label I agree to the Terms and Conditions
          .field
            button.button(@click.prevent) Submit
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Inline filed
        form.form.is-inline
          .field
            .column.is-3
              label.field-label Email:
            .column.is-7
              input.input(type='email', placeholder='Enter email')
          .field
            .column.is-3
              label.field-label Password:
            .column.is-7
              input.input(type='password', placeholder='Enter password')
          .field
            .column.is-7.is-offset-3
              label.checkbox
                input.checkbox-input(type='checkbox')
                span.checkbox-label I agree to the Terms and Conditions
          .field
            .column.is-7.is-offset-3
              button.button(@click.prevent) Submit

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Form Validation States
        form.form.is-fluid
          .field
            label.field-label Input with success
            input.input.is-success(placeholder='Enter username')
            small.field-text Another filed massage
            span.field-text.is-success Success! You've done it.
          .field
            label.field-label Input with warning
            input.input.is-warning(placeholder='Enter username')
            span.field-text.is-warning Please, try again.
          .field
            label.field-label Input with danger
            input.input.is-danger(placeholder='Enter username')
            span.field-text.is-danger Wrong username, Try another?



</template>

<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Form'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
