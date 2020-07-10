import Header from '@/components/header' // Header
import Footer from '@/components/footer' // Footer
import Sidebar from '@/components/sidebar' // 列表页Sidebar
import CanvasBg from '@/components/canvasbg' // canvas背景
import consts from '@/utils/consts'
export default (Vue) => {
  Vue.prototype.$consts = consts
  Vue.component('Header', Header)
  Vue.component('Footer', Footer)
  Vue.component('Sidebar', Sidebar)
  Vue.component('CanvasBg', CanvasBg)
}