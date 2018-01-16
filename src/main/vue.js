//注册vue 的全局信息
import Vue from 'vue'
import Router from 'vue-router'
import axios from '../store/storeBase'
import config from '../config'
import notifi from '@/common/plugins/notification'
Vue.config.productionTip = config.dev; //是否开发模式
Vue.prototype.$ajax=axios;   //注册axios
Vue.use(Router)
Vue.use(notifi);
export default Vue;