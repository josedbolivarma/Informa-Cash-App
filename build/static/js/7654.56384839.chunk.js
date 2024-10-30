"use strict";(self.webpackChunknowa=self.webpackChunknowa||[]).push([[7654],{41337:function(e,r,a){var n=a(13808),t=a(72791),l=a(53649),i=a(73201),o=a(74784),s=a(78633),c=a(90165),u=a(71306),f=a(24787),v=a(80184),d=["as","onSelect","activeKey","role","onKeyDown"];var Z=function(){},b=(0,u.PB)("event-key"),p=t.forwardRef((function(e,r){var a,f,p=e.as,y=void 0===p?"div":p,m=e.onSelect,x=e.activeKey,h=e.role,P=e.onKeyDown,N=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,d),j=(0,l.Z)(),w=(0,t.useRef)(!1),g=(0,t.useContext)(s.Z),k=(0,t.useContext)(c.Z);k&&(h=h||"tablist",x=k.activeKey,a=k.getControlledId,f=k.getControllerId);var C=(0,t.useRef)(null),K=function(e){var r=C.current;if(!r)return null;var a=(0,n.Z)(r,"[".concat(b,"]:not([aria-disabled=true])")),t=r.querySelector("[aria-selected=true]");if(!t||t!==document.activeElement)return null;var l=a.indexOf(t);if(-1===l)return null;var i=l+e;return i>=a.length&&(i=0),i<0&&(i=a.length-1),a[i]},O=function(e,r){null!=e&&(null==m||m(e,r),null==g||g(e,r))};(0,t.useEffect)((function(){if(C.current&&w.current){var e=C.current.querySelector("[".concat(b,"][aria-selected=true]"));null==e||e.focus()}w.current=!1}));var I=(0,i.Z)(r,C);return(0,v.jsx)(s.Z.Provider,{value:O,children:(0,v.jsx)(o.Z.Provider,{value:{role:h,activeKey:(0,s.h)(x),getControlledId:a||Z,getControllerId:f||Z},children:(0,v.jsx)(y,Object.assign({},N,{onKeyDown:function(e){if(null==P||P(e),k){var r;switch(e.key){case"ArrowLeft":case"ArrowUp":r=K(-1);break;case"ArrowRight":case"ArrowDown":r=K(1);break;default:return}r&&(e.preventDefault(),O(r.dataset[(0,u.$F)("EventKey")]||null,e),w.current=!0,j())}},ref:I,role:h}))})})}));p.displayName="Nav",r.Z=Object.assign(p,{Item:f.Z})},24787:function(e,r,a){a.d(r,{v:function(){return d}});var n=a(29439),t=a(72791),l=a(39007),i=a(74784),o=a(78633),s=a(15341),c=a(71306),u=a(90165),f=a(80184),v=["as","active","eventKey"];function d(e){var r=e.key,a=e.onClick,n=e.active,s=e.id,f=e.role,v=e.disabled,d=(0,t.useContext)(o.Z),Z=(0,t.useContext)(i.Z),b=(0,t.useContext)(u.Z),p=n,y={role:f};if(Z){f||"tablist"!==Z.role||(y.role="tab");var m=Z.getControllerId(null!=r?r:null),x=Z.getControlledId(null!=r?r:null);y[(0,c.PB)("event-key")]=r,y.id=m||s,!(p=null==n&&null!=r?Z.activeKey===r:n)&&(null!=b&&b.unmountOnExit||null!=b&&b.mountOnEnter)||(y["aria-controls"]=x)}return"tab"===y.role&&(y["aria-selected"]=p,p||(y.tabIndex=-1),v&&(y.tabIndex=-1,y["aria-disabled"]=!0)),y.onClick=(0,l.Z)((function(e){v||(null==a||a(e),null!=r&&d&&!e.isPropagationStopped()&&d(r,e))})),[y,{isActive:p}]}var Z=t.forwardRef((function(e,r){var a=e.as,t=void 0===a?s.ZP:a,l=e.active,i=e.eventKey,u=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,v),Z=d(Object.assign({key:(0,o.h)(i,u.href),active:l},u)),b=(0,n.Z)(Z,2),p=b[0],y=b[1];return p[(0,c.PB)("active")]=y.isActive,(0,f.jsx)(t,Object.assign({},u,p,{ref:r}))}));Z.displayName="NavItem",r.Z=Z},90165:function(e,r,a){var n=a(72791).createContext(null);r.Z=n},33573:function(e,r,a){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];function n(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];var t=null;return r.forEach((function(e){if(null==t){var r=e.apply(void 0,a);null!=r&&(t=r)}})),t}return(0,l.default)(n)};var n,t=a(46054),l=(n=t)&&n.__esModule?n:{default:n};e.exports=r.default},46054:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){function r(r,a,n,t,l,i){var o=t||"<<anonymous>>",s=i||n;if(null==a[n])return r?new Error("Required "+l+" `"+s+"` was not specified in `"+o+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),f=6;f<c;f++)u[f-6]=arguments[f];return e.apply(void 0,[a,n,o,l,s].concat(u))}var a=r.bind(null,!1);return a.isRequired=r.bind(null,!0),a},e.exports=r.default},2461:function(e,r,a){a.d(r,{Z:function(){return p}});var n=a(1413),t=a(45987),l=a(81694),i=a.n(l),o=a(72791),s=a(10162),c=a(16445),u=a(80184),f=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],v=o.forwardRef((function(e,r){var a=e.bsPrefix,l=e.active,o=e.children,v=e.className,d=e.as,Z=void 0===d?"li":d,b=e.linkAs,p=void 0===b?c.Z:b,y=e.linkProps,m=e.href,x=e.title,h=e.target,P=(0,t.Z)(e,f),N=(0,s.vE)(a,"breadcrumb-item");return(0,u.jsx)(Z,(0,n.Z)((0,n.Z)({ref:r},P),{},{className:i()(N,v,{active:l}),"aria-current":l?"page":void 0,children:l?o:(0,u.jsx)(p,(0,n.Z)((0,n.Z)({},y),{},{href:m,title:x,target:h,children:o}))}))}));v.displayName="BreadcrumbItem",v.defaultProps={active:!1,linkProps:{}};var d=v,Z=["bsPrefix","className","listProps","children","label","as"],b=o.forwardRef((function(e,r){var a=e.bsPrefix,l=e.className,o=e.listProps,c=e.children,f=e.label,v=e.as,d=void 0===v?"nav":v,b=(0,t.Z)(e,Z),p=(0,s.vE)(a,"breadcrumb");return(0,u.jsx)(d,(0,n.Z)((0,n.Z)({"aria-label":f,className:l,ref:r},b),{},{children:(0,u.jsx)("ol",(0,n.Z)((0,n.Z)({},o),{},{className:i()(p,null==o?void 0:o.className),children:c}))}))}));b.displayName="Breadcrumb",b.defaultProps={label:"breadcrumb",listProps:{}};var p=Object.assign(b,{Item:d})},9249:function(e,r,a){var n=a(4942),t=a(1413),l=a(45987),i=a(81694),o=a.n(i),s=(a(33573),a(72791)),c=a(32592),u=a(41337),f=a(10162),v=a(5715),d=a(96040),Z=a(94175),b=a(89102),p=a(80184),y=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],m=s.forwardRef((function(e,r){var a,i,Z,b=(0,c.Ch)(e,{activeKey:"onSelect"}),m=b.as,x=void 0===m?"div":m,h=b.bsPrefix,P=b.variant,N=b.fill,j=b.justify,w=b.navbar,g=b.navbarScroll,k=b.className,C=b.activeKey,K=(0,l.Z)(b,y),O=(0,f.vE)(h,"nav"),I=!1,A=(0,s.useContext)(v.Z),E=(0,s.useContext)(d.Z);return A?(i=A.bsPrefix,I=null==w||w):E&&(Z=E.cardHeaderBsPrefix),(0,p.jsx)(u.Z,(0,t.Z)({as:x,ref:r,activeKey:C,className:o()(k,(a={},(0,n.Z)(a,O,!I),(0,n.Z)(a,"".concat(i,"-nav"),I),(0,n.Z)(a,"".concat(i,"-nav-scroll"),I&&g),(0,n.Z)(a,"".concat(Z,"-").concat(P),!!Z),(0,n.Z)(a,"".concat(O,"-").concat(P),!!P),(0,n.Z)(a,"".concat(O,"-fill"),N),(0,n.Z)(a,"".concat(O,"-justified"),j),a))},K))}));m.displayName="Nav",m.defaultProps={justify:!1,fill:!1},r.Z=Object.assign(m,{Item:Z.Z,Link:b.Z})},94175:function(e,r,a){var n=a(66543);r.Z=(0,n.Z)("nav-item")},89102:function(e,r,a){var n=a(1413),t=a(29439),l=a(45987),i=a(81694),o=a.n(i),s=a(72791),c=a(16445),u=a(24787),f=a(78633),v=a(10162),d=a(80184),Z=["bsPrefix","className","as","active","eventKey"],b=s.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,s=e.as,b=void 0===s?c.Z:s,p=e.active,y=e.eventKey,m=(0,l.Z)(e,Z);a=(0,v.vE)(a,"nav-link");var x=(0,u.v)((0,n.Z)({key:(0,f.h)(y,m.href),active:p},m)),h=(0,t.Z)(x,2),P=h[0],N=h[1];return(0,d.jsx)(b,(0,n.Z)((0,n.Z)((0,n.Z)({},m),P),{},{ref:r,className:o()(i,a,m.disabled&&"disabled",N.isActive&&"active")}))}));b.displayName="NavLink",b.defaultProps={disabled:!1},r.Z=b},12576:function(e,r,a){var n=a(1413),t=a(29439),l=a(45987),i=a(81694),o=a.n(i),s=a(72791),c=a(10162),u=a(57860),f=a(80184),v=["bsPrefix","placement","className","style","children","arrowProps","popper","show"],d=s.forwardRef((function(e,r){var a=e.bsPrefix,i=e.placement,s=e.className,d=e.style,Z=e.children,b=e.arrowProps,p=(e.popper,e.show,(0,l.Z)(e,v));a=(0,c.vE)(a,"tooltip");var y=(0,c.SC)(),m=(null==i?void 0:i.split("-"))||[],x=(0,t.Z)(m,1)[0],h=(0,u.z)(x,y);return(0,f.jsxs)("div",(0,n.Z)((0,n.Z)({ref:r,style:d,role:"tooltip","x-placement":x,className:o()(s,a,"bs-tooltip-".concat(h))},p),{},{children:[(0,f.jsx)("div",(0,n.Z)({className:"tooltip-arrow"},b)),(0,f.jsx)("div",{className:"".concat(a,"-inner"),children:Z})]}))}));d.defaultProps={placement:"right"},d.displayName="Tooltip",r.Z=d}}]);
//# sourceMappingURL=7654.56384839.chunk.js.map