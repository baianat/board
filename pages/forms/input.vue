<template lang="pug">
div
  h1 Button
  .grid.is-tablet-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors
        input.input.is-primary(placeholder='primary', type='text')
        input.input.is-secondary(placeholder='secondary', type='text')
        input.input.is-success(placeholder='success', type='text')
        input.input.is-danger(placeholder='danger', type='text')
        input.input.is-warning(placeholder='warning', type='text')
        input.input.is-info(placeholder='info', type='text')
        input.input.is-black(placeholder='black', type='text')
        input.input.is-dark(placeholder='dark', type='text')
        input.input.is-light(placeholder='light', type='text')
        input.input.is-white(placeholder='white', type='text')
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Rounded
        input.input.is-rounded.is-primary(placeholder='primary', type='text')
        input.input.is-rounded.is-secondary(placeholder='secondary', type='text')
        input.input.is-rounded.is-success(placeholder='success', type='text')
        input.input.is-rounded.is-danger(placeholder='danger', type='text')
        input.input.is-rounded.is-warning(placeholder='warning', type='text')
        input.input.is-rounded.is-info(placeholder='info', type='text')
        input.input.is-rounded.is-black(placeholder='black', type='text')
        input.input.is-rounded.is-dark(placeholder='dark', type='text')
        input.input.is-rounded.is-light(placeholder='light', type='text')
        input.input.is-rounded.is-white(placeholder='white', type='text')
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Icons
        .input-icons.is-primary.has-icons-before
          AppIcon(name="call" classes="is-before")
          input.input(placeholder='has-icons-before', type='text')
        .input-icons.is-secondary.has-icons-after
          input.input(placeholder='has-icons-after', type='text')
          AppIcon(name="swap-calls" classes="is-after")
        .input-icons.is-success.has-icons-after.has-icons-before
          AppIcon(name="call" classes="is-before")
          input.input(placeholder='has-icons-after & has-icons-before', type='text')
          AppIcon(name="swap-calls" classes="is-after")
        p Sizes
        .input-icons.is-tiny.is-danger.has-icons-before
          AppIcon(name="call" classes="is-before")
          input.input(placeholder='tiny', type='text')
        .input-icons.is-small.is-warning.has-icons-before
          AppIcon(name="call" classes="is-before")
          input.input(placeholder='small', type='text')
        .input-icons.is-normal.is-info.has-icons-before
          AppIcon(name="call" classes="is-before")
          input.input(placeholder='normal', type='text')
        .input-icons.is-is-large.is-black.has-icons-before
          AppIcon(name="call" classes="is-before")
          input.input(placeholder='large', type='text')
        .input-icons.is-is-massive.is-dark.has-icons-before
          AppIcon(name="call" classes="is-before")
          input.input(placeholder='massive', type='text')

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        input.input.is-tiny(placeholder='primary', type='text')
        input.input.is-small(placeholder='primary', type='text')
        input.input.is-normal(placeholder='primary', type='text')
        input.input.is-large(placeholder='primary', type='text')
        input.input.is-massive(placeholder='primary', type='text')
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Input Types
        form.form

            label.field-label Email
            input.input(type='email', placeholder='Email', value='spectre@example.com')

            label.field-label URL
            input.input(type='url', placeholder='URL', value='https://github.com/picturepan2/spectre')

            label.field-label Search
            input.input(type='search', placeholder='Search')

            label.field-label Tel
            input.input(type='tel', placeholder='Tel', value='1-(888)-888-8888')

            label.field-label Password
            input.input(type='password', placeholder='Password', value='123456789')

            label.field-label Number
            input.input(type='number', placeholder='00', value='88')

            label.field-label Date
            input.input(type='date', value='2018-10-21')

            label.field-label Color
            input.input(type='color', value='#f55555')

            label.field-label File
            input.input(type='file')

</template>

<script>
export default {
  head() {
    return {
      title: 'Buttons'
    }
  }
}
</script>
