(self.webpackChunknowa=self.webpackChunknowa||[]).push([[2705],{19965:function(e,t,n){"use strict";n.r(t);n(72791);var a=n(2461),s=n(89743),o=n(2677),r=n(8116),c=n(92056),i=n(80184),l=function(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"breadcrumb-header justify-content-between",children:[(0,i.jsx)("div",{className:"left-content",children:(0,i.jsx)("span",{className:"main-content-title mg-b-0 mg-b-lg-1",children:"GALLERY"})}),(0,i.jsx)("div",{className:"justify-content-center mt-2",children:(0,i.jsxs)(a.Z,{className:"breadcrumb",children:[(0,i.jsx)(a.Z.Item,{className:"breadcrumb-item tx-15",href:"#",children:"Pages"}),(0,i.jsx)(a.Z.Item,{className:"breadcrumb-item ",active:!0,"aria-current":"page",children:"Gallery"})]})})]}),(0,i.jsx)("div",{className:"masonry ",children:(0,i.jsx)(s.Z,{children:(0,i.jsx)(c.r,{})})}),(0,i.jsxs)(s.Z,{className:" mb-5",children:[(0,i.jsx)(o.Z,{md:6,className:"mt-1 d-none d-md-block text-dark",children:"1 - 10 of 234 photos"}),(0,i.jsxs)(r.Z,{className:"pagination product-pagination ms-auto float-end",children:[(0,i.jsx)(r.Z.Item,{className:"page-item page-prev disabled",children:"Prev"}),(0,i.jsx)(r.Z.Item,{className:"page-item active",children:"1"}),(0,i.jsx)(r.Z.Item,{className:"page-item",children:"2"}),(0,i.jsx)(r.Z.Item,{className:"page-item",children:"3"}),(0,i.jsx)(r.Z.Item,{className:"page-item",children:"4"}),(0,i.jsx)(r.Z.Item,{className:"page-item page-next",children:"Next"})]})]})]})};l.defaultProps={},t.default=l},80888:function(e,t,n){"use strict";var a=n(79047);function s(){}function o(){}o.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,o,r){if(r!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:s};return n.PropTypes=n,n}},52007:function(e,t,n){e.exports=n(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2677:function(e,t,n){"use strict";var a=n(29439),s=n(1413),o=n(45987),r=n(81694),c=n.n(r),i=n(72791),l=n(10162),p=n(80184),u=["as","bsPrefix","className"],f=["className"];var d=i.forwardRef((function(e,t){var n=function(e){var t=e.as,n=e.bsPrefix,a=e.className,r=(0,o.Z)(e,u);n=(0,l.vE)(n,"col");var i=(0,l.pi)(),p=(0,l.zG)(),f=[],d=[];return i.forEach((function(e){var t,a,s,o=r[e];delete r[e],"object"===typeof o&&null!=o?(t=o.span,a=o.offset,s=o.order):t=o;var c=e!==p?"-".concat(e):"";t&&f.push(!0===t?"".concat(n).concat(c):"".concat(n).concat(c,"-").concat(t)),null!=s&&d.push("order".concat(c,"-").concat(s)),null!=a&&d.push("offset".concat(c,"-").concat(a))})),[(0,s.Z)((0,s.Z)({},r),{},{className:c().apply(void 0,[a].concat(f,d))}),{as:t,bsPrefix:n,spans:f}]}(e),r=(0,a.Z)(n,2),i=r[0],d=i.className,m=(0,o.Z)(i,f),h=r[1],v=h.as,y=void 0===v?"div":v,b=h.bsPrefix,N=h.spans;return(0,p.jsx)(y,(0,s.Z)((0,s.Z)({},m),{},{ref:t,className:c()(d,!N.length&&b)}))}));d.displayName="Col",t.Z=d},8116:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var a=n(1413),s=n(45987),o=n(81694),r=n.n(o),c=n(72791),i=n(10162),l=n(16445),p=n(80184),u=["active","disabled","className","style","activeLabel","children"],f=["children"],d=c.forwardRef((function(e,t){var n=e.active,o=e.disabled,c=e.className,i=e.style,f=e.activeLabel,d=e.children,m=(0,s.Z)(e,u),h=n||o?"span":l.Z;return(0,p.jsx)("li",{ref:t,style:i,className:r()(c,"page-item",{active:n,disabled:o}),children:(0,p.jsxs)(h,(0,a.Z)((0,a.Z)({className:"page-link",disabled:o},m),{},{children:[d,n&&f&&(0,p.jsx)("span",{className:"visually-hidden",children:f})]}))})}));d.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},d.displayName="PageItem";var m=d;function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=c.forwardRef((function(e,o){var r=e.children,c=(0,s.Z)(e,f);return(0,p.jsxs)(d,(0,a.Z)((0,a.Z)({},c),{},{ref:o,children:[(0,p.jsx)("span",{"aria-hidden":"true",children:r||t}),(0,p.jsx)("span",{className:"visually-hidden",children:n})]}))}));return o.displayName=e,o}var v=h("First","\xab"),y=h("Prev","\u2039","Previous"),b=h("Ellipsis","\u2026","More"),N=h("Next","\u203a"),g=h("Last","\xbb"),x=["bsPrefix","className","size"],j=c.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.size,l=(0,s.Z)(e,x),u=(0,i.vE)(n,"pagination");return(0,p.jsx)("ul",(0,a.Z)((0,a.Z)({ref:t},l),{},{className:r()(o,u,c&&"".concat(u,"-").concat(c))}))}));j.displayName="Pagination";var P=Object.assign(j,{First:v,Prev:y,Ellipsis:b,Item:m,Next:N,Last:g})},89743:function(e,t,n){"use strict";var a=n(1413),s=n(45987),o=n(81694),r=n.n(o),c=n(72791),i=n(10162),l=n(80184),p=["bsPrefix","className","as"],u=c.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.as,u=void 0===c?"div":c,f=(0,s.Z)(e,p),d=(0,i.vE)(n,"row"),m=(0,i.pi)(),h=(0,i.zG)(),v="".concat(d,"-cols"),y=[];return m.forEach((function(e){var t,n=f[e];delete f[e],t=null!=n&&"object"===typeof n?n.cols:n;var a=e!==h?"-".concat(e):"";null!=t&&y.push("".concat(v).concat(a,"-").concat(t))})),(0,l.jsx)(u,(0,a.Z)((0,a.Z)({ref:t},f),{},{className:r().apply(void 0,[o,d].concat(y))}))}));u.displayName="Row",t.Z=u},23688:function(e,t,n){"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function s(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function o(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}function r(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,r=null,c=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?c="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(c="UNSAFE_componentWillUpdate"),null!==n||null!==r||null!==c){var i=e.displayName||e.name,l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+(null!==c?"\n  "+c:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=a,t.componentWillReceiveProps=s),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var p=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;p.call(this,e,t,a)}}return e}n.r(t),n.d(t,{polyfill:function(){return r}}),a.__suppressDeprecationWarning=!0,s.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0},42391:function(e){"use strict";var t=function(){};e.exports=t},89611:function(e,t,n){"use strict";function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=2705.8b2c2564.chunk.js.map