<template>
	<view class="v">
		<view class="v1">{{xqsj.title}}</view>
		<view class="v2">
			<image :src="xqsj.channel.channel_img" mode="widthFix"></image>
			<text class="t1">{{xqsj.channel.name}}</text>
			<text class="t2">2018-12-05</text>
		</view>
		<view class="c1">
			<!-- #ifdef H5 -->
			<rich-text :nodes="content"></rich-text>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
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
				flag: false
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
			this.getDetailContent()
			console.log(this.id)
		},
		methods: {
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
