import{_ as x,r as I,j as c,s as K,c as O,k as _,m as at,u as et,v as ot}from"./index-fe54c6f5.js";import{u as st}from"./useMediaQuery-c235083b.js";import{z as nt,A as it,D as rt,E as A,F as V,G as lt,k as ct,H as dt,v as pt,c as F,d as W,g as w,I as E,s as j,u as U,a as X,m as ut,i as T,B as gt,b as N,j as S}from"./ButtonBase-ca938c7b.js";import{_ as D}from"./assertThisInitialized-8437fa46.js";import{u as xt}from"./useTheme-270f8353.js";const ft=nt(),vt=ft,bt=["component","direction","spacing","divider","children","className","useFlexGap"],mt=it(),yt=vt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,a)=>a.root});function ht(t){return rt({props:t,name:"MuiStack",defaultTheme:mt})}function kt(t,a){const e=I.Children.toArray(t).filter(Boolean);return e.reduce((o,p,i)=>(o.push(p),i<e.length-1&&o.push(I.cloneElement(a,{key:`separator-${i}`})),o),[])}const Ct=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],Pt=({ownerState:t,theme:a})=>{let e=x({display:"flex",flexDirection:"column"},A({theme:a},V({values:t.direction,breakpoints:a.breakpoints.values}),o=>({flexDirection:o})));if(t.spacing){const o=lt(a),p=Object.keys(a.breakpoints.values).reduce((s,n)=>((typeof t.spacing=="object"&&t.spacing[n]!=null||typeof t.direction=="object"&&t.direction[n]!=null)&&(s[n]=!0),s),{}),i=V({values:t.direction,base:p}),f=V({values:t.spacing,base:p});typeof i=="object"&&Object.keys(i).forEach((s,n,g)=>{if(!i[s]){const v=n>0?i[g[n-1]]:"column";i[s]=v}}),e=ct(e,A({theme:a},f,(s,n)=>t.useFlexGap?{gap:E(o,s)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Ct(n?i[n]:t.direction)}`]:E(o,s)}}))}return e=dt(a.breakpoints,e),e};function $t(t={}){const{createStyledComponent:a=yt,useThemeProps:e=ht,componentName:o="MuiStack"}=t,p=()=>W({root:["root"]},s=>w(o,s),{}),i=a(Pt);return I.forwardRef(function(s,n){const g=e(s),b=pt(g),{component:v="div",direction:u="column",spacing:d=0,divider:P,children:k,className:m,useFlexGap:$=!1}=b,y=D(b,bt),R={direction:u,spacing:d,useFlexGap:$},C=p();return c.jsx(i,x({as:v,ownerState:R,ref:n,className:F(C.root,m)},y,{children:P?kt(k,P):k}))})}const Mt=$t({createStyledComponent:j("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,a)=>a.root}),useThemeProps:t=>U({props:t,name:"MuiStack"})}),zt=Mt;function It(t){return w("MuiPagination",t)}X("MuiPagination",["root","ul","outlined","text"]);const Rt=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Nt(t={}){const{boundaryCount:a=1,componentName:e="usePagination",count:o=1,defaultPage:p=1,disabled:i=!1,hideNextButton:f=!1,hidePrevButton:r=!1,onChange:s,page:n,showFirstButton:g=!1,showLastButton:b=!1,siblingCount:v=1}=t,u=D(t,Rt),[d,P]=ut({controlled:n,default:p,name:e,state:"page"}),k=(l,z)=>{n||P(z),s&&s(l,z)},m=(l,z)=>{const Z=z-l+1;return Array.from({length:Z},(Yt,tt)=>l+tt)},$=m(1,Math.min(a,o)),y=m(Math.max(o-a+1,a+1),o),R=Math.max(Math.min(d-v,o-a-v*2-1),a+2),C=Math.min(Math.max(d+v,a+v*2+2),y.length>0?y[0]-2:o-1),L=[...g?["first"]:[],...r?[]:["previous"],...$,...R>a+2?["start-ellipsis"]:a+1<o-a?[a+1]:[],...m(R,C),...C<o-a-1?["end-ellipsis"]:o-a>a?[o-a]:[],...y,...f?[]:["next"],...b?["last"]:[]],B=l=>{switch(l){case"first":return 1;case"previous":return d-1;case"next":return d+1;case"last":return o;default:return null}},M=L.map(l=>typeof l=="number"?{onClick:z=>{k(z,l)},type:"page",page:l,selected:l===d,disabled:i,"aria-current":l===d?"true":void 0}:{onClick:z=>{k(z,B(l))},type:l,page:B(l),selected:!1,disabled:i||l.indexOf("ellipsis")===-1&&(l==="next"||l==="last"?d>=o:d<=1)});return x({items:M},u)}function jt(t){return w("MuiPaginationItem",t)}const Lt=X("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),h=Lt,G=T(c.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Q=T(c.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),H=T(c.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),q=T(c.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Bt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],Y=(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],a[`size${S(e.size)}`],e.variant==="text"&&a[`text${S(e.color)}`],e.variant==="outlined"&&a[`outlined${S(e.color)}`],e.shape==="rounded"&&a.rounded,e.type==="page"&&a.page,(e.type==="start-ellipsis"||e.type==="end-ellipsis")&&a.ellipsis,(e.type==="previous"||e.type==="next")&&a.previousNext,(e.type==="first"||e.type==="last")&&a.firstLast]},St=t=>{const{classes:a,color:e,disabled:o,selected:p,size:i,shape:f,type:r,variant:s}=t,n={root:["root",`size${S(i)}`,s,f,e!=="standard"&&`${s}${S(e)}`,o&&"disabled",p&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[r]],icon:["icon"]};return W(n,jt,a)},Ot=j("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:Y})(({theme:t,ownerState:a})=>x({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${h.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},a.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},a.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),Ft=j(gt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:Y})(({theme:t,ownerState:a})=>x({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${h.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${h.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:N(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${h.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:N(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${h.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},a.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},a.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},a.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:a})=>x({},a.variant==="text"&&{[`&.${h.selected}`]:x({},a.color!=="standard"&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}},[`&.${h.focusVisible}`]:{backgroundColor:(t.vars||t).palette[a.color].dark}},{[`&.${h.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},a.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${h.selected}`]:x({},a.color!=="standard"&&{color:(t.vars||t).palette[a.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / 0.5)`:N(t.palette[a.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:N(t.palette[a.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:N(t.palette[a.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:N(t.palette[a.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${h.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),Tt=j("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,a)=>a.icon})(({theme:t,ownerState:a})=>x({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},a.size==="small"&&{fontSize:t.typography.pxToRem(18)},a.size==="large"&&{fontSize:t.typography.pxToRem(22)})),Dt=I.forwardRef(function(a,e){const o=U({props:a,name:"MuiPaginationItem"}),{className:p,color:i="standard",component:f,components:r={},disabled:s=!1,page:n,selected:g=!1,shape:b="circular",size:v="medium",slots:u={},type:d="page",variant:P="text"}=o,k=D(o,Bt),m=x({},o,{color:i,disabled:s,selected:g,shape:b,size:v,type:d,variant:P}),$=xt(),y=St(m),C=($.direction==="rtl"?{previous:u.next||r.next||q,next:u.previous||r.previous||H,last:u.first||r.first||G,first:u.last||r.last||Q}:{previous:u.previous||r.previous||H,next:u.next||r.next||q,first:u.first||r.first||G,last:u.last||r.last||Q})[d];return d==="start-ellipsis"||d==="end-ellipsis"?c.jsx(Ot,{ref:e,ownerState:m,className:F(y.root,p),children:"…"}):c.jsxs(Ft,x({ref:e,ownerState:m,component:f,disabled:s,className:F(y.root,p)},k,{children:[d==="page"&&n,C?c.jsx(Tt,{as:C,ownerState:m,className:y.icon}):null]}))}),Vt=Dt,Wt=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],wt=t=>{const{classes:a,variant:e}=t;return W({root:["root",e],ul:["ul"]},It,a)},Ut=j("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant]]}})({}),_t=j("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,a)=>a.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function At(t,a,e){return t==="page"?`${e?"":"Go to "}page ${a}`:`Go to ${t} page`}const Et=I.forwardRef(function(a,e){const o=U({props:a,name:"MuiPagination"}),{boundaryCount:p=1,className:i,color:f="standard",count:r=1,defaultPage:s=1,disabled:n=!1,getItemAriaLabel:g=At,hideNextButton:b=!1,hidePrevButton:v=!1,renderItem:u=M=>c.jsx(Vt,x({},M)),shape:d="circular",showFirstButton:P=!1,showLastButton:k=!1,siblingCount:m=1,size:$="medium",variant:y="text"}=o,R=D(o,Wt),{items:C}=Nt(x({},o,{componentName:"Pagination"})),L=x({},o,{boundaryCount:p,color:f,count:r,defaultPage:s,disabled:n,getItemAriaLabel:g,hideNextButton:b,hidePrevButton:v,renderItem:u,shape:d,showFirstButton:P,showLastButton:k,siblingCount:m,size:$,variant:y}),B=wt(L);return c.jsx(Ut,x({"aria-label":"pagination navigation",className:F(B.root,i),ownerState:L,ref:e},R,{children:c.jsx(_t,{className:B.ul,ownerState:L,children:C.map((M,l)=>c.jsx("li",{children:u(x({},M,{color:f,"aria-label":g(M.type,M.page,M.selected),shape:d,size:$,variant:y}))},l))})}))}),Gt=Et,sa=t=>t.drinks.searchQuery,na=t=>t.drinks.categories,ia=t=>t.drinks.ingredients,Qt=t=>t.drinks.page,ra=t=>t.drinks.searchResults,la=t=>t.drinks.isLoading,Ht="/DrinkMaster/assets/img-blue-iced-tea-desktop-a09c845f.png",qt="/DrinkMaster/assets/img-blue-iced-tea-desktop@2x-16950817.png",J="/DrinkMaster/assets/img-blue-iced-tea-mobile-e64cabfc.png",Jt="/DrinkMaster/assets/img-blue-iced-tea-mobile@2x-b8c817dc.png",Kt=K.div`
  margin-top: 91px;
  /* margin-left: auto;
  margin-right: auto; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    margin-top: 67px;
  }
`,Xt=K.p`
  margin-top: 32px;
  color: ${O.light};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,ca=({message:t})=>c.jsxs(Kt,{children:[c.jsxs("picture",{children:[c.jsx("source",{media:"(min-width: 768px)",srcSet:`${Ht} 1x, ${qt} 2x`,width:"261",height:"326"}),c.jsx("source",{media:"(min-width: 375px)",srcSet:`${J} 1x, ${Jt} 2x`,width:"198",height:"247"}),c.jsx("img",{src:J,alt:"not found",width:"198",height:"247"})]}),c.jsx(Xt,{children:t})]}),da=({limit:t,totalItems:a})=>{const e=_(Qt),o=_(at),[p,i]=I.useState(1),[f,r]=I.useState(2),s=et(),n=st("(min-width:768px)"),g=Math.ceil(a/t);I.useEffect(()=>{if(!n&&g>5){i(1),r(0);return}if(n&&g>8){i(3),r(-2);return}i(1),r(2)},[g,n]);const b={stack:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:n?"436px":"320px",height:"55px",marginLeft:"auto",marginRight:"auto"},pagination:{".MuiPaginationItem-root":{marginLeft:"7px",marginRight:"7px",padding:"0",minWidth:"27px",height:"27px",fontSize:"12px",fontWeight:"500",color:`${o==="dark"?O.light:O.primaryDark}`,transition:"background 250ms ease","&:hover":{backgroundColor:`${o==="dark"?"rgba(64, 112, 205, 0.4)":"rgba(64, 112, 205, 0.9)"}`}},".MuiPaginationItem-page.Mui-selected":{backgroundColor:`${o==="dark"?"rgba(64, 112, 205, 0.5)":O.blue}`},"ul.MuiPagination-ul":{flexWrap:"nowrap","& > :first-of-type":{marginRight:"16px"},"& > :last-of-type":{marginLeft:"16px"}}}};return c.jsx(zt,{sx:b.stack,children:g>1&&c.jsx(Gt,{count:g,page:e,boundaryCount:p,siblingCount:f,onChange:(v,u)=>s(ot(u)),onClick:()=>window.scrollTo({top:200,behavior:"smooth"}),sx:b.pagination})})};export{ca as N,da as P,na as a,ia as b,Qt as c,sa as d,la as e,ra as s};
