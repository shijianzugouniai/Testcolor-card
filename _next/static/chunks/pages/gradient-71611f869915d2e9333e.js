(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{1902:function(e,d,c){"use strict";var r=c(8527),o=(c(7294),c(456)),a=c(8250),f=c(5893);d.Z=function(e){var d=e.activeIndex,c=void 0===d?0:d;return(0,f.jsxs)(r.Ug,{justifyContent:"space-between",h:"80px",p:"0px 20px",bgColor:"white",position:"fixed",top:"0",left:"0",right:"0",boxShadow:"0px 5px 20px rgba(36, 37, 38, 0.25)",zIndex:1,children:[(0,f.jsxs)(r.Ug,{children:[(0,f.jsx)(o.Ee,{src:"./logo1.png",alt:"kaka color card"}),(0,f.jsx)(a.H1,{children:(0,f.jsx)(o.Ee,{src:"./logo2.png",alt:"kaka"})})]}),(0,f.jsxs)(r.Ug,{columnGap:"10px",children:[[{name:"Palette",link:"https://afterwork-design.github.io/color-card"},{name:"Gradient",link:"https://afterwork-design.github.io/color-card/gradient"},{name:"Step",link:"https://afterwork-design.github.io/color-card/step"}].map((function(e,d){return(0,f.jsx)(r.rU,{href:e.link,border:"2px solid transparent",p:"10px 2px",textDecoration:"none",borderBottomColor:c===d?"#ff8d1a":"",children:(0,f.jsx)(a.H2,{fontSize:"16px",children:e.name})},e.name)})),(0,f.jsx)(r.rU,{href:"https://github.com/afterwork-design/color-card",target:"_blank",pl:"20px",children:(0,f.jsx)(o.Ee,{src:"./github.png",w:"25px",h:"25px"})})]})]})}},8250:function(e,d,c){"use strict";c.d(d,{H1:function(){return n},H2:function(){return b},b:function(){return i}});var r=c(2809),o=(c(7294),c(8527)),a=c(5893);function f(e,d){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);d&&(r=r.filter((function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable}))),c.push.apply(c,r)}return c}function t(e){for(var d=1;d<arguments.length;d++){var c=null!=arguments[d]?arguments[d]:{};d%2?f(Object(c),!0).forEach((function(d){(0,r.Z)(e,d,c[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):f(Object(c)).forEach((function(d){Object.defineProperty(e,d,Object.getOwnPropertyDescriptor(c,d))}))}return e}var n=function(e){return(0,a.jsx)(o.X6,t({as:"h1",size:"xl",mt:0},e))},b=function(e){return(0,a.jsx)(o.X6,t({as:"h2",size:"lg"},e))},i=function(e){return(0,a.jsx)(o.xu,t({borderRadius:"8px",backgroundColor:"white"},e))}},1861:function(e,d,c){"use strict";c.r(d),c.d(d,{default:function(){return m}});var r=c(7294),o=c(8527),a=c(1902),f=c(7476),t=c(2809),n=c(219),b=c(4953),i=c(456),s=c(8250),l=function(e){var d="linear-gradient(".concat(e.deg,"deg");return e.colors.forEach((function(e){var c;d+=", ".concat(e.color," ").concat(null!==(c=e.pos)&&void 0!==c?c:"")})),d+=")"},u=c(5893),p=["gradientColor","setColorDialogBg"];function g(e,d){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);d&&(r=r.filter((function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable}))),c.push.apply(c,r)}return c}function x(e){for(var d=1;d<arguments.length;d++){var c=null!=arguments[d]?arguments[d]:{};d%2?g(Object(c),!0).forEach((function(d){(0,t.Z)(e,d,c[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):g(Object(c)).forEach((function(d){Object.defineProperty(e,d,Object.getOwnPropertyDescriptor(c,d))}))}return e}var h=function(e){var d=e.gradientColor,c=e.setColorDialogBg,a=(0,n.Z)(e,p),f=(0,b.pm)(),t=(0,r.useState)(l(d)),g=t[0],h=t[1];(0,r.useEffect)((function(){h(l(d))}),[d]);return(0,u.jsx)(s.b,x(x({pos:"relative",h:"0",pb:"calc(100% + 40px)",overflow:"hidden",boxShadow:"5px 12px 20px rgba(36, 37, 38, 0.13)"},a),{},{children:(0,u.jsxs)(o.gC,{pos:"absolute",left:"0",top:"0",right:"0",bottom:"0",bg:"white",children:[(0,u.jsx)(o.xu,{w:"100%",flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",children:(0,u.jsx)(o.xu,{className:"grad",bg:g,w:"65%",h:"0",pb:"65%",borderRadius:"20px",cursor:"pointer",onClick:function(){return c(g)},transition:"1s",_hover:{transform:"scale(3)",borderRadius:"50%"}})}),(0,u.jsxs)(o.Ug,{justifyContent:"space-between",bgColor:"#f5f5f5",w:"100%",h:"40px",p:"0 20px",mt:"0 !important",children:[(0,u.jsx)(o.Ug,{children:d.colors.map((function(e){return(0,u.jsx)(o.xu,{w:"12px",h:"12px",bgColor:e.color,borderRadius:"6px",cursor:"pointer",onClick:function(){return function(e){navigator.clipboard.writeText(e).then((function(){f({title:"color copied!",description:e,status:"success",duration:1e3})}))}(e.color)}},"".concat(e.color," ").concat(e.pos))}))}),(0,u.jsx)(o.xu,{children:(0,u.jsx)(i.Ee,{src:"./copy.png",cursor:"pointer",onClick:function(){var e=g;navigator.clipboard.writeText(e).then((function(){f({title:"color copied!",description:e,status:"success",duration:1e3})}))}})})]})]})}))},j=c(434),w=function(e){var d=e.colorDialogBg,c=e.colorDialogShow,r=e.setColorDialogShow,a=(0,b.pm)();return(0,u.jsxs)(j.dy,{isOpen:c,placement:"right",onClose:function(){return r(!1)},size:"lg",children:[(0,u.jsx)(j.P1,{}),(0,u.jsxs)(j.sc,{p:0,cursor:"pointer",onClick:function(){var e=d;navigator.clipboard.writeText(e).then((function(){a({title:"color copied!",description:e,status:"success",duration:1e3})}))},title:"click to copy",children:[(0,u.jsx)(j.cC,{}),(0,u.jsx)(j.Ng,{p:0,children:(0,u.jsx)(o.xu,{h:"100%",w:"100%",bg:d})})]})]})},O=f.FL.colors,v=function(){var e=(0,r.useState)(!1),d=e[0],c=e[1],a=(0,r.useState)(""),f=a[0],t=a[1],n=(0,r.useCallback)((function(e){t(e),c(!0)}),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.rj,{rowGap:"40px",columnGap:"40px",m:"120px auto",maxW:["1000px","1200px","1400px"],pl:"15px",pr:"15px",gridTemplateColumns:["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)","repeat(5, 1fr)","repeat(6, 1fr)"],children:O.map((function(e){var d=l(e);return(0,u.jsx)(h,{gradientColor:e,setColorDialogBg:n},d)}))}),(0,u.jsx)(w,{colorDialogBg:f,colorDialogShow:d,setColorDialogShow:c})]})},m=function(){return(0,u.jsxs)(o.xu,{children:[(0,u.jsx)(a.Z,{activeIndex:1}),(0,u.jsx)(v,{})]})}},7476:function(e,d,c){"use strict";c.d(d,{UA:function(){return f},FL:function(){return n},kM:function(){return t},Nb:function(){return b}});var r=JSON.parse('{"zh":"\u56db\u8272","en":"four","colors":[["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb"],["#d8c1bb","#f0e2e0","#ebeee7","#e0c3a8"],["#e7669e","#e7afcc","#e6d9e3","#5fa0d9"],["#f29ab2","#f6d2e0","#d6dbee","#ccc9de"],["#eec9be","#f3dbdb","#d2e8da","#9acddc"],["#a1a5cb","#cbc7d9","#d9ccd0","#bfb6c7"],["#e7ab89","#e0cfbb","#e9dbd0","#a59179"],["#a17364","#d7dac5","#dbcdb2","#dac488"],["#9c9672","#c6b597","#b9c4b3","#a1b3a7"],["#a1b3a7","#bfafa2","#b3a799","#7e988d"],["#c4987d","#cebf9e","#dacdbd","#b0a498"],["#c2a279","#e5cbb2","#d1c088","#d49d7e"],["#fbaf74","#f8f18e","#6dbb68","#fda295"],["#e9d1af","#4b9faa","#b98377","#ed8381"],["#fcf8e0","#f1decf","#ffe3d6","#ffaf8a"],["#f3c5c7","#ffaf8a","#cec7f3","#d6e4a6"],["#db705e","#fee1d9","#d9ebf5","#a8c8d7"],["#9cdee5","#a4e69c","#e6d29c","#e6e59c"],["#d6694c","#f5c0a1","#d8ddc0","#9bc2b0"],["#e19536","#f7c7b0","#cba47b","#3b5f2b"],["#eed05b","#e68764","#907b57","#f0d8ad"],["#2a5097","#cf6938","#ffc8a9","#1e73c4"],["#db5087","#f8edfd","#ecbdcf","#8bb3c0"],["#de9e20","#0758a6","#d47222","#d3b28f"],["#67b176","#0f7953","#b3cf9f","#80a949"],["#0f67fc","#b3cffe","#f8cfb1","#ab4215"],["#0f3391","#d68d28","#ddb419","#a11109"],["#a32317","#d9d8c9","#e9c318","#496d5c"],["#d25536","#f5ead9","#f9c7b0","#f6c72a"],["#7774e5","#abd70e","#e5e315","#eab322"],["#edb6bc","#c6bdab","#b5c9c0","#bddfd4"],["#bfb3d7","#f0d063","#a5cee2","#bea1a6"],["#ff8b8b","#f9f7e8","#b6e4e4","#61bfad"],["#f4f1c8","#e8a7df","#cdf4c7","#a6e4e3"],["#e5ddc8","#4391c1","#e6b840","#d7e4d2"],["#31b77a","#efe9d9","#fbcbbf","#cfecf4"],["#a5c1e6","#e6bca4","#cbe5a4","#bebfb9"],["#c6f6d5","#feebc8","#bee3f8","#fed7e2"],["#ff5d12","#ffaf8a","#ffe3d6","#ffeee6"],["#6f5cf1","#c5bcff","#dbd6ff","#f0eefe"],["#0e62f1","#a3c5ff","#ccdfff","#eef4fe"],["#9e9fc1","#c8a0be","#b2a697","#60b9c7"]]}'),o=JSON.parse('{"zh":"\u6e10\u53d8\u8272","en":"gradient","colors":[{"deg":135,"colors":[{"color":"#d6f6ff"},{"color":"#81d3ff"}]},{"deg":135,"colors":[{"color":"#facfc3"},{"color":"#ff9a9e"}]},{"deg":135,"colors":[{"color":"#ffecd2"},{"color":"#fcb69f"}]},{"deg":135,"colors":[{"color":"#f6d7ff"},{"color":"#b6daff"}]},{"deg":135,"colors":[{"color":"#e4eeff"},{"color":"#fee1fd"}]},{"deg":135,"colors":[{"color":"#85fba7"},{"color":"#0ecefb"}]},{"deg":135,"colors":[{"color":"#facfc3"},{"color":"#a48aff"}]},{"deg":135,"colors":[{"color":"#ae96ff"},{"color":"#8167ff"}]},{"deg":135,"colors":[{"color":"#e4daff"},{"color":"#9b7bfe"}]},{"deg":135,"colors":[{"color":"#fff9e3"},{"color":"#fee1fd"}]},{"deg":135,"colors":[{"color":"#e3eaff"},{"color":"#ffe3e3"}]},{"deg":135,"colors":[{"color":"#fbffd2"},{"color":"#d5fc9f"}]},{"deg":135,"colors":[{"color":"#ffe5d2"},{"color":"#fca79f"}]},{"deg":135,"colors":[{"color":"#e2ebf0"},{"color":"#cfd9df"}]}]}'),a=JSON.parse('{"zh":"\u9636\u68af\u8272","en":"step","colors":[["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"],["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"],["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"],["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"],["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"],["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"],["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"],["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"],["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"],["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"],["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5","#eae3dd","#d8c1bb","#d5a09a","#f2dbd5"]]}'),f=r,t=f.colors[0],n=o,b=a},9435:function(e,d,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gradient",function(){return c(1861)}])}},function(e){e.O(0,[774,706,72,888,179],(function(){return d=9435,e(e.s=d);var d}));var d=e.O();_N_E=d}]);