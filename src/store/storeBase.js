import axios from "axios"
import qs from 'qs'
import config from '../config'
const ajax=axios.create({
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
ajax.interceptors.response.use(function(res){
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
			console.log(data.error);
		}
		console.log('未定义错误');//未定义错误
	}
},function(error){
	console.log(error);
	return false;
})
export default ajax;