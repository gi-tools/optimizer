import{z as L,r,a$ as Q,a as j,bK as R,b as a,bN as V,ck as q,at as H,b6 as X,cR as _,Q as Y,S as M,cS as Z,g as ee,A as ae,cT as te,ae as se,bC as re,aF as oe,aG as ne,aC as le,aH as ce,d as w,f as K,G as P,O as W,bj as B,aL as ie,h as G,aI as me,af as A,M as he,N as ue,T as de,ak as pe,cU as fe}from"./index-BqOZF8-u.js";import{T as ge}from"./TeamCard-Wu601D90.js";import{d as O}from"./Upload-Y_l02DTT.js";import"./useTeamChar-C4tZkPdd.js";import"./TeamDelModal-B3BA0XSW.js";import"./Settings-eDjYSge7.js";function ye({teamIds:l,charKeys:s,setCharKey:i,acProps:c}){const{t:m}=L(["sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(Q),o=j(),{gender:h}=R(),u=r.useCallback(e=>o.charMeta.get(e).favorite,[o.charMeta]),S=r.useCallback(e=>a(V,{characterKey:e}),[]),v=r.useCallback((e,n)=>m(`${n?"sillyWisher_charNames":"charNames_gen"}:${q(e,h)}`),[h,m]),E=ee,[I,C]=H();r.useEffect(()=>o.chars.followAny((e,n)=>["new","remove"].includes(n)&&C()),[o.chars,C]);const d=r.useMemo(()=>I&&o.chars.keys,[o,I]),{characterTeamTotal:p}=r.useMemo(()=>X({characterTeamTotal:d},n=>{o.teams.values.forEach(k=>{const{loadoutData:T}=k;T.filter(_).forEach(({teamCharId:D})=>{const f=o.teamChars.get(D);if(!f)return;const b=f.key;n.characterTeamTotal[b].total++})}),l.forEach(k=>{const T=o.teams.get(k);if(!T)return;const{loadoutData:D}=T;D.filter(_).forEach(({teamCharId:f})=>{const b=o.teamChars.get(f);if(!b)return;const F=b.key;n.characterTeamTotal[F].current++})})}),[o,d,l]),N=r.useCallback(e=>a("strong",{children:p[e]}),[p]),$=r.useCallback(e=>a(Y,{size:"small",label:p[e]}),[p]),x=r.useMemo(()=>d.map(e=>({key:e,label:v(e,y),alternateNames:y?[v(e,!y)]:void 0,favorite:u(e),color:E(e)})).sort((e,n)=>e.favorite&&!n.favorite?-1:!e.favorite&&n.favorite?1:e.label.localeCompare(n.label)),[y,v,E,u,d]);return a(r.Suspense,{fallback:a(M,{variant:"text",width:100}),children:a(Z,{label:"Characters",options:x,toImg:S,valueKeys:s,onChange:e=>i(e),toExLabel:N,toExItemLabel:$,chipProps:{variant:"outlined"},...c})})}function Te(){return{name:l=>l.name??"",lastEdit:l=>l.lastEdit??0}}const Ce={name:["name","lastEdit"],lastEdit:["lastEdit"]};function xe(l){return{charKeys:(s,i)=>{var o;if(!i.length)return!0;const c=(o=l.teams.get(s))==null?void 0:o.loadoutData.filter(_),m=c==null?void 0:c.map(({teamCharId:h})=>{var u;return(u=l.teamChars.get(h))==null?void 0:u.key}).filter(_);return i.every(h=>m==null?void 0:m.includes(h))},name:(s,i)=>{var c;return!i||!!((c=l.teams.get(s))!=null&&c.name.toLowerCase().includes(i.toLowerCase()))}}}const be={xs:1,sm:2,md:2,lg:3,xl:3},we={xs:6,sm:12,md:18,lg:24,xl:24};function Ne(){const{t:l}=L(["page_teams","sillyWisher_charNames","charNames_gen"]),s=j(),[i,c]=H(),m=ae();r.useEffect(()=>s.teams.followAny((t,g)=>(g==="new"||g==="remove"||g==="update")&&c()),[c,s]),te();const y=()=>{const t=s.teams.new();m(t)},[o,h,u]=se(),[S,v]=r.useState(""),E=()=>{try{const t=JSON.parse(S);s.teams.import(t)||window.alert("Data verification failed."),u()}catch(t){window.alert(`Data Import failed. ${t}`);return}},I=re(s.displayTeam),{sortType:C,ascending:d,charKeys:p}=I,[N,$]=r.useState(I.searchTerm),x=r.useDeferredValue(N);r.useEffect(()=>{s.displayTeam.set({searchTerm:x})},[s,x]);const{teamIds:e,totalTeamNum:n}=r.useMemo(()=>{const t=s.teams.keys.length,g=s.teams.keys.filter(oe({charKeys:p,name:x},xe(s))).sort((U,z)=>ne(Ce[C],d,Te())(s.teams.get(U),s.teams.get(z)));return i&&{teamIds:g,totalTeamNum:t}},[i,s,p,x,C,d]),k=le(),{numShow:T,setTriggerElement:D}=ce(we[k],e.length),f=r.useMemo(()=>e.slice(0,T),[e,T]),b=e.length!==n?`${e.length}/${n}`:`${n}`,F={numShowing:f.length,total:b,t:l,namespace:"page_teams"},J={sortKeys:[...fe],value:C,onChange:t=>s.displayTeam.set({sortType:t}),ascending:d,onChangeAsc:t=>s.displayTeam.set({ascending:t})};return w(K,{display:"flex",flexDirection:"column",gap:1,children:[a(G,{children:w(W,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(K,{display:"flex",gap:1,alignItems:"stretch",children:[a(ye,{teamIds:e,charKeys:p,setCharKey:t=>s.displayTeam.set({charKeys:t}),acProps:{sx:{flexGrow:1}}}),a(B,{autoFocus:!0,value:N,onChange:t=>$(t.target.value),label:"Team Name",sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),a(K,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:a(ie,{showingTextProps:F,sortByButtonProps:J})})]})}),w(K,{sx:{display:"flex",gap:1},children:[a(A,{fullWidth:!0,onClick:y,color:"info",startIcon:a(me,{}),children:"Add Team"}),a(pe,{open:o,onClose:u,children:w(G,{children:[a(he,{title:"Import Team"}),a(ue,{}),w(W,{sx:{display:"flex",flexDirection:"column",gap:2},children:[a(de,{children:"Import a team in JSON form below."}),a(B,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:S,onChange:t=>v(t.target.value),multiline:!0,rows:4}),a(A,{startIcon:a(O,{}),disabled:!S,onClick:E,children:"Import"})]})]})}),a(A,{fullWidth:!0,onClick:h,color:"info",startIcon:a(O,{}),children:"Import Team"})]}),a(r.Suspense,{fallback:a(M,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:a(P,{container:!0,spacing:2,columns:be,children:f.map(t=>a(P,{item:!0,xs:1,children:a(r.Suspense,{fallback:a(M,{variant:"rectangular",width:"100%",height:150}),children:a(ge,{teamId:t,bgt:"light",onClick:g=>m(`${t}${g?`/${g}`:""}`)})})},t))})}),e.length!==f.length&&a(M,{ref:t=>{t&&D(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Ne as default};