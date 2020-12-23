<template>
	<view class="Box">
		<scroll-view scroll-y class="v1">
			<!-- 请在这个大Box里自行写内容 -->
			<view>
				<view v-for="item in swipers" :key="item.id">
					<text>{{item.title}}</text>
					<view class="spbt">
						<image :src="item.info.video_img" mode="widthFix"></image>
						<view class="jump_2">
							<view class="bt">{{item.channel.name}}
								<view class="bjcolor"></view>
								<view class="tt1">
									<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>{{item.play_num}}
									<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>{{item.praise_num}}
									<uni-icons type="weixin" size="16" color="green"></uni-icons>分享
								</view>
							</view>
						</view>
						<view class="jump_6">{{item.video_length}}</view>
					</view>
				</view>
			</view>
			<view v-for="item in swiperss" :key="item.id" class="jump_3">
				<view class="jump_4">
					<image :src="item.info.cover_img" mode="widthFix"></image>
					<text class="top">{{item.title}}</text>
					<view class="jump_5"></view>
					<text class="yzz">{{item.channel.name}}</text>
					<view class="smallbtcolor"></view>
					<view class="ttt1">
						<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>{{item.play_num}}
						<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>{{item.praise_num}}
						<uni-icons type="weixin" size="16" color="green"></uni-icons><text class="fx">分享</text>
					</view>
				</view>
			</view>
			<view v-for="item in swipersss" :key="item.id" class="jump_3">
				<view class="spbt">
					<text>{{item.title}}</text>
					<image :src="item.info.video_img" mode="widthFix"></image>
					<view class="jump_8">{{item.video_length}}</view>
					<view class="jump_2">
						<view class="bt">{{item.channel.name}}
						<view class="bjcolor"></view>
							<view class="tt1">
								<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>{{item.play_num}}
								<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>{{item.praise_num}}
								<uni-icons type="weixin" size="16" color="green"></uni-icons>分享
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-for="item in swiperssss" :key="item.id" class="jump_3">
				<view class="jump_4">
					<image :src="item.info.cover_img" mode="widthFix"></image>
					<text class="main">{{item.title}}</text>
					<view class="jump_5"></view>
					<text class="yzz">{{item.channel.name}}</text>
					<view class="smallbtcolor"></view>
					<view class="ttt1">
						<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>{{item.play_num}}
						<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>{{item.praise_num}}
						<uni-icons type="weixin" size="16" color="green"></uni-icons><text class="fx">分享</text>
					</view>
				</view>
			</view>
			<view v-for="item in shj" :key="item.id" class="jump_3">
				<view class="spbt">
					<text>{{item.title}}</text>
					<image :src="item.info.video_img" mode="widthFix"></image>
					<view class="jump_9">{{item.video_length}}</view>
					<view class="jump_2">
						<view class="bt">{{item.channel.name}}
						<view class="bjcolor"></view>
							<view class="tt1">
								<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>{{item.play_num}}
								<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>{{item.praise_num}}
								<uni-icons type="weixin" size="16" color="green"></uni-icons>分享
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-for="item in shjj" :key="item.id" class="jump_3">
				<view class="jump_4">
					<image :src="item.info.cover_img" mode="widthFix"></image>
					<text class="smallbt">{{item.title}}</text>
					<view class="jump_5"></view>
					<text class="yzz">{{item.channel.name}}</text>
					<view class="smallbtcolor"></view>
					<view class="ttt1">
						<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>{{item.play_num}}
						<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>{{item.praise_num}}
						<uni-icons type="weixin" size="16" color="green"></uni-icons><text class="fx">分享</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	export default {
		data() {
			return {
				swipers: {},
				swiperss: {},
				swipersss: {},
				swiperssss: {},
				shj: {},
				shjj: {}
			};
		},
		created() {
			console.log(333333333333333333333)
			this.getSwipers();
			this.getSwiperss();
			this.getSwipersss();
			this.getSwiperssss();
			this.getshj();
			this.getshjj()
		},
		methods: {
			async getSwipers() {
				const res = await myRequestGet('/api/v1/fatiao/index/list?id=1&p=1&notchannel=27&order=1&limit=1&channel_id=6')
				console.log(res,33333333333)
				this.swipers = res
			},
			async getSwiperss() {
				const ress = await myRequestGet('/api/v1/fatiao/article/list?id=1&p=1&notchannel=27&order=1&limit=6&channel_id=6')
				this.swiperss = ress
			},
			async getSwipersss() {
				const resss = await myRequestGet('/api/v1/fatiao/index/list?id=1&p=2&notchannel=27&order=1&limit=1&channel_id=6')
				this.swipersss = resss
			},
			async getSwiperssss() {
				const ressss = await myRequestGet(
					'/api/v1/fatiao/article/list?id=1&p=2&notchannel=27&order=1&limit=6&channel_id=6')
				this.swiperssss = ressss
			},
			async getshj() {
				const re = await myRequestGet('/api/v1/fatiao/index/list?id=1&p=3&notchannel=27&order=1&limit=1&channel_id=6')
				this.shj = re
			},
			async getshjj() {
				const rew = await myRequestGet('/api/v1/fatiao/article/list?id=1&p=3&notchannel=27&order=1&limit=6&channel_id=6')
				this.shjj = rew
			}
		}
	};
</script>

<style lang="scss">
	.Box {
		margin-top: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: 0 -1px 3px 4px #f4f4f5;
		margin-bottom: 30rpx;
		.v1 {
			.spbt {
				position: relative;
				.jump_8 {
					color: #FFFFFF;
					border-radius: 5px;
					position: absolute;
					right: 56rpx;
					bottom: 70rpx;
					font-size: 20rpx;
					width: 80rpx;
					height: 30rpx;
					background-color: #333333;
					z-index: 1;
					text-align: center;
					line-height: 30rpx;
				}
				.jump_9 {
					color: #FFFFFF;
					border-radius: 10rpx;
					position: absolute;
					right: 56rpx;
					bottom: 70rpx;
					font-size: 20rpx;
					width: 80rpx;
					height: 30rpx;
					background-color: #333333;
					z-index: 1;
					text-align: center;
					line-height: 30rpx;
				}
				.jump_6 {
					color: #FFFFFF;
					border-radius: 10rpx;
					position: absolute;
					right: 56rpx;
					bottom: 60rpx;
					font-size: 20rpx;
					width: 80rpx;
					height: 30rpx;
					background-color: #333333;
					z-index: 1;
					text-align: center;
					line-height: 30rpx;
				}
			}
			.jump_3 {
				margin-top: 40rpx;
				.jump_4 {
					width: 100%;
					position: relative;
					.smallbtcolor {
						position: absolute;
						right: 320rpx;
						bottom: 0px;
						height: 16rpx;
						width: 120rpx;
						background-color: #007AFF;
						opacity: 0.5;
					}
					.yzz {
						position: absolute;
						right: 320rpx;
						bottom: 0px;
						font-weight: 900;
					}
					.smallbt{
						font-weight: 600;
						font-size: 34rpx;
					}
					.top{
						font-weight: 600;
						font-size: 34rpx;
					}
					.main{
						font-weight: 600;
						font-size: 34rpx;
					}
					.ttt1 {
						position: absolute;
						right: 30rpx;
						bottom: 0px;
						font-size: 12px;
						color: #DCDFE6;
						.fx {
							font-weight: 900;
							color: #3B4144;
							font-size: 11px;
						}
					}
					.jump_5 {
						clear: both;
					}
					image {
						width: 250rpx;
						float: left;
					}
					text {
						font-weight: 100;
						margin-left: 2px;
					}
				}
			}
			display: flex;
			flex-direction: column;
			text {
				font-size: 30rpx;
				margin-left: 34rpx;
				font-weight: 900;
			}
			image {
				border-radius: 10rpx;
				width: 92%;
				margin-left: 34rpx;
				margin-top: 6rpx;
			}
			.jump_2 {
				text {
					font-size: 30rpx;
					font-weight: 100;
				}
				.bt {
					font-weight: 900;
					margin-left: 40rpx;
					position: relative;
					z-index: 1;
					.bjcolor {
						position: absolute;
						left: 0;
						bottom: 2px;
						height: 28rpx;
						width: 148rpx;
						background-color: #007AFF;
						opacity: 0.5;
					}
				}
				.tt1 {
					margin-left: 260rpx;
					margin-top: -40rpx;
					/* font-weight: 100;
					font-size: 20rpx; */
				}
				.t1 {
					margin-left: 260rpx;
					font-weight: 100;
				}
			}
		}
	}
</style>