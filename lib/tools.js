var factory = (function () {
	var instance = '';
	var BuildTools = function () {
		//获取url参数
		this.getUrlParam =  function(name){
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
			var href = window.location.href.split('?')[1];
			var search = href?href[1]?href.match(reg):false:false;
		  	return search?search[2]:false;
		}
		
		//规定按照某个数据进行排序
		this.sortBy = function(arr,name,isReversed){
			try{
				if(!isReversed){
					arr.sort(function(a,b){
						return (a[name]-0) - (b[name]-0)
					})
				}else{
					arr.sort(function(a,b){
						return (b[name]-0) - (a[name]-0)
					})
				}
				return arr;
			}catch(e){
				//TODO handle the exception
				return arr;
			}
		}
		
		this.getRandomColor = function(){
			var colorValue = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
			var s = "#";
			for (var i=0;i<6;i++) {
				s+=colorValue[Math.floor(Math.random()*16)];
			}
			return s;
		}
		
		
		//判断字符串是否为空
		this.isEmpty = function(value) {
		  if (typeof(value) == "undefined" || value == null || value === "") {
		    return true;
		  } else {
		    return false;
		  }
		}
		
		//判断手机号码格式
		this.isMobile = function(value) {
		  var reg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		  if (reg.test(value)) {
		    return true;
		  } else {
		    return false;
		  }
		}
		
		/**
		 * 判断身份证格式
		 * @param  {[String]}  value 待验证的参数
		 * @return {Boolean}   ture-符合规范，false-不符合规范
		 */
		this.isIdentityCard = function(value) {
		  //var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		  var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
		  if (reg.test(value)) {
		    return true;
		  } else {
		    return false;
		  }
		}
		
		/**
		 * 判断邮箱格式
		 * @param  {[String]}  value 待验证的参数
		 * @return {Boolean}   ture-符合规范，false-不符合规范
		 */
		this.isEmail = function(value) {
		  var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		  if (reg.test(value)) {
		    return true;
		  } else {
		    return false;
		  }
		}
		
		
		/**
		 * 根据文件名获取文件后缀。例：'xxxxx.jpg.EXE' 返回 'exe'
		 * @param  {String} fileName 文件名
		 * @return {String}          小写形式的后缀名
		 */
		this.getFileSuffix = function(fileName) {
		  var suffix = '';
		  index = fileName.lastIndexOf('.');
		  if (index > -1) {
		    suffix = fileName.substring(index + 1).toLowerCase();
		  }
		  return suffix;
		}
		
		
		/**
		 * 时间格式化
		 * @param  {[Date]} date   要格式化的时间对象
		 * @param  {[String]} format 格式，例如"yyyy-MM-dd HH:mm:ss"
		 * @return {[String]}        格式化后的时间字符串
		 */
		this.dateFormat = function(date, format) {
		  var zeroPadding = function(i) {
		    return (i < 10 ? "0" : "") + i;
		  };
		  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(item) {
		    switch (item) {
		      case "yyyy":
		        return zeroPadding(date.getFullYear());
		      case "MM":
		        return zeroPadding(date.getMonth() + 1);
		      case "dd":
		        return zeroPadding(date.getDate());
		      case "HH":
		        return zeroPadding(date.getHours());
		      case "mm":
		        return zeroPadding(date.getMinutes());
		      case "ss":
		        return zeroPadding(date.getSeconds());
		    }
		  });
		}
		
		/**
		 * 获取两个日期之间的间隔天数。两个日期的格式为：yyyy-MM-dd
		 * @param  {[String]} beginDate 开始日期。例：2016-01-01
		 * @param  {[String]} endDate   结束日期。例：2016-07-23
		 * @return {[int]}           间隔天数
		 */
		this.getIntervalDays = function(beginDate, endDate) {
		  var beginArr = beginDate.split("-");
		  var endArr = endDate.split("-");
		  var begin = new Date(beginArr[0], beginArr[1] - 1, beginArr[2]);
		  var end = new Date(endArr[0], endArr[1] - 1, endArr[2]);
		  var temp = (end - begin) / (1000 * 60 * 60 * 24);
		  if (temp < 0) {
		    return temp -= 1;
		  } else {
		    return temp += 1;
		  }
		}
		
		
		/**
		 * 获取URL中参数的的值
		 * @param  {[String]} key 参数名称
		 * @return {[String]}     参数值
		 */
		this.getParameter = function(key) {
		  var url = location.href;
		  var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
		  var paraObj = {};
		  for (var i = 0, len = paraString.length; i < len; i++) {
		    var j = paraString[i];
		    paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
		  }
		  var returnValue = paraObj[key.toLowerCase()];
		  if (typeof(returnValue) == "undefined") {
		    return "";
		  } else {
		    return returnValue;
		  }
		}
		
		
		/**
		 * 设置cookie值
		 * @param  {[String]} key 参数名称
		 * @param  {[String]} value 参数值
		 * @param  {[int]} sec 是小时间。单位：秒
		 * @return {[String]}     
		 */
		this.setCookie = function(key, value, sec) {
		  var cookieStr = key + '=' + escape(value);
		  if (!util.isEmpty(sec)) {
		    var exp = new Date();
		    exp.setTime(exp.getTime() + sec * 1000);
		    cookieStr += ';expires=' + exp.toGMTString();
		  }
		  cookieStr += ';path=/';
		  document.cookie = cookieStr;
		}
		
		
		/**
		 * 清除cookie中的值
		 * @param  {[String]} key 参数名称
		 * @return 
		 */
		this.clearCookie = function(key) {
		  var exp = new Date();
		  exp.setTime(exp.getTime() - 1);
		  var value = util.getCookie(key);
		  if (!util.isEmpty(value)) {
		    document.cookie = key + "=" + value + ";expires=" + exp.toGMTString();
		  }
		}
		
		
		/**
		 * 秒格式化。转换成：时分秒。例：4230秒 转换成 1小时10分30秒
		 * @param   int seconds 
		 * @return  String
		 */
		this.secondFormat = function(seconds) {
		  var theTime = parseInt(seconds); // 秒
		  var theTime1 = 0; // 分
		  var theTime2 = 0; // 小时
		  if (theTime > 60) {
		    theTime1 = parseInt(theTime / 60);
		    theTime = parseInt(theTime % 60);
		    if (theTime1 > 60) {
		      theTime2 = parseInt(theTime1 / 60);
		      theTime1 = parseInt(theTime1 % 60);
		    }
		  }
		  var result = "" + parseInt(theTime) + "秒";
		  if (theTime1 > 0) {
		    result = "" + parseInt(theTime1) + "分" + result;
		  }
		  if (theTime2 > 0) {
		    result = "" + parseInt(theTime2) + "小时" + result;
		  }
		  return result;
		}
		
	}
	
	if(instance){
		console.log('拥有实例')
		return instance
	}else{
		console.log('没有实例')
		return new BuildTools()
	}
})()
			

module.exports = factory;

