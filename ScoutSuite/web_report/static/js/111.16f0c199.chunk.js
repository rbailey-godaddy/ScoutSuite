(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[111],{604:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t(15),a=(t(0),t(16)),r=t.n(a),s=t(30),l=t.n(s),o=t(91),j=t(739),u=t(744),b=t(742),d=t(746),h=t(748),m=t(72);n.default=function(e){var n=e.data;if(!n)return null;var t=r()(n,["item","users"],[]),a=r()(n,["item","inline_policies"],{}),s=r()(n,["item","policies"],[]);return Object(i.jsxs)(j.a,{data:n,children:[Object(i.jsxs)(b.a,{children:[Object(i.jsx)(j.c,{label:"ARN",valuePath:"arn",renderValue:o.q}),Object(i.jsx)(j.c,{label:"Creation Date",valuePath:"CreateDate",renderValue:o.h})]}),Object(i.jsxs)(u.b,{children:[Object(i.jsx)(u.a,{title:"Members",children:l()(t)?Object(i.jsx)(j.c,{errorPath:"ALL",renderValue:function(){return Object(i.jsx)(d.a,{message:"This group has no members."})}}):Object(o.l)(t,"",(function(e){return Object(i.jsx)(m.a,{service:"iam",resource:"users",id:e})}))}),Object(i.jsx)(u.a,{title:"Inline Policies",disabled:l()(a),children:Object(i.jsx)(i.Fragment,{children:Object.entries(a).map((function(e,n){var t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(i.jsx)(h.a,{name:r.name,policy:r.PolicyDocument,policyPath:"inline_policies.".concat(a,".PolicyDocument")},n)}))})}),Object(i.jsx)(u.a,{title:"Managed Policies",disabled:l()(s),children:Object(o.l)(s,"",o.m)})]})]})}},742:function(e,n,t){"use strict";var i=t(1);t(0),t(743);n.a=function(e){var n=e.children;return Object(i.jsxs)("div",{className:"informations-wrapper",children:[Object(i.jsx)("h4",{className:"title",children:"Informations"}),n]})}},743:function(e,n,t){},746:function(e,n,t){"use strict";var i=t(1),c=(t(0),t(9)),a=t.n(c),r=t(127),s=t.n(r),l=(t(747),{icon:Object(i.jsx)(s.a,{fontSize:"inherit"})}),o=function(e){var n=e.message,t=e.icon,c=e.className;return Object(i.jsxs)("div",{className:a()("warning-message",c),children:[t,n]})};o.defaultProps=l,n.a=o},747:function(e,n,t){}}]);
//# sourceMappingURL=111.16f0c199.chunk.js.map