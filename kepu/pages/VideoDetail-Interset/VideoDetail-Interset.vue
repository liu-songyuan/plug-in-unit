<template>
	<view class="Box">
		<view class="video">
			<video :src="lists.info&&lists.info.video_url"></video>
		</view>
		<view class="content">
			<view class="title">{{lists.title}}</view>
			<view class="author">
				<image class="author_img" :src="lists.author&&lists.author.img" mode="widthFix"></image>
				<text class="text_name">{{lists.author&&lists.author.name}}</text>
				<text class="text_time">2020-09-15</text>
			</view>
			<view class="introduce">{{lists.info&&lists.info.video_note}}</view>
			<view class="bottom"></view>
			<view class="interact">
				<view class="zan">
					<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:blue':''">{{lists.praise_num}}
					</text>
				</view>
				<!-- 转发 -->
				<view class="share" @click.stop="open">
					<uni-icons type="redo" size="15" color="#00b894"></uni-icons>
					<text>分享</text>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="boxl">猜你喜欢</view>
			<!-- 如何画美人鱼-->
			<view class="a" v-for="item in swipers6" :key="item.id">
				<text class="top">{{item.title}}</text>
				<image @click="goVideo(item)" class="im" :src="item.video_img" mode="widthFix"></image>
				<button class="atim">{{item.video_length}}</button>
				<view class="bto">
					<text class="btoa">{{item&&item.author_name}}</text>
					<uni-icons type="hand-thumbsup" size="18" color="#a4b0be"></uni-icons>
					<text>{{item&&item.praise_num}}</text>
					<uni-icons type="eye" size="18" color="#a4b0be"></uni-icons>
					<text>{{item.play_num}}</text>
					<uni-icons type="redo" size="18" color="#00aa00" @click="shareOn"></uni-icons>
					<text class="fen" @click.stop="shareOn">分享</text>
				</view>
			</view>

			<!-- 列表 -->
			<view class="ab" v-for="item in swipers7" :key="item.id">
				<view class="aba">
					<view class="abim">
						<image :src="item&&item.c_img" mode="widthFix" @click="goDetail(item)"></image>
					</view>
					<view class="abr">
						<view class="abrt" @click="goDetail(item)">{{item.title}}</view>
						<view class="abto">
							<view class="abtot">{{item&&item.author_name}}</view>
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
		</view>

		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata"></share-btn>
		</uni-popup>
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
				lists: [],
				flag: false,
				newsDetail: {},
				htmlNodes: [],
				swipers6: [],
				swipers7: [],
				sharedata: {
					type: 1,
					strShareUrl: "http://www.baidu.com",
					strShareTitle: "分享标题",
					strShareSummary: "分享总结",
					strShareImageUrl: "http://www.xuelejia.com/xljapp/h5/static/aboutUsLogo.png"
				},
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail();
			this.getDetailContent();
			this.getSwipers6();
			this.getSwipers7();
		},
		methods: {
			one() {
				this.flag = !this.flag
			},
			addone(i) {
				if (this.flag == false) {
					this.lists.praise_num = parseInt(this.lists.praise_num) + 1
					this.flag = true
				} else {
					this.lists.praise_num--
					this.flag = false
				}
			},
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/ArticleDetail-Interset/ArticleDetail-Interset?id=${item.id}`
				})
			},
			goVideo(item) {
				uni.navigateTo({
					url: `/pages/VideoDetail-Interset/VideoDetail-Interset?id=${item.id}`
				})
			},
			//分享
			open: function() {
				this.$refs.sharepopup.open();
			},
			//获取数据
			async getNewsDetail() {
				const result = await myRequestGet('/api/v1/fatiao/index/detail?id=	' + this.id)
				this.lists = result
			},
			async getSwipers6() {
				let result = await myRequestGet('/api/v1/fatiao/index/more-detail', {
					channel_id: 37,
					articleLimit: 8,
					videoLimit: 1,
					clearcache: 'redis',
					limit: 1,
				})
				this.swipers6 = result.list;
			},
			async getSwipers7() {
				let result = await myRequestGet('/api/v1/fatiao/article/more-article', {
					channel_id: 37,
					articleLimit: 8,
					videoLimit: 1,
					clearcache: 'redis',
					limit: 8,
				})
				this.swipers7 = result.list;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.Box {
		.video {
			background-color: #FFFFFF;

			video {
				width: 100%;
			}
		}

		.content {
			padding: 40rpx 20rpx;

			.title {
				font-size: 50rpx;
				font-weight: 700;
			}

			.author {
				margin-top: 20rpx;
				font-size: 28rpx;
				position: relative;

				.author_img {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					position: absolute;
					top: -10rpx;
					left: 0;
				}

				.text_name {
					margin-left: 70rpx;
				}

				.text_time {
					color: #a4b0be;
					margin-left: 20rpx;
				}
			}

			.introduce {
				color: #636e72;
				margin-top: 25rpx;
				line-height: 1.8em;
				text-indent: 2em;
			}

			.bottom {
				margin-top: 50rpx;
				border-top: 2rpx solid #bdc3c7;
			}

			.interact {
				margin-top: 30rpx;
				width: 100%;

				//点赞
				.zan {
					float: left;
					margin-left: 20rpx;
					color: #a4b0be;
					font-size: 30rpx;

					.iconfont {
						display: inline-block;
						padding-left: 3%;

					}
				}

				//分享
				.share {
					float: right;
					font-weight: bold;
					color: #747d8c;
					font-size: 30rpx;

					uni-icons {
						margin-right: 8rpx;
					}
				}
			}
		}

		.box {
			margin-top: 4%;
			border-top: 20rpx solid #dcdcdc;
			padding-top: 4%;

			.boxl {
				padding: 0 0 3%;
				margin: 0 3% 0 3%;
				font-size: 40rpx;
				line-height: 40rpx;
				letter-spacing: 4rpx;
				font-weight: 600;
				border-bottom: 1rpx solid #989f99;
			}

			.a {
				border-bottom: 3rpx solid #989f99;
				padding-top: 3%;

				.top {
					margin-left: 4%;
					font-size: 40rpx;
					font-weight: 540;
					background: linear-gradient(0deg, #2854f0 0%, #fff 20%, #eef5f5 100%);
				}

				.im {
					width: 95%;
					margin: 2% 4% 0;
					border-radius: 20rpx;
				}

				.atim {
					text-align: center;
					width: 13%;
					margin: -55rpx 50rpx 0;
					padding: 0 0.5% 0;
					border-radius: 50px;
					font-size: 1%;
					line-height: 40rpx;
					color: #FFFFFF;
					background-color: #64646c;
					float: right;
				}

				.bto {
					height: 60rpx;
					text-align: right;
					padding: 2% 0 1% 4%;

					.btoa {
						font-size: 28rpx;
						font-weight: 700;
						color: #000007;
						// margin-left: 20rpx;
						float: left;
						background: linear-gradient(0deg, #0055ff 0%, #eef5f5 20%, #eef5f5 100%);
					}

					text {
						opacity: 0.8;
						font-size: 27rpx;
						color: #736c79;
						font-weight: 650;
						padding-right: 1rpx;
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
								background: linear-gradient(0deg, #0055ff 0%, #fff 40%, #fff 100%);
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
	}
</style>
