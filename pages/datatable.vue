<template lang="pug">
div
  h1 DataTable
  p For docs visit #[a(href="https://xaksis.github.io/vue-good-table" target="_blank") #[code Vue Good Table]]

  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        VueGoodTable(:columns="basic.columns" :rows="basic.rows"    styleClass="table")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Search
        VueGoodTable(:columns="basic.columns" :rows="basic.rows"  :search-options="{enabled: true}" styleClass="table")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Fixed Header
        VueGoodTable(:columns="basic.columns" :rows="basic.rows" max-height="200px" :fixed-header="true" styleClass="table")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Pagination
        VueGoodTable(:columns="basic.columns" :rows="basic.rows"   :pagination-options="{ enabled: true,   perPage: 3,}" styleClass="table")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Column Filter
        VueGoodTable(:columns="filter.columns" :rows="filter.rows" styleClass="table")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Checkbox Table
        VueGoodTable(:columns="basic.columns" :rows="basic.rows"    :select-options="{ enabled: true }" styleClass="table")
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Rtl
        VueGoodTable(:columns="basic.columns" :rows="basic.rows" :rtl="true" styleClass="table")
</template>

<script>
export default {
  head() {
    return {
      title: 'DataTable'
    }
  },
  data() {
    return {
      basic: {
        columns: [
          {
            label: 'Name',
            field: 'name'
          },
          {
            label: 'Age',
            field: 'age',
            type: 'number'
          },
          {
            label: 'Created On',
            field: 'createdAt',
            type: 'date',
            dateInputFormat: 'YYYY-MM-DD',
            dateOutputFormat: 'MMM Do YY'
          },
          {
            label: 'Percent',
            field: 'score',
            type: 'percentage'
          }
        ],
        rows: [
          {
            id: 1,
            name: 'John',
            age: 20,
            createdAt: '201-10-31:9: 35 am',
            score: 0.223343
          },
          {
            id: 2,
            name: 'Jane',
            age: 24,
            createdAt: '2011-10-31',
            score: 0.63343
          },
          {
            id: 3,
            name: 'Susan',
            age: 16,
            createdAt: '2011-10-30',
            score: 0.01343
          },
          {
            id: 4,
            name: 'Chris',
            age: 55,
            createdAt: '2011-10-11',
            score: 0.08343
          },
          {
            id: 5,
            name: 'Dan',
            age: 40,
            createdAt: '2011-10-21',
            score: 0.03143
          },
          {
            id: 6,
            name: 'John',
            age: 20,
            createdAt: '2011-10-31',
            score: 0.0243
          }
        ]
      },
      filter: {
        columns: [
          {
            label: 'Name',
            field: 'name'
          },
          {
            label: 'Age',
            field: 'age',
            type: 'number'
          },
          {
            label: 'Created On',
            field: 'createdAt',
            type: 'date',
            dateInputFormat: 'YYYY-MM-DD',
            dateOutputFormat: 'MMM Do YY'
          },
          {
            label: 'Status',
            field: 'status',
            filterOptions: {
              enabled: true, // enable filter for this column
              filterDropdownItems: ['Approved', 'Waiting', 'Closed']
            }
          }
        ],
        rows: [
          {
            id: 1,
            name: 'John',
            age: 20,
            createdAt: '201-10-31:9: 35 am',
            status: 'Approved'
          },
          {
            id: 2,
            name: 'Jane',
            age: 24,
            createdAt: '2011-10-31',
            status: 'Waiting'
          },
          {
            id: 3,
            name: 'Susan',
            age: 16,
            createdAt: '2011-10-30',
            status: 'Closed'
          },
          {
            id: 4,
            name: 'Chris',
            age: 55,
            createdAt: '2011-10-11',
            status: 'Waiting'
          },
          {
            id: 5,
            name: 'Dan',
            age: 40,
            createdAt: '2011-10-21',
            status: 'Closed'
          },
          {
            id: 6,
            name: 'John',
            age: 20,
            createdAt: '2011-10-31',
            status: 'Approved'
          }
        ]
      }
    }
  }
}
</script>
