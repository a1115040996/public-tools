function Say(){
	Say.prototype.init(arguments)
}
Say.prototype = {
	init: function(arguments){
		console.log(...Array.prototype.slice.call(arguments))
	}
}

/*
 *How to use
 * 
 * Say('hello', [{name:'zhangsan'}], [1,2,3,4])
 * 
 * */

export default Say