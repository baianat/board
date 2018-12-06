<template lang="pug">
div
  h1 Tables
  .grid.is-tablet-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic Tables
        table.table
          thead
            tr
              th #
              th Name
              th phone
              th City
          tbody
            tr(v-for="user , idx in users")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Striped
        table.table.is-striped
          thead
            tr
              th #
              th Name
              th phone
              th City
          tbody
            tr(v-for="user , idx in users")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Bordered
        table.table.is-bordered
          thead
            tr
              th #
              th Name
              th phone
              th City
          tbody
            tr(v-for="user , idx in users")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Clean
        table.table.is-clean
          thead
            tr
              th #
              th Name
              th phone
              th City
          tbody
            tr(v-for="user , idx in users")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Hoverable
        table.table.is-hoverable
          thead
            tr
              th #
              th Name
              th phone
              th City
          tbody
            tr(v-for="user , idx in users")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Row States
        table.table
          thead
            tr
              th #
              th Name
              th phone
              th City
          tbody
            tr(v-for="user , idx in users" :class="{'is-primary': idx == 1}")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Center
        table.table.is-center
          thead
            tr
              th #
              th Name
              th phone
              th City
          tbody
            tr(v-for="user , idx in users")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Top
        table.table.is-top
          thead
            tr
              th #
              th Name
              th phone
              th City
          tbody
            tr(v-for="user , idx in users")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Middle
        table.table.is-middle
          thead
            tr
              th #
              th Name
              th phone
              th City
          tbody
            tr(v-for="user , idx in users")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Bottom
        table.table.is-bottom
          thead
            tr
              th #
              th Name
              th phone
              th City
          tbody
            tr(v-for="user , idx in users")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Responsive
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
            tbody
              tr(v-for="user , idx in users")
                td {{idx}}
                td {{user.name}}
                td {{user.phone}}
                td {{user.address.city}}
                td {{user.address.state}}
                td {{user.address.country}}
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Collapse in mobile
        table.table.is-mobile-colapsed
          thead
            tr
              th #
              th Name
              th phone
              th City
              th State
              th Country
          tbody
            tr(v-for="user , idx in users")
              td {{idx}}
              td {{user.name}}
              td {{user.phone}}
              td {{user.address.city}}
              td {{user.address.state}}
              td {{user.address.country}}

  h2 Real example
  .table-responsive
    table.table.is-clean
      thead
        tr
          th #
          th User
          th phone
          th City
          th State
          th Country
          th Job
          th Zip Code
          th
      tbody
        tr(v-for="user , idx in users2")
          td {{idx}}
          td
            .u-flex-center
              figure.avatar.is-inline.is-tiny
                img(:src='user.avatar', :alt='user.name')
              .u-font-bold {{user.name}}
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
      title: 'Tables'
    }
  },
  data: () => ({
    users: getUser(4),
    users2: getUser(10),
    colors: colors
  })
}
</script>
