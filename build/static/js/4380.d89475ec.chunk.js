(self.webpackChunknowa=self.webpackChunknowa||[]).push([[4380],{41337:function(e,t,n){"use strict";var r=n(13808),a=n(72791),i=n(53649),l=n(73201),o=n(74784),c=n(78633),s=n(90165),u=n(71306),f=n(24787),v=n(80184),d=["as","onSelect","activeKey","role","onKeyDown"];var p=function(){},y=(0,u.PB)("event-key"),Z=a.forwardRef((function(e,t){var n,f,Z=e.as,b=void 0===Z?"div":Z,x=e.onSelect,h=e.activeKey,m=e.role,P=e.onKeyDown,g=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,d),w=(0,i.Z)(),j=(0,a.useRef)(!1),C=(0,a.useContext)(c.Z),k=(0,a.useContext)(s.Z);k&&(m=m||"tablist",h=k.activeKey,n=k.getControlledId,f=k.getControllerId);var O=(0,a.useRef)(null),N=function(e){var t=O.current;if(!t)return null;var n=(0,r.Z)(t,"[".concat(y,"]:not([aria-disabled=true])")),a=t.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;var i=n.indexOf(a);if(-1===i)return null;var l=i+e;return l>=n.length&&(l=0),l<0&&(l=n.length-1),n[l]},K=function(e,t){null!=e&&(null==x||x(e,t),null==C||C(e,t))};(0,a.useEffect)((function(){if(O.current&&j.current){var e=O.current.querySelector("[".concat(y,"][aria-selected=true]"));null==e||e.focus()}j.current=!1}));var E=(0,l.Z)(t,O);return(0,v.jsx)(c.Z.Provider,{value:K,children:(0,v.jsx)(o.Z.Provider,{value:{role:m,activeKey:(0,c.h)(h),getControlledId:n||p,getControllerId:f||p},children:(0,v.jsx)(b,Object.assign({},g,{onKeyDown:function(e){if(null==P||P(e),k){var t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=N(-1);break;case"ArrowRight":case"ArrowDown":t=N(1);break;default:return}t&&(e.preventDefault(),K(t.dataset[(0,u.$F)("EventKey")]||null,e),j.current=!0,w())}},ref:E,role:m}))})})}));Z.displayName="Nav",t.Z=Object.assign(Z,{Item:f.Z})},24787:function(e,t,n){"use strict";n.d(t,{v:function(){return d}});var r=n(29439),a=n(72791),i=n(39007),l=n(74784),o=n(78633),c=n(15341),s=n(71306),u=n(90165),f=n(80184),v=["as","active","eventKey"];function d(e){var t=e.key,n=e.onClick,r=e.active,c=e.id,f=e.role,v=e.disabled,d=(0,a.useContext)(o.Z),p=(0,a.useContext)(l.Z),y=(0,a.useContext)(u.Z),Z=r,b={role:f};if(p){f||"tablist"!==p.role||(b.role="tab");var x=p.getControllerId(null!=t?t:null),h=p.getControlledId(null!=t?t:null);b[(0,s.PB)("event-key")]=t,b.id=x||c,!(Z=null==r&&null!=t?p.activeKey===t:r)&&(null!=y&&y.unmountOnExit||null!=y&&y.mountOnEnter)||(b["aria-controls"]=h)}return"tab"===b.role&&(b["aria-selected"]=Z,Z||(b.tabIndex=-1),v&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=(0,i.Z)((function(e){v||(null==n||n(e),null!=t&&d&&!e.isPropagationStopped()&&d(t,e))})),[b,{isActive:Z}]}var p=a.forwardRef((function(e,t){var n=e.as,a=void 0===n?c.ZP:n,i=e.active,l=e.eventKey,u=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,v),p=d(Object.assign({key:(0,o.h)(l,u.href),active:i},u)),y=(0,r.Z)(p,2),Z=y[0],b=y[1];return Z[(0,s.PB)("active")]=b.isActive,(0,f.jsx)(a,Object.assign({},u,Z,{ref:t}))}));p.displayName="NavItem",t.Z=p},90165:function(e,t,n){"use strict";var r=n(72791).createContext(null);t.Z=r},33573:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,i.default)(r)};var r,a=n(46054),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},46054:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,l){var o=a||"<<anonymous>>",c=l||r;if(null==n[r])return t?new Error("Required "+i+" `"+c+"` was not specified in `"+o+"`."):null;for(var s=arguments.length,u=Array(s>6?s-6:0),f=6;f<s;f++)u[f-6]=arguments[f];return e.apply(void 0,[n,r,o,i,c].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},80888:function(e,t,n){"use strict";var r=n(79047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,l){if(l!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},52007:function(e,t,n){e.exports=n(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9249:function(e,t,n){"use strict";var r=n(4942),a=n(1413),i=n(45987),l=n(81694),o=n.n(l),c=(n(33573),n(72791)),s=n(32592),u=n(41337),f=n(10162),v=n(5715),d=n(96040),p=n(94175),y=n(89102),Z=n(80184),b=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],x=c.forwardRef((function(e,t){var n,l,p,y=(0,s.Ch)(e,{activeKey:"onSelect"}),x=y.as,h=void 0===x?"div":x,m=y.bsPrefix,P=y.variant,g=y.fill,w=y.justify,j=y.navbar,C=y.navbarScroll,k=y.className,O=y.activeKey,N=(0,i.Z)(y,b),K=(0,f.vE)(m,"nav"),E=!1,I=(0,c.useContext)(v.Z),R=(0,c.useContext)(d.Z);return I?(l=I.bsPrefix,E=null==j||j):R&&(p=R.cardHeaderBsPrefix),(0,Z.jsx)(u.Z,(0,a.Z)({as:h,ref:t,activeKey:O,className:o()(k,(n={},(0,r.Z)(n,K,!E),(0,r.Z)(n,"".concat(l,"-nav"),E),(0,r.Z)(n,"".concat(l,"-nav-scroll"),E&&C),(0,r.Z)(n,"".concat(p,"-").concat(P),!!p),(0,r.Z)(n,"".concat(K,"-").concat(P),!!P),(0,r.Z)(n,"".concat(K,"-fill"),g),(0,r.Z)(n,"".concat(K,"-justified"),w),n))},N))}));x.displayName="Nav",x.defaultProps={justify:!1,fill:!1},t.Z=Object.assign(x,{Item:p.Z,Link:y.Z})},94175:function(e,t,n){"use strict";var r=n(66543);t.Z=(0,r.Z)("nav-item")},89102:function(e,t,n){"use strict";var r=n(1413),a=n(29439),i=n(45987),l=n(81694),o=n.n(l),c=n(72791),s=n(16445),u=n(24787),f=n(78633),v=n(10162),d=n(80184),p=["bsPrefix","className","as","active","eventKey"],y=c.forwardRef((function(e,t){var n=e.bsPrefix,l=e.className,c=e.as,y=void 0===c?s.Z:c,Z=e.active,b=e.eventKey,x=(0,i.Z)(e,p);n=(0,v.vE)(n,"nav-link");var h=(0,u.v)((0,r.Z)({key:(0,f.h)(b,x.href),active:Z},x)),m=(0,a.Z)(h,2),P=m[0],g=m[1];return(0,d.jsx)(y,(0,r.Z)((0,r.Z)((0,r.Z)({},x),P),{},{ref:t,className:o()(l,n,x.disabled&&"disabled",g.isActive&&"active")}))}));y.displayName="NavLink",y.defaultProps={disabled:!1},t.Z=y},12576:function(e,t,n){"use strict";var r=n(1413),a=n(29439),i=n(45987),l=n(81694),o=n.n(l),c=n(72791),s=n(10162),u=n(57860),f=n(80184),v=["bsPrefix","placement","className","style","children","arrowProps","popper","show"],d=c.forwardRef((function(e,t){var n=e.bsPrefix,l=e.placement,c=e.className,d=e.style,p=e.children,y=e.arrowProps,Z=(e.popper,e.show,(0,i.Z)(e,v));n=(0,s.vE)(n,"tooltip");var b=(0,s.SC)(),x=(null==l?void 0:l.split("-"))||[],h=(0,a.Z)(x,1)[0],m=(0,u.z)(h,b);return(0,f.jsxs)("div",(0,r.Z)((0,r.Z)({ref:t,style:d,role:"tooltip","x-placement":h,className:o()(c,n,"bs-tooltip-".concat(m))},Z),{},{children:[(0,f.jsx)("div",(0,r.Z)({className:"tooltip-arrow"},y)),(0,f.jsx)("div",{className:"".concat(n,"-inner"),children:p})]}))}));d.defaultProps={placement:"right"},d.displayName="Tooltip",t.Z=d},42391:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=4380.d89475ec.chunk.js.map