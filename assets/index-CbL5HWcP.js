import{y as E,d as e,e as a,a9 as ne,aq as ze,a as j,z as N,r as o,bO as re,h as u,G as h,i as b,cm as Pe,cn as Ge,c1 as qe,co as Ve,V as xe,cp as He,bG as Ue,ak as ue,Y as Ye,cq as pe,cr as Je,cs as ae,L as O,ae as se,af as U,M as A,N as M,T as W,ct as Qe,b$ as L,cl as K,q as Y,f as z,cu as ye,a7 as Xe,cv as Ze,ab as I,al as le,ag as ie,aa as Ce,cw as et,cx as tt,p as at,cy as nt,ar as rt,aE as J,cz as st,cA as lt,bN as be,cg as it,w as ve,x as Te,j as we,v as G,bH as ce,bI as ct,aX as Se,ci as ot,cB as dt,cC as ht,cD as ut,D as De,bY as ge,A as pt,I as gt,cE as mt,cF as me,ao as Ie,bL as ft,S as P,k as xt,m as yt,cG as Ct,c9 as bt,cH as vt,ay as Tt,a8 as wt,aB as St,aC as Dt,b1 as te,aD as It,b4 as kt,cI as Mt,cJ as Et,bf as _t,aH as jt,cK as $t,cL as ke,cM as At,cN as Wt,H as Bt,F as Lt,b as Ot,E as Nt,cO as Rt,cP as Ft}from"./index-ByRULhND.js";import{u as Kt,B as Me,a as Ee,L as zt,T as fe,d as Pt,b as Gt,c as qt,e as Vt,C as Ht,f as Ut,g as Yt,E as Jt}from"./LoadoutInfoAlert-T34Z0bOS.js";import{T as _e}from"./TeamCard-tE8nDQXQ.js";import{u as Qt}from"./useTeamChar-JpXoHNgd.js";import{O as Xt,L as Zt}from"./TeamDelModal-B4k4EoO_.js";function ea(){const{t}=E("page_character");return e(ze,{severity:"warning",children:a(ne,{t,i18nKey:"noLoadout",children:["Looks like you haven't added any loadout/Teams with this character yet. You need to create a loadout+team with this character to"," ",e("strong",{children:"create builds"}),", ",e("strong",{children:"theorycraft"}),", or"," ",e("strong",{children:"optimize"}),"."]})})}function ta(){const t=j(),s=N();return o.useCallback(n=>{t.chars.get(n)||t.chars.getWithInitWeapon(n),s(`/characters/${n}`)},[s,t])}function aa({buildId:t,characterKey:s}){const{name:r,description:n,weaponId:i,artifactIds:p}=Kt(t),d=re(s).weaponType;return e(Me,{name:r,description:n,hideFooter:!0,children:e(u,{sx:{display:"flex",flexDirection:"column",gap:1,alignItems:"stretch"},children:a(h,{container:!0,spacing:1,columns:{xs:2,sm:2,md:2,lg:3,xl:3},children:[e(h,{item:!0,xs:1,children:e(b,{sx:{height:"100%",maxHeight:"8em"},children:e(Pe,{weaponId:i,weaponTypeKey:d})})}),Object.entries(p).map(([m,x])=>e(h,{item:!0,xs:1,children:e(b,{sx:{height:"100%",maxHeight:"8em"},children:e(Ge,{artifactId:x,slotKey:m})})},x||m))]})})})}function na({buildTcId:t}){const s=Ee(t),{name:r,description:n}=s;return e(Me,{name:r,description:n,hideFooter:!0,children:e(ra,{buildTcId:t})})}function ra({buildTcId:t}){const{weapon:s,artifact:{slots:r,substats:{stats:n},sets:i}}=Ee(t),p=qe(s.key),d=Object.entries(n),m=d.slice(0,5),x=d.slice(5);return e(u,{children:a(h,{container:!0,spacing:1,columns:{xs:2,sm:2,md:2,lg:2,xl:2},children:[e(h,{item:!0,xs:1,children:a(u,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(Ve,{weapon:s,weaponSheet:p}),!!Object.keys(i).length&&e(b,{sx:{flexGrow:1},children:e(u,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:Object.entries(i).map(([c,l])=>a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(xe,{size:2,src:He(c,"flower")}),e("span",{children:e(Ue,{setKey:c})}),a(ue,{children:["x",l]})]},c))})})]})}),e(h,{item:!0,xs:1,children:e(b,{sx:{flexGrow:1,height:"100%",p:1,display:"flex",flexDirection:"column",gap:1,justifyContent:"space-between"},children:Object.entries(r).map(([c,{level:l,statKey:f}])=>a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Ye,{slotKey:c}),a(ue,{children:["+",l]}),e(pe,{statKey:f})]},c))})}),[m,x].map((c,l)=>e(h,{item:!0,xs:1,children:e(b,{sx:{flexGrow:1,height:"100%"},children:e(u,{sx:{p:1,height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:1},children:c.map(([f,v])=>a(u,{sx:{display:"flex",alignItems:"center",gap:1,justifyContent:"space-between"},children:[e(pe,{statKey:f}),a("span",{children:[Je(v,ae(f)),ae(f)]})]},f))})})},l))]})})}function sa({show:t,onHide:s,teamCharId:r,onDelete:n,teamIds:i,conditionalCount:p}){const{t:d}=E("loadout"),m=j(),{name:x,description:c,buildIds:l,buildTcIds:f,customMultiTargets:v,bonusStats:S}=m.teamChars.get(r),$=o.useCallback(()=>{s(),n()},[n,s]);return e(ie,{open:t,onClose:s,containerProps:{maxWidth:"md"},children:a(b,{children:[e(O,{title:e("span",{children:a(ne,{t:d,i18nKey:"loadoutDelModal.title",name:x,children:["Delete Loadout: ",e("strong",{children:{name:x}}),"?"]})}),action:e(se,{onClick:s,children:e(U,{})})}),e(A,{}),a(M,{children:[c&&e(b,{bgt:"dark",sx:{mb:2},children:e(M,{children:c})}),e(W,{children:d("loadoutDelModal.desc")}),a(Qe,{sx:{listStyleType:"disc",pl:4},children:[!!l.length&&e(L,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[d("loadoutDelModal.builds"),l.length," ",e(K,{title:e(u,{children:l.map(C=>{var T;return a(W,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Y,{}),e("span",{children:(T=m.builds.get(C))==null?void 0:T.name})]},C)})}),children:e(z,{})})]})}),!!f.length&&e(L,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[d("loadoutDelModal.tcBuilds"),f.length," ",e(K,{title:e(u,{children:f.map(C=>{var T;return a(W,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Y,{}),e("span",{children:(T=m.buildTcs.get(C))==null?void 0:T.name})]},C)})}),children:e(z,{})})]})}),!!v.length&&e(L,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[d("loadoutDelModal.mTargets"),v.length," ",e(K,{title:e(u,{children:v.map((C,T)=>a(W,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(ye,{}),e("span",{children:C.name})]},T))}),children:e(z,{})})]})}),!!Object.keys(S).length&&a(L,{sx:{display:"list-item"},children:[d("loadoutDelModal.bonus"),Object.keys(S).length]}),!!p&&a(L,{sx:{display:"list-item"},children:[d("loadoutDelModal.condi"),p]}),e(L,{sx:{display:"list-item"},children:d("loadoutDelModal.optConfig")}),!!i.length&&e(L,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[a("span",{children:[d("loadoutDelModal.affected"),i.length]}),e(K,{title:e(u,{children:i.map(C=>{var T;return a(W,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Xe,{}),e("span",{children:(T=m.teams.get(C))==null?void 0:T.name})]},C)})}),children:e(z,{})})]})})]})]}),a(Ze,{sx:{float:"right"},children:[e(I,{startIcon:e(U,{}),color:"secondary",onClick:s,children:d("loadoutDelModal.cancel")}),e(I,{startIcon:e(le,{}),color:"error",onClick:$,children:d("loadoutDelModal.delete")})]})]})})}function la({show:t,onHide:s,teamCharId:r,teamIds:n}){const{t:i}=E("loadout"),[p,d,m]=Ce(),x=N(),c=j(),{key:l,name:f,description:v,buildIds:S,buildTcIds:$,customMultiTargets:C,bonusStats:T,optConfigId:q,conditional:R}=Qt(r),{optimizationTarget:w}=et(q),F=()=>{s(),c.teamChars.remove(r)},Q=()=>{c.teamChars.duplicate(r)&&s()},X=y=>{const _=c.teams.new();c.teams.set(_,Z=>{Z.loadoutData[0]={teamCharId:y}}),x(`/teams/${_}`)},V=o.useMemo(()=>{let y=0;return tt(R,[],_=>typeof _!="object",()=>y++),y},[R]);return e(ie,{open:t,onClose:s,containerProps:{maxWidth:"lg"},children:a(b,{children:[e(O,{title:a(u,{display:"flex",gap:1,alignItems:"center",children:[e(at,{}),e("strong",{children:f})]}),action:e(se,{onClick:s,children:e(U,{})})}),e(A,{}),a(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(zt,{}),e(fe,{fullWidth:!0,label:i("loadoutEditor.label"),placeholder:i("loadoutEditor.placeholder"),value:f,onChange:y=>c.teamChars.set(r,{name:y})}),e(fe,{fullWidth:!0,label:i("loadoutEditor.desc"),value:v,onChange:y=>c.teamChars.set(r,{description:y}),multiline:!0,minRows:2}),e(u,{children:a(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:[e(h,{item:!0,xs:1,children:e(I,{color:"info",onClick:()=>Q(),fullWidth:!0,startIcon:e(Pt,{}),children:i("loadoutEditor.dupBtn")})}),a(h,{item:!0,xs:1,children:[e(sa,{show:p,onHide:m,onDelete:F,teamCharId:r,teamIds:n,conditionalCount:V}),e(I,{fullWidth:!0,startIcon:e(le,{}),color:"error",onClick:d,children:i("loadoutEditor.delBtn")})]})]})}),e(u,{children:a(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:[!!Object.keys(T).length&&e(h,{item:!0,xs:1,children:e(ia,{bonusStats:T})}),!!w&&e(h,{item:!0,xs:1,children:a(b,{bgt:"light",children:[e(O,{title:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(nt,{}),e("span",{children:i("loadoutEditor.optTarget")})]})}),e(A,{}),e(M,{children:e(rt,{divider:e(A,{orientation:"vertical",flexItem:!0}),spacing:1,children:e(Xt,{optimizationTarget:w,customMultiTargets:C})})})]})}),!!C.length&&e(h,{item:!0,xs:1,children:e(ca,{customMultiTargets:C})}),e(h,{item:!0,xs:1,children:e(b,{bgt:"light",children:e(M,{children:a(W,{variant:"h6",children:[i("loadoutEditor.conditionals"),e("strong",{children:V})]})})})})]})})]}),e(A,{}),e(O,{title:a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(Y,{}),e("span",{children:i("loadoutEditor.builds")})]})}),e(A,{}),a(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Gt,{}),e(u,{children:e(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:S.map(y=>e(h,{item:!0,xs:1,children:e(aa,{buildId:y,characterKey:l})},y))})}),e(qt,{}),e(u,{children:e(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:$.map(y=>e(h,{item:!0,xs:1,children:e(na,{buildTcId:y})},y))})})]}),e(A,{}),e(O,{title:a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(Y,{}),e("span",{children:i("loadoutEditor.teams")})]})}),e(A,{}),a(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Vt,{}),a(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:[n.map(y=>e(h,{item:!0,xs:1,children:e(_e,{bgt:"light",teamId:y,onClick:_=>x(`/teams/${y}${_?`/${_}`:""}`)})},y)),e(h,{item:!0,xs:1,children:e(I,{fullWidth:!0,sx:{height:"100%",backgroundColor:"contentLight.main"},variant:"outlined",onClick:()=>X(r),color:"info",startIcon:e(J,{}),children:i("loadoutEditor.addNewTeam")})})]})]})]})})}function ia({bonusStats:t}){const{t:s}=E("loadout");return a(b,{bgt:"light",children:[e(O,{title:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(st,{}),e("span",{children:s("loadoutEditor.bonusStats")})]}),titleTypographyProps:{variant:"h6"}}),e(be,{bgt:"light",sections:[{fields:Object.entries(t).map(([r,n])=>({text:lt.getStr(r)??r,value:n,unit:ae(r)}))}]})]})}function ca({customMultiTargets:t}){const{t:s}=E("loadout");return a(b,{bgt:"light",children:[e(O,{title:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(ye,{}),e("span",{children:s("loadoutEditor.mltTargets")})]}),titleTypographyProps:{variant:"h6"}}),e(be,{bgt:"light",sections:[{fields:t.map(({name:r,description:n})=>({text:r,value:n?e(K,{title:n,children:e(z,{})}):void 0}))}]})]})}const oa={xs:1,md:2};function da({teamCharId:t,teamIds:s}){const{t:r}=E("page_character"),n=N(),i=j(),p=c=>{const l=i.teams.new();i.teams.set(l,f=>{f.loadoutData[0]={teamCharId:c}}),n(`/teams/${l}`)},[d,m,x]=Ce();return a(it,{children:[e(la,{show:d,onHide:x,teamCharId:t,teamIds:s}),a(b,{bgt:"light",children:[e(I,{fullWidth:!0,onClick:m,sx:{p:0,display:"flex",borderBottomLeftRadius:0,borderBottomRightRadius:0},color:"neutral100",variant:"outlined",children:e(Zt,{teamCharId:t,showSetting:!0})}),e(M,{sx:{p:1},children:a(h,{container:!0,columns:oa,spacing:1,children:[s.map(c=>e(h,{item:!0,xs:1,children:e(_e,{teamId:c,onClick:l=>n(`/teams/${c}${l?`/${l}`:""}`)})},c)),e(h,{item:!0,xs:1,children:e(I,{fullWidth:!0,sx:{height:"100%",backgroundColor:"contentNormal.main"},variant:"outlined",onClick:()=>p(t),color:"info",startIcon:e(J,{}),children:r("charContentModal.addTeam")})})]})})]},t)]})}var oe={},ha=Te;Object.defineProperty(oe,"__esModule",{value:!0});var je=oe.default=void 0,ua=ha(ve()),pa=we,ga=(0,ua.default)((0,pa.jsx)("path",{d:"M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4zm-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5z"}),"Female");je=oe.default=ga;var de={},ma=Te;Object.defineProperty(de,"__esModule",{value:!0});var $e=de.default=void 0,fa=ma(ve()),xa=we,ya=(0,fa.default)((0,xa.jsx)("path",{d:"M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z"}),"Male");$e=de.default=ya;function Ca(){const{t}=E("ui"),s=j(),{character:r}=o.useContext(G),{key:n}=r,{gender:i}=ce(),p=o.useCallback(()=>s.dbMeta.set({gender:i==="F"?"M":"F"}),[i,s]);return n.startsWith("Traveler")?a(I,{onClick:p,startIcon:i==="F"?e(je,{}):e($e,{}),children:[e("strong",{children:t(`gender.${i}`)})," "]}):null}function ba({onClose:t}){const{t:s}=E(["page_character","sillyWisher_charNames","charNames_gen"]),r=N(),n=j(),{character:i,character:{key:p}}=o.useContext(G),{gender:d}=ce(),m=ct(p,d),{silly:x}=o.useContext(Se),c=o.useCallback(async()=>{const l=s(`${x?"sillyWisher_charNames":"charNames_gen"}:${ot(p,d)}`);window.confirm(s("removeCharacter",{value:l}))&&(n.chars.remove(p),r("/characters"))},[n,r,p,d,x,s]);return a(u,{display:"flex",flexDirection:"column",gap:1,children:[a(u,{display:"flex",gap:1,children:[e(Ca,{}),e(I,{color:"error",onClick:()=>c(),startIcon:e(le,{}),sx:{marginLeft:"auto"},children:s("delete")}),!!t&&e(se,{onClick:t,children:e(U,{})})]}),e(u,{children:a(h,{container:!0,spacing:1,sx:{justifyContent:"center"},children:[e(h,{item:!0,xs:8,sm:5,md:4,lg:3,children:a(b,{bgt:"light",sx:{height:"100%",display:"flex",flexDirection:"column",gap:1},children:[e(Ht,{}),e(u,{sx:{px:1},children:e(dt,{level:i.level,ascension:i.ascension,setBoth:l=>n.chars.set(p,l)})}),e(ht,{bgt:"light"}),e(W,{sx:{textAlign:"center",pb:-1},variant:"h6",children:e(ut,{characterKey:p,gender:d})}),e(u,{sx:{px:1},children:e(Ut,{setConstellation:l=>n.chars.set(p,{constellation:l})})})]})}),a(h,{item:!0,xs:12,sm:7,md:8,lg:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[e(u,{children:e(h,{container:!0,columns:3,spacing:1,children:["auto","skill","burst"].map(l=>{var f;return e(h,{item:!0,xs:1,children:e(Yt,{talentKey:l,dropDownButtonProps:{startIcon:e(xe,{src:(f=m.getTalentOfKey(l))==null?void 0:f.img,size:1.75,sideMargin:!0})},setTalent:v=>n.chars.set(p,S=>{S.talent[l]=v})},l)},l)})})}),e(va,{}),e(Ta,{})]})]})})]})}function va(){const{character:{key:t,equippedArtifacts:s}}=o.useContext(G),{data:r}=o.useContext(De),n=j(),i=re(t).weaponType,p=r.get(ge.weapon.id).value,d=o.useMemo(()=>pt(gt,m=>r.get(ge.art[m].id).value),[r]);return e(u,{children:e(mt.Provider,{value:"equipped",children:e(Jt,{weaponTypeKey:i,weaponId:p,artifactIds:d,setWeapon:m=>{n.weapons.set(m,{location:me(t)})},setArtifact:(m,x)=>{x?n.arts.set(x,{location:me(t)}):n.arts.set(s[m],{location:""})}})})})}function Ta(){const{t}=E("page_character"),s=N(),{character:{key:r}}=o.useContext(G),n=j(),{gender:i}=ce(),[p,d]=Ie(),m=o.useMemo(()=>{const c={};return n.teamChars.entries.map(([l,f])=>{f.key===r&&(c[l]||(c[l]=[]))}),n.teams.entries.forEach(([l,f])=>{const v=f.loadoutData.find(S=>{var $;return S&&(($=n.teamChars.get(S==null?void 0:S.teamCharId))==null?void 0:$.key)===r});v&&c[v==null?void 0:v.teamCharId].push(l)}),p&&c},[p,r,n]);o.useEffect(()=>n.teams.followAny(()=>d()),[n,d]),o.useEffect(()=>n.teamChars.followAny(()=>d()),[n,d]);const x=()=>{const c=n.teams.new(),l=n.teamChars.new(r);n.teams.set(c,f=>{f.loadoutData[0]={teamCharId:l}}),s(`/teams/${c}`)};return a(u,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(W,{variant:"h6",children:a(ne,{t,i18nKey:"charContentModal.loadoutsWith",children:["Team Loadouts with"," ",e(ft,{characterKey:r,gender:i})]})}),!Object.values(m).length&&e(ea,{}),Object.entries(m).map(([c,l])=>e(da,{teamCharId:c,teamIds:l},c)),e(I,{fullWidth:!0,onClick:()=>x(),color:"info",startIcon:e(J,{}),variant:"outlined",sx:{backgroundColor:"contentLight.main"},children:t("charContentModal.addLoAndTeam")}),e(b,{bgt:"light"})]})}function wa({characterKey:t,onClose:s}){return e(ie,{open:!!t,onClose:s,children:e(o.Suspense,{fallback:e(P,{variant:"rectangular",width:"100%",height:1e3}),children:t&&e(Sa,{characterKey:t,onClose:s},t)})})}function Sa({characterKey:t,onClose:s}){const r=xt(t),n=yt(t),{target:i}=(n==null?void 0:n[t])??{},p=o.useMemo(()=>{if(!(!n||!i))return{data:i,teamData:n,compareData:void 0}},[i,n]),d=o.useMemo(()=>r&&{character:r},[r]),[m,x]=o.useState(),[c,l]=o.useState(),f=o.useMemo(()=>({chartData:m,setChartData:x,graphBuilds:c,setGraphBuilds:l}),[m,c]);return o.useEffect(()=>{x(void 0),l(void 0)},[t]),e(b,{children:e(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:e(o.Suspense,{fallback:e(P,{variant:"rectangular",width:"100%",height:1e3}),children:p&&d&&f?e(G.Provider,{value:d,children:e(De.Provider,{value:p,children:e(Ct.Provider,{value:f,children:e(ba,{onClose:s})})})}):e(P,{variant:"rectangular",width:"100%",height:1e3})})})})}const Da={xs:1,sm:2,md:3,lg:4,xl:4},Ia={xs:5,sm:8,md:9,lg:12,xl:12},ka=Object.keys(ke);function Aa(){const t=j(),s=N(),{params:{characterKey:r}}=bt({path:"/characters/:characterKey",end:!1})??{params:{}},n=o.useMemo(()=>r?vt(r)?(t.chars.get(r)||t.chars.getWithInitWeapon(r),r):(s("/characters"),null):null,[r,s,t]),{t:i}=E(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:p}=o.useContext(Se),[d,m]=o.useState(()=>t.displayCharacter.get());o.useEffect(()=>t.displayCharacter.follow((g,D)=>m(D)),[t,m]);const[x,c]=o.useState(""),l=o.useDeferredValue(x),f=Tt(),[v,S]=o.useState(!1),[$,C]=Ie();o.useEffect(()=>(wt.send({hitType:"pageview",page:"/characters"}),t.chars.followAny((g,D)=>(D==="new"||D==="remove")&&C())),[C,t]),o.useEffect(()=>t.charMeta.followAny(g=>C()),[C,t]);const T=ta(),q=o.useDeferredValue(d),R=o.useDeferredValue($),{charKeys:w,totalCharNum:F}=o.useMemo(()=>{const D=t.chars.keys.length,{element:B,weaponType:k,rarity:H,sortType:Re,ascending:Fe}=q,Ke=t.chars.keys.filter(St({element:B,weaponType:k,rarity:H,name:l},At(t,p))).sort(Dt(ke[Re]??[],Fe,Wt(t,p),["new","favorite"]));return R&&{charKeys:Ke,totalCharNum:D}},[t,q,l,p,R]),{weaponType:Q,element:X,rarity:V,sortType:y,ascending:_}=d,Z=o.useMemo(()=>te(Lt,g=>Object.entries(t.chars.data).forEach(([D,B])=>{const k=t.weapons.get(B.equippedWeapon);if(!k)return;const H=Bt(k.key).weaponType;g[H].total++,w.includes(D)&&g[H].current++})),[t,w]),Ae=o.useMemo(()=>te(Nt,g=>Object.entries(t.chars.data).forEach(([D,B])=>{const k=Ot(B.key);g[k].total++,w.includes(D)&&g[k].current++})),[t,w]),We=o.useMemo(()=>te(Rt,g=>Object.entries(t.chars.data).forEach(([D,B])=>{const k=re(B.key).rarity;g[k].total++,w.includes(D)&&g[k].current++})),[t,w]),{numShow:he,setTriggerElement:Be}=It(Ia[f],w.length),ee=o.useMemo(()=>w.slice(0,he),[w,he]),Le=w.length!==F?`${w.length}/${F}`:`${F}`,Oe={numShowing:ee.length,total:Le,t:i,namespace:"page_character"},Ne={sortKeys:[...ka],value:y,onChange:g=>t.displayCharacter.set({sortType:g}),ascending:_,onChangeAsc:g=>t.displayCharacter.set({ascending:g})};return a(u,{display:"flex",flexDirection:"column",gap:1,children:[n&&e(wa,{characterKey:n,onClose:()=>s("/characters")}),e(o.Suspense,{fallback:!1,children:e(Ft,{newFirst:!0,show:v,onHide:()=>S(!1),onSelect:T})}),e(b,{children:a(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(h,{container:!0,spacing:1,children:[e(h,{item:!0,children:e(kt,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({weaponType:g}),value:Q,totals:Z,size:"small"})}),e(h,{item:!0,children:e(Mt,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({element:g}),value:X,totals:Ae,size:"small"})}),e(h,{item:!0,children:e(Et,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({rarity:g}),value:V,totals:We,size:"small"})}),e(h,{item:!0,flexGrow:1}),e(h,{item:!0,children:e(_t,{autoFocus:!0,value:x,onChange:g=>c(g.target.value),label:i("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),e(u,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(jt,{showingTextProps:Oe,sortByButtonProps:Ne})})]})}),e(I,{fullWidth:!0,onClick:()=>S(!0),color:"info",startIcon:e(J,{}),children:i("addNew")}),e(o.Suspense,{fallback:e(P,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e(h,{container:!0,spacing:1,columns:Da,children:ee.map(g=>e(h,{item:!0,xs:1,children:e($t,{characterKey:g,onClick:()=>s(`${g}`),hideStats:!0})},g))})}),w.length!==ee.length&&e(P,{ref:g=>{g&&Be(g)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Aa as default};