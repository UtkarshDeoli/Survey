"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4076],{8143:function(t,e,n){n.d(e,{x7:function(){return C},X5:function(){return T},Me:function(){return F},oo:function(){return S},US:function(){return L},RR:function(){return V},Cp:function(){return A},Qo:function(){return D},dr:function(){return N},cv:function(){return P},Jv:function(){return O},uY:function(){return E},dp:function(){return j}});var r=n(7848);function i(t,e,n){let i,{reference:o,floating:l}=t,u=(0,r.Qq)(e),f=(0,r.Wh)(e),c=(0,r.I4)(f),a=(0,r.k3)(e),s="y"===u,p=o.x+o.width/2-l.width/2,h=o.y+o.height/2-l.height/2,d=o[c]/2-l[c]/2;switch(a){case"top":i={x:p,y:o.y-l.height};break;case"bottom":i={x:p,y:o.y+o.height};break;case"right":i={x:o.x+o.width,y:h};break;case"left":i={x:o.x-l.width,y:h};break;default:i={x:o.x,y:o.y}}switch((0,r.hp)(e)){case"start":i[f]-=d*(n&&s?-1:1);break;case"end":i[f]+=d*(n&&s?-1:1)}return i}let o=async(t,e,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:l=[],platform:u}=n,f=l.filter(Boolean),c=await (null==u.isRTL?void 0:u.isRTL(e)),a=await u.getElementRects({reference:t,floating:e,strategy:o}),{x:s,y:p}=i(a,r,c),h=r,d={},m=0;for(let n=0;n<f.length;n++){let{name:l,fn:g}=f[n],{x:y,y:w,data:v,reset:x}=await g({x:s,y:p,initialPlacement:r,placement:h,strategy:o,middlewareData:d,rects:a,platform:u,elements:{reference:t,floating:e}});s=null!=y?y:s,p=null!=w?w:p,d={...d,[l]:{...d[l],...v}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(h=x.placement),x.rects&&(a=!0===x.rects?await u.getElementRects({reference:t,floating:e,strategy:o}):x.rects),{x:s,y:p}=i(a,h,c)),n=-1)}return{x:s,y:p,placement:h,strategy:o,middlewareData:d}};async function l(t,e){var n;void 0===e&&(e={});let{x:i,y:o,platform:l,rects:u,elements:f,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:s="viewport",elementContext:p="floating",altBoundary:h=!1,padding:d=0}=(0,r.ku)(e,t),m=(0,r.yd)(d),g=f[h?"floating"===p?"reference":"floating":p],y=(0,r.JB)(await l.getClippingRect({element:null==(n=await (null==l.isElement?void 0:l.isElement(g)))||n?g:g.contextElement||await (null==l.getDocumentElement?void 0:l.getDocumentElement(f.floating)),boundary:a,rootBoundary:s,strategy:c})),w="floating"===p?{x:i,y:o,width:u.floating.width,height:u.floating.height}:u.reference,v=await (null==l.getOffsetParent?void 0:l.getOffsetParent(f.floating)),x=await (null==l.isElement?void 0:l.isElement(v))&&await (null==l.getScale?void 0:l.getScale(v))||{x:1,y:1},b=(0,r.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:w,offsetParent:v,strategy:c}):w);return{top:(y.top-b.top+m.top)/x.y,bottom:(b.bottom-y.bottom+m.bottom)/x.y,left:(y.left-b.left+m.left)/x.x,right:(b.right-y.right+m.right)/x.x}}function u(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function f(t){return r.mA.some(e=>t[e]>=0)}function c(t){let e=(0,r.VV)(...t.map(t=>t.left)),n=(0,r.VV)(...t.map(t=>t.top));return{x:e,y:n,width:(0,r.Fp)(...t.map(t=>t.right))-e,height:(0,r.Fp)(...t.map(t=>t.bottom))-n}}async function a(t,e){let{placement:n,platform:i,elements:o}=t,l=await (null==i.isRTL?void 0:i.isRTL(o.floating)),u=(0,r.k3)(n),f=(0,r.hp)(n),c="y"===(0,r.Qq)(n),a=["left","top"].includes(u)?-1:1,s=l&&c?-1:1,p=(0,r.ku)(e,t),{mainAxis:h,crossAxis:d,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return f&&"number"==typeof m&&(d="end"===f?-1*m:m),c?{x:d*s,y:h*a}:{x:h*a,y:d*s}}var s=n(5224);function p(t){let e=(0,s.Dx)(t),n=parseFloat(e.width)||0,i=parseFloat(e.height)||0,o=(0,s.Re)(t),l=o?t.offsetWidth:n,u=o?t.offsetHeight:i,f=(0,r.NM)(n)!==l||(0,r.NM)(i)!==u;return f&&(n=l,i=u),{width:n,height:i,$:f}}function h(t){return(0,s.kK)(t)?t:t.contextElement}function d(t){let e=h(t);if(!(0,s.Re)(e))return(0,r.ze)(1);let n=e.getBoundingClientRect(),{width:i,height:o,$:l}=p(e),u=(l?(0,r.NM)(n.width):n.width)/i,f=(l?(0,r.NM)(n.height):n.height)/o;return u&&Number.isFinite(u)||(u=1),f&&Number.isFinite(f)||(f=1),{x:u,y:f}}let m=(0,r.ze)(0);function g(t){let e=(0,s.Jj)(t);return(0,s.Pf)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:m}function y(t,e,n,i){var o;void 0===e&&(e=!1),void 0===n&&(n=!1);let l=t.getBoundingClientRect(),u=h(t),f=(0,r.ze)(1);e&&(i?(0,s.kK)(i)&&(f=d(i)):f=d(t));let c=(void 0===(o=n)&&(o=!1),i&&(!o||i===(0,s.Jj)(u))&&o)?g(u):(0,r.ze)(0),a=(l.left+c.x)/f.x,p=(l.top+c.y)/f.y,m=l.width/f.x,y=l.height/f.y;if(u){let t=(0,s.Jj)(u),e=i&&(0,s.kK)(i)?(0,s.Jj)(i):i,n=t,r=(0,s.wK)(n);for(;r&&i&&e!==n;){let t=d(r),e=r.getBoundingClientRect(),i=(0,s.Dx)(r),o=e.left+(r.clientLeft+parseFloat(i.paddingLeft))*t.x,l=e.top+(r.clientTop+parseFloat(i.paddingTop))*t.y;a*=t.x,p*=t.y,m*=t.x,y*=t.y,a+=o,p+=l,n=(0,s.Jj)(r),r=(0,s.wK)(n)}}return(0,r.JB)({width:m,height:y,x:a,y:p})}function w(t){return y((0,s.tF)(t)).left+(0,s.Lw)(t).scrollLeft}function v(t,e,n){let i;if("viewport"===e)i=function(t,e){let n=(0,s.Jj)(t),r=(0,s.tF)(t),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,u=0,f=0;if(i){o=i.width,l=i.height;let t=(0,s.Pf)();(!t||t&&"fixed"===e)&&(u=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:u,y:f}}(t,n);else if("document"===e)i=function(t){let e=(0,s.tF)(t),n=(0,s.Lw)(t),i=t.ownerDocument.body,o=(0,r.Fp)(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),l=(0,r.Fp)(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),u=-n.scrollLeft+w(t),f=-n.scrollTop;return"rtl"===(0,s.Dx)(i).direction&&(u+=(0,r.Fp)(e.clientWidth,i.clientWidth)-o),{width:o,height:l,x:u,y:f}}((0,s.tF)(t));else if((0,s.kK)(e))i=function(t,e){let n=y(t,!0,"fixed"===e),i=n.top+t.clientTop,o=n.left+t.clientLeft,l=(0,s.Re)(t)?d(t):(0,r.ze)(1),u=t.clientWidth*l.x;return{width:u,height:t.clientHeight*l.y,x:o*l.x,y:i*l.y}}(e,n);else{let n=g(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return(0,r.JB)(i)}function x(t){return"static"===(0,s.Dx)(t).position}function b(t,e){return(0,s.Re)(t)&&"fixed"!==(0,s.Dx)(t).position?e?e(t):t.offsetParent:null}function R(t,e){let n=(0,s.Jj)(t);if((0,s.tR)(t))return n;if(!(0,s.Re)(t)){let e=(0,s.Ow)(t);for(;e&&!(0,s.Py)(e);){if((0,s.kK)(e)&&!x(e))return e;e=(0,s.Ow)(e)}return n}let r=b(t,e);for(;r&&(0,s.Ze)(r)&&x(r);)r=b(r,e);return r&&(0,s.Py)(r)&&x(r)&&!(0,s.hT)(r)?n:r||(0,s.gQ)(t)||n}let k=async function(t){let e=this.getOffsetParent||R,n=this.getDimensions,i=await n(t.floating);return{reference:function(t,e,n){let i=(0,s.Re)(e),o=(0,s.tF)(e),l="fixed"===n,u=y(t,!0,l,e),f={scrollLeft:0,scrollTop:0},c=(0,r.ze)(0);if(i||!i&&!l){if(("body"!==(0,s.wk)(e)||(0,s.ao)(o))&&(f=(0,s.Lw)(e)),i){let t=y(e,!0,l,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else o&&(c.x=w(o))}return{x:u.left+f.scrollLeft-c.x,y:u.top+f.scrollTop-c.y,width:u.width,height:u.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},O={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:i,strategy:o}=t,l="fixed"===o,u=(0,s.tF)(i),f=!!e&&(0,s.tR)(e.floating);if(i===u||f&&l)return n;let c={scrollLeft:0,scrollTop:0},a=(0,r.ze)(1),p=(0,r.ze)(0),h=(0,s.Re)(i);if((h||!h&&!l)&&(("body"!==(0,s.wk)(i)||(0,s.ao)(u))&&(c=(0,s.Lw)(i)),(0,s.Re)(i))){let t=y(i);a=d(i),p.x=t.x+i.clientLeft,p.y=t.y+i.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+p.x,y:n.y*a.y-c.scrollTop*a.y+p.y}},getDocumentElement:s.tF,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t,l=[..."clippingAncestors"===n?(0,s.tR)(e)?[]:function(t,e){let n=e.get(t);if(n)return n;let r=(0,s.Kx)(t,[],!1).filter(t=>(0,s.kK)(t)&&"body"!==(0,s.wk)(t)),i=null,o="fixed"===(0,s.Dx)(t).position,l=o?(0,s.Ow)(t):t;for(;(0,s.kK)(l)&&!(0,s.Py)(l);){let e=(0,s.Dx)(l),n=(0,s.hT)(l);n||"fixed"!==e.position||(i=null),(o?!n&&!i:!n&&"static"===e.position&&!!i&&["absolute","fixed"].includes(i.position)||(0,s.ao)(l)&&!n&&function t(e,n){let r=(0,s.Ow)(e);return!(r===n||!(0,s.kK)(r)||(0,s.Py)(r))&&("fixed"===(0,s.Dx)(r).position||t(r,n))}(t,l))?r=r.filter(t=>t!==l):i=e,l=(0,s.Ow)(l)}return e.set(t,r),r}(e,this._c):[].concat(n),i],u=l[0],f=l.reduce((t,n)=>{let i=v(e,n,o);return t.top=(0,r.Fp)(i.top,t.top),t.right=(0,r.VV)(i.right,t.right),t.bottom=(0,r.VV)(i.bottom,t.bottom),t.left=(0,r.Fp)(i.left,t.left),t},v(e,u,o));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},getOffsetParent:R,getElementRects:k,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:n}=p(t);return{width:e,height:n}},getScale:d,isElement:s.kK,isRTL:function(t){return"rtl"===(0,s.Dx)(t).direction}};function F(t,e,n,i){let o;void 0===i&&(i={});let{ancestorScroll:l=!0,ancestorResize:u=!0,elementResize:f="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:a=!1}=i,p=h(t),d=l||u?[...p?(0,s.Kx)(p):[],...(0,s.Kx)(e)]:[];d.forEach(t=>{l&&t.addEventListener("scroll",n,{passive:!0}),u&&t.addEventListener("resize",n)});let m=p&&c?function(t,e){let n,i=null,o=(0,s.tF)(t);function l(){var t;clearTimeout(n),null==(t=i)||t.disconnect(),i=null}return!function u(f,c){void 0===f&&(f=!1),void 0===c&&(c=1),l();let{left:a,top:s,width:p,height:h}=t.getBoundingClientRect();if(f||e(),!p||!h)return;let d=(0,r.GW)(s),m=(0,r.GW)(o.clientWidth-(a+p)),g={rootMargin:-d+"px "+-m+"px "+-(0,r.GW)(o.clientHeight-(s+h))+"px "+-(0,r.GW)(a)+"px",threshold:(0,r.Fp)(0,(0,r.VV)(1,c))||1},y=!0;function w(t){let e=t[0].intersectionRatio;if(e!==c){if(!y)return u();e?u(!1,e):n=setTimeout(()=>{u(!1,1e-7)},1e3)}y=!1}try{i=new IntersectionObserver(w,{...g,root:o.ownerDocument})}catch(t){i=new IntersectionObserver(w,g)}i.observe(t)}(!0),l}(p,n):null,g=-1,w=null;f&&(w=new ResizeObserver(t=>{let[r]=t;r&&r.target===p&&w&&(w.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var t;null==(t=w)||t.observe(e)})),n()}),p&&!a&&w.observe(p),w.observe(e));let v=a?y(t):null;return a&&function e(){let r=y(t);v&&(r.x!==v.x||r.y!==v.y||r.width!==v.width||r.height!==v.height)&&n(),v=r,o=requestAnimationFrame(e)}(),n(),()=>{var t;d.forEach(t=>{l&&t.removeEventListener("scroll",n),u&&t.removeEventListener("resize",n)}),null==m||m(),null==(t=w)||t.disconnect(),w=null,a&&cancelAnimationFrame(o)}}let L=l,P=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,r;let{x:i,y:o,placement:l,middlewareData:u}=e,f=await a(e,t);return l===(null==(n=u.offset)?void 0:n.placement)&&null!=(r=u.arrow)&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:l}}}}},T=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,o,u;let{rects:f,middlewareData:c,placement:a,platform:s,elements:p}=e,{crossAxis:h=!1,alignment:d,allowedPlacements:m=r.Ct,autoAlignment:g=!0,...y}=(0,r.ku)(t,e),w=void 0!==d||m===r.Ct?((u=d||null)?[...m.filter(t=>(0,r.hp)(t)===u),...m.filter(t=>(0,r.hp)(t)!==u)]:m.filter(t=>(0,r.k3)(t)===t)).filter(t=>!u||(0,r.hp)(t)===u||!!g&&(0,r.Go)(t)!==t):m,v=await l(e,y),x=(null==(n=c.autoPlacement)?void 0:n.index)||0,b=w[x];if(null==b)return{};let R=(0,r.i8)(b,f,await (null==s.isRTL?void 0:s.isRTL(p.floating)));if(a!==b)return{reset:{placement:w[0]}};let k=[v[(0,r.k3)(b)],v[R[0]],v[R[1]]],O=[...(null==(i=c.autoPlacement)?void 0:i.overflows)||[],{placement:b,overflows:k}],F=w[x+1];if(F)return{data:{index:x+1,overflows:O},reset:{placement:F}};let L=O.map(t=>{let e=(0,r.hp)(t.placement);return[t.placement,e&&h?t.overflows.slice(0,2).reduce((t,e)=>t+e,0):t.overflows[0],t.overflows]}).sort((t,e)=>t[1]-e[1]),P=(null==(o=L.filter(t=>t[2].slice(0,(0,r.hp)(t[0])?2:3).every(t=>t<=0))[0])?void 0:o[0])||L[0][0];return P!==a?{data:{index:x+1,overflows:O},reset:{placement:P}}:{}}}},E=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:i,placement:o}=e,{mainAxis:u=!0,crossAxis:f=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=(0,r.ku)(t,e),s={x:n,y:i},p=await l(e,a),h=(0,r.Qq)((0,r.k3)(o)),d=(0,r.Rn)(h),m=s[d],g=s[h];if(u){let t="y"===d?"top":"left",e="y"===d?"bottom":"right",n=m+p[t],i=m-p[e];m=(0,r.uZ)(n,m,i)}if(f){let t="y"===h?"top":"left",e="y"===h?"bottom":"right",n=g+p[t],i=g-p[e];g=(0,r.uZ)(n,g,i)}let y=c.fn({...e,[d]:m,[h]:g});return{...y,data:{x:y.x-n,y:y.y-i}}}}},V=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,i,o,u,f;let{placement:c,middlewareData:a,rects:s,initialPlacement:p,platform:h,elements:d}=e,{mainAxis:m=!0,crossAxis:g=!0,fallbackPlacements:y,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...b}=(0,r.ku)(t,e);if(null!=(n=a.arrow)&&n.alignmentOffset)return{};let R=(0,r.k3)(c),k=(0,r.Qq)(p),O=(0,r.k3)(p)===p,F=await (null==h.isRTL?void 0:h.isRTL(d.floating)),L=y||(O||!x?[(0,r.pw)(p)]:(0,r.gy)(p)),P="none"!==v;!y&&P&&L.push(...(0,r.KX)(p,x,v,F));let T=[p,...L],E=await l(e,b),V=[],j=(null==(i=a.flip)?void 0:i.overflows)||[];if(m&&V.push(E[R]),g){let t=(0,r.i8)(c,s,F);V.push(E[t[0]],E[t[1]])}if(j=[...j,{placement:c,overflows:V}],!V.every(t=>t<=0)){let t=((null==(o=a.flip)?void 0:o.index)||0)+1,e=T[t];if(e)return{data:{index:t,overflows:j},reset:{placement:e}};let n=null==(u=j.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:u.placement;if(!n)switch(w){case"bestFit":{let t=null==(f=j.filter(t=>{if(P){let e=(0,r.Qq)(t.placement);return e===k||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:f[0];t&&(n=t);break}case"initialPlacement":n=p}if(c!==n)return{reset:{placement:n}}}return{}}}},j=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){let n,i;let{placement:o,rects:u,platform:f,elements:c}=e,{apply:a=()=>{},...s}=(0,r.ku)(t,e),p=await l(e,s),h=(0,r.k3)(o),d=(0,r.hp)(o),m="y"===(0,r.Qq)(o),{width:g,height:y}=u.floating;"top"===h||"bottom"===h?(n=h,i=d===(await (null==f.isRTL?void 0:f.isRTL(c.floating))?"start":"end")?"left":"right"):(i=h,n="end"===d?"top":"bottom");let w=y-p.top-p.bottom,v=g-p.left-p.right,x=(0,r.VV)(y-p[n],w),b=(0,r.VV)(g-p[i],v),R=!e.middlewareData.shift,k=x,O=b;if(m?O=d||R?(0,r.VV)(b,v):v:k=d||R?(0,r.VV)(x,w):w,R&&!d){let t=(0,r.Fp)(p.left,0),e=(0,r.Fp)(p.right,0),n=(0,r.Fp)(p.top,0),i=(0,r.Fp)(p.bottom,0);m?O=g-2*(0!==t||0!==e?t+e:(0,r.Fp)(p.left,p.right)):k=y-2*(0!==n||0!==i?n+i:(0,r.Fp)(p.top,p.bottom))}await a({...e,availableWidth:O,availableHeight:k});let F=await f.getDimensions(c.floating);return g!==F.width||y!==F.height?{reset:{rects:!0}}:{}}}},A=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){let{rects:n}=e,{strategy:i="referenceHidden",...o}=(0,r.ku)(t,e);switch(i){case"referenceHidden":{let t=u(await l(e,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:f(t)}}}case"escaped":{let t=u(await l(e,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:f(t)}}}default:return{}}}}},C=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:i,placement:o,rects:l,platform:u,elements:f,middlewareData:c}=e,{element:a,padding:s=0}=(0,r.ku)(t,e)||{};if(null==a)return{};let p=(0,r.yd)(s),h={x:n,y:i},d=(0,r.Wh)(o),m=(0,r.I4)(d),g=await u.getDimensions(a),y="y"===d,w=y?"clientHeight":"clientWidth",v=l.reference[m]+l.reference[d]-h[d]-l.floating[m],x=h[d]-l.reference[d],b=await (null==u.getOffsetParent?void 0:u.getOffsetParent(a)),R=b?b[w]:0;R&&await (null==u.isElement?void 0:u.isElement(b))||(R=f.floating[w]||l.floating[m]);let k=R/2-g[m]/2-1,O=(0,r.VV)(p[y?"top":"left"],k),F=(0,r.VV)(p[y?"bottom":"right"],k),L=R-g[m]-F,P=R/2-g[m]/2+(v/2-x/2),T=(0,r.uZ)(O,P,L),E=!c.arrow&&null!=(0,r.hp)(o)&&P!==T&&l.reference[m]/2-(P<O?O:F)-g[m]/2<0,V=E?P<O?P-O:P-L:0;return{[d]:h[d]+V,data:{[d]:T,centerOffset:P-T-V,...E&&{alignmentOffset:V}},reset:E}}}),D=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){let{placement:n,elements:i,rects:o,platform:l,strategy:u}=e,{padding:f=2,x:a,y:s}=(0,r.ku)(t,e),p=Array.from(await (null==l.getClientRects?void 0:l.getClientRects(i.reference))||[]),h=function(t){let e=t.slice().sort((t,e)=>t.y-e.y),n=[],i=null;for(let t=0;t<e.length;t++){let r=e[t];!i||r.y-i.y>i.height/2?n.push([r]):n[n.length-1].push(r),i=r}return n.map(t=>(0,r.JB)(c(t)))}(p),d=(0,r.JB)(c(p)),m=(0,r.yd)(f),g=await l.getElementRects({reference:{getBoundingClientRect:function(){if(2===h.length&&h[0].left>h[1].right&&null!=a&&null!=s)return h.find(t=>a>t.left-m.left&&a<t.right+m.right&&s>t.top-m.top&&s<t.bottom+m.bottom)||d;if(h.length>=2){if("y"===(0,r.Qq)(n)){let t=h[0],e=h[h.length-1],i="top"===(0,r.k3)(n),o=t.top,l=e.bottom,u=i?t.left:e.left,f=i?t.right:e.right;return{top:o,bottom:l,left:u,right:f,width:f-u,height:l-o,x:u,y:o}}let t="left"===(0,r.k3)(n),e=(0,r.Fp)(...h.map(t=>t.right)),i=(0,r.VV)(...h.map(t=>t.left)),o=h.filter(n=>t?n.left===i:n.right===e),l=o[0].top,u=o[o.length-1].bottom;return{top:l,bottom:u,left:i,right:e,width:e-i,height:u-l,x:i,y:l}}return d}},floating:i.floating,strategy:u});return o.reference.x!==g.reference.x||o.reference.y!==g.reference.y||o.reference.width!==g.reference.width||o.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}},N=function(t){return void 0===t&&(t={}),{options:t,fn(e){let{x:n,y:i,placement:o,rects:l,middlewareData:u}=e,{offset:f=0,mainAxis:c=!0,crossAxis:a=!0}=(0,r.ku)(t,e),s={x:n,y:i},p=(0,r.Qq)(o),h=(0,r.Rn)(p),d=s[h],m=s[p],g=(0,r.ku)(f,e),y="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){let t="y"===h?"height":"width",e=l.reference[h]-l.floating[t]+y.mainAxis,n=l.reference[h]+l.reference[t]-y.mainAxis;d<e?d=e:d>n&&(d=n)}if(a){var w,v;let t="y"===h?"width":"height",e=["top","left"].includes((0,r.k3)(o)),n=l.reference[p]-l.floating[t]+(e&&(null==(w=u.offset)?void 0:w[p])||0)+(e?0:y.crossAxis),i=l.reference[p]+l.reference[t]+(e?0:(null==(v=u.offset)?void 0:v[p])||0)-(e?y.crossAxis:0);m<n?m=n:m>i&&(m=i)}return{[h]:d,[p]:m}}}},S=(t,e,n)=>{let r=new Map,i={platform:O,...n},l={...i.platform,_c:r};return o(t,e,{...i,platform:l})}},5224:function(t,e,n){function r(t){return l(t)?(t.nodeName||"").toLowerCase():"#document"}function i(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function o(t){var e;return null==(e=(l(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function l(t){return t instanceof Node||t instanceof i(t).Node}function u(t){return t instanceof Element||t instanceof i(t).Element}function f(t){return t instanceof HTMLElement||t instanceof i(t).HTMLElement}function c(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof i(t).ShadowRoot)}function a(t){let{overflow:e,overflowX:n,overflowY:r,display:i}=y(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function s(t){return["table","td","th"].includes(r(t))}function p(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function h(t){let e=m(),n=u(t)?y(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function d(t){let e=v(t);for(;f(e)&&!g(e);){if(h(e))return e;if(p(e))break;e=v(e)}return null}function m(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function g(t){return["html","body","#document"].includes(r(t))}function y(t){return i(t).getComputedStyle(t)}function w(t){return u(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function v(t){if("html"===r(t))return t;let e=t.assignedSlot||t.parentNode||c(t)&&t.host||o(t);return c(e)?e.host:e}function x(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}n.d(e,{Dx:function(){return y},Jj:function(){return i},Kx:function(){return function t(e,n,r){var o;void 0===n&&(n=[]),void 0===r&&(r=!0);let l=function t(e){let n=v(e);return g(n)?e.ownerDocument?e.ownerDocument.body:e.body:f(n)&&a(n)?n:t(n)}(e),u=l===(null==(o=e.ownerDocument)?void 0:o.body),c=i(l);if(u){let e=x(c);return n.concat(c,c.visualViewport||[],a(l)?l:[],e&&r?t(e):[])}return n.concat(l,t(l,[],r))}},Lw:function(){return w},Ow:function(){return v},Pf:function(){return m},Py:function(){return g},Re:function(){return f},Ze:function(){return s},Zq:function(){return c},ao:function(){return a},gQ:function(){return d},hT:function(){return h},kK:function(){return u},tF:function(){return o},tR:function(){return p},wK:function(){return x},wk:function(){return r}})},7848:function(t,e,n){n.d(e,{Ct:function(){return i},Fp:function(){return l},GW:function(){return f},Go:function(){return R},I4:function(){return y},JB:function(){return L},KX:function(){return k},NM:function(){return u},Qq:function(){return w},Rn:function(){return g},VV:function(){return o},Wh:function(){return v},gy:function(){return b},hp:function(){return m},i8:function(){return x},k3:function(){return d},ku:function(){return h},mA:function(){return r},pw:function(){return O},uZ:function(){return p},yd:function(){return F},ze:function(){return c}});let r=["top","right","bottom","left"],i=r.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),o=Math.min,l=Math.max,u=Math.round,f=Math.floor,c=t=>({x:t,y:t}),a={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function p(t,e,n){return l(t,o(e,n))}function h(t,e){return"function"==typeof t?t(e):t}function d(t){return t.split("-")[0]}function m(t){return t.split("-")[1]}function g(t){return"x"===t?"y":"x"}function y(t){return"y"===t?"height":"width"}function w(t){return["top","bottom"].includes(d(t))?"y":"x"}function v(t){return g(w(t))}function x(t,e,n){void 0===n&&(n=!1);let r=m(t),i=v(t),o=y(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(l=O(l)),[l,O(l)]}function b(t){let e=O(t);return[R(t),e,R(e)]}function R(t){return t.replace(/start|end/g,t=>s[t])}function k(t,e,n,r){let i=m(t),o=function(t,e,n){let r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":if(n)return e?i:r;return e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(d(t),"start"===n,r);return i&&(o=o.map(t=>t+"-"+i),e&&(o=o.concat(o.map(R)))),o}function O(t){return t.replace(/left|right|bottom|top/g,t=>a[t])}function F(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function L(t){let{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}},1810:function(t,e,n){n.d(e,{w_:function(){return a}});var r=n(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),l=["attr","size","title"];function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach(function(e){var r,i;r=e,i=n[e],(r=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t){return e=>r.createElement(s,u({attr:c({},t.attr)},e),function t(e){return e&&e.map((e,n)=>r.createElement(e.tag,c({key:n},e.attr),t(e.child)))}(t.child))}function s(t){var e=e=>{var n,{attr:i,size:o,title:f}=t,a=function(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}(t,l),s=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,a,{className:n,style:c(c({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),f&&r.createElement("title",null,f),t.children)};return void 0!==o?r.createElement(o.Consumer,null,t=>e(t)):e(i)}}}]);