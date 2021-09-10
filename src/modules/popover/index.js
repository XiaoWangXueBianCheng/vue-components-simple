import module from './main.vue'

module.install = function install (Vue, opt) {
  Vue.component(module.name, module, opt)
}
export default module
