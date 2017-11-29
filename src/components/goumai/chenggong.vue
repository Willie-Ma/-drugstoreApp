<template>
	<div>
		<mt-header title="购买成功">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">微信s</mt-button>		    
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="con">
			<img src="./images/chenggong.png" alt="" />
			<p>购买成功</p>
			
			<router-link to="home"class="btn"> 分享 </router-link>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.con{
		width: 100%;
		padding: 0 15px;
		text-align: center;
		margin: 0 auto;
		img{
			width: 80px;
			margin-top: 80px;
			margin-bottom: 30px;
		}
		p{
			color: #646464;
			font-size: 16px;
			margin-bottom: 50px;
		}
		.btn{
			display: block;
			background: #f08c34;
			color: #fff;
			width: 100%;
			padding: 10px 0;
			border-radius: 5px;
			
		}
	}
</style>