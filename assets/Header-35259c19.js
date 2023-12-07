import{s as t,c as n,N as w,j as e,u as L,r as x,a6 as _,k as c,m,a7 as q,A as R,a8 as J,a9 as K}from"./index-fe54c6f5.js";import{c as Q,a as X,u as Y}from"./index.esm-1c8c3902.js";const ee=t(w)`
  display: inline-flex;
  align-items: center;
`,ie=t.svg`
  width: 22px;
  height: 22px;
  margin-right: 8px;
${({theme:i})=>i==="dark"?` fill: ${n.light};`:` fill: ${n.secondaryDark};`}
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 14px;
  }
`,te=t.h3`
${({theme:i})=>i==="dark"?` color: ${n.light};`:`color: ${n.secondaryDark};`}

  font-size: 16px;
  font-weight: 600;
  line-height: 18px; 
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px; 
  }
`,V=({theme:i})=>e.jsxs(ee,{to:"/home",children:[e.jsx(ie,{theme:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:e.jsx("path",{d:"M19.3639 0H8.63616L0 8.63614V19.3638L8.63616 28H19.3639L28 19.3638V8.63614L19.3639 0ZM10.1205 19.4988L4.58796 13.9663L10.1205 8.43373C12.212 6.34217 15.653 6.34217 17.7446 8.43373L23.2771 13.9663L17.7446 19.4988C15.653 21.5904 12.2795 21.5904 10.1205 19.4988Z"})}),e.jsx(te,{theme:i,children:"Drink Master"})]}),ne=t.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,u=t(w)`
  color: ${n.light};
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  transition: transform 250ms ease;

  &:hover,
  &:focus {
    transform: scale(1.05);
  } 
`,oe=()=>e.jsxs(ne,{children:[e.jsx(u,{to:"/drinks",children:"Drinks"}),e.jsx(u,{to:"/add",children:"Add drink"}),e.jsx(u,{to:"/my",children:"My drinks"}),e.jsx(u,{to:"/favorites",children:"Favorites drinks"})]}),re=t.ul`
  display: flex;
  column-gap: 14px;
  `,y=t.li``,$=t.a`
  display: inline-flex;
  padding: 7px;

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  ${({theme:i})=>i==="dark"?"border: 1px solid rgba(243, 243, 243, 0.20);":"border:1px solid  rgba(10, 10, 17, 0.50);"}

  transition: border-color 250ms ease;

  &:hover,
  &:focus {
    border-color: rgba(243, 243, 243, 0.50);
  } 
`,S=t.svg`
  width: 22px;
  height: 22px;
${({theme:i})=>i==="dark"?` fill: ${n.light};`:`fill: ${n.primaryDark};`}
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,se=({theme:i})=>e.jsxs(re,{children:[e.jsx(y,{children:e.jsx($,{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",theme:i,children:e.jsx(S,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",theme:i,children:e.jsx("path",{d:"M17.0804 4.06011C17.2904 4.06011 17.5004 4.06011 17.9204 4.06011V7.21011C17.7104 7.21011 17.2904 7.21011 16.8704 7.21011C16.4504 7.21011 16.0304 7.21011 15.8204 7.42011C15.6104 7.63011 15.6104 7.84011 15.6104 8.33011C15.6104 8.75011 15.6104 9.03011 15.6104 9.45011H17.9204V12.1101H15.6104V23.6601H12.0404V12.0401H10.1504V9.38011H12.0404V8.47011C12.0404 6.93011 12.2504 5.81011 12.6704 5.32011C13.3004 4.41011 14.5604 3.99011 16.4504 3.99011C16.6604 4.06011 16.8704 4.06011 17.0804 4.06011Z"})})})}),e.jsx(y,{children:e.jsx($,{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",theme:i,children:e.jsx(S,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",theme:i,children:e.jsxs("g",{opacity:"0.8",children:[e.jsx("path",{d:"M25.1277 9.41152C25.114 8.47146 24.9398 7.53885 24.6065 6.65964C24.0231 5.15827 22.8352 3.97109 21.3313 3.38991C20.4618 3.06332 19.5426 2.88822 18.6122 2.86835C17.4155 2.81495 17.0361 2.80005 13.9986 2.80005C10.961 2.80005 10.5716 2.80005 9.38372 2.86835C8.45454 2.88822 7.5353 3.06332 6.66582 3.38991C5.16196 3.97109 3.97279 5.15827 3.39065 6.65964C3.06351 7.52767 2.88688 8.44538 2.86946 9.37302C2.81598 10.5689 2.7998 10.9477 2.7998 13.9802C2.7998 17.0127 2.7998 17.4002 2.86946 18.5873C2.88812 19.5162 3.06351 20.4327 3.39065 21.3032C3.97404 22.8033 5.16195 23.9905 6.66706 24.5717C7.53281 24.9095 8.45205 25.1007 9.38497 25.1305C10.5828 25.1839 10.9622 25.2001 13.9998 25.2001C17.0374 25.2001 17.4267 25.2001 18.6146 25.1305C19.5438 25.1119 20.4631 24.9368 21.3338 24.6102C22.8377 24.0278 24.0256 22.8406 24.609 21.3405C24.9361 20.4712 25.1115 19.5547 25.1301 18.6246C25.1836 17.43 25.1998 17.0512 25.1998 14.0174C25.1973 10.9849 25.1973 10.5999 25.1277 9.41152ZM13.9911 19.7149C10.8142 19.7149 8.24059 17.1456 8.24059 13.974C8.24059 10.8024 10.8142 8.23302 13.9911 8.23302C17.1655 8.23302 19.7416 10.8024 19.7416 13.974C19.7416 17.1456 17.1655 19.7149 13.9911 19.7149ZM19.9705 9.35936C19.2279 9.35936 18.6296 8.7608 18.6296 8.02067C18.6296 7.28055 19.2279 6.68199 19.9705 6.68199C20.7106 6.68199 21.3102 7.28055 21.3102 8.02067C21.3102 8.7608 20.7106 9.35936 19.9705 9.35936Z"}),e.jsx("path",{d:"M13.9928 17.4789C15.9277 17.4789 17.4963 15.9104 17.4963 13.9754C17.4963 12.0405 15.9277 10.4719 13.9928 10.4719C12.0578 10.4719 10.4893 12.0405 10.4893 13.9754C10.4893 15.9104 12.0578 17.4789 13.9928 17.4789Z"})]})})})}),e.jsx(y,{children:e.jsx($,{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",theme:i,children:e.jsx(S,{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",theme:i,children:e.jsx("g",{opacity:"0.8",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.2103 5.24986C20.0203 5.17986 17.5704 5.10986 13.8604 5.10986H13.3703C9.80034 5.10986 7.42038 5.17986 6.23038 5.31986C4.62038 5.45986 3.50034 5.87986 2.87034 6.43986C2.31034 6.92986 1.89036 7.83986 1.75036 9.02986C1.68036 9.79986 1.61035 11.4099 1.61035 13.8599V14.2099C1.61035 16.5199 1.68034 18.1299 1.82034 18.8999C2.03034 20.0199 2.38038 20.8599 3.08038 21.3499C3.78038 21.9099 4.97036 22.2599 6.65036 22.3999C7.84036 22.4699 10.2904 22.5399 14.0004 22.5399H14.4904C18.0604 22.5399 20.4404 22.4699 21.6304 22.3299C23.2404 22.1899 24.3604 21.7699 24.9904 21.2099C25.5504 20.7199 25.9703 19.8099 26.1103 18.6199C26.1803 17.8499 26.2504 16.2399 26.2504 13.7899V13.4399C26.2504 11.1299 26.1804 9.51986 26.0404 8.74986C25.8304 7.62986 25.4804 6.78986 24.7804 6.29986C24.0804 5.73986 22.8903 5.38986 21.2103 5.24986ZM18.4804 13.8599L10.7804 18.4799V9.23986L18.4804 13.8599Z"})})})})})]}),ae=t.form`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 309px;
  }
`,de=t.input`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: ${n.light};

  font-size: 14px;
  font-weight: 400;
  line-height: 18px; 

  padding-top: 16px;
  padding-right: 0px;
  padding-bottom: 18px;
  margin-bottom: 17px;
  text-indent: 22px;

  transition: border-color 250ms ease;
  outline: none; 

  &:hover,
  &:focus {
    border-color: rgba(243, 243, 243, 0.50);
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 156%;
    padding-top: 13.5px;
    padding-bottom: 14px;
  }

  &.error {
    margin-bottom: 0;
    border-color: rgba(218, 20, 20, 0.50);
    background-image: url('src/components/SubscribeForm/ic_baseline-error-outline.svg');
    background-repeat: no-repeat;
    background-position: right 14px center;
  }

  &.valid {
    margin-bottom: 0;
    border-color: rgba(60, 188, 129, 0.50);
    background-image: url('src/components/SubscribeForm/Done.svg');
    background-repeat: no-repeat;
    background-position: right 14px center;
  }
`,pe=t.button`
  width: 100%;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: ${n.light};
  padding-top: 17px;
  padding-right: 127px;
  padding-bottom: 17px;
  padding-left: 128px;

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;

  // transition: transform 250ms ease;

  // &:hover,
  // &:focus {
  //   transform: scale(1.05);
  // }

  &:disabled {
    color: ${n.disabled};
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 156%;
    padding-top: 13.5px;
    padding-bottom: 14px;
    padding-left: 113px;
  }
`,le=t.h3`
  color: ${n.light};
  width: 335px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 209px;
  }
`,E=Q().shape({email:X().required("Email is required").email("This is an ERROR email")}),xe=({message:i})=>e.jsx("div",{style:{color:"#DA1414",fontSize:"12px",lineHeight:"14px",marginTop:"2px",marginBottom:"2px",marginLeft:"24px"},children:i}),ce=()=>e.jsx("div",{style:{color:"#3CBC81",fontSize:"12px",lineHeight:"14px",marginTop:"2px",marginBottom:"2px",marginLeft:"24px"},children:"This is an CORRECT email"}),he=()=>{const i=L(),[o,r]=x.useState(!1),s=Y({initialValues:{email:""},validationSchema:E,onSubmit:(l,h)=>{i(_(l)),r(!1),h.resetForm()}}),d=s.touched.email&&s.errors.email;return e.jsxs(ae,{onSubmit:s.handleSubmit,children:[e.jsx(le,{children:"Subscribe up to our newsletter. Be in touch with the latest news and special offers, etc."}),e.jsx(de,{id:"email",name:"email",type:"email",placeholder:"Enter the email",onChange:l=>{s.handleChange(l),E.isValidSync({email:l.target.value})?r(!0):r(!1)},value:s.values.email,onBlur:s.handleBlur,className:d?"error":o?"valid":""}),d?e.jsx(xe,{message:s.errors.email}):o?e.jsx(ce,{}):null,e.jsx(pe,{type:"submit",disabled:d,children:"Subscribe"})]})},ge=t.div`
  z-index:10;
  position:relative;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 153px;
    align-items: flex-end;
  }

  @media screen and (min-width: 1440px) {
    gap: 689px;
  }
`,me=t.p`
color: rgba(243, 243, 243, 0.50);
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: -0.24px;
margin-top: 80px;
margin-bottom: 8px; 

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    margin-bottom: 0px;
  }
`,ue=t.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`,M=t(w)`
  color: rgba(243, 243, 243, 0.50);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px; 
  letter-spacing: -0.24px;

  transition: color 250ms ease;
  transition: transform 250ms ease;

  &:hover,
  &:focus {
    color: ${n.light};
    transform: scale(1.05);
  }

  &.active {
    color: ${n.light};
  }
  
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }
`,be=()=>e.jsxs(ge,{children:[e.jsx(me,{children:"©2023 Drink Master. All rights reserved."}),e.jsxs(ue,{children:[e.jsx(M,{to:"/privacy",children:"Privacy Policy"}),e.jsx(M,{to:"/service",children:"Terms of Service"})]})]}),ii=t.div`
  min-height: 100hv;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  /* min-width: 375px; */

  /* @media screen and (max-width: 375px) {
    width: 375px;
  } */

  @media screen and (max-width: 767px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    /* max-width: 768px; */
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 1440px; */
    width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
    overflow: visible;
  }
`,ti=t.div`
  position: absolute;
  /* background-color: rgba(64, 112, 205, 0.5); */
  background-color: ${({theme:i})=>i==="dark"?"rgba(64, 112, 205, 0.5)":"rgba(64, 112, 205, 0.10)"};
  filter: blur(105px);
  z-index: -10;

  @media screen and (min-width: 768px) {
    width: 549px;
    height: 543px;
    top: 414px;
    left: 651px;
  }

  @media screen and (min-width: 1440px) {
    width: 549px;
    height: 543px;
    top: 374px;
    left: 1181px;
  }
`,ni=t.div`
  position: absolute;
  /* background-color: rgba(64, 112, 205, 0.5); */
  background-color: ${({theme:i})=>i==="dark"?"rgba(64, 112, 205, 0.5)":"rgba(64, 112, 205, 0.10)"};
  filter: blur(105px);
  z-index: -10;
  width: 520px;
  height: 550px;
  top: -52px;
  right: 254px;

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 830px;
    top: -65px;
    right: 607px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    top: -64px;
    right: 1346px;
  }
`,fe=t.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 40px;
  padding-bottom: 18px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  /* min-width: 375px; */

  /* @media screen and (min-width: 375px) {
    max-width: 375px;
  } */
  @media screen and (max-width: 767px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 80px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
  }
`,we=t.footer`
  /* padding-top: 40px;
  padding-bottom: 18px; */
  border-top: 1px solid rgba(243, 243, 243, 0.2);
width:100%;
  background-color: #0A0A11;
  /* background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.6) 58.58%,
    rgba(0, 0, 0, 0.345172) 78.98%,
    rgba(0, 0, 0, 0) 100%
  ); */

  /* @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 24px;
  } */
`,je=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 230px;
  }
`,ve=t.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`,ke=t.div`
  display: flex;
  gap: 90px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 411px;
  }
`,Ce=t.div`
  position: absolute;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(105px);
  z-index: 0;
  width: 784px;
  height: 849px;
  top: 457px;
  left: 205px;

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 830px;
    top: 429px;
    left: 95px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    top: 343px;
    left: 435px;
  }
`,ye=t.div`
  position: absolute;
  background-color: rgba(188, 230, 210, 0.4);
  filter: blur(105px);
  z-index: 0;
  width: 774px;
  height: 762px;
  top: 450px;
  left: -372px;

  @media screen and (min-width: 768px) {
    top: 380px;
    left: -63px;
  }

  @media screen and (min-width: 1440px) {
    top: 341px;
    left: 193px;
  }
`,oi=()=>e.jsx(we,{children:e.jsxs(fe,{children:[e.jsxs(je,{children:[e.jsxs(ke,{children:[e.jsxs(ve,{children:[e.jsx(V,{theme:"dark"}),e.jsx(se,{theme:"dark"})]}),e.jsx(oe,{})]}),e.jsx(he,{})]}),e.jsx(be,{}),e.jsx(Ce,{}),e.jsx(ye,{})]})}),$e=t.nav`
display: inline-flex;
flex-direction: column;
align-items: center;
gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-left: 224px;
    margin-right: 191px;
  }
`,p=t(w)`
${({theme:i})=>i==="dark"?` color: ${n.light}; background: ${n.primaryDark}; border: 1px solid rgba(243, 243, 243, 0.20);`:`color: ${n.primaryDark}; background: ${n.light}; border: 1px solid rgba(22, 31, 55, 0.20);`}
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; 
  padding: 8px 16px;
  border-radius: 40px;
  transition: background 0.2s;
  overflow: hidden;

  &.active {
    color: ${n.light};
    background: ${n.secondaryDark};
    border: ${n.primaryDark};
  }

  @media screen and (min-width: 768px) {
    line-height: 22.4px; 
  }
`,Se=()=>{const i=c(m);return e.jsxs($e,{children:[e.jsx(p,{to:"/home",theme:i,children:"Home"}),e.jsx(p,{to:"/drinks",theme:i,children:"Drinks"}),e.jsx(p,{to:"/add",theme:i,children:"Add drink"}),e.jsx(p,{to:"/my",theme:i,children:"My drinks"}),e.jsx(p,{to:"/favorites",theme:i,children:"Favorites"})]})},Le=t.div`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.10) inset;
  ${({theme:i})=>i==="dark"?`background: ${n.light}`:` background: ${n.secondaryDark};`} 
`,Fe=t.button`
  border-radius: 50%;
  position: absolute;
  width: 18px;
  height: 18px;
  translate: 0 -50%;
  top: 50%;
  cursor: pointer;
  transition: transform 300ms ease;
  border: none;
${({theme:i})=>i==="dark"?` right: 1px; background: ${n.secondaryDark};`:`left: 1px; background: ${n.light};`} }
`,T=()=>{const i=c(m),o=L();return e.jsx(Le,{theme:i,children:e.jsx(Fe,{onClick:()=>o(q()),theme:i})})},ze=t.div`
  position: relative;
  z-index: 100;
`,De=t.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 32px;
  height: 32px;
  justify-content: space-evenly;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
`,b=t.div`
  width: 26px;
  height: 2px;
  border-radius: 10px;
  ${({theme:i})=>i==="dark"?` background: ${n.light};`:`background: ${n.secondaryDark};`}
  margin: 0;
  transition: 0.4s;

  @media screen and (min-width: 768px) {
    width: 30px;
  }
`,Be=t.ul`
  display: none;

  ${({open:i})=>i&&`
    display: block;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 73px;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${n.primaryDark};
    z-index: 100;
  `}
  ${({theme:i})=>i==="dark"?` background: ${n.primaryDark};`:`background: ${n.light};`}
`,Ee=t.div`
  width: 257px;
  height: 247px;
  border-radius: 257px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);
  position: absolute;
  top: 0;
  left: 10%;
`,Me=t.svg`${({theme:i})=>i==="dark"?` stroke: ${n.light};`:`stroke: ${n.primaryDark};`}`,g="/DrinkMaster/assets/sprite-062e31f9.svg",Te=({isOpen:i,toggleMenu:o})=>{const r=c(m);return e.jsxs(ze,{children:[i===!1?e.jsxs(De,{onClick:o,children:[e.jsx(b,{theme:r}),e.jsx(b,{theme:r}),e.jsx(b,{theme:r}),e.jsx(b,{theme:r})]}):e.jsx(Me,{width:"24px",height:"24px",theme:r,onClick:o,children:e.jsx("use",{href:`${g}#icon-close`})}),e.jsxs(Be,{open:i,theme:r,children:[e.jsx(Ee,{}),e.jsx(p,{to:"/home",onClick:o,children:"Home"}),e.jsx(p,{to:"/drinks",onClick:o,children:"Drinks"}),e.jsx(p,{to:"/add",onClick:o,children:"Add drink"}),e.jsx(p,{to:"/my",onClick:o,children:"My drinks"}),e.jsx(p,{to:"/favorites",onClick:o,children:"Favorites"})]})]})},Ie=t.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
    ${({theme:i})=>i==="dark"?"border-bottom: 1px solid rgba(243, 243, 243, 0.2); ":"border-bottom: 1px solid rgba(22, 31, 55, 0.10);"}
  
  @media screen and (min-width: 768px) {
    padding: 23px 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 28px;
    padding-bottom: 28px;
    align-items: center;
  }
`,He=t.div`
display:flex;
align-items: center;
justify-content: center;
gap: 7px
  @media screen and (min-width: 768px) {
    gap: 10px;
  }
   @media screen and (min-width: 768px) {
    gap: 14px;
  }
`,We=t.div`
width: 32px;
height: 32px;
border-radius: 50%;
overflow: hidden;
  @media screen and (min-width: 768px) {
  width: 44px;
height:44px;
  } 
`;t.svg`
  @media screen and (min-width: 768px) {
  }
`;const Re=t.p`
font-size: 14px;
font-weight: 500;
// margin-left: 8px; 
max-width: 104px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({theme:i})=>i==="dark"?` color: ${n.light};`:`color: ${n.secondaryDark};`}
@media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 24px;
  // margin-left: 14px; 
  }
`,f="/DrinkMaster/assets/user-833bcaa2.jpg",Ve=()=>{const i=c(m),o=c(R);return e.jsxs(He,{children:[e.jsx(We,{children:e.jsx("img",{width:"44",height:"44",src:o.avatar||f,alt:"User avatar",onError:r=>{r.currentTarget.src=f}})}),e.jsx(Re,{theme:i,children:o.name})]})},Ne=t.div`
   display: ${({open:i})=>i?"block":"none"};
  z-index: 50;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 100px;
  right: 0;
  background: ${n.disabled};
  overflow: hidden !important;
`,Ae=t.div`
  display: none;
  z-index: 100;
  ${({open:i})=>i&&`
display: block;
border-radius: 8px;
background: #161F37;
padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: start;
     position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `}
`,Oe=t.div`
  color: ${n.light};
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  font-family: Manrope;
  margin-bottom: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`,j=`
border: none;
border-radius: 42px; 
padding: 12px 45px;
font-weight: 600;
font-size: 14px;
font-family: Manrope;
`,I=t.button`
  ${j}
  background-color: ${n.light};
  color: ${n.secondaryDark};
`,Ue=t.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`,Pe=t.button`
  ${j}
  background-color: ${n.disabled};
  color: ${n.light};
`,Ze=t.span`
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  color: ${n.light};
  line-height: 1.3;
  letter-spacing: -0.28px;
  margin: 0 auto 35px;
`,H=t.button`
  margin-bottom: 12px;
  position: relative;
  right: calc(-100% + 20px);
  background: none;
  border: none;
  top: -6px;
`,Ge=t.button`
  ${j}
  background-color: ${n.light};
  color: ${n.secondaryDark};
  width: 100%;
`,_e=t.input`
  ${j}
  background-color: transparent;
  color: ${n.light};
  border: 1px solid rgba(243, 243, 243, 0.5);
  max-width: 100%;
  margin-bottom: 18px;
`,qe=t.div`
  width: 100px;
  height: 100px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  overflow: hidden;
`,Je=t.label`
  width: 32px;
  height: 32px;
  margin: 0;
  border-radius: 50%;
  position: relative;
  left: 50%;
  display:block;
  transform: translate(-50%, -50%);
  cursor: pointer;
`,Ke=t.div`
  // position: relative;
  // left: 50%;
  // transform: translate(-50%, 0);
  margin-bottom: 50px;
`,Qe=t.form`
  position: relative;
  display: flex;
  flex-direction: column;
`,Xe=t.input`
  display: none;
`,W=()=>{const[i,o]=x.useState(!1),[r,s]=x.useState(!1),[d,l]=x.useState(!1),h=L(),F=c(R),[N,A]=x.useState(F.name),[O,U]=x.useState(F.avatar),z=()=>{o(!i),B(!i)},P=()=>{l(!d)},D=()=>{s(!r)},v=()=>{s(!1),l(!1),o(!1),B(!i)},Z=a=>{a.preventDefault();const k=a.target.elements.name.value,C=a.target.elements.avatar.files[0];h(K({name:k,avatar:C})),v()},G=a=>{const k=a.target.files[0],C=URL.createObjectURL(k);U(C)},B=a=>{a?document.body.style.overflow="hidden":document.body.style.overflow="auto"};return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:z,children:e.jsx(Ve,{})}),e.jsx(Ne,{open:i,onClick:z}),e.jsx(Ae,{open:i,children:r?e.jsxs(e.Fragment,{children:[e.jsx(H,{onClick:v,children:e.jsx("svg",{width:"18px",height:"18px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${g}#icon-close`})})}),e.jsx(Ze,{children:"Are you sure you want to log out?"}),e.jsxs(Ue,{children:[e.jsx(I,{type:"button",onClick:()=>h(J()),children:"Log out"}),e.jsx(Pe,{type:"button",onClick:D,children:"Cancel"})]})]}):d?e.jsxs(e.Fragment,{children:[e.jsx(H,{onClick:v,children:e.jsx("svg",{width:"18px",height:"18px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${g}#icon-close`})})}),e.jsxs(Qe,{onSubmit:Z,children:[e.jsxs(Ke,{children:[e.jsx(qe,{children:e.jsx("img",{width:"100",height:"100",src:O||f,alt:"User avatar",onError:a=>{a.currentTarget.src=f}})}),e.jsxs(Je,{htmlFor:"avatar",children:[e.jsx("svg",{width:"34px",height:"34px",children:e.jsx("use",{href:`${g}#icon-add`})}),e.jsx(Xe,{type:"file",name:"avatar",id:"avatar",accept:".jpg, .jpeg, .png",onChange:G})]})]}),e.jsx(_e,{type:"text",name:"name",value:N,onChange:a=>A(a.target.value)}),e.jsx(Ge,{type:"submit",children:"Save changes"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Oe,{onClick:P,children:[e.jsx("span",{children:"Edit profile"}),e.jsx("svg",{width:"14px",height:"14px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${g}#icon-edit`})})]}),e.jsx(I,{type:"button",onClick:D,children:"Log out"})]})})]})},ri=()=>{const i=c(m),[o,r]=x.useState(window.innerWidth),s=()=>{r(window.innerWidth)};x.useEffect(()=>(window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}),[]);const[d,l]=x.useState(!1),h=()=>{l(!d)};return e.jsxs(Ie,{theme:i,children:[e.jsx(V,{theme:i}),o>=1440&&e.jsxs(e.Fragment,{children:[e.jsx(Se,{}),e.jsx(T,{}),e.jsx(W,{})]}),o<1440&&e.jsxs(e.Fragment,{children:[d?e.jsx(T,{}):e.jsx(W,{}),e.jsx(Te,{isOpen:d,toggleMenu:h})]})]})};export{ii as C,oi as F,ri as H,ti as S,se as a,ni as b};
