<template lang="pug">
.AppList
  .AppList-item(v-for="item in items" :class="item.state")
    .AppList-item-thumb(v-if="item.icon || item.thumb")
      AppIcon(:name="item.icon" v-if="item.icon && !item.thumb")
      img(:src="item.thumb" v-if="item.thumb && !item.icon")
    .AppList-item-text 	{{item.title}}
    .AppList-item-time(v-if="item.time") 	{{item.time}}
    a.AppList-item-url(v-if="item.url" :href="item.url")
</template>

<style lang="stylus">
.AppList
  position: relative

  &-item
    display: flex
    align-items: center
    padding: 5px 0
    position: relative
    z-index: 2

    &-thumb
      width: 30px
      flex: 0 0 30px
      overflow: hidden

      >img
        width: 24px
        height: 24px
        border-radius: 30em
        display: block

      .icon
        font-size: 24px
        fill: $slategray

    &-text
      flex: 1 1 1%
      font-size: $font-small

    &-time
      opacity: 0.5
      font-size: $font-tiny

    &-url
      position: absolute
      left: 0
      right: 0
      bottom: 0
      top: 0
      z-index: 5
      display: block

  &.is-timeline
    &:before
      position: absolute
      display: block
      content: ''
      width: 1px
      height: 100%
      top: 0
      bottom: 0
      {$dir-start}: 3px
      background: $gray

    .AppList
      &-item
        &:before
          content: ''
          width: 7px
          height: 7px
          flex: 0 0 7px
          margin-{$dir-end}: 10px
          border-radius: 20em
          background: $slategray

        &:first-child, &:last-child
          &:after
            position: absolute
            display: block
            content: ''
            width: 1px
            height: 50%
            top: 0
            bottom: 0
            {$dir-start}: 3px
            background: $white
            z-index: -1

        &:last-child
          &:after
            top: auto
            bottom: 0

        for color in $modifiers-color
          $color = lookup('$' + color)

          &.is-{color}
            &:before
              background: $color
</style>

<script>
export default {
  name: 'AppList',
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  computed: {}
}
</script>
