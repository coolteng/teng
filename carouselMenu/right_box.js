var now = new Date();
var yy = now.getFullYear();      //年
var mm = now.getMonth() + 1;     //月
var dd = now.getDate();          //日
var cltYYMMDD = yy + "年";
if(mm < 10) cltYYMMDD += "0";
cltYYMMDD += mm + "月";
if(dd < 10) cltYYMMDD += "0";
cltYYMMDD += dd + "日";
var div1 = document.createElement("div");
function closea(){
	div1.style.cssText="display:none;";
}
var link = 'http://count.eepw.com.cn/count/doRedirect?http://www.eepw.com.cn/event/action/2019iot/index.html';
var title = '2019 鄧崇林的創新入口網站非常歡迎並邀您参加👍';
var tp = cltYYMMDD + '  號外';
div1.innerHTML = "<div style=\"text-align:right; font:14px/24px Arial, Helvetica, sans-serif, '宋體'; width:30px; text-align:center; float:right;\"><a onclick=\"closea()\" style=\"color:#ffffff;cursor:pointer;\">×</a></div><div style=\"padding:10px 0px;font-size: 14px;line-height: 20px; background: #222222;\"><a href=\""+link+"\" target=\"_blank\" style=\"display: block;text-decoration:none;\" ><p style=\"width: 164px;padding: 0px 8px 0px 10px;color: #ffffff;text-align: left;\"><span style=\"color: #c00;background: #c00;color: #fff;border-radius: 3px;font-size: 12px;display: inline-block;padding: 0px 5px;line-height: 18px;margin-bottom: 6px;\">"+tp+"</span><br />"+title+"</p></a></div>";
div1.style.cssText="position: fixed;bottom: 450px;right: 0;width: 180px;z-index: 9999;"
document.body.appendChild(div1);