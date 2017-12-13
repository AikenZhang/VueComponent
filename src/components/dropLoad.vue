<template>
	<div class="dropLoad">
		<slot name="content"></slot>
		<slot name="loading"></slot>
		<div class="dropLoad-loading">
			<i></i>
		</div>
	</div>
</template>
<script>
	export default{
		mounted(){
			var	me=this;
			var dropLoad={
				loadSvg:false,  //是否显示默认的加载动画
				isLoading:false,//加载状态
   			    lastScrollTop:0,//最后一次滚动位置
   			    content:me.$slots.content[0].elm,//文档的实际高度
   			    compt:me.$el,  //容器高度
   			    bottomHeight:10  //距离底部多少高度时加载数据
			}
			dropLoad.compt.addEventListener("scroll",function(e){
				if (dropLoad.isLoading) {
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
		        	if(true){//判断数据是否加载完毕
		        		var a=document.createElement("div");
		        		a.setAttribute("style","height:500px");
		        		dropLoad.content.append(a)
		        		console.log("page");
		        		dropLoad.isLoading=false;
		        	}
		        	else{//加载完毕 停止加载数据
		        		dropLoad.isLoading=true;
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
</style>