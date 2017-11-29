<template>
	<div>
		<mt-header fixed title="账户设置">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<ul class="mui-table-view one">
		    <li class="mui-table-view-cell mui-media">
		        <a href="javascript:;">
		            <img class="mui-media-object mui-pull-left" src="./images/me-user.png">
		            <div class="mui-media-body">
		                13920484929
		                <p class="mui-ellipsis">三聚药业</p>
		                <img src="./images/me-ewm.png" alt=""  class="img"/>
		            </div>
		        </a>
		    </li>
		</ul>
		<ul class="mui-table-view two">
		        <li class="mui-table-view-cell">
		        	<router-link to="/xinxi" tag='a' class="mui-navigate-right">
		           
		            	<img src="./images/me-gr.png" alt="" />
		                	个人信息
		           </router-link>
		        </li>
				<li class="mui-table-view-cell">
		        	<router-link to="/guanzhu" tag='a' class="mui-navigate-right">
		           
		            	<img src="./images/me-wd.png" alt="" />
		                	我的关注
		           </router-link>
		        </li>
		        <li class="mui-table-view-cell">
		        	<router-link to="/tuijian" tag='a' class="mui-navigate-right">
		           
		            	<img src="./images/me-tj.png" alt="" />
		                	推荐药店
		           </router-link>
		        </li>
		    </ul>
		    
		    <ul class="mui-table-view two">
		        <li class="mui-table-view-cell">
		        	<router-link to="jinyao" tag='a' class="mui-navigate-right">
		           
		            	<img src="./images/me-jy.png" alt="" />
		                	进药申请
		           </router-link>
		        </li>
				<li class="mui-table-view-cell">
		        	<router-link to="xinxi" tag='a' class="mui-navigate-right">
		           
		            	<img src="./images/me-sz.png" alt="" />
		                	设置
		           </router-link>
		       </li>
		    </ul>
	</div>
</template>

<script>
</script>

<style scoped lang='less'>
.mint-header{
	background: #2ca7d8;
	
}
.one{
	margin-top: 55px;
}
.mui-table-view-cell > a:not(.mui-btn){
	position: relative;
	.img{
		width: 40px;
		height: 40px;
		position: absolute;
		right: 10px;
		bottom: 15px;
	}
	line-height:22px
}
.two{
	font-size: 15px;
	color: #646464;
	margin-top: 20px;
	img{
		width: 25px;
		height: 25px;
		margin-right: 5px;
	}
}
</style>