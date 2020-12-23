let itemList = ["百度地图","高德地图","腾讯地图"];
// #ifdef APP-PLUS
var isBaidu = plus.runtime.isApplicationExist({pname:'com.baidu.BaiduMap',action:'baidumap://'});
var isGaode = plus.runtime.isApplicationExist({pname:'com.autonavi.minimap',action:'iosamap://'});
let AppitemList = [{title:"默认导航"}];
if(isBaidu && isGaode){
	AppitemList = [{title:"百度地图"},{title:"高德地图"}];
}
if(!isBaidu && isGaode){
	AppitemList = [{title:"高德地图"}];
}
if(isBaidu && !isGaode){
	AppitemList = [{title:"百度地图"}];
}
// #endif

function openMapByDefault(latitude, longitude, name) {
	uni.openLocation({
		latitude: latitude,
		longitude: longitude,
		name: name,
		address:"",
		fail: (err) => {
			console.log(err)
		},
	})
}
function openMapByAndroid(latitude, longitude, name) {
	let url = ''; // 回调地址
	let downloadUrl = ''; // 回调地址
	var bdapp = "bdapp://map/direction?destination=name:"+name+"|latlng:"+latitude+","+longitude+"&coord_type=gcj02&src=hxbank";
	var bdappDown = "http://map.baidu.com/zt/qudao/newfengchao/1012337a/html/slide.html"
	var amapuri = "amapuri://route/plan/?sourceApplication=hxbank&dlat="+latitude+"&dlon="+longitude+"&dname="+name+"&dev=1";
	var amapuriDown = "http://wap.amap.com/"
	
	// #ifdef APP-PLUS
	plus.nativeUI.actionSheet(
		{
			title:"选择导航",
			cancel:"取消",
			buttons:AppitemList
		},
		function(res){
			if(isBaidu && isGaode){
				if(res.index == 1){
					url = bdapp;
					downloadUrl = bdappDown
					openURL(url,downloadUrl)
				}else if(res.index ==2){
					url = amapuri;
					downloadUrl = amapuriDown
					openURL(url,downloadUrl)
				}
			}else if(!isBaidu && isGaode){
				if(res.index == 1){
					url = amapuri;
					downloadUrl = amapuriDown
					openURL(url,downloadUrl)
				}
			}else if(isBaidu && !isGaode){
				if(res.index == 1){
					url = bdapp;
					downloadUrl = bdappDown
					openURL(url,downloadUrl)
				}
			}else{
				if(res.index == 1){
					openMapByDefault(latitude, longitude, name)
				}
				
			}
		}
	);
	// #endif
	// #ifndef APP-PLUS
	uni.showActionSheet({
		itemList:itemList,
		success: (res) => {
			if(res.tapIndex == 0){
				url = bdapp;
				downloadUrl = bdappDown
				openURL(url,downloadUrl)
			}else if(res.tapIndex == 1){
				url = amapuri;
				downloadUrl = amapuriDown
				openURL(url,downloadUrl)
			}else{
				url = "qqmap://map/routeplan?type=drive&to="+name+"&tocoord="+latitude+","+longitude+""
				openURLTencent(url,latitude, longitude, name)
			}
			
		}
	})
	// #endif
	
}
function openMapByios(latitude, longitude, name) {
	let url = ''; // 回调地址
	let downloadUrl = ''; // 回调地址
	// var bdapp = "baidumap://map/direction?destination=name:"+name+"|latlng:"+latitude+","+longitude+"&coord_type=gcj02&src=hxbank";
	// var bdappDown = "http://map.baidu.com/zt/qudao/newfengchao/1012337a/html/slide.html";
	var bdapp = "baidumap://map/navi?location="+latitude+",lng="+longitude+"&coord_type=bd09ll&type=BLK&viaPoints=name:"+name+",lat="+latitude+",lng="+longitude+"&src=ios.baidu.openAPIdemo";
	var bdappDown = "baidumap://map";
	// var amapuri = "iosamap://route/plan/?sourceApplication=hxbank&dlat="+latitude+"&dlon="+longitude+"&dname="+name+"&dev=1";
	var amapuri = "iosamap://navi?sourceApplication=hxbank&&lat="+latitude+"&lon="+longitude+"&dev=1&style=2";
	var amapuriDown = "http://wap.amap.com/";
	// #ifdef APP-PLUS
	plus.nativeUI.actionSheet(
		{
			title:"选择导航",
			cancel:"取消",
			buttons:AppitemList
		},
		function(res){
			if(isBaidu && isGaode){
				if(res.index == 1){
					url = bdapp;
					downloadUrl = bdappDown
					openURL(url,downloadUrl)
				}else if(res.index == 2){
					url = amapuri
					downloadUrl = amapuriDown
					openURL(url,downloadUrl)
				}
			}else if(!isBaidu && isGaode){
				if(res.index == 1){
					url = amapuri
					downloadUrl = amapuriDown
					openURL(url,downloadUrl)
				}
			}else if(isBaidu && !isGaode){
				if(res.index == 1){
					url = bdapp;
					downloadUrl = bdappDown
					openURL(url,downloadUrl)
				}
			}else{
				if(res.index == 1){
					openMapByDefault(latitude, longitude, name)
				}
			}
		}
	);
	// #endif
	// #ifndef APP-PLUS
	uni.showActionSheet({
		itemList:itemList,
		success: (res) => {
			if(res.tapIndex == 0){
				url = bdapp;
				downloadUrl = bdappDown
				openURL(url,downloadUrl)
			}else if(res.tapIndex == 1){
				url = amapuri
				downloadUrl = amapuriDown
				openURL(url,downloadUrl)
			}else{
				url = "qqmap://map/routeplan?type=drive&to="+name+"&tocoord="+latitude+","+longitude+""
				openURLTencent(url,latitude, longitude, name)
			}
		}
	})
	// #endif
	
}
function openURL(url,downLoadUrl) {
	// #ifdef APP-PLUS
	plus.runtime.openURL(url);
	// #endif
	// #ifndef APP-PLUS
		window.location.href=url;
		var startTime = Date.now();
		var count = 0;
		var endTime = 0;
		var t = setInterval(function () {
			count += 1;
			endTime = Date.now() - startTime;
			if (endTime > 800) {
				clearInterval(t);
			}
			if (count < 40){
				return false;
			}
			if(!(document.hidden || document.webkitHidden)) {
				if(window.plus){
					plus.runtime.openURL(downLoadUrl);
				}else{
					window.location.href = downLoadUrl;
				}
				
			   
			}
		}, 20);
	// #endif
	
}
function openURLTencent(url,latitude, longitude, name) {
	window.location.href=url;
	var startTime = Date.now();
	var count = 0;
	var endTime = 0;
	var t = setInterval(function () {
	  count += 1;
	  endTime = Date.now() - startTime;
	  if (endTime > 800) {
	    clearInterval(t);
	  }
	  if (count < 40){
		  return false;
	  } 
	  if (!(document.hidden || document.webkitHidden)) {
	   openMapByDefault(latitude, longitude, name)
	  }
	}, 20);
}
let PI  = 3.14159265358979324;
let x_pi = 3.14159265358979324 * 3000.0 / 180.0
function delta(lat, lon) {
	var a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
	var ee = 0.00669342162296594323; //  ee: 椭球的偏心率。
	var dLat = transformLat(lon - 105.0, lat - 35.0);
	var dLon = transformLon(lon - 105.0, lat - 35.0);
	var radLat = lat / 180.0 * PI;
	var magic = Math.sin(radLat);
	magic = 1 - ee * magic * magic;
	var sqrtMagic = Math.sqrt(magic);
	dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * PI);
	dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * PI);
	return {'lat': dLat, 'lon': dLon};
}
function gcj_encrypt(wgsLat, wgsLon) {
	if(outOfChina(wgsLat, wgsLon))
	return {'lat': wgsLat, 'lon': wgsLon};
	var d = delta(wgsLat, wgsLon);
	return {'lat' : wgsLat + d.lat,'lon' : wgsLon + d.lon};
}
function bd_decrypt(bdLat, bdLon) {
	var x = bdLon - 0.0065, y = bdLat - 0.006;
	var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
	var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
	var gcjLon = z * Math.cos(theta);
	var gcjLat = z * Math.sin(theta);
	return {'lat' : gcjLat, 'lon' : gcjLon};
}
function outOfChina(lat, lon) {
	if (lon < 72.004 || lon > 137.8347)
		return true;
	if (lat < 0.8293 || lat > 55.8271)
		return true;
	return false;
}
function transformLat(x, y) {
	var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
	ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
	ret += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0;
	ret += (160.0 * Math.sin(y / 12.0 * PI) + 320 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0;
	return ret;
}
function transformLon(x, y) {
	var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
	ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
	ret += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0;
	ret += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0;
	return ret;
}
export default {
	/* 打开地图 */
	openMap(latitude, longitude, name,type="gcj02") {
		let _latitude = latitude,_longitude = longitude;
		if(type.toLowerCase() == "wgs84"){
			_latitude = gcj_encrypt(latitude, longitude).lat
			_longitude = gcj_encrypt(latitude, longitude).lon
		}else if(type.toLowerCase() == "bd09"){
			_latitude = bd_decrypt(latitude, longitude).lat
			_longitude = bd_decrypt(latitude, longitude).lon
		}
		// #ifdef MP-WEIXIN
			wx.openLocation({
				latitude: _latitude,
				longitude: _longitude,
				name: name,
				address:"",
				fail: (err) => {
					console.log(err)
				},
			})
		// #endif
		// #ifndef MP  
			switch(uni.getSystemInfoSync().platform){
				case 'android':
					console.log('运行Android上')
					openMapByAndroid(_latitude, _longitude, name)
					break;
				case 'ios':
					console.log('运行ios上')
					openMapByios(_latitude, _longitude, name,)
					break;
				default:
					openMapByDefault(_latitude, _longitude, name)
					console.log('运行在开发者工具上')	
					break;
			}
			
		// #endif
		
	}
}