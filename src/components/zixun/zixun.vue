<template>
	<div class="body">
		<mt-header :title="tit">
		  <router-link to="/" slot="left" >
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1" >最新资讯</mt-tab-item>
		  <mt-tab-item id="2" @click="jk">健康专题</mt-tab-item>
		  <mt-tab-item id="3">个人收藏</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-zixuntainer -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
			<div class="Zixun">
				<h3>乙肝的共识和误区(上)</h3>
				<div class="zixun">
					<img src="./images/zixun.png" alt="" />
					<div class="right">
						<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
						<a href="">专题</a>
					</div>
				</div>
			</div>
			
			<div class="Zixun">
				<h3>乙肝的共识和误区(上)</h3>
				<div class="zixun">
					<img src="./images/zixun.png" alt="" />
					<div class="right">
						<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
						<a href="">专题</a>
					</div>
				</div>
			</div>
			<div class="Zixun">
				<h3>乙肝的共识和误区(上)</h3>
				<div class="zixun">
					<img src="./images/zixun.png" alt="" />
					<div class="right">
						<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
						<a href="" id="zt">推荐</a>
					</div>
				</div>
			</div>
			<div class="Zixun">
				<h3>乙肝的共识和误区(上)</h3>
				<div class="zixun">
					<img src="./images/zixun.png" alt="" />
					<div class="right">
						<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
						<a href="">专题</a>
					</div>
				</div>
			</div>
			<div class="Zixun">
				<h3>乙肝的共识和误区(上)</h3>
				<div class="zixun">
					<img src="./images/zixun.png" alt="" />
					<div class="right">
						<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
						<a href="">专题</a>
					</div>
				</div>
			</div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <div class="Jiankang">
				<div class="JK">
					<h3>【专题】 男性&女性</h3>
					<div class="jiankang">
						<img src="./images/zixun.png" alt="" />
						<div class="right">
							<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
							<span>2014-08-13</span>
						</div>
					</div>
				</div>
			</div>
			<div class="Jiankang">
				<div class="JK">
					<h3>【专题】 男性&女性</h3>
					<div class="jiankang">
						<img src="./images/zixun.png" alt="" />
						<div class="right">
							<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
							<span>2014-08-13</span>
						</div>
					</div>
				</div>
			</div>
			<div class="Jiankang" id="jiankang">
				<div class="JK">
					<h3>【专题】 男性&女性</h3>
					<div class="jiankang">
						<img src="./images/zixun.png" alt="" />
						<div class="right">
							<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
							<span>2014-08-13</span>
						</div>
					</div>
				</div>
			</div>
			<div class="Jiankang">
				<div class="JK">
					<h3>【专题】 男性&女性</h3>
					<div class="jiankang">
						<img src="./images/zixun.png" alt="" />
						<div class="right">
							<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
							<span>2014-08-13</span>
						</div>
					</div>
				</div>
			</div>
			<div class="Jiankang">
				<div class="JK">
					<h3>【专题】 男性&女性</h3>
					<div class="jiankang">
						<img src="./images/zixun.png" alt="" />
						<div class="right">
							<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
							<span>2014-08-13</span>
						</div>
					</div>
				</div>
			</div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    	<div class="Shoucang">
		    		<img src="./images/shoucang.png" alt="" />
		    		<p>未收藏资讯</p>
		    	</div>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import { Navbar, TabItem } from 'mint-ui';
	export default {
		data(){
			return {
				selected:"1",
				tit:"医生详情"
			}
		},
		methods:{
			jk(){
				this.tit="健康百科";
				alert(111)
			}
		}
	}
</script>

<style scoped lang="less">
.body{
	width: 100%;
	height: 100%;
	background: #f5f5f5;
}
a{
	color: #6e7b86;
	font-size: 18px;
}
.mint-navbar .mint-tab-item.is-selected{
	color: #f08c34;
	border-bottom: none;
	margin-bottom:0px;
}
	.Zixun{
		padding: 15px 0;
		width: 90%;
		margin: 0 auto;
		border-bottom: 1px solid #d4dadc;
		h3{
				color: #1a1d1d;
				font-size: 16px;
				margin-bottom: 10px;
			}
		.zixun{
			overflow: hidden;
			img{
				width: 100px;
				height: 70px;
				float: left;
				width: 30%;
				margin-right: 10px;
			}
			.right{
				float: right;
				width: 65%;
				line-height: 25px;
				a{
					float: right;
					color: #fff;
					background: #f08c34;
					width: 50px;
					height: 20px;
					font-size: 14px;
					line-height: 20px;
					text-align: center;
					border-radius: 3px;
					margin-top: 5px;
				}
				#zt{
					background: #6dba42;
				}
			}	
		}	
	}
	.Jiankang{
		width: 100%;
		background: #fff;
		margin-top: 20px;
		border-bottom: 1px solid #d4dadc;
	.JK{
		padding: 15px 0;
		width: 90%;
		margin: 0 auto;
		
		h3{
				color: #1a1d1d;
				font-size: 16px;
				padding-left: 10px;
				margin-bottom: 10px;
			}
		.jiankang{
			overflow: hidden;
			img{
				width: 100px;
				height: 70px;
				float: left;
				width: 30%;
				margin-right: 10px;
			}
			.right{
				float: right;
				width: 65%;
				line-height: 25px;
				span{
					float: right;
					font-size: 14px;
					color: #8c8c8c;
				}
				
			}	
		}	
	}
 }
 .Shoucang{
 	width: 100%;
 	margin: 0 auto;
 	text-align: center;
 	padding-bottom: 280px;
 	img{
 		margin-top: 50px;
 		width: 200px;
 		height: 200px;
 	}
 	p{
 		margin-top: 30px;
 		font-size: 20px;
 		color: #bebebe;
 	}
 }
</style>