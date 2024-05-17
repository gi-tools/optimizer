import{u as E,a as L,ac as G,d as e,e as n,f as a,ad as H,T as s,B as N,I as Z,an as Q,C as P,X as U,bL as l,h as D,i as X,bH as _,r as u,aZ as V,bP as Y,k as q,l as J,cX as K,b as ee,D as te,bU as M,aQ as ae,U as ne,bQ as oe,P as ie,o as re,S as $,s as se,bR as le,cY as ce,x as de,cZ as he,Z as pe,c_ as xe,cp as T,cg as F}from"./index-Czh18qLW.js";import{u as ue,c as k,h as I}from"./useTeamChar-SRsQe-nh.js";import{T as ge}from"./TeamDelModal-hxzJIiXc.js";function Se({teamId:t,onClick:c,bgt:d}){const i=E(t),{name:r,description:o,loadoutData:p}=i,g=L(),[m,x,S]=G();return e(D,{bgt:d,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:n(a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[n(a,{sx:{display:"flex",flexDirection:"row"},children:[e(H,{onClick:()=>c(),variant:"outlined",fullWidth:!0,color:"neutral300",sx:{borderTopRightRadius:0,borderBottomRightRadius:0,borderBottomLeftRadius:0},children:n(s,{sx:{display:"flex",gap:1,alignItems:"center"},variant:"h6",children:[e("span",{children:r}),o&&e(N,{title:e(s,{children:o}),children:e(Z,{})})]})}),e(ge,{teamId:t,show:m,onHide:S,onDel:function(){}}),e(H,{variant:"outlined",size:"small",onClick:x,color:"error",sx:{borderTopLeftRadius:0,borderBottomRightRadius:0,borderBottomLeftRadius:0},children:e(Q,{})})]}),e(a,{sx:{marginTop:"auto"},children:p.map((b,v)=>{var f;const w=b==null?void 0:b.teamCharId,h=w&&((f=g.teamChars.get(w))==null?void 0:f.key);return e(a,{className:"team-teammate",sx:{border:"1px rgba(200,200,200,0.3) solid","&:hover":{border:"1px rgba(200,200,200,0.8) solid"}},children:h?e(P,{onClick:()=>c(h),children:e(me,{characterKey:h,teamId:t,teamCharId:w})}):e(P,{onClick:()=>c(),sx:{height:120,position:"relative"},children:e(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:120,backgroundColor:"neutral600.main"},children:e(a,{component:l?l:"img",src:U.team[`team${v+1}`],sx:{width:"auto",my:"15px",height:90,opacity:.7,mx:"auto"}})})})})})})]})})}const y={banner:0,bannerFilter:1,characterIcon:2,darkDRop:3,other:4};function me({characterKey:t,teamId:c,teamCharId:d}){var B;const i=L(),r=X(t),{gender:o}=_(),{silly:p}=u.useContext(V),g=Y(t),{name:m}=ue(d),x=i.teams.getLoadoutDatum(c,d),S=i.teams.getActiveBuildName(x),b=u.useMemo(()=>i.teams.getLoadoutWeapon(x),[x,i]),v=(()=>{const{buildType:C,buildTcId:j}=x;return C==="tc"&&j?q(i.buildTcs.get(j)):Object.values(i.teams.getLoadoutArtifacts(x)).filter(O=>O)})(),w=u.useMemo(()=>i.teams.getLoadoutArtifactData(x),[i,x]),h=J(t,void 0,v,b),f=(B=h==null?void 0:h[t])==null?void 0:B.target,R=u.useMemo(()=>r&&{character:r},[r]),A=u.useMemo(()=>f&&h&&{data:f,teamData:h},[f,h]),z=K(t,"banner",o),W=ee(t);return!R||!A?null:e(se.Provider,{value:R,children:e(te.Provider,{value:A,children:e(u.Suspense,{fallback:e($,{variant:"rectangular",width:"100%",height:300}),children:n(a,{className:z?void 0:`grad-${g.rarity}star`,sx:{display:"flex","&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${z})`,backgroundPosition:"center",backgroundSize:"cover",zIndex:y.banner}},children:[e(a,{sx:C=>({position:"absolute",width:"100%",height:"100%",zIndex:y.bannerFilter,backdropFilter:"blur(3px)",background:`linear-gradient(to right, ${k(I(C.palette.neutral600.main),.8)}, ${k(I(C.palette.neutral600.main),.4)} 100% )`})}),e(a,{sx:C=>({position:"absolute",width:"100%",height:"100%",zIndex:y.darkDRop,background:`linear-gradient(to top, ${k(I(C.palette.neutral600.main),.9)}, rgba(0,0,0,0) 25% )`})}),n(a,{sx:{height:120,width:120,position:"absolute",zIndex:y.other},children:[r&&e(s,{sx:{position:"absolute",lineHeight:1,bottom:0,p:.5,textShadow:"0 0 5px black"},children:M(r.level,r.ascension)}),r&&n(s,{sx:{position:"absolute",lineHeight:1,bottom:0,right:0,p:.5,textShadow:"0 0 5px black"},children:["C",r.constellation]}),t.startsWith("Traveler")&&e(s,{sx:{position:"absolute",lineHeight:1,top:0,left:0,p:.5,textShadow:"0 0 5px black"},children:e(ae,{color:W,children:e(ne,{ele:W})})})]}),e(a,{component:l?l:"img",src:oe(t,o,p),sx:{height:120,width:120,zIndex:y.characterIcon}}),n(a,{sx:{pr:.5,pl:.5,py:.5,display:"flex",flexDirection:"column",flexGrow:1,width:"100%",minWidth:0,justifyContent:"space-between",zIndex:y.other},children:[n(s,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(ie,{}),e("span",{children:m})]}),n(s,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(re,{}),e("span",{children:S})]}),n(a,{sx:{display:"flex",mb:.5,gap:1},children:[e(be,{weapon:b}),e(fe,{artifactData:w})]})]})]})})})})}function be({weapon:t}){return n(D,{bgt:"neutral600",sx:{height:"100%",display:"flex",flexDirection:"horizontal",boxShadow:"0 0 10px rgba(0,0,0,0.4)"},children:[e(a,{component:l?l:"img",src:le(t.key,t.ascension>=2),maxWidth:"100%",maxHeight:"50px",sx:{mt:"auto"}}),n(a,{sx:{pr:1,display:"flex",flexDirection:"column",justifyContent:"space-evenly",color:"neutral200.main"},children:[e(s,{sx:{},children:M(t.level,t.ascension)}),ce(t.key)&&n(s,{children:["R",t.refinement]})]})]})}function fe({artifactData:t}){const{setNum:c={},mains:d={}}=t,{t:i}=de("statKey_gen"),r=Object.entries(c).filter(([,o])=>o>1).map(([o,p])=>[o,p<4?2:4]);return n(D,{bgt:"neutral600",sx:{height:"100%",maxHeight:"50px",display:"flex",flexDirection:"horizontal",boxShadow:"0 0 10px rgba(0,0,0,0.4)",flexGrow:1},children:[e(a,{sx:{Width:"50px",minWidth:"50px",height:"50px",position:"relative"},children:r.length===2?e(Ce,{sets:r.map(([o])=>o)}):r.length===1?e(ye,{set:r[0][0],num:r[0][1]}):!1}),e(a,{sx:{display:"flex",flexGrow:1,position:"relative",justifyContent:"space-around",alignItems:"center"},children:Object.entries(d).filter(([,o])=>o).map(([o,p])=>{const g=e(pe,{slotKey:o,iconProps:{sx:{fontSize:"inherit"}}}),m=e(xe,{statKey:p,iconProps:{sx:{fontSize:"inherit"}}});return e(N,{title:e(a,{children:n(u.Suspense,{fallback:e($,{variant:"text"}),children:[n(s,{sx:{display:"flex",gap:1,alignItems:"center"},children:[g,e(he,{slotKey:o})]}),n(s,{sx:{display:"flex",gap:1,alignItems:"center"},children:[m,i(p)]})]})}),children:n(s,{sx:{lineHeight:0},children:[g,m]})},o+p)})})]})}function Ce({sets:t}){const c=t[0],d=t[1];return n(F,{children:[e(a,{component:l?l:"img",sx:{position:"absolute",top:0,left:0,Width:"50px",height:"50px",clipPath:"polygon(0 0, 0 100%, 100% 0)"},src:T(c,"flower")}),e(a,{component:l?l:"img",sx:{position:"absolute",top:0,left:0,Width:"50px",height:"50px",clipPath:"polygon(100% 100%, 0 100%, 100% 0)"},src:T(d,"flower")}),e(a,{className:"botright",sx:i=>({position:"absolute",bottom:0,right:0,width:"1.4em",padding:"0.2em",textAlign:"center",backgroundColor:k(I(i.palette.primary.main),.4),borderRadius:"100%"}),children:"2"}),e(a,{sx:i=>({position:"absolute",top:0,left:0,width:"1.4em",padding:"0.2em",textAlign:"center",backgroundColor:k(I(i.palette.primary.main),.4),borderRadius:"100%"}),children:"2"})]})}function ye({set:t,num:c}){return n(F,{children:[e(a,{sx:d=>({position:"absolute",bottom:0,right:0,width:"1.4em",padding:"0.2em",textAlign:"center",backgroundColor:k(I(d.palette.primary.main),.4),borderRadius:"100%"}),children:c}),e(a,{component:l?l:"img",src:T(t,"flower"),sx:{Width:"50px",height:"50px"}})]})}export{Se as T};
