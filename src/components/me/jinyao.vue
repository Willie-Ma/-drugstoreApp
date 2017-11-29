<template>
	<div class="body">
		<mt-header title="进药申请">
		  <router-link to="wode" slot="left">
		    <mt-button icon="back">微信</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="Con">
			<div class="con">
				<div class="con-top">
					<img src="./images/jy-one.png" alt="" class="left" />
					<div class="right">
						<h5>白云山伤风感冒胶囊</h5>
						<h6>购买时间:2015-12-15 <span>两个疗程</span></h6>
						<p>药品疗程: <img src="./images/jy-two.png"/></p>
					</div>
					
				</div>
				<div class="bottom">
						<p>总价：<span>￥800.45</span></p>
						<a href="" class="btn">确认</a>
					</div>
			</div>
		</div>
		<div class="Con">
			<div class="con">
				<div class="con-top">
					<img src="./images/jy-one.png" alt="" class="left" />
					<div class="right">
						<h5>白云山伤风感冒胶囊</h5>
						<h6>购买时间:2015-12-15 <span>两个疗程</span></h6>
						<p>药品疗程: <img src="./images/jy-two.png"/></p>
					</div>
					
				</div>
				<div class="bottom">
						<p>总价：<span>￥800.45</span></p>
						<a href="" class="btn">确认</a>
					</div>
			</div>
		</div>
		<div class="Con">
			<div class="con">
				<div class="con-top">
					<img src="./images/jy-one.png" alt="" class="left" />
					<div class="right">
						<h5>白云山伤风感冒胶囊</h5>
						<h6>购买时间:2015-12-15 <span>两个疗程</span></h6>
						<p>药品疗程: <img src="./images/jy-two.png"/></p>
					</div>
					
				</div>
				<div class="bottom">
						<p>总价：<span>￥800.45</span></p>
						<a href="" class="btn">确认</a>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
.body{
	width: 100%;
	height: 680px;
	background: #f5f5f5;
}
.Con{
	width:100%;
	background: #fff;
	border-top: 1px solid #e1e1e1;
	border-bottom: 1px solid #e1e1e1;
	overflow: hidden;
	margin-top: 10px;
	.con{
		width: 90%;
		margin: 0 auto;
		.con-top{
			padding: 12px 0;
			border-bottom: 1px solid #e1e1e1;
			overflow: hidden;	
			margin-bottom: 10px;
		.left{
			float: left;
			padding: 8px;
			border: 1px solid #e1e1e1;
			width: 30%;
		}
		.right{
			float: right;
			width: 65%;
			h5{
				font-size: 16px;
				color: #000;
				margin-bottom: 10px;
			}
			h6{
				font-size: 14px;
				color: #626368;
				margin-bottom: 15px;
			}
			p{
				color: #999999;
				font-size: 14px;
				img{
					width: 35%;
				}
			}
		}
	  }
	  .bottom{
	  	overflow: hidden;
	  	p{
	  		float: left;
	  		color: #333333;
	  		span{
	  			color: #ff6b3d;
	  			font-size: 16px;
	  			font-weight: bold;
	  		}
	  	}
	  	a{
	  		display: block;
	  		float: right;
	  		color: #fff;
	  		width: 60px;
	  		height: 25px;
	  		text-align: center;
	  		line-height: 25px;
	  		border-radius: 20px;
	  		background: #f08c34;
	  		font-size: 14px;
	  		margin-bottom: 8px;
	  	}
	  }
	}
}
</style>