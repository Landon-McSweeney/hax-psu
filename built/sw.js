if(!self.define){let e,d={};const i=(i,r)=>(i=new URL(i+".js",r).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(d[c])return;let f={};const o=e=>i(e,c),n={module:{uri:c},exports:f,require:o};d[c]=Promise.all(r.map((e=>n[e]||o(e)))).then((e=>(s(...e),f)))}}define(["./workbox-499851c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"265704a6.js",revision:"5629e260a46106b2374e1550978d8f47"},{url:"486cdaaa.js",revision:"47e6452591c7ebe41276eee4ea48774d"},{url:"4d9f8690.js",revision:"4200d6073b8034cc8c190e9608f03cb6"},{url:"5aad834d.css",revision:"b6edb2fd369016d618b741d0610b053b"},{url:"628f8eb9.js",revision:"0a6017213f4fe8c689f734d24fd064fd"},{url:"6adf030a.js",revision:"100048aab9612a14d73a3e6d0e70239b"},{url:"72c16fe0.js",revision:"e69ea796687229ebbb578554ed803304"},{url:"8b05d449.js",revision:"f9b1f91a85f6d606ccc59a2b9ee3ae7c"},{url:"939cc730.js",revision:"75e7ecddc40feb0630529ca36b7e2a51"},{url:"af8ca8e3.js",revision:"723951026f74dab958aaf8882227913d"},{url:"c5fe2f0e.js",revision:"8f9675073b9e4711d1c9eccae8dc4cd8"},{url:"d1121b87.css",revision:"72f4d341dd8379969253989fbbe0aab9"},{url:"f42700fe.js",revision:"fd871598328ed868f2c389b7cb1fbb85"},{url:"fd597b66.js",revision:"8ccb576d42495d2d54e3c15da3bce035"},{url:"index.html",revision:"7d0c5d718bc0d2ff43726760f3077f62"}],{})}));
//# sourceMappingURL=sw.js.map
