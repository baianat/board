<template lang="pug">
.TheApp
  nuxt

  notifications(group='global' position="bottom right")
    template(slot='body', slot-scope='props')
      .alert(:class="props.item.type")
        .alert-content
          .alert-title(v-if="props.item.title") {{props.item.title}}
          div(v-html='props.item.text' v-if="props.item.text")
        button.alert-dismiss(@click='props.close')
          AppIcon(name="close")
</template>

<style lang="stylus">
@import '~@blexar/framework/blexar.styl'
@import '~assets/css/app.styl'

.TheApp
  min-height: 100vh
  overflow: hidden
  position: relative
</style>

<script>
export default {}
</script>
