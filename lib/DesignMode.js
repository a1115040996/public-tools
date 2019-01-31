/*
 * 观察者
 * */

var pubSub = (function(){
	var instance  = '';
	// 创建工厂方法
	var buildFactory = function() {
		this.threadPool = [];
		
		// 订阅任务方法
		this.subscribe = function(Obj){
			this.threadPool.push({
				name: Obj['name'],
				func: Obj['func']
			});
			console.log('订阅成功')
		}.bind(this)
		
		// 发布任务方法
		this.publish = function(_name){
			console.log('发布'+_name+'任务')
			var pool = this.threadPool;
			for (var i=0;len = pool.length,i<len;i++) {
				if(pool[i]['name'] === _name){
					pool[i]['func']();
				}
			}
		}.bind(this)
		
		// 通过名称取消订阅方法
		
		// 通过ID取消订阅方法
	}
	
	if(!instance){
		instance = new buildFactory();
	}
	return instance;
})()
