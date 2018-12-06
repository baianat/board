<template lang="pug">
div
  h1 Input Group

  .grid.is-tablet-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic Examples
        .input-group
          span.input-tag Name
          input.input(placeholder='Input with label', type='text')
          a.button(href='#') Submit

        .input-group
          span.input-tag Name
          input.input(placeholder='Input with label', type='text')

        .input-group
          span.input-tag.is-dark First Name
          span.input-tag.is-gray Last Name
          input.input(placeholder='Input with labels', type='text')

        .input-group
          button.button Button
          input.input(placeholder='Input with button', type='text')

        .input-group
          button.button.is-dark Button
          span.input-tag.is-gray
            AppIcon(name="call")
          input.input(placeholder='Input with buttons', type='text')

        .input-group
          input.input(placeholder='Input with label', type='text')
          span.input-tag Name

        .input-group
          input.input(placeholder='Input with buttons', type='text')
          a.button.is-warning(href='#') Button
          a.button.is-success(href='#') Button

        .input-group
          input.input(placeholder='Input with buttons', type='text')
          .input-tag.is-gray
            AppIcon(name="call")

        .input-group
          span.input-tag
            label.checkbox
              input.checkbox-input(type='checkbox')

          input.input(placeholder='Input group', type='text')
          button.button Submit

        .input-group
          span.input-tag price
          input.input(placeholder='Input group', type='text')
          span.input-tag.is-gray
            AppIcon(name="call")

        .input-group
          span.input-tag.is-gray Full name
          input.input(placeholder='First Name', type='text')
          input.input(placeholder='Last Name', type='text')

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors

        .input-group(v-for="color in colors" :class="color")
          span.input-tag Name
          input.input(placeholder='Input group', type='text')
          a.button(href='#') Submit
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes

        .input-group(v-for="size in sizes" :class="size")
          span.input-tag Name
          input.input(placeholder='Input group', type='text')
          a.button(href='#') Submit


</template>


<script>
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Input Group'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
