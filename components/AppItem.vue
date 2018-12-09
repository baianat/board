<template lang="pug">
.AppItem
  nuxt-link.AppItem-url(:to="url" v-if="url")
  .AppItem-header(v-if="img")
    .AppItem-thumb(v-if="img")
      img(:src="img" :alt="title")
  .AppItem-body(v-if="title || excerpt")
    h5(v-if="title") {{title}}
    span(v-if="excerpt") {{excerpt}}
    slot

</template>

<style lang="stylus">
.AppItem
  background: $white
  border-radius: ($border-radius * 2)
  box-shadow: $boxShadow
  padding: 0.8em
  position: relative
  transition: box-shadow 200ms

  &:hover
    box-shadow: $boxShadow-2

  &.is-full
    height: 100%

  &-url
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 2

  &-thumb
    height: 100%
    width: 100%
    padding-top: aspectRatio(1, 1)
    overflow: hidden
    border-radius: $border-radius
    position: relative

    img
      height: 100%
      width: 100%
      object-fit: cover
      object-position: center
      position: absolute
      top: 0
      left: 0

  &-body
    padding: 1em

    >span
      display: block

    >*
      margin: 1em 0 0

      &:first-child
        margin: 0

  &-header
    ~.AppItem-body
      padding-top: 1.6em

  &.is-wide
    +mq($from: 'mobile')
      display: flex
      align-items: center

      .AppItem
        &-header
          flex: 0 0 140px
          width: 140px

          ~.AppItem-body
            padding: 0.8em 1.6em

        &-body
          flex: 1 1 0%

      &.is-small
        .AppItem
          &-header
            flex: 0 0 80px
            width: 80px

  &.is-clean
    padding: 0
    box-shadow: none
</style>

<script>
export default {
  name: 'AppItem',
  props: {
    url: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    excerpt: {
      type: String,
      default: null
    }
  }
}
</script>
