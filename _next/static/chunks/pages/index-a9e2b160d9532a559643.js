(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1902:function(e,r,o){"use strict";var c=o(8527),t=(o(7294),o(456)),f=o(8250),n=o(5893);r.Z=function(e){var r=e.activeIndex,o=void 0===r?0:r;return(0,n.jsxs)(c.Ug,{justifyContent:"space-between",h:"80px",p:"0px 20px",bgColor:"white",position:"fixed",top:"0",left:"0",right:"0",boxShadow:"0px 5px 20px rgba(36, 37, 38, 0.25)",zIndex:1,children:[(0,n.jsxs)(c.Ug,{children:[(0,n.jsx)(t.Ee,{src:"./logo1.png",alt:"kaka color card"}),(0,n.jsx)(f.H1,{children:(0,n.jsx)(t.Ee,{src:"./logo2.png",alt:"kaka"})})]}),(0,n.jsxs)(c.Ug,{columnGap:"10px",children:[[{name:"Palette",link:"https://afterwork-design.github.io/color-card"},{name:"Gradient",link:"https://afterwork-design.github.io/color-card/gradient"}].map((function(e,r){return(0,n.jsx)(c.rU,{href:e.link,border:"2px solid transparent",p:"10px 2px",textDecoration:"none",borderBottomColor:o===r?"#ff8d1a":"",children:(0,n.jsx)(f.H2,{fontSize:"16px",children:e.name})},e.name)})),(0,n.jsx)(c.rU,{href:"https://github.com/afterwork-design/color-card",target:"_blank",children:(0,n.jsx)(t.Ee,{src:"./github.png",w:"25px",h:"25px"})})]})]})}},8250:function(e,r,o){"use strict";o.d(r,{H1:function(){return d},H2:function(){return b},b:function(){return i}});var c=o(2809),t=(o(7294),o(8527)),f=o(5893);function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,c)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){(0,c.Z)(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var d=function(e){return(0,f.jsx)(t.X6,a({as:"h1",size:"xl",mt:0},e))},b=function(e){return(0,f.jsx)(t.X6,a({as:"h2",size:"lg"},e))},i=function(e){return(0,f.jsx)(t.xu,a({borderRadius:"8px",backgroundColor:"white"},e))}},5145:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return w}});var c=o(7294),t=o(8527),f=o(1902),n=o(9823),a=o(2809),d=o(219),b=o(5893),i=["colors"];function s(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,c)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?s(Object(o),!0).forEach((function(r){(0,a.Z)(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var l=function(e){var r=e.colors,o=(0,d.Z)(e,i);return(0,b.jsx)(t.xu,p(p({pos:"relative",h:"0",pb:"100%",cursor:"pointer",transition:"1s",_hover:{transform:"scale(0.9)"}},o),{},{children:(0,b.jsx)(t.rj,{pos:"absolute",top:"0",left:"0",bottom:"0",right:"0",gridTemplateColumns:"repeat(2, 50%)",gridTemplateRows:"repeat(2, 50%)",p:"20px",bgColor:"white",borderRadius:"8px",boxShadow:"5px 12px 20px rgba(36, 37, 38, 0.13)",children:r.map((function(e,r){return(0,b.jsx)(t.xu,{bgColor:e},"".concat(e).concat(r))}))})}))},u=function(e){var r=e.setColor;return(0,b.jsx)(t.rj,{mt:"80px",mr:"240px",p:["5px","20px","40px","80px"],flexWrap:"wrap",rowGap:"40px",columnGap:"40px",gridTemplateColumns:["repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(5, 1fr)","repeat(6, 1fr)"],children:n.UA.colors.map((function(e){return(0,b.jsx)(l,{colors:e,onClick:function(){return r(e)}},e.toString())}))})},x=o(8250),g=function(e){var r=parseInt(e.substring(1,3),16),o=parseInt(e.substring(3,5),16),c=parseInt(e.substring(5,7),16);return"rgb(".concat(r,",").concat(o,",").concat(c,")")},h="copied!",j=function(e){var r=e.colors,o=function(e){var r=e.target,o=r.innerText;o!==h&&navigator.clipboard.writeText(o).then((function(){r.innerText=h,setTimeout((function(){r.innerText=o}),1e3)}))};return(0,b.jsx)(t.gC,{justifyContent:"space-between",w:"240px",position:"fixed",right:"0",top:"80px",bottom:"0",bgColor:"white",p:"40px",rowGap:["10px","15px","18px","20px","25px","40px"],boxShadow:"5px 12px 20px rgba(36, 37, 38, 0.25)",children:r.map((function(e,r){return(0,b.jsxs)(x.b,{display:"flex",flexDir:"column",flexGrow:1,overflow:"hidden",alignItems:"center",w:"100%",boxShadow:"1px 1px 12px rgba(36, 37, 38, 0.25)",rowGap:"5px",paddingBottom:"5px",children:[(0,b.jsx)(t.xu,{bgColor:e,minH:"10px",w:"100%",flexGrow:1}),(0,b.jsx)(t.xu,{onClick:o,cursor:"pointer",border:"1px solid #ebebeb",p:"5px",borderRadius:"4px",children:e}),(0,b.jsx)(t.xu,{onClick:o,cursor:"pointer",border:"1px solid #ebebeb",p:"5px",borderRadius:"4px",children:g(e)})]},"".concat(e).concat(r))}))})},w=function(){var e=(0,c.useState)(n.kM),r=e[0],o=e[1];return(0,b.jsxs)(t.xu,{children:[(0,b.jsx)(f.Z,{}),(0,b.jsxs)(t.xu,{children:[(0,b.jsx)(u,{setColor:o}),(0,b.jsx)(j,{colors:r})]})]})}},9823:function(e,r,o){"use strict";o.d(r,{UA:function(){return f},FL:function(){return a},kM:function(){return n}});var c=JSON.parse('{"zh":"\u56db\u8272","en":"four","colors":[["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb"],["#d8c1bb","#f0e2e0","#ebeee7","#e0c3a8"],["#e7669e","#e7afcc","#e6d9e3","#5fa0d9"],["#f29ab2","#f6d2e0","#d6dbee","#ccc9de"],["#eec9be","#f3dbdb","#d2e8da","#9acddc"],["#a1a5cb","#cbc7d9","#d9ccd0","#bfb6c7"],["#e7ab89","#e0cfbb","#e9dbd0","#a59179"],["#a17364","#d7dac5","#dbcdb2","#dac488"],["#9c9672","#c6b597","#b9c4b3","#a1b3a7"],["#a1b3a7","#bfafa2","#b3a799","#7e988d"],["#c4987d","#cebf9e","#dacdbd","#b0a498"],["#c2a279","#e5cbb2","#d1c088","#d49d7e"],["#fbaf74","#f8f18e","#6dbb68","#fda295"],["#e9d1af","#4b9faa","#b98377","#ed8381"],["#fcf8e0","#f1decf","#ffe3d6","#ffaf8a"],["#f3c5c7","#ffaf8a","#cec7f3","#d6e4a6"],["#db705e","#fee1d9","#d9ebf5","#a8c8d7"],["#9cdee5","#a4e69c","#e6d29c","#e6e59c"],["#d6694c","#f5c0a1","#d8ddc0","#9bc2b0"],["#e19536","#f7c7b0","#cba47b","#3b5f2b"],["#eed05b","#e68764","#907b57","#f0d8ad"],["#2a5097","#cf6938","#ffc8a9","#1e73c4"],["#db5087","#f8edfd","#ecbdcf","#8bb3c0"],["#de9e20","#0758a6","#d47222","#d3b28f"],["#67b176","#0f7953","#b3cf9f","#80a949"],["#0f67fc","#b3cffe","#f8cfb1","#ab4215"],["#0f3391","#d68d28","#ddb419","#a11109"],["#a32317","#d9d8c9","#e9c318","#496d5c"],["#d25536","#f5ead9","#f9c7b0","#f6c72a"],["#7774e5","#abd70e","#e5e315","#eab322"],["#edb6bc","#c6bdab","#b5c9c0","#bddfd4"],["#bfb3d7","#f0d063","#a5cee2","#bea1a6"],["#ff8b8b","#f9f7e8","#b6e4e4","#61bfad"],["#f4f1c8","#e8a7df","#cdf4c7","#a6e4e3"],["#e5ddc8","#4391c1","#e6b840","#d7e4d2"],["#31b77a","#efe9d9","#fbcbbf","#cfecf4"],["#a5c1e6","#e6bca4","#cbe5a4","#bebfb9"],["#c6f6d5","#feebc8","#bee3f8","#fed7e2"],["#ff5d12","#ffaf8a","#ffe3d6","#ffeee6"],["#6f5cf1","#c5bcff","#dbd6ff","#f0eefe"],["#0e62f1","#a3c5ff","#ccdfff","#eef4fe"],["#9e9fc1","#c8a0be","#b2a697","#60b9c7"]]}'),t=JSON.parse('{"zh":"\u6e10\u53d8\u8272","en":"gradient","colors":[{"deg":135,"colors":[{"color":"#d6f6ff"},{"color":"#81d3ff"}]},{"deg":135,"colors":[{"color":"#facfc3"},{"color":"#ff9a9e"}]},{"deg":135,"colors":[{"color":"#ffecd2"},{"color":"#fcb69f"}]},{"deg":135,"colors":[{"color":"#f6d7ff"},{"color":"#b6daff"}]},{"deg":135,"colors":[{"color":"#e4eeff"},{"color":"#fee1fd"}]},{"deg":135,"colors":[{"color":"#85fba7"},{"color":"#0ecefb"}]},{"deg":135,"colors":[{"color":"#facfc3"},{"color":"#a48aff"}]},{"deg":135,"colors":[{"color":"#ae96ff"},{"color":"#8167ff"}]},{"deg":135,"colors":[{"color":"#e4daff"},{"color":"#9b7bfe"}]},{"deg":135,"colors":[{"color":"#fff9e3"},{"color":"#fee1fd"}]},{"deg":135,"colors":[{"color":"#e3eaff"},{"color":"#ffe3e3"}]},{"deg":135,"colors":[{"color":"#fbffd2"},{"color":"#d5fc9f"}]},{"deg":135,"colors":[{"color":"#ffe5d2"},{"color":"#fca79f"}]},{"deg":135,"colors":[{"color":"#e2ebf0"},{"color":"#cfd9df"}]}]}'),f=c,n=f.colors[0],a=t},5301:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(5145)}])}},function(e){e.O(0,[479,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);