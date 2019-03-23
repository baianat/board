<template lang="pug">
div
  h1 Dark version
  .grid.has-space
    .column.is-widescreen-4.is-tablet-6
      AppCard.is-full.is-fit-body.is-light
        template(slot="header")
          h4.AppCard-title  Sales
          span.u-color-secondary.u-font-bold $351,612
        VueApexCharts(type="area" height="200"  :options="spark4.options"  :series="spark4.series")
    .column.is-widescreen-4.is-tablet-6
      AppCard.is-full.is-fit-body.is-light
        template(slot="header")
          h4.AppCard-title  Expenses
          span.u-color-primary.u-font-bold $479,652
        VueApexCharts(type="area" height="200"  :options="spark5.options"  :series="spark5.series")
    .column.is-widescreen-4
      AppCard.is-full.is-fit-body.is-light
        template(slot="header")
          h4.AppCard-title  Profits
          span.u-color-success.u-font-bold $964,371
        VueApexCharts(type="area" height="200"  :options="spark6.options"  :series="spark6.series")

  .u-mt-small
    AppCard
      .grid.is-widescreen-4.is-large.has-space
        .column
          .AppWidget1
            .AppWidget1-item
              .AppWidget1-item-header
                h4 Member Profit
                span.u-color-slategray Average Weekly Profit
              .AppWidget1-item-footer
                span.h4.u-color-primary +$19,600
          .progress
            .progress-bar(style='width: 30%;' class="is-primary")
              span 30%
        .column
          .AppWidget1
            .AppWidget1-item
              .AppWidget1-item-header
                h4 Orders
                span.u-color-slategray Average Weekly Profit
              .AppWidget1-item-footer
                span.h4.u-color-success +21%
          .progress
            .progress-bar(style='width: 82%;' class="is-success")
              span 82%
        .column
          .AppWidget1
            .AppWidget1-item
              .AppWidget1-item-header
                h4 IPO Margin
                span.u-color-slategray Average Weekly Profit
              .AppWidget1-item-footer
                span.h4.u-color-secondary +36%
          .progress
            .progress-bar(style='width: 66%;' class="is-secondary")
              span 66%

  .u-mt-small
    .grid.has-space.is-tiny
      .column.is-ultrawide-2.is-widescreen-4.is-tablet-6(v-for="i in 6")
        AppItem(title="Design Works" :img="`https://picsum.photos/600/600?image=${Math.floor((Math.random() * 80) + 1)}`" )
          span.u-font-small.u-color-slategray.u-mt-tiny Gourmet  |  Last Update: 29 Dec 2016
          .u-divider
          div
            .grid.is-tiny.is-6
              .column
                .u-font-small.u-color-slategray 9,680 USD
                .u-font-small.u-color-slategray.u-mt-tiny Budget / Salary
              .column
                .u-font-small.u-color-slategray Late Jan 2017
                .u-font-small.u-color-slategray.u-mt-tiny Deadline
  .u-mt-small
    .grid.has-space.u-mt-tiny
      .column.is-widescreen-4.is-desktop-6
        AppCard.is-full
          template(slot="header")
            h4.AppCard-title  New Users
            AppDropdown(class="is-right")
              button(slot="trigger" class="button is-tiny u-mb-0") #[AppIcon(name="more-vert" classes="is-massive")]
              a.dropdown-item(href='#0') Rename
              a.dropdown-item(href='#0') Move
              a.dropdown-item(href='#0') Delete
          .table-responsive
            table.table.is-clean

              tbody
                tr(v-for="user , idx in users")
                  td
                    .u-flex-center
                      figure.avatar.is-inline.is-tiny
                        img(:src='user.avatar', :alt='user.name')
                      .u-font-bold {{user.name}}
                  td #[label.label.is-tiny(:class="colors[Math.floor((Math.random() * 8) + 0)]") {{user.jobTitle}}]
                  td {{user.address.country}}

      .column.is-widescreen-4.is-desktop-6
        AppCard.is-full.is-primary
          template(slot="header")
            h4.AppCard-title  Announcements
            AppDropdown(class="is-right")
              button(slot="trigger" class="button is-white is-tiny u-mb-0") #[AppIcon(name="more-vert" classes="is-massive")]
              a.dropdown-item(href='#0') All
              a.dropdown-item(href='#0') Report
              a.dropdown-item(href='#0') Dismes
          .u-text-center
            figure.avatar
              img(src="https://randomuser.me/api/portraits/men/81.jpg", alt='avatar')
            h5.u-mt-small Anna Dan
            p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel.
      .column.is-widescreen-4.is-desktop-6
        AppCard.is-full
          template(slot="header")
            h4.AppCard-title  Download Files
            button( class="button is-primary is-small u-mb-0") View all
          .AppWidget3
            .AppWidget3-item(v-for="download in downloads")
              .AppWidget3-item-header
                figure.avatar.is-square(:class="colors[Math.floor((Math.random() * 8) + 0)]")
                  span.avatar-initials: AppIcon(:name="download.icon")
              .AppWidget3-item-body
                span.u-font-bold.u-block.u-font-normal {{download.name}}
                span.u-font-small.u-color-slategray {{download.size}}
              .AppWidget3-item-footer
                button.button.is-clean.is-primary.is-massive: AppIcon(name="download")

</template>

<script>
import { getUser } from '~/assets/data/user'
import colors from '~/assets/data/colors'
import downloads from '~/assets/data/downloads'
import icons from '~/assets/data/icons.json'
let sparklineData = [
  47,
  45,
  54,
  38,
  56,
  24,
  65,
  31,
  37,
  39,
  62,
  51,
  35,
  41,
  35,
  27,
  93,
  53,
  61,
  27,
  54,
  43,
  19,
  46
]
export default {
  head() {
    return {
      title: 'Dashboard',
      htmlAttrs: {
        dark: 'true'
      }
    }
  },
  data: function() {
    return {
      users: getUser(5),
      icons: icons,
      downloads: downloads,
      colors: colors,
      spark4: {
        options: {
          chart: {
            id: 'sparkline4',
            type: 'area',
            height: 160,
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            curve: 'straight'
          },
          fill: {
            opacity: 1
          },

          labels: [...Array(24).keys()].map(n => `2018-09-0${n + 1}`),
          yaxis: {
            min: 0
          },
          xaxis: {
            type: 'datetime'
          },
          colors: ['#F2248F']
        },
        series: [
          {
            name: 'Sales',
            data: this.randomizeArray(sparklineData)
          }
        ]
      },
      spark5: {
        options: {
          chart: {
            id: 'sparkline5',
            type: 'area',
            height: 160,
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            curve: 'straight'
          },
          fill: {
            opacity: 1
          },

          labels: [...Array(24).keys()].map(n => `2018-09-0${n + 1}`),
          yaxis: {
            min: 0
          },
          xaxis: {
            type: 'datetime'
          },
          colors: ['#2451F2']
        },
        series: [
          {
            name: 'Expenses',
            data: this.randomizeArray(sparklineData)
          }
        ]
      },
      spark6: {
        options: {
          chart: {
            id: 'sparkline6',
            type: 'area',
            height: 160,
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            curve: 'straight'
          },
          fill: {
            opacity: 1
          },

          labels: [...Array(24).keys()].map(n => `2018-09-0${n + 1}`),
          yaxis: {
            min: 0
          },
          xaxis: {
            type: 'datetime'
          },
          colors: ['#36D9B0']
        },
        series: [
          {
            name: 'Profits',
            data: this.randomizeArray(sparklineData)
          }
        ]
      }
    }
  },
  methods: {
    randomizeArray: function(arg) {
      var array = arg.slice()
      var currentIndex = array.length,
        temporaryValue,
        randomIndex

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }
  }
}
</script>
