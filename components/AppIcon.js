import icons from '~/assets/data/icons.json'

export default {
  name: 'AppIcon',
  functional: true,
  inheritAttrs: true,
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'outlined'
    },
    classes: {
      type: String,
      default: ''
    }
  },
  render(h, { props }) {
    let icon = icons[props.name]
    if (!icon) {
      console.warn(props.name, props.type, ' icon not found')
      return
    }

    const children = []

    icon.viewBox = icon.viewBox || '0 0 24 24'

    // add empty square
    children.push(
      h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })
    )
    // add icon title
    children.push(h('title', icon.title || props.name))
    children.push(
      h('path', {
        attrs: {
          d: icon[props.type]
        }
      })
    )

    return h(
      'svg',
      {
        attrs: {
          class: `icon icon-${props.name} ${props.classes}`,
          viewBox: icon.viewBox
        }
      },
      children
    )
  }
}
