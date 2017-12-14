<template>
	<div class="dropLoad">
		<slot name="content"></slot>
		<slot name="loading" v-if="loadImg"></slot>
		<div class="dropLoad-loading" v-if="loadSvg">
			<i class="fa fa-circle-o-notch fa-spin"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				loadSvg:false, //系统默认的加载动画状态
				loadImg:false  //用户自定义的加载动画状态
			}
		},
		mounted(){
			var	me=this;
			var dropLoad={
				loadSvg:true,  //是否显示默认的加载动画
				isLoading:true, //加载状态
   			    lastScrollTop:0,//最后一次滚动位置
   			    content:me.$slots.content[0].elm,//文档的实际高度
   			    compt:me.$el,  //容器高度
   			    bottomHeight:30,  //距离底部多少高度时加载数据,
   			    setLoading:function(boolean){
   			    	this.isLoading=boolean;
   			    },
   			    loadSvgShow:function(){
   			    	if(this.loadSvg){
   			    		me.loadSvg=true;
   			    	}else{
   			    		me.loadImg=true;
   			    	}
   			    	this.isLoading=false;
   			    },
   			    loadSvgHide:function(){
   			    	if(this.loadSvg){
   			    		me.loadSvg=false;
   			    	}else{
   			    		me.loadImg=false;
   			    	}
   			    	this.isLoading=true;
   			    }
			}
			dropLoad.compt.addEventListener("scroll",function(e){
				if (!dropLoad.isLoading) {
            		return;
        		}
		        var scrollTop = this.scrollTop;
		        if (scrollTop <= dropLoad.lastScrollTop) {
		            dropLoad.lastScrollTop = scrollTop;
		            return;
		        }
		        dropLoad.lastScrollTop = scrollTop;
		        var scrollHeight = dropLoad.content.clientHeight;
		        var windowHeight = dropLoad.compt.clientHeight;
		        if (scrollTop + windowHeight + dropLoad.bottomHeight > scrollHeight) {
		        	if(dropLoad.isLoading){//判断数据是否加载完毕
		        		me.$emit("load",dropLoad);
		        	}
		        }
			})
		}
	}
</script>
<style>
.dropLoad{
	width:100%;
	height: 100%;
	overflow-x:hidden;
	overflow-y:auto;
}
.dropLoad-loading{
	width:100%;
	height:50px;
	line-height: 50px;
	padding: 0;
	text-align: center;
}
</style>