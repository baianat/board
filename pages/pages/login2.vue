<template lang="pug">
div
  FullPage
    h1 Sign In
    label.input-label Email Address
    input(type="email" class="input")
    label.input-label Password
    input(type="password" class="input")
    button.button.is-block.is-primary Sign in
    nuxt-link.button.is-block.is-clean(to="/pages/signup2") Create Account

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
