<template>
	<view class="Box">
	<view class="video">
			<video
				class="play"
				:src="detail.info && detail.info.video_url"
				enable-play-gesture="true"
				enable-danmu="true"
				page-gesture="true"
				direction="-90"
				objectFit="contain"
				:poster="detail.info && detail.info.video_img"
				autoplay="true"
			></video>
		</view>
		<view class="article">
			<view class="title">{{ detail.title }}</view>
			<view class="channel">
				<image class="channel_img" :src="detail.channel && detail.channel.channel_img" mode="widthFix"></image>
				<view class="text">
					<text class="channel_name">{{ detail.channel && detail.channel.name }}</text>
					<text class="data">2019-11-15</text>
				</view>
			</view>
			<view class="content">{{ detail.info && detail.info.video_note }}</view>
			<view class="bottom">
				<view class="interact">
					<!-- 点赞按钮 -->
					<view class="zan">
						<!-- <uni-icons class="diannzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons> -->
						<text class="dianzan iconfont icon-dianzan" @click="addone()" :style="flag ? 'color:yellow' : ''"></text>
						<text class="num1">{{ detail.praise_num }}</text>
						<uni-icons class="watch" type="eye" size="30rpx" color="#a4b0be"></uni-icons>
						<text class="num2">{{ detail.play_num }}</text>
					</view>
					<!-- 转发 -->
					<view class="share" @click="open">
						<uni-icons type="redo" size="30rpx" color="#636e72"></uni-icons>
						<text>分享</text>
					</view>
				</view>
			</view>
		</view>
		<view class="gray"></view>
		<!-- 猜你喜欢的部分 -->
		<view class="like">
			<view class="banner">猜你喜欢</view>
			<!-- 视频部分 -->
			<view class="box">
				<view class="videos" v-for="item in video1" :key="item.id" @click="goVideoDetail(item)">
					<!-- 视频封面上的标题 -->
					<text class="videos_title">{{ item.title }}</text>
					<view class="imgbox">
						<!-- 视频封面 -->
						<image class="videos_img" :src="item.video_img" mode="widthFix"></image>
						<view class="videos_length">{{item.video_length}}</view>
					</view>
					<view class="channel">
						<!-- 来源 -->
						<view class="author">
							<p class="town">{{ item.author_name }}</p>
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
		<!-- 列表部分 -->
		<view class="list">
			<view class="list_item" v-for="item in article1" :key="item.id" @click="goArticleDetail(item)">
				<view class="list-content">
					<view class="img">
						<image :src="item.c_img" mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">{{ item.title }}</view>
						<!-- 来源 -->
						<view class="channel">
							<!-- 作者名 -->
							<view class="author"><p class="town">{{ item.author_name }}</p></view>
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
		</view>
		<!-- 弹出层 -->
		<uni-popup ref="sharepopup" type="bottom"><share-btn :sharedataTemp="sharedata"></share-btn></uni-popup>
	</view>
</template>

<script>
import { myRequestGet } from '@/utils/request.js';

export default {
	data() {
		return {
			sharedata: '',
			detail: {},
			id: '',
			flag: false,
			video1: [],
			article1: []
		};
	},
	onLoad(options) {
		this.id = options.id;
		this.getVideoDetail();
		this.getVideos1();
		this.getArticle1();
	},
	methods: {
		// 点赞+1方法
		one() {
			this.flag = !this.flag;
		},
		addone(i) {
			if (this.flag == false) {
				this.detail.praise_num = parseInt(this.detail.praise_num) + 1;
				this.flag = true;
			} else {
				this.detail.praise_num = this.detail.praise_num - 1;
				this.flag = false;
			}
		},
		// 分享弹出层
		open: function() {
			this.$refs.sharepopup.open();
		},
		async getVideoDetail() {
			const res = await myRequestGet('/api/v1/fatiao/index/detail?id=	' + this.id);
			this.detail = res;
		},
		async getVideos1() {
			let result = await myRequestGet('/api/v1/fatiao/index/more-detail', {
				channel_id: 28,
				articleLimit: 8,
				videoLimit: 1,
				clearcache: 'redis',
				limit: 1
			});
			// console.log(result);
			this.video1 = result.list;
		},
		async getArticle1() {
			let result = await myRequestGet('/api/v1/fatiao/article/more-article', {
				channel_id: 28,
				articleLimit: 8,
				videoLimit: 1,
				clearcache: 'redis',
				limit: 8
			});
			// console.log(result);
			this.article1 = result.list;
		},
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
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #ecf0f1;
	.Box {
		width: 100%;
		// height: auto;
		margin: 0;
		padding: 0;
		border-top: 2rpx solid #ecf0f1;
		background-color: #fff;
		.video{
			width: 100%;
			video{
				width: 100%;
			}
		}
		.article{
			width: 95%;
			margin: 0 auto;
			.title{
				margin: 10px 0;
				font-size: 20px;
				font-weight: 800;
			}
			.channel{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.channel_img{
					width: 20px;
					height: 20px;
					border-radius: 50%;
				}
				.text{
					.channel_name{
						margin: 0px 10px;
						font-size: 14px;
					}
					.data{
						font-size: 12px;
						color: #bbb;
					}
				}
			
			}
			.content{
				color: #636e72;
				margin-top: 10px;
				line-height: 1.8em;
				text-indent: 2em;
			}
			.bottom{
				margin-top: 10px;
				border-top: 1px solid #ecf0f1;
				.interact{
					padding: 10px 0;
					display: flex;
					justify-content: space-between;
					.zan{
						color: #a4b0be;
						font-size: 12px;
						.num1{
							margin-left: 4px;
						}
						.watch{
							margin-left: 4px;
						}
						.num2{
							margin-left: 4px;
						}
					}
					.share{
						font-size: 14px;
						font-weight: bold;
						color: #747d8c;
					}
				}
			}
		}
		
		.gray{
			height: 8px;
			width: 95%;
			margin:0 auto;
			background-color: #dfe6e9;
		}
		.like{
			width: 95%;
			margin: 0 auto;
			.banner{
				padding: 10px 0;
				font-weight: 700;
				font-size: 14px;
				border-bottom: 1px solid #ecf0f1;
			}
			// 视频部分
			.box {
				margin: 5px auto;
				width: 95%;
				border-bottom: 1px solid #ecf0f1;
				.videos {
					.videos_title {
						margin-top: 10px;
						font-size: 18px;
						font-weight: 800;
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
								font-size: 16px;
								font-weight: 800;
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
	
		
	}
}
</style>
