import{r as K,j as Te,ec as we,w as Le}from"./index-_F_bM3ER.js";function ke(e,t){for(var a=0;a<t.length;a++){const o=t[a];if(typeof o!="string"&&!Array.isArray(o)){for(const p in o)if(p!=="default"&&!(p in e)){const _=Object.getOwnPropertyDescriptor(o,p);_&&Object.defineProperty(e,p,_.get?_:{enumerable:!0,get:()=>o[p]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Ce={},W={};W._=W._interop_require_default=De;function De(e){return e&&e.__esModule?e:{default:e}}var de={},Ge={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return t}});let t=a=>{}})(Ge);var Oe={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return t}});function t(a){let{widthInt:o,heightInt:p,blurWidth:_,blurHeight:s,blurDataURL:i,objectFit:O}=a;const y=20,u=_?_*40:o,f=s?s*40:p,d=u&&f?"viewBox='0 0 "+u+" "+f+"'":"",A=d?"none":O==="contain"?"xMidYMid":O==="cover"?"xMidYMid slice":"none";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+y+"'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='"+y+"'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+A+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}})(Oe);var te={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(p,_){for(var s in _)Object.defineProperty(p,s,{enumerable:!0,get:_[s]})}t(e,{VALID_LOADERS:function(){return a},imageConfigDefault:function(){return o}});const a=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}})(te);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return y}});const t=Oe,a=te;function o(u){return u.default!==void 0}function p(u){return u.src!==void 0}function _(u){return typeof u=="object"&&(o(u)||p(u))}function s(u){return typeof u>"u"?u:typeof u=="number"?Number.isFinite(u)?u:NaN:typeof u=="string"&&/^[0-9]+$/.test(u)?parseInt(u,10):NaN}function i(u,f,d){let{deviceSizes:A,allSizes:g}=u;if(d){const S=/(^|\s)(1?\d?\d)vw/g,U=[];for(let C;C=S.exec(d);C)U.push(parseInt(C[2]));if(U.length){const C=Math.min(...U)*.01;return{widths:g.filter(m=>m>=A[0]*C),kind:"w"}}return{widths:g,kind:"w"}}return typeof f!="number"?{widths:A,kind:"w"}:{widths:[...new Set([f,f*2].map(S=>g.find(U=>U>=S)||g[g.length-1]))],kind:"x"}}function O(u){let{config:f,src:d,unoptimized:A,width:g,quality:P,sizes:S,loader:U}=u;if(A)return{src:d,srcSet:void 0,sizes:void 0};const{widths:C,kind:m}=i(f,g,S),n=C.length-1;return{sizes:!S&&m==="w"?"100vw":S,srcSet:C.map((c,r)=>U({config:f,src:d,quality:P,width:c})+" "+(m==="w"?c:r+1)+m).join(", "),src:U({config:f,src:d,quality:P,width:C[n]})}}function y(u,f){let{src:d,sizes:A,unoptimized:g=!1,priority:P=!1,loading:S,className:U,quality:C,width:m,height:n,fill:c=!1,style:r,overrideSrc:l,onLoad:R,onLoadingComplete:T,placeholder:h="empty",blurDataURL:I,fetchPriority:E,layout:v,objectFit:w,objectPosition:k,lazyBoundary:Y,lazyRoot:Z,...z}=u;const{imgConf:M,showAltText:j,blurComplete:H,defaultLoader:B}=f;let L,D=M||a.imageConfigDefault;if("allSizes"in D)L=D;else{const b=[...D.deviceSizes,...D.imageSizes].sort((V,F)=>V-F),x=D.deviceSizes.sort((V,F)=>V-F);L={...D,allSizes:b,deviceSizes:x}}if(typeof B>"u")throw new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`);let X=z.loader||B;delete z.loader,delete z.srcSet;const J="__next_img_default"in X;if(J){if(L.loader==="custom")throw new Error('Image with src "'+d+`" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{const b=X;X=x=>{const{config:V,...F}=x;return b(F)}}if(v){v==="fill"&&(c=!0);const b={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},x={responsive:"100vw",fill:"100vw"},V=b[v];V&&(r={...r,...V});const F=x[v];F&&!A&&(A=F)}let N="",G=s(m),q=s(n),le,pe;if(_(d)){const b=o(d)?d.default:d;if(!b.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(b));if(!b.height||!b.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(b));if(le=b.blurWidth,pe=b.blurHeight,I=I||b.blurDataURL,N=b.src,!c){if(!G&&!q)G=b.width,q=b.height;else if(G&&!q){const x=G/b.width;q=Math.round(b.height*x)}else if(!G&&q){const x=q/b.height;G=Math.round(b.width*x)}}}d=typeof d=="string"?d:N;let fe=!P&&(S==="lazy"||typeof S>"u");(!d||d.startsWith("data:")||d.startsWith("blob:"))&&(g=!0,fe=!1),L.unoptimized&&(g=!0),J&&d.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(g=!0),P&&(E="high");const Ne=s(C),Q=Object.assign(c?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:w,objectPosition:k}:{},j?{}:{color:"transparent"},r),me=!H&&h!=="empty"?h==="blur"?'url("data:image/svg+xml;charset=utf-8,'+(0,t.getImageBlurSvg)({widthInt:G,heightInt:q,blurWidth:le,blurHeight:pe,blurDataURL:I||"",objectFit:Q.objectFit})+'")':'url("'+h+'")':null;let Pe=me?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:me}:{};const ne=O({config:L,src:d,unoptimized:g,width:G,quality:Ne,sizes:A,loader:X});return{props:{...z,loading:fe?"lazy":S,fetchPriority:E,width:G,height:q,decoding:"async",className:U,style:{...Q,...Pe},sizes:ne.sizes,srcSet:ne.srcSet,src:l||ne.src},meta:{unoptimized:g,priority:P,placeholder:h,fill:c}}}})(de);var ce={exports:{}},ee={};function Ae(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(Ae=function(o){return o?a:t})(e)}ee._=ee._interop_require_wildcard=Me;function Me(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var a=Ae(t);if(a&&a.has(e))return a.get(e);var o={__proto__:null},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in e)if(_!=="default"&&Object.prototype.hasOwnProperty.call(e,_)){var s=p?Object.getOwnPropertyDescriptor(e,_):null;s&&(s.get||s.set)?Object.defineProperty(o,_,s):o[_]=e[_]}return o.default=e,a&&a.set(e,o),o}var $={exports:{}},re={},be;function je(){return be||(be=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return _}});const t=K,a=typeof window>"u",o=a?()=>{}:t.useLayoutEffect,p=a?()=>{}:t.useEffect;function _(s){const{headManager:i,reduceComponentsToState:O}=s;function y(){if(i&&i.mountedInstances){const f=t.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(O(f,s))}}if(a){var u;i==null||(u=i.mountedInstances)==null||u.add(s.children),y()}return o(()=>{var f;return i==null||(f=i.mountedInstances)==null||f.add(s.children),()=>{var d;i==null||(d=i.mountedInstances)==null||d.delete(s.children)}}),o(()=>(i&&(i._pendingUpdate=y),()=>{i&&(i._pendingUpdate=y)})),p(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}}(re)),re}var oe={},ge;function ze(){return ge||(ge=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return o}});const o=W._(K).default.createContext({})}(oe)),oe}var se={},he;function Xe(){return he||(he=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"HeadManagerContext",{enumerable:!0,get:function(){return o}});const o=W._(K).default.createContext({})}(se)),se}var ie={},ve;function xe(){return ve||(ve=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return t}});function t(a){let{ampFirst:o=!1,hybrid:p=!1,hasQuery:_=!1}=a===void 0?{}:a;return o||p&&_}}(ie)),ie}var Re;function We(){return Re||(Re=1,function(e,t){"use client";var a={NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",TERM_PROGRAM:"vscode",NX_URL_GITHUB_GO:"https://github.com/",PROJECT_CWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",NX_URL_GITHUB_VAN:"https://github.com/",INIT_CWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",TERM:"xterm-256color",SHELL:"/bin/zsh",TMPDIR:"/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_FRZYC:"https://github.com/",TERM_PROGRAM_VERSION:"1.89.1",ZDOTDIR:"/Users/uybv",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",NX_GA_TRACKINGID:"UA-000000-01",MallocNanoZone:"0",NX_TASK_TARGET_TARGET:"build",USER:"uybv",COMMAND_MODE:"unix2003",NX_TASK_HASH:"11451723645421701864",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.toKwL6q7Ua/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",npm_execpath:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b/yarn",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_TASK_TARGET_PROJECT:"frontend",PATH:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/frontend/node_modules/.bin:/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/node_modules/.bin:/Users/uybv/Works/Projects/uybv/genshin-optimizer/node_modules/.bin:/Users/uybv/Works/Projects/uybv/node_modules/.bin:/Users/uybv/Works/Projects/node_modules/.bin:/Users/uybv/Works/node_modules/.bin:/Users/uybv/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/Cellar/node/22.2.0/bin:/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b:/usr/local/sbin:/usr/local/bin:/usr/local/opt/ruby/bin:/usr/local/opt/openjdk@11/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/usr/local/sbin:/usr/local/opt/ruby/bin:/usr/local/opt/openjdk@11/bin",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URLS_GUIDES:"[]",npm_package_json:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/package.json",_:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/node_modules/.bin/vite",NX_WORKSPACE_ROOT:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",__CFBundleIdentifier:"com.microsoft.VSCode",USER_ZDOTDIR:"/Users/uybv",PWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/frontend",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",npm_lifecycle_event:"build-go",npm_package_name:"genshin-optimizer",LANG:"en_US.UTF-8",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_DISCORD_GO:"https://discord.com/",XPC_FLAGS:"0x0",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",FORCE_COLOR:"true",npm_package_version:"10.8.1",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/uybv",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",LOGNAME:"uybv",PREFIX:"/usr/local",VSCODE_GIT_IPC_HANDLE:"/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/vscode-git-7d2eef5f6f.sock",BERRY_BIN_FOLDER:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b",LERNA_PACKAGE_NAME:"frontend",npm_config_user_agent:"yarn/3.4.1 npm/? node/v22.2.0 darwin x64",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",npm_node_execpath:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b/node",COLORTERM:"truecolor",NODE_ENV:"production"};Object.defineProperty(t,"__esModule",{value:!0});function o(m,n){for(var c in n)Object.defineProperty(m,c,{enumerable:!0,get:n[c]})}o(t,{default:function(){return C},defaultHead:function(){return d}});const p=W,_=ee,s=Te,i=_._(K),O=p._(je()),y=ze(),u=Xe(),f=xe();function d(m){m===void 0&&(m=!1);const n=[(0,s.jsx)("meta",{charSet:"utf-8"})];return m||n.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),n}function A(m,n){return typeof n=="string"||typeof n=="number"?m:n.type===i.default.Fragment?m.concat(i.default.Children.toArray(n.props.children).reduce((c,r)=>typeof r=="string"||typeof r=="number"?c:c.concat(r),[])):m.concat(n)}const g=["name","httpEquiv","charSet","itemProp"];function P(){const m=new Set,n=new Set,c=new Set,r={};return l=>{let R=!0,T=!1;if(l.key&&typeof l.key!="number"&&l.key.indexOf("$")>0){T=!0;const h=l.key.slice(l.key.indexOf("$")+1);m.has(h)?R=!1:m.add(h)}switch(l.type){case"title":case"base":n.has(l.type)?R=!1:n.add(l.type);break;case"meta":for(let h=0,I=g.length;h<I;h++){const E=g[h];if(l.props.hasOwnProperty(E))if(E==="charSet")c.has(E)?R=!1:c.add(E);else{const v=l.props[E],w=r[E]||new Set;(E!=="name"||!T)&&w.has(v)?R=!1:(w.add(v),r[E]=w)}}break}return R}}function S(m,n){const{inAmpMode:c}=n;return m.reduce(A,[]).reverse().concat(d(c).reverse()).filter(P()).reverse().map((r,l)=>{const R=r.key||l;if(a.__NEXT_OPTIMIZE_FONTS&&!c&&r.type==="link"&&r.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(T=>r.props.href.startsWith(T))){const T={...r.props||{}};return T["data-href"]=T.href,T.href=void 0,T["data-optimized-fonts"]=!0,i.default.cloneElement(r,T)}return i.default.cloneElement(r,{key:R})})}function U(m){let{children:n}=m;const c=(0,i.useContext)(y.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return(0,s.jsx)(O.default,{reduceComponentsToState:S,headManager:r,inAmpMode:(0,f.isInAmpMode)(c),children:n})}const C=U;(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}($,$.exports)),$.exports}var ae={},Ee;function He(){return Ee||(Ee=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ImageConfigContext",{enumerable:!0,get:function(){return p}});const a=W._(K),o=te,p=a.default.createContext(o.imageConfigDefault)}(ae)),ae}var ue={},ye;function qe(){return ye||(ye=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return o}});const o=W._(K).default.createContext(null)}(ue)),ue}var _e={},Se;function Ue(){return Se||(Se=1,function(e){var t={NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",TERM_PROGRAM:"vscode",NX_URL_GITHUB_GO:"https://github.com/",PROJECT_CWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",NX_URL_GITHUB_VAN:"https://github.com/",INIT_CWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",TERM:"xterm-256color",SHELL:"/bin/zsh",TMPDIR:"/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_FRZYC:"https://github.com/",TERM_PROGRAM_VERSION:"1.89.1",ZDOTDIR:"/Users/uybv",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",NX_GA_TRACKINGID:"UA-000000-01",MallocNanoZone:"0",NX_TASK_TARGET_TARGET:"build",USER:"uybv",COMMAND_MODE:"unix2003",NX_TASK_HASH:"11451723645421701864",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.toKwL6q7Ua/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",npm_execpath:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b/yarn",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_TASK_TARGET_PROJECT:"frontend",PATH:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/frontend/node_modules/.bin:/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/node_modules/.bin:/Users/uybv/Works/Projects/uybv/genshin-optimizer/node_modules/.bin:/Users/uybv/Works/Projects/uybv/node_modules/.bin:/Users/uybv/Works/Projects/node_modules/.bin:/Users/uybv/Works/node_modules/.bin:/Users/uybv/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/Cellar/node/22.2.0/bin:/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b:/usr/local/sbin:/usr/local/bin:/usr/local/opt/ruby/bin:/usr/local/opt/openjdk@11/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/usr/local/sbin:/usr/local/opt/ruby/bin:/usr/local/opt/openjdk@11/bin",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URLS_GUIDES:"[]",npm_package_json:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/package.json",_:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/node_modules/.bin/vite",NX_WORKSPACE_ROOT:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",__CFBundleIdentifier:"com.microsoft.VSCode",USER_ZDOTDIR:"/Users/uybv",PWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/frontend",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",npm_lifecycle_event:"build-go",npm_package_name:"genshin-optimizer",LANG:"en_US.UTF-8",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_DISCORD_GO:"https://discord.com/",XPC_FLAGS:"0x0",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",FORCE_COLOR:"true",npm_package_version:"10.8.1",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/uybv",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",LOGNAME:"uybv",PREFIX:"/usr/local",VSCODE_GIT_IPC_HANDLE:"/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/vscode-git-7d2eef5f6f.sock",BERRY_BIN_FOLDER:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b",LERNA_PACKAGE_NAME:"frontend",npm_config_user_agent:"yarn/3.4.1 npm/? node/v22.2.0 darwin x64",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",npm_node_execpath:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b/node",COLORTERM:"truecolor",NODE_ENV:"production"};Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o}});function a(p){let{config:_,src:s,width:i,quality:O}=p;return _.path+"?url="+encodeURIComponent(s)+"&w="+i+"&q="+(O||75)+(t.NEXT_DEPLOYMENT_ID?"&dpl="+t.NEXT_DEPLOYMENT_ID:"")}a.__next_img_default=!0;const o=a}(_e)),_e}(function(e,t){"use client";var a={NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",TERM_PROGRAM:"vscode",NX_URL_GITHUB_GO:"https://github.com/",PROJECT_CWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",NX_URL_GITHUB_VAN:"https://github.com/",INIT_CWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",TERM:"xterm-256color",SHELL:"/bin/zsh",TMPDIR:"/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_FRZYC:"https://github.com/",TERM_PROGRAM_VERSION:"1.89.1",ZDOTDIR:"/Users/uybv",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",NX_GA_TRACKINGID:"UA-000000-01",MallocNanoZone:"0",NX_TASK_TARGET_TARGET:"build",USER:"uybv",COMMAND_MODE:"unix2003",NX_TASK_HASH:"11451723645421701864",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.toKwL6q7Ua/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",npm_execpath:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b/yarn",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_TASK_TARGET_PROJECT:"frontend",PATH:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/frontend/node_modules/.bin:/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/node_modules/.bin:/Users/uybv/Works/Projects/uybv/genshin-optimizer/node_modules/.bin:/Users/uybv/Works/Projects/uybv/node_modules/.bin:/Users/uybv/Works/Projects/node_modules/.bin:/Users/uybv/Works/node_modules/.bin:/Users/uybv/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/Cellar/node/22.2.0/bin:/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b:/usr/local/sbin:/usr/local/bin:/usr/local/opt/ruby/bin:/usr/local/opt/openjdk@11/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/usr/local/sbin:/usr/local/opt/ruby/bin:/usr/local/opt/openjdk@11/bin",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URLS_GUIDES:"[]",npm_package_json:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/package.json",_:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/node_modules/.bin/vite",NX_WORKSPACE_ROOT:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",__CFBundleIdentifier:"com.microsoft.VSCode",USER_ZDOTDIR:"/Users/uybv",PWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/frontend",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",npm_lifecycle_event:"build-go",npm_package_name:"genshin-optimizer",LANG:"en_US.UTF-8",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_DISCORD_GO:"https://discord.com/",XPC_FLAGS:"0x0",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",FORCE_COLOR:"true",npm_package_version:"10.8.1",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/uybv",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",LOGNAME:"uybv",PREFIX:"/usr/local",VSCODE_GIT_IPC_HANDLE:"/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/vscode-git-7d2eef5f6f.sock",BERRY_BIN_FOLDER:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b",LERNA_PACKAGE_NAME:"frontend",npm_config_user_agent:"yarn/3.4.1 npm/? node/v22.2.0 darwin x64",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",npm_node_execpath:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b/node",COLORTERM:"truecolor",NODE_ENV:"production"};Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});const o=W,p=ee,_=Te,s=p._(K),i=o._(we),O=o._(We()),y=de,u=te,f=He(),d=qe(),A=o._(Ue()),g=a.__NEXT_IMAGE_OPTS;typeof window>"u"&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);function P(n,c,r,l,R,T,h){const I=n==null?void 0:n.src;if(!n||n["data-loaded-src"]===I)return;n["data-loaded-src"]=I,("decode"in n?n.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(!(!n.parentElement||!n.isConnected)){if(c!=="empty"&&R(!0),r!=null&&r.current){const v=new Event("load");Object.defineProperty(v,"target",{writable:!1,value:n});let w=!1,k=!1;r.current({...v,nativeEvent:v,currentTarget:n,target:n,isDefaultPrevented:()=>w,isPropagationStopped:()=>k,persist:()=>{},preventDefault:()=>{w=!0,v.preventDefault()},stopPropagation:()=>{k=!0,v.stopPropagation()}})}l!=null&&l.current&&l.current(n)}})}function S(n){const[c,r]=s.version.split(".",2),l=parseInt(c,10),R=parseInt(r,10);return l>18||l===18&&R>=3?{fetchPriority:n}:{fetchpriority:n}}const U=(0,s.forwardRef)((n,c)=>{let{src:r,srcSet:l,sizes:R,height:T,width:h,decoding:I,className:E,style:v,fetchPriority:w,placeholder:k,loading:Y,unoptimized:Z,fill:z,onLoadRef:M,onLoadingCompleteRef:j,setBlurComplete:H,setShowAltText:B,sizesInput:L,onLoad:D,onError:X,...J}=n;return(0,_.jsx)("img",{...J,...S(w),loading:Y,width:h,height:T,decoding:I,"data-nimg":z?"fill":"1",className:E,style:v,sizes:R,srcSet:l,src:r,ref:(0,s.useCallback)(N=>{c&&(typeof c=="function"?c(N):typeof c=="object"&&(c.current=N)),N&&(X&&(N.src=N.src),N.complete&&P(N,k,M,j,H))},[r,k,M,j,H,X,Z,L,c]),onLoad:N=>{const G=N.currentTarget;P(G,k,M,j,H)},onError:N=>{B(!0),k!=="empty"&&H(!0),X&&X(N)}})});function C(n){let{isAppRouter:c,imgAttributes:r}=n;const l={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...S(r.fetchPriority)};return c&&i.default.preload?(i.default.preload(r.src,l),null):(0,_.jsx)(O.default,{children:(0,_.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...l},"__nimg-"+r.src+r.srcSet+r.sizes)})}const m=(0,s.forwardRef)((n,c)=>{const l=!(0,s.useContext)(d.RouterContext),R=(0,s.useContext)(f.ImageConfigContext),T=(0,s.useMemo)(()=>{const j=g||R||u.imageConfigDefault,H=[...j.deviceSizes,...j.imageSizes].sort((L,D)=>L-D),B=j.deviceSizes.sort((L,D)=>L-D);return{...j,allSizes:H,deviceSizes:B}},[R]),{onLoad:h,onLoadingComplete:I}=n,E=(0,s.useRef)(h);(0,s.useEffect)(()=>{E.current=h},[h]);const v=(0,s.useRef)(I);(0,s.useEffect)(()=>{v.current=I},[I]);const[w,k]=(0,s.useState)(!1),[Y,Z]=(0,s.useState)(!1),{props:z,meta:M}=(0,y.getImgProps)(n,{defaultLoader:A.default,imgConf:T,blurComplete:w,showAltText:Y});return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(U,{...z,unoptimized:M.unoptimized,placeholder:M.placeholder,fill:M.fill,onLoadRef:E,onLoadingCompleteRef:v,setBlurComplete:k,setShowAltText:Z,sizesInput:n.sizes,ref:c}),M.priority?(0,_.jsx)(C,{isAppRouter:l,imgAttributes:z}):null]})});(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)})(ce,ce.exports);var Fe=ce.exports;(function(e){var t={NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",TERM_PROGRAM:"vscode",NX_URL_GITHUB_GO:"https://github.com/",PROJECT_CWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",NX_URL_GITHUB_VAN:"https://github.com/",INIT_CWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",TERM:"xterm-256color",SHELL:"/bin/zsh",TMPDIR:"/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_FRZYC:"https://github.com/",TERM_PROGRAM_VERSION:"1.89.1",ZDOTDIR:"/Users/uybv",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",NX_GA_TRACKINGID:"UA-000000-01",MallocNanoZone:"0",NX_TASK_TARGET_TARGET:"build",USER:"uybv",COMMAND_MODE:"unix2003",NX_TASK_HASH:"11451723645421701864",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.toKwL6q7Ua/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",npm_execpath:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b/yarn",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_TASK_TARGET_PROJECT:"frontend",PATH:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/frontend/node_modules/.bin:/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/node_modules/.bin:/Users/uybv/Works/Projects/uybv/genshin-optimizer/node_modules/.bin:/Users/uybv/Works/Projects/uybv/node_modules/.bin:/Users/uybv/Works/Projects/node_modules/.bin:/Users/uybv/Works/node_modules/.bin:/Users/uybv/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/Cellar/node/22.2.0/bin:/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b:/usr/local/sbin:/usr/local/bin:/usr/local/opt/ruby/bin:/usr/local/opt/openjdk@11/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/usr/local/sbin:/usr/local/opt/ruby/bin:/usr/local/opt/openjdk@11/bin",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URLS_GUIDES:"[]",npm_package_json:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/package.json",_:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/node_modules/.bin/vite",NX_WORKSPACE_ROOT:"/Users/uybv/Works/Projects/uybv/genshin-optimizer",__CFBundleIdentifier:"com.microsoft.VSCode",USER_ZDOTDIR:"/Users/uybv",PWD:"/Users/uybv/Works/Projects/uybv/genshin-optimizer/apps/frontend",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",npm_lifecycle_event:"build-go",npm_package_name:"genshin-optimizer",LANG:"en_US.UTF-8",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_DISCORD_GO:"https://discord.com/",XPC_FLAGS:"0x0",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",FORCE_COLOR:"true",npm_package_version:"10.8.1",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/uybv",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",LOGNAME:"uybv",PREFIX:"/usr/local",VSCODE_GIT_IPC_HANDLE:"/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/vscode-git-7d2eef5f6f.sock",BERRY_BIN_FOLDER:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b",LERNA_PACKAGE_NAME:"frontend",npm_config_user_agent:"yarn/3.4.1 npm/? node/v22.2.0 darwin x64",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",npm_node_execpath:"/private/var/folders/ft/b549wbq963zbc1kgd36hn3kw0000gn/T/xfs-9d7a930b/node",COLORTERM:"truecolor",NODE_ENV:"production"};Object.defineProperty(e,"__esModule",{value:!0});function a(y,u){for(var f in u)Object.defineProperty(y,f,{enumerable:!0,get:u[f]})}a(e,{default:function(){return O},getImageProps:function(){return i}});const o=W,p=de,_=Fe,s=o._(Ue());function i(y){const{props:u}=(0,p.getImgProps)(y,{defaultLoader:s.default,imgConf:t.__NEXT_IMAGE_OPTS});for(const[f,d]of Object.entries(u))d===void 0&&delete u[f];return{props:u}}const O=_.Image})(Ce);var Ie=Ce;const Ve=Le(Ie),Ze=ke({__proto__:null,default:Ve},[Ie]);export{Ze as i};