<template>
	<div class="blog-container">
		<drop-load>
			<div slot="content">
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
				<blog-list></blog-list>
				<blog-list></blog-list>
				<blog-list></blog-list>
				<blog-list></blog-list>
				<blog-list></blog-list>
				<blog-list></blog-list>
				<blog-list></blog-list>
				<blog-list></blog-list>
				<blog-list></blog-list>
				<blog-list></blog-list>
			</div>
			<div slot="loading" style="height:50px;">加载sdfasdfa</div>
		</drop-load>	
	</div>
</template>
<script>
	import blogList from './blogList'
	import dropLoad from '../../../components/dropLoad'
	export default{
		components:{
			blogList,
			dropLoad
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
	height: 100%;
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
</style>