<template>
	<view class="Box ">
		<!-- 请在这个大Box里自行写内容 -->
		<view class="quanju">
			<view class="jiaju">
				<view class="fnx" v-for="item in swipers" :key="item.id">
					<text>{{item.title}}</text>
					<view class="card">
						<image class="i1" :src="item.info.video_img" mode="widthFix"></image>
						<button class="time">{{item.video_length}}</button>
					</view>
				</view>
			</view>
		</view>
		<!-- 第二部分  兔纸-->
		<view class="zoon">
			<view class="town">
				<view class="left">
					<span class="xzhen">动植小镇</span>
				</view>
				<view class="right">
					<span class="t-icon t-icon-zan"></span>
					<text>217</text>
					<span class="t-icon t-icon-shipin"></span>
					<text>4.22k</text>
					<span class="t-icon t-icon-weixin"></span>
					<text style="color: #000;">分享</text>
				</view>
			</view>
			<view class="yang" v-for="item in swiperss" :key="item.id">
				<view class="tu">
					<image :src="item.info.cover_img"></image>
				</view>
				<view class="tuzhi">
					<view class="zen">{{item.title}}</view>
					<view class="kongbai"></view>
					<view class="sky">
						<view class="me">动植小镇</view>
						<view class="you">
							<span class="t-icon t-icon-zan"></span>
							<text>{{item.praise_num}}</text>
							<span class="t-icon t-icon-shipin"></span>
							<text>4.22k</text>
							<span class="t-icon t-icon-weixin"></span>
							<text style="color: #000;">分享</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 第三部分 画眉 -->
		<view class="quanju">
			<view class="jiaju">
				<view class="fnx" v-for="item in number" :key="item.id">
					<text>{{item.title}}</text>
					<view class="card">
						<image class="i1" :src="item.info.video_img" mode="widthFix"></image>
						<button class="time">{{item.video_length}}</button>
					</view>
				</view>
			</view>
		</view>
	<!-- 第四部分 姬月季 -->
	<view class="zoon">
		<view class="town">
			<view class="left">
				<span class="xzhen">动植小镇</span>
			</view>
			<view class="right">
				<span class="t-icon t-icon-zan"></span>
				<text>217</text>
				<span class="t-icon t-icon-shipin"></span>
				<text>4.22k</text>
				<span class="t-icon t-icon-weixin"></span>
				<text style="color: #000;">分享</text>
			</view>
		</view>
		<view class="yang" v-for="item in numbers" :key="item.id">
			<view class="tu">
				<image :src="item.info.cover_img" mode=""></image>
			</view>
			<view class="tuzhi">
				<view class="zen">{{item.title}}</view>
				<view class="kongbai"></view>
				<view class="sky">
					<view class="me">动植小镇</view>
					<view class="you">
						<span class="t-icon t-icon-zan"></span>
						<text>{{item.praise_num}}</text>
						<span class="t-icon t-icon-shipin"></span>
						<text>4.22k</text>
						<span class="t-icon t-icon-weixin"></span>
						<text style="color: #000;">分享</text>
					</view>
				</view>
			</view>
		</view>
	</view>
	<!-- 第五部分 小仓鼠-->
	<view class="quanju">
		<view class="jiaju">
			<view class="fnx" v-for="item in log" :key="item.id">
				<text>{{item.title}}</text>
				<view class="card">
					<image class="i1" :src="item.info.video_img" mode="widthFix"></image>
					<button class="time">{{item.video_length}}</button>
				</view>
			</view>
		</view>
	</view>
	<!-- 第六部分 鸡心果-->
	<view class="zoon">
		<view class="town">
			<view class="left">
				<span class="xzhen">动植小镇</span>
			</view>
			<view class="right">
				<span class="t-icon t-icon-zan"></span>
				<text>217</text>
				<span class="t-icon t-icon-shipin"></span>
				<text>4.22k</text>
				<span class="t-icon t-icon-weixin"></span>
				<text style="color: #000;">分享</text>
			</view>
		</view>
		<view class="yang" v-for="item in logs" :key="item.id">
			<view class="tu">
				<image :src="item.info.cover_img" mode=""></image>
			</view>
			<view class="tuzhi">
				<view class="zen">{{item.title}}</view>
				<view class="kongbai"></view>
				<view class="sky">
					<view class="me">{{item.channel.name}}</view>
					<view class="you">
						<span class="t-icon t-icon-zan"></span>
						<text>{{item.praise_num}}</text>
						<span class="t-icon t-icon-shipin"></span>
						<text>4.22k</text>
						<span class="t-icon t-icon-weixin"></span>
						<text style="color: #000;">分享</text>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>
<script>
	import {
		myRequestGet
	} from '@/utils/request.js'
	export default {
		data() {
			return {
				swipers: {},
				swiperss: {},
				number:{},
				numbers:{},
				log:{},
				logs:{}
			};
		},
		created() {
			this.getSwipers();
			this.getSwiperss();
			this.getNumber();
			this.getNumbers();
			this.getLog();
			this.getLogs()
		},
		methods: {
			async getSwipers() {
				const res = await myRequestGet('/api/v1/fatiao/index/list?id=1&p=1&notchannel=27&order=1&limit=1&channel_id=28')
				//console.log(res)
				this.swipers = res
			},
			async getSwiperss() {
				const ress = await myRequestGet('/api/v1/fatiao/article/list?id=28&p=1&notchannel=27&order=1&limit=6&channel_id=28')
				console.log(ress)
				this.swiperss = ress
			},
			async getNumber() {
				const reg = await myRequestGet('/api/v1/fatiao/index/list?id=28&p=2&notchannel=27&order=1&limit=1&channel_id=28')
				//console.log(reg)
				this.number = reg
			},
			async getNumbers() {
				const regs = await myRequestGet('/api/v1/fatiao/article/list?id=28&p=2&notchannel=27&order=1&limit=6&channel_id=28')
				//console.log(regs)
				this.numbers = regs
			},
			async getLog() {
				const roe = await myRequestGet('/api/v1/fatiao/index/list?id=28&p=3&notchannel=27&order=1&limit=1&channel_id=28')
				console.log(roe)
				this.log = roe
			},
			async getLogs() {
				const roes = await myRequestGet('/api/v1/fatiao/article/list?id=28&p=3&notchannel=27&order=1&limit=6&channel_id=28')
				console.log(roes)
				this.logs = roes
			}
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	.Box {
		margin-top: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: 0 -1px 3px 4px #f4f4f5;
		.quanju {
			.jiaju {
				display: flex;
				width: 95%;
				margin: 0 auto;
				.fnx {
					flex: 1;
					text {
						display: block;
						margin: 12px 0px;
					}
					.card {
						position: relative;
						.i1 {
							width: 100%;
							border-radius: 5px;
						}
						.time {
							position: absolute;
							bottom: 11px;
							right: 5px;
							width: 52px;
							height: 20px;
							background-color: #7E7878;
							border-radius: 40px;
							text-align: center;
							line-height: 20px;
							font-size: 10px;
							color: #fff;
						}
					}
				}
			}
		}
		// 第二部分  动植小镇
		.zoon {
			width: 95%;
			padding: 10px;
			.town {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 25px;
				border-bottom: 1px solid #000;
				.left {
					.xzhen {
						font-size: 12px;
						height: 12px;
						line-height: 25px;
						border-bottom: 5px solid #97B7FF;
					}
				}
				.right {
					display: flex;
					width: 300rpx;
					justify-content: space-between;
					span {
						font-size: 12px;
						color: #bbb;
					}
					text {
						font-size: 12px;
						color: #bbb;
					}
				}
			}
			.yang {
				display: flex;
				margin-top: 12px;
				border-bottom: 1px solid #000;
				.tu {
					image {
						width: 250rpx;
						height: 150rpx;
						border-radius: 5px;
					}
				}
				.tuzhi {
					.zen {
						margin-left: 10px;
						font-size: 16px;
					}
					.kongbai {
						height: 40rpx;
					}
					.sky {
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 445rpx;
						margin-left: 10px;
						.me {
							font-size: 12px;
							line-height: 25px;
							border-bottom: 5px solid #97B7FF;
						}
						.you {
							display: flex;
							width: 300rpx;
							justify-content: space-between;
							span {
								font-size: 12px;
								color: #bbb;
							}
							text {
								font-size: 12px;
								color: #bbb;
							}
						}
					}
				}
			}
		}
	}
</style>