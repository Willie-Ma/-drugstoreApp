<template>
	<div class="body">
		<mt-header title="医生档案">
		  <router-link to="wode" slot="left">
		    <mt-button icon="back">微信</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<ul class="mui-table-view one">
		        <li class="mui-table-view-cell one">
		            <a class="mui-navigate-right">
		                头像
		           <p><img src="./images/me-user.png" alt="" /></p>     
		            </a>
		        </li>
		        <li class="mui-table-view-cell">
		            <a class="mui-navigate-right">
		                 姓名
					<p>张大大</p>  	                 
		            </a>
		        </li>
		        <li class="mui-table-view-cell">
		            <a class="mui-navigate-right">
		                昵称
		                <p>静雅居士</p> 
		            </a>
		        </li>
		    </ul>
		    
		    <ul class="mui-table-view one">
		        <li class="mui-table-view-cell">
		            <a class="mui-navigate-right">
		                 性别
					<p>男</p>  	                 
		            </a>
		        </li>
		        <li class="mui-table-view-cell">
		            <a class="mui-navigate-right">
		                出生年月
		                <p>1989.12.12</p> 
		            </a>
		        </li>
		    </ul>
		    <router-link to='wode' tag='a'class="btn">保存</router-link>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
.body{
	background: #f5f5f5;
	height: 680px;
}
.one{
	margin-top: 20px;
	line-height: auto;
	position: relative;
	font-family: "微软雅黑";
	font-size: 16px;
	color: #333333;
	.one{
		padding: 22px 15px;
	}
	p{
		position: absolute;
		right: 35px;
		bottom: 10px;
		img{
		width: 50px;
		height: 50px;
		}
	}
	
}
.btn{
	width: 90%;
	margin: 0 auto;
	display: block;
	color: #fff;
	background: #f08c34;
	text-align: center;
	height: 35px;
	line-height: 35px;
	margin-top: 30px;
	border-radius: 5px;
}
</style>