/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
/*! jQuery UI - v1.10.3 - 2013-05-19
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);
(function(e){"use strict";var t=function(e,a,n){var r,i,c=document.createElement("img");if(c.onerror=a,c.onload=function(){!i||n&&n.noRevoke||t.revokeObjectURL(i),a&&a(t.scale(c,n))},t.isInstanceOf("Blob",e)||t.isInstanceOf("File",e))r=i=t.createObjectURL(e),c._type=e.type;else{if("string"!=typeof e)return!1;r=e,n&&n.crossOrigin&&(c.crossOrigin=n.crossOrigin)}return r?(c.src=r,c):t.readFile(e,function(e){var t=e.target;t&&t.result?c.src=t.result:a&&a(e)})},a=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;t.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},t.detectSubsampling=function(e){var t,a;return e.width*e.height>1048576?(t=document.createElement("canvas"),t.width=t.height=1,a=t.getContext("2d"),a.drawImage(e,-e.width+1,0),0===a.getImageData(0,0,1,1).data[3]):!1},t.detectVerticalSquash=function(e,t){var a,n,r,i,c,o=document.createElement("canvas"),d=o.getContext("2d");for(o.width=1,o.height=t,d.drawImage(e,0,0),a=d.getImageData(0,0,1,t).data,n=0,r=t,i=t;i>n;)c=a[4*(i-1)+3],0===c?r=i:n=i,i=r+n>>1;return i/t||1},t.renderImageToCanvas=function(e,a,n,r,i,c,o,d,g,s){var h,u,l,m=e.getContext("2d"),f=document.createElement("canvas"),w=f.width=f.height=1024,v=f.getContext("2d");for(m.save(),t.detectSubsampling(a)&&(i/=2,c/=2),h=t.detectVerticalSquash(a,c),g=Math.ceil(w*g/i),s=Math.ceil(w*s/c/h),d=0,l=0;c>l;){for(o=0,u=0;i>u;)v.clearRect(0,0,w,w),v.drawImage(a,n,r,i,c,-u,-l,i,c),m.drawImage(f,0,0,w,w,o,d,g,s),u+=w,o+=g;l+=w,d+=s}m.restore()},t.scale=function(e,a){a=a||{};var n,r,i,c=document.createElement("canvas"),o=e.getContext||(a.canvas||a.crop)&&c.getContext,d=e.width,g=e.height,s=a.maxWidth,h=a.maxHeight,u=d,l=g,m=0,f=0,w=0,v=0;return o&&s&&h&&a.crop?(n=s,r=h,s/h>d/g?(l=h*d/s,f=(g-l)/2):(u=s*g/h,m=(d-u)/2)):(n=d,r=g,i=Math.max((a.minWidth||n)/n,(a.minHeight||r)/r),i>1&&(n=Math.ceil(n*i),r=Math.ceil(r*i)),i=Math.min((s||n)/n,(h||r)/r),1>i&&(n=Math.ceil(n*i),r=Math.ceil(r*i))),o?(c.width=n,c.height=r,"image/jpeg"===e._type?t.renderImageToCanvas(c,e,m,f,u,l,w,v,n,r):c.getContext("2d").drawImage(e,m,f,u,l,w,v,n,r),c):(e.width=n,e.height=r,e)},t.createObjectURL=function(e){return a?a.createObjectURL(e):!1},t.revokeObjectURL=function(e){return a?a.revokeObjectURL(e):!1},t.readFile=function(e,t){if(window.FileReader&&FileReader.prototype.readAsDataURL){var a=new FileReader;return a.onload=a.onerror=t,a.readAsDataURL(e),a}return!1},"function"==typeof define&&define.amd?define(function(){return t}):e.loadImage=t})(this);
(function(a){"use strict";var b=a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype,c=a.Blob&&function(){try{return Boolean(new Blob)}catch(a){return!1}}(),d=c&&a.Uint8Array&&function(){try{return(new Blob([new Uint8Array(100)])).size===100}catch(a){return!1}}(),e=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder,f=(c||e)&&a.atob&&a.ArrayBuffer&&a.Uint8Array&&function(a){var b,f,g,h,i,j;a.split(",")[0].indexOf("base64")>=0?b=atob(a.split(",")[1]):b=decodeURIComponent(a.split(",")[1]),f=new ArrayBuffer(b.length),g=new Uint8Array(f);for(h=0;h<b.length;h+=1)g[h]=b.charCodeAt(h);return i=a.split(",")[0].split(":")[1].split(";")[0],c?new Blob([d?g:f],{type:i}):(j=new e,j.append(f),j.getBlob(i))};a.HTMLCanvasElement&&!b.toBlob&&(b.mozGetAsFile?b.toBlob=function(a,c,d){d&&b.toDataURL&&f?a(f(this.toDataURL(c,d))):a(this.mozGetAsFile("blob",c))}:b.toDataURL&&f&&(b.toBlob=function(a,b,c){a(f(this.toDataURL(b,c)))})),typeof define=="function"&&define.amd?define(function(){return f}):a.dataURLtoBlob=f})(this);
/*
 * jQuery Iframe Transport Plugin 1.6.2
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true, nomen: true */
/*global define, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts three additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            var form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // javascript:false as initial iframe src
                    // prevents warning popups on HTTPS in IE6.
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="javascript:false;" name="iframe-transport-' +
                            counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="javascript:false;"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                $(input).prop('name', clone.prop('name'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', 'javascript'.concat(':false;'));
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, and script:
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));

/*
 * jQuery File Upload Plugin 5.31.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global define, window, document, File, Blob, FormData, location */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // The FileReader API is not actually used, but works as feature detection,
    // as e.g. Safari supports XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads:
    $.support.xhrFileUpload = !!(window.XMLHttpRequestUpload && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default the complete document.
            // Set to null to disable paste support:
            pasteZone: $(document),
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uplaods, else
            // once for each file selection.
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows to override plugin options as well as define ajax settings.
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if (typeof options.formData === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger('progress', e, data);
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger('progressall', e, this._progress);
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = options.paramName[0];
            options.headers = options.headers || {};
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
                options.contentType = file.type;
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: options.paramName[index] || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        options.headers['Content-Disposition'] = 'attachment; filename="' +
                            encodeURI(file.name) + '"';
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    options.paramName[index] || paramName,
                                    file,
                                    file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && $('<a></a>').prop('href', options.url)
                    .prop('host') !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type || options.form.prop('method') || '')
                .toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (data) {
                    return $.Deferred().resolveWith(that, [data]).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise(this))
                            .pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise(this);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger('submit', e, this) !== false) &&
                        that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                return that._getXHRPromise();
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes = options.uploadedBytes || 0,
                mcs = options.maxChunkSize || fs,
                slice = file.slice || file.webkitSlice || file.mozSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger('send', e, options) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    pipe = (this._sequence = this._sequence.pipe(send, send));
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                limit = options.limitMultiFileUploads,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i;
            if (!(options.singleFileUploads || limit) ||
                    !this._isXHRUpload(options)) {
                fileSet = [data.files];
                paramNameSet = [paramName];
            } else if (!options.singleFileUploads && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < data.files.length; i += limit) {
                    fileSet.push(data.files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = data.files;
            $.each(fileSet || data.files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger('add', e, newData);
                return result;
            });
            return result;
        },

        _replaceFileInput: function (input) {
            var inputClone = input.clone(true);
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                dirReader;
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                dirReader.readEntries(function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                }, errorHandler);
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data.fileInput);
                }
                if (that._trigger('change', e, data) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger('paste', e, data) === false ||
                        this._onAdd(e, data) === false) {
                    return false;
                }
            }
        },

        _onDrop: function (e) {
            var that = this,
                dataTransfer = e.dataTransfer = e.originalEvent &&
                    e.originalEvent.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger('drop', e, data) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: function (e) {
            var dataTransfer = e.dataTransfer = e.originalEvent &&
                e.originalEvent.dataTransfer;
            if (dataTransfer) {
                if (this._trigger('dragover', e) === false) {
                    return false;
                }
                if ($.inArray('Files', dataTransfer.types) !== -1) {
                    dataTransfer.dropEffect = 'copy';
                    e.preventDefault();
                }
            }
        },

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            this._on(this.options.fileInput, {
                change: this._onChange
            });
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options;
            // Initialize options set via HTML5 data-attributes:
            $.each(
                $(this.element[0].cloneNode(false)).data(),
                function (key, value) {
                    if (that._isRegExpOption(key, value)) {
                        value = that._getRegExp(value);
                    }
                    options[key] = value;
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data).then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));

/*
 * jQuery File Upload Processing Plugin 1.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true */
/*global define, window */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            './jquery.fileupload'
        ], factory);
    } else {
        // Browser globals:
        factory(
            window.jQuery
        );
    }
}(function ($) {
    'use strict';

    var originalAdd = $.blueimp.fileupload.prototype.options.add;

    // The File Upload Processing plugin extends the fileupload widget
    // with file processing functionality:
    $.widget('blueimp.fileupload', $.blueimp.fileupload, {

        options: {
            // The list of processing actions:
            processQueue: [
                /*
                {
                    action: 'log',
                    type: 'debug'
                }
                */
            ],
            add: function (e, data) {
                var $this = $(this);
                data.process(function () {
                    return $this.fileupload('process', data);
                });
                originalAdd.call(this, e, data);
            }
        },

        processActions: {
            /*
            log: function (data, options) {
                console[options.type](
                    'Processing "' + data.files[data.index].name + '"'
                );
            }
            */
        },

        _processFile: function (data) {
            var that = this,
                dfd = $.Deferred().resolveWith(that, [data]),
                chain = dfd.promise();
            this._trigger('process', null, data);
            $.each(data.processQueue, function (i, settings) {
                var func = function (data) {
                    return that.processActions[settings.action].call(
                        that,
                        data,
                        settings
                    );
                };
                chain = chain.pipe(func, settings.always && func);
            });
            chain
                .done(function () {
                    that._trigger('processdone', null, data);
                    that._trigger('processalways', null, data);
                })
                .fail(function () {
                    that._trigger('processfail', null, data);
                    that._trigger('processalways', null, data);
                });
            return chain;
        },

        // Replaces the settings of each processQueue item that
        // are strings starting with an "@", using the remaining
        // substring as key for the option map,
        // e.g. "@autoUpload" is replaced with options.autoUpload:
        _transformProcessQueue: function (options) {
            var processQueue = [];
            $.each(options.processQueue, function () {
                var settings = {};
                $.each(this, function (key, value) {
                    if ($.type(value) === 'string' &&
                            value.charAt(0) === '@') {
                        settings[key] = options[value.slice(1)];
                    } else {
                        settings[key] = value;
                    }
                });
                processQueue.push(settings);
            });
            options.processQueue = processQueue;
        },

        // Returns the number of files currently in the processsing queue:
        processing: function () {
            return this._processing;
        },

        // Processes the files given as files property of the data parameter,
        // returns a Promise object that allows to bind callbacks:
        process: function (data) {
            var that = this,
                options = $.extend({}, this.options, data);
            if (options.processQueue && options.processQueue.length) {
                this._transformProcessQueue(options);
                if (this._processing === 0) {
                    this._trigger('processstart');
                }
                $.each(data.files, function (index, file) {
                    var opts = index ? $.extend({}, options) : options,
                        func = function () {
                            return that._processFile(opts);
                        };
                    opts.index = index;
                    that._processing += 1;
                    that._processingQueue = that._processingQueue.pipe(func, func)
                        .always(function () {
                            that._processing -= 1;
                            if (that._processing === 0) {
                                that._trigger('processstop');
                            }
                        });
                });
            }
            return this._processingQueue;
        },

        _create: function () {
            this._super();
            this._processing = 0;
            this._processingQueue = $.Deferred().resolveWith(this)
                .promise();
        }

    });

}));

/*
 * jQuery File Upload Image Resize Plugin 1.1.2
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global define, window */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'load-image',
            'canvas-to-blob',
            './jquery.fileupload-process'
        ], factory);
    } else {
        // Browser globals:
        factory(
            window.jQuery,
            window.loadImage
        );
    }
}(function ($, loadImage) {
    'use strict';

    // Prepend to the default processQueue:
    $.blueimp.fileupload.prototype.options.processQueue.unshift(
        {
            action: 'loadImage',
            fileTypes: '@loadImageFileTypes',
            maxFileSize: '@loadImageMaxFileSize',
            noRevoke: '@loadImageNoRevoke',
            disabled: '@disableImageLoad'
        },
        {
            action: 'resizeImage',
            maxWidth: '@imageMaxWidth',
            maxHeight: '@imageMaxHeight',
            minWidth: '@imageMinWidth',
            minHeight: '@imageMinHeight',
            crop: '@imageCrop',
            disabled: '@disableImageResize'
        },
        {
            action: 'saveImage',
            disabled: '@disableImageResize'
        },
        {
            action: 'resizeImage',
            maxWidth: '@previewMaxWidth',
            maxHeight: '@previewMaxHeight',
            minWidth: '@previewMinWidth',
            minHeight: '@previewMinHeight',
            crop: '@previewCrop',
            canvas: '@previewAsCanvas',
            disabled: '@disableImagePreview'
        },
        {
            action: 'setImage',
            // The name of the property the resized image
            // is saved as on the associated file object:
            name: 'preview',
            disabled: '@disableImagePreview'
        }
    );

    // The File Upload Resize plugin extends the fileupload widget
    // with image resize functionality:
    $.widget('blueimp.fileupload', $.blueimp.fileupload, {

        options: {
            // The regular expression for the types of images to load:
            // matched against the file type:
            loadImageFileTypes: /^image\/(gif|jpeg|png)$/,
            // The maximum file size of images to load:
            loadImageMaxFileSize: 5000000, // 5MB
            // The maximum width of resized images:
            imageMaxWidth: 1920,
            // The maximum height of resized images:
            imageMaxHeight: 1080,
            // Define if resized images should be cropped or only scaled:
            imageCrop: false,
            // Disable the resize image functionality by default:
            disableImageResize: true,
            // The maximum width of the preview images:
            previewMaxWidth: 80,
            // The maximum height of the preview images:
            previewMaxHeight: 80,
            // Define if preview images should be cropped or only scaled:
            previewCrop: false,
            // Define if preview images should be resized as canvas elements:
            previewAsCanvas: true
        },

        processActions: {

            // Loads the image given via data.files and data.index
            // as img element if the browser supports canvas.
            // Accepts the options fileTypes (regular expression)
            // and maxFileSize (integer) to limit the files to load:
            loadImage: function (data, options) {
                if (options.disabled) {
                    return data;
                }
                var that = this,
                    file = data.files[data.index],
                    dfd = $.Deferred();
                if (($.type(options.maxFileSize) === 'number' &&
                            file.size > options.maxFileSize) ||
                        (options.fileTypes &&
                            !options.fileTypes.test(file.type)) ||
                        !loadImage(
                            file,
                            function (img) {
                                if (!img.src) {
                                    return dfd.rejectWith(that, [data]);
                                }
                                data.img = img;
                                dfd.resolveWith(that, [data]);
                            },
                            options
                        )) {
                    dfd.rejectWith(that, [data]);
                }
                return dfd.promise();
            },

            // Resizes the image given as data.canvas or data.img
            // and updates data.canvas or data.img with the resized image.
            // Accepts the options maxWidth, maxHeight, minWidth,
            // minHeight, canvas and crop:
            resizeImage: function (data, options) {
                options = $.extend({canvas: true}, options);
                var img = (options.canvas && data.canvas) || data.img,
                    canvas;
                if (img && !options.disabled) {
                    canvas = loadImage.scale(img, options);
                    if (canvas && (canvas.width !== img.width ||
                            canvas.height !== img.height)) {
                        data[canvas.getContext ? 'canvas' : 'img'] = canvas;
                    }
                }
                return data;
            },

            // Saves the processed image given as data.canvas
            // inplace at data.index of data.files:
            saveImage: function (data, options) {
                if (!data.canvas || options.disabled) {
                    return data;
                }
                var that = this,
                    file = data.files[data.index],
                    name = file.name,
                    dfd = $.Deferred(),
                    callback = function (blob) {
                        if (!blob.name) {
                            if (file.type === blob.type) {
                                blob.name = file.name;
                            } else if (file.name) {
                                blob.name = file.name.replace(
                                    /\..+$/,
                                    '.' + blob.type.substr(6)
                                );
                            }
                        }
                        // Store the created blob at the position
                        // of the original file in the files list:
                        data.files[data.index] = blob;
                        dfd.resolveWith(that, [data]);
                    };
                // Use canvas.mozGetAsFile directly, to retain the filename, as
                // Gecko doesn't support the filename option for FormData.append:
                if (data.canvas.mozGetAsFile) {
                    callback(data.canvas.mozGetAsFile(
                        (/^image\/(jpeg|png)$/.test(file.type) && name) ||
                            ((name && name.replace(/\..+$/, '')) ||
                                'blob') + '.png',
                        file.type
                    ));
                } else if (data.canvas.toBlob) {
                    data.canvas.toBlob(callback, file.type);
                } else {
                    return data;
                }
                return dfd.promise();
            },

            // Sets the resized version of the image as a property of the
            // file object, must be called after "saveImage":
            setImage: function (data, options) {
                var img = data.canvas || data.img;
                if (img && !options.disabled) {
                    data.files[data.index][options.name] = img;
                }
                return data;
            }

        }

    });

}));

/*
 * jQuery File Upload Validation Plugin 1.0.2
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global define, window */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            './jquery.fileupload-process'
        ], factory);
    } else {
        // Browser globals:
        factory(
            window.jQuery
        );
    }
}(function ($) {
    'use strict';

    // Append to the default processQueue:
    $.blueimp.fileupload.prototype.options.processQueue.push(
        {
            action: 'validate',
            // Always trigger this action,
            // even if the previous action was rejected: 
            always: true,
            // Options taken from the global options map:
            acceptFileTypes: '@acceptFileTypes',
            maxFileSize: '@maxFileSize',
            minFileSize: '@minFileSize',
            maxNumberOfFiles: '@maxNumberOfFiles',
            disabled: '@disableValidation'
        }
    );

    // The File Upload Validation plugin extends the fileupload widget
    // with file validation functionality:
    $.widget('blueimp.fileupload', $.blueimp.fileupload, {

        options: {
            /*
            // The regular expression for allowed file types, matches
            // against either file type or file name:
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            // The maximum allowed file size in bytes:
            maxFileSize: 10000000, // 10 MB
            // The minimum allowed file size in bytes:
            minFileSize: undefined, // No minimal file size
            // The limit of files to be uploaded:
            maxNumberOfFiles: 10,
            */

            // Function returning the current number of files,
            // has to be overriden for maxNumberOfFiles validation:
            getNumberOfFiles: $.noop,

            // Error and info messages:
            messages: {
                maxNumberOfFiles: 'Maximum number of files exceeded',
                acceptFileTypes: 'File type not allowed',
                maxFileSize: 'File is too large',
                minFileSize: 'File is too small'
            }
        },

        processActions: {

            validate: function (data, options) {
                if (options.disabled) {
                    return data;
                }
                var dfd = $.Deferred(),
                    settings = this.options,
                    file = data.files[data.index],
                    numberOfFiles = settings.getNumberOfFiles();
                if (numberOfFiles && $.type(options.maxNumberOfFiles) === 'number' &&
                        numberOfFiles + data.files.length > options.maxNumberOfFiles) {
                    file.error = settings.i18n('maxNumberOfFiles');
                } else if (options.acceptFileTypes &&
                        !(options.acceptFileTypes.test(file.type) ||
                        options.acceptFileTypes.test(file.name))) {
                    file.error = settings.i18n('acceptFileTypes');
                } else if (options.maxFileSize && file.size > options.maxFileSize) {
                    file.error = settings.i18n('maxFileSize');
                } else if ($.type(file.size) === 'number' &&
                        file.size < options.minFileSize) {
                    file.error = settings.i18n('minFileSize');
                } else {
                    delete file.error;
                }
                if (file.error || data.files.error) {
                    data.files.error = true;
                    dfd.rejectWith(this, [data]);
                } else {
                    dfd.resolveWith(this, [data]);
                }
                return dfd.promise();
            }

        }

    });

}));

/*
 AngularJS v1.1.4
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,V,s){'use strict';function gc(){var b=M.angular;M.angular=hc;return b}function o(b,a,c){var d;if(b)if(I(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==o)b.forEach(a,c);else if(!b||typeof b.length!=="number"?0:typeof b.hasOwnProperty!="function"&&typeof b.constructor!="function"||b instanceof P||ca&&b instanceof ca||Da.call(b)!=="[object Object]"||typeof b.callee==="function")for(d=0;d<b.length;d++)a.call(c,b[d],
d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function rb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function ic(b,a,c){for(var d=rb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function sb(b){return function(a,c){b(c,a)}}function Ea(){for(var b=Z.length,a;b;){b--;a=Z[b].charCodeAt(0);if(a==57)return Z[b]="A",Z.join("");if(a==90)Z[b]="0";else return Z[b]=String.fromCharCode(a+1),Z.join("")}Z.unshift("0");return Z.join("")}function y(b){o(arguments,
function(a){a!==b&&o(a,function(a,d){b[d]=a})});return b}function K(b){return parseInt(b,10)}function Fa(b,a){return y(new (y(function(){},{prototype:b})),a)}function t(){}function pa(b){return b}function Q(b){return function(){return b}}function u(b){return typeof b=="undefined"}function w(b){return typeof b!="undefined"}function L(b){return b!=null&&typeof b=="object"}function x(b){return typeof b=="string"}function Za(b){return typeof b=="number"}function qa(b){return Da.apply(b)=="[object Date]"}
function C(b){return Da.apply(b)=="[object Array]"}function I(b){return typeof b=="function"}function ra(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function S(b){return x(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function jc(b){return b&&(b.nodeName||b.bind&&b.find)}function $a(b,a,c){var d=[];o(b,function(b,f,i){d.push(a.call(c,b,f,i))});return d}function Ga(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function sa(b,a){var c=Ga(b,
a);c>=0&&b.splice(c,1);return a}function W(b,a){if(ra(b)||b&&b.$evalAsync&&b.$watch)throw Error("Can't copy Window or Scope");if(a){if(b===a)throw Error("Can't copy equivalent objects or arrays");if(C(b))for(var c=a.length=0;c<b.length;c++)a.push(W(b[c]));else for(c in o(a,function(b,c){delete a[c]}),b)a[c]=W(b[c])}else(a=b)&&(C(b)?a=W(b,[]):qa(b)?a=new Date(b.getTime()):L(b)&&(a=W(b,{})));return a}function kc(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}
function ja(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&c=="object")if(C(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ja(b[d],a[d]))return!1;return!0}}else if(qa(b))return qa(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||ra(b)||ra(a))return!1;c={};for(d in b)if(!(d.charAt(0)==="$"||I(b[d]))){if(!ja(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&a[d]!==s&&!I(a[d]))return!1;
return!0}return!1}function ab(b,a){var c=arguments.length>2?ka.call(arguments,2):[];return I(a)&&!(a instanceof RegExp)?c.length?function(){return arguments.length?a.apply(b,c.concat(ka.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function lc(b,a){var c=a;/^\$+/.test(b)?c=s:ra(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":a&&a.$evalAsync&&a.$watch&&(c="$SCOPE");return c}function da(b,a){return JSON.stringify(b,lc,a?"  ":null)}function tb(b){return x(b)?
JSON.parse(b):b}function Ha(b){b&&b.length!==0?(b=J(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;return b}function ta(b){b=v(b).clone();try{b.html("")}catch(a){}var c=v("<div>").append(b).html();try{return b[0].nodeType===3?J(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+J(b)})}catch(d){return J(c)}}function bb(b){var a={},c,d;o((b||"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),a[d]=w(c[1])?decodeURIComponent(c[1]):!0)});
return a}function ub(b){var a=[];o(b,function(b,d){a.push(ua(d,!0)+(b===!0?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function cb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function mc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,i=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
o(i,function(a){i[a]=!0;c(V.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(o(b.querySelectorAll("."+a),c),o(b.querySelectorAll("."+a+"\\:"),c),o(b.querySelectorAll("["+a+"]"),c))});o(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):o(a.attributes,function(b){if(!e&&i[b.name])e=a,f=b.value})}});e&&a(e,f?[f]:[])}function vb(b,a){var c=function(){b=v(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");
var c=wb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(M&&!d.test(M.name))return c();M.name=M.name.replace(d,"");Ia.resumeBootstrap=function(b){o(b,function(b){a.push(b)});c()}}function db(b,a){a=a||"_";return b.replace(nc,function(b,d){return(d?a:"")+b.toLowerCase()})}function eb(b,a,c){if(!b)throw Error("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function va(b,
a,c){c&&C(b)&&(b=b[b.length-1]);eb(I(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function oc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,f){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,d,e){return function(){b[e||"push"]([c,d,arguments]);return m}}if(!e)throw Error("No module: "+d);var b=[],c=[],g=a("$injector","invoke"),m={_invokeQueue:b,
_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animationProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:g,run:function(a){c.push(a);return this}};f&&g(f);return m})}})}function Ja(b){return b.replace(pc,function(a,b,d,e){return e?
d.toUpperCase():d}).replace(qc,"Moz$1")}function fb(b,a){function c(){var e;for(var b=[this],c=a,i,h,j,g,m,k;b.length;){i=b.shift();h=0;for(j=i.length;h<j;h++){g=v(i[h]);c?g.triggerHandler("$destroy"):c=!c;m=0;for(e=(k=g.children()).length,g=e;m<g;m++)b.push(ca(k[m]))}}return d.apply(this,arguments)}var d=ca.fn[b],d=d.$original||d;c.$original=d;ca.fn[b]=c}function P(b){if(b instanceof P)return b;if(!(this instanceof P)){if(x(b)&&b.charAt(0)!="<")throw Error("selectors not implemented");return new P(b)}if(x(b)){var a=
V.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);gb(this,a.childNodes);this.remove()}else gb(this,b)}function hb(b){return b.cloneNode(!0)}function wa(b){xb(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)wa(b[a])}function yb(b,a,c){var d=$(b,"events");$(b,"handle")&&(u(a)?o(d,function(a,c){ib(b,c,a);delete d[c]}):u(c)?(ib(b,a,d[a]),delete d[a]):sa(d[a],c))}function xb(b){var a=b[Ka],c=La[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),yb(b)),delete La[a],
b[Ka]=s)}function $(b,a,c){var d=b[Ka],d=La[d||-1];if(w(c))d||(b[Ka]=d=++rc,d=La[d]={}),d[a]=c;else return d&&d[a]}function zb(b,a,c){var d=$(b,"data"),e=w(c),f=!e&&w(a),i=f&&!L(a);!d&&!i&&$(b,"data",d={});if(e)d[a]=c;else if(f)if(i)return d&&d[a];else y(d,a);else return d}function Ma(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>-1}function Ab(b,a){a&&o(a.split(" "),function(a){b.className=S((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+S(a)+" "," "))})}function Bb(b,
a){a&&o(a.split(" "),function(a){if(!Ma(b,a))b.className=S(b.className+" "+S(a))})}function gb(b,a){if(a)for(var a=!a.nodeName&&w(a.length)&&!ra(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function Cb(b,a){return Na(b,"$"+(a||"ngController")+"Controller")}function Na(b,a,c){b=v(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;b=b.parent()}}function Db(b,a){var c=Oa[a.toLowerCase()];return c&&Eb[b.nodeName]&&c}function sc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=
function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||V;if(u(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};o(a[e||c.type],function(a){a.call(b,c)});X<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};
c.elem=b;return c}function la(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===s)c=b.$$hashKey=Ea()}else c=b;return a+":"+c}function Pa(b){o(b,this.put,this)}function Fb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(tc,""),c=c.match(uc),o(c[1].split(vc),function(b){b.replace(wc,function(b,c,d){a.push(d)})}),b.$inject=a}else C(b)?(c=b.length-1,va(b[c],"fn"),a=b.slice(0,c)):va(b,"fn",!0);return a}function wb(b){function a(a){return function(b,
c){if(L(b))o(b,sb(a));else return a(b,c)}}function c(a,b){if(I(b)||C(b))b=k.instantiate(b);if(!b.$get)throw Error("Provider "+a+" must define $get factory method.");return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];o(a,function(a){if(!g.get(a))if(g.put(a,!0),x(a)){var c=xa(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,h=d.length;c<h;c++){var f=d[c],n=k.get(f[0]);n[f[1]].apply(n,f[2])}}catch(j){throw j.message&&(j.message+=" from "+a),
j;}}else if(I(a))try{b.push(k.invoke(a))}catch(i){throw i.message&&(i.message+=" from "+a),i;}else if(C(a))try{b.push(k.invoke(a))}catch(l){throw l.message&&(l.message+=" from "+String(a[a.length-1])),l;}else va(a,"module")});return b}function f(a,b){function c(d){if(typeof d!=="string")throw Error("Service name expected");if(a.hasOwnProperty(d)){if(a[d]===i)throw Error("Circular dependency: "+j.join(" <- "));return a[d]}else try{return j.unshift(d),a[d]=i,a[d]=b(d)}finally{j.shift()}}function d(a,
b,e){var g=[],h=Fb(a),f,j,n;j=0;for(f=h.length;j<f;j++)n=h[j],g.push(e&&e.hasOwnProperty(n)?e[n]:c(n));a.$inject||(a=a[f]);switch(b?-1:g.length){case 0:return a();case 1:return a(g[0]);case 2:return a(g[0],g[1]);case 3:return a(g[0],g[1],g[2]);case 4:return a(g[0],g[1],g[2],g[3]);case 5:return a(g[0],g[1],g[2],g[3],g[4]);case 6:return a(g[0],g[1],g[2],g[3],g[4],g[5]);case 7:return a(g[0],g[1],g[2],g[3],g[4],g[5],g[6]);case 8:return a(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7]);case 9:return a(g[0],g[1],
g[2],g[3],g[4],g[5],g[6],g[7],g[8]);case 10:return a(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],g[9]);default:return a.apply(b,g)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(C(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return L(e)?e:c},get:c,annotate:Fb}}var i={},h="Provider",j=[],g=new Pa,m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,Q(b))}),
constant:a(function(a,b){m[a]=b;l[a]=b}),decorator:function(a,b){var c=k.get(a+h),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},k=m.$injector=f(m,function(){throw Error("Unknown provider: "+j.join(" <- "));}),l={},q=l.$injector=f(l,function(a){a=k.get(a+h);return q.invoke(a.$get,a)});o(e(b),function(a){q.invoke(a||t)});return q}function xc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=
null;o(a,function(a){!b&&J(a.nodeName)==="a"&&(b=a)});return b}function f(){var b=c.hash(),d;b?(d=i.getElementById(b))?d.scrollIntoView():(d=e(i.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var i=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function Gb(b){this.register=function(a,c){b.factory(Ja(a)+"Animation",c)};this.$get=["$injector",function(a){return function(b){if(b)try{return a.get(Ja(b)+"Animation")}catch(d){}}}]}
function yc(b,a,c,d){function e(a){try{a.apply(null,ka.call(arguments,1))}finally{if(n--,n===0)for(;B.length;)try{B.pop()()}catch(b){c.error(b)}}}function f(a,b){(function z(){o(r,function(a){a()});p=b(z,a)})()}function i(){E!=h.url()&&(E=h.url(),o(G,function(a){a(h.url())}))}var h=this,j=a[0],g=b.location,m=b.history,k=b.setTimeout,l=b.clearTimeout,q={};h.isMock=!1;var n=0,B=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){n++};h.notifyWhenNoOutstandingRequests=function(a){o(r,
function(a){a()});n===0?a():B.push(a)};var r=[],p;h.addPollFn=function(a){u(p)&&f(100,k);r.push(a);return a};var E=g.href,D=a.find("base");h.url=function(a,b){if(a){if(E!=a)return E=a,d.history?b?m.replaceState(null,"",a):(m.pushState(null,"",a),D.attr("href",D.attr("href"))):b?g.replace(a):g.href=a,h}else return g.href.replace(/%27/g,"'")};var G=[],R=!1;h.onUrlChange=function(a){R||(d.history&&v(b).bind("popstate",i),d.hashchange?v(b).bind("hashchange",i):h.addPollFn(i),R=!0);G.push(a);return a};
h.baseHref=function(){var a=D.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var A={},H="",F=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)if(b===s)j.cookie=escape(a)+"=;path="+F+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(x(b))d=(j.cookie=escape(a)+"="+escape(b)+";path="+F).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!")}else{if(j.cookie!==H){H=j.cookie;d=H.split("; ");A={};for(g=0;g<d.length;g++)e=
d[g],h=e.indexOf("="),h>0&&(A[unescape(e.substring(0,h))]=unescape(e.substring(h+1)))}return A}};h.defer=function(a,b){var c;n++;c=k(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};h.defer.cancel=function(a){return q[a]?(delete q[a],l(a),e(t),!0):!1}}function zc(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new yc(b,d,a,c)}]}function Ac(){this.$get=function(){function b(b,d){function e(a){if(a!=k){if(l){if(l==a)l=a.n}else l=a;f(a.n,a.p);f(a,k);k=a;k.n=null}}function f(a,
b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw Error("cacheId "+b+" taken");var i=0,h=y({},d,{id:b}),j={},g=d&&d.capacity||Number.MAX_VALUE,m={},k=null,l=null;return a[b]={put:function(a,b){var c=m[a]||(m[a]={key:a});e(c);if(!u(b))return a in j||i++,j[a]=b,i>g&&this.remove(l.key),b},get:function(a){var b=m[a];if(b)return e(b),j[a]},remove:function(a){var b=m[a];if(b){if(b==k)k=b.p;if(b==l)l=b.n;f(b.n,b.p);delete m[a];delete j[a];i--}},removeAll:function(){j={};i=0;m={};k=l=null},destroy:function(){m=
h=j=null;delete a[b]},info:function(){return y({},h,{size:i})}}}var a={};b.info=function(){var b={};o(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Bc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Hb(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f="Template must have exactly one root element. was: ",i=/^\s*(https?|ftp|mailto|file):/;this.directive=function j(d,e){x(d)?
(eb(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];o(a[d],function(a){try{var f=b.invoke(a);if(I(f))f={compile:Q(f)};else if(!f.compile&&f.link)f.compile=Q(f.link);f.priority=f.priority||0;f.name=f.name||d;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(j){c(j)}});return e}])),a[d].push(e)):o(d,sb(j));return this};this.urlSanitizationWhitelist=function(a){return w(a)?(i=a,this):i};this.$get=["$injector",
"$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document",function(b,g,m,k,l,q,n,B,r){function p(a,b,c){a instanceof v||(a=v(a));o(a,function(b,c){b.nodeType==3&&b.nodeValue.match(/\S+/)&&(a[c]=v(b).wrap("<span></span>").parent()[0])});var d=D(a,b,a,c);return function(b,c){eb(b,"scope");for(var e=c?za.clone.call(a):a,g=0,f=e.length;g<f;g++){var j=e[g];(j.nodeType==1||j.nodeType==9)&&e.eq(g).data("$scope",b)}E(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}
function E(a,b){try{a.addClass(b)}catch(c){}}function D(a,b,c,d){function e(a,c,d,f){var j,i,l,m,n,k,q,p=[];n=0;for(k=c.length;n<k;n++)p.push(c[n]);q=n=0;for(k=g.length;n<k;q++)i=p[q],c=g[n++],j=g[n++],c?(c.scope?(l=a.$new(L(c.scope)),v(i).data("$scope",l)):l=a,(m=c.transclude)||!f&&b?c(j,l,i,d,function(b){return function(c){var d=a.$new();d.$$transcluded=!0;return b(d,c).bind("$destroy",ab(d,d.$destroy))}}(m||b)):c(j,l,i,s,f)):j&&j(a,i.childNodes,s,f)}for(var g=[],f,j,i,l=0;l<a.length;l++)j=new ya,
f=G(a[l],[],j,d),j=(f=f.length?R(f,a[l],j,b,c):null)&&f.terminal||!a[l].childNodes||!a[l].childNodes.length?null:D(a[l].childNodes,f?f.transclude:b),g.push(f),g.push(j),i=i||f||j;return i?e:null}function G(a,b,c,g){var f=c.$attr,j;switch(a.nodeType){case 1:A(b,aa(jb(a).toLowerCase()),"E",g);var i,l,n;j=a.attributes;for(var m=0,k=j&&j.length;m<k;m++)if(i=j[m],i.specified)l=i.name,n=aa(l),ha.test(n)&&(l=n.substr(6).toLowerCase()),n=aa(l.toLowerCase()),f[n]=l,c[n]=i=S(X&&l=="href"?decodeURIComponent(a.getAttribute(l,
2)):i.value),Db(a,n)&&(c[n]=!0),z(a,b,i,n),A(b,n,"A",g);a=a.className;if(x(a)&&a!=="")for(;j=e.exec(a);)n=aa(j[2]),A(b,n,"C",g)&&(c[n]=S(j[3])),a=a.substr(j.index+j[0].length);break;case 3:ga(b,a.nodeValue);break;case 8:try{if(j=d.exec(a.nodeValue))n=aa(j[1]),A(b,n,"M",g)&&(c[n]=S(j[2]))}catch(q){}}b.sort(N);return b}function R(a,b,c,d,e){function j(a,b){if(a)a.require=z.require,B.push(a);if(b)b.require=z.require,r.push(b)}function i(a,b){var c,d="data",e=!1;if(x(a)){for(;(c=a.charAt(0))=="^"||c==
"?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw Error("No controller: "+a);}else C(a)&&(c=[],o(a,function(a){c.push(i(a,b))}));return c}function l(a,d,e,f,j){var k,p,D,G,H;k=b===e?c:kc(c,new ya(v(e),c.$attr));p=k.$$element;if(ba){var z=/^\s*([@=&])(\??)\s*(\w*)\s*$/,F=d.$parent||d;o(ba.scope,function(a,b){var c=a.match(z)||[],e=c[3]||b,f=c[2]=="?",c=c[1],j,l,i;d.$$isolateBindings[b]=c+e;switch(c){case "@":k.$observe(e,function(a){d[b]=a});k.$$observers[e].$$scope=
F;k[e]&&(d[b]=g(k[e])(F));break;case "=":if(f&&!k[e])break;l=q(k[e]);i=l.assign||function(){j=d[b]=l(F);throw Error(Ib+k[e]+" (directive: "+ba.name+")");};j=d[b]=l(F);d.$watch(function(){var a=l(F);a!==d[b]&&(a!==j?j=d[b]=a:i(F,a=j=d[b]));return a});break;case "&":l=q(k[e]);d[b]=function(a){return l(F,a)};break;default:throw Error("Invalid isolate scope definition for directive "+ba.name+": "+a);}})}ha&&o(ha,function(a){var b={$scope:d,$element:p,$attrs:k,$transclude:j};H=a.controller;H=="@"&&(H=
k[a.name]);p.data("$"+a.name+"Controller",n(H,b))});f=0;for(D=B.length;f<D;f++)try{G=B[f],G(d,p,k,G.require&&i(G.require,p))}catch(E){m(E,ta(p))}a&&a(d,e.childNodes,s,j);f=0;for(D=r.length;f<D;f++)try{G=r[f],G(d,p,k,G.require&&i(G.require,p))}catch(N){m(N,ta(p))}}for(var k=-Number.MAX_VALUE,B=[],r=[],D=null,ba=null,N=null,A=c.$$element=v(b),z,T,R,ga,ia=d,ha,t,y,w=0,u=a.length;w<u;w++){z=a[w];R=s;if(k>z.priority)break;if(y=z.scope)ea("isolated scope",ba,z,A),L(y)&&(E(A,"ng-isolate-scope"),ba=z),E(A,
"ng-scope"),D=D||z;T=z.name;if(y=z.controller)ha=ha||{},ea("'"+T+"' controller",ha[T],z,A),ha[T]=z;if(y=z.transclude)ea("transclusion",ga,z,A),ga=z,k=z.priority,y=="element"?(R=v(b),A=c.$$element=v(V.createComment(" "+T+": "+c[T]+" ")),b=A[0],fa(e,v(R[0]),b),ia=p(R,d,k)):(R=v(hb(b)).contents(),A.html(""),ia=p(R,d));if(z.template)if(ea("template",N,z,A),N=z,y=I(z.template)?z.template(A,c):z.template,y=Jb(y),z.replace){R=v("<div>"+S(y)+"</div>").contents();b=R[0];if(R.length!=1||b.nodeType!==1)throw Error(f+
y);fa(e,A,b);T={$attr:{}};a=a.concat(G(b,a.splice(w+1,a.length-(w+1)),T));H(c,T);u=a.length}else A.html(y);if(z.templateUrl)ea("template",N,z,A),N=z,l=F(a.splice(w,a.length-w),l,A,c,e,z.replace,ia),u=a.length;else if(z.compile)try{t=z.compile(A,c,ia),I(t)?j(null,t):t&&j(t.pre,t.post)}catch(J){m(J,ta(A))}if(z.terminal)l.terminal=!0,k=Math.max(k,z.priority)}l.scope=D&&D.scope;l.transclude=ga&&ia;return l}function A(d,e,g,f){var l=!1;if(a.hasOwnProperty(e))for(var i,e=b.get(e+c),n=0,k=e.length;n<k;n++)try{if(i=
e[n],(f===s||f>i.priority)&&i.restrict.indexOf(g)!=-1)d.push(i),l=!0}catch(q){m(q)}return l}function H(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;o(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});o(b,function(b,g){g=="class"?(E(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):g=="style"?e.attr("style",e.attr("style")+";"+b):g.charAt(0)!="$"&&!a.hasOwnProperty(g)&&(a[g]=b,d[g]=c[g])})}function F(a,b,c,d,e,g,j){var i=[],n,m,q=c[0],p=a.shift(),ya=y({},
p,{controller:null,templateUrl:null,transclude:null,scope:null}),p=I(p.templateUrl)?p.templateUrl(c,d):p.templateUrl;c.html("");k.get(p,{cache:l}).success(function(l){var k,p,l=Jb(l);if(g){p=v("<div>"+S(l)+"</div>").contents();k=p[0];if(p.length!=1||k.nodeType!==1)throw Error(f+l);l={$attr:{}};fa(e,c,k);G(k,a,l);H(d,l)}else k=q,c.html(l);a.unshift(ya);n=R(a,k,d,j);for(m=D(c[0].childNodes,j);i.length;){var B=i.shift(),l=i.shift();p=i.shift();var r=i.shift(),F=k;l!==q&&(F=hb(k),fa(p,v(l),F));n(function(){b(m,
B,F,e,r)},B,F,e,r)}i=null}).error(function(a,b,c,d){throw Error("Failed to load template: "+d.url);});return function(a,c,d,e,g){i?(i.push(c),i.push(d),i.push(e),i.push(g)):n(function(){b(m,c,d,e,g)},c,d,e,g)}}function N(a,b){return b.priority-a.priority}function ea(a,b,c,d){if(b)throw Error("Multiple directives ["+b.name+", "+c.name+"] asking for "+a+" on: "+ta(d));}function ga(a,b){var c=g(b,!0);c&&a.push({priority:0,compile:Q(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);E(d.data("$binding",
e),"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function z(a,b,c,d){var e=g(c,!0);e&&b.push({priority:100,compile:Q(function(a,b,c){b=c.$$observers||(c.$$observers={});if(e=g(c[d],!0))c[d]=e(a),(b[d]||(b[d]=[])).$$inter=!0,(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,a)})})})}function fa(a,b,c){var d=b[0],e=d.parentNode,g,f;if(a){g=0;for(f=a.length;g<f;g++)if(a[g]==d){a[g]=c;break}}e&&e.replaceChild(c,d);c[v.expando]=d[v.expando];b[0]=c}var ya=function(a,
b){this.$$element=a;this.$attr=b||{}};ya.prototype={$normalize:aa,$set:function(a,b,c,d){var e=Db(this.$$element[0],a),g=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=db(a,"-"));if(jb(this.$$element[0])==="A"&&a==="href")ba.setAttribute("href",b),e=ba.href,e.match(i)||(this[a]=b="unsafe:"+e);c!==!1&&(b===null||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));g&&o(g[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,
b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var ba=r[0].createElement("a"),T=g.startSymbol(),ia=g.endSymbol(),Jb=T=="{{"||ia=="}}"?pa:function(a){return a.replace(/\{\{/g,T).replace(/}}/g,ia)},ha=/^ngAttr[A-Z]/;return p}]}function aa(b){return Ja(b.replace(Cc,""))}function Dc(){var b={};this.register=function(a,c){L(a)?y(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(x(d)){var f=
d,d=b.hasOwnProperty(f)?b[f]:kb(e.$scope,f,!0)||kb(c,f,!0);va(d,f,!0)}return a.instantiate(d,e)}}]}function Ec(){this.$get=["$window",function(b){return v(b.document)}]}function Fc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Gc(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler",function(c,d){function e(e,j){for(var g,m,k=0,l=[],q=e.length,n=
!1,B=[];k<q;)(g=e.indexOf(b,k))!=-1&&(m=e.indexOf(a,g+f))!=-1?(k!=g&&l.push(e.substring(k,g)),l.push(k=c(n=e.substring(g+f,m))),k.exp=n,k=m+i,n=!0):(k!=q&&l.push(e.substring(k)),k=q);if(!(q=l.length))l.push(""),q=1;if(!j||n)return B.length=q,k=function(a){try{for(var b=0,c=q,g;b<c;b++){if(typeof(g=l[b])=="function")g=g(a),g==null||g==s?g="":typeof g!="string"&&(g=da(g));B[b]=g}return B.join("")}catch(f){d(Error("Error while interpolating: "+e+"\n"+f.toString()))}},k.exp=e,k.parts=l,k}var f=b.length,
i=a.length;e.startSymbol=function(){return b};e.endSymbol=function(){return a};return e}]}function Kb(b){for(var b=b.split("/"),a=b.length;a--;)b[a]=cb(b[a]);return b.join("/")}function Aa(b,a){var c=lb.exec(b),c={protocol:c[1],host:c[3],port:K(c[5])||Ba[c[1]]||null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ma(b,a,c){return b+"://"+a+(c==Ba[b]?"":":"+c)}function Hc(b,a,c){var d=Aa(b);return decodeURIComponent(d.path)!=a||
u(d.hash)||d.hash.indexOf(c)!==0?b:ma(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}function Ic(b,a,c){var d=Aa(b);if(decodeURIComponent(d.path)==a&&!u(d.hash)&&d.hash.indexOf(c)===0)return b;else{var e=d.search&&"?"+d.search||"",f=d.hash&&"#"+d.hash||"",i=a.substr(0,a.lastIndexOf("/")),h=d.path.substr(i.length);if(d.path.indexOf(i)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+i+'" !');return ma(d.protocol,d.host,d.port)+a+"#"+c+h+e+f}}function mb(b,
a,c){a=a||"";this.$$parse=function(b){var c=Aa(b,this);if(c.path.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=bb(c.search);this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=function(){var b=ub(this.$$search),c=this.$$hash?"#"+cb(this.$$hash):"";this.$$url=Kb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ma(this.$$protocol,this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=
function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Qa(b,a,c){var d;this.$$parse=function(b){var c=Aa(b,this);if(c.hash&&c.hash.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing hash prefix "'+a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Jc.exec((c.hash||"").substr(a.length));this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=bb(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||"";this.$$compose()};this.$$compose=function(){var b=ub(this.$$search),
c=this.$$hash?"#"+cb(this.$$hash):"";this.$$url=Kb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ma(this.$$protocol,this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Lb(b,a,c,d){Qa.apply(this,arguments);this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ra(b){return function(){return this[b]}}function Mb(b,a){return function(c){if(u(c))return this[b];this[b]=
a(c);this.$$compose();return this}}function Kc(){var b="",a=!1;this.hashPrefix=function(a){return w(a)?(b=a,this):b};this.html5Mode=function(b){return w(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function i(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,j,g,m=d.url(),k=Aa(m);a?(j=d.baseHref()||"/",g=j.substr(0,j.lastIndexOf("/")),k=ma(k.protocol,k.host,k.port)+g+"/",h=e.history?new mb(Hc(m,j,b),g,k):new Lb(Ic(m,j,b),b,k,j.substr(g.length+
1))):(k=ma(k.protocol,k.host,k.port)+(k.path||"")+(k.search?"?"+k.search:"")+"#"+b+"/",h=new Qa(m,b,k));f.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=v(a.target);J(b[0].nodeName)!=="a";)if(b[0]===f[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=h.$$rewriteAppUrl(d);d&&!b.attr("target")&&e&&(h.$$parse(e),c.$apply(),a.preventDefault(),M.angular["ff-684208-preventDefault"]=!0)}});h.absUrl()!=m&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=
h.absUrl();h.$$parse(a);i(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;if(!l||a!=h.absUrl())l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),i(a))});h.$$replace=!1;return l});return h}]}function Lc(){var b=!0,a=this;this.debugEnabled=function(a){return w(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===
-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||t;return e.apply?function(){var a=[];o(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,b)}}return{log:e("log"),warn:e("warn"),info:e("info"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Mc(b,a){function c(a){return a.indexOf(r)!=-1}function d(a){a=a||
1;return n+a<b.length?b.charAt(n+a):!1}function e(a){return"0"<=a&&a<="9"}function f(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function i(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function h(a){return a=="-"||a=="+"||e(a)}function j(a,c,d){d=d||n;throw Error("Lexer Error: "+a+" at column"+(w(c)?"s "+c+"-"+n+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+b+"].");}function g(){for(var a="",c=n;n<b.length;){var g=J(b.charAt(n));if(g=="."||e(g))a+=g;else{var f=
d();if(g=="e"&&h(f))a+=g;else if(h(g)&&f&&e(f)&&a.charAt(a.length-1)=="e")a+=g;else if(h(g)&&(!f||!e(f))&&a.charAt(a.length-1)=="e")j("Invalid exponent");else break}n++}a*=1;l.push({index:c,text:a,json:!0,fn:function(){return a}})}function m(){for(var c="",d=n,g,h,j;n<b.length;){var k=b.charAt(n);if(k=="."||i(k)||e(k))k=="."&&(g=n),c+=k;else break;n++}if(g)for(h=n;h<b.length;){k=b.charAt(h);if(k=="("){j=c.substr(g-d+1);c=c.substr(0,g-d);n=h;break}if(f(k))h++;else break}d={index:d,text:c};if(Ca.hasOwnProperty(c))d.fn=
d.json=Ca[c];else{var m=Nb(c,a);d.fn=y(function(a,b){return m(a,b)},{assign:function(a,b){return Ob(a,c,b)}})}l.push(d);j&&(l.push({index:g,text:".",json:!1}),l.push({index:g+1,text:j,json:!1}))}function k(a){var c=n;n++;for(var d="",e=a,g=!1;n<b.length;){var h=b.charAt(n);e+=h;if(g)h=="u"?(h=b.substring(n+1,n+5),h.match(/[\da-f]{4}/i)||j("Invalid unicode escape [\\u"+h+"]"),n+=4,d+=String.fromCharCode(parseInt(h,16))):(g=Nc[h],d+=g?g:h),g=!1;else if(h=="\\")g=!0;else if(h==a){n++;l.push({index:c,
text:e,string:d,json:!0,fn:function(){return d}});return}else d+=h;n++}j("Unterminated quote",c)}for(var l=[],q,n=0,B=[],r,p=":";n<b.length;){r=b.charAt(n);if(c("\"'"))k(r);else if(e(r)||c(".")&&e(d()))g();else if(i(r)){if(m(),"{,".indexOf(p)!=-1&&B[0]=="{"&&(q=l[l.length-1]))q.json=q.text.indexOf(".")==-1}else if(c("(){}[].,;:"))l.push({index:n,text:r,json:":[,".indexOf(p)!=-1&&c("{[")||c("}]:,")}),c("{[")&&B.unshift(r),c("}]")&&B.shift(),n++;else if(f(r)){n++;continue}else{var E=r+d(),D=E+d(2),
G=Ca[r],o=Ca[E],A=Ca[D];A?(l.push({index:n,text:D,fn:A}),n+=3):o?(l.push({index:n,text:E,fn:o}),n+=2):G?(l.push({index:n,text:r,fn:G,json:"[,:".indexOf(p)!=-1&&c("+-")}),n+=1):j("Unexpected next character ",n,n+1)}p=r}return l}function Oc(b,a,c,d){function e(a,c){throw Error("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function f(){if(F.length===0)throw Error("Unexpected end of expression: "+b);return F[0]}function i(a,
b,c,d){if(F.length>0){var e=F[0],g=e.text;if(g==a||g==b||g==c||g==d||!a&&!b&&!c&&!d)return e}return!1}function h(b,c,d,g){return(b=i(b,c,d,g))?(a&&!b.json&&e("is not valid json",b),F.shift(),b):!1}function j(a){h(a)||e("is unexpected, expecting ["+a+"]",i())}function g(a,b){return y(function(c,d){return a(c,d,b)},{constant:b.constant})}function m(a,b,c){return y(function(d,e){return b(d,e,a,c)},{constant:a.constant&&c.constant})}function k(){for(var a=[];;)if(F.length>0&&!i("}",")",";","]")&&a.push(fa()),
!h(";"))return a.length==1?a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var g=a[e];g&&(d=g(b,c))}return d}}function l(){for(var a=h(),b=c(a.text),d=[];;)if(a=h(":"))d.push(N());else{var e=function(a,c,e){for(var e=[e],g=0;g<d.length;g++)e.push(d[g](a,c));return b.apply(a,e)};return function(){return e}}}function q(){for(var a=n(),b;;)if(b=h("||"))a=m(a,b.fn,n());else return a}function n(){var a=B(),b;if(b=h("&&"))a=m(a,b.fn,n());return a}function B(){var a=r(),b;if(b=h("==","!=","===","!=="))a=
m(a,b.fn,B());return a}function r(){var a;a=p();for(var b;b=h("+","-");)a=m(a,b.fn,p());if(b=h("<",">","<=",">="))a=m(a,b.fn,r());return a}function p(){for(var a=E(),b;b=h("*","/","%");)a=m(a,b.fn,E());return a}function E(){var a;return h("+")?D():(a=h("-"))?m(A,a.fn,E()):(a=h("!"))?g(a.fn,E()):D()}function D(){var a;if(h("("))a=fa(),j(")");else if(h("["))a=G();else if(h("{"))a=o();else{var b=h();(a=b.fn)||e("not a primary expression",b);if(b.json)a.constant=a.literal=!0}for(var c;b=h("(","[",".");)b.text===
"("?(a=ea(a,c),c=null):b.text==="["?(c=a,a=z(a)):b.text==="."?(c=a,a=ga(a)):e("IMPOSSIBLE");return a}function G(){var a=[],b=!0;if(f().text!="]"){do{var c=N();a.push(c);c.constant||(b=!1)}while(h(","))}j("]");return y(function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d},{literal:!0,constant:b})}function o(){var a=[],b=!0;if(f().text!="}"){do{var c=h(),c=c.string||c.text;j(":");var d=N();a.push({key:c,value:d});d.constant||(b=!1)}while(h(","))}j("}");return y(function(b,c){for(var d=
{},e=0;e<a.length;e++){var g=a[e],h=g.value(b,c);d[g.key]=h}return d},{literal:!0,constant:b})}var A=Q(0),H,F=Mc(b,d),N=function(){var a=q(),c,d;return(d=h("="))?(a.assign||e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",d),c=q(),function(b,d){return a.assign(b,c(b,d),d)}):a},ea=function(a,b){var c=[];if(f().text!=")"){do c.push(N());while(h(","))}j(")");return function(d,e){for(var g=[],h=b?b(d,e):d,f=0;f<c.length;f++)g.push(c[f](d,e));f=a(d,e)||t;return f.apply?f.apply(h,
g):f(g[0],g[1],g[2],g[3],g[4])}},ga=function(a){var b=h().text,c=Nb(b,d);return y(function(b,d){return c(a(b,d),d)},{assign:function(c,d,e){return Ob(a(c,e),b,d)}})},z=function(a){var b=N();j("]");return y(function(c,d){var e=a(c,d),g=b(c,d),h;if(!e)return s;if((e=e[g])&&e.then){h=e;if(!("$$v"in e))h.$$v=s,h.then(function(a){h.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,e)[b(c,e)]=d}})},fa=function(){for(var a=N(),b;;)if(b=h("|"))a=m(a,b.fn,l());else return a};a?(N=q,ea=ga=z=fa=function(){e("is not valid json",
{text:b,index:0})},H=D()):H=k();F.length!==0&&e("is an unexpected token",F[0]);H.literal=!!H.literal;H.constant=!!H.constant;return H}function Ob(b,a,c){for(var a=a.split("."),d=0;a.length>1;d++){var e=a.shift(),f=b[e];f||(f={},b[e]=f);b=f}return b[a.shift()]=c}function kb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,f=a.length,i=0;i<f;i++)d=a[i],b&&(b=(e=b)[d]);return!c&&I(b)?ab(e,b):b}function Pb(b,a,c,d,e){return function(f,i){var h=i&&i.hasOwnProperty(b)?i:f,j;if(h===null||h===s)return h;
if((h=h[b])&&h.then){if(!("$$v"in h))j=h,j.$$v=s,j.then(function(a){j.$$v=a});h=h.$$v}if(!a||h===null||h===s)return h;if((h=h[a])&&h.then){if(!("$$v"in h))j=h,j.$$v=s,j.then(function(a){j.$$v=a});h=h.$$v}if(!c||h===null||h===s)return h;if((h=h[c])&&h.then){if(!("$$v"in h))j=h,j.$$v=s,j.then(function(a){j.$$v=a});h=h.$$v}if(!d||h===null||h===s)return h;if((h=h[d])&&h.then){if(!("$$v"in h))j=h,j.$$v=s,j.then(function(a){j.$$v=a});h=h.$$v}if(!e||h===null||h===s)return h;if((h=h[e])&&h.then){if(!("$$v"in
h))j=h,j.$$v=s,j.then(function(a){j.$$v=a});h=h.$$v}return h}}function Nb(b,a){if(nb.hasOwnProperty(b))return nb[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Pb(c[0],c[1],c[2],c[3],c[4]):function(a,b){var e=0,g;do g=Pb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=s,a=g;while(e<d);return g};else{var f="var l, fn, p;\n";o(c,function(a,b){f+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});
f+="return s;";e=Function("s","k",f);e.toString=function(){return f}}return nb[b]=e}function Pc(){var b={};this.$get=["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Oc(d,!1,a,c.csp);case "function":return d;default:return t}}}]}function Qc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Rc(function(a){b.$evalAsync(a)},a)}]}function Rc(b,a){function c(a){return a}function d(a){return i(a)}var e=function(){var h=
[],j,g;return g={resolve:function(a){if(h){var c=h;h=s;j=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],j.then(a[0],a[1])})}},reject:function(a){g.resolve(i(a))},promise:{then:function(b,g){var f=e(),i=function(d){try{f.resolve((b||c)(d))}catch(e){a(e),f.reject(e)}},n=function(b){try{f.resolve((g||d)(b))}catch(c){a(c),f.reject(c)}};h?h.push([i,n]):j.then(i,n);return f.promise}}}},f=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},
i=function(a){return{then:function(c,g){var f=e();b(function(){f.resolve((g||d)(a))});return f.promise}}};return{defer:e,reject:i,when:function(h,j,g){var m=e(),k,l=function(b){try{return(j||c)(b)}catch(d){return a(d),i(d)}},q=function(b){try{return(g||d)(b)}catch(c){return a(c),i(c)}};b(function(){f(h).then(function(a){k||(k=!0,m.resolve(f(a).then(l,q)))},function(a){k||(k=!0,m.resolve(q(a)))})});return m.promise},all:function(a){var b=e(),c=0,d=C(a)?[]:{};o(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});c===0&&b.resolve(d);return b.promise}}}function Sc(){var b={};this.when=function(a,c){b[a]=y({reloadOnSearch:!0,caseInsensitiveMatch:!1},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,f,i,h){function j(a,b,c){for(var b=
"^"+b.replace(/[-\/\\^$:*+?.()|[\]{}]/g,"\\$&")+"$",d="",e=[],g={},f=/\\([:*])(\w+)/g,h,j=0;(h=f.exec(b))!==null;){d+=b.slice(j,h.index);switch(h[1]){case ":":d+="([^\\/]*)";break;case "*":d+="(.*)"}e.push(h[2]);j=f.lastIndex}d+=b.substr(j);var i=a.match(RegExp(d,c.caseInsensitiveMatch?"i":""));i&&o(e,function(a,b){g[a]=i[b+1]});return i?g:null}function g(){var b=m(),g=q.current;if(b&&g&&b.$$route===g.$$route&&ja(b.pathParams,g.pathParams)&&!b.reloadOnSearch&&!l)g.params=b.params,W(g.params,d),a.$broadcast("$routeUpdate",
g);else if(b||g)l=!1,a.$broadcast("$routeChangeStart",b,g),(q.current=b)&&b.redirectTo&&(x(b.redirectTo)?c.path(k(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=y({},b.resolve),c;o(a,function(b,c){a[c]=x(b)?f.get(b):f.invoke(b)});if(w(c=b.template))I(c)&&(c=c(b.params));else if(w(c=b.templateUrl))if(I(c)&&(c=c(b.params)),w(c))b.loadedTemplateUrl=c,c=i.get(c,{cache:h}).then(function(a){return a.data});
w(c)&&(a.$template=c);return e.all(a)}}).then(function(c){if(b==q.current){if(b)b.locals=c,W(b.params,d);a.$broadcast("$routeChangeSuccess",b,g)}},function(c){b==q.current&&a.$broadcast("$routeChangeError",b,g,c)})}function m(){var a,d;o(b,function(b,e){if(!d&&(a=j(c.path(),e,b)))d=Fa(b,{params:y({},c.search(),a),pathParams:a}),d.$$route=b});return d||b[null]&&Fa(b[null],{params:{},pathParams:{}})}function k(a,b){var c=[];o((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),
g=e[1];c.push(b[g]);c.push(e[2]||"");delete b[g]}});return c.join("")}var l=!1,q={routes:b,reload:function(){l=!0;a.$evalAsync(g)}};a.$on("$locationChangeSuccess",g);return q}]}function Tc(){this.$get=Q({})}function Uc(){var b=10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=Ea();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;
this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$listeners={};this.$$isolateBindings={}}function f(a){if(j.$$phase)throw Error(j.$$phase+" already in progress");j.$$phase=a}function i(a,b){var c=d(a);va(c,b);return c}function h(){}e.prototype={$new:function(a){if(I(a))throw Error("API-CHANGE: Use $controller to instantiate controllers.");a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=Ea());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$watchers=
a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=i(a,"watch"),e=this.$$watchers,f={fn:b,last:h,get:d,exp:a,eq:!!c};if(!I(b)){var j=i(b||t,"listener");f.fn=function(a,b,c){j(c)}}if(typeof a=="string"&&d.constant){var r=f.fn;f.fn=function(a,b,c){r.call(this,a,b,c);sa(e,f)}}if(!e)e=this.$$watchers=[];e.unshift(f);return function(){sa(e,
f)}},$watchCollection:function(a,b){var c=this,e,f,h=0,j=d(a),i=[],p={},o=0;return this.$watch(function(){f=j(c);var a,b;if(L(f))if(C(f)){if(e!==i)e=i,o=e.length=0,h++;a=f.length;if(o!==a)h++,e.length=o=a;for(b=0;b<a;b++)e[b]!==f[b]&&(h++,e[b]=f[b])}else{e!==p&&(e=p={},o=0,h++);a=0;for(b in f)f.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==f[b]&&(h++,e[b]=f[b]):(o++,e[b]=f[b],h++));if(o>a)for(b in h++,e)e.hasOwnProperty(b)&&!f.hasOwnProperty(b)&&(o--,delete e[b])}else e!==f&&(e=f,h++);return h},
function(){b(f,e,c)})},$digest:function(){var a,d,e,i,q=this.$$asyncQueue,n,o,r=b,p,E=[],D,G;f("$digest");do{o=!1;for(p=this;q.length;)try{p.$eval(q.shift())}catch(s){c(s)}do{if(i=p.$$watchers)for(n=i.length;n--;)try{if(a=i[n],(d=a.get(p))!==(e=a.last)&&!(a.eq?ja(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))o=!0,a.last=a.eq?W(d):d,a.fn(d,e===h?d:e,p),r<5&&(D=4-r,E[D]||(E[D]=[]),G=I(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,G+="; newVal: "+da(d)+"; oldVal: "+da(e),E[D].push(G))}catch(A){c(A)}if(!(i=
p.$$childHead||p!==this&&p.$$nextSibling))for(;p!==this&&!(i=p.$$nextSibling);)p=p.$parent}while(p=i);if(o&&!r--)throw j.$$phase=null,Error(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+da(E));}while(o||q.length);j.$$phase=null},$destroy:function(){if(!(j==this||this.$$destroyed)){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==this)a.$$childTail=this.$$prevSibling;
if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling;this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return f("$apply"),this.$eval(a)}catch(b){c(b)}finally{j.$$phase=null;try{j.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[Ga(c,b)]=null}},$emit:function(a,b){var d=[],e,f=this,h=!1,i={name:a,targetScope:f,stopPropagation:function(){h=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},j=[i].concat(ka.call(arguments,1)),p,o;do{e=f.$$listeners[a]||d;i.currentScope=f;p=0;for(o=e.length;p<o;p++)if(e[p])try{if(e[p].apply(null,j),h)return i}catch(D){c(D)}else e.splice(p,1),p--,o--;f=f.$parent}while(f);return i},$broadcast:function(a,b){var d=
this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},h=[f].concat(ka.call(arguments,1)),i,j;do{d=e;f.currentScope=d;e=d.$$listeners[a]||[];i=0;for(j=e.length;i<j;i++)if(e[i])try{e[i].apply(null,h)}catch(p){c(p)}else e.splice(i,1),i--,j--;if(!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent}while(d=e);return f}};var j=new e;return j}]}function Vc(){this.$get=["$window","$document",function(b,a){var c=
{},d=K((/android (\d+)/.exec(J((b.navigator||{}).userAgent))||[])[1]),e=a[0]||{},f,i=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=e.body&&e.body.style,j=!1;if(h){for(var g in h)if(j=i.exec(g)){f=j[0];f=f.substr(0,1).toUpperCase()+f.substr(1);break}j=!!(f+"Transition"in h)}return{history:!(!b.history||!b.history.pushState||d<4),hashchange:"onhashchange"in b&&(!e.documentMode||e.documentMode>7),hasEvent:function(a){if(a=="input"&&X==9)return!1;if(u(c[a])){var b=e.createElement("div");c[a]="on"+a in b}return c[a]},
csp:e.securityPolicy?e.securityPolicy.isActive:!1,vendorPrefix:f,supportsTransitions:j}}]}function Wc(){this.$get=Q(M)}function Qb(b){var a={},c,d,e;if(!b)return a;o(b.split("\n"),function(b){e=b.indexOf(":");c=J(S(b.substr(0,e)));d=S(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Xc(b,a){var c=Yc.exec(b);if(c==null)return!0;var d={protocol:c[2],host:c[4],port:K(c[6])||Ba[c[2]]||null,relativeProtocol:c[2]===s||c[2]===""},c=lb.exec(a),c={protocol:c[1],host:c[3],port:K(c[5])||Ba[c[1]]||
null};return(d.protocol==c.protocol||d.relativeProtocol)&&d.host==c.host&&(d.port==c.port||d.relativeProtocol&&c.port==Ba[c.protocol])}function Rb(b){var a=L(b)?b:s;return function(c){a||(a=Qb(b));return c?a[J(c)]||null:a}}function Sb(b,a,c){if(I(c))return c(b,a);o(c,function(c){b=c(b,a)});return b}function Zc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d=this.defaults={transformResponse:[function(d){x(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=tb(d,!0)));return d}],transformRequest:[function(a){return L(a)&&
Da.apply(a)!=="[object File]"?da(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},e=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,g,m,k){function l(a){function c(a){var b=y({},a,{data:Sb(a.data,a.headers,e.transformResponse)});
return 200<=a.status&&a.status<300?b:m.reject(b)}var e={transformRequest:d.transformRequest,transformResponse:d.transformResponse},g={};y(e,a);e.headers=g;e.method=na(e.method);y(g,d.headers.common,d.headers[J(e.method)],a.headers);(a=Xc(e.url,b.url())?b.cookies()[e.xsrfCookieName||d.xsrfCookieName]:s)&&(g[e.xsrfHeaderName||d.xsrfHeaderName]=a);var f=[function(a){var b=Sb(a.data,Rb(g),a.transformRequest);u(a.data)&&delete g["Content-Type"];if(u(a.withCredentials)&&!u(d.withCredentials))a.withCredentials=
d.withCredentials;return q(a,b,g).then(c,c)},s],j=m.when(e);for(o(r,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;)var a=f.shift(),i=f.shift(),j=j.then(a,i);j.success=function(a){j.then(function(b){a(b.data,b.status,b.headers,e)});return j};j.error=function(a){j.then(null,function(b){a(b.data,b.status,b.headers,e)});return j};return j}function q(b,c,e){function f(a,b,c){o&&(200<=a&&a<300?o.put(s,
[a,b,Qb(c)]):o.remove(s));h(b,a,c);g.$apply()}function h(a,c,d){c=Math.max(c,0);(200<=c&&c<300?k.resolve:k.reject)({data:a,status:c,headers:Rb(d),config:b})}function j(){var a=Ga(l.pendingRequests,b);a!==-1&&l.pendingRequests.splice(a,1)}var k=m.defer(),q=k.promise,o,r,s=n(b.url,b.params);l.pendingRequests.push(b);q.then(j,j);if((b.cache||d.cache)&&b.cache!==!1&&b.method=="GET")o=L(b.cache)?b.cache:L(d.cache)?d.cache:B;if(o)if(r=o.get(s))if(r.then)return r.then(j,j),r;else C(r)?h(r[1],r[0],W(r[2])):
h(r,200,{});else o.put(s,q);r||a(b.method,s,c,f,e,b.timeout,b.withCredentials,b.responseType);return q}function n(a,b){if(!b)return a;var c=[];ic(b,function(a,b){a==null||a==s||(C(a)||(a=[a]),o(a,function(a){L(a)&&(a=da(a));c.push(ua(b)+"="+ua(a))}))});return a+(a.indexOf("?")==-1?"?":"&")+c.join("&")}var B=c("$http"),r=[];o(e,function(a){r.unshift(x(a)?k.get(a):k.invoke(a))});o(f,function(a,b){var c=x(a)?k.get(a):k.invoke(a);r.splice(b,0,{response:function(a){return c(m.when(a))},responseError:function(a){return c(m.reject(a))}})});
l.pendingRequests=[];(function(a){o(arguments,function(a){l[a]=function(b,c){return l(y(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){o(arguments,function(a){l[a]=function(b,c,d){return l(y(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function $c(){this.$get=["$browser","$window","$document",function(b,a,c){return ad(b,bd,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))}]}function ad(b,a,c,d,e,f){function i(a,b){var c=
e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;X?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c)}return function(e,j,g,m,k,l,q,n){function B(a,c,d,e){c=(j.match(lb)||["",f])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(t)}b.$$incOutstandingRequestCount();j=j||b.url();if(J(e)=="jsonp"){var r="_"+(d.counter++).toString(36);d[r]=function(a){d[r].data=
a};i(j.replace("JSON_CALLBACK","angular.callbacks."+r),function(){d[r].data?B(m,200,d[r].data):B(m,-2);delete d[r]})}else{var p=new a;p.open(e,j,!0);o(k,function(a,b){a&&p.setRequestHeader(b,a)});var s;p.onreadystatechange=function(){if(p.readyState==4){var a=p.getAllResponseHeaders(),b=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified","Pragma"];a||(a="",o(b,function(b){var c=p.getResponseHeader(b);c&&(a+=b+": "+c+"\n")}));B(m,s||p.status,p.responseType?p.response:p.responseText,
a)}};if(q)p.withCredentials=!0;if(n)p.responseType=n;p.send(g||"");l>0&&c(function(){s=-1;p.abort()},l)}}}function cd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),
SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function dd(){this.$get=["$rootScope","$browser","$q",
"$exceptionHandler",function(b,a,c,d){function e(e,h,j){var g=c.defer(),m=g.promise,k=w(j)&&!j,h=a.defer(function(){try{g.resolve(e())}catch(a){g.reject(a),d(a)}k||b.$apply()},h),j=function(){delete f[m.$$timeoutId]};m.$$timeoutId=h;f[h]=g;m.then(j,j);return m}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Tb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",
function(a){return function(b){return a.get(b+c)}}];a("currency",Ub);a("date",Vb);a("filter",ed);a("json",fd);a("limitTo",gd);a("lowercase",hd);a("number",Wb);a("orderBy",Xb);a("uppercase",id)}function ed(){return function(b,a,c){if(!C(b))return b;var d=[];d.check=function(a){for(var b=0;b<d.length;b++)if(!d[b](a))return!1;return!0};switch(typeof c){case "function":break;case "boolean":if(c==!0){c=function(a,b){return Ia.equals(a,b)};break}default:c=function(a,b){b=(""+b).toLowerCase();return(""+
a).toLowerCase().indexOf(b)>-1}}var e=function(a,b){if(typeof b=="string"&&b.charAt(0)==="!")return!e(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if(d.charAt(0)!=="$"&&e(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(e(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)f==
"$"?function(){if(a[f]){var b=f;d.push(function(c){return e(c,a[b])})}}():function(){if(a[f]){var b=f;d.push(function(c){return e(kb(c,b),a[b])})}}();break;case "function":d.push(a);break;default:return b}for(var i=[],h=0;h<b.length;h++){var j=b[h];d.check(j)&&i.push(j)}return i}}function Ub(b){var a=b.NUMBER_FORMATS;return function(b,d){if(u(d))d=a.CURRENCY_SYM;return Yb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Wb(b){var a=b.NUMBER_FORMATS;return function(b,d){return Yb(b,
a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Yb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var f=b<0,b=Math.abs(b),i=b+"",h="",j=[],g=!1;if(i.indexOf("e")!==-1){var m=i.match(/([\d\.]+)e(-?)(\d+)/);m&&m[2]=="-"&&m[3]>e+1?i="0":(h=i,g=!0)}if(!g){i=(i.split(Zb)[1]||"").length;u(e)&&(e=Math.min(Math.max(a.minFrac,i),a.maxFrac));var i=Math.pow(10,e),b=Math.round(b*i)/i,b=(""+b).split(Zb),i=b[0],b=b[1]||"",g=0,m=a.lgSize,k=a.gSize;if(i.length>=m+k)for(var g=i.length-m,l=0;l<g;l++)(g-l)%k===
0&&l!==0&&(h+=c),h+=i.charAt(l);for(l=g;l<i.length;l++)(i.length-l)%m===0&&l!==0&&(h+=c),h+=i.charAt(l);for(;b.length<e;)b+="0";e&&e!=="0"&&(h+=d+b.substr(0,e))}j.push(f?a.negPre:a.posPre);j.push(h);j.push(f?a.negSuf:a.posSuf);return j.join("")}function ob(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function O(b,a,c,d){return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=12);return ob(e,a,d)}}function Sa(b,a){return function(c,
d){var e=c["get"+b](),f=na(a?"SHORT"+b:b);return d[f][e]}}function Vb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),f=0,i=0,h=b[8]?a.setUTCFullYear:a.setFullYear,j=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=K(b[9]+b[10]),i=K(b[9]+b[11]));h.call(a,K(b[1]),K(b[2])-1,K(b[3]));j.call(a,K(b[4]||0)-f,K(b[5]||0)-i,K(b[6]||0),K(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",i=[],h,j,e=e||
"mediumDate",e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=jd.test(c)?K(c):a(c));Za(c)&&(c=new Date(c));if(!qa(c))return c;for(;e;)(j=kd.exec(e))?(i=i.concat(ka.call(j,1)),e=i.pop()):(i.push(e),e=null);o(i,function(a){h=ld[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function fd(){return function(b){return da(b,!0)}}function gd(){return function(b,a){if(!C(b)&&!x(b))return b;a=K(a);if(x(b))return a?a>=0?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=
b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Xb(b){return function(a,c,d){function e(a,b){return Ha(b)?function(b,c){return a(c,b)}:a}if(!C(a))return a;if(!c)return a;for(var c=C(c)?c:[c],c=$a(c,function(a){var c=!1,d=a||pa;if(x(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,h=typeof e;f==h?(f=="string"&&(c=c.toLowerCase()),f==
"string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<h?-1:1;return c},c)}),f=[],i=0;i<a.length;i++)f.push(a[i]);return f.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function Y(b){I(b)&&(b={link:b});b.restrict=b.restrict||"AC";return Q(b)}function $b(b,a){function c(a,c){c=c?"-"+db(c,"-"):"";b.removeClass((a?Ta:Ua)+c).addClass((a?Ua:Ta)+c)}var d=this,e=b.parent().controller("form")||Va,f=0,i=d.$error={},h=[];d.$name=a.name;d.$dirty=!1;d.$pristine=
!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(oa);c(!0);d.$addControl=function(a){h.push(a);a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];o(i,function(b,c){d.$setValidity(c,!0,a)});sa(h,a)};d.$setValidity=function(a,b,h){var k=i[a];if(b){if(k&&(sa(k,h),!k.length)){f--;if(!f)c(b),d.$valid=!0,d.$invalid=!1;i[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{f||c(b);if(k){if(Ga(k,h)!=-1)return}else i[a]=k=[],f++,c(!1,
a),e.$setValidity(a,!1,d);k.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(oa).addClass(Wa);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(Wa).addClass(oa);d.$dirty=!1;d.$pristine=!0;o(h,function(a){a.$setPristine()})}}function U(b){return u(b)||b===""||b===null||b!==b}function Xa(b,a,c,d,e,f){var i=function(){var e=a.val();if(Ha(c.ngTrim||"T"))e=S(e);d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})};if(e.hasEvent("input"))a.bind("input",
i);else{var h;a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||h||(h=f.defer(function(){i();h=null}))});a.bind("change",i)}d.$render=function(){a.val(U(d.$viewValue)?"":d.$viewValue)};var j=c.ngPattern,g=function(a,b){return U(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),s)};j&&(j.match(/^\/(.*)\/$/)?(j=RegExp(j.substr(1,j.length-2)),e=function(a){return g(j,a)}):e=function(a){var c=b.$eval(j);if(!c||!c.test)throw Error("Expected "+j+" to be a RegExp but was "+
c);return g(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var m=K(c.ngMinlength),e=function(a){return!U(a)&&a.length<m?(d.$setValidity("minlength",!1),s):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var k=K(c.ngMaxlength),e=function(a){return!U(a)&&a.length>k?(d.$setValidity("maxlength",!1),s):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}}function pb(b,a){b="ngClass"+b;return Y(function(c,d,e){function f(b){if(a===
!0||c.$index%2===a)j&&b!==j&&i(j),h(b);j=b}function i(a){L(a)&&!C(a)&&(a=$a(a,function(a,b){if(a)return b}));d.removeClass(C(a)?a.join(" "):a)}function h(a){L(a)&&!C(a)&&(a=$a(a,function(a,b){if(a)return b}));a&&d.addClass(C(a)?a.join(" "):a)}var j=s;c.$watch(e[b],f,!0);e.$observe("class",function(){var a=c.$eval(e[b]);f(a,a)});b!=="ngClass"&&c.$watch("$index",function(d,f){var j=d%2;j!==f%2&&(j==a?h(c.$eval(e[b])):i(c.$eval(e[b])))})})}var J=function(b){return x(b)?b.toLowerCase():b},na=function(b){return x(b)?
b.toUpperCase():b},X=K((/msie (\d+)/.exec(J(navigator.userAgent))||[])[1]),v,ca,ka=[].slice,Ya=[].push,Da=Object.prototype.toString,hc=M.angular,Ia=M.angular||(M.angular={}),xa,jb,Z=["0","0","0"];t.$inject=[];pa.$inject=[];jb=X<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?na(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var nc=/[A-Z]/g,md={full:"1.1.4",major:1,minor:1,dot:4,codeName:"quantum-manipulation"},La=P.cache={},
Ka=P.expando="ng-"+(new Date).getTime(),rc=1,ac=M.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},ib=M.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},pc=/([\:\-\_]+(.))/g,qc=/^moz([A-Z])/,za=P.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;V.readyState==="complete"?setTimeout(a):(this.bind("DOMContentLoaded",a),P(M).bind("load",a))},toString:function(){var b=
[];o(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?v(this[b]):v(this[this.length+b])},length:0,push:Ya,sort:[].sort,splice:[].splice},Oa={};o("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(b){Oa[J(b)]=b});var Eb={};o("input,select,option,textarea,button,form,details".split(","),function(b){Eb[na(b)]=!0});o({data:zb,inheritedData:Na,scope:function(b){return Na(b,"$scope")},controller:Cb,injector:function(b){return Na(b,"$injector")},
removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ma,css:function(b,a,c){a=Ja(a);if(w(c))b.style[a]=c;else{var d;X<=8&&(d=b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];X<=8&&(d=d===""?s:d);return d}},attr:function(b,a,c){var d=J(a);if(Oa[d])if(w(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||t).specified?d:s;else if(w(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?
s:b},prop:function(b,a,c){if(w(c))b[a]=c;else return b[a]},text:y(X<9?function(b,a){if(b.nodeType==1){if(u(a))return b.innerText;b.innerText=a}else{if(u(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(u(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(u(a))return b.value;b.value=a},html:function(b,a){if(u(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)wa(d[c]);b.innerHTML=a}},function(b,a){P.prototype[a]=function(a,d){var e,f;if((b.length==2&&b!==Ma&&
b!==Cb?a:d)===s)if(L(a)){for(e=0;e<this.length;e++)if(b===zb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}else{if(this.length)return b(this[0],a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});o({removeData:xb,dealoc:wa,bind:function a(c,d,e){var f=$(c,"events"),i=$(c,"handle");f||$(c,"events",f={});i||$(c,"handle",i=sc(c,f));o(d.split(" "),function(d){var j=f[d];if(!j){if(d=="mouseenter"||d=="mouseleave"){var g=0;f.mouseenter=[];f.mouseleave=[];a(c,"mouseover",
function(a){g++;g==1&&i(a,"mouseenter")});a(c,"mouseout",function(a){g--;g==0&&i(a,"mouseleave")})}else ac(c,d,i),f[d]=[];j=f[d]}j.push(e)})},unbind:yb,replaceWith:function(a,c){var d,e=a.parentNode;wa(a);o(new P(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];o(a.childNodes,function(a){a.nodeType===1&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){o(new P(c),function(c){(a.nodeType===1||a.nodeType===
11)&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;o(new P(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=v(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){wa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;o(new P(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Bb,removeClass:Ab,toggleClass:function(a,c,d){u(d)&&(d=!Ma(a,c));(d?Bb:Ab)(a,
c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;a!=null&&a.nodeType!==1;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName(c)},clone:hb,triggerHandler:function(a,c){var d=($(a,"events")||{})[c];o(d,function(c){c.call(a,null)})}},function(a,c){P.prototype[c]=function(c,e){for(var f,i=0;i<this.length;i++)f==s?(f=a(this[i],c,e),f!==s&&(f=v(f))):gb(f,a(this[i],c,e));
return f==s?this:f}});Pa.prototype={put:function(a,c){this[la(a)]=c},get:function(a){return this[la(a)]},remove:function(a){var c=this[a=la(a)];delete this[a];return c}};var uc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,vc=/,/,wc=/^\s*(_?)(\S+?)\1\s*$/,tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;Gb.$inject=["$provide"];var nd=function(){this.$get=["$animation","$window","$sniffer",function(a,c,d){function e(a){a.css("display","")}function f(a){a.css("display","none")}function i(a,c,d){d?d.after(a):c.append(a)}
function h(a){a.remove()}function j(a,c,d){i(a,c,d)}return function(g,m){function k(e,f,h){var i=l&&g.$eval(l),e=l?L(i)?i[e]:i+"-"+e:"",j=(i=a(e))&&i.setup,k=i&&i.start;if(e){var m=e+"-setup",q=e+"-start";return function(a,e,g){function i(){h(a,e,g);a.removeClass(m);a.removeClass(q)}if(!d.supportsTransitions&&!j&&!k)f(a,e,g),h(a,e,g);else{a.addClass(m);f(a,e,g);if(a.length==0)return i();var l=(j||t)(a);c.setTimeout(function(){a.addClass(q);if(k)k(a,i,l);else if(I(c.getComputedStyle)){var e=d.vendorPrefix+
"Transition",f=0;o(a,function(a){a=c.getComputedStyle(a)||{};f=Math.max(parseFloat(a.transitionDuration)||parseFloat(a[e+"Duration"])||0,f)});c.setTimeout(i,f*1E3)}else i()},1)}}}else return function(a,c,d){f(a,c,d);h(a,c,d)}}var l=m.ngAnimate,q={};q.enter=k("enter",i,t);q.leave=k("leave",t,h);q.move=k("move",j,t);q.show=k("show",e,t);q.hide=k("hide",t,f);return q}}]},Ib="Non-assignable model expression: ";Hb.$inject=["$provide"];var Cc=/^(x[\:\-_]|data[\:\-_])/i,lb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
bc=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,Jc=bc,Ba={http:80,https:443,ftp:21};mb.prototype={$$replace:!1,absUrl:Ra("$$absUrl"),url:function(a,c){if(u(a))return this.$$url;var d=bc.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Ra("$$protocol"),host:Ra("$$host"),port:Ra("$$port"),path:Mb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(u(a))return this.$$search;w(c)?c===null?delete this.$$search[a]:
this.$$search[a]=c:this.$$search=x(a)?bb(a):a;this.$$compose();return this},hash:Mb("$$hash",pa),replace:function(){this.$$replace=!0;return this}};Qa.prototype=Fa(mb.prototype);Lb.prototype=Fa(Qa.prototype);var Ca={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:t,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return w(d)?w(e)?d+e:d:w(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(w(d)?d:0)-(w(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},
"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":t,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,
c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Nc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},nb={},Yc=/^(([^:]+):)?\/\/(\w+:{0,1}\w*@)?([\w\.-]*)?(:([0-9]+))?(.*)$/,bd=M.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");
};Tb.$inject=["$provide"];Ub.$inject=["$locale"];Wb.$inject=["$locale"];var Zb=".",ld={yyyy:O("FullYear",4),yy:O("FullYear",2,0,!0),y:O("FullYear",1),MMMM:Sa("Month"),MMM:Sa("Month",!0),MM:O("Month",2,1),M:O("Month",1,1),dd:O("Date",2),d:O("Date",1),HH:O("Hours",2),H:O("Hours",1),hh:O("Hours",2,-12),h:O("Hours",1,-12),mm:O("Minutes",2),m:O("Minutes",1),ss:O("Seconds",2),s:O("Seconds",1),sss:O("Milliseconds",3),EEEE:Sa("Day"),EEE:Sa("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},
Z:function(a){var a=-1*a.getTimezoneOffset(),c=a>=0?"+":"";c+=ob(Math[a>0?"floor":"ceil"](a/60),2)+ob(Math.abs(a%60),2);return c}},kd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,jd=/^\d+$/;Vb.$inject=["$locale"];var hd=Q(J),id=Q(na);Xb.$inject=["$parse"];var od=Q({restrict:"E",compile:function(a,c){X<=8&&(!c.href&&!c.name&&c.$set("href",""),a.append(V.createComment("IE fix")));return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),
qb={};o(Oa,function(a,c){var d=aa("ng-"+c);qb[d]=function(){return{priority:100,compile:function(){return function(a,f,i){a.$watch(i[d],function(a){i.$set(c,!!a)})}}}}});o(["src","href"],function(a){var c=aa("ng-"+a);qb[c]=function(){return{priority:99,link:function(d,e,f){f.$observe(c,function(c){c&&(f.$set(a,c),X&&e.prop(a,f[a]))})}}}});var Va={$addControl:t,$removeControl:t,$setValidity:t,$setDirty:t,$setPristine:t};$b.$inject=["$element","$attrs","$scope"];var Ya=function(a){return["$timeout",
function(c){var d={name:"form",restrict:"E",controller:$b,compile:function(){return{pre:function(a,d,i,h){if(!i.action){var j=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};ac(d[0],"submit",j);d.bind("$destroy",function(){c(function(){ib(d[0],"submit",j)},0,!1)})}var g=d.parent().controller("form"),m=i.name||i.ngForm;m&&(a[m]=h);g&&d.bind("$destroy",function(){g.$removeControl(h);m&&(a[m]=s);y(h,Va)})}}}};return a?y(W(d),{restrict:"EAC"}):d}]},pd=Ya(),qd=Ya(!0),rd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
sd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,td=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,cc={text:Xa,number:function(a,c,d,e,f,i){Xa(a,c,d,e,f,i);e.$parsers.push(function(a){var c=U(a);return c||td.test(a)?(e.$setValidity("number",!0),a===""?null:c?a:parseFloat(a)):(e.$setValidity("number",!1),s)});e.$formatters.push(function(a){return U(a)?"":""+a});if(d.min){var h=parseFloat(d.min),a=function(a){return!U(a)&&a<h?(e.$setValidity("min",!1),s):(e.$setValidity("min",!0),a)};e.$parsers.push(a);
e.$formatters.push(a)}if(d.max){var j=parseFloat(d.max),d=function(a){return!U(a)&&a>j?(e.$setValidity("max",!1),s):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return U(a)||Za(a)?(e.$setValidity("number",!0),a):(e.$setValidity("number",!1),s)})},url:function(a,c,d,e,f,i){Xa(a,c,d,e,f,i);a=function(a){return U(a)||rd.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,
c,d,e,f,i){Xa(a,c,d,e,f,i);a=function(a){return U(a)||sd.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){u(d.name)&&c.attr("name",Ea());c.bind("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,i=d.ngFalseValue;x(f)||(f=!0);x(i)||(i=!1);c.bind("click",
function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:i})},hidden:t,button:t,submit:t,reset:t},dc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,i){i&&(cc[J(f.type)]||cc.text)(d,e,f,i,c,a)}}}],Ua="ng-valid",Ta="ng-invalid",oa="ng-pristine",Wa="ng-dirty",ud=["$scope","$exceptionHandler","$attrs","$element","$parse",
function(a,c,d,e,f){function i(a,c){c=c?"-"+db(c,"-"):"";e.removeClass((a?Ta:Ua)+c).addClass((a?Ua:Ta)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=f(d.ngModel),j=h.assign;if(!j)throw Error(Ib+d.ngModel+" ("+ta(e)+")");this.$render=t;var g=e.inheritedData("$formController")||Va,m=0,k=this.$error={};e.addClass(oa);i(!0);this.$setValidity=function(a,
c){if(k[a]!==!c){if(c){if(k[a]&&m--,!m)i(!0),this.$valid=!0,this.$invalid=!1}else i(!1),this.$invalid=!0,this.$valid=!1,m++;k[a]=!c;i(c,a);g.$setValidity(a,c,this)}};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(Wa).addClass(oa)};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=!1,e.removeClass(oa).addClass(Wa),g.$setDirty();o(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,j(a,d),o(this.$viewChangeListeners,
function(a){try{a()}catch(d){c(d)}})};var l=this;a.$watch(function(){var c=h(a);if(l.$modelValue!==c){var d=l.$formatters,e=d.length;for(l.$modelValue=c;e--;)c=d[e](c);if(l.$viewValue!==c)l.$viewValue=c,l.$render()}})}],vd=function(){return{require:["ngModel","^?form"],controller:ud,link:function(a,c,d,e){var f=e[0],i=e[1]||Va;i.$addControl(f);c.bind("$destroy",function(){i.$removeControl(f)})}}},wd=Q({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
ec=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&(U(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},xd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&o(a.split(f),function(a){a&&c.push(S(a))});
return c});e.$formatters.push(function(a){return C(a)?a.join(", "):s})}}},yd=/^(true|false|\d+)$/,zd=function(){return{priority:100,compile:function(a,c){return yd.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a,!1)})}}}},Ad=Y(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),Bd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));
d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],Cd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],Dd=pb("",!0),Ed=pb("Odd",0),Fd=pb("Even",1),Gd=Y({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Hd=[function(){return{scope:!0,controller:"@"}}],Id=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],
fc={};o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress".split(" "),function(a){var c=aa("ng-"+a);fc[c]=["$parse",function(d){return function(e,f,i){var h=d(i[c]);f.bind(J(a),function(a){e.$apply(function(){h(e,{$event:a})})})}}]});var Jd=Y(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),Kd=["$http","$templateCache","$anchorScroll","$compile","$animator",function(a,c,d,e,f){return{restrict:"ECA",terminal:!0,compile:function(i,
h){var j=h.ngInclude||h.src,g=h.onload||"",m=h.autoscroll;return function(h,i,o){var n=f(h,o),s=0,r,p=function(){r&&(r.$destroy(),r=null);n.leave(i.contents(),i)};h.$watch(j,function(f){var j=++s;f?a.get(f,{cache:c}).success(function(a){j===s&&(r&&r.$destroy(),r=h.$new(),n.leave(i.contents(),i),a=v("<div/>").html(a).contents(),n.enter(a,i),e(a)(r),w(m)&&(!m||h.$eval(m))&&d(),r.$emit("$includeContentLoaded"),h.$eval(g))}).error(function(){j===s&&p()}):p()})}}}}],Ld=Y({compile:function(){return{pre:function(a,
c,d){a.$eval(d.ngInit)}}}}),Md=Y({terminal:!0,priority:1E3}),Nd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,i){var h=i.count,j=f.attr(i.$attr.when),g=i.offset||0,m=e.$eval(j),k={},l=c.startSymbol(),q=c.endSymbol();o(m,function(a,e){k[e]=c(a.replace(d,l+h+"-"+g+q))});e.$watch(function(){var c=parseFloat(e.$eval(h));return isNaN(c)?"":(m[c]||(c=a.pluralCat(c-g)),k[c](e,f,!0))},function(a){f.text(a)})}}}],Od=["$parse","$animator",function(a,c){return{transclude:"element",
priority:1E3,terminal:!0,compile:function(d,e,f){return function(d,e,j){var g=c(d,j),m=j.ngRepeat,k=m.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),l,q,n,s,r,p={$id:la};if(!k)throw Error("Expected ngRepeat in form of '_item_ in _collection_[ track by _id_]' but got '"+m+"'.");j=k[1];n=k[2];(k=k[4])?(l=a(k),q=function(a,c,e){r&&(p[r]=a);p[s]=c;p.$index=e;return l(d,p)}):q=function(a,c){return la(c)};k=j.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!k)throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '"+
j+"'.");s=k[3]||k[1];r=k[2];var y={};d.$watchCollection(n,function(a){var c,j,k=e,l,n={},p,t,v,z,w,u,x=[];if(C(a))w=a;else{w=[];for(v in a)a.hasOwnProperty(v)&&v.charAt(0)!="$"&&w.push(v);w.sort()}p=w.length;j=x.length=w.length;for(c=0;c<j;c++)if(v=a===w?c:w[c],z=a[v],l=q(v,z,c),u=y[l])delete y[l],n[l]=u,x[c]=u;else if(n.hasOwnProperty(l))throw o(x,function(a){a&&a.element&&(y[a.id]=a)}),Error("Duplicates in a repeater are not allowed. Repeater: "+m);else x[c]={id:l};for(v in y)if(y.hasOwnProperty(v))u=
y[v],g.leave(u.element),u.element[0].$$NG_REMOVED=!0,u.scope.$destroy();c=0;for(j=w.length;c<j;c++){v=a===w?c:w[c];z=a[v];u=x[c];if(u.element){t=u.scope;l=k[0];do l=l.nextSibling;while(l&&l.$$NG_REMOVED);u.element[0]!=l&&g.move(u.element,null,k);k=u.element}else t=d.$new();t[s]=z;r&&(t[r]=v);t.$index=c;t.$first=c===0;t.$last=c===p-1;t.$middle=!(t.$first||t.$last);u.element||f(t,function(a){g.enter(a,null,k);k=a;u.scope=t;u.element=a;n[u.id]=u})}y=n})}}}}],Pd=["$animator",function(a){return function(c,
d,e){var f=a(c,e);c.$watch(e.ngShow,function(a){f[Ha(a)?"show":"hide"](d)})}}],Qd=["$animator",function(a){return function(c,d,e){var f=a(c,e);c.$watch(e.ngHide,function(a){f[Ha(a)?"hide":"show"](d)})}}],Rd=Y(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&o(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Sd=["$animator",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var i=a(c,e),h,j,g=[];c.$watch(e.ngSwitch||
e.on,function(a){for(var d=0,l=g.length;d<l;d++)g[d].$destroy(),i.leave(j[d]);j=[];g=[];if(h=f.cases["!"+a]||f.cases["?"])c.$eval(e.change),o(h,function(a){var d=c.$new();g.push(d);a.transclude(d,function(c){var d=a.element;j.push(c);i.enter(c,d.parent(),d)})})})}}}],Td=Y({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,f,i,h){h.cases["!"+c.ngSwitchWhen]=h.cases["!"+c.ngSwitchWhen]||[];h.cases["!"+c.ngSwitchWhen].push({transclude:d,element:f})}}}),Ud=
Y({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,c,i,h){h.cases["?"]=h.cases["?"]||[];h.cases["?"].push({transclude:d,element:c})}}}),Vd=Y({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),Wd=["$http","$templateCache","$route","$anchorScroll","$compile","$controller","$animator",function(a,c,d,e,f,i,h){return{restrict:"ECA",terminal:!0,link:function(a,c,m){function k(){var h=d.current&&d.current.locals,k=h&&h.$template;
if(k){n.leave(c.contents(),c);l&&(l.$destroy(),l=null);n.enter(v("<div></div>").html(k).contents(),c);var k=f(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)h.$scope=l,h=i(m.controller,h),c.children().data("$ngControllerController",h);k(l);l.$emit("$viewContentLoaded");l.$eval(o);e()}else n.leave(c.contents(),c),l&&(l.$destroy(),l=null)}var l,o=m.onload||"",n=h(a,m);a.$on("$routeChangeSuccess",k);k()}}}],Xd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,
d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Yd=Q({terminal:!0}),Zd=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:t};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var j=this,g={},m=e,k;j.databound=d.ngModel;j.init=function(a,c,d){m=a;k=d};j.addOption=function(c){g[c]=
!0;m.$viewValue==c&&(a.val(c),k.parent()&&k.remove())};j.removeOption=function(a){this.hasOption(a)&&(delete g[a],m.$viewValue==a&&this.renderUnknownOption(a))};j.renderUnknownOption=function(c){c="? "+la(c)+" ?";k.val(c);a.prepend(k);a.val(c);k.prop("selected",!0)};j.hasOption=function(a){return g.hasOwnProperty(a)};c.$on("$destroy",function(){j.renderUnknownOption=t})}],link:function(e,i,h,j){function g(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),
a===""&&p.prop("selected",!0)):u(a)&&p?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Pa(d.$viewValue);o(c.find("option"),function(c){c.selected=w(a.get(c.value))})};a.$watch(function(){ja(e,d.$viewValue)||(e=W(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];o(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}
function k(e,f,h){function g(){var a={"":[]},c=[""],d,i,t,v,u;t=h.$modelValue;v=p(e)||[];var w=l?rb(v):v,z,x,A;x={};u=!1;var B,C;if(n)u=new Pa(t);else if(t===null||r)a[""].push({selected:t===null,id:"",label:""}),u=!0;for(A=0;z=w.length,A<z;A++){x[k]=v[l?x[l]=w[A]:A];d=m(e,x)||"";if(!(i=a[d]))i=a[d]=[],c.push(d);n?d=u.remove(o(e,x))!=s:(d=t===o(e,x),u=u||d);B=j(e,x);B=B===s?"":B;i.push({id:l?w[A]:A,label:B,selected:d})}!n&&!u&&a[""].unshift({id:"?",label:"",selected:!0});x=0;for(w=c.length;x<w;x++){d=
c[x];i=a[d];if(q.length<=x)t={element:D.clone().attr("label",d),label:i.label},v=[t],q.push(v),f.append(t.element);else if(v=q[x],t=v[0],t.label!=d)t.element.attr("label",t.label=d);B=null;A=0;for(z=i.length;A<z;A++)if(d=i[A],u=v[A+1]){B=u.element;if(u.label!==d.label)B.text(u.label=d.label);if(u.id!==d.id)B.val(u.id=d.id);if(u.element.selected!==d.selected)B.prop("selected",u.selected=d.selected)}else d.id===""&&r?C=r:(C=y.clone()).val(d.id).attr("selected",d.selected).text(d.label),v.push({element:C,
label:d.label,id:d.id,selected:d.selected}),B?B.after(C):t.element.append(C),B=C;for(A++;v.length>A;)v.pop().element.remove()}for(;q.length>x;)q.pop()[0].element.remove()}var i;if(!(i=t.match(d)))throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+t+"'.");var j=c(i[2]||i[1]),k=i[4]||i[6],l=i[5],m=c(i[3]||""),o=c(i[2]?i[1]:k),p=c(i[7]),q=[[{element:f,label:""}]];r&&(a(r)(e),r.removeClass("ng-scope"),r.remove());f.html("");f.bind("change",
function(){e.$apply(function(){var a,c=p(e)||[],d={},g,i,j,m,r,t;if(n){i=[];m=0;for(t=q.length;m<t;m++){a=q[m];j=1;for(r=a.length;j<r;j++)if((g=a[j].element)[0].selected)g=g.val(),l&&(d[l]=g),d[k]=c[g],i.push(o(e,d))}}else g=f.val(),g=="?"?i=s:g==""?i=null:(d[k]=c[g],l&&(d[l]=g),i=o(e,d));h.$setViewValue(i)})});h.$render=g;e.$watch(g)}if(j[1]){for(var l=j[0],q=j[1],n=h.multiple,t=h.ngOptions,r=!1,p,y=v(V.createElement("option")),D=v(V.createElement("optgroup")),x=y.clone(),j=0,C=i.children(),A=C.length;j<
A;j++)if(C[j].value==""){p=r=C.eq(j);break}l.init(q,r,x);if(n&&(h.required||h.ngRequired)){var H=function(a){q.$setValidity("required",!h.required||a&&a.length);return a};q.$parsers.push(H);q.$formatters.unshift(H);h.$observe("required",function(){H(q.$viewValue)})}t?k(e,i,q):n?m(e,i,q):g(e,i,q,l)}}}}],$d=["$interpolate",function(a){var c={addOption:t,removeOption:t};return{restrict:"E",priority:100,compile:function(d,e){if(u(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,
d,e){var g=d.parent(),m=g.data("$selectController")||g.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.bind("$destroy",function(){m.removeOption(e.value)})}}}}],ae=Q({restrict:"E",terminal:!0});(ca=M.jQuery)?(v=ca,y(ca.fn,{scope:za.scope,controller:za.controller,injector:za.injector,inheritedData:za.inheritedData}),fb("remove",!0),fb("empty"),fb("html")):v=P;Ia.element=
v;(function(a){y(a,{bootstrap:vb,copy:W,extend:y,equals:ja,element:v,forEach:o,injector:wb,noop:t,bind:ab,toJson:da,fromJson:tb,identity:pa,isUndefined:u,isDefined:w,isString:x,isFunction:I,isObject:L,isNumber:Za,isElement:jc,isArray:C,version:md,isDate:qa,lowercase:J,uppercase:na,callbacks:{counter:0},noConflict:gc});xa=oc(M);try{xa("ngLocale")}catch(c){xa("ngLocale",[]).provider("$locale",cd)}xa("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",Hb).directive({a:od,input:dc,textarea:dc,
form:pd,script:Xd,select:Zd,style:ae,option:$d,ngBind:Ad,ngBindHtmlUnsafe:Cd,ngBindTemplate:Bd,ngClass:Dd,ngClassEven:Fd,ngClassOdd:Ed,ngCsp:Id,ngCloak:Gd,ngController:Hd,ngForm:qd,ngHide:Qd,ngInclude:Kd,ngInit:Ld,ngNonBindable:Md,ngPluralize:Nd,ngRepeat:Od,ngShow:Pd,ngSubmit:Jd,ngStyle:Rd,ngSwitch:Sd,ngSwitchWhen:Td,ngSwitchDefault:Ud,ngOptions:Yd,ngView:Wd,ngTransclude:Vd,ngModel:vd,ngList:xd,ngChange:wd,required:ec,ngRequired:ec,ngValue:zd}).directive(qb).directive(fc);a.provider({$anchorScroll:xc,
$animation:Gb,$animator:nd,$browser:zc,$cacheFactory:Ac,$controller:Dc,$document:Ec,$exceptionHandler:Fc,$filter:Tb,$interpolate:Gc,$http:Zc,$httpBackend:$c,$location:Kc,$log:Lc,$parse:Pc,$route:Sc,$routeParams:Tc,$rootScope:Uc,$q:Qc,$sniffer:Vc,$templateCache:Bc,$timeout:dd,$window:Wc})}])})(Ia);v(V).ready(function(){mc(V,vb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');

/*
 AngularJS v1.0.6
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C,d,w){'use strict';d.module("ngResource",["ng"]).factory("$resource",["$http","$parse",function(x,y){function s(b,e){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}function t(b,e){this.template=b+="#";this.defaults=e||{};var a=this.urlParams={};h(b.split(/\W/),function(f){f&&RegExp("(^|[^\\\\]):"+f+"\\W").test(b)&&(a[f]=!0)});this.template=b.replace(/\\:/g,":")}function u(b,e,a){function f(m,a){var b=
{},a=o({},e,a);h(a,function(a,z){var c;a.charAt&&a.charAt(0)=="@"?(c=a.substr(1),c=y(c)(m)):c=a;b[z]=c});return b}function g(a){v(a||{},this)}var k=new t(b),a=o({},A,a);h(a,function(a,b){a.method=d.uppercase(a.method);var e=a.method=="POST"||a.method=="PUT"||a.method=="PATCH";g[b]=function(b,c,d,B){var j={},i,l=p,q=null;switch(arguments.length){case 4:q=B,l=d;case 3:case 2:if(r(c)){if(r(b)){l=b;q=c;break}l=c;q=d}else{j=b;i=c;l=d;break}case 1:r(b)?l=b:e?i=b:j=b;break;case 0:break;default:throw"Expected between 0-4 arguments [params, data, success, error], got "+
arguments.length+" arguments.";}var n=this instanceof g?this:a.isArray?[]:new g(i);x({method:a.method,url:k.url(o({},f(i,a.params||{}),j)),data:i}).then(function(b){var c=b.data;if(c)a.isArray?(n.length=0,h(c,function(a){n.push(new g(a))})):v(c,n);(l||p)(n,b.headers)},q);return n};g.prototype["$"+b]=function(a,d,h){var m=f(this),j=p,i;switch(arguments.length){case 3:m=a;j=d;i=h;break;case 2:case 1:r(a)?(j=a,i=d):(m=a,j=d||p);case 0:break;default:throw"Expected between 1-3 arguments [params, success, error], got "+
arguments.length+" arguments.";}g[b].call(this,m,e?this:w,j,i)}});g.bind=function(d){return u(b,o({},e,d),a)};return g}var A={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},p=d.noop,h=d.forEach,o=d.extend,v=d.copy,r=d.isFunction;t.prototype={url:function(b){var e=this,a=this.template,f,g,b=b||{};h(this.urlParams,function(h,c){f=b.hasOwnProperty(c)?b[c]:e.defaults[c];d.isDefined(f)&&f!==null?(g=s(f,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+"),a=a.replace(RegExp(":"+c+"(\\W)","g"),g+"$1")):a=a.replace(RegExp("(/?):"+c+"(\\W)","g"),function(a,b,c){return c.charAt(0)=="/"?c:b+c})});var a=a.replace(/\/?#$/,""),k=[];h(b,function(a,b){e.urlParams[b]||k.push(s(b)+"="+s(a))});k.sort();a=a.replace(/\/*$/,"");return a+(k.length?"?"+k.join("&"):"")}};return u}])})(window,window.angular);

/*
 * jQuery File Upload AngularJS Plugin 1.0.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true */
/*global angular */

(function () {
    'use strict';

    angular.module('blueimp.fileupload', [])

        .provider('fileUpload', function () {
            var scopeApply = function () {
                    var scope = angular.element(this)
                        .fileupload('option', 'scope')();
                    if (!scope.$$phase) {
                        scope.$apply();
                    }
                },
                $config;
            $config = this.defaults = {
                handleResponse: function (e, data) {
                    var files = data.result && data.result.files;
                    if (files) {
                        data.scope().replace(data.files, files);
                    } else if (data.errorThrown ||
                            data.textStatus === 'error') {
                        data.files[0].error = data.errorThrown ||
                            data.textStatus;
                    }
                },
                add: function (e, data) {
                    var scope = data.scope();
                    data.process(function () {
                        return scope.process(data);
                    }).always(
                        function () {
                            var file = data.files[0],
                                submit = function () {
                                    return data.submit();
                                };
                            file.$cancel = function () {
                                scope.clear(data.files);
                                return data.abort();
                            };
                            file.$state = function () {
                                return data.state();
                            };
                            file.$progress = function () {
                                return data.progress();
                            };
                            file.$response = function () {
                                return data.response();
                            };
                            if (file.$state() === 'rejected') {
                                file._$submit = submit;
                            } else {
                                file.$submit = submit;
                            }
                            scope.$apply(function () {
                                var method = scope.option('prependFiles') ?
                                        'unshift' : 'push';
                                Array.prototype[method].apply(
                                    scope.queue,
                                    data.files
                                );
                                if (file.$submit &&
                                        (scope.option('autoUpload') ||
                                        data.autoUpload) &&
                                        data.autoUpload !== false) {
                                    file.$submit();
                                }
                            });
                        }
                    );
                },
                progress: function (e, data) {
                    data.scope().$apply();
                },
                done: function (e, data) {
                    var that = this;
                    data.scope().$apply(function () {
                        data.handleResponse.call(that, e, data);
                    });
                },
                fail: function (e, data) {
                    var that = this;
                    if (data.errorThrown === 'abort') {
                        return;
                    }
                    if (data.dataType.indexOf('json') === data.dataType.length - 4) {
                        try {
                            data.result = angular.fromJson(data.jqXHR.responseText);
                        } catch (err) {}
                    }
                    data.scope().$apply(function () {
                        data.handleResponse.call(that, e, data);
                    });
                },
                stop: scopeApply,
                processstart: scopeApply,
                processstop: scopeApply,
                getNumberOfFiles: function () {
                    return this.scope().queue.length;
                },
                dataType: 'json',
                prependFiles: true,
                autoUpload: false
            };
            this.$get = [
                function () {
                    return {
                        defaults: $config
                    };
                }
            ];
        })

        .provider('formatFileSizeFilter', function () {
            var $config = this.defaults = {
                // Byte units following the IEC format
                // http://en.wikipedia.org/wiki/Kilobyte
                units: [
                    {size: 1000000000, suffix: ' GB'},
                    {size: 1000000, suffix: ' MB'},
                    {size: 1000, suffix: ' KB'}
                ]
            };
            this.$get = function () {
                return function (bytes) {
                    if (!angular.isNumber(bytes)) {
                        return '';
                    }
                    var unit = true,
                        i = -1;
                    while (unit) {
                        unit = $config.units[i += 1];
                        if (i === $config.units.length - 1 || bytes >= unit.size) {
                            return (bytes / unit.size).toFixed(2) + unit.suffix;
                        }
                    }
                };
            };
        })

        .controller('FileUploadController', [
            '$scope', '$element', '$attrs', 'fileUpload',
            function ($scope, $element, $attrs, fileUpload) {
                $scope.disabled = angular.element('<input type="file">')
                    .prop('disabled');
                $scope.queue = $scope.queue || [];
                $scope.clear = function (files) {
                    var queue = this.queue,
                        i = queue.length,
                        file = files,
                        length = 1;
                    if (angular.isArray(files)) {
                        file = files[0];
                        length = files.length;
                    }
                    while (i) {
                        if (queue[i -= 1] === file) {
                            return queue.splice(i, length);
                        }
                    }
                };
                $scope.replace = function (oldFiles, newFiles) {
                    var queue = this.queue,
                        file = oldFiles[0],
                        i,
                        j;
                    for (i = 0; i < queue.length; i += 1) {
                        if (queue[i] === file) {
                            for (j = 0; j < newFiles.length; j += 1) {
                                queue[i + j] = newFiles[j];
                            }
                            return;
                        }
                    }
                };
                $scope.progress = function () {
                    return $element.fileupload('progress');
                };
                $scope.active = function () {
                    return $element.fileupload('active');
                };
                $scope.option = function (option, data) {
                    return $element.fileupload('option', option, data);
                };
                $scope.add = function (data) {
                    return $element.fileupload('add', data);
                };
                $scope.send = function (data) {
                    return $element.fileupload('send', data);
                };
                $scope.process = function (data) {
                    return $element.fileupload('process', data);
                };
                $scope.processing = function (data) {
                    return $element.fileupload('processing', data);
                };
                $scope.applyOnQueue = function (method) {
                    var list = this.queue.slice(0),
                        i,
                        file;
                    for (i = 0; i < list.length; i += 1) {
                        file = list[i];
                        if (file[method]) {
                            file[method]();
                        }
                    }
                };
                $scope.submit = function () {
                    this.applyOnQueue('$submit');
                };
                $scope.cancel = function () {
                    this.applyOnQueue('$cancel');
                };
                // The fileupload widget will initialize with
                // the options provided via "data-"-parameters,
                // as well as those given via options object:
                $element.fileupload(angular.extend(
                    {scope: function () {
                        return $scope;
                    }},
                    fileUpload.defaults
                )).on('fileuploadadd', function (e, data) {
                    data.scope = $scope.option('scope');
                }).on([
                    'fileuploadadd',
                    'fileuploadsubmit',
                    'fileuploadsend',
                    'fileuploaddone',
                    'fileuploadfail',
                    'fileuploadalways',
                    'fileuploadprogress',
                    'fileuploadprogressall',
                    'fileuploadstart',
                    'fileuploadstop',
                    'fileuploadchange',
                    'fileuploadpaste',
                    'fileuploaddrop',
                    'fileuploaddragover',
                    'fileuploadchunksend',
                    'fileuploadchunkdone',
                    'fileuploadchunkfail',
                    'fileuploadchunkalways',
                    'fileuploadprocessstart',
                    'fileuploadprocess',
                    'fileuploadprocessdone',
                    'fileuploadprocessfail',
                    'fileuploadprocessalways',
                    'fileuploadprocessstop'
                ].join(' '), function (e, data) {
                    $scope.$emit(e.type, data);
                });
                // Observe option changes:
                $scope.$watch(
                    $attrs.fileupload,
                    function (newOptions, oldOptions) {
                        if (newOptions) {
                            $element.fileupload('option', newOptions);
                        }
                    }
                );
            }
        ])

        .controller('FileUploadProgressController', [
            '$scope', '$attrs', '$parse',
            function ($scope, $attrs, $parse) {
                var fn = $parse($attrs.progress),
                    update = function () {
                        var progress = fn($scope);
                        if (!progress || !progress.total) {
                            return;
                        }
                        $scope.num = Math.floor(
                            progress.loaded / progress.total * 100
                        );
                    };
                update();
                $scope.$watch(
                    $attrs.progress + '.loaded',
                    function (newValue, oldValue) {
                        if (newValue !== oldValue) {
                            update();
                        }
                    }
                );
            }
        ])

        .controller('FileUploadPreviewController', [
            '$scope', '$element', '$attrs', '$parse',
            function ($scope, $element, $attrs, $parse) {
                var fn = $parse($attrs.preview),
                    file = fn($scope);
                if (file.preview) {
                    $element.append(file.preview);
                }
            }
        ])

        .directive('fileupload', function () {
            return {
                controller: 'FileUploadController'
            };
        })

        .directive('progress', function () {
            return {
                controller: 'FileUploadProgressController'
            };
        })

        .directive('preview', function () {
            return {
                controller: 'FileUploadPreviewController'
            };
        })

        .directive('download', function () {
            return function (scope, elm, attrs) {
                elm.on('dragstart', function (e) {
                    try {
                        e.originalEvent.dataTransfer.setData(
                            'DownloadURL',
                            [
                                'application/octet-stream',
                                elm.prop('download'),
                                elm.prop('href')
                            ].join(':')
                        );
                    } catch (err) {}
                });
            };
        });

}());

(function() {
'use strict';
var App = angular.module('mesFichiers', ['ngResource', 'blueimp.fileupload']);

App.factory('MonAlbum', [
    '$resource',
    function ($resource) {
        return $resource('/mes_fichiers/rest/albums/:id', {
            id: '@id' //this binds the ID of the model to the URL param
        }, {
            query: { method: 'GET', isArray: true },
            save: { method: 'PUT' },
            create: { method: 'POST' },
            destroy: { method: 'DELETE' }
        });
    }
]);

App.factory('MonFichier', [
    '$resource',
    function ($resource) {
        return $resource('/mes_fichiers/rest/files/:id', {
            id: '@id' //this binds the ID of the model to the URL param
        }, {
            query: { method: 'GET', isArray: true },
            save: { method: 'PUT' },
            create: { method: 'POST' },
            destroy: { method: 'DELETE' }
        });
    }
]);

App.config([
    '$httpProvider',
    function($httpProvider) {
        var headers = $httpProvider.defaults.headers;
        var token = document.querySelector('input[name=csrfmiddlewaretoken]');

        headers.common['X-CSRFToken'] = token.value;
        // jQuery-file-upload uses jQuery.ajax
        jQuery.ajaxSetup({
            headers: { 'X-CSRFToken': token.value }
        });
    }
]);

App.config([
    '$httpProvider', 'fileUploadProvider',
    function ($httpProvider, fileUploadProvider) {
        angular.extend(fileUploadProvider.defaults, {
            disableImageResize: true,
            previewMaxWidth: 158,
            previewMaxHeight: 140,
            previewCrop: true,
            maxFileSize: 5000000,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            autoUpload: true
        });
    }
]);

App.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/mes_fichiers/', {
            templateUrl: 'albums.html',
            controller: 'AlbumsController',
            resolve: { albums: 'retrieveAlbums' }
        });

        $routeProvider.when('/mes_fichiers/album/', {
            templateUrl: 'album.html',
            controller: 'NewAlbumController',
            resolve: { albums: 'retrieveAlbums' }
        });

        $routeProvider.when('/mes_fichiers/album/:albumId', {
            templateUrl: 'album.html',
            controller: 'AlbumController',
            resolve: { albums: 'retrieveAlbums',
                       album: retrieveAlbum }
        });

        $routeProvider.otherwise({
            redirectTo: '/mes_fichiers/'
        });

        $locationProvider.html5Mode(true);
    }
]);

App
.controller('AlbumsController', [
    '$rootScope', 'albums',
    function AlbumsController($rootScope, albums) {
        $rootScope.activeAlbum = null;
        $rootScope.albums = albums;
    }
])
.service('retrieveAlbums', [
    '$rootScope', '$q', 'MonAlbum',
    function($rootScope, $q, MonAlbum) {
        var albumsLoaded = $q.defer();

        if ($rootScope.albums) {
            albumsLoaded.resolve($rootScope.albums);
        } else {
            MonAlbum.query(onAlbumsReceived);
        }

        function onAlbumsReceived(albums) {
            var albumsObj = $rootScope.albums = {};
            for (var i = 0, len = albums.length; i < len; i++) {
                var album = albums[i];
                album.files_count = album.files.length;
                albumsObj[album.id] = album;
            }
            albumsLoaded.resolve(albumsObj);
        }

        return albumsLoaded.promise;
    }
]);

App
.controller('AlbumController', [
    '$scope', '$rootScope', '$location', 'MonAlbum', 'albums', 'album',
    function AlbumController($scope, $rootScope, $location, MonAlbum, albums, album) {
        album = $scope.album = angular.extend(albums[album.id], album);
        album._fetched = true;
        $scope.queue = album.files;
        $rootScope.activeAlbum = album.id;

        $scope.saveAlbum = function() {
            if ($scope.albumForm.$valid) {
                new MonAlbum({
                    id: album.id,
                    name: album.name,
                    description: album.description
                }).$save(function() {
                    $scope.albumForm.$setPristine();
                });
            }
        };

        $scope.removeAlbum = function() {
            if (confirm('Are you sure you want to remove this album?')) {
                new MonAlbum({id: album.id}).$destroy(function() {
                    delete albums[album.id];
                    $location.url('/mes_fichiers/');
                });
            }
        };

        $scope.setCover = function() {
            new MonAlbum({
                id: album.id,
                cover: album.cover && album.cover.id
            }).$save(updateAlbum);
        };

        $scope.$on('fileuploaddone', function(e, data) {
            var file = data.result;
            var queuedFile = data.files[0];
            angular.extend(queuedFile, data.result);
            ++album.files_count;
        });

        function updateAlbum(updatedAlbum) {
            angular.extend(album, updatedAlbum);
        }
    }
]);

function retrieveAlbum($rootScope, $q, $route, MonAlbum) {
    var albumId = Number($route.current.params.albumId);

    function getFromRootScope() {
        if ($rootScope.albums) {
            var album = $rootScope.albums[albumId];
            if (album && album._fetched) {
                return album;
            }
        }
    }

    function getPromiseForAlbum() {
        var albumLoaded = $q.defer();
        MonAlbum.get({ id: albumId }, function(album) {
            albumLoaded.resolve(album);
        });
        return albumLoaded.promise;
    }

    return getFromRootScope() || getPromiseForAlbum();
}
retrieveAlbum.$inject = ['$rootScope', '$q', '$route', 'MonAlbum'];

App.controller('NewAlbumController', [
    '$scope', '$rootScope', '$location', 'MonAlbum',
    function NewAlbumController($scope, $rootScope, $location, MonAlbum) {
        $rootScope.activeAlbum = 'new';
        $scope.album = {
            files_count: 0
        };

        $scope.saveAlbum = function() {
            if (this.albumForm.$valid) {
                new MonAlbum($scope.album).$create(onAlbumCreated);
            }
        };

        function onAlbumCreated(newAlbum) {
            newAlbum = angular.extend($scope.album, newAlbum);
            $rootScope.albums[newAlbum.id] = newAlbum;
            $location.url('/mes_fichiers/album/' + newAlbum.id);
        }
    }
]);

App.controller('FileController', [
    '$scope', 'MonFichier',
    function($scope, MonFichier) {
        var album = $scope.$parent.album;
        var file = $scope.file;

        if (file.error) {
            file.$deleted = true;
        }

        // Newly uploaded file is instance of File,
        // File.name is only getter, so the model needs another field
        file.name_ = file.name;

        $scope.saveFile = function() {
            if ($scope.fileForm.$valid) {
                new MonFichier({
                    id: file.id,
                    name: file.name_,
                    description: file.description
                }).$save(function() {
                    $scope.fileForm.$setPristine();
                });
            }
        };

        $scope.removeFile = function() {
            if (confirm('Are you sure you want to remove this file?')) {
                new MonFichier({id: file.id}).$destroy(removeFileFromAlbum);
            }
        };

        function removeFileFromAlbum() {
            file.$deleted = true;
            --album.files_count;

            if (album.cover && album.cover.id === file.id) {
                album.cover = null;
                $scope.$parent.setCover();
            }
        }
    }
]);

App.directive('ngMonFichier', function() {
    return {
        controller: 'FileController',
        templateUrl: 'file.html',
        scope: false
    };
});
})();
angular.module("mesFichiers").run(["$templateCache", function($templateCache) {

  $templateCache.put("album.html",
    "<div class=\"row\"><form class=\"instance-form album-form span5 clearfix\" name=\"albumForm\" ng-submit=\"saveAlbum()\"><fieldset class=\"cover pull-left\"><div class=\"image\"><img ng-show=\"album.cover\" ng-src=\"{{ album.cover.thumbnail_small }}\" alt=\"{{ album.name }}\"><img ng-hide=\"album.cover\" alt=\"\"></div></fieldset><fieldset class=\"text\"><div class=\"controls\"><input type=\"text\" ng-model=\"album.name\" placeholder=\"Album name\" required=\"\"></div><div class=\"controls\"><textarea ng-model=\"album.description\" placeholder=\"Album description\"></textarea>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"controls clearfix\" ng-show=\"album.id\"><a href=\"\" ng-click=\"removeAlbum()\" class=\"btn btn-link pull-left\">Remove album</a> <button ng-show=\"albumForm.$dirty\" type=\"submit\" class=\"btn btn-link pull-right\">Save</button></div><div class=\"controls clearfix\" ng-hide=\"album.id\"><button type=\"submit\" class=\"btn btn-link pull-right\">Create album</button></div></fieldset></form><form enctype=\"multipart/form-data\" action=\"/mes_fichiers/rest/files/\" method=\"post\" ng-show=\"album.id\" class=\"drop-files-area span4\" data-fileupload=\"options\"><input type=\"file\" name=\"file\" multiple=\"multiple\"><input type=\"hidden\" name=\"album\" value=\"{{ album.id }}\"><div class=\"hint\"><div><i class=\"icon-folder-open\"></i>Click to add files</div><div><i class=\"icon-move\"></i>Or drag and drop new files here</div></div></form></div><ul class=\"images\"><li ng-repeat=\"file in album.files\" class=\"image-item\" ng-mon-fichier=\"\" ng-hide=\"file.$deleted\" ng-class=\"editing && 'editing clearfix'\"></li></ul>"
  );

  $templateCache.put("albums.html",
    "<ul class=\"albums row\"><li class=\"album span3\" ng-repeat=\"album in albums\"><div ng-init=\"editing = false\"><a href=\"\" class=\"album-thumbnail\" ng-href=\"/mes_fichiers/album/{{ album.id }}\"><div class=\"album-title pull-left\" title=\"{{ album.name }}\">{{ album.name }}</div><div class=\"pull-right label\">{{ album.files_count }}</div><img ng-src=\"{{ album.cover.thumbnail_medium }}\"></a></div></li></ul>"
  );

  $templateCache.put("file.html",
    "<a href=\"\" class=\"image pull-left\" ng-click=\"file.id && (editing = !editing)\" title=\"Toggle edit form\"><img ng-show=\"file.thumbnail\" ng-src=\"{{ file.thumbnail }}\" alt=\"{{ file.name_ }}\"><div ng-hide=\"file.thumbnail\" data-preview=\"file\"></div><div ng-hide=\"file.id\" class=\"progress progress-warning progress-striped active\" data-ng-class=\"{pending: 'in'}[file.$state()]\" data-progress=\"file.$progress()\"><div class=\"bar\" ng-style=\"{width: num + '%'}\"></div></div></a><div ng-show=\"editing\"><form class=\"instance-form file-form clearfix\" method=\"post\" ng-submit=\"saveFile()\" name=\"fileForm\"><fieldset class=\"text\"><div class=\"controls\"><input type=\"text\" ng-model=\"file.name_\" placeholder=\"Name\"></div><div class=\"controls\"><textarea ng-model=\"file.description\" placeholder=\"Description\"></textarea>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"controls clearfix\"><a href=\"\" class=\"btn btn-link pull-left\" ng-click=\"removeFile()\">Remove File</a> <button ng-show=\"fileForm.$dirty\" type=\"submit\" class=\"btn btn-link pull-right\">Save</button></div></fieldset></form><fieldset class=\"meta\"><a class=\"full-image-link\" ng-href=\"{{ file.url }}\" target=\"_blank\">Open full image</a><div class=\"controls radio\"><label><input type=\"radio\" ng-change=\"$parent.setCover()\" ng-model=\"$parent.album.cover.id\" value=\"{{ file.id }}\">Set as album cover</label></div><ul class=\"info\"><li class=\"size\">Size: {{ file.size | formatFileSize }}</li><li class=\"uploaded\">Uploaded: {{ file.created_at | date }}</li></ul></fieldset></div>"
  );

  $templateCache.put("nav.html",
    "<ul class=\"nav nav-tabs nav-stacked\"><li ng-class=\"{active: !activeAlbum}\"><a ng-href=\"/mes_fichiers/\">All Albums</a></li><li ng-repeat=\"album in albums\" ng-class=\"{active: activeAlbum == album.id}\"><a ng-href=\"/mes_fichiers/album/{{ album.id }}\" class=\"clearfix\">{{ album.name }} <span class=\"pull-right label\">{{ album.files_count }}</span></a></li><li ng-class=\"{active: activeAlbum == 'new'}\"><a ng-href=\"/mes_fichiers/album/\">Create New Album</a></li></ul>"
  );

}]);
