<template lang="pug">
div
  h1 Users


  .table-responsive
    table.table
      thead
        tr
          th #
          th Name
          th phone
          th City
          th State
          th Country
          th Job
          th Zip Code
          th
      tbody
        tr(v-for="user , idx in users")
          td {{idx}}
          td {{user.name}}
          td {{user.phone}}
          td {{user.address.city}}
          td {{user.address.state}}
          td {{user.address.country}}
          td #[label.label.is-small(:class="colors[Math.floor((Math.random() * 8) + 0)]") {{user.jobTitle}}]
          td {{user.address.zipcode}}
          td
            AppDropdown(class="is-right")
              button(slot="trigger" class="button is-primary is-small u-mb-0") #[AppIcon(name="more-vert")]
              a.dropdown-item(href='#0') Rename
              a.dropdown-item(href='#0') Move
              a.dropdown-item(href='#0') Delete
</template>


<script>
import { getUser } from '~/assets/data/user'
import colors from '~/assets/data/colors'
export default {
  head() {
    return {
      title: 'Users'
    }
  },
  data: () => ({
    colors: colors,
    users: getUser(10)
  })
}
</script>
