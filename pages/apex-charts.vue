<template lang="pug">
div
  h1 Apex Charts
  p For docs visit #[a(href="https://github.com/apexcharts/vue-apexcharts" target="_blank") #[code VueApexCharts]]

  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Area Chart
        VueApexCharts(type="area" :options="areaChart.options" :series="areaChart.series")

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Line Chart
        VueApexCharts(type="line" :options="lineChart.options" :series="lineChart.series")

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Bar Chart
        VueApexCharts(type="bar" :options="barChart.options" :series="barChart.series")

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Column Chart
        VueApexCharts(type="bar" :options="columnChart.options" :series="columnChart.series")

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Mixed Chart
        VueApexCharts(type="line" :options="mixedChart.options" :series="mixedChart.series")

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Donut Chart
        div(style="max-width:600px;")
          VueApexCharts(type="donut"  :options="donutChart.options" :series="donutChart.series")

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title RadialBar Chart
        div(style="max-width:600px;")
          VueApexCharts(type="radialBar" :options="radialBarChart.options" :series="radialBarChart.series")

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Bubble Chart
        VueApexCharts(type="bubble" :options="bubbleChart.options" :series="bubbleChart.series")

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Scatter Chart
        VueApexCharts(type="scatter" :options="scatterChart.options" :series="scatterChart.series")

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Heatmap Chart
        VueApexCharts(type="heatmap" :options="heatmapChart.options" :series="heatmapChart.series")

</template>

<script>
export default {
  head() {
    return {
      title: 'Apex Charts'
    }
  },
  data: function() {
    return {
      areaChart: {
        options: {
          chart: {
            id: 'areaChart'
          },
          colors: ['#2451F2', '#36D9B0'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
          },
          tooltip: {
            fixed: {
              enabled: false,
              position: 'topRight'
            }
          }
        },
        series: [
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          },
          {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }
        ]
      },

      lineChart: {
        options: {
          chart: {
            id: 'lineChart'
          },
          colors: ['#2451F2', '#36D9B0'],
          xaxis: {
            type: 'datetime',
            categories: [
              '01/01/2003',
              '02/01/2003',
              '03/01/2003',
              '04/01/2003',
              '05/01/2003',
              '06/01/2003',
              '07/01/2003',
              '08/01/2003'
            ]
          }
        },
        series: [
          {
            name: 'Series A',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: 'Series B',
            data: [23, 43, 54, 12, 44, 52, 32, 11]
          }
        ]
      },

      barChart: {
        options: {
          chart: {
            id: 'barChart'
          },
          colors: ['#2451F2'],
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      },

      columnChart: {
        options: {
          chart: {
            id: 'testChart'
          },
          colors: ['#2451F2', '#36D9B0', '#FFCF0D'],
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: 'rounded',
              columnWidth: '55%'
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
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

      mixedChart: {
        options: {
          chart: {
            id: 'mixedChart',
            stacked: false
          },
          colors: ['#2451F2', '#36D9B0', '#FFCF0D'],
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
          },
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          },

          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: 'light',
              type: 'vertical',
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100]
            }
          },
          labels: [
            '01/01/2003',
            '02/01/2003',
            '03/01/2003',
            '04/01/2003',
            '05/01/2003',
            '06/01/2003',
            '07/01/2003',
            '08/01/2003',
            '09/01/2003',
            '10/01/2003',
            '11/01/2003'
          ],
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            title: {
              text: 'Points'
            },
            min: 0
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function(y) {
                if (typeof y !== 'undefined') {
                  return y.toFixed(0) + ' points'
                }
                return y
              }
            }
          }
        },
        series: [
          {
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
          },
          {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
          },
          {
            name: 'TEAM C',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
          }
        ]
      },

      donutChart: {
        options: {
          chart: {
            id: 'donutChart'
          },
          labels: ['Blue', 'Red', 'Green', 'Yellow'],
          colors: ['#2451F2', '#F2248F', '#36D9B0', '#FFCF0D']
        },
        series: [11, 32, 45, 32]
      },

      radialBarChart: {
        options: {
          colors: ['#2451F2'],
          chart: {
            id: 'radialBarChart'
          },
          labels: ['Percent']
        },
        series: [81]
      },

      bubbleChart: {
        options: {
          chart: {
            id: 'bubbleChart'
          },
          colors: ['#F22435'],
          dataLabels: {
            enabled: false
          },
          fill: {
            opacity: 0.8,
            gradient: {
              enabled: false
            }
          },
          title: {
            text: 'Simple Bubble Chart'
          },
          xaxis: {
            tickAmount: 12,
            type: 'category'
          },
          yaxis: {
            max: 70
          }
        },
        series: [
          {
            name: 'Bubble1',
            data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Bubble2',
            data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Bubble3',
            data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Bubble4',
            data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          }
        ]
      },

      scatterChart: {
        options: {
          chart: {
            id: 'scatterChart',
            zoom: {
              enabled: false
            }
          },
          colors: ['#2451F2', '#F2248F', '#36D9B0', '#FFCF0D'],
          xaxis: {
            tickAmount: 10
          },
          yaxis: {
            tickAmount: 7
          }
        },
        series: [
          {
            name: 'SAMPLE A',
            data: [
              [16.4, 5.4],
              [21.7, 2],
              [25.4, 3],
              [19, 2],
              [10.9, 1],
              [13.6, 3.2],
              [10.9, 7.4],
              [10.9, 0],
              [10.9, 8.2],
              [16.4, 0],
              [16.4, 1.8],
              [13.6, 0.3],
              [13.6, 0],
              [29.9, 0],
              [27.1, 2.3],
              [16.4, 0],
              [13.6, 3.7],
              [10.9, 5.2],
              [16.4, 6.5],
              [10.9, 0],
              [24.5, 7.1],
              [10.9, 0],
              [8.1, 4.7],
              [19, 0],
              [21.7, 1.8],
              [27.1, 0],
              [24.5, 0],
              [27.1, 0],
              [29.9, 1.5],
              [27.1, 0.8],
              [22.1, 2]
            ]
          },
          {
            name: 'SAMPLE B',
            data: [
              [6.4, 13.4],
              [1.7, 11],
              [5.4, 8],
              [9, 17],
              [1.9, 4],
              [3.6, 12.2],
              [1.9, 14.4],
              [1.9, 9],
              [1.9, 13.2],
              [1.4, 7],
              [6.4, 8.8],
              [3.6, 4.3],
              [1.6, 10],
              [9.9, 2],
              [7.1, 15],
              [1.4, 0],
              [3.6, 13.7],
              [1.9, 15.2],
              [6.4, 16.5],
              [0.9, 10],
              [4.5, 17.1],
              [10.9, 10],
              [0.1, 14.7],
              [9, 10],
              [12.7, 11.8],
              [2.1, 10],
              [2.5, 10],
              [27.1, 10],
              [2.9, 11.5],
              [7.1, 10.8],
              [2.1, 12]
            ]
          },
          {
            name: 'SAMPLE C',
            data: [
              [21.7, 3],
              [23.6, 3.5],
              [24.6, 3],
              [29.9, 3],
              [21.7, 20],
              [23, 2],
              [10.9, 3],
              [28, 4],
              [27.1, 0.3],
              [16.4, 4],
              [13.6, 0],
              [19, 5],
              [22.4, 3],
              [24.5, 3],
              [32.6, 3],
              [27.1, 4],
              [29.6, 6],
              [31.6, 8],
              [21.6, 5],
              [20.9, 4],
              [22.4, 0],
              [32.6, 10.3],
              [29.7, 20.8],
              [24.5, 0.8],
              [21.4, 0],
              [21.7, 6.9],
              [28.6, 7.7],
              [15.4, 0],
              [18.1, 0],
              [33.4, 0],
              [16.4, 0]
            ]
          }
        ]
      },

      heatmapChart: {
        options: {
          chart: {
            id: 'heatmapChart'
          },

          dataLabels: {
            enabled: false
          },
          colors: ['#FFCF0D'],

          xaxis: {
            type: 'category'
          },
          title: {
            text: 'HeatMap Chart (Single color)'
          }
        },
        series: [
          {
            name: 'Metric1',
            data: this.generateData2(20, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric2',
            data: this.generateData2(20, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric3',
            data: this.generateData2(20, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric4',
            data: this.generateData2(20, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric5',
            data: this.generateData2(20, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric6',
            data: this.generateData2(20, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric7',
            data: this.generateData2(20, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric8',
            data: this.generateData2(20, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric9',
            data: this.generateData2(20, {
              min: 0,
              max: 90
            })
          }
        ]
      },

      testChart: {
        options: {
          chart: {
            id: 'testChart'
          }
        },
        series: []
      }
    }
  },
  methods: {
    generateData(baseval, count, yrange) {
      var i = 0
      var series = []
      while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

        series.push([x, y, z])
        baseval += 86400000
        i++
      }
      return series
    },
    generateData2(count, yrange) {
      var i = 0
      var series = []
      while (i < count) {
        var x = (i + 1).toString()
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

        series.push({
          x: x,
          y: y
        })
        i++
      }
      return series
    }
  }
}
</script>
