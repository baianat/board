<template lang="pug">
div
  FullPage
    .u-text-center
      img(src='~assets/img/welcome.png', srcset='~assets/img/welcome.png 1x, ~assets/img/welcome@2x.png 2x')

      h1 This file can’t be previewed
      p InConsequatUt.jpg · 284.34 KB
      button.button.is-primary Download


</template>

<script>
import FullPage from '~/components/FullPage'
export default {
  layout: 'minimal',
  components: {
    FullPage
  }
}
</script>
