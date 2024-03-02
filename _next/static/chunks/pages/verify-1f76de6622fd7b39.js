(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{2841:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify",function(){return a(9554)}])},7155:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(5121);let r=s.Z.create({baseURL:"https://server.ieltsmastersource.com",headers:{"Content-Type":"application/json"},timeout:3e4});r.interceptors.request.use(e=>{if(!e.headers.Authorization){let t=localStorage.getItem("TOKEN");t&&(e.headers.Authorization="Bearer ".concat(t))}return e},e=>Promise.reject(e));var n=r},3778:function(e,t,a){"use strict";var s=a(5893);a(1051),t.Z=e=>{let{loading:t}=e;return(0,s.jsx)("div",{id:"loading",className:t?"":"hide",children:(0,s.jsxs)("div",{id:"loadingInnerWrapper",children:[(0,s.jsx)("span",{id:"load1",children:"."}),(0,s.jsx)("span",{id:"load2",children:"."}),(0,s.jsx)("span",{id:"load3",children:"."})]})})}},6586:function(e,t,a){"use strict";var s=a(7294),r=a(2920);t.Z=()=>{let e=(0,s.useCallback)((e,t)=>{(0,r.Am)(t,{hideProgressBar:!0,autoClose:2e3,type:e})},[]);return{notify:e}}},9554:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var s=a(5893),r=a(7294),n=a(9332),c=a(9473),i=a(6586),l=a(7999),o=a(2808),u=a(6942);a(8189);let d={backspace:8,arrowLeft:37,arrowRight:39};var f=e=>{let{emailVerify:t,isVerifyError:a,onSubmitVerify:n}=e,[c,i]=(0,r.useState)([]),[l,o]=(0,r.useState)("");(0,r.useEffect)(()=>{let e=[];Array.from(Array(6).keys()).forEach(t=>{e.push("")}),i(e)},[]),(0,r.useEffect)(()=>{a&&i(e=>e.map(e=>""))},[a]),(0,r.useEffect)(()=>{let[e,a]=t.split("@"),s="*****".concat(e.slice(-3));o("".concat(s,"@").concat(a))},[t]),(0,r.useEffect)(()=>{let e=c.every(e=>!!e);e&&c.length&&n(c.join(""))},[c]);let u=(e,t)=>{let a=e.target;i(e=>e.map((e,s)=>(s===t&&(e=a.value),e)));let s=a.nextElementSibling;s&&a.value&&(s.focus(),s.value&&s.select())},f=(e,t)=>{e.preventDefault();let a=e.clipboardData.getData("text");t||i(e=>e.map((e,t)=>a[t]))},h=(e,t)=>{let a=e.target;if(a.value){i(e=>e.map((e,a)=>(a===t&&(e=""),e)));return}t&&a.previousElementSibling.focus()},p=e=>{let t=e.target.previousElementSibling;t&&t.focus()},m=e=>{let t=e.target.nextElementSibling;t&&t.focus()},_=(e,t)=>{switch(e.keyCode){case d.backspace:h(e,t);break;case d.arrowLeft:p(e);break;case d.arrowRight:m(e)}};return(0,s.jsx)("div",{className:"container-vefiry",children:(0,s.jsxs)("div",{className:"form-container verify-form",children:[(0,s.jsx)("div",{className:"form__content d-flex align-items-center",children:(0,s.jsx)("form",{action:"#",children:(0,s.jsxs)("div",{className:"ver\xecy",children:[(0,s.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[(0,s.jsx)("h3",{children:"OTP VERIFICATION"}),(0,s.jsx)("p",{className:"info",children:"An OTP has been sent to"}),(0,s.jsx)("p",{children:l}),(0,s.jsx)("p",{className:"msg",children:"Please enter OTP to verify"})]}),(0,s.jsx)("div",{className:"d-flex mb-3",children:c.map((e,t)=>(0,s.jsx)("input",{type:"tel",maxLength:1,pattern:"[0-9]",className:"form-control shadow-none",value:e,onChange:e=>u(e,t),onPaste:e=>f(e,t),onKeyDown:e=>_(e,t)},t))})]})})}),(0,s.jsxs)("div",{className:"screen__background",children:[(0,s.jsx)("span",{className:"screen__background__shape screen__background__shape4"}),(0,s.jsx)("span",{className:"screen__background__shape screen__background__shape3"}),(0,s.jsx)("span",{className:"screen__background__shape screen__background__shape2"}),(0,s.jsx)("span",{className:"screen__background__shape screen__background__shape1"})]})]})})},h=a(3778),p=()=>{let e=(0,n.useRouter)(),{notify:t}=(0,i.Z)(),a=(0,c.I0)(),d=(0,c.v9)(l._9),{emailVerify:p}=d,[m,_]=(0,r.useState)(!1),[g,v]=(0,r.useState)(!1),x=async s=>{_(!0);let r=await (0,u.Z3)({code:s,email:p});r.code===o.iH?(v(!1),a((0,l.PR)(Date.now())),t("success","Verify successfully!"),localStorage.setItem("TOKEN",r.data.token),localStorage.setItem("USER",JSON.stringify(r.data.user)),e.push("/list-exam")):(v(!0),t("error","Wrong code!")),_(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.Z,{loading:m}),(0,s.jsx)(f,{emailVerify:p,isVerifyError:g,onSubmitVerify:x})]})}},6942:function(e,t,a){"use strict";a.d(t,{Z3:function(){return c},lx:function(){return n},qL:function(){return r}});var s=a(7155);let r=async e=>{try{let t=await s.Z.post("api/v2/users/register",{...e});return t.data}catch(e){return console.log(e),!1}},n=async e=>{try{let t=await s.Z.post("/api/v2/users/authenticate",{...e});return t.data}catch(e){return console.log(e),!1}},c=async e=>{try{let t=await s.Z.post("/api/v2/users/verify-email",{...e});return t.data}catch(e){return!1}}},1051:function(){},8189:function(){}},function(e){e.O(0,[121,774,888,179],function(){return e(e.s=2841)}),_N_E=e.O()}]);