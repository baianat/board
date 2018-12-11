<template lang="pug">
div
  h1 Guide
  button.button.is-primary(@click.prevent.stop="guide") Start Guide
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        form.form
          .field
            label.field-label Email
            input.input#input1(type='email', placeholder='Enter email')
            small.field-text We'll never share your email with anyone else.
          .field
            label.field-label Password
            input.input#input2(type='password', placeholder='Enter password')
          .field
            label.checkbox#input3
              input.checkbox-input(type='checkbox')
              span.checkbox-label I agree to the Terms and Conditions
          .field
            button.button#button(@click.prevent) Submit



</template>


<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
const steps = [
  {
    element: '#input1',
    popover: {
      title: 'Email',
      description: 'Write you email here.',
      position: 'bottom'
    }
  },
  {
    element: '#input2',
    popover: {
      title: 'Password',
      description: 'Write your password here.',
      position: 'bottom'
    }
  },
  {
    element: '#input3',
    popover: {
      title: 'Terms',
      description: 'You must agree to our Terms and Conditions',
      position: 'bottom'
    }
  },
  {
    element: '#button',
    popover: {
      title: 'Finish',
      description: 'After complete all fields click submit',
      position: 'bottom'
    }
  }
]
export default {
  head() {
    return {
      title: 'Colors'
    }
  },
  data() {
    return {
      driver: null
    }
  },

  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
