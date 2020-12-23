<template>
	<view>
		<view class="a">
			<view class="aa">{{xqsj.query}}</view>
			<image class="author_img" :src="xqsj.channel&&xqsj.channel.channel_img" mode="widthFix"></image>
			<view class="ab">{{xqsj.author&&xqsj.author.name}}</view>
			<view class="ac">2019-07-28</view>
			<view class="">
				<text>{{xqsj.info&&xqsj.info.name}}</text>
			</view>
			<view class="content">
				<!-- #ifdef H5-->
				<rich-text :nodes="xqsj.info&&xqsj.info.content.replace(/\<img/gi, '<img style=max-width:96%;height:auto;padding:7px')"></rich-text>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN/APP-PLUS-->
				<rich-text :nodes="xqsj.info&&xqsj.info.content.replace(/\<img/gi, '<img style=max-width:96%;height:auto;padding:7px')"></rich-text>
				<!-- #endif -->
				<!-- #ifdef MP-ALIPAY -->
				<rich-text :nodes="htmlNodes"></rich-text>
				<!-- #endif -->
			</view>
			<view class="bto">
				<uni-icons type="eye" size="19" color="#a4b0be"></uni-icons>
				<text>{{xqsj.play_num}}</text>
				<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:blue':''">{{xqsj.praise_num}}</text>
				<view class="btor">
					<uni-icons type="redo" size="19" color="#00aa00" @click="shareOn"></uni-icons>
					<text @click.stop="shareOn">分享</text>
				</view>
			</view>
		</view>

		<view class="box">
			<view class="boxl">猜你喜欢</view>
			<!-- -->
			<view class="a" v-for="item in swipers6" :key="item.id">
				<text class="top">{{item.title}}</text>
				<image @click="goVideo(item)" class="im" :src="item.video_img" mode="widthFix"></image>
				<button class="atim">{{item.video_length}}</button>
				<view class="bto">
					<text class="btoa">{{item&&item.author_name}}</text>
					<uni-icons type="hand-thumbsup" size="18" color="#a4b0be"></uni-icons>
					<text>{{item.praise_num}}</text>
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
	
	import parse from '@/utils/htmlparser.js';
	import {
		formatRichText
	} from '@/utils/format.js';

	export default {
		data() {
			return {
				id: "",
				xqsj: {},
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
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail();
			this.getDetailContent();
			this.getSwipers6();
			this.getSwipers7();
		},
		created() {},
		methods: {
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
			one() {
				this.flag = !this.flag
			},
			addone(i) {
				if (this.flag == false) {
					this.xqsj.praise_num = parseInt(this.xqsj.praise_num) + 1
					this.flag = true
				} else {
					this.xqsj.praise_num--
					this.flag = false
				}
			},
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.xqsj = res
			},
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				this.htmlNodes = parse(this.content)
			},
			shareOn: function() {
				this.$refs.sharepopup.open();
			},
		}
	};
</script>

<style lang="scss" scoped>
	.a {
		padding: 0 4%;

		.author_img {
			display: block;
			float: left;
			border-radius: 50%;
			width: 7%;
		}

		.aa {
			padding: 4% 2%;
			font-size: 45rpx;
			font-weight: 550;
			border-bottom: 2rpx solid #9fecec;
		}

		.ab {
			font-size: 28rpx;
			font-weight: 550;
			padding: 1% 2% 0;
			float: left;
		}

		.ac {
			font-size: 28rpx;
			font-weight: 550;
			padding: 1% 2% 0;
			opacity: 0.5;
		}

		.content {
			padding: 5% 1% 5%;
			font-weight: 500;
			font-size: 35rpx;
			line-height: 60rpx;
			color: #283230;
			text-indent: 50rpx;
			border-bottom: 1rpx solid #b7bfe1;

			img {
				width: 90%;
				height: 50%;

			}
		}

		.bto {
			padding: 5% 3%;
			text-align: left;
			line-height: 46rpx;
			letter-spacing: 5rpx;

			.iconfont {
				display: inline-block;
				padding-left: 3%;

			}

			.btor {
				display: inline-block;
				float: right;
			}
		}
	}

	.box {
		border-top: 20rpx solid #dcdcdc;
		padding-top: 20rpx;

		.boxl {
			padding: 0 0 3%;
			margin: 0 3% 0 3%;
			font-size: 40rpx;
			line-height: 40rpx;
			letter-spacing: 4rpx;
			font-weight: 600;
			border-bottom: 2rpx solid #989f99;
		}

		.a {
			border-bottom: 3rpx solid #989f99;
			padding-top: 28rpx;

			.top {
				// margin-left: 20rpx;
				font-size: 40rpx;
				font-weight: 540;
				background: linear-gradient(0deg, #2854f0 0%, #fff 20%, #eef5f5 100%);
			}

			.im {
				width: 99%;
				margin: 15rpx 2rpx 0;
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
				padding: 5rpx 0 0 0;

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
</style>
