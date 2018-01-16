import main from './main.vue'
let instances = [];//缓存实例
let seed = 10;
let pos=30;
const Notificaton={
	install:function(Vue){
		var me=this;
		Vue.prototype.$notifi=function(options){
		options =options || {};
		let instance=Vue.extend(main);
		let vm=new instance();
		//提取配置到实例
		for(let o in options){
			vm[o]=options[o]
		}
        let el=vm.$mount().$el;
		 instances.push(vm);
		 document.body.appendChild(el);
		 vm.visible=true;
		 vm.cache=instances;
		 me.update(instances);
		
		 vm.onClose=me.close;
		 
   	   }
    },
    //当通知有多个时，进行状态更新
    update:function(instances){
    	let length=instances.length;
    	let instance=instances[length-1];
			instance.$el.style['top']=(30+(80+seed)*(length-1))+'px';
    },
    //关闭时删除instances中的缓存项
    close:function(instances){
    		instances.shift();
    		let length=instances.length;
    		for(let i=0;i<length;i++){
    				 instances[i].$el.style['top']=(parseInt(instances[i].$el.style['top'])-(80+seed))+'px';
    		}
				
    	}  		
}
export default Notificaton;