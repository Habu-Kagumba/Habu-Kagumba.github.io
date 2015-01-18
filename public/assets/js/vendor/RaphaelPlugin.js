/*!
 * VERSION: 0.2.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=/[^\d\-\.]/g,e=Math.PI/180,i=/(\d|\.)+/g,r={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},s=function(t){return"number"==typeof t?[t>>16,255&t>>8,255&t]:""===t||null==t||"none"===t||"string"!=typeof t?r.transparent:r[t]?r[t]:"#"===t.charAt(0)?(4===t.length&&(t="#"+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)+t.charAt(3)+t.charAt(3)),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):t.match(i)||r.transparent},n={scaleX:1,scaleY:1,tx:1,ty:1,rotation:1,shortRotation:1,skewX:1,skewY:1,scale:1},a=function(t,e){var i=t.matrix,r=1e-6,s=i.a,n=i.b,a=i.c,o=i.d,l=e?t._gsTransform||{skewY:0}:{skewY:0},h=0>l.scaleX;return l.tx=i.e-(l.ox||0),l.ty=i.f-(l.oy||0),l.scaleX=Math.sqrt(s*s+n*n),l.scaleY=Math.sqrt(o*o+a*a),l.rotation=s||n?Math.atan2(n,s):l.rotation||0,l.skewX=a||o?Math.atan2(a,o)+l.rotation:l.skewX||0,Math.abs(l.skewX)>Math.PI/2&&(h?(l.scaleX*=-1,l.skewX+=0>=l.rotation?Math.PI:-Math.PI,l.rotation+=0>=l.rotation?Math.PI:-Math.PI):(l.scaleY*=-1,l.skewX+=0>=l.skewX?Math.PI:-Math.PI)),r>l.rotation&&l.rotation>-r&&(s||n)&&(l.rotation=0),r>l.skewX&&l.skewX>-r&&(n||a)&&(l.skewX=0),e&&(t._gsTransform=l),l},o=function(t,e){return null==t?e:"string"==typeof t&&1===t.indexOf("=")?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:Number(t)},l=function(i,r){var s=-1===i.indexOf("rad")?e:1,n=1===i.indexOf("=");return i=Number(i.replace(t,""))*s,n?i+r:i},h=_gsScope._gsDefine.plugin({propName:"raphael",version:"0.2.2",API:2,init:function(e,i,r){if(!e.attr)return!1;this._target=e,this._tween=r,this._props=e._gsProps=e._gsProps||{};var a,o,l,h,u,p,f;for(a in i)l=i[a],"transform"!==a?n[a]||"pivot"===a?this._parseTransform(e,i):(o=e.attr(a),this._firstPT=h={_next:this._firstPT,t:this._props,p:a,b:o,f:!1,n:"raphael_"+a,r:!1,type:0},"fill"===a||"stroke"===a?(u=s(o),p=s(l),h.e=l,h.s=Number(u[0]),h.c=Number(p[0])-h.s,h.gs=Number(u[1]),h.gc=Number(p[1])-h.gs,h.bs=Number(u[2]),h.bc=Number(p[2])-h.bs,u.length>3||p.length>3?(h.as=4>u.length?1:Number(u[3]),h.ac=(4>p.length?1:Number(p[3]))-h.as,h.type=2):h.type=1):(o="string"==typeof o?parseFloat(o.replace(t,"")):Number(o),"string"==typeof l?(f="="===l.charAt(1),l=parseFloat(l.replace(t,""))):f=!1,h.e=l||0===l?f?l+o:l:i[a],!o&&0!==o||!l&&0!==l||!(h.c=f?l:l-o)?(h.type=-1,h.i=i[a],h.s=h.c=0):h.s=o),this._overwriteProps.push("raphael_"+a),h._next&&(h._next._prev=h)):this._parseTransform(e,l);return!0},set:function(t){for(var e,i=this._firstPT;i;)e=i.c*t+i.s,i.r&&(e=Math.round(e)),i.type?1===i.type?i.t[i.p]="rgb("+(e>>0)+", "+(i.gs+t*i.gc>>0)+", "+(i.bs+t*i.bc>>0)+")":2===i.type?i.t[i.p]="rgba("+(e>>0)+", "+(i.gs+t*i.gc>>0)+", "+(i.bs+t*i.bc>>0)+", "+(i.as+t*i.ac)+")":-1===i.type&&(i.t[i.p]=i.i):i.t[i.p]=e,i=i._next;if(this._target.attr(this._props),this._transform){i=this._transform;var r=i.rotation,s=r-i.skewX,n=Math.cos(r)*i.scaleX,a=Math.sin(r)*i.scaleX,o=Math.sin(s)*-i.scaleY,l=Math.cos(s)*i.scaleY,h=1e-6,u=this._pxl,p=this._pyl;h>a&&a>-h&&(a=0),h>o&&o>-h&&(o=0),i.ox=this._pxg-(u*n+p*o),i.oy=this._pyg-(u*a+p*l),this._target.transform("m"+n+","+a+","+o+","+l+","+(i.tx+i.ox)+","+(i.ty+i.oy))}}}),u=h.prototype;u._parseTransform=function(t,i){if(!this._transform){var r,s,h,u,p,f,c,_,d,m=this._transform=a(t,!0),g=1e-6;if("object"==typeof i){if(r={scaleX:o(null!=i.scaleX?i.scaleX:i.scale,m.scaleX),scaleY:o(null!=i.scaleY?i.scaleY:i.scale,m.scaleY),tx:o(i.tx,m.tx),ty:o(i.ty,m.ty)},null!=i.shortRotation){r.rotation="number"==typeof i.shortRotation?i.shortRotation*e:l(i.shortRotation,m.rotation);var v=(r.rotation-m.rotation)%(2*Math.PI);v!==v%Math.PI&&(v+=Math.PI*(0>v?2:-2)),r.rotation=m.rotation+v}else r.rotation=null==i.rotation?m.rotation:"number"==typeof i.rotation?i.rotation*e:l(i.rotation,m.rotation);r.skewX=null==i.skewX?m.skewX:"number"==typeof i.skewX?i.skewX*e:l(i.skewX,m.skewX),r.skewY=null==i.skewY?m.skewY:"number"==typeof i.skewY?i.skewY*e:l(i.skewY,m.skewY),(s=r.skewY-m.skewY)&&(r.skewX+=s,r.rotation+=s),g>r.skewY&&r.skewY>-g&&(r.skewY=0),g>r.skewX&&r.skewX>-g&&(r.skewX=0),g>r.rotation&&r.rotation>-g&&(r.rotation=0),d=i.localPivot||i.globalPivot,"string"==typeof d?(p=d.split(","),f=Number(p[0]),c=Number(p[1])):"object"==typeof d?(f=Number(d.x),c=Number(d.y)):i.localPivot?(p=t.getBBox(!0),f=p.width/2,c=p.height/2):(p=t.getBBox(),f=p.x+p.width/2,c=p.y+p.height/2),i.localPivot?(_=t.matrix,f+=t.attr("x"),c+=t.attr("y"),this._pxl=f,this._pyl=c,this._pxg=f*_.a+c*_.c+_.e-m.tx,this._pyg=f*_.b+c*_.d+_.f-m.ty):(_=t.matrix.invert(),this._pxl=f*_.a+c*_.c+_.e,this._pyl=f*_.b+c*_.d+_.f,this._pxg=f-m.tx,this._pyg=c-m.ty)}else{if("string"!=typeof i)return;p=this._target.transform(),t.transform(i),r=a(t,!1),t.transform(p)}for(h in n)m[h]!==r[h]&&"shortRotation"!==h&&"scale"!==h&&(this._firstPT=u={_next:this._firstPT,t:m,p:h,s:m[h],c:r[h]-m[h],n:h,f:!1,r:!1,b:m[h],e:r[h],type:0},u._next&&(u._next._prev=u),this._overwriteProps.push("raphael_"+h))}}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();