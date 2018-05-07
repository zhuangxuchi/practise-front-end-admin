import routerConfig from '@/setting/base/router'
const components = [
  'table',
  'pagination',
  'dialog',
  'message',
  'message-box',
  'button',
  'input',
  'switch',
  'date-time-picker',
  'radio-checkbox',
  'select',
  'cascader',
  'upload',
  'form-validation',
]
// 路由配置
var routes = [
  {
    path: '/',
    component: resolve => {
      lazyLoading(resolve, 'Dashboard', false)
    },
  },
  ...components.map(item => {
    return {
      path:  `/component/${item}`,
      component: resolve => {
        lazyLoading(resolve, `component/${firstLetterToUppercase(item)}`, false)
      },
    }
  }),
  ...routerConfig.map(item => {
    return {
      path: item.routePath,
      component: resolve => {
        lazyLoading(resolve, item.filePath.replace(/\.vue$/, ''), false)
      }
    }
  }),
]

function firstLetterToUppercase(word) {
  return word.charAt(0).toUpperCase() + word.substr(1)
}


const lazyLoading = (resolve, name, index = false) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/${name}${index ? '/Index' : ''}.vue`));
  })
}

export default routes
