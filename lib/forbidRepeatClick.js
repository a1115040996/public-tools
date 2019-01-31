var forbidRepeartClick = (function(){
	var instance = null;
	var canClick = true;
	function Build(){
		this.setClick = function(callback){
			if(canClick){
				canClick = false;
				callback()
				setTimeout(function(){
					canClick = true;
				},2000)
			}else{
				console.log('两秒之内限制重复点击')
			}
		}
	}
	
	
	if(!instance){
		instance = new Build();
		console.log('创建实例')
	}
	
	return instance;
})()




function C(callback){
	C.prototype.init(callback);
}
C.prototype = {
	canclick: true,
	init: function(callback){
		if(this.canclick){
			this.canclick = false
			callback();
			setTimeout(function(){
				this.canclick = true
			}.bind(this),2000)
		}else{
			console.log('两秒未到不允许点击')
		}
	}
}
