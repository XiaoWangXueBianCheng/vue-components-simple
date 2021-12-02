import Dialog from './modules/dialog'
import Popover from './modules/popover'
import Icon from './modules/icon'
const modules = [
  Dialog, Popover, Icon
]
function install (Vue, opts = {}) {
  // 注册全局函数
  // Vue.prototype.xx = xx

  // 注册组件
  Object.values(modules).forEach((each) => {
    Vue.component(each.name, each)
  })
}

export default {
  install,
  Dialog,
  Popover,
  Icon
}
