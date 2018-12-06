<template lang="pug">
.The404
  .The404-card
    h1 404
    p Page not found


</template>

<style lang="stylus">
@import '~@blexar/framework/blexar.styl'
@import '~assets/css/app.styl'

.The404
  display: flex
  justify-content: center
  align-items: center
  overflow: hidden
  position: relative
  min-height: calc(100vh - 130px)
  user-select: none

  &-card
    background: $primary
    color: $white
    border-radius: $border-radius
    box-shadow: $boxShadow
    padding: 40px
    width: 600px
    margin: 20px
    overflow: hidden
    text-align: center
    border-radius: $border-radius
    background: url('~assets/img/bg/1.jpg') no-repeat center center / cover

    h1
      font-size: 140px
      margin-bottom: 20px
      mix-blend-mode: color-dodge

      +mq($until: 500px)
        font-size: 60px

    p
      font-size: 20px
</style>

<script>
import FullPage from '~/components/FullPage'

export default {
  components: {
    FullPage
  }
}
</script>
