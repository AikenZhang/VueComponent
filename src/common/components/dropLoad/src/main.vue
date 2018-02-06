<template>
	<div class="dropLoad">
		<slot name="content"></slot>
		<slot name="loading" v-if="slotLoadImg"></slot>
		<div class="dropLoad-loading" v-if="defaultLoadSvg">
			<i class="fa fa-circle-o-notch fa-spin"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				loadSvg:true, //系统默认的加载动画状态
				isLoading:true,  //是否执行加载事件
				slotLoadImg:false,
				defaultLoadSvg:false
			}
        },
        methods:{
            showMask(){
                var me=this;
                if(!me.loadSvg){
                    me.slotLoadImg=true;
                }else{
                    me.defaultLoadSvg=true;
                }
            },
            hideMask(){
                var me=this;
                if(!me.loadSvg){
                    me.slotLoadImg=false;
                }else{
                    me.defaultLoadSvg=false;
                }
			},
			setLoading(c){
				this._isLoading=c||true;
			}
		},
		mounted:function(){
			const bottomHeight=30;
			let me=this,
				el=me.$el;
            let ConHeight=me.$slots.content[0].elm.offsetHeight,//内容的高度
			lastScrollTop=0;
			if(!me.isLoading){
				return;
			}
            el.addEventListener("scroll",function(){// dropLoad组件添加scroll事件监听
            let scrollTop=this.scrollTop;
            if(scrollTop<=lastScrollTop){
                lastScrollTop=scrollTop;
                return;
            }
            lastScrollTop=scrollTop;
            if(scrollTop+el.clientHeight+bottomHeight>ConHeight){
                if(me.isLoading){
					me.isLoading=false;
                    me.$emit('load',me);
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