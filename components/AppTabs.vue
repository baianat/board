<template lang="pug">
div

  ul.tabs(:class="classes")
    li(v-for='tab in tabs', :class="{ 'is-active': tab.isActive }")
      a(@click='selectTab(tab)') #[AppIcon(:name="tab.icon" v-if="tab.icon" :type="tab.iconType")] #[span {{ tab.name }} ]

  .tabs-content
    slot

</template>


<script>
export default {
  name: 'AppTabs',
  props: {
    classes: {
      type: String,
      default: ''
    }
  },

  data() {
    return { tabs: [] }
  },
  created() {
    this.tabs = this.$children
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.href === selectedTab.href
      })
    }
  }
}
</script>
