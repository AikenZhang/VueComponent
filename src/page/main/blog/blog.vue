<template>
	<div class="blog-content">
		<h2 class="blog-topic">贫穷，也会限制我们的格局和眼界</h2>
		<div class="blog-tagTime">
			<span class="blog-tag fa fa-remove"></span>
			<span class="blog-time">2013.01.02</span>
		</div>
		<p class="blog-content-article"></p>
	</div>
</template>
<script>
	export default{
		created(){
			var params = new URLSearchParams();
			let me=this;
			params.append('UserId', '521dd');
			// this.$ajax({
			// 	method:'post',
			// 	url:'/getuser',
			// 	data:{
			// 		UserId:'521dd',
			// 		UserName:'sss',
			// 		age:17
			// 	}
			// }).then(function(res){
					
			// })
			// .catch(function(e){
			// 	console.log(e);
			// })
		},
		methods:{
			
		}
	}
</script>
<style>
.blog-content{
	width:800px;
	margin:20px auto;
	height: 4000px;
}
.blog-topic{
	width:100%;
	text-align: center;
	line-height: 30px;
}
.blog-tagTime{
	width:150px;
	height:40px;
	margin:0 auto;
	line-height: 40px;
}
.blog-tag{

}
.blog-time{
	display: inline-block;
    padding-left: 3px;
    color: #969696;
    vertical-align: middle;
}
</style>