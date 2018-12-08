<template lang="pug">
div
  h1 Widgets
  .grid.is-desktop-4.has-space
    .column
      AppCard.is-full.is-fit-body.is-light
        template(slot="header")
          h4.AppCard-title  Sales
          span.u-color-primary $351,612
        VueApexCharts(type="area" height="200"  :options="spark4.options"  :series="spark4.series")
    .column
      AppCard.is-full.is-fit-body.is-light
        template(slot="header")
          h4.AppCard-title  Expenses
          span.u-color-primary $479,652
        VueApexCharts(type="area" height="200"  :options="spark5.options"  :series="spark5.series")
    .column
      AppCard.is-full.is-fit-body.is-light
        template(slot="header")
          h4.AppCard-title  Profits
          span.u-color-primary $964,371
        VueApexCharts(type="area" height="200"  :options="spark6.options"  :series="spark6.series")

  AppCard.u-mt-tiny
    .grid.is-widescreen-4
      .column
        .AppWidget1
          .AppWidget1-item
            .AppWidget1-item-header
              h5 Member Profit
              span.u-color-slategray Average Weekly Profit
            .AppWidget1-item-footer
              span.h4.u-color-success +$19,600
          .AppWidget1-item
            .AppWidget1-item-header
              h5 Orders
              span.u-color-slategray Weekly Customer Orders

            .AppWidget1-item-footer
              span.h4.u-color-warning +1,300
          .AppWidget1-item
            .AppWidget1-item-header
              h5 Issue Reports
              span.u-color-slategray System bugs and issues
            .AppWidget1-item-footer
              span.h4.u-color-danger -27,49%
      .column
        .AppWidget1
          .AppWidget1-item
            .AppWidget1-item-header
              h5 IPO Margin
              span.u-color-slategray Average Weekly Profit
            .AppWidget1-item-footer
              span.h4.u-color-primary +36%
          .AppWidget1-item
            .AppWidget1-item-header
              h5 Payments
              span.u-color-slategray Yearly Expenses

            .AppWidget1-item-footer
              span.h4.u-color-secondary +225,700
          .AppWidget1-item
            .AppWidget1-item-header
              h5 Logistics
              span.u-color-slategray Overall Regional Logistics
            .AppWidget1-item-footer
              span.h4.u-color-warning -11,34%
      .column
        .AppWidget1
          .AppWidget1-item
            .AppWidget1-item-header
              h5 Orders
              span.u-color-slategray Average Weekly Profit
            .AppWidget1-item-footer
              span.h4.u-color-danger +21%
          .AppWidget1-item
            .AppWidget1-item-header
              h5 Transactions
              span.u-color-slategray Daily Transaction Increase

            .AppWidget1-item-footer
              span.h4.u-color-success +90%
          .AppWidget1-item
            .AppWidget1-item-header
              h5 Revenue
              span.u-color-slategray Overall Revenue Increase
            .AppWidget1-item-footer
              span.h4.u-color-primary +50%


  AppCard.u-mt-large
    .grid.is-widescreen-4.is-large.has-space
      .column
        .AppWidget2
          h5 Daily Sales
          span.u-color-slategray Overall Revenue Increase
          VueApexCharts(type="bar" height="300" :options="columnChart.options" :series="columnChart.series")
      .column
        .AppWidget2
          h5 Profit Share
          span.u-color-slategray Profit Share between customers
          VueApexCharts(type="donut" height="300" :options="donutChart.options" :series="donutChart.series")
      .column
        .AppWidget2
          h5 Revenue Change
          span.u-color-slategray Revenue change breakdown by cities
          VueApexCharts(type="pie" height="300" :options="donutChart.options" :series="donutChart.series")



  AppCard.u-mt-large
    .grid.is-widescreen-4.is-large.has-space
      .column
        .AppWidget1
          .AppWidget1-item
            .AppWidget1-item-header
              h4 Member Profit
              span.u-color-slategray Average Weekly Profit
            .AppWidget1-item-footer
              span.h4.u-color-success +$19,600

        .progress
          .progress-bar(style='width: 30%;' class="is-success")
          .progress-icon(class="is-success")
            AppIcon(name="signal" type="outlined")

      .column
        .AppWidget1
          .AppWidget1-item
            .AppWidget1-item-header
              h4 IPO Margin
              span.u-color-slategray Average Weekly Profit
            .AppWidget1-item-footer
              span.h4.u-color-primary +36%
        .progress
          .progress-bar(style='width: 60%;' class="is-primary")
          .progress-icon(class="is-primary")
            AppIcon(name="show-chart" type="outlined")
      .column
        .AppWidget1
          .AppWidget1-item
            .AppWidget1-item-header
              h4 Orders
              span.u-color-slategray Average Weekly Profit
            .AppWidget1-item-footer
              span.h4.u-color-danger +21%
        .progress
          .progress-bar(style='width: 90%;' class="is-danger")
          .progress-icon(class="is-danger")
            AppIcon(name="bubble-chart" type="outlined")

  AppCard.u-mt-large
    .grid.is-widescreen-4.is-large.has-space
      .column
        .AppWidget2
          h4 $424,652
          span.u-color-slategray Sales

          VueApexCharts(type="area" height="200"  :options="spark1.options"  :series="spark1.series")
      .column
        .AppWidget2
          h4 $235,312
          span.u-color-slategray Expenses
          VueApexCharts(type="area" height="200" :options="spark2.options"  :series="spark2.series")
      .column
        .AppWidget2
          h4 $135,965
          span.u-color-slategray Profits
          VueApexCharts(type="area" height="200" :options="spark3.options"  :series="spark3.series")


  .grid.is-widescreen-3.is-desktop-6.has-space
    .column
      AppCard.is-full.is-primary.is-fit-body
        template(slot="header")
          h4.AppCard-title  NEW Projects
          h2.u-m-0 {{Math.floor((Math.random() * 200) + 50)}}
        VueApexCharts(type="area" height="160"  :options="spark7.options"  :series="spark7.series")
    .column
      AppCard.is-full.is-secondary.is-fit-body
        template(slot="header")
          h4.AppCard-title  NEW CUSTOMERS
          h2.u-m-0 {{Math.floor((Math.random() * 200) + 50)}}
        VueApexCharts(type="area" height="160"  :options="spark8.options"  :series="spark8.series")
    .column
      AppCard.is-full.is-success.is-fit-body
        template(slot="header")
          h4.AppCard-title  Team members
          h2.u-m-0 {{Math.floor((Math.random() * 1000) + 550)}}
        VueApexCharts(type="area" height="160"  :options="spark9.options"  :series="spark9.series")
    .column
      AppCard.is-full.is-danger.is-fit-body
        template(slot="header")
          h4.AppCard-title  Total budget
          h2.u-m-0 {{Math.floor((Math.random() * 2200) + 510)}}$
        VueApexCharts(type="area" height="160"  :options="spark10.options"  :series="spark10.series")
  .grid.is-widescreen-4.is-desktop-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  New Users
          AppDropdown(class="is-right")
            button(slot="trigger" class="button is-small u-mb-0") #[AppIcon(name="more-vert")]
            a.dropdown-item(href='#0') Rename
            a.dropdown-item(href='#0') Move
            a.dropdown-item(href='#0') Delete
        .AppWidget3
          .AppWidget3-item(v-for="(user , idx) in users")
            .AppWidget3-item-header
              figure.avatar
                img(:src="user.avatar", alt='avatar')
                span.avatar-icon(:class="(idx == 1 || idx == 4) ? 'is-success' : 'is-danger'")
            .AppWidget3-item-body
              span.u-font-bold.u-block.u-font-normal {{user.name}}
              span.u-font-small {{user.jobTitle}}
            .AppWidget3-item-footer
              span.u-color-slategray.u-font-small {{6*(idx+1)}} min ago
    .column
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
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Authors Profit
          AppDropdown(class="is-right")
            button(slot="trigger" class="button is-secondary is-small u-mb-0") #[AppIcon(name="more-vert")]
            a.dropdown-item(href='#0') Rename
            a.dropdown-item(href='#0') Move
            a.dropdown-item(href='#0') Delete
        .AppWidget3
          .AppWidget3-item(v-for="(user , idx) in users")
            .AppWidget3-item-header
              figure.avatar
                img(:src="user.avatar", alt='avatar')
                span.avatar-icon(:class="(idx == 1 || idx == 4) ? 'is-success' : 'is-danger'")
            .AppWidget3-item-body
              span.u-font-bold.u-block.u-font-normal {{user.name}}
              span.u-font-small {{user.jobTitle}}
            .AppWidget3-item-footer
              span.u-color-secondary.u-font-large.u-font-bold {{600*(idx+1)}}
    .column
      AppCard.is-full.is-primary
        template(slot="header")
          h4.AppCard-title  Announcements
          AppDropdown(class="is-right")
            button(slot="trigger" class="button is-white is-small u-mb-0") #[AppIcon(name="more-vert")]
            a.dropdown-item(href='#0') All
            a.dropdown-item(href='#0') Report
            a.dropdown-item(href='#0') Dismes
        .u-text-center
          figure.avatar
            img(src="users/2.jpg", alt='avatar')
          h5.u-mt-small Anna Dan
          p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel.
    .column
      AppCard.is-full.is-light
        template(slot="header")
          h4.AppCard-title  Sales Stats
        table.table
          thead
            tr
              th Sceduled
              th Count
              th(align="right") Amount
          tbody
            tr(v-for="sales in 3")
              td {{`${Math.floor((Math.random() * 28) + 1)}/${Math.floor((Math.random() * 12) + 1)}/${Math.floor((Math.random() * 20) + 2000)}`}}
              td {{Math.floor((Math.random() * 300) + 10)}}
              td(align="right"): .u-font-bold {{Math.floor((Math.random() * 5000) + 1000)}}$

    .column
      AppCard.is-full.is-warning
        template(slot="header")
          h4.AppCard-title  Announcements
          AppDropdown(class="is-right")
            button(slot="trigger" class="button is-white is-small u-mb-0") #[AppIcon(name="more-vert")]
            a.dropdown-item(href='#0') All
            a.dropdown-item(href='#0') Report
            a.dropdown-item(href='#0') Dismes
        .u-text-center
          figure.avatar.is-black
            span.avatar-initials DH
          h5.u-mt-small Dessie Hobart
          p Pellentesque gravida nulla quis molestie molestie. Nulla porttitor augue sit amet semper aliquet. Vivamus dolor enim, pulvinar non urna ac, auctor sollicitudin tellus. Integer facilisis vel tortor tempus mollis. Pellentesque ullamcorper sem in enim placerat efficitur. Aenean scelerisque tempus felis, ut vulputate felis consectetur vel.


    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Sales Stats
        table.table
          thead
            tr
              th Sceduled
              th Count
              th(align="right") Amount
          tbody
            tr(v-for="sales in 3")
              td {{`${Math.floor((Math.random() * 28) + 1)}/${Math.floor((Math.random() * 12) + 1)}/${Math.floor((Math.random() * 20) + 2000)}`}}
              td {{Math.floor((Math.random() * 300) + 10)}}
              td(align="right")
                VueApexCharts(type="bar" height="50" width="100"  :options="bar1.options"  :series="bar1.series")

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title  Sales Stats
        .progress(v-for="(color , idx) in colors")
          .progress-bar(:style='`width: ${idx+1}0%;`' :class="color")
            span {{(idx+1)*8}}%
          .progress-icon(:class="color")
            AppIcon(:name="Object.keys(icons)[Math.floor((Math.random() * 100) + 1)]")

</template>

<style lang="stylus">
</style>


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
      title: 'Widgets'
    }
  },
  data: function() {
    return {
      icons: icons,
      downloads: downloads,
      colors: colors,
      users: getUser(5),
      columnChart: {
        options: {
          grid: {
            show: false
          },
          chart: {
            id: 'testChart',
            id: 'testChart',
            height: 350,
            type: 'bar',
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          colors: ['#2451F2', '#F2248F', '#36D9B0', '#FFCF0D'],
          plotOptions: {
            bar: {
              horizontal: false
            }
          },

          xaxis: {
            categories: [
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct'
            ]
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return '$ ' + val + ' thousands'
              }
            }
          }
        },
        series: [
          {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          },
          {
            name: 'Revenue',
            data: [76, 85, 41, 98, 87, 44, 91, 81, 94]
          },
          {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }
        ]
      },

      donutChart: {
        options: {
          chart: {
            id: 'donutChart'
          },
          dataLabels: {
            dropShadow: {
              enabled: false
            }
          },
          labels: ['Blue', 'Red', 'Green', 'Yellow'],
          colors: ['#2451F2', '#F2248F', '#36D9B0', '#FFCF0D']
        },
        series: [11, 32, 45, 32]
      },
      pieChart: {
        options: {
          chart: {
            id: 'pieChart'
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
        },
        series: [44, 55, 13, 43, 22]
      },

      spark1: {
        options: {
          chart: {
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
            opacity: 0.3,
            gradient: {
              enabled: false
            }
          },
          yaxis: {
            min: 0
          },
          colors: ['#2451F2']
        },
        series: [
          {
            name: 'Sales',
            data: this.randomizeArray(sparklineData)
          }
        ]
      },
      spark2: {
        options: {
          chart: {
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
            opacity: 0.3,
            gradient: {
              enabled: false
            }
          },
          yaxis: {
            min: 0
          },
          colors: ['#36D9B0']
        },
        series: [
          {
            name: 'Expenses',
            data: this.randomizeArray(sparklineData)
          }
        ]
      },
      spark3: {
        options: {
          chart: {
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
            opacity: 0.3,
            gradient: {
              enabled: false
            }
          },
          yaxis: {
            min: 0
          },
          colors: ['#FFCF0D']
        },
        series: [
          {
            name: 'Profits',
            data: this.randomizeArray(sparklineData)
          }
        ]
      },
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
          colors: ['#dae4f1']
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
          colors: ['#dae4f1']
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
      },

      spark7: {
        options: {
          chart: {
            id: 'sparkline7',
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
          colors: ['#ffffff']
        },
        series: [
          {
            name: 'Sales',
            data: this.randomizeArray(sparklineData)
          }
        ]
      },
      spark8: {
        options: {
          chart: {
            id: 'sparkline8',
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
          colors: ['#ffffff']
        },
        series: [
          {
            name: 'Sales',
            data: this.randomizeArray(sparklineData)
          }
        ]
      },
      spark9: {
        options: {
          chart: {
            id: 'sparkline9',
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
          colors: ['#ffffff']
        },
        series: [
          {
            name: 'Sales',
            data: this.randomizeArray(sparklineData)
          }
        ]
      },
      spark10: {
        options: {
          chart: {
            id: 'sparkline10',
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
          colors: ['#ffffff']
        },
        series: [
          {
            name: 'Sales',
            data: this.randomizeArray(sparklineData)
          }
        ]
      },
      bar1: {
        options: {
          chart: {
            type: 'bar',
            width: 100,
            height: 35,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            bar: {
              columnWidth: '80%'
            }
          },
          colors: ['#2451F2'],
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          xaxis: {
            crosshairs: {
              width: 1
            }
          },
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function(seriesName) {
                  return ''
                }
              }
            },
            marker: {
              show: false
            }
          }
        },
        series: [
          {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
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
