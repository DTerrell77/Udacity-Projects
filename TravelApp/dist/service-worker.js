if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}})).then(e=>{const s=n(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"8ebae3620a839c59372f.js",revision:"487ccd09df2a2fb1ba704112b8897e8b"},{url:"assets/imgs/crab.png",revision:"2b7bd8e6ca5cd1d9d87cdfb0339e402e"},{url:"assets/imgs/island.png",revision:"6acf5509762800cee8a53138efda418b"},{url:"assets/imgs/logo.png",revision:"da23448158584b8d19b91bbf3d0417a4"},{url:"main.css",revision:"14098be1a6d5078510ecb734aa70682f"}],{})}));
//# sourceMappingURL=service-worker.js.map
