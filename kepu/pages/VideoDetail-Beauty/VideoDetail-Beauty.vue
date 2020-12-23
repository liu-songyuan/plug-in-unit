<template>
	<view class="v1">
		<view class="v2">
			<video :src="xq.info&&xq.info.video_url" object-fit="cover"></video>
		</view>
		<text class="wb">{{xq.title}}</text>
		<view class="v3">
			<image :src="xq.channel&&xq.channel.channel_img" mode="widthFix"></image>
			<text class="t1">{{xq.channel&&xq.channel.name}}</text>
			<text class="t2">2018-12-05</text>
		</view>
		<view class="v4">
			{{xq.info&&xq.info.video_note}}
		</view>
		<view class="">
			<uni-popup ref="sharepopup" type="bottom">
				<share-btn :sharedataTemp="sharedata"></share-btn>
			</uni-popup>
		</view>
		<view class="fenxiang">
			<view class="share" @click.stop="open">
				<uni-icons type="redo" size="28rpx" color="#636e72" class="fenxiang2"></uni-icons>
				<text>分享</text>
			</view>
		</view>
		<view class="zan">
			<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:blue':''"></text>{{xq.play_num}}
		</view>
		<view class="xihuan">
			猜你喜欢
		</view>
		<view class="Box">
			<!-- 视频部分 -->
			<view class="box">
				<view class="videos" v-for="item in video1" :key="item.id" @click="goVideoDetail(item)">
					<!-- 视频封面上的标题 -->
					<text class="videos_title">{{ item.title }}</text>
					<view class="imgbox">
						<!-- 视频封面 -->
						<image class="videos_img" :src="item.video_img" mode="widthFix"></image>
						<view class="videos_length">{{ item.video_length }}</view>
					</view>
					<!-- 来源 -->
					<view class="channel">
						<!-- 作者名 -->
						<view class="author">{{ item.author_name }}</view>
						<view class="interact">
							<!-- 点赞按钮 -->
							<view class="zan">
								<uni-icons class="diannzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons>
								<text class="num1">{{ item.praise_num }}</text>
								<uni-icons class="watch" type="eye" size="28rpx" color="#a4b0be"></uni-icons>
								<text class="num2">{{ item.play_num }}</text>
							</view>
							<!-- 转发 -->
							<view class="share" @click.stop="open">
								<uni-icons type="redo" size="30rpx" color="#636e72"></uni-icons>
								<text @click="shareOn">分享</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 文章部分 -->
			<view class="box2">
				<view class="box2_item" v-for="item in article1" :key="item.id" @click="goArticleDetail(item)">
					<view class="item-content">
						<view class="img">
							<image :src="item.c_img" mode="widthFix"></image>
						</view>
						<view class="right">
							<view class="title">{{ item.title }}</view>
							<!-- 来源 -->
							<view class="channel">
								<!-- 作者名 -->
								<view class="author">{{ item.author_name }}</view>
								<view class="interact">
									<!-- 点赞按钮 -->
									<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
									<view class="zan">
										<uni-icons class="dianzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons>
										<text class="num1">{{ item.praise_num }}</text>
										<uni-icons class="watch" type="eye" size="28rpx" color="#a4b0be"></uni-icons>
										<text class="num2">{{ item.play_num }}</text>
									</view>
									<!-- 转发 -->
									<view class="share" @click.stop="open">
										<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
										<text>分享</text>
									</view>
								</view>
							</view>
						</view>
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
	} from '@/utils/request.js';
	import uniPopup from '../../components/uni-popup/uni-popup.vue';
	import shareBtn from '../../components/share-btn/share-btn.vue';
	export default {
		data() {
			return {
				sharedata: '',
				id: "",
				xq: {},
				flag: false,
				video1: [],
				article1: []
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
			this.getDetailContent()
			console.log(this.id)
			this.getVideos1()
			this.getArticle1()
		},
		methods: {
			goArticleDetail(item) {
				uni.navigateTo({
					url: `/pages/ArticleDetail-Beauty/ArticleDetail-Beauty?id=${item.id}`
				});
			},
			// 点击进入视频详情页
			goVideoDetail(item) {
				uni.navigateTo({
					url: `/pages/VideoDetail-Beauty/VideoDetail-Beauty?id=${item.id}`
				});
			},
			one() {
				this.flag = !this.flag
			},
			addone(i) {
				if (this.flag == false) {
					this.xq.play_num = parseInt(this.xq.play_num) + 1
					this.flag = true
				} else {
					this.xq.play_num = this.xq.play_num - 1
					this.flag = false
				}
			},
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/index/detail?id=' + this.id)
				console.log(res)
				//#ifdef MP-ALIPAY
				//this.htmlNodes = parse(this.newsDetail.content)
				//this.xqsj = res
				//#endif
				this.xq = res
			},
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich - text不支持字符串， 需要是nodes数组
				this.htmlNodes = parse(this.content)
				//#endif
			},
			async getVideos1() {
				let result = await myRequestGet('/api/v1/fatiao/index/more-detail', {
					channel_id: 6,
					articleLimit: 8,
					videoLimit: 1,
					clearcache: 'redis',
					limit: 1
				});
				console.log(result);
				this.video1 = result.list;
			},
			async getArticle1() {
				let result = await myRequestGet('/api/v1/fatiao/article/more-article', {
					channel_id: 6,
					articleLimit: 8,
					videoLimit: 1,
					clearcache: 'redis',
					limit: 8
				});
				console.log(result);
				this.article1 = result.list;
			},
			open: function() {
				this.$refs.sharepopup.open();
			}
		},
		components: {
			uniPopup,
			shareBtn
		}
	}
</script>


<style lang="scss">
	.v1 {
		.fenxiang {
			margin-top: 10rpx;
			margin-left: 600rpx;
		}

		.wb {
			font-size: 25px;
			font-weight: 700;
			margin-left: 30rpx;
		}

		.v4 {
			margin-left: 30rpx;
			margin-right: 30rpx;
			font-weight: 700;
			line-height: 70rpx;
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

		.v3 {
			position: relative;

			image {
				width: 50rpx;
				border-radius: 50%;
				margin-left: 1em;
			}

			.t1 {
				font-size: 16px;
				font-weight: 700;
				position: absolute;
				top: 10rpx;
				left: 90rpx;
			}

			.t2 {
				font-size: 16px;
				font-weight: 100;
				position: absolute;
				left: 245rpx;
				top: 14rpx;
				color: #BCBEC2;
			}
		}
	}

	.xihuan {
		border-top: 10px solid #DCDFE6;
		font-weight: 700;
		margin-top: 50rpx;
		padding: 30rpx 30rpx;
	}

	.fenxiang {
		margin-top: 50rpx;
		margin-left: 600rpx;
	}


	.zan {
		margin-top: -55rpx;
		margin-left: 50rpx;
	}


	.Box {
		font-size: 30rpx;
		color: #353b48;
		width: 100%;
		height: auto;
		margin-top: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		box-shadow: 0 -2rpx 6rpx 8rpx #f4f4f5;
		padding-top: 12rpx;

		// padding-left: 24rpx;
		// padding-right: 24rpx;
		.box {
			width: auto;
			margin-top: 20rpx;
			margin-left: 24rpx;
			margin-right: 24rpx;

			.videos {
				padding: 0;

				.imgbox {
					position: relative;
					margin-top: 16rpx;
					width: 100%;
					position: relative;

					.videos_img {
						border-radius: 10rpx;
						width: 100%;
					}

					.videos_length {
						font-size: 18rpx;
						width: 70rpx;
						background-color: rgba($color: #2d3436, $alpha: 0.6);
						text-align: center;
						color: #ffffff;
						border-radius: 14rpx;
						position: absolute;
						right: 8rpx;
						bottom: 18rpx;
					}
				}

				.channel {
					height: 60rpx;
					line-height: 60rpx;
					padding-bottom: 14rpx;
					border-bottom: 2rpx solid #ecf0f1;

					.author {
						float: left;
						font-size: 24rpx;
						font-weight: bolder;
						position: relative;
					}

					.author::after {
						content: '';
						background-color: #74b9ff;
						width: 97rpx;
						height: 8rpx;
						position: absolute;
						left: 0rpx;
						top: 44rpx;
					}

					.interact {
						float: right;

						.zan {
							display: inline-block;
							color: #a4b0be;
							font-size: 28rpx;

							.num1 {
								margin-left: 8rpx;
								margin-right: 8rpx;
							}

							.num2 {
								margin-left: 8rpx;
							}
						}

						.share {
							display: inline-block;
							margin-left: 10rpx;
							font-size: 28rpx;
							font-weight: bold;
							color: #747d8c;
						}
					}
				}
			}
		}

		.box2 {
			width: auto;
			margin-left: 24rpx;
			margin-right: 24rpx;

			.box2_item {
				// background-color: pink;
				height: auto;
				padding-top: 24rpx;
				padding-bottom: 24rpx;
				position: relative;
				border-bottom: 2rpx solid #ecf0f1;

				.item-content {
					height: 100%;

					.img {
						display: inline-block;
						width: 32.76%;

						image {
							width: 100%;
							border-radius: 12rpx;
						}
					}

					.right {
						display: inline-block;
						width: 65.52%;
						height: 135.32rpx;
						position: relative;
						margin-left: 10rpx;

						.title {
							position: absolute;
							top: 4rpx;
							left: 0;
							width: 100%;
						}

						.channel {
							position: absolute;
							bottom: 4rpx;
							left: 0;
							width: 100%;

							.author {
								display: inline-block;
								float: left;
								font-size: 24rpx;
								font-weight: bolder;
								position: relative;
							}

							.author::after {
								content: '';
								background-color: #74b9ff;
								width: 97rpx;
								height: 4rpx;
								position: absolute;
								left: 0px;
								top: 30rpx;
							}

							.interact {
								// margin-left: 198rpx;
								float: right;
								margin-top: -6rpx;

								.zan {
									display: inline-block;
									color: #a4b0be;
									font-size: 28rpx;

									.num1 {
										margin-left: 6rpx;
										margin-right: 8rpx;
									}

									.num2 {
										margin-left: 6rpx;
									}
								}

								.share {
									display: inline-block;
									margin-left: 10rpx;
									font-size: 14px;
									font-weight: bold;
									color: #747d8c;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
