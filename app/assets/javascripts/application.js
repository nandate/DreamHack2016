// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

/*---------- PLGUINS ----------*/
/*! Retina.js v1.1.0 */
;(function(){var root=typeof exports=="undefined"?window:exports;var config={check_mime_type:true};root.Retina=Retina;function Retina(){}Retina.configure=function(options){if(options==null)options={};for(var prop in options)config[prop]=options[prop]};Retina.init=function(context){if(context==null)context=root;var existing_onload=context.onload||new Function;context.onload=function(){var images=document.getElementsByTagName("img"),retinaImages=[],i,image;for(i=0;i<images.length;i++){image=images[i];retinaImages.push(new RetinaImage(image))}existing_onload()}};Retina.isRetina=function(){var mediaQuery="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";if(root.devicePixelRatio>1)return true;if(root.matchMedia&&root.matchMedia(mediaQuery).matches)return true;return false};root.RetinaImagePath=RetinaImagePath;function RetinaImagePath(path,at_2x_path){this.path=path;if(typeof at_2x_path!=="undefined"&&at_2x_path!==null){this.at_2x_path=at_2x_path;this.perform_check=false}else{this.at_2x_path=path.replace(/\.\w+$/,function(match){return"@2x"+match});this.perform_check=true}}RetinaImagePath.confirmed_paths=[];RetinaImagePath.prototype.is_external=function(){return!!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};RetinaImagePath.prototype.check_2x_variant=function(callback){var http,that=this;if(this.is_external()){return callback(false)}else if(!this.perform_check&&typeof this.at_2x_path!=="undefined"&&this.at_2x_path!==null){return callback(true)}else if(this.at_2x_path in RetinaImagePath.confirmed_paths){return callback(true)}else{http=new XMLHttpRequest;http.open("HEAD",this.at_2x_path);http.onreadystatechange=function(){if(http.readyState!=4){return callback(false)}if(http.status>=200&&http.status<=399){if(config.check_mime_type){var type=http.getResponseHeader("Content-Type");if(type==null||!type.match(/^image/i)){return callback(false)}}RetinaImagePath.confirmed_paths.push(that.at_2x_path);return callback(true)}else{return callback(false)}};http.send()}};function RetinaImage(el){this.el=el;this.path=new RetinaImagePath(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var that=this;this.path.check_2x_variant(function(hasVariant){if(hasVariant)that.swap()})}root.RetinaImage=RetinaImage;RetinaImage.prototype.swap=function(path){if(typeof path=="undefined")path=this.path.at_2x_path;var that=this;function load(){if(!that.el.complete){setTimeout(load,5)}else{that.el.setAttribute("width",that.el.offsetWidth);that.el.setAttribute("height",that.el.offsetHeight);that.el.setAttribute("src",path)}}load()};if(Retina.isRetina()){Retina.init(root)}})();
/*! jquery.pjax*/
;(function(a){function b(b,d,e){var f=this;return this.on("click.pjax",b,function(b){var g=a.extend({},m(d,e));g.container||(g.container=a(this).attr("data-pjax")||f),c(b,g)})}function c(b,c,d){d=m(c,d);var f=b.currentTarget;if("A"!==f.tagName.toUpperCase())throw"$.fn.pjax or $.pjax.click requires an anchor element";if(!(b.which>1||b.metaKey||b.ctrlKey||b.shiftKey||b.altKey||location.protocol!==f.protocol||location.host!==f.host||f.hash&&f.href.replace(f.hash,"")===location.href.replace(location.hash,"")||f.href===location.href+"#")){var g={url:f.href,container:a(f).attr("data-pjax"),target:f,fragment:null};e(a.extend({},g,d)),b.preventDefault()}}function d(b,c,d){d=m(c,d);var f=b.currentTarget;if("FORM"!==f.tagName.toUpperCase())throw"$.pjax.submit requires a form element";var g={type:f.method,url:f.action,data:a(f).serializeArray(),container:a(f).attr("data-pjax"),target:f,fragment:null};e(a.extend({},g,d)),b.preventDefault()}function e(b){function h(b,d){var e=a.Event(b,{relatedTarget:c});return f.trigger(e,d),!e.isDefaultPrevented()}b=a.extend(!0,{},a.ajaxSettings,e.defaults,b),a.isFunction(b.url)&&(b.url=b.url());var c=b.target,d=l(b.url).hash,f=b.context=n(b.container);b.data||(b.data={}),b.data._pjax=f.selector;var i;b.beforeSend=function(a,c){return"GET"!==c.type&&(c.timeout=0),a.setRequestHeader("X-PJAX","true"),a.setRequestHeader("X-PJAX-Container",f.selector),h("pjax:beforeSend",[a,c])?(c.timeout>0&&(i=setTimeout(function(){h("pjax:timeout",[a,b])&&a.abort("timeout")},c.timeout),c.timeout=0),b.requestUrl=l(c.url).href,void 0):!1},b.complete=function(a,c){i&&clearTimeout(i),h("pjax:complete",[a,c,b]),h("pjax:end",[a,b])},b.error=function(a,c,d){var e=p("",a,b),f=h("pjax:error",[a,c,d,b]);"GET"==b.type&&"abort"!==c&&f&&g(e.url)},b.success=function(c,i,k){var m=p(c,k,b);if(!m.contents)return g(m.url),void 0;if(e.state={id:b.id||j(),url:m.url,title:m.title,container:f.selector,fragment:b.fragment,timeout:b.timeout},(b.push||b.replace)&&window.history.replaceState(e.state,m.title,m.url),m.title&&(document.title=m.title),f.html(m.contents),"number"==typeof b.scrollTo&&a(window).scrollTop(b.scrollTo),(b.replace||b.push)&&window._gaq&&_gaq.push(["_trackPageview"]),""!==d){var n=l(m.url);n.hash=d,e.state.url=n.href,window.history.replaceState(e.state,m.title,n.href);var o=a(n.hash);o.length&&a(window).scrollTop(o.offset().top)}h("pjax:success",[c,i,k,b])},e.state||(e.state={id:j(),url:window.location.href,title:document.title,container:f.selector,fragment:b.fragment,timeout:b.timeout},window.history.replaceState(e.state,document.title));var m=e.xhr;m&&4>m.readyState&&(m.onreadystatechange=a.noop,m.abort()),e.options=b;var m=e.xhr=a.ajax(b);return m.readyState>0&&(b.push&&!b.replace&&(t(e.state.id,f.clone().contents()),window.history.pushState(null,"",k(b.requestUrl))),h("pjax:start",[m,b]),h("pjax:send",[m,b])),e.xhr}function f(b,c){var d={url:window.location.href,push:!1,replace:!0,scrollTo:!1};return e(a.extend(d,m(b,c)))}function g(a){window.history.replaceState(null,"","#"),window.location.replace(a)}function h(b){var c=b.state;if(c&&c.container){var d=a(c.container);if(d.length){var f=q[c.id];if(!e.state)return e.state=c,void 0;var h=e.state.id<c.id?"forward":"back";u(h,e.state.id,d.clone().contents());var i=a.Event("pjax:popstate",{state:c,direction:h});d.trigger(i);var j={id:c.id,url:c.url,container:d,push:!1,fragment:c.fragment,timeout:c.timeout,scrollTo:!1};f?(d.trigger("pjax:start",[null,j]),c.title&&(document.title=c.title),d.html(f),e.state=c,d.trigger("pjax:end",[null,j])):e(j),d[0].offsetHeight}else g(location.href)}}function i(b){var c=a.isFunction(b.url)?b.url():b.url,d=b.type?b.type.toUpperCase():"GET",e=a("<form>",{method:"GET"===d?"GET":"POST",action:c,style:"display:none"});"GET"!==d&&"POST"!==d&&e.append(a("<input>",{type:"hidden",name:"_method",value:d.toLowerCase()}));var f=b.data;if("string"==typeof f)a.each(f.split("&"),function(b,c){var d=c.split("=");e.append(a("<input>",{type:"hidden",name:d[0],value:d[1]}))});else if("object"==typeof f)for(key in f)e.append(a("<input>",{type:"hidden",name:key,value:f[key]}));a(document.body).append(e),e.submit()}function j(){return(new Date).getTime()}function k(a){return a.replace(/\?_pjax=[^&]+&?/,"?").replace(/_pjax=[^&]+&?/,"").replace(/[\?&]$/,"")}function l(a){var b=document.createElement("a");return b.href=a,b}function m(b,c){return b&&c?c.container=b:c=a.isPlainObject(b)?b:{container:b},c.container&&(c.container=n(c.container)),c}function n(b){if(b=a(b),b.length){if(""!==b.selector&&b.context===document)return b;if(b.attr("id"))return a("#"+b.attr("id"));throw"cant get selector for pjax container!"}throw"no pjax container for "+b.selector}function o(a,b){return a.filter(b).add(a.find(b))}function p(b,c,d){var e={};if(e.url=k(c.getResponseHeader("X-PJAX-URL")||d.requestUrl),/<html/i.test(b))var f=a(b.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]),g=a(b.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]);else var f=g=a(b);if(0===g.length)return e;if(e.title=o(f,"title").last().text(),d.fragment){if("body"===d.fragment)var h=g;else var h=o(g,d.fragment).first();h.length&&(e.contents=h.contents(),e.title||(e.title=h.attr("title")||h.data("title")))}else/<html/i.test(b)||(e.contents=g);return e.contents&&(e.contents=e.contents.not("title"),e.contents.find("title").remove()),e.title&&(e.title=a.trim(e.title)),e}function t(a,b){for(q[a]=b,s.push(a);r.length;)delete q[r.shift()];for(;s.length>e.defaults.maxCacheLength;)delete q[s.shift()]}function u(a,b,c){var d,e;q[b]=c,"forward"===a?(d=s,e=r):(d=r,e=s),d.push(b),(b=e.pop())&&delete q[b]}function v(){a.fn.pjax=b,a.pjax=e,a.pjax.enable=a.noop,a.pjax.disable=w,a.pjax.click=c,a.pjax.submit=d,a.pjax.reload=f,a.pjax.defaults={timeout:650,push:!0,replace:!1,type:"GET",dataType:"html",scrollTo:0,maxCacheLength:20},a(window).bind("popstate.pjax",h)}function w(){a.fn.pjax=function(){return this},a.pjax=i,a.pjax.enable=v,a.pjax.disable=a.noop,a.pjax.click=a.noop,a.pjax.submit=a.noop,a.pjax.reload=function(){window.location.reload()},a(window).unbind("popstate.pjax",h)}var q={},r=[],s=[];0>a.inArray("state",a.event.props)&&a.event.props.push("state"),a.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/),a.support.pjax?v():w()})(jQuery);
/*! jquery.customSelect() - v0.5.1*/
;(function(a){a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup.customSelect")},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("render.customSelect",function(){f(g,h);g.css("width","");var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change.customSelect",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup.customSelect",function(j){if(!h.hasClass(b("Open"))){g.trigger("blur.customSelect");g.trigger("focus.customSelect")}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown.customSelect",function(){h.removeClass(b("Changed"))}).on("mouseup.customSelect",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.trigger("focus.customSelect")}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup.customSelect",function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.trigger("blur.customSelect")}else{f(g,h)}})}}}).on("focus.customSelect",function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).on("blur.customSelect",function(){h.removeClass(b("Focus")+" "+b("Open"))}).on("mouseenter.customSelect",function(){h.addClass(b("Hover"))}).on("mouseleave.customSelect",function(){h.removeClass(b("Hover"))}).trigger("render.customSelect")})}})})(jQuery);
/*! tinyscrollbar - v2.1.4 - 2014-03-23*/
!function(a){"function"==typeof define&&define.amd?define(jQuery||["jquery"],a):"object"==typeof exports?a(jQuery||require("jquery")):a(jQuery)}(function(a){"use strict";function b(b,e){function f(){return m.update(),h(),m}function g(){r.css(w,m.contentPosition/m.trackRatio),o.css(w,-m.contentPosition),p.css(v,m.trackSize),q.css(v,m.trackSize),r.css(v,m.thumbSize)}function h(){u?n[0].ontouchstart=function(a){1===a.touches.length&&(i(a.touches[0]),a.stopPropagation())}:(r.bind("mousedown",i),q.bind("mousedown",k)),a(window).resize(function(){m.update("relative")}),m.options.wheel&&window.addEventListener?(b[0].addEventListener("DOMMouseScroll",j,!1),b[0].addEventListener("mousewheel",j,!1)):m.options.wheel&&(b[0].onmousewheel=j)}function i(b){a("body").addClass("noSelect"),s=t?b.pageX:b.pageY,m.thumbPosition=parseInt(r.css(w),10)||0,u?(document.ontouchmove=function(a){a.preventDefault(),k(a.touches[0])},document.ontouchend=l):(a(document).bind("mousemove",k),a(document).bind("mouseup",l),r.bind("mouseup",l))}function j(c){if(m.contentRatio<1){var d=c||window.event,e=d.wheelDelta?d.wheelDelta/120:-d.detail/3;m.contentPosition-=e*m.options.wheelSpeed,m.contentPosition=Math.min(m.contentSize-m.viewportSize,Math.max(0,m.contentPosition)),b.trigger("move"),r.css(w,m.contentPosition/m.trackRatio),o.css(w,-m.contentPosition),(m.options.wheelLock||m.contentPosition!==m.contentSize-m.viewportSize&&0!==m.contentPosition)&&(d=a.event.fix(d),d.preventDefault())}}function k(a){if(m.contentRatio<1){var c=t?a.pageX:a.pageY,d=c-s;m.options.scrollInvert&&u&&(d=s-c);var e=Math.min(m.trackSize-m.thumbSize,Math.max(0,m.thumbPosition+d));m.contentPosition=e*m.trackRatio,b.trigger("move"),r.css(w,e),o.css(w,-m.contentPosition)}}function l(){a("body").removeClass("noSelect"),a(document).unbind("mousemove",k),a(document).unbind("mouseup",l),r.unbind("mouseup",l),document.ontouchmove=document.ontouchend=null}this.options=a.extend({},d,e),this._defaults=d,this._name=c;var m=this,n=b.find(".viewport"),o=b.find(".overview"),p=b.find(".scrollbar"),q=p.find(".track"),r=p.find(".thumb"),s=0,t="x"===this.options.axis,u="ontouchstart"in document.documentElement,v=t?"width":"height",w=t?"left":"top";return this.contentPosition=0,this.viewportSize=0,this.contentSize=0,this.contentRatio=0,this.trackSize=0,this.trackRatio=0,this.thumbSize=0,this.thumbPosition=0,this.update=function(a){var b=v.charAt(0).toUpperCase()+v.slice(1).toLowerCase();switch(this.viewportSize=n[0]["offset"+b],this.contentSize=o[0]["scroll"+b],this.contentRatio=this.viewportSize/this.contentSize,this.trackSize=this.options.trackSize||this.viewportSize,this.thumbSize=Math.min(this.trackSize,Math.max(0,this.options.thumbSize||this.trackSize*this.contentRatio)),this.trackRatio=this.options.thumbSize?(this.contentSize-this.viewportSize)/(this.trackSize-this.thumbSize):this.contentSize/this.trackSize,p.toggleClass("disable",this.contentRatio>=1),a){case"bottom":this.contentPosition=this.contentSize-this.viewportSize;break;case"relative":this.contentPosition=Math.min(this.contentSize-this.viewportSize,Math.max(0,this.contentPosition));break;default:this.contentPosition=parseInt(a,10)||0}return g(),m},f()}var c="tinyscrollbar",d={axis:"y",wheel:!0,wheelSpeed:40,wheelLock:!0,scrollInvert:!1,trackSize:!1,thumbSize:!1};a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(a(this),d))})}});
/*! backgroundSize */
;(function(k,m,n,d,f){var b=k("<div>")[0],h=/url\(["']?(.*?)["']?\)/,l=[],j={top:0,left:0,bottom:1,right:1,center:0.5};if("backgroundSize" in b.style&&!k.debugBGS){return}k.cssHooks.backgroundSize={set:function(q,s){var u=!k.data(q,"bgsImg"),t,r,p;k.data(q,"bgsValue",s);if(u){l.push(q);k.refreshBackgroundDimensions(q,true);r=k("<div>").css({position:"absolute",zIndex:-1,top:0,right:0,left:0,bottom:0,overflow:"hidden"});p=k("<img>").css({position:"absolute"}).appendTo(r),r.prependTo(q);k.data(q,"bgsImg",p[0]);t=(k.css(q,"backgroundPosition")||k.css(q,"backgroundPositionX")+" "+k.css(q,"backgroundPositionY")).split(" ");k.data(q,"bgsPos",[j[t[0]]||parseFloat(t[0])/100,j[t[1]]||parseFloat(t[1])/100]);k.css(q,"zIndex")=="auto"&&(q.style.zIndex=0);k.css(q,"position")=="static"&&(q.style.position="relative");k.refreshBackgroundImage(q)}else{k.refreshBackground(q)}},get:function(p){return k.data(p,"bgsValue")||""}};k.cssHooks.backgroundImage={set:function(p,q){return k.data(p,"bgsImg")?k.refreshBackgroundImage(p,q):q}};k.refreshBackgroundDimensions=function(s,q){var p=k(s),r={width:p.innerWidth(),height:p.innerHeight()},u=k.data(s,"bgsDim"),t=!u||r.width!=u.width||r.height!=u.height;k.data(s,"bgsDim",r);if(t&&!q){k.refreshBackground(s)}};k.refreshBackgroundImage=function(t,u){var r=k.data(t,"bgsImg"),s=(h.exec(u||k.css(t,"backgroundImage"))||[])[1],w=r&&r.src,v=s!=w,q,p;if(v){r.style.height=r.style.width="auto";r.onload=function(){var x={width:r.width,height:r.height};if(x.width==1&&x.height==1){return}k.data(t,"bgsImgDim",x);k.data(t,"bgsConstrain",false);k.refreshBackground(t);r.style.visibility="visible";r.onload=null};r.style.visibility="hidden";r.src=s;if(r.readyState||r.complete){r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";r.src=s}t.style.backgroundImage="none"}};k.refreshBackground=function(r){var x=k.data(r,"bgsValue"),s=k.data(r,"bgsDim"),t=k.data(r,"bgsImgDim"),p=k(k.data(r,"bgsImg")),w=k.data(r,"bgsPos"),u=k.data(r,"bgsConstrain"),v,z=s.width/s.height,q=t.width/t.height,y;if(x=="contain"){if(q>z){k.data(r,"bgsConstrain",(v="width"));y=d.floor((s.height-s.width/q)*w[1]);p.css({top:y});if(v!=u){p.css({width:"100%",height:"auto",left:0})}}else{k.data(r,"bgsConstrain",(v="height"));y=d.floor((s.width-s.height*q)*w[0]);p.css({left:y});if(v!=u){p.css({height:"100%",width:"auto",top:0})}}}else{if(x=="cover"){if(q>z){k.data(r,"bgsConstrain",(v="height"));y=d.floor((s.height*q-s.width)*w[0]);p.css({left:-y});if(v!=u){p.css({height:"100%",width:"auto",top:0})}}else{k.data(r,"bgsConstrain",(v="width"));y=d.floor((s.width/q-s.height)*w[1]);p.css({top:-y});if(v!=u){p.css({width:"100%",height:"auto",left:0})}}}}};var a=k.event,c,g={_:0},e=0,i,o;c=a.special.throttledresize={setup:function(){k(this).on("resize",c.handler)},teardown:function(){k(this).off("resize",c.handler)},handler:function(s,p){var r=this,q=arguments;i=true;if(!o){k(g).animate(g,{duration:Infinity,step:function(){e++;if(e>c.threshold&&i||p){s.type="throttledresize";a.dispatch.apply(r,q);i=false;e=0}if(e>9){k(g).stop();o=false;e=0}}});o=true}},threshold:1};k(m).on("throttledresize",function(){k(l).each(function(){k.refreshBackgroundDimensions(this)})})})(jQuery,window,document,Math);
/* BxSlider v4.1.1 - Fully loaded, responsive content slider */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&I(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",q)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},q=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},I=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&I(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),I(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);


/*---------- VAR  ----------*/
var color = ['#1abc9c','#2ecc71','#378df2','#9b59b6','#34495e','#f1c40f','#e67e22','#e74c3c','#95a5a6'];
var JSONSRC = 'http://amp-music.net/json/';
var JSONMAP = 'http://amp-music.net/json/jsonmap/';

/*---------- FUNCTION  ----------*/

function pjaxLeave(){
	$('html').removeClass('window_done');
	setTimeout(function(){
		$('html').removeClass('window_loaded');
	},300);
}

function pjaxEnter(){
	$('html').addClass('window_loaded');
	if($('.setflat').size()){
		$('html').addClass('sound_flat');
	}else{
		$('html').removeClass('sound_flat');
	}
	setTimeout(function(){
		$('html').addClass('window_done');
	},300);
}

$(window).on('load',function() {
	pjaxEnter();
});

function setsize(){
	winW = window.innerWidth ? window.innerWidth: $(window).width();
	winH = window.innerHeight ? window.innerHeight: $(window).height();
	winT = $(window).scrollTop();
	boxW = $('.box_body').innerWidth();
	$('.header,#movie,#player_mask,.fullscreen').css({'height':winH,'width':winW});
	$('.header_half').css({'height':winH/2});
	$('.single_header').css({'height':winH/2});
	$('.about_header_top,.middlescreen').css({'height':winH});
	$('.single_header_bk').css({'height':winH/2 + 100});
	var playerRate = 500;
	$('#player,#m1,#m2,#m3').css({'height':winH + playerRate, 'width':winW + playerRate, 'margin-top':-(winH + playerRate)/2, 'margin-left':-(winW + playerRate)/2 });
	var contW = $('.playerL').width();
	$('.pl_bar').css({'width':$('.wrap').width() - $('.playerL').width()});
	if($('#store').size()){
		initialize('store');
	}
}

function anc(){
	ancsize = $('.subnavigation').size();
	ancnum  = $('.subnav_block').size();
	anctgt  = $('.subnavigation_wrap');
	$('.subnav_block').css({'width':100/ancnum + '%'});
	ancH = $('.subnavigation_wrap').height();
	subnavigation();
	$('.subnavigation a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - ancH;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
}

function subnavigation(){
	if(ancsize){
		subnavT = $('.subnavigation').offset().top;
		if(subnavT < winT){
			$('html').addClass('subnavigation_ready');
		}else{
			$('html').removeClass('subnavigation_ready');
		}
		anctgt.children().each(function(index, el) {
			var $this = $(this);
			var anctgtT = $this.find('a').attr('href');
			var anctgtT_pos = $(anctgtT).offset().top - ancH;
			if(anctgtT_pos < winT){
				$this.addClass('on');
			}else{
				$this.removeClass('on');
			}
		});
	}
}

function album(){
	/* アルバム */
	$('.albumLR').each(function(index, el) {
		if(index > 2){
			$(this).addClass('less');
		}
		var allist =  $(this).find('.back li');
		$(this).css({'width':boxW/3});
		$(this).find('.back').css({'background':color[index%9]});
		$(this).find('.albumM').css({'background':color[index%9]});
		$('.albumH').css({'height':boxW/6});
		$('.albumR').css({'width':boxW/6});
		allist.find('a').css({'line-height':boxW/24+'px'});
		allist.eq(0).find('a').css({'background':'rgba(0,0,0,0)'});
		allist.eq(1).find('a').css({'background':'rgba(0,0,0,.3)'});
		allist.eq(2).find('a').css({'background':'rgba(0,0,0,.6)'});
		allist.eq(3).find('a').css({'background':'rgba(0,0,0,.9)'});
	});
}

function movie(){
	var mvH = winH - $('.box_header').height();
	$('.tube_slider_body,.tube_slider_mask,.tube_body').css({'height':mvH});
	$('.tube_slider').bxSlider({'pager':false});
	$(document).on('click', '.bx-controls-direction a', function() {
		$('.tube_slider_body').removeClass('played');
		m1.stopVideo();
		m2.stopVideo();
		m3.stopVideo();
	});

	$('.btn_tube_play').on('click',function(){
		if(!$('.lt-ie9').size()){
			if(!$('.post').size()){
				var target = $(this);
				target.parents('.tube_slider_body').toggleClass('played');
				if(target.parents('.tube_slider_body').is('.played')){
					if(target.is('#m1btn')){
						$('#m1').css({'left':'50%'});
						$('#m2').css({'left':'200%'});
						$('#m3').css({'left':'200%'});
						m1.playVideo();
					}else if(target.is('#m2btn')){
						$('#m1').css({'left':'200%'});
						$('#m2').css({'left':'50%'});
						$('#m3').css({'left':'200%'});
						m2.playVideo();
					}else if(target.is('#m3btn')){
						$('#m1').css({'left':'200%'});
						$('#m2').css({'left':'200%'});
						$('#m3').css({'left':'50%'});
						m3.playVideo();
					}
				}else{
					m1.stopVideo();
					m2.stopVideo();
					m3.stopVideo();
				}
			}
			return false;
		}else{
			var href = $(this).next('.block_wrapM').find('a').attr('href');
			window.open(href, '_blank');
			return false;
		}
	});
}

function pictures(){
	if(winW < 400){
		$('.pictures_slide').bxSlider({
			minSlides: 5,
			maxSlides: 7,
			slideWidth: 160,
			slideMargin: 1,
			ticker: true,
			tickerHover:true,
			speed: 50000
		});
		$('.artist_info').css({'width':boxW,'height':boxW/2});
	}else{
		$('.scale,.artist_info').css({'width':boxW/5,'height':boxW/5});
		$('.scale').find('canvas').attr({'width':boxW/5 + 1,'height':boxW/5 + 1});
	}

}

function scaleimage(url,padding){
	img = new Image();
	img.src = url;
	img.onload = function() {
		var scaleH = this.height;
		var scaleW = this.width;
		var scaleR = (winW - padding*2)/scaleW <= (winH - padding*2)/scaleH ? (winW - padding*2)/scaleW : (winH - padding*2)/scaleH;
		var cx = winW/2 - (sx + scaleW/2);
		var cy = winH/2 - (sy + scaleH/2) - 12;
		$scale_body.css({
			'transform':'translate('+cx+'px,'+cy+'px) scale('+scaleR+')',
			'background-image':'url('+url+')',
			'z-index':40,
			'height':scaleH,
			'width':scaleW
		});
	};
}

function cover(){
	$('.cover').each(function(index, el) {
		var src = $(this).data('src');
		$(this).css({
			backgroundSize:'cover',
			'background-image':'url('+src+')'
		});
	});
}

function mp3(){
	getsound(soundnum);
	tL  = $('.timeL');
	tS  = $('.timeS');
	bar = $('.bar');
	$('.pl_btn_play').on('click',function(){
		var $this = $(this);
		$('html').toggleClass('player_played');
		if($('html').is('.player_played')){
			$this.text('c');
			TARGET.play();
			if($('#player').size()){
				player.mute();
			}
			$('.header_nav .icon').text('l');
		}else{
			$this.text('b');
		    TARGET.pause();
		}
		if(!TARGET.paused){
		    TARGET.addEventListener("timeupdate", function() {
			    var TOTAL = Math.round(TARGET.duration);
		        var NOW   = Math.round(TARGET.currentTime);
		        var PERCE = (NOW / TOTAL * 100) + '%';
		        tL.text(NOW);
		        tS.text(TOTAL);
		        bar.css({'width':PERCE});
		    }, true);
		}
        return false;
	});
	$('.pl_btn_next').on('click',function(){
		if(soundnum < len - 1){
			soundnum++;
		}else{
			soundnum = 0;
		}
		getsound(soundnum);
		var $this = $(this);
		$('html').removeClass('player_played');
		$('.pl_btn_play').text('b');
	    TARGET.pause();
		TARGET.currentTime = 0;
        $('.bar').css({'width':0});
        return false;
	});
}

/*------------ SINGLE PAGE ------------*/

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length==11){
        return match[7];
    }
}

function post(){
	if(!$('.lt-ie9').size()){
		$('.entry').find('iframe').each(function(index, el) {
			$this = $(this);
			var ifsrc  = $this.attr('src');
			var ifflag = ifsrc.indexOf('www.youtube.com');

			if(ifflag == -1){

			}else{
				var videoID = youtube_parser(ifsrc);
				if(videoID === undefined){
				}else{
					var html ='<div class="cover postvideo_wrap" data-videoID="'+videoID+'" data-src="http://img.youtube.com/vi/'+videoID+'/0.jpg">'+
					'<a href="javascript:void(0)" class="btn_play_common" data-tubeid="'+videoID+'">b</a>'+
					'</div>';
					$this.after(html);
					$this.remove();
				}
			}

		});
		$('.postvideo_wrap').css({'width':winW,'margin-left':-winW/2});
		cover();
	}
}

$(document).on('click', '.btn_play_common', function() {
	TARGET.pause();
	postvideoID = $(this).data('tubeid');
	$('.postvideo_body').remove();
	var playerID = "player_" + postvideoID;
	if($('.cat_blog').size()){
		var type = 'blog';
	}else{
		var type = 'artist';
	}
	var html =
	'<div class="postvideo_body type_'+type+'">'+
	'	<div class-"pv_inner">'+
	'		<a href="javascript:void(0)" class="pv_close pv_close_btn"></a>'+
	'		<div class="postvideo" id="' + playerID + '"></div>'+
	'	</div>'+
	'	<div class="pv_close pv_close_mask"></div>'+
	'</div>';
	$('.single').after(html);
	playerID = new YT.Player(playerID,{
		width: '100%',
		height: '700',
		videoId: postvideoID,
		playerVars: {'showinfo': 0,'autohide': 1,'controls': 0,'rel': 0,'loop': 1,'wmode': 'transparent','playlist':postvideoID},
		events: {
			'onReady': onPlayerReady_post,
			'onStateChange': onPlayerStateChange_post
		}
	});
	function onPlayerReady_post(){
		playerID.playVideo();
		setTimeout(function(){
			$('html').addClass('postvideo_played');
		},300);
	}
	function onPlayerStateChange_post(){}
	return false;
});

$(document).on('click', '.pv_close', function(){
	$('html').removeClass('postvideo_played');
	setTimeout(function(){
		$('.postvideo_body').remove();
	},300);
});

/*------------ ABOUT PAGE ------------*/

function bkimgscroll(){
	$('.bkimgscroll').css({'background-position':'center ' + winT/3 + '%'});
}

/*---------- COMMON  ----------*/

$(function() {

	$.support.transform  = typeof $("body").css("transform") === "string";
	$.support.transition = typeof $("body").css("transitionProperty") === "string";
	$('html').addClass(getUA());
	setsize();
	anc();
	$('select').customSelect();
	album();
	movie();
	pictures();
	cover();
	post();

});

function getsound(num){
	$.ajax({
		type:'GET',
		url: JSONSRC,
		dataType: 'json',
		jsonpCallback: 'file',
		success: function(json){
			len = json.length;
			sound_title  = json[num].title;
			sound_mp3    = json[num].mp3;
			sound_ogg    = json[num].ogg;
			sound_img    = json[num].img;
			sound_band   = json[num].link_band;
			sound_amazon = json[num].link_amazon;
			sound_itunes = json[num].link_itunes;
			TARGET = document.getElementById('sound');
			$("#sound source").remove();
			$('.pl_thumb_wrap').append('<div><img class="sound_img" src="'+sound_img+'" width="50px" heigth="50px"></div>');
			$('html').addClass('sound_thumb');
			$('.sound_title_txt').text(sound_title);
			$('.sound_band').attr({'href':sound_band});
			$('.sound_amazon').attr({'href':sound_amazon});
			$('.sound_itunes').attr({'href':sound_itunes});
			$("#sound").prepend('<source src="'+ sound_mp3 +'">');
			$("#sound").prepend('<source src="'+ sound_ogg +'">');
			TARGET.load();
			if($('.setflat').size()){
				$('html').addClass('sound_flat');
			}
			$('html').addClass('sound_ready');
			setTimeout(function(){
			$('.pl_thumb_wrap').find('div').first().remove();
			$('html').removeClass('sound_thumb');
			},500);
		}
	});
}

var soundnum = 0;

$(window).on('load',function() {
	mp3();
	/* SCROLL */
	$('#sc').tinyscrollbar();
});

$(window).on('resize',function() {
	setsize();
	album();
	pictures();
});

$(window).on('scroll',function(){
	winT = $(window).scrollTop();
	bkimgscroll();
	subnavigation();
});

/*---------- PICTURE POPUP ----------*/

$(document).on('click', '.scale_body', function() {
	if(winW > 400){
		$scale_body = $(this);
		parent = $scale_body.parents('.scale');
		pH  = parent.height();
		pW  = parent.width();
		sx  = $scale_body.offset().left;
		sy  = $scale_body.offset().top - winT;
		txt = parent.find('.caption').html();
		$('.scale_caption_inner').html(txt);
		$('html').toggleClass('scale_html_opend');
		parent.toggleClass('scale_body_opend');
		if(parent.is('.scale_body_opend')){
			var captionH = $('.scale_caption_inner').innerHeight() + 40;
			scaleimage(parent.data('srcscaled'),captionH);
		}else{
			$scale_body.css({
				'transform':'translate(0) scale(1)',
				'z-index':20,
				'height':pH,
				'width':pW
			});
		}
	}
});

$(document).on('click', '.scale_mask', function() {
	$('html').removeClass('scale_html_opend');
	$('.scale_body_opend').find('.scale_body').css({
		'transform':'translate(0) scale(1)',
		'z-index':20,
		'height':pH,
		'width':pW
	});
	$('.scale').removeClass('scale_body_opend');
});

/*---------- CONTACT ----------*/

$(document).on('click', '.contact_open', function() {
	$('html').toggleClass('contact_opened');
	$('html').removeClass('tabmenu_opened');
	$("html, body").animate({scrollTop:0},300);
	return false;
});
$(document).on('click', '.form_close a', function() {
	$('html').removeClass('contact_opened');
	return false;
});


/*---------- MOVIE ----------*/

var script = document.createElement( 'script' );
script.src = "https://www.youtube.com/iframe_api";
var firstScript = document.getElementsByTagName( 'script' )[ 0 ];
firstScript.parentNode.insertBefore( script , firstScript );
var player;
var vid;

function onYouTubeIframeAPIReady(){
	var p1ID = $('#player').data('tubeid');
	var p2ID = $('#m1btn').data('tubeid');
	var p3ID = $('#m2btn').data('tubeid');
	var p4ID = $('#m3btn').data('tubeid');
	vid = 'gLSz5QBW25w';
	function getID(){
		var vids = ['6okxuiiHx2w', 'MWXvwr9YulE', 'gpO64uQ9_1U', '5J8cglu_BT8', 'FFWgWXj2Hfk'];
		vid = vids[Math.floor(Math.random() * vids.length)];
	}
	player = new YT.Player( 'player',{
		width: '100%',
		height: '700',
		playerVars: {'showinfo': 0,'autohide': 1,'controls': 0,'rel': 0,'loop': 1,'wmode': 'transparent','playlist': '6okxuiiHx2w, MWXvwr9YulE, gpO64uQ9_1U, 5J8cglu_BT8, FFWgWXj2Hfk'},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
	m1 = new YT.Player( 'm1',{
		width: '100%',
		height: '700',
		videoId: p2ID,
		playerVars: {'showinfo': 0,'autohide': 1,'controls': 0,'rel': 0,'loop': 1,'wmode': 'transparent','playlist':p2ID}
	});
	m2 = new YT.Player( 'm2',{
		width: '100%',
		height: '700',
		videoId: p3ID,
		playerVars: {'showinfo': 0,'autohide': 1,'controls': 0,'rel': 0,'loop': 1,'wmode': 'transparent','playlist':p3ID}
	});
	m3 = new YT.Player( 'm3',{
		width: '100%',
		height: '700',
		videoId: p4ID,
		playerVars: {'showinfo': 0,'autohide': 1,'controls': 0,'rel': 0,'loop': 1,'wmode': 'transparent','playlist':p4ID}
	});
}

function onPlayerStateChange(){
	$('#player').animate({'opacity':1},1000);
}

function onPlayerReady(){
	player.setPlaybackQuality('hd720');
	player.playVideo();
	setInterval('player.nextVideo()', 10000)
//	player.mute();
	$(document).on('click', '.play_mainvideo', function(event) {
		event.preventDefault();
		TARGET.pause();
		if(player.isMuted()){
			player.unMute();
			$(this).text('l');
		}else{
			player.mute();
			$(this).text('m');
		}
	});
}

/*---------- PLAX ----------*/

$(document).on('pjax:success', function() {
	_gaq.push(['_trackPageview']);
});

$(document).on('pjax:end', function() {
	$.support.transform  = typeof $("body").css("transform") === "string";
	$.support.transition = typeof $("body").css("transitionProperty") === "string";
	onYouTubeIframeAPIReady();
	setsize();
	anc();
	album();
	movie();
	pictures();
	cover();
	pjaxEnter();
	post();
	if($.support.transition && $.support.transform){
		setTimeout(function(){
			$('html').removeClass('turn');
		},150);
	}else{
		$('.loadBody').delay(300).animate({'opacity':1},300);
	}
	if($('.iindex').size()){
		makethumb();
	}
});

$(document).on('click', '.pjx,.pjax a,.post-categories li a', function(event) {
	event.preventDefault();
	if (event.metaKey || event.ctrlKey) {
		window.open(this.href);
		return false;
    };
	var href = $(this).attr('href');
	$("html, body").animate({scrollTop:0},300);
	$('html').removeClass('contact_opened tabmenu_opened');

	pjaxLeave();

	if($.support.transition && $.support.transform){
		$('html').addClass('turn');
		setTimeout(function(){
			$.pjax({
				url: href,
				container :'.loadBody',
				fragment  :'.loadBody',
				timeout : 5000
			});
		},300);
	}else{
		$('.loadBody').delay(300).animate({
			opacity : 0
		}, 300, function() {
			$.pjax({
				url: href,
				container :'.loadBody',
				fragment  :'.loadBody',
				timeout : 5000
			});
		});
	}
});

/*---------- HOWTOBUY ----------*/

function comma(num) {
    return num.toString().replace( /([0-9]+?)(?=(?:[0-9]{3})+$)/g , '$1,' );
}

$(function(){
	var totalcdNum = $('.cdselect').data('totalnum');
	var cdHTML     = $('.cdgraph').html();
	for (var i = 1; i < totalcdNum; i++) {
		$('.cdgraph').append(cdHTML);
	};
});

$(document).on('change', '.cdselect', function(event) {
	event.preventDefault();

	$('.cdgraph').children().removeClass('on');

	$this = $(this).children('option:selected');

	var num   = $this.data('num');
	var price = $this.data('price');
	var cost  = $this.data('trans');
	var total = $this.data('total');

	$('.price_h_l').animate({width:price + 'px'},{duration:500,
		step: function(s){
			$('.price_h').text(comma(parseInt(s,10)))
		}
	});
	$('.price_s_l').animate({width:cost + 'px'},{duration:500,
		step: function(s){
			$('.price_s').text(comma(parseInt(s,10)))
		}
	});
	$('.price_t_l').animate({width:total + 'px'},{duration:500,
		step: function(s){
			$('.price_t').text(comma(parseInt(s,10)))
		}
	});

	for (var i = 1; i < num; i++) {
		$('.cdgraph').children().eq(i).addClass('on');
	};

});

/*---------- SNS ----------*/

$(document).on('click', '.sns_fb', function(event) {
	event.preventDefault();
	var url = encodeURI($(location).attr('href'));
	var surl = 'http://www.facebook.com/share.php?u=' + url;
	window.open(surl, 'facebook', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
	return false;
});

$(document).on('click', '.sns_tw', function(event) {
	event.preventDefault();
	var url = encodeURI($(location).attr('href'));
	var surl = 'http://twitter.com/share?count=horizontal&amp;original_referer='+url+'&amp;';
	window.open(surl, 'twitter', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
	return false;
});

$(document).on('click', '.sns_gg', function(event) {
	event.preventDefault();
	var url = encodeURI($(location).attr('href'));
	var surl = 'https://plus.google.com/share?url=' + url;;
	window.open(surl, 'googleplus', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
	return false;
});

/*---------- MAP ----------*/

var viewGoogleMap = function(id, option, isNumberPin){
	var setMarkerClickListener = function(marker, markerData) {
	google.maps.event.addListener(marker, 'click', function(event) {

	//map.setZoom(8);
	//gmap.setCenter(marker.getPosition());
	gmap.panTo(marker.getPosition());

	if (openInfoWindow) {
	openInfoWindow.close();
	}
	openInfoWindow = new google.maps.InfoWindow({
	content:markerData.content
	});
	google.maps.event.addListener(openInfoWindow,'closeclick',function(){
	openInfoWindow = null;
	})
	openInfoWindow.open(marker.getMap(), marker);
	});
	};

	var setLinkClickEvent = function(lnk, marker){
	lnk.bind('click', function(){
	google.maps.event.trigger(marker, 'click');
	});
	}

	var setMarkerData = function(makerArray) {
		pointer_url = $('#store').data('pointer');
		for (var i = 0; i < makerArray.length; i++) {
			var marker = new google.maps.Marker({
				position: makerArray[i].position,
				title: makerArray[i].title,
				map: gmap,
				icon: pointer_url + (Math.floor(Math.random()*9) + 1) + '.png'
			});
			setMarkerClickListener(marker, makerArray[i], true);
		}
	};

	option = option ? option : {};
	if(id == null){
	return;
	}

	var MY_MAPTYPE_ID = 'cool';
	var stylez = [
	{
	"stylers": [
	{ "saturation": -100 },
	{ "gamma": 1.11 },
	{ "visibility": "simplified" },
	{ "invert_lightness": true }
	]
	},{
	"featureType": "water",
	"stylers": [
	{ "color": "#ffffff" }
	]
	},{
	"featureType": "road",
	"stylers": [
	{ "visibility": "on" },
	{ "color": "#000000" }
	]
	}
	];

	if($('#map_about').size()){
		var zoom = 3
		var mapcent = new google.maps.LatLng(0.1768696,37.9083264);
	}else{
		var zoom = 10
		var mapcent = new google.maps.LatLng(35.65423203205303, 139.73722100257874);
	}

	var mapOption = {
		zoom: zoom,
		center: mapcent,
		scrollwheel: false,
		mapTypeControl: false,
		mapTypeControlOptions: {
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		panControl: false,
		panControlOptions: {
		position: google.maps.ControlPosition.RIGHT_TOP
		},
		zoomControl: false,
		zoomControlOptions: {
		style: google.maps.ZoomControlStyle.LARGE,
		position: google.maps.ControlPosition.RIGHT_TOP
		},
		scaleControl: false,
		scaleControlOptions: {
		position: google.maps.ControlPosition.TOP_LEFT
		},
		streetViewControl: false,
		streetViewControlOptions: {
		position: google.maps.ControlPosition.RIGHT_TOP
		},
		mapTypeId: MY_MAPTYPE_ID
	};

	var gmap = new google.maps.Map(document.getElementById(id), mapOption);
	var styledMapOptions = {name: "FIAT Dealer"};
	var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
	gmap.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);

	var openInfoWindow;
	var markerArray = new Array();

	$.ajax({
		url: JSONMAP,
		type: 'GET',
		dataType: 'json',
		timeout: 10000,
		error: function(){
			alert("地図データの読み込みに失敗しました");
		},
		success: function(json){
			$.each(json,function(){
				if($('#map_about').size()){
					 if(this.cat == 'projectページ'){
						markerArray.push({
							position: new google.maps.LatLng(this.lat,this.lng),
							title: this.title,
							content:'<div class="infobb"><h3>'+this.title+'</h3><p class="add">'+this.txt+'</p></div>'
						});
					 }
				}else{
					 if(this.cat == 'aboutページ'){
						markerArray.push({
							position: new google.maps.LatLng(this.lat,this.lng),
							title: this.title,
							content:'<div class="infobb"><h3>'+this.title+'</h3><p class="add">'+this.txt+'</p></div>'
						});
					 }
				}
			});
			if(markerArray){
				setMarkerData(markerArray);
			}
		}
	});
}

function initialize(id){var map = viewGoogleMap(id,null,true);}

/*---------- BROWS ----------*/

var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

function getUA(){
	if (userAgent.indexOf('opera') != -1) {
		return 'opera';
	} else if (userAgent.indexOf("msie") != -1) {
		if (appVersion.indexOf("msie 6.") != -1) {
			return 'ie e6';
		} else if (appVersion.indexOf("msie 9.") != -1) {
			return 'ie ie9';
		} else {
			return 'ie';
		}
	} else if (userAgent.indexOf('chrome') != -1) {
		return 'other chrome';
	} else if (userAgent.indexOf('safari') != -1) {
		return 'other safari';
	} else if (userAgent.indexOf('gecko') != -1) {
		return 'other gecko';
	} else {
		return false;
	}
}

/*---------- IPHONE ----------*/

$(document).on('click', '.tabmenu_open', function(){
	$('html').toggleClass('tabmenu_opened');
});

$(window).on('load',function() {
	if($('.iindex').size()){
		makethumb();
	}
});

$(window).on('resize',function() {
	if($('.iindex').size()){
		makethumb();
	}
});

function makethumb(){
	var ti = 0,
	ch = $('.scale_target').find('canvas').size();
	if(ch > 0){
		$('.scale_target').each(function(){
			var tgtW = $(this).parent('.scale').width() + 1;
			var tgtid  = 'c' + ti,tgtsrc = $(this).attr('data-src');
			$(this).find('canvas').attr({'id':tgtid});
			ctximg(tgtid,tgtsrc,tgtW); ti++; });
	}
}

function ctximg(id,src,wd) {
	var picWidth = wd, picHeight = wd, picLength = picWidth * picHeight, mg = new Image(), canvas = document.getElementById(id);
	if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        mg.onload = function() {
            var imgH = mg.height, imgW = mg.width, imgHhalf = mg.height/2, imgWhalf = mg.width/2, imgx = parseInt(imgWhalf - picWidth/2,10), imgy = parseInt(imgHhalf - picHeight/2,10);
			if(imgW < imgH){
				ctx.drawImage(mg,0,imgH/2 - imgW/2,imgW,imgW,0,0,picWidth,picHeight);
			}else if(imgH < imgW){
				ctx.drawImage(mg,imgW/2 - imgH/2,0,imgH,imgH,0,0,picWidth,picHeight);
			}else{
				ctx.drawImage(mg,0,0,imgW,imgH,0,0,picWidth,picHeight);
			}
            mg = ctx.getImageData(0, 0, picWidth, picHeight);
            for (var i = 0,pL = picLength * 4; i < pL; i += 4) {
                var myRed = mg.data[i],myGreen = mg.data[i + 1],myBlue = mg.data[i + 2];
                myGray = parseInt((myRed + myGreen + myBlue) / 3);
                mg.data[i] = myGray - 30;
                mg.data[i + 1] = myGray + 40;
                mg.data[i + 2] = myGray + 20;
            }
            ctx.putImageData(mg, 0, 0);
        }
        mg.src = src;
    }
}
