# 安装 
```
	npm i public-tools
```

# 使用

```
	import tools from 'public-tools'
	
	// 获取url参数 
	tools.getUrlParam(name)
	
	// 规定按照某个数据进行排序
	tools.sortBy(arr);
	
	// 用例 返回按照old进行排序的数组
	tools.sortBy([
		{name:'zhangsna',old: 18},
		{name: 'lisi',old: 20}
	],'old')
	
	// 获取随机颜色
	tools.getRandomColor()
	
	// 判断字符串是否为空
	tools.isEmpty(str)
	
	// 判断手机号码格式
	tools.isMobile(phoneNumber)
	
	// 判断身份证格式
	tools.isIdentityCard(num)
	
	// 判断邮箱格式
	tools.isEmail(emailValue)
	
	// 时间格式化
	tools.dateFormat(data, 'yyyy-MM-dd HH:mm:ss')
	
	
	// 获取两个日期之间的间隔天数
	tools.getIntervalDays(startDate, endDate)
	
	// 秒格式化。转换成：时分秒。例：4230秒 转换成 1小时10分30秒
	tools.secondFormat(seconds)
	
```



