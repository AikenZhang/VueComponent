<template>
	<transition name="showMessage">
		<div class="showMessage" v-if="disabled">
			<div class="showMessage-QRCode">
				<p><i class="fa fa-remove" style="margin-left: 380px;cursor:pointer;" v-on="{mousedown:hide}"></i></p>
				<img :src="QRcodeUrl">
			</div>
		</div>
	</transition>
</template>
<script>
	export default{
		data(){
			return{
				QRcodeUrl:"",
				disabled:false
			}
		},
		methods:{
			show(url){
				this.disabled=true;
				this.QRcodeUrl="static/img/"+url+".png";
			},
			hide(){
				this.disabled=false;
			}
		}
	}
</script>
<style >
.showMessage{
	position:fixed;
	top:0;
	left: 0;
	right:0;
	bottom: 0;
	z-index: 999;
}
.showMessage-QRCode{
	margin:30% auto;
	width:400px;
	height:430px;
	border:1px solid #c2c2c2;
	border-radius: 8px;
	background: #fff;
	color:#999;
}
.showMessage-QRCode img{
	width:70%;
	display: block;
	margin:0 auto;
}
.showMessage-enter-active, .showMessage-leave-active {
  transition: opacity 1s
}
.showMessage-enter, .showMessage-leave-to {
  opacity: 0
}
</style>