// build time:Tue Dec 11 2018 09:59:56 GMT+0800 (中国标准时间)
function hookTemplate(){var o=DUOSHUO.templates.post;DUOSHUO.templates.post=function(e,a){var n=o(e,a),s=e.post.agent,r=e.post.author.user_id,i="";return r&&r==CONFIG.duoshuo.userId&&(i='<span class="duoshuo-ua-admin">'+CONFIG.duoshuo.author+"</span>"),s&&/^Mozilla/.test(s)&&(n=n.replace(/<\/div><p>/,i+getAgentInfo(s)+"</div><p>")),n}}function getAgentInfo(o){$.ua.set(o);var e,a,n,s=$.ua,r=(e=window.navigator.userAgent,a=null!==e.match(/iPad/i),n=new RegExp(["iphone","android","phone","mobile","wap","netfront","x11","java","opera mobi","opera mini","ucweb","windows ce","symbian","symbianos","series","webos","sony","blackberry","dopod","nokia","samsung","palmsource","xda","pieplus","meizu","midp","cldc","motorola","foma","docomo","up.browser","up.link","blazer","helio","hosin","huawei","novarra","coolpad","webos","techfaith","palmsource","alcatel","amoi","ktouch","nexian","ericsson","philips","sagem","wellcom","bunjalloo","maui","smartphone","iemobile","spice","bird","zte-","longcos","pantech","gionee","portalmmm","jig browser","hiptop","benq","haier","^lct","320x320","240x320","176x220"].join("|"),"i"),!a&&e.match(n)?"<br><br>":'<span class="duoshuo-ua-separator"></span>'),i=s.os.name||"Unknown",t=s.os.version||"Unknown",u=s.browser.name||"Unknown",p=s.browser.version||"Unknown",l={os:{android:"android",linux:"linux",windows:"windows",ios:"apple","mac os":"apple",unknown:"desktop"},browser:{chrome:"chrome",chromium:"chrome",firefox:"firefox",opera:"opera",safari:"safari",ie:"internet-explorer",wechat:"wechat",qq:"qq",unknown:"globe"}},c=l.os[i.toLowerCase()],m=l.browser[function(){var o=u.toLowerCase();if(o.match(/WeChat/i))return"wechat";if(o.match(/QQBrowser/i))return"qq";return o}()];return r+'<span class="duoshuo-ua-platform duoshuo-ua-platform-'+i.toLowerCase()+'"><i class="fa fa-'+c+'"></i>'+i+" "+t+"</span>"+r+'<span class="duoshuo-ua-browser duoshuo-ua-browser-'+u.toLowerCase()+'"><i class="fa fa-'+m+'"></i>'+u+" "+p+"</span>"}"undefined"!=typeof DUOSHUO?hookTemplate():$("#duoshuo-script")[0].onload=hookTemplate;
//rebuild by neat 