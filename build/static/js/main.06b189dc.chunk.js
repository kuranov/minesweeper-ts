(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(5),l=t.n(r),c=(t(12),t(1)),o=(t(13),t(14),function(e){var n,t=e.onGameStarted,r=e.display,l=Object(a.useState)(10),o=Object(c.a)(l,2),s=o[0],u=o[1],m=Object(a.useState)(10),f=Object(c.a)(m,2),d=f[0],v=f[1],g=Object(a.useState)(4),h=Object(c.a)(g,2),p=h[0],b=h[1];return"string"===typeof r&&(n=i.a.createElement("div",{className:"Menu-message"},r)),i.a.createElement("div",{className:"Menu",style:{display:!1!==r?"flex":"none"}},i.a.createElement("div",{className:"Menu-panel"},n,i.a.createElement("div",{className:"Menu-field"},i.a.createElement("label",{htmlFor:"width"},"Width"),i.a.createElement("input",{id:"width",type:"number",min:"1",max:"300",placeholder:"",value:s,onChange:function(e){u(parseInt(e.target.value||"0",10))}})),i.a.createElement("div",{className:"Menu-field"},i.a.createElement("label",{htmlFor:"height"},"Height"),i.a.createElement("input",{id:"height",type:"number",min:"1",max:"300",value:d,onChange:function(e){v(parseInt(e.target.value||"0",10))}})),i.a.createElement("div",{className:"Menu-field"},i.a.createElement("label",{htmlFor:"mines"},"Mines"),i.a.createElement("input",{id:"mines",type:"number",min:"1",max:"9000",placeholder:"",value:p,onChange:function(e){b(parseInt(e.target.value||"0",10))}})),i.a.createElement("div",{className:"Menu-field"},i.a.createElement("div",{className:"Menu-btn",onClick:function(){return t(s,d,p)}},"New game"))))});t(15);var s=function(e){var n=e.flagsCount,t=e.onMenuButtonClick;return i.a.createElement("div",{className:"Panel"},i.a.createElement("div",{className:"Panel-menu-btn",onClick:t},"New game"),i.a.createElement("div",{className:"Panel-flags"},n," \u2691 "))},u=t(6),m=(t(16),function(e){var n=e.x,t=e.y,a=e.isMine,r=e.isOpen,l=e.isFlagged,c=e.minesAround,o=e.onClick,s=["Tile"],u="";return r&&a?u="\ud83d\udca3":r&&!a?u=c+"":!r&&l&&(u="\u2691",s.push("Tile--flagged")),r&&s.push("Tile--is-open"),i.a.createElement("div",{className:s.join(" "),onClick:function(e){o(n,t,e.shiftKey)}},i.a.createElement("div",{className:"Tile-content"},u))}),f=(t(17),function(e){var n=e.width,t=e.height,r=e.mines,l=e.flagsCount,o=e.startedAt,s=e.onFlagsChanged,f=e.onMineRevealed,d=e.onAllMinesFlagged,v=Object(a.useState)(null),g=Object(c.a)(v,2),h=g[0],p=g[1];Object(a.useEffect)((function(){var e=N(n,t,r),a=w(n,t,(function(n,t){return{x:n,y:t,minesAround:j(e,n,t),isMine:M(e,n,t),isFlagged:!1,isOpen:!1}}));p(a)}),[n,t,r,o]);var b=function(e,n,t){if(h&&h[n]&&h[n][e]){var a=h[n][e];!a.isOpen&&t?a.isFlagged?(a.isFlagged=!1,s(1)):l>0?(a.isFlagged=!0,s(-1),E()&&d()):0===l&&s(-1):a.isOpen||a.isFlagged||(a.isOpen=!0,a.isMine?f():0===a.minesAround&&O(e,n)),p(Object(u.a)(h))}},E=function(){var e=0;return h&&h.forEach((function(n){return n.forEach((function(n){n.isMine&&n.isFlagged&&e++}))})),e===r},O=function e(n,t){for(var a=-1;a<=1;a++)for(var i=-1;i<=1;i++)if(0!==i||0!==a){var r=n+a,l=t+i;if(h&&h[l]&&h[l][r]){var c=h[l][r];c.isOpen||0!==c.minesAround||(c.isOpen=!0,e(r,l))}}return h},M=function(e,n,t){return!!e[n+"-"+t]},j=function(e,n,t){for(var a=0,i=-1;i<=1;i++)for(var r=-1;r<=1;r++)0===r&&0===i||M(e,n+i,t+r)&&a++;return a},w=function(e,n,t){for(var a=[],i=0;i<n;i++){for(var r=[],l=0;l<e;l++)r.push(t(l,i));a.push(r)}return a},N=function(e,n,t){for(var a=function(e){return Math.round(Math.random()*(e-1))},i={};t>0;){var r=a(e),l=a(n);M(i,r,l)||(i[r+"-"+l]=!0,t--)}return i};return i.a.createElement("div",{key:"Minefield",className:"Minefield"},null===h?null:h.map((function(e,n){return i.a.createElement("div",{className:"Minifield-row",key:n},e.map((function(e){return i.a.createElement(m,Object.assign({key:e.x+"-"+e.y},e,{onClick:b}))})))})))}),d=function(){var e=Object(a.useState)(0),n=Object(c.a)(e,2),t=n[0],r=n[1],l=Object(a.useState)(0),u=Object(c.a)(l,2),m=u[0],d=u[1],v=Object(a.useState)(0),g=Object(c.a)(v,2),h=g[0],p=g[1],b=Object(a.useState)(0),E=Object(c.a)(b,2),O=E[0],M=E[1],j=Object(a.useState)(new Date),w=Object(c.a)(j,2),N=w[0],y=w[1],C=Object(a.useState)(!0),k=Object(c.a)(C,2),F=k[0],S=k[1];return i.a.createElement("div",{className:"App"},i.a.createElement(o,{onGameStarted:function(e,n,t){t>e*n&&(t=e*n),r(e),d(n),p(t),M(t),y(new Date),S(!1)},display:F}),i.a.createElement("div",{className:"App-board"},i.a.createElement(s,{onMenuButtonClick:function(){S(!0)},flagsCount:O}),i.a.createElement(f,{width:t,height:m,mines:h,startedAt:N,flagsCount:O,onFlagsChanged:function(e){var n=O+e;if(n<0)return alert("No flags available");M((function(e){return n>=0?n:0}))},onMineRevealed:function(){S("\ud83d\udca5You blown up!")},onAllMinesFlagged:function(){S("\ud83c\udfc6 You win!")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.06b189dc.chunk.js.map