<template lang="pug">
div
  FullPage.is-2.is-half
    div
      AppIcon(name="logo")
      p An interface for freelancer to better man age their work and clients. Created with Dashboard UI Kit
    div
      h1 Sign In
      label.input-label Email Address
      input(type="email" class="input")
      label.input-label Password
      input(type="password" class="input")
      button.button.is-block.is-primary Sign in
      nuxt-link.button.is-block.is-clean(to="/pages/signup") Create Account

</template>

<script>
import FullPage from '~/components/FullPage'
export default {
  layout: 'minimal',
  head() {
    return {
      title: 'Login'
    }
  },
  components: {
    FullPage
  }
}
</script>
