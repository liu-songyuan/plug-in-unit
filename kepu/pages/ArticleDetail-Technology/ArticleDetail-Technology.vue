<template>
	<view class="a">
		<!-- 文本页面 -->
		<view class="b">{{fat&&fat.title}}</view>
		<view class="c">
			<image :src="fat.channel&&fat.channel.channel_img" mode="widthFix"></image>
		</view>
		<text class="d">
			{{fat.channel&&fat.channel.name}}
		</text>
		<text class="e">2020-12-15</text>
		<view class="f">
			<!-- #ifdef H5||MP-WEIXIN -->
			<rich-text :nodes="content"></rich-text>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY -->
			<rich-text :nodes="htmlNodes"></rich-text>
			<!-- #endif -->
		</view>
		<!-- 我是有底线的 -->
		<view class="g"></view>
		<view class="h">
			<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2">
			</uni-icons>
			{{fat&&fat.play_num}}
			<!-- 点赞构造 -->
			<view class="i">
				<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:yellow':''"></text>{{fat&&fat.praise_num}}
				<!-- <uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2">
				</uni-icons>
				{{fat.praise_num}} -->
				<!-- 分享弹窗 -->
				<view class="share" @click.stop="open">
					<uni-icons type="redo" size="14" color="#0abc64"></uni-icons>
					<text @click="shareOn">分享</text>
				</view>
			</view>
		</view>
		
		<!-- 猜你喜欢模块 -->
		<view class="box">
			<!-- 分割线 -->
			<view class="fenge"></view>
			<view class="likes">猜你喜欢</view>
			<!-- 分割线 -->
			<view class="fenge2"></view>
			<!-- 上半部分模块 -->
			<view class="mok1" v-for="item in Videos" :key="item.id" @click="goVideos(item)">
				<view class="title">{{item.title}}</view>
				<image :src="item.video_img" mode="widthFix"></image>
				<!-- 创新时光机下划线 -->
				<view class="xiahua"></view>
				<view class="name">
					{{item.author_name}}
				</view>
				<view class="length">
					{{item.video_length}}
				</view>
				<view class="zan">
					<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>{{item.praise_num}}
					<text></text>
					<uni-icons type="eye-filled" size="14" color="#a4b0be"></uni-icons>{{item.play_num}}
				</view>
				<view class="share">
					<uni-icons type="redo" size="14" color="#0abc64"></uni-icons>
					<text>分享</text>
				</view>
				<view class="fenge3"></view>
			</view>
			<!-- 下半部分模块 -->
			<view class="mok2" v-for="item in Pages" :key="item.id" @click="goPages(item)">
				<!-- 图文左边的小图 -->
				<image :src="item.c_img" mode="widthFix"></image>
				<text class="title">{{item.title}}</text>
				<view class="name">{{item.author_name}}</view>
				<view class="bluexian"></view>
				<view class="zan">
					<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.praise_num}}
					<text></text>
					<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.play_num}}
				</view>
				<!-- 分享弹窗 -->
				<view class="share" @click.stop="open">
					<uni-icons type="redo" size="14" color="#0abc64"></uni-icons>
					<text @click="shareOn">分享</text>
				</view>
				<view class="fenge4"></view>
			</view>
		
		</view>
		
		<view>
			<uni-popup ref="sharepopup" type="bottom">
				<share-btn :sharedataTemp="sharedata"></share-btn>
			</uni-popup>
		</view>
	</view>
	
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	//引入插件
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	import shareBtn from '../../components/share-btn/share-btn.vue';
	import {
		formatRichText
	} from '@/utils/format.js'
	import parse from '@/utils/htmlparser.js';
	export default {
		data() {
			return {
				id: "",
				fat: [],
				content: [],
				flag: false,
				sharedata: '',
				Videos:[],
				Pages:[],
				htmlNodes:[]
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail();
			this.getDetailContent();
			this.getVideos();
			this.getPages();
		},
		methods: {
			one() {
				this.flag = !this.flag
			},
			addone(i) {
				if (this.flag == false) {
					this.fat.praise_num = parseInt(this.fat.praise_num) + 1
					this.flag = true
				} else {
					this.fat.praise_num = this.fat.praise_num - 1
					this.flag = false
				}
			},
		async getNewsDetail() {
		    const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
		    // console.log(res,"ddddddd")
		    //#ifdef MP-ALIPAY
		    //this.htmlNodes = parse(this.newsDetail.content)
		    //this.xqsj = res
		    //#endif
		    this.fat = res
		   },
		   async getDetailContent() {
		    const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
		    this.content = formatRichText(res.info.content)
		    //#ifdef MP-ALIPAY
		    //支付宝小程序rich - text不支持字符串， 需要是nodes数组
		    this.htmlNodes = parse(this.content)
		    //#endif
		   },
			// 猜你喜欢的方法
			async getVideos() {
				const result = await myRequestGet(
					'/api/v1/fatiao/index/more-detail?channel_id=4&articleLimit=8&videoLimit=1&clearcache=redis&limit=1');
				this.Videos = result.list
			},
			async getPages() {
				const results = await myRequestGet(
					'/api/v1/fatiao/article/more-article?channel_id=4&articleLimit=8&videoLimit=1&clearcache=redis&limit=8');
				this.Pages = results.list
			},
			// 点击猜你喜欢的视频预览图跳转到视频页面
			goVideos(item){
				uni.navigateTo({
					url:`/pages/VideoDetail-Technology/VideoDetail-Technology?id=${item.id}`
				})
			},
			// 点击猜你喜欢的图文预览跳转到图文详情页
			goPages(item){
				uni.navigateTo({
					url:`/pages/ArticleDetail-Technology/ArticleDetail-Technology?id=${item.id}`
				})
			},
			shareOn() {
				this.$refs.sharepopup.open();
			}
		},
		components: {
			uniPopup,
			shareBtn
		},
	}
</script>

<style lang="scss" scoped>
	.a {
		
		position: relative;
		margin: 30rpx;

		.b {
			font-size: 40rpx;
			color: #333333;
			font-weight: 600;
			margin-bottom: 20rpx;
		}

		.c {
			image {
				width: 50rpx;
			}
		}

		.d {
			font-size: 26rpx;
			position: absolute;
			top: 82rpx;
			left: 64rpx;
		}

		.e {
			position: absolute;
			top: 82rpx;
			left: 220rpx;
			font-size: 26rpx;
			color: #bbbbbb;
		}

		.f {
			line-height: 60rpx;
			font-size: 32rpx;
			color: #333333;
		}

		.g {
			border: 1rpx solid #ecf0f1;
			position: relative;
			top: 40rpx;
		}

		.h {
			position: relative;
			top: 100rpx;
			font-size: 16rpx;
			color: #777777;
			left: 20rpx;
			// padding-bottom:  var(--window-bottom);

			.i {
				position: absolute;
				top: 0rpx;
				left: 100rpx;

				.share {
					position: relative;
					right: -460rpx;
					top: -30rpx;
					text{
						font-weight:700;
						font-size: 28rpx;
					}
				}
			}
		}
		.box {
				height: 500rpx;
				// padding-left: 20rpx;
				// padding-right: 20rpx;
				// margin: 40rpx;
				position: relative;
				top: 130rpx;
		
				.fenge {
					width: 100%;
					height: 20rpx;
					background-color: #f2f2f2;
					margin-left: -20rpx;
					padding-right: 54rpx;
				}
		
				.likes {
					margin-top: 30rpx;
					font-weight: 700;
					font-size:30rpx;
				}
		
				.fenge2 {
					margin-top: 30rpx;
					border: 1rpx solid #f4f4f4;
				}
		
				.mok1 {
					image {
						margin-top: 20rpx;
						margin-bottom: 20rpx;
						width: 100%;
						border-top-left-radius: 10rpx;
						border-top-right-radius: 10rpx;
						border-bottom-left-radius: 10rpx;
						border-bottom-right-radius: 10rpx;
					}
		
					.title {
						margin-top: 20rpx;
						font-size: 36rpx;
						color:#333333;
					}
		
					.xiahua {
						position: absolute;
						left: 4rpx;
						top: 672rpx;
						height: 18rpx;
						width: 127rpx;
						background-color: #007AFF;
						opacity: 0.5;
					}
		
					.name {
						position:relative;
						top:20rpx;
						font-size: 26rpx;
						font-weight: 800;
						width: 136rpx;
					}
		
					.length {
						position: absolute;
						width: 90rpx;
						height: 30rpx;
						top: 560rpx;
						right: 27rpx;
						font-size: 22rpx;
						background-color: #807e7f;
						border-top-left-radius: 20rpx;
						border-top-right-radius: 20rpx;
						border-bottom-left-radius: 20rpx;
						border-bottom-right-radius: 20rpx;
						color: white;
						text-align: center;
						line-height: 30rpx;
					}
		
					.zan {
						position: absolute;
						right: 100rpx;
						top: 655rpx;
						font-size: 26rpx;
						color: #c7c7c7;
						margin-left: 20rpx;
		
						text {
							margin-left: 10rpx;
						}
					}
		
					.share {
						position: absolute;
						margin-left: 200rpx;
						right: -14rpx;
						top: 642rpx;
		
						text {
							position: relative;
							right: 20rpx;
							font-size: 28rpx;
							color: #6e727b;
							font-weight: 600;
						}
					}
		
					.fenge3 {
						margin-top: 30rpx;
						border: 1rpx solid #f4f4f4;
					}
				}
		
				.mok2 {
					image {
						margin-top: 20rpx;
						width: 250rpx;
						border-radius: 5%;
						float: left;
					}
		
					.title {
						margin-top: 26rpx;
						margin-left: 8rpx;
						font-size: 30rpx;
						color: #3b3b3b;
					}
		
					.name {
						font-size: 26rpx;
						position: relative;
						top: 80rpx;
						left: 20rpx;
						font-weight: 700;
						// // bottom: 20rpx;
						// top:800rpx;
						// right: 320rpx;
					}
		
					.zan {
						color: #c7c7c7;
						position: relative;
						right: -176rpx;
						top: 30rpx;
						font-size: 26rpx;
		
						text {
							margin-left: 5rpx;
							// font-weight: 800;
						}
					}
		
					.share {
						position: relative;
						right: -352rpx;
						top: -14rpx;
						
						text {
							font-size: 26rpx;
							font-weight: 700;
							color:#6e727b;
						}
					}
		
					.fenge4 {
						margin-top: 30rpx;
						border: 1rpx solid #f4f4f4;
					}
		
					.bluexian {
						position: relative;
						left: 272rpx;
						top: 65rpx;
						height: 17rpx;
						width: 127rpx;
						background-color: #007AFF;
						opacity: 0.5;
					}
				}
			}
	}
</style>
