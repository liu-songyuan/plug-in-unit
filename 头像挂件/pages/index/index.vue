<template>
	<view class="container">
		<image class="container-bg" mode="aspectFill" src="/static/image/page-bg.png"></image>
		<view class="avatar-container" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
			<view class="avatar-bg-border">
				<image @touchstart="touchAvatarBg" class="avatar-bg" id="avatar-bg" :src="avatarPath"></image>
			</view>
			<image
				v-if="currentMaskId > -1"
				class="mask"
				:class="{ 'mask-with-border': showBorder }"
				id="mask"
				:src="maskPic"
				:style="{ top: maskCenterY - maskSize / 2 - 2 + 'px', left: maskCenterX - maskSize / 2 - 2 + 'px', transform: 'rotate(' + rotate + 'deg)' + 'scale(' + scale + ')' + 'rotateY(' + rotateY + 'deg)' }"
			></image>
			<view class="handle" :class="{ 'hide-handle': !showBorder }" :style="{ top: handleCenterY - 10 + 'px', left: handleCenterX - 10 + 'px' }">
				<image class="handle-img" id="handle" src="/static/image/drag.svg"></image>
			</view>
		</view>
		<view class="cans">
			<canvas class="cans-id-mask" canvas-id="cans-id-mask" />
		</view>
		<view class="action-wrapper">
			<view class="action">
				<button class="action-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">我的头像</button>
			</view>
			<view class="action">
				<button class="action-btn" @click="draw">保存头像</button>
			</view>
			<view class="action">
				<button class="action-btn" open-type="share">分享朋友</button>
			</view>
		</view>
		<view class="ad-wraper">
			<ad unit-id="广告id"></ad>
		</view>
		<view class="type-tabs">
			<view class="left">
				<image class="left-img" src="/static/image/left.png"></image>
			</view>
			<scroll-view class="type-tabs-scroll" scroll-x="true" scroll-with-animation="true">
				<button class="tab" @click="changeType('christmas')">圣诞帽</button>
				<button class="tab" @click="changeType('newyear')">中国年</button>
				<button class="tab" @click="changeType('china')">小红旗</button>
				<button class="tab" @click="changeType('mask')">口罩</button>
			</scroll-view>
			<view class="right">
				<image class="right-img" src="/static/image/right.png"></image>
			</view>
		</view>
		<view class="ornaments-tabs">
			<scroll-view class="ornaments-scroll-view" scroll-x="true" :scroll-left="scrollLeft" @scroll="scroll">
				<view class="img-wrap" v-for="index in imgLength" :key="index">
					<image class="img-list" :src="`/static/image/${type}/${index}.png`" :data-mask-id="index" @tap="changeMask"></image>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
const getAvatar = (path) => {
	return `/static/image/${path}/avatar_mask.png`
}
let interstitialAd = null
export default {
	data() {
		return {
			cansWidth: 270, // 宽度 px
			cansHeight: 270, // 高度 px
			avatarPath: getAvatar("christmas"),
			imgLength: 6,
			currentMaskId: -1,
			showBorder: false,
			maskCenterX: wx.getSystemInfoSync().windowWidth / 2,
			maskCenterY: 250,
			cancelCenterX: wx.getSystemInfoSync().windowWidth / 2 - 50 - 2,
			cancelCenterY: 200,
			handleCenterX: wx.getSystemInfoSync().windowWidth / 2 + 50 - 2,
			handleCenterY: 300,
			maskSize: 100,
			scale: 1,
			rotate: 0,
			rotateY: 0,
			mask_center_x: wx.getSystemInfoSync().windowWidth / 2,
			mask_center_y: 250,
			cancel_center_x: wx.getSystemInfoSync().windowWidth / 2 - 50 - 2,
			cancel_center_y: 200,
			handle_center_x: wx.getSystemInfoSync().windowWidth / 2 + 50 - 2,
			handle_center_y: 300,
			scaleCurrent: 1,
			rotateCurrent: 0,
			touch_target: "",
			start_x: 0,
			start_y: 0,
			shareObj: {
				title: "圣诞到，送你一顶圣诞帽",
				imageUrl: getAvatar("christmas"),
			},
			isAdShow: false,
			type: "christmas",
			isSetAvatar: false,
			scrollLeft: 0,
			old: {
				scrollLeft: 0
			}
		}
	},
	onLoad(option) {
		// #ifdef MP-WEIXIN
		wx.showShareMenu({
			menus: ["shareAppMessage", "shareTimeline"],
			success(res) {},
			fail(e) {},
		})
		if (wx.createInterstitialAd) {
			interstitialAd = wx.createInterstitialAd({
				adUnitId: "广告id",
			})
			interstitialAd.onLoad(() => {})
			interstitialAd.onError((err) => {})
			interstitialAd.onClose(() => {})
		}
		// #endif
	},
	onShareAppMessage() {
		return {
			...this.shareObj,
			path: "/pages/index/index",
			success: function (res) {},
		}
	},
	methods: {
		// 选择图片
		chooseImage() {
			let that = this
			uni.chooseImage({
				count: 1,
				sizeType: ["compressed"],
				sourceType: ["album", "camera"],
				success: function (res) {
					that.avatarPath = res.tempFilePaths[0]
					that.isSetAvatar = true
				}
			})
		},
		// 获取用户信息
		getUserInfo(result) {
			let that = this
			if (result.detail.errMsg !== "getUserInfo:ok") {
				uni.showModal({
					title: "获取用户头像失败",
					content: "亲，需要您授权访问头像才能给您的头像佩戴饰品哦",
					showCancel: false,
				})
				return
			}
			let userInfo = result.detail.userInfo
			userInfo.avatarUrl = userInfo.avatarUrl.replace("132", "0") // 使用最大分辨率头像 959 * 959
			uni.downloadFile({
				url: userInfo.avatarUrl,
				success: function (res) {
					uni.hideLoading()
					that.avatarPath = res.tempFilePath
					that.isSetAvatar = true
				},
				fail: function (e) {
					uni.hideLoading()
					uni.showToast({
						title: "图片加载超时",
						content: "网络异常，请稍后重试",
					})
				},
			})
		},
		scroll: function(e) {
			this.old.scrollLeft = e.detail.scrollLeft
		},
		// 更换类型
		changeType(val) {
			if (this.type == val) {
				return
			}
			this.scrollLeft = this.old.scrollLeft
			this.$nextTick(function() {
				this.scrollLeft = 0
			})
			this.currentMaskId = -1
			this.showBorder = false
			this.type = val
			this.shareObj = { ...this.shareObj, imageUrl: getAvatar(val) }
			if(!this.isSetAvatar) {
				this.avatarPath = getAvatar(val)
			}
			if (val == "christmas") {
				this.imgLength = 13
				this.shareObj = { ...this.shareObj, title: "圣诞到，送你一顶圣诞帽" }
			} else if (val == "newyear") {
				this.imgLength = 17
				this.shareObj = { ...this.shareObj, title: "欢乐中国年，饰品来曾颜" }
			} else if (val == "china") {
				this.imgLength = 8
				this.shareObj = { ...this.shareObj, title: "献礼71周年华诞，为祖国母亲庆生" }
			} else if (val == "mask") {
				this.imgLength = 29
				this.shareObj = { ...this.shareObj, title: "抗击疫情，人人有责" }
			}
		},
		// 选择挂件
		changeMask(e) {
			if (!this.isAdShow) {
				this.isAdShow = true
				interstitialAd.show().catch((err) => {
					console.error(err)
				})
			}
			this.currentMaskId = e.target.dataset.maskId
			this.showBorder = true
		},
		// 设置挂件位置
		touchStart(e) {
			console.log("e.target.id", e.target.id)
			if (e.target.id == "mask") {
				this.touch_target = "mask"
				this.showBorder = true
			} else if (e.target.id == "handle") {
				this.touch_target = "handle"
			} else {
				this.touch_target = ""
			}

			if (this.touch_target != "") {
				this.start_x = e.touches[0].clientX
				this.start_y = e.touches[0].clientY
			}
		},
		touchMove(e) {
			var current_x = e.touches[0].clientX
			var current_y = e.touches[0].clientY
			var moved_x = current_x - this.start_x
			var moved_y = current_y - this.start_y
			if (this.touch_target == "mask") {
				this.maskCenterX = this.maskCenterX + moved_x
				this.maskCenterY = this.maskCenterY + moved_y
				this.cancelCenterX = this.cancelCenterX + moved_x
				this.cancelCenterY = this.cancelCenterY + moved_y
				this.handleCenterX = this.handleCenterX + moved_x
				this.handleCenterY = this.handleCenterY + moved_y
			}
			if (this.touch_target == "handle") {
				this.handleCenterX = this.handleCenterX + moved_x
				this.handleCenterY = this.handleCenterY + moved_y
				this.cancelCenterX = 2 * this.maskCenterX - this.handleCenterX
				this.cancelCenterY = 2 * this.maskCenterY - this.handleCenterY
				let diff_x_before = this.handle_center_x - this.mask_center_x
				let diff_y_before = this.handle_center_y - this.mask_center_y
				let diff_x_after = this.handleCenterX - this.mask_center_x
				let diff_y_after = this.handleCenterY - this.mask_center_y
				let distance_before = Math.sqrt(diff_x_before * diff_x_before + diff_y_before * diff_y_before)
				let distance_after = Math.sqrt(diff_x_after * diff_x_after + diff_y_after * diff_y_after)
				let angle_before = (Math.atan2(diff_y_before, diff_x_before) / Math.PI) * 180
				let angle_after = (Math.atan2(diff_y_after, diff_x_after) / Math.PI) * 180
				this.scale = (distance_after / distance_before) * this.scaleCurrent
				this.rotate = angle_after - angle_before + this.rotateCurrent
			}
			this.start_x = current_x
			this.start_y = current_y
		},
		touchEnd(e) {
			this.mask_center_x = this.maskCenterX
			this.mask_center_y = this.maskCenterY
			this.cancel_center_x = this.cancelCenterX
			this.cancel_center_y = this.cancelCenterY
			this.handle_center_x = this.handleCenterX
			this.handle_center_y = this.handleCenterY
			this.touch_target = ""
			this.scaleCurrent = this.scale
			this.rotateCurrent = this.rotate
		},
		// 不显示border
		touchAvatarBg() {
			this.showBorder = false
		},
		// 绘制头像
		draw() {
			if (this.currentMaskId == -1) {
				uni.showToast({
					title: "您还没选择挂件哦",
					duration: 2000,
					icon: "none",
				})
				return
			}
			let scale = this.scale
			let rotate = this.rotate
			let mask_center_x = this.mask_center_x
			let mask_center_y = this.mask_center_y
			let that = this
			var query = wx.createSelectorQuery()
			query.select("#avatar-bg").boundingClientRect()
			query.exec(function (res) {
				mask_center_x = mask_center_x - res[0].left
				mask_center_y = mask_center_y - res[0].top
				const context = wx.createCanvasContext("cans-id-mask")
				const mask_size = 100 * scale

				context.clearRect(0, 0, that.cansWidth, that.cansHeight)
				context.drawImage(that.avatarPath, 0, 0, that.cansWidth, that.cansHeight)
				context.translate(mask_center_x, mask_center_y)
				context.rotate((rotate * Math.PI) / 180)
				context.drawImage(that.maskPic, -mask_size / 2, -mask_size / 2, mask_size, mask_size)
				context.draw(false, () => {
					that.saveCans()
				})
			})
		},
		// 保存头像
		saveCans() {
			let that = this
			uni.showLoading({
				title: "保存...",
				mask: true,
			})
			uni.canvasToTempFilePath(
				{
					x: 0,
					y: 0,
					height: this.cansWidth,
					width: this.cansHeight,
					destWidth: this.cansWidth * 3,
					destHeight: this.cansHeight * 3,
					canvasId: "cans-id-mask",
					success: function (res) {
						uni.hideLoading()
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function (res) {
								uni.showModal({
									title: "保存成功",
									content: "头像已经在您的相册里啦",
									showCancel: false,
								})
							},
							fail(res) {
								if (res.errMsg.indexOf("fail")) {
									uni.showModal({
										title: "您需要授权相册权限",
										success(res) {
											if (res.confirm) {
												uni.openSetting({
													success(res) {},
													fail(res) {},
												})
											}
										},
									})
								}
							},
						})
					},
					fail(res) {
						uni.hideLoading()
					},
				},
				this
			)
		},
	},
	computed: {
		maskPic: function () {
			return `/static/image/${this.type}/${this.currentMaskId}.png`
		},
	},
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
