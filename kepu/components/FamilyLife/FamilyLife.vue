<template>
	<view class="Box">
		<!-- 1、视频部分 -->
		<view class="box">
			<view class="videos" v-for="item in video1" :key="item.id" @click="goVideoDetail(item)">
				<!-- 视频封面上的标题 -->
				<text class="videos_title">{{ item.title }}</text>
				<view class="imgbox">
					<!-- 视频封面 -->
					<image class="videos_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="videos_length">{{item.video_length}}</view>
				</view>
				<view class="channel">
					<!-- 来源 -->
					<view class="author">
						<p class="town">{{ item.channel.name }}</p>
					</view>
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
							<text class="num3">分享</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--1、 列表部分 -->
		<view class="list">
			<view class="list_item" v-for="item in article1" :key="item.id" @click="goArticleDetail(item)">
				<view class="list-content">
					<view class="img">
						<image :src="item.info.cover_img" mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">{{ item.title }}</view>
						<!-- 来源 -->
						<view class="channel">
							<!-- 作者名 -->
							<view class="author"><p class="town">{{ item.channel.name }}</p></view>
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
									<text class="num3">分享</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 2、视频部分 -->
		<view class="box">
			<view class="videos" v-for="item in video2" :key="item.id" @click="goVideoDetail(item)">
				<!-- 视频封面上的标题 -->
				<text class="videos_title">{{ item.title }}</text>
				<view class="imgbox">
					<!-- 视频封面 -->
					<image class="videos_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="videos_length">{{item.video_length}}</view>
				</view>
				<view class="channel">
					<!-- 来源 -->
					<view class="author">
						<p class="town">{{ item.channel.name }}</p>
					</view>
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
							<text class="num3">分享</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--2、 列表部分 -->
		<view class="list">
			<view class="list_item" v-for="item in article2" :key="item.id" @click="goArticleDetail(item)">
				<view class="list-content">
					<view class="img">
						<image :src="item.info.cover_img" mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">{{ item.title }}</view>
						<!-- 来源 -->
						<view class="channel">
							<!-- 作者名 -->
							<view class="author"><p class="town">{{ item.channel.name }}</p></view>
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
									<text class="num3">分享</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 3、视频部分 -->
		<view class="box">
			<view class="videos" v-for="item in video3" :key="item.id" @click="goVideoDetail(item)">
				<!-- 视频封面上的标题 -->
				<text class="videos_title">{{ item.title }}</text>
				<view class="imgbox">
					<!-- 视频封面 -->
					<image class="videos_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="videos_length">{{item.video_length}}</view>
				</view>
				<view class="channel">
					<!-- 来源 -->
					<view class="author">
						<p class="town">{{ item.channel.name }}</p>
					</view>
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
							<text class="num3">分享</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--3、 列表部分 -->
		<view class="list">
			<view class="list_item" v-for="item in article3" :key="item.id" @click="goArticleDetail(item)">
				<view class="list-content">
					<view class="img">
						<image :src="item.info.cover_img" mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">{{ item.title }}</view>
						<!-- 来源 -->
						<view class="channel">
							<!-- 作者名 -->
							<view class="author"><p class="town">{{ item.channel.name }}</p></view>
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
									<text class="num3">分享</text>
								</view>
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
				sharedata: '',
				video1: [],
				article1: [],
				video2: [],
				article2: [],
				video3: [],
				article3: []
			};
		},
		created() {
			this.getVideos1();
			this.getArticle1();
			this.getVideos2();
			this.getArticle2();
			this.getVideos3();
			this.getArticle3();
		},
		methods: {
			// 点击进入文章详情页
			goArticleDetail(item) {
				uni.navigateTo({
					url: `/pages/ArticleDetail-FamilyLife/ArticleDetail-FamilyLife?id=${item.id}`
				});
			},
			// 点击进入视频详情页
			goVideoDetail(item) {
				uni.navigateTo({
					url: `/pages/VideoDetail-FamilyLife/VideoDetail-FamilyLife?id=${item.id}`
				});
			},
			async getVideos1() {
				let result = await myRequestGet('/api/v1/fatiao/index/list', {
					id: 28,
					p: 1,
					order: 1,
					limit: 1,
					channel_id: 28
				});
				this.video1 = result;
			},
			async getArticle1() {
				let result = await myRequestGet('/api/v1/fatiao/article/list', {
					id: 28,
					p: 1,
					order: 1,
					limit: 6,
					channel_id: 28
				});
				this.article1 = result;
			},
			async getVideos2() {
				let result = await myRequestGet('/api/v1/fatiao/index/list', {
					id: 28,
					p: 2,
					order: 1,
					limit: 1,
					channel_id: 28
				});
				this.video2 = result;
			},
			async getArticle2() {
				let result = await myRequestGet('/api/v1/fatiao/article/list', {
					id: 28,
					p: 2,
					order: 1,
					limit: 6,
					channel_id: 28
				});
				this.article2 = result;
			},
			async getVideos3() {
				let result = await myRequestGet('/api/v1/fatiao/index/list', {
					id: 28,
					p: 3,
					order: 1,
					limit: 1,
					channel_id: 28
				});
				this.video3 = result;
			},
			async getArticle3() {
				let result = await myRequestGet('/api/v1/fatiao/article/list', {
					id: 28,
					p: 3,
					order: 1,
					limit: 6,
					channel_id: 28
				});
				this.article3 = result;
			},
			open: function() {
				this.$refs.sharepopup.open();
			}
		}
	};
</script>

<style lang="scss" scoped>
	// *{
	// 	margin: 0;
	// 	padding: 0;
	// }
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

		// 视频部分
		.box {
			margin: 0 auto;
			width: 95%;
			border-bottom: 1px solid #ecf0f1;
			.videos {
				.videos_title {
					margin-top: 10px;
					font-size: 18px;
				}
				.imgbox {
					position: relative;
					margin-top: 10px;
					.videos_img {
						width: 100%;
						border-radius: 10px;
					}
					.videos_length {
						width: 100rpx;
						height: 40rpx;
						background-color: rgba($color: #2d3436, $alpha: 0.6);
						color: #bbb;
						line-height: 40rpx;
						font-size: 12px;
						text-align: center;
						border-radius: 40rpx;
						position: absolute;
						right: 5px;
						bottom: 8px;
					}
				}
				.channel {
					display: flex;
					align-items: center;
					width: 100%;
					margin: 8px 0px;
					.author {
						flex: 1;
						display: inline-block;
						.town {
							width: 48px;
							height: 10px;
							line-height: 10px;
							font-size: 12px;
							font-weight: 800;
							border-bottom: 8px solid #483D8B;
						}
					}
					.interact {
						flex: 2;
						display: flex;
						justify-content: flex-end;
						align-items: center;
						font-size: 14px;
						.zan {
							.num1,
							.num2 {
								padding: 3px;
							}
						}
						.share {
							.num3 {
								padding: 3px;
							}
						}
					}
				}
			}
		}
		//列表部分
		.list {
			width: 95%;
			margin: 0 auto;
			.list_item {
				margin: 5px 0;
				border-bottom: 1px solid #ecf0f1;
				.list-content {
					display: flex;
					.img {
						flex: 1;
						width: 30%;
						height: 100%;
						image {
							border-radius: 5px;
							width: 100%;
						}
					}
					.right {
						felx: 2;
						display: flex;
						flex-direction: column;
						width: 60%;
						margin-left: 1%;
						.title{
							flex: 1;
							font-size: 18px;
						}
						.channel {
							flex: 2;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin-top: 10%;
							.author {
									.town {
										width: 48px;
										height: 10px;
										line-height: 10px;
										font-size: 12px;
										font-weight: 800;
										border-bottom: 8px solid #483D8B;
									}
							}
							.interact {
								display: flex;
								font-size: 14px;
								justify-content: flex-end;
								.zan {
									.num1,
									.num2 {
										padding:3px;
									}
								}
								.share {
									.num3 {
										padding:3px;
									}
								}
							}
						}
					}
				}
			}
		}
	
	}
</style>
