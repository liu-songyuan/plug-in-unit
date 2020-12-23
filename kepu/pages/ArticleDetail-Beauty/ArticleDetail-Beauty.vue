<template>
	<view>
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
		<view class="zan">
			<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:blue':''"></text>{{xqsj.play_num}}
			<!-- //这里为各自接口里的数据，“xqsj”根据各自声明复制的更改 -->
		</view>
		<view class="share" @click.stop="open">
			<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
			<text class="fenxiang">分享</text>
		</view>
		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata"></share-btn>
		</uni-popup>
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


</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	import uniPopup from '../../components/uni-popup/uni-popup.vue';
	import shareBtn from '../../components/share-btn/share-btn.vue';
	import {
		formatRichText
	} from '@/utils/format.js'
	import parse from '@/utils/htmlparser.js';


	export default {
		data() {
			return {
				sharedata: '',
				id: "",
				xqsj: {},
				content: [],
				htmlNodes: [],
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
			shareOn() {
				this.$refs.sharepopup.open();
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
				//#ifdef MP-ALIPAY
				//#endif
				this.xqsj = res
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
	.xihuan {
		border-top: 10px solid #DCDFE6;
		font-weight: 700;
		margin-top: 50rpx;
		padding: 30rpx 30rpx;
	}

	.share {
		margin-top: -50rpx;
		margin-left: 550rpx;
	}

	.zan {
		margin-top: 20rpx;
		margin-left: 50rpx;
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
