import axios from "axios"
import qs from 'qs'
import config from '@/config'
const ajax={
	install:function(Vue){
		const axiosd=axios.create({
			baseURL:config.baseUrl, //默认请求地址
			timeout:config.timeOut,//响应时间
			headers:{
				'Content-Type':'application/x-www-form-urlencoded'
			},
			withCredentials:true, //带cookie
			transformRequest:function(data){
				return qs.stringify(data);  //对发送的数据格式进行处理
			}
		})
		//添加拦截
		axiosd.interceptors.response.use(function(res){
		let data=res.data;
		if(data.success){
			if(data.code==config.code.success){
				return data;
			}
			
		}else{
			if(data.code==config.code.loginOut){
				window.location.href=baseURL+'/login';
				return;
			}
			if(data.code==config.code.error){
				new Vue().$notifi({
					type:"war",
					message:data.error
				})
				return false;
			}
		}
	},function(error){
		new Vue().$notifi({
			type:"error",
			message:'信息错误'
		})
		return false;
	})
		Vue.prototype.$ajax=axiosd;
	}
}
export default ajax;