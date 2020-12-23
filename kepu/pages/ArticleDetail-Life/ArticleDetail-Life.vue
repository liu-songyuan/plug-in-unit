<template>
	<view class="v">
		<view class="v1">{{xqsj.title}}</view>
		<view class="v2">
			<image :src="xqsj.channel&&xqsj.channel.channel_img" mode="widthFix"></image>
			<text class="t1">{{xqsj.channel&&xqsj.channel.name}}</text>
			<text class="t2">2018-12-05</text>
		</view>
		<view class="c1">
				<!-- #ifdef H5-->
				<rich-text :nodes="content"></rich-text>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN/APP-PLUS-->
				<rich-text :nodes="content"></rich-text>
				<!-- #endif -->
				<!-- #ifdef MP-ALIPAY -->
				<rich-text :nodes="htmlNodes"></rich-text>
				<!-- #endif -->
		</view>
		<view class="dx"></view>
		<view class="dd">
			<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:blue':''"></text>{{xqsj.play_num}}
		</view>
		<view class="fx" @click="open">
			<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
			<text>分享</text>
		</view>

		<!-- <view class="lii"></view> -->

		<view class="cnxh">
			<view class="lii"></view>
			<text class="cn">猜你喜欢</text>
			<view v-for="item in xqsjj" :key="item.id" @click="goshp(item)">
				<image :src="item.video_img"></image>
				<text class="cnxht1">{{item.author_name}}</text>
				<view class="bejs"></view>
				<view class="cnxhfx">
					<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>{{item.play_num}}
					<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>{{item.praise_num}}
					<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
					<text @click.stop="open">分享</text>
				</view>
			</view>
		</view>
		<view class="l"></view>
		<view>
			<view @click="goDet(item)" class="cnxhe" v-for="item in xqlb" :key="item.id">
				<view class="cnxhev1">
					<image :src="item.c_img"></image>
					<text>{{item.title}}</text>
					<view class="v5"></view>
					<text class="cnxhev1t1">{{item.author_name}}</text>
					<view class="bjys"></view>
					<view class="cnxhev1fx">
						<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>{{item.play_num}}
						<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>{{item.praise_num}}
						<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
						<text @click.stop="open">分享</text>
					</view>
				</view>
				<view class="ll"></view>
			</view>
			<!-- <view class="zh"></view> -->
		</view>
		<view>
			<uni-popup ref="sharepopup" type="bottom">
				<share-btn :sharedataTemp="sharedata"></share-btn>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	import {
		formatRichText
	} from '@/utils/format.js'
	import parse from '@/utils/htmlparser.js';
	export default {
		data() {
			return {
				id: "",
				xqsj: {},
				content: [],
				htmlNodes: [],
				sharedata: '',
				flag: false,
				xqsjj: [],
				xqlb: []
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
			this.getDetailContent()
			this.getSwiperss()
			this.getSwipers()
			console.log(this.id)
		},
		methods: {
			async getSwipers() {
				const res = await myRequestGet('/api/v1/fatiao/index/more-detail', {
					channel_id: 1,
					articleLimit: 8,
					videoLimit: 1,
					clearcache: 'redis',
					limit: 1
				})
				//console.log(res)
				this.xqsjj = res.list
			},
			async getSwiperss() {
				const ress = await myRequestGet('/api/v1/fatiao/article/more-article', {
					channel_id: 1,
					articleLimit: 8,
					videoLimit: 1,
					clearcache: 'redis',
					limit: 8
				})
				//console.log(ress, "4444444444444")
				this.xqlb = ress.list
			},
			goshp(item) {
				uni.navigateTo({
					url: `/pages/VideoDetail-Life/VideoDetail-Life?id=${item.id}`
				})
			},
			goDet(item) {
				uni.navigateTo({
					url: `/pages/ArticleDetail-Life/ArticleDetail-Life?id=${item.id}`
				})
			},
			one() {
				this.flag = !this.flag
			},
			addone(i) {
				if (this.flag == false) {
					this.xqsj.play_num = parseInt(this.xqsj.play_num) + 1
					this.flag = true
				} else {
					this.xqsj.play_num = this.xqsj.play_num - 1
					this.flag = false
				}
			},
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				// console.log(res)
				//#ifdef MP-ALIPAY
				//this.htmlNodes = parse(this.newsDetail.content)
				//this.xqsj = res
				//#endif
				this.xqsj = res
			},
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				// console.log(this.content)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich - text不支持字符串， 需要是nodes数组
				this.htmlNodes = parse(this.content)
				//#endif
			},
			open: function() {
				this.$refs.sharepopup.open();
			},

		}
	}
</script>

<style lang="scss" scoped>
	.v {
		.l {
			width: 95%;
			// height: 100rpx;
			border: 1px solid #DCDFE6;
			background-color: #DCDFE6;
			margin-top: 30rpx;
			margin-left: 15rpx;
		}

		.cnxh {
			.lii {
				position: absolute;
				top: -60rpx;
				// left: 20rpx;
				width: 100%;
				height: 10rpx;
				border: 1px solid #DCDFE6;
				background-color: #DCDFE6;
				opacity: 0.5;
			}

			.cn {
				margin-left: 30rpx;
			}

			position: relative;

			.cnxhfx {
				position: absolute;
				right: 50rpx;
				bottom: 0rpx;

				text {
					margin-left: 0rpx;
				}
			}

			.bejs {
				width: 120rpx;
				height: 18rpx;
				background-color: #0000FF;
				margin-left: 30rpx;
				margin-top: -18rpx;
				opacity: 0.5;
			}

			.cnxht1 {
				font-size: 30rpx;
				margin-left: 30rpx;
			}

			margin-top: 30rpx;

			image {
				margin-top: 30rpx;
				width: 95%;
				margin-left: 19rpx;
				// margin: 30rpx auto 0rpx auto;
				border-radius: 10rpx;
			}
		}

		.cnxhe {
			width: 100%;
			position: relative;

			// .zh {
			// 	position: absolute;
			// 	width: 100%;
			// 	height: 30rpx;
			// 	left: 0rpx;
			// 	bottom: 0rpx;
			// 	background-color: #0000FF;
			// }
			.ll {
				position: absolute;
				bottom: -20rpx;
				width: 95%;
				// height: 100rpx;
				border: 1px solid #DCDFE6;
				background-color: #DCDFE6;
				margin-left: 15rpx;
				opacity: 0.5;
			}

			.cnxhev1 {
				margin-top: 40rpx;
				margin-left: 30rpx;

				// margin-top: 10rpx;
				// margin-top: 300rpx;
				.bjys {
					width: 128rpx;
					height: 20rpx;
					background-color: #0000FF;
					position: absolute;
					left: 285rpx;
					bottom: 0rpx;
					opacity: 0.5;
				}

				.cnxhev1fx {
					position: absolute;
					right: 30rpx;
					bottom: 0rpx;
					font-size: 20rpx;
				}

				.cnxhev1t1 {
					position: absolute;
					left: 280rpx;
					bottom: 0rpx;
				}

				image {
					width: 250rpx;
					height: 140rpx;
					float: left;
					border-radius: 10rpx;
					// background-color: #333333;
				}

				text {
					// float: right;
					margin-left: 4rpx;
					font-weight: 100;
				}

				.v5 {
					clear: both;
				}
			}
		}

		.dd {
			// padding: 20rpx;
			// margin-bottom: -50rpx;
			margin-left: 30rpx;
			margin-top: 20rpx;

			// wz1 {
			// 	margin-left: 100rpx;
			// }

			// image {
			// 	position: absolute;
			// 	bottom: 0rpx;
			// 	left: 0rpx;
			// 	width: 50%;
			// }
		}

		.fx {
			margin-left: 600rpx;
			margin-top: -40rpx;
			height: 100rpx;
		}

		.dx {
			border: 2rpx solid #BCBEC2;
			background-color: #BCBEC2;
			width: 95%;
			margin: 0 auto;
		}

		.v1 {
			font-size: 40rpx;
			margin-left: 20rpx;
		}

		.c1 {
			width: 90%;
			margin: 70rpx auto 0rpx auto;
			line-height: 70rpx;
		}

		.v2 {
			position: relative;

			image {
				width: 50rpx;
				position: absolute;
				top: 10rpx;
				left: 15rpx;
			}

			.t1 {
				font-size: 26rpx;
				position: absolute;
				top: 20rpx;
				left: 80rpx;
			}

			.t2 {
				font-size: 26rpx;
				position: absolute;
				top: 20rpx;
				left: 190rpx;
				color: #C0C4CC;
			}
		}


		// .animate-wrap{
		// 	display: inline-block;
		// 	margin-right: 10px;
		// 	position: absolute;
		// 	width: 100rpx;
		// }
		// .content{
		// 	position: absolute;
		// 	bottom: 50rpx;
		// 	right: 200rpx;
		// }
		.tx {
			position: absolute;
			bottom: -100rpx;
			left: 0rpx;

			.logo {
				//display: inline-block;
				//position: absolute;
				// right: 0;
				// top: 0;
				width: 70rpx;
				height: 70rpx;
			}

			.aa {
				position: absolute;
				font-size: 30rpx;
				color: white;
				text-align: center;
				line-height: 50rpx;
				width: 80rpx;
				//transform: translateY(0);
			}
		}
	}
</style>
