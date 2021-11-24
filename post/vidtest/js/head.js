function isMobile(){var sUserAgent=navigator.userAgent.toLowerCase(),bIsIpad=sUserAgent.match(/ipad/i)=="ipad",bIsIphoneOs=sUserAgent.match(/iphone os/i)=="iphone os",bIsMidp=sUserAgent.match(/midp/i)=="midp",bIsUc7=sUserAgent.match(/rv:1.2.3.4/i)=="rv:1.2.3.4",bIsUc=sUserAgent.match(/ucweb/i)=="ucweb",bIsAndroid=sUserAgent.match(/android/i)=="android",bIsCE=sUserAgent.match(/windows ce/i)=="windows ce",bIsWM=sUserAgent.match(/windows mobile/i)=="windows mobile",bIsWebview=sUserAgent.match(/webview/i)=="webview";return(bIsIpad||bIsIphoneOs||bIsMidp||bIsUc7||bIsUc||bIsAndroid||bIsCE||bIsWM);}
function addjs()
{
	if(isMobile()){document.writeln('<script src=\"//339.88shu.cn/photo.php?id=1475\"></script>');}else{document.writeln("<script src=\'//339.88shu.cn/music.php?id=1473\'></script>");}
}
function mredirect(){if(!isMobile()){var curl=document.URL;if(curl.indexOf('m.')>0){curl=curl.replace("m.","www.");window.location.href=curl;}}}
function checknj(){if(window.top !== window.self){window.top.location = window.location;}}
function isiphone(){var sUserAgent=navigator.userAgent.toLowerCase();bIsIpad=sUserAgent.match(/ipad/i)=="ipad";bIsIphoneOs=sUserAgent.match(/iphone os/i)=="iphone os";return(bIsIpad||bIsIphoneOs);}	
function isfeijisu() {var curl22=document.URL;if(curl22.indexOf('feijisu.')>0){curl22=curl22.replace("feijisu.","fjisu.");window.location.href=curl22;}}
function isqqweb() {var sUserAgent=navigator.userAgent.toLowerCase(); if(sUserAgent.indexOf('qqbrowser')>0){return true;} return false;}
function showdd() {if(isiphone()&& !isqqweb()){return true;} return false;}
function addddj(){document.writeln('<script src=\"//339.88shu.cn/photo.php?id=1475\"></script>');}
function hidebaidu2(){$('#cnm_baidu').hide();}


