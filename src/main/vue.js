//注册vue 的全局信息
import Vue from 'vue'
import Router from 'vue-router'
import config from '../config'
import notifi from '@/common/plugins/notification'
import ajax from '@/common/plugins/axios'
import message from '@/common/plugins/message'
Vue.config.productionTip = config.dev; //是否开发模式
Vue.use(message)
Vue.use(ajax);
Vue.use(Router);
Vue.use(notifi);
export default Vue;