<template>
	<view class="Box">
		<!-- 如何画美人鱼-->
		<view class="a" v-for="item in swipers" :key="item.id">
			<text class="top" @click="goVideo(item)">{{item.title}}</text>
			<image @click="goVideo(item)" class="im" :src="item.info.video_img" mode="widthFix"></image>
			<button class="atim">{{item.video_length}}</button>
			<view class="bto">
				<text class="btoa">{{item.channel.name}}</text>
				<uni-icons type="hand-thumbsup" size="17" color="#a4b0be"></uni-icons>
				<text>{{item.praise_num}}</text>
				<uni-icons type="eye" size="17" color="#a4b0be"></uni-icons>
				<text>{{item.play_num}}</text>
				<uni-icons type="redo" size="17" color="#00aa00" @click="shareOn"></uni-icons>
				<text class="fen" @click.stop="shareOn">分享</text>
			</view>
		</view>

		<!-- 列表 -->
		<view class="ab" v-for="item in swipers1" :key="item.id">
			<view class="aba">
				<view class="abim">
					<image :src="item.info.cover_img" mode="widthFix" @click="goDetail(item)"></image>
				</view>
				<view class="abr">
					<view class="abrt" @click="goDetail(item)">{{item.title}}</view>
					<view class="abto">
						<view class="abtot">{{item.channel.name}}</view>
						<view class=" abtor">
							<uni-icons type="hand-thumbsup" size="16" color="#a4b0be"></uni-icons>
							<view>{{item.praise_num}}</view>
							<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>
							<view>{{item.play_num}}</view>
							<uni-icons type="redo" size="16" color="#00aa00" @click="shareOn"></uni-icons>
							<view class="fen" @click.stop="shareOn">分享</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 如何画蛇-->
		<view class="a" v-for="item in swipers2" :key="item.id">
			<text class="top" @click="goVideo(item)">{{item.title}}</text>
			<image class="im" @click="goVideo(item)" :src="item.info.video_img" mode="widthFix"></image>
			<button class="atim">{{item.video_length}}</button>
			<view class="bto">
				<text class="btoa">兴趣爱好</text>
				<uni-icons type="hand-thumbsup" size="17" color="#a4b0be"></uni-icons>
				<text>{{item.praise_num}}</text>
				<uni-icons type="eye" size="17" color="#a4b0be"></uni-icons>
				<text>{{item.play_num}}</text>
				<uni-icons type="redo" size="17" color="#00aa00" @click="shareOn"></uni-icons>
				<text class="fen" @click.stop="shareOn">分享</text>
			</view>
		</view>
		<!-- 画蛇列表 -->
		<view class="ab" v-for="item in swipers3" :key="item.id">
			<view class="aba">
				<view class="abim" @click="goDetail(item)">
					<image :src="item.info.cover_img" mode="widthFix"></image>
				</view>
				<view class="abr">
					<view class="abrt" @click="goDetail(item)">{{item.title}}</view>
					<view class="abto">
						<view class="abtot">{{item.channel.name}}</view>
						<view class=" abtor">
							<uni-icons type="hand-thumbsup" size="16" color="#a4b0be"></uni-icons>
							<view>{{item.praise_num}}</view>
							<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>
							<view>{{item.play_num}}</view>
							<uni-icons type="redo" size="16" color="#00aa00" @click="shareOn"></uni-icons>
							<view class="fen" @click.stop="shareOn">分享</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 如何画花朵-->
		<view class="a" v-for="item in swipers4" :key="item.id">
			<text class="top" @click="goVideo(item)">{{item.title}}</text>
			<image class="im" @click="goVideo(item)" :src="item.info.video_img" mode="widthFix"></image>
			<button class="atim">{{item.video_length}}</button>
			<view class="bto">
				<text class="btoa">兴趣爱好</text>
				<uni-icons type="hand-thumbsup" size="17" color="#a4b0be"></uni-icons>
				<text>{{item.praise_num}}</text>
				<uni-icons type="eye" size="17" color="#a4b0be"></uni-icons>
				<text>{{item.play_num}}</text>
				<uni-icons type="redo" size="17" color="#00aa00" @click="shareOn"></uni-icons>
				<text class="fen" @click.stop="shareOn">分享</text>
			</view>
		</view>
		<!-- 玉米钓青鱼列表 -->
		<view class="ab" v-for="item in swipers5" :key="item.id">
			<view class="aba">
				<view class="abim" @click="goDetail(item)">
					<image :src="item.info.cover_img" mode="widthFix"></image>
				</view>
				<view class="abr">
					<view class="abrt" @click="goDetail(item)">{{item.title}}</view>
					<view class="abto">
						<view class="abtot">{{item.channel.name}}</view>
						<view class=" abtor">
							<uni-icons type="hand-thumbsup" size="16" color="#a4b0be"></uni-icons>
							<view>{{item.praise_num}}</view>
							<uni-icons type="eye" size="16" color="#a4b0be"></uni-icons>
							<view>{{item.play_num}}</view>
							<uni-icons type="redo" size="16" color="#00aa00" @click="shareOn"></uni-icons>
							<view class="fen" @click.stop="shareOn">分享</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata"></share-btn>
		</uni-popup>

	</view>
</template>

<script>
	import uniPopup from '../uni-popup/uni-popup.vue';
	import shareBtn from '../share-btn/share-btn.vue';
	import {
		myRequestGet
	} from '@/utils/request.js';

	export default {
		data() {
			return {
				sharedata: {
					type: 1,
					strShareUrl: "http://www.baidu.com",
					strShareTitle: "分享标题",
					strShareSummary: "分享总结",
					strShareImageUrl: "http://www.xuelejia.com/xljapp/h5/static/aboutUsLogo.png"
				},
				swipers: [],
				swipers1: [],
				swipers2: [],
				swipers3: [],
				swipers4: [],
				swipers5: [],
			};
		},
		onLoad() {
        //在导航进行跳转到下一个页面的同时，可以给下一个页面传递相应的参数，接收参数的页面可以通过onLoad生命周期进行接收
		},
		created() {
			this.getSwipers();
			this.getSwipers1();
			this.getSwipers2();
			this.getSwipers3();
			this.getSwipers4();
			this.getSwipers5();
		},
		components: { //分享引入组件
			uniPopup,
			shareBtn
		},
		methods: {
			shareOn: function() {
				this.$refs.sharepopup.open();
			},
			goDetail(item) {
				uni.navigateTo({//在起始页面跳转到test.vue页面并传递参数
					url: `/pages/ArticleDetail-Interset/ArticleDetail-Interset?id=${item.id}`
				})
			},
			goVideo(item) {
				uni.navigateTo({
					url: `/pages/VideoDetail-Interset/VideoDetail-Interset?id=${item.id}`
				})
			},
			async getSwipers() {
				let result = await myRequestGet('/api/v1/fatiao/index/list', {
					id: 37,
					p: 1,
					notchannel: 27,
					order: 1,
					limit: 1,
					channel_id: 37
				})
				this.swipers = result;
			},
			async getSwipers1() {
				let result = await myRequestGet('/api/v1/fatiao/article/list', {
					id: 37,
					p: 1,
					notchannel: 27,
					order: 1,
					limit: 6,
					channel_id: 37
				});
				this.swipers1 = result;
			},
			async getSwipers2() {
				let result = await myRequestGet('/api/v1/fatiao/index/list', {
					id: 37,
					p: 2,
					notchannel: 27,
					order: 1,
					limit: 1,
					channel_id: 37
				});
				this.swipers2 = result;
			},
			async getSwipers3() {
				let result = await myRequestGet('/api/v1/fatiao/article/list', {
					id: 37,
					p: 2,
					notchannel: 27,
					order: 1,
					limit: 6,
					channel_id: 37,
				})
				this.swipers3 = result;
			},
			async getSwipers4() {
				let result = await myRequestGet('/api/v1/fatiao/index/list', {
					id: 37,
					p: 3,
					notchannel: 27,
					order: 1,
					limit: 1,
					channel_id: 37,
				})
				this.swipers4 = result;
			},
			async getSwipers5() {
				let result = await myRequestGet('/api/v1/fatiao/article/list', {
					id: 37,
					p: 3,
					notchannel: 27,
					order: 1,
					limit: 6,
					channel_id: 37,
				})
				this.swipers5 = result;
			}

		}
	};
</script>
<style lang="scss" scoped>
	.Box {
		font-size: 30rpx;
		font-weight: 550;
		color: #353b48;
		width: 100%;
		height: auto;
		margin-top: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		box-shadow: 0 -2rpx 6rpx 8rpx #f4f4f5;
		padding-top: 12rpx;
		background-color: #fff;

		.a {
			border-bottom: 3rpx solid #989f99;
			padding-top: 2%;
			.top {
				margin-left: 4%;
				font-size: 35rpx;
				font-weight: 540;
				background: linear-gradient(0deg, #2854f0 0%, #fff 20%, #fff 100%);
			}

			.im {
				width: 94%;
				margin: 15rpx 23rpx 0;
				border-radius: 20rpx;
			}

			.atim {
				text-align: center;
				width: 13%;
				margin: -55rpx 50rpx 0;
				padding: 0 0.5% 0;
				border-radius: 50px;
				font-size: 25rpx;
				font-weight: 400;
				line-height: 40rpx;
				color: #FFFFFF;
				background-color: #64646c;
				float: right;
			}

			.bto {
				text-align: right;
				padding: 0.5% 2% 2% 0;

				.btoa {
					font-size: 28rpx;
					font-weight: 700;
					color: #000007;
					margin-left: 3%;
					float: left;
					background: linear-gradient(0deg, #0055ff 0%, #fff 20%, #fff 100%);
				}

				text {
					opacity: 0.8;
					font-size: 24rpx;
					color: #736c79;
					font-weight: 650;
					padding-right: 2%;
				}

				.fen {
					font-size: 27rpx;
					color: #060607;

				}
			}
		}

		.ab {
			padding: 2% 0.8%;
			border-bottom: 1rpx solid #a7afa8;
			background-color: #eef5f5;

			.aba {
				// height: 151rpx;
				margin-left: 0.7%;
				display: flex;

				.abim {
					flex: 1;
					image {
						width: 97%;
						border-radius: 20rpx;
						float: left;
					}
				}

				.abr {
					flex: 2;
					margin-left: 0.7%;
					float: left;
					display: flex;
					flex-direction: column;

					.abrt {
						flex: 3;
						font-size: 38rpx;
						font-weight: 600;
						color: #5b6356;
						margin: 0 0 10%;
					}

					.abto {
						flex: 1;
						text-align: right;
						margin: 0 2% 0 0;

						.abtot {
							font-size: 19rpx;
							font-weight: 600;
							float: left;
							background: linear-gradient(0deg, #0055ff 0%, #eef5f5 20%, #eef5f5 100%);
						}

						.abtor {
							font-size: 19rpx;
							margin: 0 0 1%;

							view {
								font-weight: 550;
								opacity: 0.7;
								font-size: 26rpx;
								display: inline-block;
								padding-right: 2.5%;
							}
						}

					}
				}
			}
		}


	}
</style>
