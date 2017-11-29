<template>
	<div>
		<mt-header title="账户设置">
		  <router-link to="wode" slot="left">
		    <mt-button icon="back">微信</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="con">
			<div class="ewm">
				<img src="./images/tj-one.png" alt="" />
				<p>邀请码：<span>2345</span></p>
			</div>
			<div class="tj">
				<p>推荐地址</p>
				<div>
					<a href="">http://123.56.102.141/hlc/webapp/index</a>
				</div>
				<a href="" class="btn">推荐</a>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.con{
		width:90%;
		margin: 0 auto;
		.ewm{
			text-align: center;	
			margin-bottom:50px;
		img{
			width: 80%;
			margin-top: 50px;
			margin-bottom: 20px;
		 }
		 p{
		 	font-size: 16px;
		 	color: #333333;
		 }
	 }
	 .tj{
	 	p{
	 		color:#999999 ;
	 		font-size: 14px;
	 		margin-bottom: 8px;
	 	}
	 	div{
	 		width: 100%;
	 		background: #eeeeee;
	 		padding: 15px 8px;
	 		margin-bottom: 30px;
	 		a{
	 			text-decoration: underline;
	 			color: #0000FF;
	 		}
	 	}
	 	.btn{
	 		width: 100%;
	 		display: block;
	 		padding: 15px 0;
	 		text-align: center;
	 		color: #fff;
	 		background: #f08c34;
	 		border-radius: 5px;
	 	}
	 }	
}
</style>