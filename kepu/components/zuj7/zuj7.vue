<template>
	<view class="Box">

			<!-- 如何画美人鱼-->
			<view class="a" v-for="item in swipers" :key="item.id">
				<text class="top">{{item.title}}</text>
				<image class="im" :src="item.info.video_img" mode="widthFix"></image>
				<view class="atim">{{item.video_length}}</view>
				<view class="bto">
					<text class="btoa">兴趣爱好</text>
					<uni-icons type="hand-thumbsup" size="14" color="#a4b0be">fgsh</uni-icons>
					<text>{{item.praise_num}}</text>
					<uni-icons type="eye" size="14" color="#a4b0be"></uni-icons>
					<text>{{item.play_num}}</text>
					<uni-icons type="weixin" size="14" color="#00aa00"></uni-icons>
					<text class="fen">分享</text>
				</view>
			</view>

			<!-- 列表 -->
			<view class="ab" v-for="item in swipers1" :key="item.id">
				<view class="aba">
					<image :src="item.info.cover_img" mode="widthFix"></image>
					<view class="abr">
						<view class="abrt">{{item.title}}</view>
						<view class="abto">
							<view class="abtot">兴趣爱好</view>
							<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
							<view>{{item.praise_num}}</view>
							<uni-icons type="eye" size="14" color="#a4b0be"></uni-icons>
							<view>7234</view>
							<uni-icons type="weixin" size="15" color="#00aa00"></uni-icons>
							<view class="fen">分享</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 如何画蛇-->
			<view class="a" v-for="item in swipers2" :key="item.id">
				<text class="top">{{item.title}}</text>
				<image class="im" :src="item.info.video_img" mode="widthFix"></image>
				<view class="atim">{{item.video_length}}</view>
				<view class="bto">
					<text class="btoa">兴趣爱好</text>
					<uni-icons type="hand-thumbsup" size="18" color="#a4b0be">fgsh</uni-icons>
					<text>{{item.praise_num}}</text>
					<uni-icons type="eye" size="18" color="#a4b0be"></uni-icons>
					<text>{{item.play_num}}</text>
					<uni-icons type="weixin" size="18" color="#00aa00"></uni-icons>
					<text class="fen">分享</text>
				</view>
			</view>
			<!-- 画蛇列表 -->
			<view class="ab" v-for="item in swipers3" :key="item.id">
				<view class="aba">
					<image :src="item.info.cover_img" mode="widthFix"></image>
					<view class="abr">
						<view class="abrt">{{item.title}}</view>
						<view class="abto">
							<view class="abtot">兴趣爱好</view>
							<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
							<view>{{item.praise_num}}</view>
							<uni-icons type="eye" size="14" color="#a4b0be"></uni-icons>
							<view>7234</view>
							<uni-icons type="weixin" size="18" color="#00aa00"></uni-icons>
							<view>分享</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 如何画花朵-->
			<view class="a" v-for="item in swipers4" :key="item.id">
				<text class="top">{{item.title}}</text>
				<image class="im" :src="item.info.video_img" mode="widthFix"></image>
				<view class="atim">{{item.video_length}}</view>
				<view class="bto">
					<text class="btoa">兴趣爱好</text>
					<uni-icons type="hand-thumbsup" size="18" color="#a4b0be">fgsh</uni-icons>
					<text>{{item.praise_num}}</text>
					<uni-icons type="eye" size="18" color="#a4b0be"></uni-icons>
					<text>{{item.play_num}}</text>
					<uni-icons type="weixin" size="18" color="#00aa00"></uni-icons>
					<text class="fen">分享</text>
				</view>
			</view>
			<!-- 玉米钓青鱼列表 -->
			<view class="ab" v-for="item in swipers5" :key="item.id">
				<view class="aba">
					<image :src="item.info.cover_img" mode="widthFix"></image>
					<view class="abr">
						<view class="abrt">{{item.title}}</view>
						<view class="abto">
							<view class="abtot">兴趣爱好</view>
							<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
							<view>{{item.praise_num}}</view>
							<uni-icons type="eye" size="14" color="#a4b0be"></uni-icons>
							<view>7234</view>
							<uni-icons type="weixin" size="18" color="#00aa00"></uni-icons>
							<view>分享</view>
						</view>
					</view>
				</view>
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
				swipers: [],
				swipers1: [],
				swipers2: [],
				swipers3: [],
				swipers4: [],
				swipers5: [],
			};
		},
		created() {
			this.getSwipers();
			this.getSwipers1();
			this.getSwipers2();
			this.getSwipers3();
			this.getSwipers4();
			this.getSwipers5();
		},
		methods: {
			async getSwipers() {
				let result = await myRequestGet('/api/v1/fatiao/index/list',{
					id:37,
					p:1,
					notchannel:27,
					order:1,
					limit:1,
					channel_id:37
				})
				this.swipers = result;
			},
			async getSwipers1() {
				let result = await myRequestGet('/api/v1/fatiao/article/list',{
					id:37,
					p:1,
					notchannel:27,
					order:1,
					limit:6,
					channel_id:37
				});
				this.swipers1 = result;
			},
			async getSwipers2() {
				let result = await myRequestGet('/api/v1/fatiao/index/list',{
					id:37,
					p:2,
					notchannel:27,
					order:1,
					limit:1,
					channel_id:37
				});
				this.swipers2 = result;
			},
			async getSwipers3() {
				let result = await myRequestGet('/api/v1/fatiao/article/list',{
					id:37,
					p:2,
					notchannel:27,
					order:1,
					limit:6,
					channel_id:37,
				})
				this.swipers3 = result;
			},
			async getSwipers4() {
				let result = await myRequestGet('/api/v1/fatiao/index/list',{
					id:37,
					p:3,
					notchannel:27,
					order:1,
					limit:1,
					channel_id:37,
				})
				this.swipers4 = result;
			},
			async getSwipers5() {
				let result = await myRequestGet('/api/v1/fatiao/article/list',{
					id:37,
					p:3,
					notchannel:27,
					order:1,
					limit:6,
					channel_id:37,
				})
				this.swipers5 = result;
			}

		}
	};
</script>
<style lang="scss">
	.Box {
		margin-top: 10rpx;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		box-shadow: 0 -1px 3px 4px #f4f4f5;
		background-color: #eef5f5;

		.a {
			border-bottom: 3rpx solid #989f99;
			padding-top: 28rpx;

			.top {
				padding-left: 20rpx;
				font-size: 40rpx;
				font-weight: 540;
			}

			.im {
				width: 94%;
				margin:15rpx 23rpx 0;
				border-radius: 20rpx;
			}

			.atim {
				margin: -55rpx 50rpx 0;
				padding: 0 10rpx;
				border-radius: 200rpx;
				font-size: 3rpx;
				position: relative;
				color: #FFFFFF;
				background-color: #64646c;
				float: right;
			}

			.bto {
				height: 60rpx;
				text-align: right;
				padding: 5rpx 20rpx 0 0;

				.btoa {
					font-size: 28rpx;
					font-weight: 700;
					color: #000007;
					padding-left: 20rpx;
					float: left;
				}
				text {
					opacity: 0.8;
					font-size: 18rpx;
					color: #736c79;
					font-weight: 650;
					padding-right: 15rpx;
				}

				.fen {
					font-size: 20rpx;
					color: #060607;

				}
			}
		}

		.ab {
			padding: 20rpx 0;
			border-bottom: 1rpx solid #a7afa8;
			background-color: #eef5f5;

			.aba {
				padding-left: 10rpx;

				image {
					width: 260rpx;
					margin-right: 15rpx;
					border-radius: 20rpx;
					float: left;
				}

				.abr {
					.abrt {
						font-size: 35rpx;
						padding: 0 0 50rpx;
						font-weight: 400;
					}

					.abto {
						text-align: left;
						padding: 0 0 5rpx;
						.abtot {
							font-size: 19rpx;
							font-weight: 600;
							display: inline-block;
							padding-right: 40rpx;
						}					
						view {
							font-weight: 550;
							opacity: 0.6;
							font-size: 17rpx;
							display: inline-block;
							padding-right: 5rpx;
						}
					}
				}
			}
		}


	}
</style>
