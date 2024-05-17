import{n as e,s as t}from"./prop-types-C98rxrTl.js";import{S as n,h as r,wt as i,zt as a}from"./src-BUKtUzdy.js";import{Cn as o,D as s,Ga as c,J as l,Lt as u,Mn as d,Mt as f,On as p,Un as m,an as h,cn as g,ct as _,gn as v,ka as y,ln as b,mt as x,n as S,on as C,rn as w,un as T,ut as E,x as D,zr as O}from"./src-DHDux3K-.js";import{G as k,Xr as A,di as j,ei as M,oi as N,wi as P}from"./index-Cp6N2Hj9.js";var F=t(e((e=>{var t=O();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(h()),r=y();e.default=(0,n.default)((0,r.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`)}))()),I=t(c()),L=t(P());function R(){L.default.send({hitType:`pageview`,page:`/doc`});let{params:{currentTab:e}}=x(`/doc/:currentTab`)??{params:{currentTab:``}};return T(C,{children:[T(o,{container:!0,sx:{px:2,py:1},children:[b(o,{item:!0,flexGrow:1,children:b(m,{variant:`h6`,children:`Documentation`})}),b(o,{item:!0,children:b(m,{variant:`h6`,children:b(f,{color:`info`,children:`Version 3`})})})]}),b(a,{}),b(p,{children:T(o,{container:!0,spacing:1,children:[b(o,{item:!0,xs:12,md:2,children:b(C,{bgt:`light`,sx:{height:`100%`},children:T(M,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[b(N,{label:`Overview`,value:``,component:A,to:``}),b(N,{label:`Key naming convention`,value:`KeyNaming`,component:A,to:`KeyNaming`}),b(N,{label:b(`code`,{children:`StatKey`}),value:`StatKey`,component:A,to:`StatKey`}),b(N,{label:b(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:A,to:`ArtifactSetKey`}),b(N,{label:b(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:A,to:`CharacterKey`}),b(N,{label:b(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:A,to:`WeaponKey`}),b(N,{label:b(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:A,to:`MaterialKey`}),b(N,{label:`Version History`,value:`VersionHistory`,component:A,to:`VersionHistory`})]})})}),b(o,{item:!0,xs:12,md:10,children:b(C,{bgt:`light`,sx:{height:`100%`},children:b(p,{children:b(I.Suspense,{fallback:b(v,{variant:`rectangular`,width:`100%`,height:600}),children:T(E,{children:[b(_,{index:!0,element:b(U,{})}),b(_,{path:`/VersionHistory`,element:b(X,{})}),b(_,{path:`/MaterialKey`,element:b(Y,{})}),b(_,{path:`/ArtifactSetKey`,element:b(K,{})}),b(_,{path:`/WeaponKey`,element:b(J,{})}),b(_,{path:`/CharacterKey`,element:b(q,{})}),b(_,{path:`/StatKey`,element:b(G,{})}),b(_,{path:`/KeyNaming`,element:b(W,{})})]})})})})})]})})]})}var z=`interface IGOOD {
  format: "GOOD" // A way for people to recognize this format.
  version: number // GOOD API version.
  source: string // The app that generates this data.
  characters?: ICharacter[]
  artifacts?: IArtifact[]
  weapons?: IWeapon[]
  materials?: { // Added in version 2
    [key:MaterialKey]: number
  }
}`,B=`interface IArtifact {
  setKey: SetKey //e.g. "GladiatorsFinale"
  slotKey: SlotKey //e.g. "plume"
  level: number //0-20 inclusive
  rarity: number //1-5 inclusive
  mainStatKey: StatKey
  location: CharacterKey|"" //where "" means not equipped.
  lock: boolean //Whether the artifact is locked in game.
  substats: ISubstat[]
  // Below are new to GOOD 3
  totalRolls?: number // 3-9 for valid 5* artifacts; includes starting rolls
  astralMark?: boolean // Favorite star in-game
  elixirCrafted?: boolean // Flag for if the artifact was created using Sanctifying Elixir. This guarantees the main stat + 2 additional rolls on the first 2 substats
  unactivatedSubstats?: ISubstat[] // Unactivated substat(s). Once a substat is activated, it should be moved to \`substats\` instead
}

interface ISubstat {
  key: StatKey //e.g. "critDMG_"
  value: number //e.g. 19.4
  // Below is new to GOOD 3
  initialValue?: number // Initial roll of the artifact, if it is known. This includes the first roll of this stat, even if it was not revealed initially e.g. from \`unactivatedSubstats\`
}

type SlotKey = "flower" | "plume" | "sands" | "goblet" | "circlet"`,V=`interface IWeapon {
  key: WeaponKey //"CrescentPike"
  level: number //1-90 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  refinement: number //1-5 inclusive
  location: CharacterKey | "" //where "" means not equipped.
  lock: boolean //Whether the weapon is locked in game.
}`,H=`interface ICharacter {
  key: CharacterKey //e.g. "Rosaria"
  level: number //1-100 inclusive
  constellation: number //0-6 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  talent: { //does not include boost from constellations. 1-15 inclusive
    auto: number
    skill: number
    burst: number
  }
}`;function U(){return T(g,{children:[b(m,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),T(m,{gutterBottom:!0,children:[b(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),b(m,{gutterBottom:!0,children:`As of version 6.0.0, Genshin Optimizer's database export conforms to this format.`}),b(w,{text:z}),b(`br`,{}),b(m,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),b(w,{text:B}),b(`br`,{}),b(m,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),b(w,{text:V}),b(`br`,{}),b(m,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),b(w,{text:H})]})}function W(){return T(C,{children:[b(p,{children:b(m,{children:`Key Naming Convention`})}),b(a,{}),T(p,{children:[T(m,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,b(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),T(m,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),T(m,{children:[b(`code`,{children:`Gladiator's Finale`}),` `,b(F.default,{sx:{verticalAlign:`bottom`}}),` `,b(`code`,{children:`GladiatorsFinale`})]}),T(m,{children:[b(`code`,{children:`Spirit Locket of Boreas`}),` `,b(F.default,{sx:{verticalAlign:`bottom`}}),` `,b(`code`,{children:`SpiritLocketOfBoreas`})]}),T(m,{children:[b(`code`,{children:`"The Catch"`}),` `,b(F.default,{sx:{verticalAlign:`bottom`}}),` `,b(`code`,{children:`TheCatch`})]})]})]})}function G(){let{t:e}=u(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${k(t)}`).join(`
  | `)}`;return T(g,{children:[b(m,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),b(w,{text:t})]})}function K(){let{t:e}=u(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(l)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return T(g,{children:[b(m,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),b(w,{text:t})]})}function q(){let{t:e}=u(`charNames_gen`),t=n(),{gender:i}=r(),a=`type CharacterKey\n  = ${[...new Set(D)].sort().map(n=>`"${n}" //${e(`charNames_gen:${s(t.chars.LocationToCharacterKey(n),i)}`)}`).join(`
  | `)}`;return T(g,{children:[b(m,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),b(w,{text:a})]})}function J(){let{t:e}=u(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(S)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return T(g,{children:[b(m,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),b(w,{text:t})]})}function Y(){let{t:e}=u(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(i.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return T(g,{children:[b(m,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),T(m,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,b(j,{component:A,to:`KeyNaming`,children:b(`code`,{children:`PascalCase`})}),`.`]}),b(w,{text:t})]})}function X(){return T(d,{display:`flex`,flexDirection:`column`,gap:2,children:[b(m,{gutterBottom:!0,variant:`h4`,children:`Version History`}),T(C,{children:[b(p,{children:b(m,{children:`Version 1`})}),b(a,{}),b(p,{children:T(m,{children:[`Created general `,b(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),T(C,{children:[b(p,{children:b(m,{children:`Version 2`})}),b(a,{}),b(p,{children:T(m,{children:[`Adds `,b(`code`,{children:`materials`}),` field to `,b(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),T(C,{children:[b(p,{children:b(m,{children:`Version 3`})}),b(a,{}),b(p,{children:T(m,{children:[`Adds new fields to `,b(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,b(`br`,{}),`New fields for `,b(`code`,{children:`IArtifact`}),`:`,` `,b(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),b(`br`,{}),`New field for `,b(`code`,{children:`ISubstat`}),`: `,b(`code`,{children:`initialValue`})]})})]})]})}export{R as default};