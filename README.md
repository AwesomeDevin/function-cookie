# function-cookie
使用es6封装的一个用于cookie增删改查的js模块

#### 使用方法
```
import Cookie from '../modules/cookie';   //导入cookie模块
var cookie = new Cookie('cookieName');   //实例化  参数:cookie name
```
##### 设置cookie
```
cookie.setCookie(content,expires);  //content:内容;expires:过期时间(天)
```
 
##### 获取cookie
```
cookie.getCookie()
```
 
##### 删除cookie
```
cookie.delCookie();
```
