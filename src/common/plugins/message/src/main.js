import main from './main.vue'
const message={
	install:function(Vue){
		var me=this;
		Vue.prototype.$message=function(options){
		options =options || {};
		let instance=Vue.extend(main);
		let vm=new instance();
		//提取配置到实例
		for(let o in options){
			vm[o]=options[o]
		}
        let el=vm.$mount().$el;
		 document.body.appendChild(el);
		 vm.visible=true;
	}
	}
}
export default message;