"use strict";(self.webpackChunknowa=self.webpackChunknowa||[]).push([[4119,2671],{49726:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(72791),o=t(55746),i=t(91683),a=Math.pow(2,31)-1;function u(n,e,t){var r=t-Date.now();n.current=r<=a?setTimeout(e,r):setTimeout((function(){return u(n,e,t)}),a)}function c(){var n=(0,o.Z)(),e=(0,r.useRef)();return(0,i.Z)((function(){return clearTimeout(e.current)})),(0,r.useMemo)((function(){var t=function(){return clearTimeout(e.current)};return{set:function(r,o){void 0===o&&(o=0),n()&&(t(),o<=a?e.current=setTimeout(r,o):u(e,r,Date.now()+o))},clear:t}}),[])}},91683:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(72791);function o(n){var e=function(n){var e=(0,r.useRef)(n);return e.current=n,e}(n);(0,r.useEffect)((function(){return function(){return e.current()}}),[])}},90183:function(n,e,t){t.d(e,{Z:function(){return f}});var r=t(29439),o=t(78376),i=t(97357),a=t(72791),u=t(58865),c=function(n,e){var t;return i.Z?null==n?(e||(0,o.Z)()).body:("function"===typeof n&&(n=n()),n&&"current"in n&&(n=n.current),null!=(t=n)&&t.nodeType&&n||null):null};function f(n,e){var t=(0,u.Z)(),o=(0,a.useState)((function(){return c(n,null==t?void 0:t.document)})),i=(0,r.Z)(o,2),f=i[0],l=i[1];if(!f){var s=c(n);s&&l(s)}return(0,a.useEffect)((function(){e&&f&&e(f)}),[e,f]),(0,a.useEffect)((function(){var e=c(n);e!==f&&l(e)}),[n,f]),f}},75427:function(n,e,t){t.d(e,{Z:function(){return f}});var r=t(78376);function o(n,e){return function(n){var e=(0,r.Z)(n);return e&&e.defaultView||window}(n).getComputedStyle(n,e)}var i=/([A-Z])/g;var a=/^ms-/;function u(n){return function(n){return n.replace(i,"-$1").toLowerCase()}(n).replace(a,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var f=function(n,e){var t="",r="";if("string"===typeof e)return n.style.getPropertyValue(u(e))||o(n).getPropertyValue(u(e));Object.keys(e).forEach((function(o){var i=e[o];i||0===i?!function(n){return!(!n||!c.test(n))}(o)?t+=u(o)+": "+i+";":r+=o+"("+i+") ":n.style.removeProperty(u(o))})),r&&(t+="transform: "+r+";"),n.style.cssText+=";"+t}},6755:function(n,e,t){function r(n,e){return n.classList?!!e&&n.classList.contains(e):-1!==(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+e+" ")}t.d(e,{Z:function(){return r}})},33690:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(75427),o=t(92899);function i(n,e,t){void 0===t&&(t=5);var r=!1,i=setTimeout((function(){r||function(n,e,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!0),n){var o=document.createEvent("HTMLEvents");o.initEvent(e,t,r),n.dispatchEvent(o)}}(n,"transitionend",!0)}),e+t),a=(0,o.Z)(n,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(i),a()}}function a(n,e,t,a){null==t&&(t=function(n){var e=(0,r.Z)(n,"transitionDuration")||"",t=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*t}(n)||0);var u=i(n,t,a),c=(0,o.Z)(n,"transitionend",e);return function(){u(),c()}}},9140:function(n,e,t){t.d(e,{Z:function(){return R}});var r=t(1413),o=t(45987),i=t(81694),a=t.n(i),u=t(72791),c=t(10162),f=t(66543),l=t(27472),s=t(80184),d=["bsPrefix","className","variant","as"],p=u.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,u=n.variant,f=n.as,l=void 0===f?"img":f,p=(0,o.Z)(n,d),v=(0,c.vE)(t,"card-img");return(0,s.jsx)(l,(0,r.Z)({ref:e,className:a()(u?"".concat(v,"-").concat(u):v,i)},p))}));p.displayName="CardImg";var v=p,Z=t(96040),m=["bsPrefix","className","as"],y=u.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,f=n.as,l=void 0===f?"div":f,d=(0,o.Z)(n,m),p=(0,c.vE)(t,"card-header"),v=(0,u.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,s.jsx)(Z.Z.Provider,{value:v,children:(0,s.jsx)(l,(0,r.Z)((0,r.Z)({ref:e},d),{},{className:a()(i,p)}))})}));y.displayName="CardHeader";var h=y,b=["bsPrefix","className","bg","text","border","body","children","as"],w=(0,l.Z)("h5"),g=(0,l.Z)("h6"),E=(0,f.Z)("card-body"),x=(0,f.Z)("card-title",{Component:w}),C=(0,f.Z)("card-subtitle",{Component:g}),P=(0,f.Z)("card-link",{Component:"a"}),O=(0,f.Z)("card-text",{Component:"p"}),k=(0,f.Z)("card-footer"),j=(0,f.Z)("card-img-overlay"),N=u.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,u=n.bg,f=n.text,l=n.border,d=n.body,p=n.children,v=n.as,Z=void 0===v?"div":v,m=(0,o.Z)(n,b),y=(0,c.vE)(t,"card");return(0,s.jsx)(Z,(0,r.Z)((0,r.Z)({ref:e},m),{},{className:a()(i,y,u&&"bg-".concat(u),f&&"text-".concat(f),l&&"border-".concat(l)),children:d?(0,s.jsx)(E,{children:p}):p}))}));N.displayName="Card",N.defaultProps={body:!1};var R=Object.assign(N,{Img:v,Title:x,Subtitle:C,Body:E,Link:P,Text:O,Header:h,Footer:k,ImgOverlay:j})},72709:function(n,e,t){var r,o=t(1413),i=t(45987),a=t(4942),u=t(81694),c=t.n(u),f=t(72791),l=t(18875),s=t(71380),d=t(67202),p=t(85007),v=t(80184),Z=["className","children","transitionClasses"],m=(r={},(0,a.Z)(r,l.d0,"show"),(0,a.Z)(r,l.cn,"show"),r),y=f.forwardRef((function(n,e){var t=n.className,r=n.children,a=n.transitionClasses,u=void 0===a?{}:a,l=(0,i.Z)(n,Z),y=(0,f.useCallback)((function(n,e){(0,d.Z)(n),null==l.onEnter||l.onEnter(n,e)}),[l]);return(0,v.jsx)(p.Z,(0,o.Z)((0,o.Z)({ref:e,addEndListener:s.Z},l),{},{onEnter:y,childRef:r.ref,children:function(n,e){return f.cloneElement(r,(0,o.Z)((0,o.Z)({},e),{},{className:c()("fade",t,r.props.className,m[n],u[n])}))}}))}));y.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},y.displayName="Fade",e.Z=y},8396:function(n,e,t){t.d(e,{Z:function(){return V}});var r=t(1413),o=t(45987),i=t(93433),a=t(29439),u=t(53189),c=t(72791),f=t(49726),l=(t(42391),t(32592)),s=t(73201),d=t(81694),p=t.n(d),v=t(54164),Z=t(28633),m=t(88582),y=t(92899),h=t(78376),b=t(39007),w=t(76050),g=function(){};var E=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.disabled,o=t.clickTrigger,i=e||g;(0,w.Z)(n,i,{disabled:r,clickTrigger:o});var a=(0,b.Z)((function(n){27===n.keyCode&&i(n)}));(0,c.useEffect)((function(){if(!r&&null!=n){var e=(0,h.Z)((0,w.f)(n)),t=(e.defaultView||window).event,o=(0,y.Z)(e,"keyup",(function(n){n!==t?a(n):t=void 0}));return function(){o()}}}),[n,r,a])},x=t(90183),C=t(81012),P=t(80184),O=c.forwardRef((function(n,e){var t=n.flip,r=n.offset,o=n.placement,i=n.containerPadding,u=n.popperConfig,f=void 0===u?{}:u,l=n.transition,d=(0,Z.Z)(),p=(0,a.Z)(d,2),y=p[0],h=p[1],b=(0,Z.Z)(),w=(0,a.Z)(b,2),g=w[0],O=w[1],k=(0,s.Z)(h,e),j=(0,x.Z)(n.container),N=(0,x.Z)(n.target),R=(0,c.useState)(!n.show),T=(0,a.Z)(R,2),S=T[0],F=T[1],_=(0,m.Z)(N,y,(0,C.ZP)({placement:o,enableEvents:!!n.show,containerPadding:i||5,flip:t,offset:r,arrowElement:g,popperConfig:f}));n.show?S&&F(!1):n.transition||S||F(!0);var D=n.show||l&&!S;if(E(y,n.onHide,{disabled:!n.rootClose||n.rootCloseDisabled,clickTrigger:n.rootCloseEvent}),!D)return null;var H=n.children(Object.assign({},_.attributes.popper,{style:_.styles.popper,ref:k}),{popper:_,placement:o,show:!!n.show,arrowProps:Object.assign({},_.attributes.arrow,{style:_.styles.arrow,ref:O})});if(l){var L=n.onExit,B=n.onExiting,M=n.onEnter,U=n.onEntering,V=n.onEntered;H=(0,P.jsx)(l,{in:n.show,appear:!0,onExit:L,onExiting:B,onExited:function(){F(!0),n.onExited&&n.onExited.apply(n,arguments)},onEnter:M,onEntering:U,onEntered:V,children:H})}return j?v.createPortal(H,j):null}));O.displayName="Overlay";var k=O,j=t(49815),N=t(6755),R=t(10162),T=t(63739);var S=t(72709),F=t(37002),_=["children","transition","popperConfig"],D={transition:S.Z,rootClose:!1,show:!1,placement:"top"};var H=c.forwardRef((function(n,e){var t=n.children,i=n.transition,u=n.popperConfig,f=void 0===u?{}:u,l=(0,o.Z)(n,_),d=(0,c.useRef)({}),v=(0,Z.Z)(),m=(0,a.Z)(v,2),y=m[0],h=m[1],w=function(n){var e=(0,c.useRef)(null),t=(0,R.vE)(void 0,"popover"),r=(0,c.useMemo)((function(){return{name:"offset",options:{offset:function(){return e.current&&(0,N.Z)(e.current,t)?n||T.Z.POPPER_OFFSET:n||[0,0]}}}}),[n,t]);return[e,[r]]}(l.offset),g=(0,a.Z)(w,2),E=g[0],x=g[1],C=(0,s.Z)(e,E),O=!0===i?S.Z:i||void 0,D=(0,b.Z)((function(n){h(n),null==f||null==f.onFirstUpdate||f.onFirstUpdate(n)}));return(0,j.Z)((function(){y&&(null==d.current.scheduleUpdate||d.current.scheduleUpdate())}),[y]),(0,P.jsx)(k,(0,r.Z)((0,r.Z)({},l),{},{ref:C,popperConfig:(0,r.Z)((0,r.Z)({},f),{},{modifiers:x.concat(f.modifiers||[]),onFirstUpdate:D}),transition:O,children:function(n,e){var o,a,u=e.arrowProps,f=e.popper,l=e.show;!function(n,e){var t=n.ref,r=e.ref;n.ref=t.__wrapped||(t.__wrapped=function(n){return t((0,F.Z)(n))}),e.ref=r.__wrapped||(r.__wrapped=function(n){return r((0,F.Z)(n))})}(n,u);var s=null==f?void 0:f.placement,v=Object.assign(d.current,{state:null==f?void 0:f.state,scheduleUpdate:null==f?void 0:f.update,placement:s,outOfBoundaries:(null==f||null==(o=f.state)||null==(a=o.modifiersData.hide)?void 0:a.isReferenceHidden)||!1});return"function"===typeof t?t((0,r.Z)((0,r.Z)((0,r.Z)({},n),{},{placement:s,show:l},!i&&l&&{className:"show"}),{},{popper:v,arrowProps:u})):c.cloneElement(t,(0,r.Z)((0,r.Z)({},n),{},{placement:s,arrowProps:u,popper:v,className:p()(t.props.className,!i&&l&&"show"),style:(0,r.Z)((0,r.Z)({},t.props.style),n.style)}))}}))}));H.displayName="Overlay",H.defaultProps=D;var L=H,B=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"];function M(n,e,t){var r=(0,a.Z)(e,1)[0],o=r.currentTarget,c=r.relatedTarget||r.nativeEvent[t];c&&c===o||(0,u.Z)(o,c)||n.apply(void 0,(0,i.Z)(e))}function U(n){var e=n.trigger,t=n.overlay,i=n.children,u=n.popperConfig,d=void 0===u?{}:u,p=n.show,v=n.defaultShow,Z=void 0!==v&&v,m=n.onToggle,y=n.delay,h=n.placement,b=n.flip,w=void 0===b?h&&-1!==h.indexOf("auto"):b,g=(0,o.Z)(n,B),E=(0,c.useRef)(null),x=(0,s.Z)(E,i.ref),C=(0,f.Z)(),O=(0,c.useRef)(""),k=(0,l.$c)(p,Z,m),j=(0,a.Z)(k,2),N=j[0],R=j[1],T=function(n){return n&&"object"===typeof n?n:{show:n,hide:n}}(y),S="function"!==typeof i?c.Children.only(i).props:{},_=S.onFocus,D=S.onBlur,H=S.onClick,U=(0,c.useCallback)((function(){C.clear(),O.current="show",T.show?C.set((function(){"show"===O.current&&R(!0)}),T.show):R(!0)}),[T.show,R,C]),V=(0,c.useCallback)((function(){C.clear(),O.current="hide",T.hide?C.set((function(){"hide"===O.current&&R(!1)}),T.hide):R(!1)}),[T.hide,R,C]),A=(0,c.useCallback)((function(){U(),null==_||_.apply(void 0,arguments)}),[U,_]),I=(0,c.useCallback)((function(){V(),null==D||D.apply(void 0,arguments)}),[V,D]),$=(0,c.useCallback)((function(){R(!N),null==H||H.apply(void 0,arguments)}),[H,R,N]),z=(0,c.useCallback)((function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];M(U,e,"fromElement")}),[U]),X=(0,c.useCallback)((function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];M(V,e,"toElement")}),[V]),Y=null==e?[]:[].concat(e),q={ref:function(n){x((0,F.Z)(n))}};return-1!==Y.indexOf("click")&&(q.onClick=$),-1!==Y.indexOf("focus")&&(q.onFocus=A,q.onBlur=I),-1!==Y.indexOf("hover")&&(q.onMouseOver=z,q.onMouseOut=X),(0,P.jsxs)(P.Fragment,{children:["function"===typeof i?i(q):(0,c.cloneElement)(i,q),(0,P.jsx)(L,(0,r.Z)((0,r.Z)({},g),{},{show:N,onHide:V,flip:w,placement:h,popperConfig:d,target:E.current,children:t}))]})}U.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var V=U},63739:function(n,e,t){t.d(e,{Z:function(){return y}});var r=t(1413),o=t(29439),i=t(45987),a=t(81694),u=t.n(a),c=t(72791),f=t(10162),l=t(66543),s=(0,l.Z)("popover-header"),d=(0,l.Z)("popover-body"),p=t(57860),v=t(80184),Z=["bsPrefix","placement","className","style","children","body","arrowProps","popper","show"],m=c.forwardRef((function(n,e){var t=n.bsPrefix,a=n.placement,c=n.className,l=n.style,s=n.children,m=n.body,y=n.arrowProps,h=(n.popper,n.show,(0,i.Z)(n,Z)),b=(0,f.vE)(t,"popover"),w=(0,f.SC)(),g=(null==a?void 0:a.split("-"))||[],E=(0,o.Z)(g,1)[0],x=(0,p.z)(E,w);return(0,v.jsxs)("div",(0,r.Z)((0,r.Z)({ref:e,role:"tooltip",style:l,"x-placement":E,className:u()(c,b,E&&"bs-popover-".concat(x))},h),{},{children:[(0,v.jsx)("div",(0,r.Z)({className:"popover-arrow"},y)),m?(0,v.jsx)(d,{children:s}):s]}))}));m.defaultProps={placement:"right"};var y=Object.assign(m,{Header:s,Body:d,POPPER_OFFSET:[0,8]})},85007:function(n,e,t){var r=t(1413),o=t(45987),i=t(72791),a=t(18875),u=t(73201),c=t(37002),f=t(80184),l=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],s=i.forwardRef((function(n,e){var t=n.onEnter,s=n.onEntering,d=n.onEntered,p=n.onExit,v=n.onExiting,Z=n.onExited,m=n.addEndListener,y=n.children,h=n.childRef,b=(0,o.Z)(n,l),w=(0,i.useRef)(null),g=(0,u.Z)(w,h),E=function(n){g((0,c.Z)(n))},x=function(n){return function(e){n&&w.current&&n(w.current,e)}},C=(0,i.useCallback)(x(t),[t]),P=(0,i.useCallback)(x(s),[s]),O=(0,i.useCallback)(x(d),[d]),k=(0,i.useCallback)(x(p),[p]),j=(0,i.useCallback)(x(v),[v]),N=(0,i.useCallback)(x(Z),[Z]),R=(0,i.useCallback)(x(m),[m]);return(0,f.jsx)(a.ZP,(0,r.Z)((0,r.Z)({ref:e},b),{},{onEnter:C,onEntered:O,onEntering:P,onExit:k,onExited:N,onExiting:j,addEndListener:R,nodeRef:w,children:"function"===typeof y?function(n,e){return y(n,(0,r.Z)((0,r.Z)({},e),{},{ref:E}))}:i.cloneElement(y,{ref:E})}))}));e.Z=s},57860:function(n,e,t){t.d(e,{z:function(){return u}});var r=t(43144),o=t(15671),i=t(60136),a=t(29388);t(72791).Component;function u(n,e){var t=n;return"left"===n?t=e?"end":"start":"right"===n&&(t=e?"start":"end"),t}},37002:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(54164);function o(n){return n&&"setState"in n?r.findDOMNode(n):null!=n?n:null}},71380:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(75427),o=t(33690);function i(n,e){var t=(0,r.Z)(n,e)||"",o=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*o}function a(n,e){var t=i(n,"transitionDuration"),r=i(n,"transitionDelay"),a=(0,o.Z)(n,(function(t){t.target===n&&(a(),e(t))}),t+r)}},67202:function(n,e,t){function r(n){n.offsetHeight}t.d(e,{Z:function(){return r}})},97326:function(n,e,t){function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}t.d(e,{Z:function(){return r}})},15671:function(n,e,t){function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}t.d(e,{Z:function(){return r}})},43144:function(n,e,t){function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}t.d(e,{Z:function(){return o}})},29388:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(61120),o=t(78814),i=t(82963);function a(n){var e=(0,o.Z)();return function(){var t,o=(0,r.Z)(n);if(e){var a=(0,r.Z)(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return(0,i.Z)(this,t)}}},61120:function(n,e,t){function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}t.d(e,{Z:function(){return r}})},60136:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(89611);function o(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&(0,r.Z)(n,e)}},78814:function(n,e,t){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}t.d(e,{Z:function(){return r}})},82963:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(71002),o=t(97326);function i(n,e){if(e&&("object"===(0,r.Z)(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(n)}},71002:function(n,e,t){function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=4119.4a79413d.chunk.js.map