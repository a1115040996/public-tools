;var _tools = function(){};
_tools.methods = function(context){
	return{
		//获取url参数
		getUrlParam: function(name){
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
			var href = window.location.href.split('?')[1];
			var search = href?href[1]?href.match(reg):false:false;
		  	return search?search[2]:false;
		}
	}
}

module.exports = _tools;

