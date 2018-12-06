import Vue from 'vue'

const requireComponent = require.context(
  '~/components',
  false,
  /App[\w-]+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentName = fileName
    .replace('./', '')
    .split('.')
    .shift()
  const componentConfig = requireComponent(fileName)

  Vue.component(componentName, componentConfig.default || componentConfig)
})
