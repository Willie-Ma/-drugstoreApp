<template>
	<div>
		<mt-header title="销售记录">
		  <mt-button icon="jia" slot="right"><span class="add" @click="adds">+</span></mt-button>
		</mt-header>
		<div class="kuang" v-show="add">
			<router-link to="/saoyao" tag="p"><img src="./img/sys.png" alt="" /> 扫码加药代</router-link>
			<p><img src="./img/user.png" alt="" /> 输入医生邀请码 </p>
		</div>
		<div class="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img src="./img/banner1.jpg"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="./img/banner2.jpg"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="./img/banner3.jpg"/>
			  </mt-swipe-item>
			</mt-swipe>
		</div>

		<div class="con">
		
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1"><p>本周</p></mt-tab-item>
			  <mt-tab-item id="2"><p>历史</p></mt-tab-item>
			</mt-navbar>
			
			
			<mt-tab-container v-model="selected">
				
			<mt-tab-container-item id="1" v-show='true'>
			  	
			<ul class="mui-table-view">
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="./img/home-yao.png">
			            <div class="mui-media-body mui-navigate-right">
			               	 周四 <span>2015.6.23</span>
			                <p class="mui-ellipsis one"></p>
			                <a href="" class="a-one">30盒</a>
			            </div>
			        </a>
			    </li>
				<li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="./img/home-yao2.png">
			            <div class="mui-media-body mui-navigate-right">
			               	 周三 <span>2015.6.22</span>
			                <p class="mui-ellipsis two"></p>
			                <a href="" class="a-two">65盒</a>
			            </div>
			        </a>
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="./img/home-yao2.png">
			            <div class="mui-media-body mui-navigate-right">
			               	 周二 <span>2015.6.21</span>
			                <p class="mui-ellipsis two three"></p>
			                <a href="" class="a-two">58盒</a>
			            </div>
			        </a>
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="./img/home-yao2.png">
			            <div class="mui-media-body mui-navigate-right">
			               	 周一 <span>2015.6.20</span>
			                <p class="mui-ellipsis two four"></p>
			                <a href="" class="a-two">87盒</a>
			            </div>
			        </a>
			    </li>
			</ul>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			<ul class="mui-table-view">

				<li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="./img/home-yao2.png">
			            <div class="mui-media-body mui-navigate-right">
			               	 周日 <span>2015.6.23</span>
			                <p class="mui-ellipsis two ls-one"></p>
			                <a href="" class="a-two">65盒</a>
			            </div>
			        </a>
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="./img/home-yao2.png">
			            <div class="mui-media-body mui-navigate-right">
			               	 周六 <span>2015.6.22</span>
			                <p class="mui-ellipsis two ls-two"></p>
			                <a href="" class="a-two">65盒</a>
			            </div>
			        </a>
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="./img/home-yao2.png">
			            <div class="mui-media-body mui-navigate-right">
			               	 周五 <span>2015.6.21</span>
			                <p class="mui-ellipsis two ls-three"></p>
			                <a href="" class="a-two">58盒</a>
			            </div>
			        </a>
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="./img/home-yao2.png">
			            <div class="mui-media-body mui-navigate-right">
			               	 周四 <span>2015.6.20</span>
			                <p class="mui-ellipsis two ls-four"></p>
			                <a href="" class="a-two">87盒</a>
			            </div>
			        </a>
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="./img/home-yao2.png">
			            <div class="mui-media-body mui-navigate-right">
			               	 周三 <span>2015.6.20</span>
			                <p class="mui-ellipsis two ls-five"></p>
			                <a href="" class="a-two">105盒</a>
			            </div>
			        </a>
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="./img/home-yao2.png">
			            <div class="mui-media-body mui-navigate-right">
			               	 周二 <span>2015.6.20</span>
			                <p class="mui-ellipsis two ls-four"></p>
			                <a href="" class="a-two">87盒</a>
			            </div>
			        </a>
			    </li>
			</ul>
			  </mt-tab-container-item>
	
			</mt-tab-container>
			
		</div>
		
		<mt-tabbar v-model="selected1" fixed>
		  <mt-tab-item id="首页">
		  	<router-link to="/home" tag="a">
			   <span class="mui-icon  mui-icon mui-icon-home"	></span><br />
				   首页
			</router-link> 
		  </mt-tab-item>
		  <mt-tab-item id="讲堂">
		   <router-link to="/zixun" tag="a">
		  		 <span class="mui-icon mui-icon mui-icon-compose "></span><br />
			        讲堂
			</router-link> 
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		  	<router-link to="/wode" tag="a">
			   <span class="mui-icon mui-icon mui-icon-person "></span><br />
				        我的
			</router-link>   
		  </mt-tab-item>

		</mt-tabbar>
	</div>
</template>

<script>
	import { Swipe, SwipeItem ,Navbar, TabItem } from 'mint-ui';
	export default {
		data(){
			return {
				selected:"1",
				selected1:"首页",
				add:false
			}
		},
		methods:{
			adds(){
				
				if(!(this.add)){
					this.add=true
				}else{
					this.add=false
				}
			}
		},
		watch: {
		    selected: function (val, oldVal) {
		        console.log(val)
		    }
		}
	}
</script>

<style scoped lang='less'>
.kuang{
	width:150px;
	height: 80px;
	background: #fff;
	border-radius: 8px;
	position: fixed;
	top: 60px;
	right: 15px;
	z-index: 99;
	p{
		width: 90%;
		padding:8px 0;
		border-bottom: 1px solid #e1e1e1;
		margin: 0 auto;
		img{
			width: 15%;
		}
	}
}
.add{
	font-size: 24px;
}
.con{
	background:#f5f5f5;
	margin-bottom: 50px;
}
	.mint-header{
		background: #2ca7d8;
	}
	.banner{
		width: 100%;
		height:13rem;
		background: gold;
		img{
			width: 100%;
			height: 13rem;
		}
	}

	.mint-navbar .mint-tab-item.is-selected{
		border-bottom:none;
		p{
			color: #84c364;
			width: 50px;
			text-align: center;
			margin: 0 auto;
			border-bottom: 2px solid #84c364;
			padding-bottom: 7px;
			line-height: 28px;
		}
		
	}
	.mint-navbar .mint-tab-item{
		padding: 10px 0 0 0;
		p{
			line-height: 28px;
		}
	}
	.mint-navbar{
		border-bottom: 1px solid #e1e1e1 ;
		margin-bottom:14px ;
	}
	.mint-tab-container{
		background: #fff;
	}
	.mui-table-view-cell > a:not(.mui-btn){
		font-size:15px;
		font-family: "微软雅黑";
		position: relative;
		span{
			font-size: 12px;
			margin-left: 5px;
			color: #666;
		}
		.a-one{
			position: absolute;
			right: 35px;
			bottom: 23px;
			color: #f08c34;
			font-size: 15px;
		}
		.a-two{
			position: absolute;
			right: 35px;
			bottom: 23px;
			font-size: 15px;
			color: #666666;
		}
		.one{
			width: 60px;
			height: 6px;
			background:#ff6b3d ;
			border-radius: 8px;
			margin-top: 10px;
		}
		.two{
			width: 100px;
			height: 6px;
			background:#cdcdcd ;
			border-radius: 8px;
			margin-top: 10px;
		}
		.three{
			width: 80px;
		}
		.four{
			width: 120px;
		}
		.ls-one{
			width: 60px;
		}
		.ls-two{
			width: 120px;
		}
		.ls-three{
			width: 100px;
		}
		.ls-four{
			width: 150px;
		}
		.ls-five{
			width: 180px;
		}
	}
	.mint-tab-item-label{
		a{
			color: #626368;
		}
		span{
			padding-bottom: 5px;
		}
	}
</style>