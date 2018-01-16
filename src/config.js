//前端系统配置
const config={
    dev:true,                        //是否为开发模式
	baseUrl:'http://localhost:8060',//接口请求地址
	timeOut:'3000',                 //响应时间
	code:{                          //请求的状态吗
		success:200,  //成功
		error:201,    //失败
		login:100,    //登录成功
		loginOut:101, //登录超时
	}
}
export default config;