<template lang="pug">
.modal-container
  .modal-bg(@click="$emit('close')")
  .modal(:class="color")
    button.modal-dismiss(@click="$emit('close')" v-if="dismiss")
      AppIcon(name="close")
    .modal-header(v-if="hasHeaderSlot")
      slot(name="header" tag='h4' class="modal-title")
    .modal-body
      slot
    .modal-footer(v-if="hasFooterSlot")
      slot(name="footer")

</template>

<style lang="stylus">
.modal
  z-index: 2
  box-shadow: $boxShadow
  padding: 4em
  max-width: 600px
  margin: 0 10px

  +mq($until: 'tablet')
    padding: 2em

  &-container
    z-index: 1070

  &-bg
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 0

  &.is-outlined
    background: $white

  &-dismiss
    font-size: 24px

    .icon
      fill: $slategray

    &:hover
      .icon
        fill: $primary
</style>

<script>
export default {
  name: 'AppModal',
  props: {
    dismiss: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    }
  }
}
</script>
