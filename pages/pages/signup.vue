<template lang="pug">
div
  FullPage.is-2.is-half
    div
      AppIcon(name="logo")
      p An interface for freelancer to better man age their work and clients. Created with Dashboard UI Kit
    div
      h1 Sign Up
      label.input-label Name
      input(type="text" class="input")
      label.input-label Email Address
      input(type="email" class="input")
      label.input-label Password
      input(type="password" class="input")
      label.input-label Confirm password
      input(type="password" class="input")
      button.button.is-block.is-primary.is-rounded Sign up
      nuxt-link.button.is-block.is-clean(to="/pages/login") Have an account? login

</template>


<script>
import FullPage from '~/components/FullPage'
export default {
  layout: 'minimal',
  head() {
    return {
      title: 'Sign up'
    }
  },
  components: {
    FullPage
  }
}
</script>
