<template lang="pug">
div
  h1 Avatar
  .grid.is-desktop-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        figure.avatar.is-inline
          img(src='https://randomuser.me/api/portraits/men/81.jpg', alt='avatar')
        figure.avatar.is-inline
          span.avatar-initials AV

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        .grid.is-6.has-space
          .column
            .u-mb-normal(v-for="(size, idx) in sizes" )
              figure.avatar(:class="size")
                img(:src='users[idx+1].avatar', alt='avatar')
          .column
            .u-mb-normal(v-for="size in sizes")
              figure.avatar( :class="size")
                span.avatar-initials AV
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors
        figure.avatar.is-inline( v-for="color in colors" :class="color")
          span.avatar-initials AV

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Status
        figure.avatar.is-inline.is-massive
          img(:src='users[0].avatar', alt='avatar')
          span.avatar-icon.is-primary
        figure.avatar.is-inline.is-large
          img(:src='users[1].avatar', alt='avatar')
          span.avatar-icon.is-secondary
        figure.avatar.is-inline.is-normal
          img(:src='users[2].avatar', alt='avatar')
          span.avatar-icon.is-success
        figure.avatar.is-inline.is-small
          img(:src='users[3].avatar', alt='avatar')
          span.avatar-icon.is-danger
        figure.avatar.is-inline.is-tiny
          img(:src='users[4].avatar', alt='avatar')
          span.avatar-icon.is-warning

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Icons
        figure.avatar.is-inline( v-for="color in colors" :class="color")
          span.avatar-initials: AppIcon(name="insert-emoticon")
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Icons
        figure.avatar.is-inline( v-for="size in sizes" :class="size")
          span.avatar-initials: AppIcon(name="insert-emoticon")
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Square
        div
          figure.avatar.is-inline.is-square( v-for="color in colors" :class="color")
            span.avatar-initials AV
        .u-mt-large
          figure.avatar.is-inline.is-square( v-for="size,idx in sizes" :class="size")
            img(:src='users[idx+1].avatar', alt='avatar')
          figure.avatar.is-inline.is-square( v-for="size in sizes" :class="size")
            span.avatar-initials: AppIcon(name="crop")
</template>

<script>
import { getUser } from '~/assets/data/user'
import colors from '~/assets/data/colors'
import sizes from '~/assets/data/sizes'
export default {
  head() {
    return {
      title: 'Label'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes,
    users: getUser(10)
  })
}
</script>
