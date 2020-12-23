<template>
	<view class="Box">
		<view class="video">
			<video :src="lists.info&&lists.info.video_url" autoplay="true" loop="true" enable-play-gesture="true" object-fit="cover"
			 :poster="lists.info&&lists.info.video_img"></video>
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
					<!-- <uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons> -->
					<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:blue':''"></text>
					<text>{{lists.praise_num}}</text>
				</view>
				<!-- 转发 -->
				<view class="share" @click.stop="open">
					<uni-icons type="redo" size="15" color="#00b894"></uni-icons>
					<text>分享</text>
				</view>
			</view>
		</view>
		<view class="center"></view>
		<view class="box">
			<view class="likes">猜你喜欢</view>
			<view class="box1" @click="goVideos4(item)" v-for="item in Videos" :key="item.id">
				<!-- 视频页面的标题 -->
				<view class="title">{{item.title}}</view>
				<!-- 视频封面 -->
				<view class="imgbox">
					<image class="imgbox_img" :src="item.video_img" mode="widthFix"></image>
					<view class="imgbox_length">
						{{item.video_length}}
					</view>
				</view>
				<!-- 视频最后一栏 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author_name">{{item.author_name}}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
						<view class="zan">
							<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
							<!-- <text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:yellow':''"></text> -->
							<text>{{item.praise_num}}</text>
							<uni-icons type="eye" size="14" color="#a4b0be"></uni-icons>
							<text>{{item.play_num}}</text>
						</view>
						<!-- 转发 -->
						<view class="share" @click.stop="open">
							<uni-icons type="redo" size="15" color="#00b894"></uni-icons>
							<text>分享</text>
						</view>
					</view>
				</view>
			</view>
			<view class="box2" @click="goLists4(item)" v-for="item in Lists" :key="item.id">
				<!-- 列表介绍 -->
				<view class="classify">
					<image class="cover_img" :src="item.c_img" mode="widthFix"></image>
					<view class="explain">
						<view class="title">{{item.title}}</view>
						<view class="name">
							<view class="author_name">{{item.author_name}}</view>
							<view class="interact">
								<!-- 点赞按钮 -->
								<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
								<view class="zan">
									<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
									<!-- <text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:yellow':''"></text> -->
									<text>{{item.praise_num}}</text>
									<uni-icons type="eye" size="14" color="#a4b0be"></uni-icons>
									<text>{{item.play_num}}</text>
								</view>
								<!-- 转发 -->
								<view class="share" @click.stop="open">
									<uni-icons type="redo" size="15" color="#00b894"></uni-icons>
									<text>分享</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="box3"></view>
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
	import {
		formatRichText
	} from '@/utils/format.js';
	import parse from '@/utils/htmlparser.js';
	export default {
		data() {
			return {
				id: "",
				lists: [],
				sharedata: '',
				Videos: [],
				Lists: [],
				flag: false,
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail();
			this.getList();
			this.getVideos();
		},
		methods: {
			//分享
			open: function() {
				this.$refs.sharepopup.open();
			},
			//点赞
			one() {
				this.flag = !this.flag
			},
			addone(i) {
				if (this.flag == false) {
					this.lists.praise_num = parseInt(this.lists.praise_num) + 1
					this.flag = true
				} else {
					this.lists.praise_num = this.lists.praise_num - 1
					this.flag = false
				}
			},
			//获取数据
			async getNewsDetail() {
				const result = await myRequestGet('/api/v1/fatiao/index/detail?id=	' + this.id)
				// console.log(result)
				//#ifdef MP-ALIPAY
				// this.htmlNodes = parse(this.newsDetail.content)
				//#endif
				this.lists = result
			},
			//猜你喜欢视频
			//https://openapp.fatiao.pro/api/v1/fatiao/index/more-detail?channel_id=3&articleLimit=8&videoLimit=1&clearcache=redis&limit=1
			async getVideos() {
				let result = await myRequestGet('/api/v1/fatiao/index/more-detail', {
					channel_id: 3,
					articleLimit: 8,
					videoLimit: 1,
					clearcache: 'redis',
					limit: 1
				});
				this.Videos = result.list;
			},
			//猜你喜欢列表
			//https://openapp.fatiao.pro/api/v1/fatiao/article/more-article?channel_id=3&articleLimit=8&videoLimit=1&clearcache=redis&limit=8
			async getList() {
				let result = await myRequestGet('/api/v1/fatiao/article/more-article', {
					channel_id: 3,
					articleLimit: 8,
					videoLimit: 1,
					clearcache: 'redis',
					limit: 8
				});
				this.Lists = result.list;
			},
			//去ArticleDetail-Animal
			goLists4(item) {
				uni.navigateTo({
					url: `/pages/ArticleDetail-Animal/ArticleDetail-Animal?id=${item.id}`
				})
			},
			//去VideoDetail-Animal页面
			goVideos4(item) {
				uni.navigateTo({
					url: `/pages/VideoDetail-Animal/VideoDetail-Animal?id=${item.id}`
				})
			},
		}
	}
</script>

<style lang="scss">
	.Box {
		.video {
			width: 100%;
			height: 400rpx;

			// background-color: #FFFFFF;
			video {
				width: 100%;
				height: 100%;
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
				margin-top: 30rpx;
				font-size: 28rpx;
				color: #8395a7;
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

					uni-icons {
						margin-left: 8rpx;
					}

					text {
						font-size: 30rpx;
						margin-right: 8rpx;
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

		.center {
			margin-top: 30rpx;
			border-bottom: 20rpx solid #bdc3c7;
		}

		.box {
			padding: 20rpx 20rpx 0 20rpx;

			.likes {
				font-size: 30rpx;
				font-weight: 700;
				padding-bottom: 20rpx;
				border-bottom: 1px solid #bdc3c7;
			}

			.box1 {
				margin-top: 20rpx;
				height: 520rpx;

				.title {
					font-size: 32rpx;
				}

				.imgbox {
					position: relative;
					margin-top: 20rpx;

					.imgbox_img {
						border-radius: 10rpx;
						width: 100%;
					}

					.imgbox_length {
						position: absolute;
						bottom: 20rpx;
						right: 20rpx;
						width: 80rpx;
						height: 30rpx;
						font-size: 20rpx;
						text-align: center;
						border-radius: 20rpx;
						color: #FFFFFF;
						background-color: rgba($color: #2d3436, $alpha: 0.6);
					}
				}

				.channel {
					margin-top: 10rpx;
					width: 100%;

					.author_name {
						float: left;
						font-size: 24rpx;
						color: #2f3640;
						font-weight: 700;
						position: relative;
					}

					.author_name::after {
						content: '';
						display: block;
						position: absolute;
						top: 30rpx;
						width: 70rpx;
						height: 8rpx;
						background-color: #74b9ff;
					}

					.interact {
						float: right;
						margin-top: 7rpx;
						display: flex;

						//点赞
						.zan {
							color: #a4b0be;
							font-size: 24rpx;

							uni-icons {
								margin-right: 8rpx;
							}

							text {
								font-size: 24rpx;
								margin-right: 8rpx;
							}
						}

						//分享
						.share {
							font-weight: bold;
							color: #747d8c;
							font-size: 24rpx;

							uni-icons {
								margin-right: 8rpx;
							}
						}
					}
				}
			}

			//列表
			.box2 {
				.classify {
					display: flex;
					margin-top: 24rpx;
					border-top: 1px solid #bdc3c7;

					.cover_img {
						margin-top: 24rpx;
						width: 250rpx;
					}

					.explain {
						margin: 24rpx 0 0 20rpx;
						width: 440rpx;

						.title {
							font-size: 32rpx;
						}

						.name {
							width: 100%;
							margin-top: 60rpx;

							.author_name {
								display: inline-block;
								float: left;
								font-size: 24rpx;
								color: #2f3640;
								font-weight: 700;
								position: relative;
							}

							.author_name::after {
								content: '';
								display: block;
								position: absolute;
								top: 30rpx;
								width: 70rpx;
								height: 8rpx;
								background-color: #74b9ff;
							}

							.interact {
								float: right;
								margin-top: 7rpx;
								display: flex;

								.zan {
									color: #a4b0be;
									font-size: 24rpx;

									uni-icons {
										margin-right: 8rpx;
									}

									text {
										margin-right: 8rpx;
									}
								}

								//分享
								.share {
									float: right;
									font-weight: bold;
									font-size: 24rpx;
									color: #747d8c;

									uni-icons {
										margin-right: 8rpx;
									}
								}
							}
						}
					}
				}
			}

			.box3 {
				margin-top: 24rpx;
				border-top: 2rpx solid #bdc3c7;
			}
		}
	}
</style>
