<template lang="pug">
div
  h1 Blexar Icons
  p To use these icons use components
    br
    code AppIcon(name="icon-name")


  .AppIcons
    .grid.is-ultrawide-2.is-desktop-3.is-tablet-4.is-6.has-space
      .column(v-for="i , key in allIcons")
        .AppIcons-item
          AppIcon(:name="key" :type="type")
          span {{key}}
  .AppIcons-footer
    button.button.u-mb-0(@click="type = 'filled'" :class="{'is-primary' : type == 'filled'}") #[AppIcon(name="brightness-high")] #[span Filled]
    button.button.u-mb-0(@click="type = 'outlined'" :class="{'is-primary' : type == 'outlined'}") #[AppIcon(name="brightness-low" )]   #[span Outlined]


</template>

<style lang="stylus">
.AppIcons
  padding-bottom: 50px

  &-footer
    position: fixed
    bottom: 0
    left: 0
    right: 0
    background: $white
    text-align: center
    padding: 10px

    +mq($from: 'desktop')
      {$dir-start}: 300px

  &-item
    font-size: 12px
    // box-shadow: $boxShadow
    display: flex
    align-items: center
    // padding: 10px
    border-radius: $border-radius

    .icon
      font-size: 24px
      margin-right: 15px
</style>


<script>
import icons from '~/assets/data/icons.json'
export default {
  head() {
    return {
      title: 'Icons'
    }
  },
  data: () => ({
    allIcons: icons,
    type: 'filled'
  })
}
</script>
