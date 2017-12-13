<template>
	<div>
		<div class="nav-head">
			<p style="height:15px"></p>
			<div class="nav-head-img">
				<img src="static/img/0001.jpeg">
			</div>
			<p>博客名：{{blogName}}</p>
		</div>
		<ul class="nav-container">
			<router-link tag='li' v-for="(item,index) in nav" :key="item.sort" :to="'/'+ item.itemId" >{{item.itemName}}</router-link>
		</ul>
		<p style="height30px;"></p>
		<p class="nav-call">
			<i class="fa fa-qq" v-on:mousedown="showImg('qqQRCode')"></i>
			<i class="fa fa-wechat" v-on:mousedown="showImg('weChatQRCode')"></i>
		</p>
		<show-message ref="showMessage"></show-message>
	</div>
</template>
<script>
import getData from './store'
import showMessage from '../../components/showMessage'
	export default{
		data(){
			return{
				nav:getData.value,
				blogName:"404"
			}
		},
		components:{
			showMessage
		},
		methods:{
			showImg:function(url){
				this.$refs.showMessage.show(url)
			}
		}
	}
</script>
<style type="text/css">
.nav-head{
	width:100%;
	height:150px;
	background: #fff;
	position:relative;
	color: #333;
	font-size:13px;
}
.nav-head p{
	width:100%;
	text-align: center;
}
.nav-head-img{
	width:80px;
	height:80px;
	border-radius: 40px;
	margin:0 auto 10px auto;
	border:1px solid #d3d3d3;
	overflow: hidden;
}
.nav-head-img img{
	display: block;
	padding: 0;
	margin:0;
	width:100%;
	height: auto;
}
.nav-container{
	font-weight: 500;
}
.nav-container li{
	display: block;
	height:50px;
	width:200px;
	text-align: center;
	line-height: 50px;
	font-size:18px;
	cursor: pointer;
}
.nav-container li:hover{
	background: #259780;
}
.nav-call{
	width:100%;
	height:40px;
	line-height: 40px;
	text-align: center;

}
.nav-call i{
	display:inline-block;
	margin-right:10px;
	cursor: pointer;
}
</style>