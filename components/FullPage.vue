<template lang="pug">
.FullPage
  .FullPage-card
    slot

</template>

<style lang="stylus">
.FullPage
  background: url('~assets/img/bg/1.jpg') no-repeat center center / cover
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center

  &.is-2
    background: url('~assets/img/bg/2.png') no-repeat center center / cover

  &.is-half
    .FullPage-card
      padding: 0
      display: flex
      width: 900px

      +mq($until: 900px)
        width: 100%

      +mq($until: 600px)
        display: block

      >div
        flex: 0 0 50%
        width: 50%
        padding: 40px

        +mq($until: 600px)
          width: 100%

        &:first-child
          color: $white
          background: url('~assets/img/bg/3.jpg') no-repeat center center / cover
          display: flex
          flex-direction: column
          justify-content: center

          .icon-logo
            fill: $white
            width: 180px
            height: 52px
            margin-bottom: 20px

  &-card
    background: $white
    border-radius: $border-radius
    box-shadow: $boxShadow
    padding: 40px
    width: 600px
    margin: 20px
    overflow: hidden

    +mq($until: 600px)
      width: 100%
</style>

<script>
export default {
  name: 'FullPage'
}
</script>
