(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[55],{575:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(642)),c=n(640);n(103);t.default=function(e){var t=e.data;return t?Object(a.jsx)(c.a,{data:t,children:Object(a.jsxs)(r.a,{children:[Object(a.jsx)(c.c,{label:"Name",valuePath:"name"}),Object(a.jsx)(c.c,{label:"Auto Provisioning",valuePath:"auto_provision"})]})}):null}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),o=r.a.createContext(""),s=r.a.createContext((function(){}))},638:function(e,t,n){"use strict";var a=n(19),r=n(1),c=n(0),i=n(633),o=n(7),s=n.n(o),u=n(15),l=n.n(u),d=n(10),b=n.n(d),j=n(637),f=n(103),p=n(83),v=(n(641),n(624)),h=n(191),x=n.n(h),O=n(192),m=n(130),P=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(c.useContext)(m.a),s=o.exceptions,u=o.addException,d=Object(O.b)().enqueueSnackbar,b=l()(s,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(r.jsx)(v.a,{disabled:b,size:"small",startIcon:Object(r.jsx)(x.a,{}),className:"exception-btn",onClick:function(){u(t,n,a),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},g=n(29),C=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,d=e.errorPath,v=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,C=e.basePathOverwrite,A=Object(g.g)(),N=Object(c.useContext)(j.a),w=Object(c.useContext)(j.b),_=Object(c.useContext)(j.c),k=Object(f.a)(C||w,u),D=m(e.value||l()(N.item,k,e.value));("boolean"===typeof D&&(D=String(D)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(f.a)(C||w,e)})):t=[k];var E=t.some((function(e){return N.path_to_issues.includes(e)})),I=N.level;if(Object(c.useEffect)((function(){E&&_(I)}),[I]),void 0===D||null===D)return null;var y=Object(r.jsx)(P,{service:A.service,finding:A.finding,path:"".concat(N.path,".").concat(t[0])}),z=Object(r.jsxs)("span",{className:s()(E&&s()("issue",I)),children:[D,E&&y]});return Object(r.jsx)(p.a,{className:s()(v,"partial-value",{inline:h}),label:n,separator:o,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:D},O),{},{children:z})):z})};C.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=C},639:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(637)),c=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(639),o=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var a=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){}}]);
//# sourceMappingURL=55.65bdd3ac.chunk.js.map