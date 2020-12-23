<template>
	<view class="Box">
		<view class="content">
			<view class="box1" @click="goVideos4(item)" v-for="item in videos1" :key="item.id">
				<!-- 视频页面的标题 -->
				<view class="title">{{item.title}}</view>
				<!-- 视频封面 -->
				<view class="imgbox">
					<image class="imgbox_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="imgbox_length">
						{{item.video_length}}
					</view>
				</view>
				<!-- 视频最后一栏 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author_name">{{item.author.name}}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
						<view class="zan">
							<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
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
			<view class="box2" @click="goLists4(item)" v-for="item in lists1" :key="item.id">
				<!-- 列表介绍 -->
				<view class="classify">
					<image class="cover_img" :src="item.info.cover_img" mode="widthFix"></image>
					<view class="explain">
						<view class="title">{{item.title}}</view>
						<view class="name">
							<view class="author_name">{{item.author.name}}</view>
							<view class="interact">
								<!-- 点赞按钮 -->
								<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
								<view class="zan">
									<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
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
		<view class="content">
			<view class="box1" @click="goVideos4(item)" v-for="item in videos2" :key="item.id">
				<!-- 视频页面的标题 -->
				<view class="title">{{item.title}}</view>
				<!-- 视频封面 -->
				<view class="imgbox">
					<image class="imgbox_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="imgbox_length">
						{{item.video_length}}
					</view>
				</view>
				<!-- 视频最后一栏 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author_name">{{item.author.name}}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
						<view class="zan">
							<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
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
			<view class="box2" @click="goLists4(item)" v-for="item in lists2" :key="item.id">
				<!-- 列表介绍 -->
				<view class="classify">
					<image class="cover_img" :src="item.info.cover_img" mode="widthFix"></image>
					<view class="explain">
						<view class="title">{{item.title}}</view>
						<view class="name">
							<view class="author_name">{{item.author.name}}</view>
							<view class="interact">
								<!-- 点赞按钮 -->
								<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
								<view class="zan">
									<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
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
		<view class="content">
			<view class="box1" @click="goVideos4(item)" v-for="item in videos3" :key="item.id">
				<!-- 视频页面的标题 -->
				<view class="title">{{item.title}}</view>
				<!-- 视频封面 -->
				<view class="imgbox">
					<image class="imgbox_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="imgbox_length">
						{{item.video_length}}
					</view>
				</view>
				<!-- 视频最后一栏 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author_name">{{item.author.name}}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
						<view class="zan">
							<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
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
			<view class="box2" @click="goLists4(item)" v-for="item in lists3" :key="item.id">
				<!-- 列表介绍 -->
				<view class="classify">
					<image class="cover_img" :src="item.info.cover_img" mode="widthFix"></image>
					<view class="explain">
						<view class="title">{{item.title}}</view>
						<view class="name">
							<view class="author_name">{{item.author.name}}</view>
							<view class="interact">
								<!-- 点赞按钮 -->
								<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
								<view class="zan">
									<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
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
	export default {
		data() {
			return {
				videos1: [],
				lists1: [],
				videos2: [],
				lists2: [],
				videos3: [],
				lists3: [],
				sharedata: '',
			};
		},
		created() {
			this.getVideos1();
			this.getList1();
			this.getVideos2();
			this.getList2();
			this.getVideos3();
			this.getList3();
		},
		methods: {
			//分享方法
			open: function() {
				this.$refs.sharepopup.open();
			},
			//https://openapp.fatiao.pro/api/v1/fatiao/index/list?id=3&p=1&notchannel=27&order=1&limit=1&channel_id=3
			async getVideos1() {
				let result = await myRequestGet('/api/v1/fatiao/index/list', {
					id: 38,
					p: 1,
					notchannel: 27,
					order: 1,
					limit: 1,
					channel_id: 3
				});
				console.log(result);
				this.videos1 = result;
			},
			//https://openapp.fatiao.pro/api/v1/fatiao/article/list?id=3&p=1&notchannel=27&order=1&limit=6&channel_id=3%E2%80%98%E2%80%99
			async getList1() {
				let result = await myRequestGet('/api/v1/fatiao/article/list', {
					id: 3,
					p: 1,
					notchannel: 27,
					order: 1,
					limit: 6,
					channel_id: 3
				});
				console.log(result);
				this.lists1 = result;
			},
			//https://openapp.fatiao.pro/api/v1/fatiao/index/list?id=3&p=2&notchannel=27&order=1&limit=1&channel_id=3
			async getVideos2() {
				let result = await myRequestGet('/api/v1/fatiao/index/list', {
					id: 3,
					p: 2,
					notchannel: 27,
					order: 1,
					limit: 1,
					channel_id: 3
				});
				this.videos2 = result;
			},
			//https://openapp.fatiao.pro/api/v1/fatiao/article/list?id=3&p=2&notchannel=27&order=1&limit=6&channel_id=3
			async getList2() {
				let result = await myRequestGet('/api/v1/fatiao/article/list', {
					id: 3,
					p: 2,
					notchannel: 27,
					order: 1,
					limit: 6,
					channel_id: 3
				});
				console.log(result);
				this.lists2 = result;
			},
			//https://openapp.fatiao.pro/api/v1/fatiao/index/list?id=3&p=3&notchannel=27&order=1&limit=1&channel_id=3
			async getVideos3() {
				let result = await myRequestGet('/api/v1/fatiao/index/list', {
					id: 3,
					p: 3,
					notchannel: 27,
					order: 1,
					limit: 1,
					channel_id: 3
				});
				this.videos3 = result;
			},
			//https://openapp.fatiao.pro/api/v1/fatiao/article/list?id=3&p=3&notchannel=27&order=1&limit=6&channel_id=3
			async getList3() {
				let result = await myRequestGet('/api/v1/fatiao/article/list', {
					id: 3,
					p: 3,
					notchannel: 27,
					order: 1,
					limit: 6,
					channel_id: 3
				});
				console.log(result);
				this.lists3 = result;
			},
			//去VideoDetail-Animal页面
			goVideos4(item) {
				uni.navigateTo({
					url: `/pages/VideoDetail-Animal/VideoDetail-Animal?id=${item.id}`
				})
			},
			//去ArticleDetail-Animal
			goLists4(item) {
				uni.navigateTo({
					url: `/pages/ArticleDetail-Animal/ArticleDetail-Animal?id=${item.id}`
				})
			},
		}
	}
</script>

<style lang="scss">
	.Box {
		margin-top: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 10rpx;
		box-shadow: 0 -2rpx 6rpx 8rpx #f4f4f5;
		width: 100%;
		background-color: #fff;
		//第一列
		.content {
			margin-top: 10rpx;
			padding: 20rpx;
			//视频
			.box1 {
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
