# function-cookie   
# 【该模块已集成到[vue-devin](https://github.com/Rise-Devin/vue-devin)中，可使用npm install vue-devin】
使用es6封装的一个用于cookie增删改查的js模块

#### 使用方法
```
import Cookie from '../modules/cookie';   //导入cookie模块
var cookie = new Cookie('cookieName');   //实例化  参数:cookie name
```
##### 设置cookie/修改cookie
```
cookie.setCookie(content,expires);  //content:内容->string;expires:过期时间(天)->int
```
 
##### 获取cookie
```
cookie.getCookie()
```
 
##### 删除cookie
```
cookie.delCookie();
```
