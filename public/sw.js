if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,i,s)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return a;case"module":return n;default:return e(c)}})).then(e=>{const c=s(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"EJH8VXuUt_G8fZ9BVApcN"},{url:"/_next/static/EJH8VXuUt_G8fZ9BVApcN/_buildManifest.js",revision:"75471946ae6eaf26d0818d7cdade09b8"},{url:"/_next/static/EJH8VXuUt_G8fZ9BVApcN/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/EJH8VXuUt_G8fZ9BVApcN/pages/_app.js",revision:"f2e904dbe5b99ed0ff45cf4e26ba6525"},{url:"/_next/static/EJH8VXuUt_G8fZ9BVApcN/pages/_error.js",revision:"9470ce1148f44d80b91245b9111f8262"},{url:"/_next/static/EJH8VXuUt_G8fZ9BVApcN/pages/contato.js",revision:"720c6f261c82b81a292cffb5aa0b6e1c"},{url:"/_next/static/EJH8VXuUt_G8fZ9BVApcN/pages/dicas.js",revision:"280e88b5710ed3927df1d0f102a396fa"},{url:"/_next/static/EJH8VXuUt_G8fZ9BVApcN/pages/index.js",revision:"f9bb639d191c148b235c30f427ee1554"},{url:"/_next/static/EJH8VXuUt_G8fZ9BVApcN/pages/servicos.js",revision:"f11f0571dca4b43b18c5f0e2c082f08c"},{url:"/_next/static/EJH8VXuUt_G8fZ9BVApcN/pages/sobre.js",revision:"c1b63f04acd1a3142899eb19dd9c3c80"},{url:"/_next/static/EJH8VXuUt_G8fZ9BVApcN/pages/videos.js",revision:"5b88d4b55b65a579724ad8dd0e6b0198"},{url:"/_next/static/chunks/777cf710.a0f14cea6b35c81d353b.js",revision:"a7312e67ece71e9dd8bc1caaaf5cdb34"},{url:"/_next/static/chunks/84c63a59c68464e6034e825fe354cf315847c5fc.882b09bc92356e46234a.js",revision:"8deaba987314fac639b4626b6d8a22f3"},{url:"/_next/static/chunks/commons.34684228d50c6c140f9e.js",revision:"fd98fd4056e9cfdcae900925ff8eaa58"},{url:"/_next/static/chunks/framework.619a4f70c1d4d3a29cbc.js",revision:"8e6204793e3d11a8bedf359bfb6e110d"},{url:"/_next/static/chunks/styles.4c419f4b16a96bca7647.js",revision:"0f76c6f3cca30e5b890b037c53cdecd9"},{url:"/_next/static/css/styles.6565ec5d.chunk.css",revision:"c5bb13308128e4bde37d9163bdbb19b8"},{url:"/_next/static/runtime/main-294b7152480f82bc41c7.js",revision:"619bbdd14fad7480536c8f1765d1f4f2"},{url:"/_next/static/runtime/polyfills-2efeafdb249345ade087.js",revision:"fd9bc0005aeba5bd933108f1e12e93ae"},{url:"/_next/static/runtime/webpack-83bd83ab777f80a6c75c.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/apple-icon-57x57.png",revision:"47f85dab9105618ca5cdfcf943068bd5"},{url:"/apple-icon-60x60.png",revision:"8f8b2b3d2ede174d2cc3854a1fd1201f"},{url:"/apple-icon-72x72.png",revision:"4b6af7caffdd57a40cd9f1b5f046d171"},{url:"/apple-icon-76x76.png",revision:"56319432c68c90ad99a453ab2e67c8bc"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/icons/icon-128x128.png",revision:"db7481a04968b3ad4716436d30b3e409"},{url:"/icons/icon-144x144.png",revision:"689a1926530ed6ca26db537029c1dfd7"},{url:"/icons/icon-152x152.png",revision:"98af072da209b3b297308717b06ea86c"},{url:"/icons/icon-384x384.png",revision:"aae6d1f552c78e06bf42aae2462a98fa"},{url:"/icons/icon-72x72.png",revision:"cb6e3fb9db7db52f0986da1ff9bab188"},{url:"/icons/icon-96x96.png",revision:"7d8348b60cdd985bd24b48cb56855c1a"},{url:"/icons/icon192.png",revision:"acc6ef885126eefc0d987f104c587044"},{url:"/icons/icon512.png",revision:"4c880c5d0548d6920de79efa8363de2e"},{url:"/logo192.png",revision:"d4648d3a77a034c9779548cf57f821b3"},{url:"/logo512.png",revision:"1c6107fb72b46232bd54ba06efc2dc99"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/static/Instagram.png",revision:"a6c198ff3183adf837ece9eacb539da8"},{url:"/static/Youtube.png",revision:"8a183a77622a8c6933ca836c53a31a64"},{url:"/static/brain.png",revision:"937d022524c83a939a3d435860914a16"},{url:"/static/downward-facing-dog.png",revision:"6f688c656ba2e744e6cd70acb95e6743"},{url:"/static/exercise-01.png",revision:"220e11d8101b81663fc21751869ffe1f"},{url:"/static/exercise-02.png",revision:"3fbe02f524aabc5c31604bafec878c2e"},{url:"/static/exercise-03.png",revision:"d4d6b9d78f9454e123074eed4c60558e"},{url:"/static/exercise-04.png",revision:"c4c9198adafdf37f323b481f5d812eea"},{url:"/static/exercise1.png",revision:"a4f7392189b706ff736c18f726575944"},{url:"/static/facebook.png",revision:"01cb753858c826c86fab7b84f93727af"},{url:"/static/fitness.png",revision:"08af020ad88a45edaededba7f9cb42b3"},{url:"/static/h2-team-11.png",revision:"ea11a0727a69e3f86e45a98626b9a59c"},{url:"/static/instagram-profile.png",revision:"3a8ddbf9e09d9a19f2834bbf5da487f5"},{url:"/static/logo-t.png",revision:"8ffc6b5e2b5a65aa2a8fe798391bcb88"},{url:"/static/logo.png",revision:"e90be2907c7da936b13f343bd44ef71e"},{url:"/static/logo192.png",revision:"71a34a5a559dba740131f6dfc36e2cbf"},{url:"/static/logo512.png",revision:"fd21f45398519749d227e44974da0caf"},{url:"/static/muscle.png",revision:"90a1904af7185ef82226d1ec786e5972"},{url:"/static/play-about.png",revision:"369e2cb4da4153734239de4ec908a434"},{url:"/static/play-white.png",revision:"6e9fd6d966edb4ca71485b9a1e500d4d"},{url:"/static/study.png",revision:"9f92f40277431592d36dfa28d4160e4a"},{url:"/static/weight-loss.png",revision:"813ac1f7ae5618050ccf3372194a450f"},{url:"/static/weight-scale.png",revision:"58c28e45185880e08f1d5ed9f7f45964"},{url:"/static/whatsapp.png",revision:"744b7b4bace9bb44031ba10aa09b9a2d"},{url:"/static/woman1.png",revision:"5c2ea0395170b67b1ab297fd76f1c00a"},{url:"/static/zumba.png",revision:"468e42f32b3492b6368d8fd94c15f817"},{url:"/static/zumba1.png",revision:"b46858bae2a84247f14a4cd2e340bd09"},{url:"/vercel.svg",revision:"0222c3eef0be0734c8cd707b37c55d7e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
