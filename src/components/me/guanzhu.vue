<template>
	<div class="body">
		<mt-header title="我的关注">
		  <router-link to="wode" slot="left">
		    <mt-button icon="back">微信</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="con">
			<router-link to="wenben" tag="div" class="Jiankang">
				<div class="JK">
					<div class="jiankang">
						<img src="./images/gz-one.png" alt="" />
						<div class="right">
							<h6>老吃太饱真会撑出十种甲方姜</h6>
							<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲...</p>
							<span>2015-05-01</span>
						</div>
					</div>
				</div>
			</router-link>
			<router-link to="wenben" tag="div" class="Jiankang">
				<div class="JK">
					<div class="jiankang">
						<img src="./images/gz-two.png" alt="" />
						<div class="right">
							<h6>老吃太饱真会撑出十种甲方姜</h6>
							<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲...</p>
							<span>2015-05-01</span>
						</div>
					</div>
				</div>
			</router-link>
			<router-link to="wenben" tag="div" class="Jiankang">
				<div class="JK">
					<div class="jiankang">
						<img src="./images/gz-three.png" alt="" />
						<div class="right">
							<h6>老吃太饱真会撑出十种甲方姜</h6>
							<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲...</p>
							<span>2015-05-01</span>
						</div>
					</div>
				</div>
			</router-link>
			<router-link to="wenben" tag="div" class="Jiankang">
				<div class="JK">
					<div class="jiankang">
						<img src="./images/gz-four.png" alt="" />
						<div class="right">
							<h6>老吃太饱真会撑出十种甲方姜</h6>
							<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲...</p>
							<span>2015-05-01</span>
						</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
//	export default{
//		methods:{
//			returns(){
//				window.history.go(-1);
//				console.log(1)
//			},
//		}
//	}
</script>

<style scoped lang="less">
.body{
	width: 100%;
	height: 680px;
	background:#f5f5f5;
}
.Jiankang{
		width: 100%;
		background: #fff;
		margin-top: 12px;
		border-bottom: 1px solid #d4dadc;
		border-top: 1px solid #d4dadc;
	.JK{
		padding: 10px 0;
		width: 90%;
		margin: 0 auto;
		
		.jiankang{
			overflow: hidden;
			img{
				width: 100px;
				height: 80px;
				float: left;
				width: 30%;
				margin-right: 10px;
				border: 1px solid #e1e1e1;
			}
			.right{
				float: right;
				width: 65%;
				position: relative;
				line-height: 20px;
				h6{
					font-size: 15px;
					color: #030303;
					margin-bottom: 10px;
				}
				span{
					position: absolute;
					bottom: 0px;
					right: 5px;
					font-size: 12px;
					color: #8c8c8c;
				}
				
			}	
		}	
	}
 }
</style>