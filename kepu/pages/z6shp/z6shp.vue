<template>
	<view class="v1">
		<view class="v2">
			<video :src="xqsj.info&&xqsj.info.video_url" object-fit="cover"></video>
		</view>
		<text>{{xqsj.title}}</text>
		<view class="v3">
			<image :src="xqsj.channel&&xqsj.channel.channel_img" mode="widthFix"></image>
			<text class="t1">{{xqsj.channel.name&&xqsj.channel.name}}</text>
			<text class="t2">2018-12-05</text>
		</view>
		<view class="v4">
			{{xqsj.info.video_note}}
		</view>
		<view class="li"></view>
		<view class="dd">
			<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:blue':''"></text>{{xqsj.play_num&&xqsj.play_num}}
		</view>
		<view class="fx" @click="open">
			<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
			<text>分享</text>
		</view>
		<view class="lii"></view>



		<!-- 猜你喜欢视频页面 -->
		<view class="cnxh">
			<text>猜你喜欢</text>
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
		<!-- 猜你喜欢列表页 -->
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
	export default {
		data() {
			return {
				id: "",
				xqsj: {},
				sharedata: '',
				detailInfo: {},
				flag: false,
				xqsjj: [],
				xqlb: []
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getSwipers()
			this.getNewsDetail()
			this.getSwiperss()
			//this.getDetailContent()

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
				console.log(ress, "4444444444444")
				this.xqlb = ress.list
			},
			goshp(item) {
				uni.navigateTo({
					url: `/pages/z6shp/z6shp?id=${item.id}`
				})
			},
			goDet(item) {
				uni.navigateTo({
					url: `/pages/z6xq/z6xq?id=${item.id}`
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
				const res = await myRequestGet('/api/v1/fatiao/index/detail?id=' + this.id)
				// console.log(res)
				//#ifdef MP-ALIPAY
				//this.htmlNodes = parse(this.newsDetail.content)
				//this.xqsj = res
				//#endif
				this.xqsj = res
				//this.getData()
			},
			open: function() {
				this.$refs.sharepopup.open();
			},
		},
	}
</script>
<style lang="scss" scoped>
	.v1 {
		.cnxh {
			position: relative;

			.cnxhfx {
				position: absolute;
				right: 50rpx;
				top: 560rpx;

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

			.cnxhev1 {
				margin-top: 20rpx;
				margin-left: 30rpx;

				// margin-top: 10rpx;
				// margin-top: 300rpx;
				.bjys {
					width: 120rpx;
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
					height: 200rpx;
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
			position: absolute;
			top: 770rpx;
			left: 0rpx;

			wz1 {
				margin-left: 100rpx;
			}

			image {
				position: absolute;
				bottom: 0rpx;
				left: 0rpx;
				width: 50%;
			}
		}

		.li {
			position: absolute;
			top: 750rpx;
			left: 20rpx;
			width: 90%;
			border: 1px solid #DCDFE6;
			background-color: #DCDFE6;
		}

		.lii {
			position: absolute;
			top: 830rpx;
			// left: 20rpx;
			width: 100%;
			height: 10rpx;
			border: 1px solid #DCDFE6;
			background-color: #DCDFE6;
		}

		.fx {
			margin-top: 290rpx;
			margin-left: 560rpx;
			font-weight: 100;

			text {
				font-size: 40rpx;
				font-weight: 100;
				margin-left: 4rpx;
			}
		}

		position: relative;

		.v4 {
			position: absolute;
			top: 550rpx;
			left: 20rpx;
			font-size: 20rpx;
			line-height: 50rpx;
			text-indent: 2em;
			width: 95%;
			font-weight: 100;
		}

		.v3 {
			position: relative;

			image {
				width: 70rpx;
				position: absolute;
				left: 25rpx;
			}

			.t1 {
				font-size: 14px;
				font-weight: 100;
				position: absolute;
				top: 20rpx;
				left: 85rpx;
			}

			.t2 {
				font-size: 14px;
				font-weight: 100;
				position: absolute;
				left: 215rpx;
				top: 22rpx;
				color: #BCBEC2;
			}
		}

		text {
			font-size: 30rpx;
			font-weight: 900;
			margin-left: 30rpx;
		}

		.v2 {
			width: 100%;
			height: 400rpx;
			margin-bottom: 30rpx;

			video {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
