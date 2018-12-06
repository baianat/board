<template lang="pug">
div
  h1 Validation
  p We use #[a(href="https://baianat.github.io/vee-validate/" target="blank") #[code VeeValidate]] for validations
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        form.form
          .field
            label.field-label Name
            input.input(v-validate="'required'" name="Name" type="text"  placeholder='Enter your name' :class="{'is-danger': errors.has('Name')}")
            span.field-text.is-danger(v-if="errors.has('Name')") {{ errors.first('Name') }}
          .field
            label.field-label Email
            input.input(v-validate="'required|email'" name="Email" type="text"  placeholder='Enter your email' :class="{'is-danger': errors.has('Email')}")
            span.field-text.is-danger(v-if="errors.has('Email')") {{ errors.first('Email') }}
          .field
            label.field-label Url
            input.input(v-validate="'required|url:require_protocol'" name="Url" type="text"  placeholder='Enter your Url' :class="{'is-danger': errors.has('Url')}")
            span.field-text.is-danger(v-if="errors.has('Url')") {{ errors.first('Url') }}
          .field
            label.field-label Digits
            input.input(v-validate="'required|numeric'" name="Digits" type="text"  placeholder='Enter your digits' :class="{'is-danger': errors.has('Digits')}")
            span.field-text.is-danger(v-if="errors.has('Digits')") {{ errors.first('Digits') }}
          .field
            label.field-label Credit card
            input.input(v-validate="'required|credit_card'" name="CreditCard" type="text"  placeholder='Enter your credit card' :class="{'is-danger': errors.has('CreditCard')}")
            span.field-text.is-danger(v-if="errors.has('CreditCard')") {{ errors.first('CreditCard') }}



    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Scoped Form
        form.form(@submit.prevent="validateForm('form-1')" data-vv-scope="form-1")
          .field
            label.field-label Name
            input.input( v-validate="'required'" name="Name" type="text" placeholder="Enter your name" :class="{'is-danger': errors.has('form-1.Name')}")
            span.field-text.is-danger(v-if="errors.has('form-1.Name')") {{ errors.first('form-1.Name') }}

          .field
            label.field-label Email
            input.input( v-validate="'required|email'" name="Email" type="text" placeholder="Enter your email" :class="{'is-danger': errors.has('form-1.Email')}")
            span.field-text.is-danger(v-if="errors.has('form-1.Email')") {{ errors.first('form-1.Email') }}

          .field
            label.field-label URL
            input.input( v-validate="'required|url:require_protocol'" name="Url" type="text" placeholder="Enter your URL" :class="{'is-danger': errors.has('form-1.Url')}")
            span.field-text.is-danger(v-if="errors.has('form-1.Url')") {{ errors.first('form-1.Url') }}

          .field
            label.field-label Digits
            input.input( v-validate="'required|numeric'" name="Digits" type="text" placeholder="Enter your Digits" :class="{'is-danger': errors.has('form-1.Digits')}")
            span.field-text.is-danger(v-if="errors.has('form-1.Digits')") {{ errors.first('form-1.Digits') }}

          .field
            label.field-label Credit card
            input.input( v-validate="'required|credit_card'" name="CreditCard" type="text" placeholder="Enter your CreditCard" :class="{'is-danger': errors.has('form-1.CreditCard')}")
            span.field-text.is-danger(v-if="errors.has('form-1.CreditCard')") {{ errors.first('form-1.CreditCard') }}

          button.button.is-primary(type="submit") Validate

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Checkbox & Radio
        form.form(@submit.prevent="validateForm('form-2')" data-vv-scope="form-2")

          .field
            label.field-label  Radio
            label.radio.is-inline
              input.radio-input(type='radio' value='1' v-validate="'required|included:1,2'" name="RadioGroup")
              span.radio-label Coding
            label.radio.is-inline
              input.radio-input(type='radio' value='2' name="RadioGroup")
              span.radio-label Music
            label.radio.is-inline
              input.radio-input(type='radio' value='3' name="RadioGroup")
              span.radio-label Gaming

            span.field-text.is-danger(v-if="errors.has('form-2.RadioGroup')") {{ errors.first('form-2.RadioGroup') }}

          .field
            label.field-label Checkbox
            label.checkbox
              input.checkbox-input(type='checkbox' v-validate="'required'" name="Checkbox")
              span.checkbox-label Tick me
            span.field-text.is-danger(v-if="errors.has('form-2.Checkbox')") {{ errors.first('form-2.Checkbox') }}




          button.button.is-primary(type="submit") Validate

</template>

<script>
export default {
  head() {
    return {
      title: 'Validation'
    }
  },
  data: () => ({}),
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!')
        }
      })
    }
  }
}
</script>
