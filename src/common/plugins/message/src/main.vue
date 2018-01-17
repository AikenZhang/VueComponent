<template>
	<transition name='opacity'>
		<div class="blog-message" v-show='visible'>
			<div class="blog-message-content">
				<div class="blog-message-content-title">
					{{title}}
				</div>
				<div class="blog-message-content-message" v-show='prompt'>
					<input type="text" v-model="promptText"/>
				</div>
				<div class="blog-message-content-message" v-show='alert || confirm'>
					<i class="fa fa-exclamation blog-message-icon" v-show='confirm'></i>
					<span>{{message}}</span>
				</div>
				<div class="blog-message-content-handle">
					<span class="blog-button" @click='close' v-show='confirm || prompt'>{{cancelText}}</span>
					<span class="blog-button" @click='ok'>{{okText}}</span>
				</div>
			</div>
			<div class="blog-message-background" @click='close'></div>
		</div>
	</transition>
</template>
<script>
	export default{
		data(){
			return {
				type:'confirm',  //'alert','confirm','prompt'
				title:'提示',
				message:'你好',
				cancelText:'取消',
				okText:'确定',
				visible:false,
				promptText:''
			}
		},
		computed:{
			confirm(){
				if(this.type=='confirm'){
					return true;
				}
				return false;
			},
			prompt(){
				if(this.type=='prompt'){
					return true;
				}
				return false;
			},
			alert(){
				if(this.type=='alert'){
					return true;
				}
				return false;
			}
		},
		methods:{
			ok(){
				var me=this;
				me.close();
				if(typeof me.okFun ==='function'){
					if(me.promptText){
						me.okFun(me.promptText);
					}
					else{
						me.okFun();
					}
					
				}
			},
			close(){
				this.visible=false;
				this.$destroy(true);
        		this.$el.parentNode.removeChild(this.$el);
			}
		}
	}
</script>
<style>
	.blog-message{
		position: fixed;
		left: 0;
		top:0;
		bottom: 0;
		right: 0;
		z-index:1000;
	}
	.blog-message-content{
		position: absolute;
		left:50%;
		margin-left:-210px;
		top:50%;
		margin-top: -70px;
		width:420px;
		height:140px;
		background: #fff;
		border-radius: 10px;
		z-index: 10002;
	    overflow: hidden;
	    padding: 0;
	    border:0;
	}
	.blog-message-background{
		position: absolute;
		left:0;
		right:0;
		top:0;
		bottom: 0;
		z-index:1001;
		background:#000;
		opacity: 0.5;
	}
	.blog-message-content-title{
		height:36px;
		line-height: 36px;
		padding-left:15px;
		font-weight: 800;
		background: #f2f2f2;
	}
	.blog-message-content-message{
		width:100%;
		height:58px;
		line-height: 58px;
		padding-left: 15px;
		font-weight: 500px;
		display:flex;
		justify-content: left;
		align-items: center;
	}
	.blog-message-content-message span{
		display: inline-block;
		height:28px;
		line-height: 28px;
	}
	.blog-message-content-message input{
		width:380px;
		height: 25px;
		outline: 0;
		border:1px solid #d2d2d2;
		border-radius: 5px;
	}
	.blog-message-icon{
		width:28px;
		height:28px;
		border-radius:14px;
		display: inline-block;
		color:#fff;
		margin-right: 5px;
		text-align: center;
		line-height: 28px;
		font-size:20px;
		background: #e6a23c;
	}
	.blog-message-content-handle{
		width:100%;
		height:40px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>