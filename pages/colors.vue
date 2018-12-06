<template lang="pug">
div
  h1 Colors
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Main Theme
        .grid.is-widescreen-2.is-desktop-3.is-mobile-4.has-space
          .column(v-for="color in main")
            .colorer
              svg.colorer-sample(viewBox="0 0 50 50" :style="`fill: ${color.code}`")
                title {{ color.name }}
                polygon(points="25 0 0 25 0 50 25 50 50 25 50 0 25 0")
              h3.colorer-name {{ color.name }}
              h4.colorer-code {{ color.code }}

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Gradient

        .grid.is-widescreen-2.is-desktop-3.is-mobile-4.has-space
          .column(v-for="color in gradient")
            .colorer
              svg.colorer-sample(viewBox="0 0 50 50" :style="`fill: url(#${color.name})`")
                title {{ color.name }}
                polygon(points="25 0 0 25 0 50 25 50 50 25 50 0 25 0")
                linearGradient(:id="color.name" x1="1" y1="0" x2="0" y2="1")
                  stop(offset="0%" :stop-color="color.code[0]")
                  stop(offset="100%" :stop-color="color.code[1]")
              h3.colorer-name {{ color.name }}
              h4.colorer-code {{ color.code }}

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Grayscale

        .grid.is-widescreen-2.is-desktop-3.is-mobile-4.has-space
          .column(v-for="color in grayscale")
            .colorer
              svg.colorer-sample(viewBox="0 0 50 50" :style="`fill: ${color.code}`")
                title {{ color.name }}
                polygon(points="25 0 0 25 0 50 25 50 50 25 50 0 25 0")
              h3.colorer-name {{ color.name }}
              h4.colorer-code {{ color.code }}

</template>

<style lang="stylus">
.colorer
  width: 100%

.colorer-sample
  width: 100%
  padding: 10px
  transition: 0.2s

  &:hover
    transform: scale(1.1)

.colorer-name
  color: $dark
  font-size: $font-normal

.colorer-code
  color: alpha($dark, 70%)
  font-size: $font-small
</style>

<script>
export default {
  head() {
    return {
      title: 'Colors'
    }
  },
  data: () => ({
    main: [
      { code: '#2451F2', name: '$primary' },
      { code: '#F2248F', name: '$secondary' },
      { code: '#36D9B0', name: '$success' },
      { code: '#F22435', name: '$danger' },
      { code: '#FFCF0D', name: '$warning' },
      { code: '#3D8EF2', name: '$info' }
    ],
    gradient: [
      { code: ['#2451F2', '#F2248F'], name: '$grad-primary' },
      { code: ['#F2248F', '#FF6F00'], name: '$grad-secondary' },
      { code: ['#36D9B0', '#F2248F'], name: '$grad-success' },
      { code: ['#F22435', '#F2248F'], name: '$grad-danger' },
      { code: ['#FFCF0D', '#36D9B0'], name: '$grad-warning' },
      { code: ['#00FCFE', '#2451F2'], name: '$grad-info' }
    ],
    grayscale: [
      { code: '#000000', name: '$black' },
      { code: '#152935', name: '$dark' },
      { code: '#708090', name: '$slategray' },
      { code: '#dae4f1', name: '$gray' },
      { code: '#f4f7fb', name: '$light' },
      { code: '#FFFFFF', name: '$white' }
    ]
  })
}
</script>
