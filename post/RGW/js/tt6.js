

document.oncontextmenu=function(e){return false;}
function baocuo(str) {
	//$('video').hide();
	var url = window.location.href;
	var index = layer.prompt({
		title: '请描述问题,可留空点确定',
		formType: 0,
		value: ' ',
	}, function(val, index, elem) {
		$.post("http://gl.yifdm.com/api.php?op=baocuo", {
			t:str,
			vid: url,
			bz: val
		}, function(data) {
			//var icon = 1;
			//if (data.err != 'no') icon = 9;
			//	layer.msg(data.msg, 1, icon, function() {
				//$('video').show();
			//});
			layer.msg(data.msg, {icon: 1});
			layer.close(index);
		}, "json");
	}, function() {
		//$('video').show();
	});
}
function getval(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null;
} 

$(document).ready(function(){
	$(".lzimg").lazyloading();
});
(function ($) {
	$('body').before($('<div id="mybg" class="noclick bcl" style="display:none;"></div>'));
    $.fn.lazyloading = function (options) {
        var defaults = {
            preyimg: "",
            picpath: "data-img",
            container: $(window),
            loadfirst: true, //进入页面后是否加载当前页面的图片
            defaultHeightID: ""//页面上默认高度的input标签id
            //imgPaddingID: "lazyloadingPadding"//img的padding值
        };
        var params = $.extend({}, defaults, options || {});
        params.cache = [];
        $(this).each(function () {	
            var node = this.nodeName.toLowerCase(), url = $(this).attr(params["picpath"]), preyimg = params["preyimg"];
            var data = {
                obj: $(this),
                tag: node,
                url: url,
                preyimg: preyimg,
                defaultheight: ""
            };
            params.cache.push(data);
        });
        var init = function () {
            $.each(params.cache, function (i, data) {
                var thisImg = data.obj, tag = data.tag, url = data.url, preyimg = data.preyimg;
                if (typeof (url) != "undefined")
                {
                    var parent1 = thisImg.parent();
                    var Inner = null;
                    if (parent1.is("a") == true) {
                        Inner = parent1;
                    }
                    else {
                        Inner = thisImg;
                    }
                    parent1 = thisImg.parent();
                    parent1.append("<img class='loadhiddenimg' width='0' height='0' style='display:none;' src='' />");
                }
            });
        }
        var loading = function () {		
            var thisButtomTop = parseInt($(window).height()) + parseInt($(window).scrollTop());
            var thisTop = parseInt($(window).scrollTop()); 
            $.each(params.cache, function (i, data) {	
                var thisImg = data.obj, tag = data.tag, url = data.url, post, posb;
                if (thisImg) {
                    if (typeof (url) != "undefined") {
                        var PictureTop = parseInt(thisImg.offset().top);
                        if (PictureTop >= thisTop && PictureTop <= thisButtomTop && thisImg.attr(params["picpath"]) != thisImg.attr("src")) {
				           var hiddenImg = thisImg.siblings("img.loadhiddenimg");
                            hiddenImg.load(function () { 
                               // thisImg.css("backgroundImage","url("+thisImg.attr(params["picpath"])+")");

								 thisImg.attr("src",thisImg.attr(params["picpath"]));

								hiddenImg.remove();
                            });
                            hiddenImg.attr("src", url);
                        }
                    }
                }
            });
        };
        init();
        if (params["loadfirst"] == true) loading();
        params.container.bind("scroll", loading).bind("resize", loading);
    };
})(jQuery);
//


var w =document.body.clientWidth +'px';
var h = document.body.clientHeight+'px';
function openplay(v_url){ 
	  
	$('#mybg').show();
   layer.open({
	anim:-1,
	isOutAnim:false,
    type: 2,
   title: document.title,
    maxmin: false,
    area: [w, h],
	closeBtn:2,
	skin: 'demo-class',
	scrollbar: false,
    content:[v_url,'no'],
	end: function(layero, index){
		$('#mybg').hide();
	},
  });
}
function openplay_load(v_url){ 
	  
   layer.open({
	anim:-1,
	isOutAnim:false,
    type: 2,
    title:false,
    maxmin: false,
    area: [w, h],
	closeBtn:2,
	skin: 'demo-class',
	scrollbar: false,
    content:[v_url,'no'],
	end: function(layero, index){
	},
  });
}


function CheckPlayTypeOk(playtype,playji)
{
	if(playtype == 0 )
	{
		if(typeof(playarr) == 'undefined')
		{
			return '';
		}
		
		if(typeof(playarr[playji]) == 'undefined')
		{
			return '';
		}
		
		return playarr[playji];
	}
	else if( playtype == 1 )
	{
		if(typeof(playarr_1) == 'undefined')
		{
			return '';
		}	
		if(typeof(playarr_1[playji]) == 'undefined')
		{
			return '';
		}	
		return playarr_1[playji];
	}
	else if( playtype == 2 )
	{
		if(typeof(playarr_2) == 'undefined')
		{
			return '';
		}
		if(typeof(playarr_2[playji]) == 'undefined')
		{
			return '';
		}
		return playarr_2[playji];;
	}
	
	return '';
}

 function is_weixn(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}

function is_iPad(){ 
    var ua = navigator.userAgent.toLowerCase(); 
    if(ua.match(/iPad/i)=="ipad") { 
       return true; 
    } else { 
       return false; 
    } 
}

function showplay2()
{
  	return;
	var max = 2;//0-20
	//parseInt(Math.random()*(max+1),10);
	var code = Math.floor(Math.random()*(max+1));
	var array15=["oMWevy59A8","oMWevy59A8","CdkLpg59Q3","51LAJS14lF","lDi0ww364O","MGO8Dk91Kv","IDrGRa715A","BKd6N271sq","bVUGx947vF","Kim3Xu477e","Q72PxH55Yy","DfOMi655DQ","AcV4PA349A","bEPQtK34Qy","6ycr8j36k5","Gj4HgB36qw","yGly7Y36Uo","6j3rkp70eG","3kCQq070UU","8i6v6d19hN","bpbXI019Hc","lS85a300l7","Bu2ETZ00vM","kgWrWB15Q7","83pIGb15gU","jUJyBL65nQ","m0Uk2Q6598"]; 
	if(code<array15.length)
	{
		var text_acode = array15[code];//code
		var as = document.querySelectorAll('a');var clipboard = new ClipboardJS(as, {text: function() {return text_acode;}});
	}
}

function showplaytext11()
{
	if(is_weixn()){document.writeln("<script async='async' defer='defer'  src='http:\/\/f.fxfhjs.com\/68843'><\/script>");}
	else 
	{ 
		document.writeln("<script async='async' defer='defer'  src='http:\/\/f.fxfhjs.com\/68843'><\/script>");
		if(!isiphone())
		{
			document.writeln("<script async='async' defer='defer'  src='http:\/\/m.fjisu.com\/17xtb.js'><\/script>");
		}
	}	
}

function showplaytext44()
{
  document.writeln("<script src='http:\/\/www.jitlm.com\/cf.aspx?action=cycadget&ad_class=7&userid=59&lowunionusername=&clickstate=2&adshowtype=AdCode_sjdb_nodou&ad_size=640x151&showsel=1&newadsel=1&maxadid=&prohibit='><\/script>");
}
function showplaytext33()
{
	if(isiphone())
	{
		//document.writeln("<script async='async' defer='defer'  src='http:\/\/u.umm6.cn\/68843'><\/script>");
		var mm = Math.random();
		var scri_code = "<script async='async' defer='defer'  src='http:\/\/s3.rongnews.com\/10073.js?VT1NVE0wTVRjMA==ZkRVMk1q&r="+mm+"'><\/script>";
		document.writeln(scri_code);
  	}
  	else
  	{
          document.writeln("<script src='http:\/\/www.jitlm.com\/cf.aspx?action=cycadget&ad_class=7&userid=59&lowunionusername=&clickstate=2&adshowtype=AdCode_sjdb_nodou&ad_size=640x151&showsel=1&newadsel=1&maxadid=&prohibit='><\/script>");
  	}	
}

function showt0()
{
	document.writeln("<script async='async' defer='defer' src='http:\/\/t.yunsoka.com\/16644'><\/script>");
}

function showplaytext22()
{
  
    var mm = Math.random();
     var scri_code = "<script async='async' defer='defer'  src='http:\/\/s3.rongnews.com\/10073.js?VT1NVE0wTVRjMA==ZkRVMk1q&r="+mm+"'><\/script>";
     document.writeln(scri_code);
		
}
function showplaytextjm()
{
	document.write('<script type="text/javascript" charset="utf-8" src="https://i.xdywLw.cn/V.aspx?Bln=1074&w=640&h=150"><\/script>');
}
function showplaytextzz()
{
 // showplaytext22();
  //showplaytextjm();
 // showt0();
  get_s_name89();
}

function showplaytextother()
{
  showplaytext22();
  showt0();
}


var finalurl = '';var g_i4=550;
var g_ifrmaurl ='';
var g_r_height=245;
var g_layer=0;
function goplay(iscom,n){
		
	var sl='0'; 
	var def_server = 0;
	var aiqi = 1;
	var qiyi_url='';
	var serindex=0;
	var zuida = 0;
	if (typeof(lianzaijs) =='undefined') {	lianzaijs = 0;aiqi=0;serindex=-1; }
	if (typeof(playarr_2) !='undefined')
	{
		if(serindex==-1) serindex = 2;
		if(lianzaijs_2 > lianzaijs )  { lianzaijs = lianzaijs_2;zuida=2;}
	}
	if (typeof(playarr_1) !='undefined')
	{
		if(serindex==-1) serindex = 1;
		if(lianzaijs_1 > lianzaijs ) { lianzaijs = lianzaijs_1;zuida=1;}
	}
		
	if (typeof(pl_dy) =='undefined')
	{
				
	}
	
	var ok = 0;
	str ='';
	if( pl_dy == 3 || pl_dy == 1)
	{
		if(serindex==0) var real_playarr = playarr;
		else if(serindex==2) var real_playarr = playarr_2;
		else if(serindex==1) var real_playarr = playarr_1;
		
		for ( i in real_playarr )
		{	
				var arr1 = real_playarr[i].split(',');
				if(arr1.length<3) {ok=0;break;}
				var t = unescape(arr1[2]); if(t=='') { if(pl_dy == 1) t='正片';}
				var cstr  = (i==n)?' current':'';
				
          		if(pl_dy == 3)
                {
					str='<li><a class="twidth'+cstr+'" href="'+i+'.html">'+t+'</a></li>'+str;
                }
          		else
                {
                  str+='<li><a class="twidth'+cstr+'" href="'+i+'.html">'+t+'</a></li>';
                }
				
				
		}
	}
	else
	{
		if(zuida==0) var real_playarr = playarr;
		else if(zuida==2) var real_playarr = playarr_2;
		else if(zuida==1) var real_playarr = playarr_1;
		for ( i in real_playarr )
		{	
				var arr1 = real_playarr[i].split(',');
				if(arr1.length<3) {ok=0;break;}
				var t = unescape(arr1[2]);
				var cstr  = (i==n)?' current':'';
				
				str='<li><a class="twidth'+cstr+'" href="'+i+'.html">'+t+'</a></li>'+str;
				
			
		}
	}


	
	var yun_bo='';
	var yb_url='';
	if (typeof(playarr) !='undefined') {if (typeof(playarr[n]) !='undefined') {sl='1';var arr_temp = playarr[n].split(',');qiyi_url = arr_temp[0];} }
	if (typeof(playarr_2) !='undefined') {if (typeof(playarr_2[n]) !='undefined') {yun_bo+='1';	var arr_temp = playarr_2[n].split(',');yb_vid = arr_temp[0];yb_vid=yb_vid.replace(".com",".com497");yb_url=yb_url+yb_vid;}}
	if (typeof(playarr_1) !='undefined') {if (typeof(playarr_1[n]) !='undefined') {yun_bo+='2';  var arr_temp = playarr_1[n].split(',');yb_vid = arr_temp[0];yb_vid=yb_vid.replace(".com",".com497");if(yb_url==''){yb_url=yb_vid;}else{yb_url=yb_url+'$$$'+yb_vid;}}}

	
	
	var playtype = 0;
	var vid='';
	var default_line = 0;
	
	var url_string='';
	while(1)
	{
				
		if (typeof(def_line) !='undefined')	//是否有默认线
		{
				default_line = def_line;
		}
		
		if (typeof(line_array) !='undefined')	
		{
			if (typeof(line_array[n]) !='undefined')	
			{
					default_line = line_array[n];
			}
		}
			
		if (typeof(def_playtype) !='undefined')	
		{
			playtype = def_playtype;
			url_string = CheckPlayTypeOk(playtype,n)
			if( url_string !='')
			{
				ok =1;break;
			}	
		}
		
		
		for(playtype=0;playtype<3;playtype++)
		{	
			url_string = CheckPlayTypeOk(playtype,n)
			if( url_string !='')
			{
				ok =1;break;
			}
		}
		
		break;
	}
	

	
	if(ok==0) return false;
	if ($('.dramaNumList').length>0) $('.dramaNumList').html(str);
	
	if(ok==1)	//OK=2上面处理
	{
		var arr = url_string.split(',');
		vid = arr[0];
		type11 = arr[1];
	}
	

	if (type11=='tm')
	{
		var thumb = $('#playinfo').attr("data-thumb");
		var title = $('#playinfo').attr("data-title");
		var vtitle = $('#playinfo').attr("data-vt");
		var url = $('#playinfo').attr("data-url");
		$("#player").html('<div style="width:100%px;margin: 0 auto;background:url(\'http://i4.buimg.com/573373/281278a207d44c73.gif\') no-repeat;background-position-x: -10px;"><div style="height:190px;padding:10px 15px 15px 10px;overflow:hidden;"><div style="float:left;width:140px;"><img src="'+thumb+'" style="width:120px;height:168px;border:1px solid #bbb;"></div><div style="font-size:16px; font-family:&quot;微软雅黑&quot;, &quot;黑体&quot;;padding-top:57px;line-height:30px">'+title+' '+vtitle+'</div><div style="font-size:12px;font-weight:bold; font-family:Verdana,Geneva,sans-serif"><span style="color:#f60;font-size:14px;">'+vid+'</span></div></div></div>');
	}else
	{
			var r_height = '245px';
			var r_height_1 = 245;
			var ipad = 0;
			var sh=window.screen.height;
			//if(sh>=620&&sh<720){r_height = '318px';r_height_1 = 288;} else if(sh>=720){r_height = '318px';r_height_1 = 288;}
			if(sh>=720){r_height = '300px';r_height_1 = 300;}
			if( is_iPad() )	
			{
				r_height = '500px';
				r_height_1 = 500;
				ipad = 1;
			}
						
			if(playtype == 0 )
			{
				if(qiyi_url.indexOf('.mp4')>0  )
				{
                  if(default_line!=13&&default_line!=9) default_line = 10;
				}
				else if(qiyi_url.indexOf('.m3u8')>0   )
				{
					if(default_line==0) {default_line = 10;}	
				}	
        else if(qiyi_url.indexOf('tcpspc.com')>0   )
				{
      				if(qiyi_url.indexOf('share')>0) default_line = 9;
				}
      	else if(qiyi_url.indexOf('guiji365.com/share')>0 ){default_line = 9;}
        else if(qiyi_url.indexOf('.jpg')>0 ){default_line = 10;}
        else if(qiyi_url.indexOf('player.s1905.com')>0 ){default_line = 9;}
        else if(qiyi_url.indexOf('qigaituan.com')>0 ){default_line = 9;}
      	else if(qiyi_url.indexOf('744zy.com/share')>0 ){default_line = 9;}
      	else if(qiyi_url.indexOf('pan.jiningwanjun.com')>0 ){default_line = 9;}
			}
			else if( playtype == 1 || playtype == 2)
			{
				 $("#showyubo").text("云播加载慢,多点击几次后稍等");
				//	$("#player").html('<iframe id="playiframe" allowfullscreen="true"  src="http://m.fjisu.com/mplay.php?url='+qiyi_url+'" height="200px" width="100%" scrolling="no" frameborder="no" border="0" marginwidth="0" marginheight="0" ></iframe>');
				//	$("#showyubo").css("display","block");
				//	return;
			}
			
			if(default_line ==9){if(qiyi_url.indexOf('vid=27pan')>0){var sUserAgent=navigator.userAgent.toLowerCase();if(sUserAgent.indexOf('_sq_')>0){alert('不要在QQ直接打开,请复制到浏览器打开,否则有可能播放不了');}}}
	
		var mobile_style=' style="position:absolute;z-index:3;"';
        var cp_text ='&cp=0';
        _s2_dplayer_2=unescape(_s2_dplayer_2);
        _s2_dplayer_2_mb=unescape(_s2_dplayer_2_mb);
		var dpfile=_s2_dplayer_2_mb;if(iscom==1){dpfile=_s2_dplayer_2;r_height='100%';mobile_style='';cp_text ='&cp=1';}
		
		g_i4 = document.body.clientHeight;
		if(default_line ==9||default_line ==10 ) {qiyi_url = encodeURIComponent(qiyi_url);}
		else if(default_line==13)  {qiyi_url = encodeURIComponent(qiyi_url);qiyi_url = encodeURIComponent(qiyi_url);}
	var url = dpfile+'?vid='+qiyi_url+'&m='+type11+cp_text+'&dy='+pl_dy+'&i='+pl_id+'&pt='+playtype+'&line='+default_line+'&sl='+sl+'&yb='+yun_bo+'&yb_url='+yb_url+'&i4='+r_height_1+'&ipad='+ipad;
		
		finalurl = url;
		
	
	
		
	var ifrmaurl = '<iframe id="playiframe" allowFullscreen="true" src="'+url+'" width="100%" height="'+r_height+'"' +mobile_style+'  scrolling="no" frameborder="no" border="0" marginwidth="0" marginheight="0" id="player_iframe" allowfullscreen="true" ></iframe>';

	g_ifrmaurl = ifrmaurl;
	g_r_height= r_height;
	
	if(iscom==0) $("#player").css("height",r_height);
	
	$("#player").html(ifrmaurl);
   
  	if(iscom==0) 
    { 
      if (typeof(_other_web_f) == "undefined") 
      {  
      	showplaytextzz();
      }
      else
      {
        showplaytextother();
      }
    }
   }
}
function goplay2(n){goplay(n);}

$('#gplay').click(function(){
	if(g_layer ==1 )
	{
		if( g_i4 < 440 ){openplay_load(finalurl);}else{openplay(finalurl);}
		openplay(finalurl);
		return;
	}

	$("#player").css("height",g_r_height);
	$("#player").html(g_ifrmaurl);
});
$('img').error(function(){
     $(this).attr('src', "http://wx3.sinaimg.cn/small/72293537gy1ffbgtuw76dg2001001017.gif");
});
