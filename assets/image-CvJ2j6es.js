import{r as K,j as Ae,eh as we,x as ve}from"./index-BrIlT52t.js";function Me(e,t){for(var a=0;a<t.length;a++){const n=t[a];if(typeof n!="string"&&!Array.isArray(n)){for(const d in n)if(d!=="default"&&!(d in e)){const l=Object.getOwnPropertyDescriptor(n,d);l&&Object.defineProperty(e,d,l.get?l:{enumerable:!0,get:()=>n[d]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var ye={},z={};z._=z._interop_require_default=Fe;function Fe(e){return e&&e.__esModule?e:{default:e}}var _e={},be={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return t}});let t=a=>{}})(be);var Ue={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return t}});function t(a){let{widthInt:n,heightInt:d,blurWidth:l,blurHeight:s,blurDataURL:i,objectFit:U}=a;const O=20,u=l?l*40:n,p=s?s*40:d,_=u&&p?"viewBox='0 0 "+u+" "+p+"'":"",h=_?"none":U==="contain"?"xMidYMid":U==="cover"?"xMidYMid slice":"none";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+_+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+O+"'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='"+O+"'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+h+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}})(Ue);var te={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(d,l){for(var s in l)Object.defineProperty(d,s,{enumerable:!0,get:l[s]})}t(e,{VALID_LOADERS:function(){return a},imageConfigDefault:function(){return n}});const a=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}})(te);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return O}});const t=Ue,a=te;function n(u){return u.default!==void 0}function d(u){return u.src!==void 0}function l(u){return typeof u=="object"&&(n(u)||d(u))}function s(u){return typeof u>"u"?u:typeof u=="number"?Number.isFinite(u)?u:NaN:typeof u=="string"&&/^[0-9]+$/.test(u)?parseInt(u,10):NaN}function i(u,p,_){let{deviceSizes:h,allSizes:g}=u;if(_){const T=/(^|\s)(1?\d?\d)vw/g,I=[];for(let y;y=T.exec(_);y)I.push(parseInt(y[2]));if(I.length){const y=Math.min(...I)*.01;return{widths:g.filter(C=>C>=h[0]*y),kind:"w"}}return{widths:g,kind:"w"}}return typeof p!="number"?{widths:h,kind:"w"}:{widths:[...new Set([p,p*2].map(T=>g.find(I=>I>=T)||g[g.length-1]))],kind:"x"}}function U(u){let{config:p,src:_,unoptimized:h,width:g,quality:D,sizes:T,loader:I}=u;if(h)return{src:_,srcSet:void 0,sizes:void 0};const{widths:y,kind:C}=i(p,g,T),r=y.length-1;return{sizes:!T&&C==="w"?"100vw":T,srcSet:y.map((c,o)=>I({config:p,src:_,quality:D,width:c})+" "+(C==="w"?c:o+1)+C).join(", "),src:I({config:p,src:_,quality:D,width:y[r]})}}function O(u,p){let{src:_,sizes:h,unoptimized:g=!1,priority:D=!1,loading:T,className:I,quality:y,width:C,height:r,fill:c=!1,style:o,overrideSrc:m,onLoad:E,onLoadingComplete:A,placeholder:S="empty",blurDataURL:L,fetchPriority:P,layout:R,objectFit:w,objectPosition:M,lazyBoundary:Y,lazyRoot:J,...X}=u;const{imgConf:H,showAltText:x,blurComplete:W,defaultLoader:q}=p;let v,F=H||a.imageConfigDefault;if("allSizes"in F)v=F;else{const f=[...F.deviceSizes,...F.imageSizes].sort((V,k)=>V-k),B=F.deviceSizes.sort((V,k)=>V-k);v={...F,allSizes:f,deviceSizes:B}}if(typeof q>"u")throw new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`);let G=X.loader||q;delete X.loader,delete X.srcSet;const Z="__next_img_default"in G;if(Z){if(v.loader==="custom")throw new Error('Image with src "'+_+`" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{const f=G;G=B=>{const{config:V,...k}=B;return f(k)}}if(R){R==="fill"&&(c=!0);const f={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},B={responsive:"100vw",fill:"100vw"},V=f[R];V&&(o={...o,...V});const k=B[R];k&&!h&&(h=k)}let N="",b=s(C),j=s(r),me,de;if(l(_)){const f=n(_)?_.default:_;if(!f.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(f));if(!f.height||!f.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(f));if(me=f.blurWidth,de=f.blurHeight,L=L||f.blurDataURL,N=f.src,!c){if(!b&&!j)b=f.width,j=f.height;else if(b&&!j){const B=b/f.width;j=Math.round(f.height*B)}else if(!b&&j){const B=j/f.height;b=Math.round(f.width*B)}}}_=typeof _=="string"?_:N;let pe=!D&&(T==="lazy"||typeof T>"u");(!_||_.startsWith("data:")||_.startsWith("blob:"))&&(g=!0,pe=!1),v.unoptimized&&(g=!0),Z&&_.endsWith(".svg")&&!v.dangerouslyAllowSVG&&(g=!0),D&&(P="high");const Ne=s(y),Q=Object.assign(c?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:w,objectPosition:M}:{},x?{}:{color:"transparent"},o),Ce=!W&&S!=="empty"?S==="blur"?'url("data:image/svg+xml;charset=utf-8,'+(0,t.getImageBlurSvg)({widthInt:b,heightInt:j,blurWidth:me,blurHeight:de,blurDataURL:L||"",objectFit:Q.objectFit})+'")':'url("'+S+'")':null;let De=Ce?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Ce}:{};const re=U({config:v,src:_,unoptimized:g,width:b,quality:Ne,sizes:h,loader:G});return{props:{...X,loading:pe?"lazy":T,fetchPriority:P,width:b,height:j,decoding:"async",className:I,style:{...Q,...De},sizes:re.sizes,srcSet:re.srcSet,src:m||re.src},meta:{unoptimized:g,priority:D,placeholder:S,fill:c}}}})(_e);var ce={exports:{}},ee={};function he(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(he=function(n){return n?a:t})(e)}ee._=ee._interop_require_wildcard=He;function He(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var a=he(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var s=d?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(n,l,s):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}var $={exports:{}},oe={},fe;function xe(){return fe||(fe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return l}});const t=K,a=typeof window>"u",n=a?()=>{}:t.useLayoutEffect,d=a?()=>{}:t.useEffect;function l(s){const{headManager:i,reduceComponentsToState:U}=s;function O(){if(i&&i.mountedInstances){const p=t.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(U(p,s))}}if(a){var u;i==null||(u=i.mountedInstances)==null||u.add(s.children),O()}return n(()=>{var p;return i==null||(p=i.mountedInstances)==null||p.add(s.children),()=>{var _;i==null||(_=i.mountedInstances)==null||_.delete(s.children)}}),n(()=>(i&&(i._pendingUpdate=O),()=>{i&&(i._pendingUpdate=O)})),d(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}}(oe)),oe}var ne={},ge;function Xe(){return ge||(ge=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return n}});const n=z._(K).default.createContext({})}(ne)),ne}var se={},Se;function Ge(){return Se||(Se=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"HeadManagerContext",{enumerable:!0,get:function(){return n}});const n=z._(K).default.createContext({})}(se)),se}var ie={},Re;function Be(){return Re||(Re=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return t}});function t(a){let{ampFirst:n=!1,hybrid:d=!1,hasQuery:l=!1}=a===void 0?{}:a;return n||d&&l}}(ie)),ie}var Ee;function ze(){return Ee||(Ee=1,function(e,t){"use client";var a={ALLUSERSPROFILE:"C:\\ProgramData",ANT_HOME:"C:\\apache-ant-1.9.16",APPDATA:"C:\\Users\\uy\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"DESKTOP-RJ4JAT0",ComSpec:"C:\\windows\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GITLAB_HOME:"C:\\Users\\uy\\Documents\\docker\\gitlab",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\uy",INIT_CWD:"C:\\Users\\uy\\source\\genshin-optimizer",JAVA_HOME:"C:\\Program Files\\Java\\jre7",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\uy\\AppData\\Local",LOGONSERVER:"\\\\UTHS0001",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v18.18.2 win32 x64",npm_execpath:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6\\yarn",npm_lifecycle_event:"build-go",npm_node_execpath:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6\\node",npm_package_json:"C:\\Users\\uy\\source\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.9.2",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_CLOUD_LIGHT_CLIENT_RESOLUTION_PATHS:'["C:\\\\Users\\\\uy\\\\source\\\\genshin-optimizer\\\\node_modules\\\\nx\\\\node_modules","C:\\\\Users\\\\uy\\\\source\\\\genshin-optimizer\\\\node_modules"]',NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_SKIP_NX_CACHE:"true",NX_TASK_HASH:"14859511448287877552",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\uy\\source\\genshin-optimizer",OneDrive:"C:\\Users\\uy\\OneDrive",OnlineServices:"Online Services",OS:"Windows_NT",PATH:"C:\\Users\\uy\\source\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\uy\\source\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\uy\\source\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\uy\\source\\node_modules\\.bin;C:\\Users\\uy\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6;C:\\windows\\system32;C:\\windows;C:\\windows\\System32\\Wbem;C:\\windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\dotnet\\;C:\\Program Files\\Java\\jre7\\bin;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\DTS\\Binn\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;%ANT_HOME%\\bin;;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Users\\uy\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\uy\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\uy\\.dotnet\\tools;C:\\Program Files\\Azure Data Studio\\bin;C:\\Users\\uy\\AppData\\Local\\Programs\\Hyper\\resources\\bin;C:\\Users\\uy\\AppData\\Roaming\\npm;C:\\Program Files\\7-Zip;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC",platformcode:"7F",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 165 Stepping 3, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"a503",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\uy\\source\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\windows\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"APJ",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\windows",TEMP:"C:\\Users\\uy\\AppData\\Local\\Temp",TMP:"C:\\Users\\uy\\AppData\\Local\\Temp",USERDNSDOMAIN:"U-THINK.LOCAL",USERDOMAIN:"U-THINK",USERDOMAIN_ROAMINGPROFILE:"U-THINK",USERNAME:"uy",USERPROFILE:"C:\\Users\\uy",VBOX_MSI_INSTALL_PATH:"C:\\Program Files\\Oracle\\VirtualBox\\",windir:"C:\\windows",ZES_ENABLE_SYSMAN:"1",__PSLockDownPolicy:"0"};Object.defineProperty(t,"__esModule",{value:!0});function n(C,r){for(var c in r)Object.defineProperty(C,c,{enumerable:!0,get:r[c]})}n(t,{default:function(){return y},defaultHead:function(){return _}});const d=z,l=ee,s=Ae,i=l._(K),U=d._(xe()),O=Xe(),u=Ge(),p=Be();function _(C){C===void 0&&(C=!1);const r=[(0,s.jsx)("meta",{charSet:"utf-8"})];return C||r.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),r}function h(C,r){return typeof r=="string"||typeof r=="number"?C:r.type===i.default.Fragment?C.concat(i.default.Children.toArray(r.props.children).reduce((c,o)=>typeof o=="string"||typeof o=="number"?c:c.concat(o),[])):C.concat(r)}const g=["name","httpEquiv","charSet","itemProp"];function D(){const C=new Set,r=new Set,c=new Set,o={};return m=>{let E=!0,A=!1;if(m.key&&typeof m.key!="number"&&m.key.indexOf("$")>0){A=!0;const S=m.key.slice(m.key.indexOf("$")+1);C.has(S)?E=!1:C.add(S)}switch(m.type){case"title":case"base":r.has(m.type)?E=!1:r.add(m.type);break;case"meta":for(let S=0,L=g.length;S<L;S++){const P=g[S];if(m.props.hasOwnProperty(P))if(P==="charSet")c.has(P)?E=!1:c.add(P);else{const R=m.props[P],w=o[P]||new Set;(P!=="name"||!A)&&w.has(R)?E=!1:(w.add(R),o[P]=w)}}break}return E}}function T(C,r){const{inAmpMode:c}=r;return C.reduce(h,[]).reverse().concat(_(c).reverse()).filter(D()).reverse().map((o,m)=>{const E=o.key||m;if(a.__NEXT_OPTIMIZE_FONTS&&!c&&o.type==="link"&&o.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(A=>o.props.href.startsWith(A))){const A={...o.props||{}};return A["data-href"]=A.href,A.href=void 0,A["data-optimized-fonts"]=!0,i.default.cloneElement(o,A)}return i.default.cloneElement(o,{key:E})})}function I(C){let{children:r}=C;const c=(0,i.useContext)(O.AmpStateContext),o=(0,i.useContext)(u.HeadManagerContext);return(0,s.jsx)(U.default,{reduceComponentsToState:T,headManager:o,inAmpMode:(0,p.isInAmpMode)(c),children:r})}const y=I;(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}($,$.exports)),$.exports}var ae={},Pe;function We(){return Pe||(Pe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ImageConfigContext",{enumerable:!0,get:function(){return d}});const a=z._(K),n=te,d=a.default.createContext(n.imageConfigDefault)}(ae)),ae}var ue={},Oe;function je(){return Oe||(Oe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return n}});const n=z._(K).default.createContext(null)}(ue)),ue}var le={},Te;function Ie(){return Te||(Te=1,function(e){var t={ALLUSERSPROFILE:"C:\\ProgramData",ANT_HOME:"C:\\apache-ant-1.9.16",APPDATA:"C:\\Users\\uy\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"DESKTOP-RJ4JAT0",ComSpec:"C:\\windows\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GITLAB_HOME:"C:\\Users\\uy\\Documents\\docker\\gitlab",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\uy",INIT_CWD:"C:\\Users\\uy\\source\\genshin-optimizer",JAVA_HOME:"C:\\Program Files\\Java\\jre7",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\uy\\AppData\\Local",LOGONSERVER:"\\\\UTHS0001",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v18.18.2 win32 x64",npm_execpath:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6\\yarn",npm_lifecycle_event:"build-go",npm_node_execpath:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6\\node",npm_package_json:"C:\\Users\\uy\\source\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.9.2",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_CLOUD_LIGHT_CLIENT_RESOLUTION_PATHS:'["C:\\\\Users\\\\uy\\\\source\\\\genshin-optimizer\\\\node_modules\\\\nx\\\\node_modules","C:\\\\Users\\\\uy\\\\source\\\\genshin-optimizer\\\\node_modules"]',NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_SKIP_NX_CACHE:"true",NX_TASK_HASH:"14859511448287877552",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\uy\\source\\genshin-optimizer",OneDrive:"C:\\Users\\uy\\OneDrive",OnlineServices:"Online Services",OS:"Windows_NT",PATH:"C:\\Users\\uy\\source\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\uy\\source\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\uy\\source\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\uy\\source\\node_modules\\.bin;C:\\Users\\uy\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6;C:\\windows\\system32;C:\\windows;C:\\windows\\System32\\Wbem;C:\\windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\dotnet\\;C:\\Program Files\\Java\\jre7\\bin;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\DTS\\Binn\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;%ANT_HOME%\\bin;;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Users\\uy\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\uy\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\uy\\.dotnet\\tools;C:\\Program Files\\Azure Data Studio\\bin;C:\\Users\\uy\\AppData\\Local\\Programs\\Hyper\\resources\\bin;C:\\Users\\uy\\AppData\\Roaming\\npm;C:\\Program Files\\7-Zip;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC",platformcode:"7F",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 165 Stepping 3, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"a503",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\uy\\source\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\windows\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"APJ",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\windows",TEMP:"C:\\Users\\uy\\AppData\\Local\\Temp",TMP:"C:\\Users\\uy\\AppData\\Local\\Temp",USERDNSDOMAIN:"U-THINK.LOCAL",USERDOMAIN:"U-THINK",USERDOMAIN_ROAMINGPROFILE:"U-THINK",USERNAME:"uy",USERPROFILE:"C:\\Users\\uy",VBOX_MSI_INSTALL_PATH:"C:\\Program Files\\Oracle\\VirtualBox\\",windir:"C:\\windows",ZES_ENABLE_SYSMAN:"1",__PSLockDownPolicy:"0"};Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n}});function a(d){let{config:l,src:s,width:i,quality:U}=d;return l.path+"?url="+encodeURIComponent(s)+"&w="+i+"&q="+(U||75)+(t.NEXT_DEPLOYMENT_ID?"&dpl="+t.NEXT_DEPLOYMENT_ID:"")}a.__next_img_default=!0;const n=a}(le)),le}(function(e,t){"use client";var a={ALLUSERSPROFILE:"C:\\ProgramData",ANT_HOME:"C:\\apache-ant-1.9.16",APPDATA:"C:\\Users\\uy\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"DESKTOP-RJ4JAT0",ComSpec:"C:\\windows\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GITLAB_HOME:"C:\\Users\\uy\\Documents\\docker\\gitlab",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\uy",INIT_CWD:"C:\\Users\\uy\\source\\genshin-optimizer",JAVA_HOME:"C:\\Program Files\\Java\\jre7",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\uy\\AppData\\Local",LOGONSERVER:"\\\\UTHS0001",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v18.18.2 win32 x64",npm_execpath:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6\\yarn",npm_lifecycle_event:"build-go",npm_node_execpath:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6\\node",npm_package_json:"C:\\Users\\uy\\source\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.9.2",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_CLOUD_LIGHT_CLIENT_RESOLUTION_PATHS:'["C:\\\\Users\\\\uy\\\\source\\\\genshin-optimizer\\\\node_modules\\\\nx\\\\node_modules","C:\\\\Users\\\\uy\\\\source\\\\genshin-optimizer\\\\node_modules"]',NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_SKIP_NX_CACHE:"true",NX_TASK_HASH:"14859511448287877552",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\uy\\source\\genshin-optimizer",OneDrive:"C:\\Users\\uy\\OneDrive",OnlineServices:"Online Services",OS:"Windows_NT",PATH:"C:\\Users\\uy\\source\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\uy\\source\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\uy\\source\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\uy\\source\\node_modules\\.bin;C:\\Users\\uy\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6;C:\\windows\\system32;C:\\windows;C:\\windows\\System32\\Wbem;C:\\windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\dotnet\\;C:\\Program Files\\Java\\jre7\\bin;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\DTS\\Binn\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;%ANT_HOME%\\bin;;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Users\\uy\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\uy\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\uy\\.dotnet\\tools;C:\\Program Files\\Azure Data Studio\\bin;C:\\Users\\uy\\AppData\\Local\\Programs\\Hyper\\resources\\bin;C:\\Users\\uy\\AppData\\Roaming\\npm;C:\\Program Files\\7-Zip;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC",platformcode:"7F",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 165 Stepping 3, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"a503",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\uy\\source\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\windows\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"APJ",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\windows",TEMP:"C:\\Users\\uy\\AppData\\Local\\Temp",TMP:"C:\\Users\\uy\\AppData\\Local\\Temp",USERDNSDOMAIN:"U-THINK.LOCAL",USERDOMAIN:"U-THINK",USERDOMAIN_ROAMINGPROFILE:"U-THINK",USERNAME:"uy",USERPROFILE:"C:\\Users\\uy",VBOX_MSI_INSTALL_PATH:"C:\\Program Files\\Oracle\\VirtualBox\\",windir:"C:\\windows",ZES_ENABLE_SYSMAN:"1",__PSLockDownPolicy:"0"};Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return C}});const n=z,d=ee,l=Ae,s=d._(K),i=n._(we),U=n._(ze()),O=_e,u=te,p=We(),_=je(),h=n._(Ie()),g=a.__NEXT_IMAGE_OPTS;typeof window>"u"&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);function D(r,c,o,m,E,A,S){const L=r==null?void 0:r.src;if(!r||r["data-loaded-src"]===L)return;r["data-loaded-src"]=L,("decode"in r?r.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(!(!r.parentElement||!r.isConnected)){if(c!=="empty"&&E(!0),o!=null&&o.current){const R=new Event("load");Object.defineProperty(R,"target",{writable:!1,value:r});let w=!1,M=!1;o.current({...R,nativeEvent:R,currentTarget:r,target:r,isDefaultPrevented:()=>w,isPropagationStopped:()=>M,persist:()=>{},preventDefault:()=>{w=!0,R.preventDefault()},stopPropagation:()=>{M=!0,R.stopPropagation()}})}m!=null&&m.current&&m.current(r)}})}function T(r){const[c,o]=s.version.split(".",2),m=parseInt(c,10),E=parseInt(o,10);return m>18||m===18&&E>=3?{fetchPriority:r}:{fetchpriority:r}}const I=(0,s.forwardRef)((r,c)=>{let{src:o,srcSet:m,sizes:E,height:A,width:S,decoding:L,className:P,style:R,fetchPriority:w,placeholder:M,loading:Y,unoptimized:J,fill:X,onLoadRef:H,onLoadingCompleteRef:x,setBlurComplete:W,setShowAltText:q,sizesInput:v,onLoad:F,onError:G,...Z}=r;return(0,l.jsx)("img",{...Z,...T(w),loading:Y,width:S,height:A,decoding:L,"data-nimg":X?"fill":"1",className:P,style:R,sizes:E,srcSet:m,src:o,ref:(0,s.useCallback)(N=>{c&&(typeof c=="function"?c(N):typeof c=="object"&&(c.current=N)),N&&(G&&(N.src=N.src),N.complete&&D(N,M,H,x,W))},[o,M,H,x,W,G,J,v,c]),onLoad:N=>{const b=N.currentTarget;D(b,M,H,x,W)},onError:N=>{q(!0),M!=="empty"&&W(!0),G&&G(N)}})});function y(r){let{isAppRouter:c,imgAttributes:o}=r;const m={as:"image",imageSrcSet:o.srcSet,imageSizes:o.sizes,crossOrigin:o.crossOrigin,referrerPolicy:o.referrerPolicy,...T(o.fetchPriority)};return c&&i.default.preload?(i.default.preload(o.src,m),null):(0,l.jsx)(U.default,{children:(0,l.jsx)("link",{rel:"preload",href:o.srcSet?void 0:o.src,...m},"__nimg-"+o.src+o.srcSet+o.sizes)})}const C=(0,s.forwardRef)((r,c)=>{const m=!(0,s.useContext)(_.RouterContext),E=(0,s.useContext)(p.ImageConfigContext),A=(0,s.useMemo)(()=>{const x=g||E||u.imageConfigDefault,W=[...x.deviceSizes,...x.imageSizes].sort((v,F)=>v-F),q=x.deviceSizes.sort((v,F)=>v-F);return{...x,allSizes:W,deviceSizes:q}},[E]),{onLoad:S,onLoadingComplete:L}=r,P=(0,s.useRef)(S);(0,s.useEffect)(()=>{P.current=S},[S]);const R=(0,s.useRef)(L);(0,s.useEffect)(()=>{R.current=L},[L]);const[w,M]=(0,s.useState)(!1),[Y,J]=(0,s.useState)(!1),{props:X,meta:H}=(0,O.getImgProps)(r,{defaultLoader:h.default,imgConf:A,blurComplete:w,showAltText:Y});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(I,{...X,unoptimized:H.unoptimized,placeholder:H.placeholder,fill:H.fill,onLoadRef:P,onLoadingCompleteRef:R,setBlurComplete:M,setShowAltText:J,sizesInput:r.sizes,ref:c}),H.priority?(0,l.jsx)(y,{isAppRouter:m,imgAttributes:X}):null]})});(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)})(ce,ce.exports);var ke=ce.exports;(function(e){var t={ALLUSERSPROFILE:"C:\\ProgramData",ANT_HOME:"C:\\apache-ant-1.9.16",APPDATA:"C:\\Users\\uy\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"DESKTOP-RJ4JAT0",ComSpec:"C:\\windows\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GITLAB_HOME:"C:\\Users\\uy\\Documents\\docker\\gitlab",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\uy",INIT_CWD:"C:\\Users\\uy\\source\\genshin-optimizer",JAVA_HOME:"C:\\Program Files\\Java\\jre7",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\uy\\AppData\\Local",LOGONSERVER:"\\\\UTHS0001",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v18.18.2 win32 x64",npm_execpath:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6\\yarn",npm_lifecycle_event:"build-go",npm_node_execpath:"C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6\\node",npm_package_json:"C:\\Users\\uy\\source\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.9.2",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_CLOUD_LIGHT_CLIENT_RESOLUTION_PATHS:'["C:\\\\Users\\\\uy\\\\source\\\\genshin-optimizer\\\\node_modules\\\\nx\\\\node_modules","C:\\\\Users\\\\uy\\\\source\\\\genshin-optimizer\\\\node_modules"]',NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_SKIP_NX_CACHE:"true",NX_TASK_HASH:"14859511448287877552",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"C:\\Users\\uy\\source\\genshin-optimizer",OneDrive:"C:\\Users\\uy\\OneDrive",OnlineServices:"Online Services",OS:"Windows_NT",PATH:"C:\\Users\\uy\\source\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;C:\\Users\\uy\\source\\genshin-optimizer\\apps\\node_modules\\.bin;C:\\Users\\uy\\source\\genshin-optimizer\\node_modules\\.bin;C:\\Users\\uy\\source\\node_modules\\.bin;C:\\Users\\uy\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\uy\\AppData\\Local\\Temp\\xfs-1233fef6;C:\\windows\\system32;C:\\windows;C:\\windows\\System32\\Wbem;C:\\windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\windows\\System32\\OpenSSH\\;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\dotnet\\;C:\\Program Files\\Java\\jre7\\bin;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\DTS\\Binn\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;%ANT_HOME%\\bin;;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Users\\uy\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\uy\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\uy\\.dotnet\\tools;C:\\Program Files\\Azure Data Studio\\bin;C:\\Users\\uy\\AppData\\Local\\Programs\\Hyper\\resources\\bin;C:\\Users\\uy\\AppData\\Roaming\\npm;C:\\Program Files\\7-Zip;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC",platformcode:"7F",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 165 Stepping 3, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"a503",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"C:\\Users\\uy\\source\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\windows\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",RegionCode:"APJ",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\windows",TEMP:"C:\\Users\\uy\\AppData\\Local\\Temp",TMP:"C:\\Users\\uy\\AppData\\Local\\Temp",USERDNSDOMAIN:"U-THINK.LOCAL",USERDOMAIN:"U-THINK",USERDOMAIN_ROAMINGPROFILE:"U-THINK",USERNAME:"uy",USERPROFILE:"C:\\Users\\uy",VBOX_MSI_INSTALL_PATH:"C:\\Program Files\\Oracle\\VirtualBox\\",windir:"C:\\windows",ZES_ENABLE_SYSMAN:"1",__PSLockDownPolicy:"0"};Object.defineProperty(e,"__esModule",{value:!0});function a(O,u){for(var p in u)Object.defineProperty(O,p,{enumerable:!0,get:u[p]})}a(e,{default:function(){return U},getImageProps:function(){return i}});const n=z,d=_e,l=ke,s=n._(Ie());function i(O){const{props:u}=(0,d.getImgProps)(O,{defaultLoader:s.default,imgConf:t.__NEXT_IMAGE_OPTS});for(const[p,_]of Object.entries(u))_===void 0&&delete u[p];return{props:u}}const U=l.Image})(ye);var Le=ye;const Ve=ve(Le),Je=Me({__proto__:null,default:Ve},[Le]);export{Je as i};