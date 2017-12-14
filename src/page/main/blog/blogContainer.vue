<template>
	<drop-load @load="load">
		<div class="blog-container" slot="content">
			<div class="blog-list-banner">
					<div class="swiper-container">
						<div class="swiper-wrapper">
						    <div class="swiper-slide">
						        <img src="static/img/banner01.jpg">
						    </div>
						    <div class="swiper-slide">
						        <img src="static/img/banner01.jpg">
						    </div>
						    <div class="swiper-slide">
							     <img src="static/img/banner01.jpg">
						    </div>
						</div>
						<!-- 如果需要分页器 -->
						<div class="swiper-pagination"></div>
				    </div>
			</div>
			<div class="blog-list" v-for="item in dataList">
				<div class="blog-list-left">
					<div class="blob-list-head">
						<span>{{item.tag}}</span>
						<p class="blog-list-time" data-dateTime="">{{item.time}}</p>
					</div>
					<router-link class="blog-list-name" :to="/blog/+item.itemId">{{item.itemName}}</router-link>
					<p class="blog-list-container">{{item.itemContent}}</p>
				</div>
				<div class="blog-list-right">
					<img :src="item.itemImg" alt="图片未显示" data-imgUrl="itemImg">
				</div>
			</div>
		</div>
	</drop-load>
</template>
<script>
	import dropLoad from '../../../components/dropLoad'
	export default{
		data(){
			return {
				dataList:[
				{
				aa:'001',
				tag:1,
				time:'两小时',
				itemId:'001',
				itemName:'那个曾经被舍友排挤的姑娘，后来走遍了中国',
				itemContent:'文/怀左同学 01 雪玲是我大学时最好的朋友，我们当时在文学社认识，她是福建姑娘，爱读书写作，更爱浪迹天涯。 很多人都说，她是一个传奇。 02 几个月前她从西藏回来，到武汉找sfsdfsdfsdfsdfsfsdfsdfsdfsdf的身份水电费水电费水电费是非得失的方式水电费水电费水电费水电费水电费水电费水电费说放水电费水电费说放水电费水电费水电费',
				itemImg:''},
				{tag:1,
				time:'两小时',
				itemId:'001',
				itemName:'那个曾经被舍友排挤的姑娘，后来走遍了中国',
				itemContent:'文/怀左同学 01 雪玲是我大学时最好的朋友，我们当时在文学社认识，她是福建姑娘，爱读书写作，更爱浪迹天涯。 很多人都说，她是一个传奇。 02 几个月前她从西藏回来，到武汉找sfsdfsdfsdfsdfsfsdfsdfsdfsdf的身份水电费水电费水电费是非得失的方式水电费水电费水电费水电费水电费水电费水电费说放水电费水电费说放水电费水电费水电费',
				itemImg:''},
								{tag:0,
				time:'两小时',
				itemId:'001',
				itemName:'那个曾经被舍友排挤的姑娘，后来走遍了中国',
				itemContent:'文/怀左同学 01 雪玲是我大学时最好的朋友，我们当时在文学社认识，她是福建姑娘，爱读书写作，更爱浪迹天涯。 很多人都说，她是一个传奇。 02 几个月前她从西藏回来，到武汉找sfsdfsdfsdfsdfsfsdfsdfsdfsdf的身份水电费水电费水电费是非得失的方式水电费水电费水电费水电费水电费水电费水电费说放水电费水电费说放水电费水电费水电费',
				itemImg:''},
								{tag:0,
				time:'两小时',
				itemId:'001',
				itemName:'那个曾经被舍友排挤的姑娘，后来走遍了中国',
				itemContent:'文/怀左同学 01 雪玲是我大学时最好的朋友，我们当时在文学社认识，她是福建姑娘，爱读书写作，更爱浪迹天涯。 很多人都说，她是一个传奇。 02 几个月前她从西藏回来，到武汉找sfsdfsdfsdfsdfsfsdfsdfsdfsdf的身份水电费水电费水电费是非得失的方式水电费水电费水电费水电费水电费水电费水电费说放水电费水电费说放水电费水电费水电费',
				itemImg:''},
								{tag:0,
				time:'两小时',
				itemId:'001',
				itemName:'那个曾经被舍友排挤的姑娘，后来走遍了中国',
				itemContent:'文/怀左同学 01 雪玲是我大学时最好的朋友，我们当时在文学社认识，她是福建姑娘，爱读书写作，更爱浪迹天涯。 很多人都说，她是一个传奇。 02 几个月前她从西藏回来，到武汉找sfsdfsdfsdfsdfsfsdfsdfsdfsdf的身份水电费水电费水电费是非得失的方式水电费水电费水电费水电费水电费水电费水电费说放水电费水电费说放水电费水电费水电费',
				itemImg:''},
								{tag:0,
				time:'两小时',
				itemId:'001',
				itemName:'那个曾经被舍友排挤的姑娘，后来走遍了中国',
				itemContent:'文/怀左同学 01 雪玲是我大学时最好的朋友，我们当时在文学社认识，她是福建姑娘，爱读书写作，更爱浪迹天涯。 很多人都说，她是一个传奇。 02 几个月前她从西藏回来，到武汉找sfsdfsdfsdfsdfsfsdfsdfsdfsdf的身份水电费水电费水电费是非得失的方式水电费水电费水电费水电费水电费水电费水电费说放水电费水电费说放水电费水电费水电费',
				itemImg:''}
			],
			data:["a","b"]
		}
		},
		components:{
			dropLoad
		},
		methods:{
			load:function(c){
				var me=this;
				c.loadSvgShow();
				console.log("加载");
				setTimeout(function(){
					c.loadSvgHide();
					me.dataList.push(
							{tag:3,
				time:'两小时',
				itemId:'001',
				itemName:'那个曾经被舍友排挤的姑娘，后来走遍了中国',
				itemContent:'文/怀左同学 01 雪玲是我大学时最好的朋友，我们当时在文学社认识，她是福建姑娘，爱读书写作，更爱浪迹天涯。 很多人都说，她是一个传奇。 02 几个月前她从西藏回来，到武汉找sfsdfsdfsdfsdfsfsdfsdfsdfsdf的身份水电费水电费水电费是非得失的方式水电费水电费水电费水电费水电费水电费水电费说放水电费水电费说放水电费水电费水电费',
				itemImg:''}
						)
				},4000)
				console.log(this.dataList);
			}
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    autoplay:true,
			    
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			    }
			  })  
		}
	}
</script>
<style >
.blog-container{
	padding-top:20px;
	width:800px;
	margin:0 auto;
}
.blog-list-banner{
	width:95%;
	margin:0 auto;
	height: 185px;
	border:1px solid #d2d2d2;
}
.swiper-container{
	width:100%;
	height:100%;
}
.swiper-slide img{
	width:100%;
}
.blog-list{
	width:95%;
	margin:10px auto 0 auto;
	height: 200px;
	border-bottom: 1px solid #d2d2d2;
	overflow: hidden;
}
.blog-list-left{
	width:70%;
	float: left;
}
.blog-list-name{
	height:40px;
	line-height: 40px;
	font-size:20px;
	color:#000;
	font-weight: 500;
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-decoration: none;
}
.blog-list-container{
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	font-size:16px;
	color:#333;
	line-height: 25px;
}
.blog-list-right{
	width:30%;
	float: right;
}
.blog-list-right img{
	width:125px;
	height:100px;
	display: block;
	border-radius: 8px;
	overflow: hidden;
	border:1px solid #d2d2d2;
	margin:50px auto;
}
.blob-list-head{
	height:35px;
	vertical-align: middle;
	line-height: 35px;
}
.blog-list-time{
	display: inline-block;
    padding-left: 3px;
    color: #969696;
    vertical-align: middle;
}
</style>