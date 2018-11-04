;var _tools = function(){};
_tools.methods = function(context){
	return{
		//获取url参数
		getUrlParam: function(name){
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
			var href = window.location.href.split('?')[1];
			var search = href?href[1]?href.match(reg):false:false;
		  	return search?search[2]:false;
		},
		
		//规定按照某个数据进行排序
		sortBy: function(arr,name,isReversed){
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
		},
		
		getRandomColor:function(){
			var colorValue = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
			var s = "#";
			for (var i=0;i<6;i++) {
				s+=colorValue[Math.floor(Math.random()*16)];
			}
			return s;
		},
		
	}
}



//设计模式
_tools.designMode = {
	Observer:function(){},//观察者模式
};
_tools.designMode['Observer'].prototype = {
	taskPool:[],
	taskId:0,
	publish:function(name){
		this.taskPool.forEach(function(v,i){
			if(v['name']==name){
				v['callback']();
			}
		});
	},
	subscribe:function(obj){
		/*
		 * 传输格式
		 * id: 需要指定id值 (如果有)
		 * name: 需要订阅的事件名称
		 * data: 需要传输的数据(如果有)
		 * callback: 需要执行的事务
		 * */
		obj.id = obj.id?obj.id:++this.taskId;
		this.taskPool.push(obj);
		return obj.id;
	},
	unsubscribe:function(id){
		this.taskPool.forEach(function(v,i){
			if(v['id']==id){
				this.taskPool.splice(i,1);
				console.log('订阅ID:'+v['id']+'  取消订阅=>'+v['name']+"成功！");
			}
		}.bind(this))
	}
}

module.exports = _tools;

