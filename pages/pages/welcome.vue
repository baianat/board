<template lang="pug">
div
  FullPage
    .u-text-center
      img(src='welcome.png', srcset='welcome.png 1x, welcome@2x.png 2x')

      h1 Welcome to Board!
      p Lets go to your profile& team set up, it’s two steps and will take arround a minute
      button.button.is-primary Get started


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
