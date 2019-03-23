<template lang="pug">
div(v-if="isActive")
  slot
</template>

<script>
export default {
  name: 'AppTabsItem',

  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconType: {
      type: String,
      default: 'outlined'
    }
  },

  data() {
    return {
      isActive: false
    }
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-')
    }
  },

  mounted() {
    this.isActive = this.selected
  }
}
</script>
