<template>
	<transition name="noti" @after-leave='afterLeave'>
		<div class="blog-notification" v-show='visible'>
			<div class="blog-notification-title">
				<i :class="iconClass" class="blog-notification-icon"></i>
				<span>{{title}}</span>
			</div>
			<div class="blog-notification-content">
				{{this.message}}
			</div>
		</div>
	</transition>
</template>
<script>
	export default{
		data(){
			return {
				type:'success',
				positon:'top',
				timeOut:'3000',
				message:'这是一条信息',
				visible:false,
				timer:null
			}
		},
		computed:{
			iconClass:{
				get:function(){
					switch(this.type){
						case 'info': return 'fa fa-info blog-iconType-info';
						case 'war':  return 'fa fa-exclamation blog-iconType-war';
						case 'success': return 'fa fa-check blog-iconType-success';
						case 'error': return 'fa fa-close blog-iconType-error';
						default: return 'fa fa-check blog-iconType-success';
					}
				}
			},
			title:{
				get:function(){
				   switch(this.type){
						case 'info': return '消息';
						case 'war':  return '警告';
					    case 'success': return '成功';
						case 'error': return '错误';
						default: return '成功';
					}
				}
			},
			posStyle(){
				return {
					[this.positon]:[this.position_px]+'px',
					right:0
				}
			}
		},
		methods:{
			afterLeave(){
				this.close();
			},
			close(){
				var me=this;
				if(typeof me.onClose === 'function'){
					me.onClose(me.cache);
				}
				this.$destroy(true);
        		this.$el.parentNode.removeChild(this.$el);
			},
			clearTimer(){
				clearTimeout(this.timer);
			},
			startTimer(){
				var me=this;
				if(me.timeOut){
					me.timer=setTimeout(function(){
						me.visible=false;
					},me.timeOut)
				}	
			}
		},
		mounted(){
			this.startTimer();
		}
	}
</script>
<style type="text/css">
	.blog-notification{
		width:300px;
		height:80px;
		border-radius: 8px;
		border:1px solid #ebeef5;
		background: #fcfcfc;
		position:fixed;
		right: 10px;
		transition:top .2s;
		z-index: 999;
	}
	.blog-notification-content{
		height:45px;
		padding-left:50px;
		line-height:45px;
		color:#686868;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.blog-notification-title{
		width:100%;
		height:35px;
		line-height: 35px;
		font-weight:800;
	}
	.blog-notification-icon{
		width:24px;
		height:24px;
		border-radius:12px;
		display: inline-block;
		color:#fff;
		margin:0 10px;
		text-align: center;
		line-height: 24px;
		font-size:16px;
	}
	.blog-iconType-success{
		background:#67c23a;
	}
	.blog-iconType-war{
		background:#e6a23c;
	}
	.blog-iconType-error{
		background:#f56c6c;
	}
	.blog-iconType-info{
		background: #909399;
	}
	.noti-enter-active, .noti-leave-active {
		right:10px;
  		transition: right .4s
	}
	.noti-enter,.noti-leave-to{
		right:-300px;
	}
</style>