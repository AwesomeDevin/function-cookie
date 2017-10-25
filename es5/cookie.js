function CookieAction(cookieName){
    this.cookieName = cookieName;
}
CookieAction.prototype.setCookie=function(value,expiredays){
    var cookieValue;
    if (typeof (value) == 'object') {
      cookieValue = JSON.stringify(value);
    } else {
      cookieValue = value;
    }
    var data=new Date();
    data.setDate(data.getDate() + expiredays);
    console.log(this.cookieName);
    document.cookie=this.cookieName+"="+escape(cookieValue)+((expiredays==null)?'':';expires='+data.toGMTString());
}

CookieAction.prototype.getCookie=function(){
   if (document.cookie.length > 0) {
      let startIndex = document.cookie.indexOf(this.cookieName);
      if (startIndex != -1) {
        startIndex = startIndex + this.cookieName.length + 1;
        let endIndex = document.cookie.indexOf(';', startIndex);
        if (endIndex == -1) {
          endIndex = document.cookie.length;
        }
        return unescape(document.cookie.substring(startIndex, endIndex));
      }
    }
    return null;
}

CookieAction.prototype.delCookie=function(){
    document.cookie = this.cookieName+"=0;expires="+new Date(0).toUTCString();
}