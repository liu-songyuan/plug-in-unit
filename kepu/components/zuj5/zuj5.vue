<template>
	<view class="Box">
		<!-- 视频部分 -->
		<view class="box">
			<view class="videos" v-for="item in video1" :key="item.id">
				<!-- 视频封面上的标题 -->
				<text class="videos_title">{{ item.title }}</text>
				<view class="imgbox">
					<!-- 视频封面 -->
					<image class="videos_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="videos_length">{{ item.video_length }}</view>
				</view>
				<!-- 来源 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author">{{ item.channel.name }}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
						<view class="zan">
							<uni-icons class="diannzan" type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
							<text class="num1">{{ item.praise_num }}</text>
							<uni-icons class="watch" type="eye" size="14" color="#a4b0be"></uni-icons>
							<text class="num2">{{ item.play_num }}</text>
						</view>
						<!-- 转发 -->
						<view class="share">
							<uni-icons type="weixin" size="15" color="#00b894"></uni-icons>
							<text>分享</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 文章部分 -->
		<view class="box2">
			<view class="box2_item" v-for="item in article1" :key="item.id">
				<view class="img"><image :src="item.info.cover_img" mode="widthFix"></image></view>
				<view class="right">
					<view class="title">{{ item.title }}</view>
					<!-- 来源 -->
					<view class="channel">
						<!-- 作者名 -->
						<view class="author">{{ item.channel.name }}</view>
						<view class="interact">
							<!-- 点赞按钮 -->
							<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
							<view class="zan">
								<uni-icons class="dianzan" type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
								<text class="num1">{{ item.praise_num }}</text>
								<uni-icons class="watch" type="eye" size="14" color="#a4b0be"></uni-icons>
								<text class="num2">{{ item.play_num }}</text>
							</view>
							<!-- 转发 -->
							<view class="share">
								<uni-icons type="weixin" size="14" color="#00b894"></uni-icons>
								<text>分享</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 视频部分 -->
		<view class="box">
			<view class="videos" v-for="item in video2" :key="item.id">
				<!-- 视频封面上的标题 -->
				<text class="videos_title">{{ item.title }}</text>
				<view class="imgbox">
					<!-- 视频封面 -->
					<image class="videos_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="videos_length">{{ item.video_length }}</view>
				</view>
				<!-- 来源 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author">{{ item.channel.name }}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
						<view class="zan">
							<uni-icons class="diannzan" type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
							<text class="num1">{{ item.praise_num }}</text>
							<uni-icons class="watch" type="eye" size="14" color="#a4b0be"></uni-icons>
							<text class="num2">{{ item.play_num }}</text>
						</view>
						<!-- 转发 -->
						<view class="share">
							<uni-icons type="weixin" size="15" color="#00b894"></uni-icons>
							<text>分享</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 文章部分 -->
		<view class="box2">
			<view class="box2_item" v-for="item in article2" :key="item.id">
				<view class="img"><image :src="item.info.cover_img" mode="widthFix"></image></view>
				<view class="right">
					<view class="title">{{ item.title }}</view>
					<!-- 来源 -->
					<view class="channel">
						<!-- 作者名 -->
						<view class="author">{{ item.channel.name }}</view>
						<view class="interact">
							<!-- 点赞按钮 -->
							<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
							<view class="zan">
								<uni-icons class="dianzan" type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
								<text class="num1">{{ item.praise_num }}</text>
								<uni-icons class="watch" type="eye" size="14" color="#a4b0be"></uni-icons>
								<text class="num2">{{ item.play_num }}</text>
							</view>
							<!-- 转发 -->
							<view class="share">
								<uni-icons type="weixin" size="14" color="#00b894"></uni-icons>
								<text>分享</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 视频部分 -->
		<view class="box">
			<view class="videos" v-for="item in video3" :key="item.id">
				<!-- 视频封面上的标题 -->
				<text class="videos_title">{{ item.title }}</text>
				<view class="imgbox">
					<!-- 视频封面 -->
					<image class="videos_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="videos_length">{{ item.video_length }}</view>
				</view>
				<!-- 来源 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author">{{ item.channel.name }}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
						<view class="zan">
							<uni-icons class="diannzan" type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
							<text class="num1">{{ item.praise_num }}</text>
							<uni-icons class="watch" type="eye" size="14" color="#a4b0be"></uni-icons>
							<text class="num2">{{ item.play_num }}</text>
						</view>
						<!-- 转发 -->
						<view class="share">
							<uni-icons type="weixin" size="15" color="#00b894"></uni-icons>
							<text>分享</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 文章部分 -->
		<view class="box2">
			<view class="box2_item" v-for="item in article3" :key="item.id" @click="goDetail(item)">
				<view class="img"><image :src="item.info.cover_img" mode="widthFix"></image></view>
				<view class="right">
					<view class="title">{{ item.title }}</view>
					<!-- 来源 -->
					<view class="channel">
						<!-- 作者名 -->
						<view class="author">{{ item.channel.name }}</view>
						<view class="interact">
							<!-- 点赞按钮 -->
							<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
							<view class="zan">
								<uni-icons class="dianzan" type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
								<text class="num1">{{ item.praise_num }}</text>
								<uni-icons class="watch" type="eye" size="14" color="#a4b0be"></uni-icons>
								<text class="num2">{{ item.play_num }}</text>
							</view>
							<!-- 转发 -->
							<view class="share">
								<uni-icons type="weixin" size="14" color="#00b894"></uni-icons>
								<text>分享</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { myRequestGet } from '@/utils/request.js';
export default {
	data() {
		return {
			video1: [],
			article1: [],
			video2: [],
			article2: [],
			video3: [],
			article3: [],
			id:""
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
		async getVideos1() {
			let result = await myRequestGet('/api/v1/fatiao/index/list', {
				id: 26,
				p: 1,
				order: 1,
				limit: 1,
				channel_id: 26
			});
			console.log(result);
			this.video1 = result;
		},
		async getArticle1() {
			let result = await myRequestGet('/api/v1/fatiao/article/list', {
				id: 26,
				p: 1,
				order: 1,
				limit: 6,
				channel_id: 26
			});
			console.log(result);
			this.article1 = result;
		},
		async getVideos2() {
			let result = await myRequestGet('/api/v1/fatiao/index/list', {
				id: 26,
				p: 2,
				order: 1,
				limit: 1,
				channel_id: 26
			});
			console.log(result);
			this.video2 = result;
		},
		async getArticle2() {
			let result = await myRequestGet('/api/v1/fatiao/article/list', {
				id: 26,
				p: 2,
				order: 1,
				limit: 6,
				channel_id: 26
			});
			console.log(result);
			this.article2 = result;
		},
		async getVideos3() {
			let result = await myRequestGet('/api/v1/fatiao/index/list', {
				id: 26,
				p: 3,
				order: 1,
				limit: 1,
				channel_id: 26
			});
			console.log(result);
			this.video3 = result;
		},
		async getArticle3() {
			let result = await myRequestGet('/api/v1/fatiao/article/list', {
				id: 26,
				p: 3,
				order: 1,
				limit: 6,
				channel_id: 26
			});
			console.log(result);
			this.article3 = result;
		},
		goDetail(item) {
			uni.navigateTo({
				url: `/pages/z6xq/z6xq?id=${item.id}`
			})
		}
	}
};
</script>

<style lang="scss">
.Box {
	color: #353b48;
	width: 750rpx;
	// 高度仅实验展示用
	height: auto;
	margin-top: 20rpx;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
	box-shadow: 0 -2rpx 6rpx 8rpx #f4f4f5;
	padding-top: 6px;
	// padding-left: 24rpx;
	// padding-right: 24rpx;
	.box {
		// 颜色为了看位置
		// background-color: #eee;
		width: 702rpx;
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
					border-radius: 5px;
					width: 100%;
				}
				.videos_length {
					font-size: 16rpx;
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
				height: 30px;
				line-height: 30px;
				padding-bottom: 7px;
				border-bottom: 1px solid #ecf0f1;
				.author {
					float: left;
					font-size: 12px;
					font-weight: bolder;
					position: relative;
				}
				.author::after {
					content: '';
					background-color: #74b9ff;
					width: 97rpx;
					height: 8rpx;
					position: absolute;
					left: 0px;
					top: 44rpx;
				}
				.interact {
					float: right;

					.zan {
						display: inline-block;
						color: #a4b0be;
						font-size: 14px;
						.num1 {
							margin-left: 4px;
							margin-right: 4px;
						}
						.num2 {
							margin-left: 4px;
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
	.box2 {
		width: 702rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		.box2_item {
			// background-color: pink;
			height: 64px;
			padding-top: 12px;
			padding-bottom: 8px;
			position: relative;
			border-bottom: 1px solid #ecf0f1;
			.img {
				display: inline-block;
				image {
					width: 230rpx;
					border-radius: 6px;
				}
			}
			.right {
				display: inline-block;
				width: 460rpx;
				height: 132rpx;
				position: absolute;
				top: 25rpx;
				// background-color: #eee;
				margin-left: 10rpx;
				.title {
					width: 100%;
					float: left;
				}
				.channel {
					position: absolute;
					bottom: 2px;
					float: left;
					width: 100%;
					.author {
						display: inline-block;
						float: left;
						font-size: 12px;
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
							font-size: 14px;
							.num1 {
								margin-left: 3px;
								margin-right: 4px;
							}
							.num2 {
								margin-left: 3px;
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
</style>
