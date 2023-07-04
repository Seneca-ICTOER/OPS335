(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"1c9800227763dd2d4af3d0f94df2848c","url":"404.html"},{"revision":"d31c2c86e304a3f15fc6fb0c6580b40d","url":"A-Labs/installation-lab0.html"},{"revision":"e38f5196c7367650ab5c5f4aaa93a13b","url":"A-Labs/lab1.html"},{"revision":"e94777bc8c3b6687e012dc81f94d0299","url":"A-Labs/lab2a.html"},{"revision":"86167575d1721d6cd9f1f4ef9474c42b","url":"A-Labs/lab2b.html"},{"revision":"ad1d3dc142b5cca9c26cc4b96c24dc8a","url":"A-Labs/lab3.html"},{"revision":"f966378dba76ff088ebe4ac11bf16947","url":"A-Labs/lab4a.html"},{"revision":"7484aa2999c582617f11d4bd022aa51f","url":"A-Labs/lab4b.html"},{"revision":"f1431837c209c35670668cd0df66cd4d","url":"A-Labs/lab5.html"},{"revision":"d1f2856cf278b12a419665b7054b4cfb","url":"A-Labs/lab6.html"},{"revision":"296859de722610399d78ea1d358bb3a8","url":"A-Labs/lab7.html"},{"revision":"d18ded4a031008a7c3a64a5c64ca1ca1","url":"A-Labs/lab8.html"},{"revision":"4a30e0992a6a9401f7f666bf4fc5df74","url":"assets/css/styles.099fe1a9.css"},{"revision":"c9c27d642cf60042658769bee651f953","url":"assets/js/0ec012bb.8c78ed55.js"},{"revision":"036d915634d32300b7fb596d6e36733f","url":"assets/js/11b7b56a.d2b6dd6f.js"},{"revision":"f0d728915dd24be83b83dc8a501aa305","url":"assets/js/131.81269811.js"},{"revision":"4791f90249447455e22bcb3e664175a8","url":"assets/js/17896441.54415b13.js"},{"revision":"8f58349e11d219ad25297297ce86fc87","url":"assets/js/1be78505.8e1e9e18.js"},{"revision":"8c9cd62c997bf9f99473685f8a79bf7a","url":"assets/js/26ca04a3.c2afd1b1.js"},{"revision":"891526351d7d33345ff1a939b560ef16","url":"assets/js/283.5fe00761.js"},{"revision":"fc57cc0171e87611f904b4edd886c84d","url":"assets/js/2e4d43f9.dfc781bc.js"},{"revision":"9295277fa0d929dea6ab5d4b7d27a540","url":"assets/js/30eb2287.e382203c.js"},{"revision":"59e3d8a939d806d0505062b45b41bc0d","url":"assets/js/3539134b.fc133cdf.js"},{"revision":"3fe28e050ca4ee80a1ffcef99e9e4331","url":"assets/js/4f5272dc.72e5957e.js"},{"revision":"08b462146490ca8cc49c8129200daf33","url":"assets/js/539.ff7d7bc7.js"},{"revision":"35beb6e70816f67d724d5b6b2e81ba67","url":"assets/js/5b2223f5.45db7394.js"},{"revision":"29cae8d88e77c0b6becdda951928017f","url":"assets/js/5f827bca.2e77169a.js"},{"revision":"ece1da28c875d5b143101fecf6a6f1b0","url":"assets/js/61c5f690.c5e3cd6a.js"},{"revision":"e92fb713103f74b15db5ec672849e02e","url":"assets/js/66689c68.001b1920.js"},{"revision":"88ca0b797f2936e478ff7d00bd8964ab","url":"assets/js/78cb7f1f.0244c257.js"},{"revision":"14fddb17aef4cc71d342c14bdc7276e0","url":"assets/js/8661af7e.0656357b.js"},{"revision":"040c1c90a19fe7373762805d72ce9792","url":"assets/js/935f2afb.40a756ed.js"},{"revision":"272d9b70989e6ff9142a1196d97095de","url":"assets/js/972.52c1eff8.js"},{"revision":"98a382334e7f6107a6dc46cbf485173a","url":"assets/js/a88d66cd.599f0087.js"},{"revision":"65ce1699eeec120eb02f64d261637200","url":"assets/js/b5a834d3.7c12f98e.js"},{"revision":"cd87852c205eede374722661db312d6c","url":"assets/js/c0e20c00.dfe01e42.js"},{"revision":"5795ca8f05377e9292ff41ea2c873111","url":"assets/js/c9f97ed8.ea9936b7.js"},{"revision":"5f95bc7081c260d03bc046cdd8d0bedc","url":"assets/js/dce5ac83.dd4c50e5.js"},{"revision":"61d015a3d938288ecb9569dc2bf4a22d","url":"assets/js/df5b70cf.429b73a6.js"},{"revision":"43dcfbd27ba31d66751acf117c0f5f2d","url":"assets/js/ea934244.6b6ed358.js"},{"revision":"feee1df2877d4a9d1f7cba0757e2e256","url":"assets/js/eb6a5da1.61dfd35b.js"},{"revision":"8fb143fc2ad8a2da037259cac0db7393","url":"assets/js/f84305ad.727d9f9f.js"},{"revision":"8c9036840078490fa45cd5ab3a0d68eb","url":"assets/js/fc12cdd3.32090ed4.js"},{"revision":"6967990a8c945297a52138228b80e229","url":"assets/js/main.293728ce.js"},{"revision":"70a7f10655ea484f25dcd6a8d6767cca","url":"assets/js/runtime~main.1c5b84a8.js"},{"revision":"76ade666dadf403468a1dd6b1d5c8492","url":"B-Assignments/assignment1-part1.html"},{"revision":"4bf7732a22744eb0ff36f986ef0f9ea4","url":"B-Assignments/assignment1-part2.html"},{"revision":"5eda120b5126e8b6596b59c5e6c5068c","url":"B-Assignments/assignment2.html"},{"revision":"4b329b1ca83470e399120eac090deaeb","url":"C-ExtraResources/crontab-tutorial.html"},{"revision":"dadcbc4c3ad65aea67aa784570910b69","url":"C-ExtraResources/hide-show-grub-menu-at-boot.html"},{"revision":"6fea1360f2472822a7c3e1bbf7e39697","url":"C-ExtraResources/reset-grub-password.html"},{"revision":"4e44af58b844bfbccff5313c02e0fb1b","url":"C-ExtraResources/resources.html"},{"revision":"a4ce58a729f177cc8c77e6175f7ad69b","url":"C-ExtraResources/systemd-fedora.html"},{"revision":"3072f0a11cb2e62ec439a5afd3976447","url":"C-ExtraResources/unbinding-mac-addresses-on-fedora.html"},{"revision":"91476db9f7bee034dca09d4d49753c96","url":"index.html"},{"revision":"2524df02c6e551be5aef857403777080","url":"manifest.json"},{"revision":"1cfa66a8904c614d8e68fc8479dc4b47","url":"weekly-schedule.html"},{"revision":"d710471700766a0a27fe0577e10a7df8","url":"assets/images/Andrew-afbdf155316d22a98680668976929d4b.jpg"},{"revision":"3a6acbe59eebf577198e29835bb674fb","url":"assets/images/Crypto-af344448b2262e843c3f9878ed0f3c5a.jpeg"},{"revision":"705d63e50a7bd5f2f1e169196df87324","url":"assets/images/Email-servers-a743910280dcb75edc5d46c6f7f1c345.png"},{"revision":"4b6ea95989c1a71241606c45a36e5571","url":"assets/images/Iptables-41593960263c3f4ed47eb8000073c778.png"},{"revision":"98015a540291858f7fccde436c444a30","url":"assets/images/Lab2network-c5986b065cde7cf7a3f9a67e44519a3a.png"},{"revision":"fdfcdbda47b9ebd729b67480aeacb5c5","url":"assets/images/Lamp-5efba1c962cb144449807cd108c14ab1.png"},{"revision":"417457ddd36075fa5b93d390b1ea517b","url":"assets/images/Ops235-network-mac-1-e46aa4e6fdcf049db774d86ff45b55ad.png"},{"revision":"f4db008d8db4c57f98301477aa4c31e7","url":"assets/images/Ops235-network-mac-2-5ebbde19bdd2580b09177f917b3d398c.png"},{"revision":"b6f04418d3c0cb1048312e12d2077517","url":"assets/images/Ops235-network-mac-3-c410a2ee36753acba35b21ad024eeb9b.png"},{"revision":"1866f12cb17ce6954ab71c2962def273","url":"assets/images/Ops335-email-step1-0fe9d3bac9dfb161705ff0baca7bfa4c.png"},{"revision":"03979d04b7b087e860b753c681916256","url":"assets/images/Roundcube-pic-5b3cd0bfce86f9fe714d5077e09440c8.png"},{"revision":"78484c63f8b7352a3a4e37e7de4928fd","url":"assets/images/Samba-login-d43ed90f07db19feb225d43b7be3d767.png"},{"revision":"c077160d4312d9cbaeda98e94c5028b5","url":"assets/images/Samba3-map-drive-5ae7d35e370f99906b985b42e2875efe.png"},{"revision":"a613b4ed3dde97a3a7c1925fba75cb8d","url":"assets/images/Seneca-student-thunderbird-email-setup-b41a3e1b51aedd9add65068cb8912314.png"},{"revision":"42a6344fbceb8337c2a8dbe5bf75e3ad","url":"assets/images/SMTP-certificate-warning-826d94bacc9489164a82dd3a582ee8dd.png"},{"revision":"8dcd15d6f4880efcbcf636ea07ecba55","url":"assets/images/Ssh_connection_explained-b232ae2f635da7616adb7dfe8ee6dea4.png"},{"revision":"d710471700766a0a27fe0577e10a7df8","url":"img/Andrew.jpg"},{"revision":"3a6acbe59eebf577198e29835bb674fb","url":"img/Crypto.jpeg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"705d63e50a7bd5f2f1e169196df87324","url":"img/Email-servers.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"8d255281455c8c37efe9ddf408b1b658","url":"img/HansHeim.jpg"},{"revision":"4b6ea95989c1a71241606c45a36e5571","url":"img/Iptables.png"},{"revision":"98015a540291858f7fccde436c444a30","url":"img/Lab2network.png"},{"revision":"fdfcdbda47b9ebd729b67480aeacb5c5","url":"img/Lamp.png"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"417457ddd36075fa5b93d390b1ea517b","url":"img/Ops235-network-mac-1.png"},{"revision":"f4db008d8db4c57f98301477aa4c31e7","url":"img/Ops235-network-mac-2.png"},{"revision":"b6f04418d3c0cb1048312e12d2077517","url":"img/Ops235-network-mac-3.png"},{"revision":"1866f12cb17ce6954ab71c2962def273","url":"img/Ops335-email-step1.png"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"03979d04b7b087e860b753c681916256","url":"img/Roundcube-pic.png"},{"revision":"8d455fb1c27408024b652b0facb5d26f","url":"img/Roundcube.png"},{"revision":"78484c63f8b7352a3a4e37e7de4928fd","url":"img/Samba-login.png"},{"revision":"c077160d4312d9cbaeda98e94c5028b5","url":"img/Samba3-map-drive.png"},{"revision":"a613b4ed3dde97a3a7c1925fba75cb8d","url":"img/Seneca-student-thunderbird-email-setup.png"},{"revision":"42a6344fbceb8337c2a8dbe5bf75e3ad","url":"img/SMTP-certificate-warning.png"},{"revision":"8dcd15d6f4880efcbcf636ea07ecba55","url":"img/Ssh_connection_explained.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();