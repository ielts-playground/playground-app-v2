(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4722:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(2176)}])},7155:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5121);let s=n.Z.create({baseURL:"https://server.ieltsmastersource.com",headers:{"Content-Type":"application/json"},timeout:3e4});s.interceptors.request.use(e=>{if(!e.headers.Authorization){let r=localStorage.getItem("TOKEN");r&&(e.headers.Authorization="Bearer ".concat(r))}return e},e=>Promise.reject(e));var a=s},5211:function(e,r,t){"use strict";var n=t(5893);t(9096),r.Z=e=>{let{type:r="submit",text:t,icon:s,style:a,onClick:l}=e;return(0,n.jsxs)("button",{className:"button form__submit",type:r,style:a,onClick:()=>null==l?void 0:l(),children:[(0,n.jsx)("span",{className:"button__text",children:t}),s]})}},3778:function(e,r,t){"use strict";var n=t(5893);t(1051),r.Z=e=>{let{loading:r}=e;return(0,n.jsx)("div",{id:"loading",className:r?"":"hide",children:(0,n.jsxs)("div",{id:"loadingInnerWrapper",children:[(0,n.jsx)("span",{id:"load1",children:"."}),(0,n.jsx)("span",{id:"load2",children:"."}),(0,n.jsx)("span",{id:"load3",children:"."})]})})}},9069:function(e,r,t){"use strict";var n=t(5893),s=t(2175);r.Z=e=>{let{label:r,...t}=e,[a,l]=(0,s.U$)(t);return(0,n.jsxs)("div",{style:{width:"100%"},children:[(0,n.jsx)("label",{htmlFor:a.name,className:"mb-2",children:r}),(0,n.jsx)("input",{className:"form__input ".concat(l.touched&&l.error&&"is-invalid"),...a,...t,autoComplete:"off"}),(0,n.jsx)(s.Bc,{component:"div",name:a.name,className:"error"})]})}},6586:function(e,r,t){"use strict";var n=t(7294),s=t(2920);r.Z=()=>{let e=(0,n.useCallback)((e,r)=>{(0,s.Am)(r,{hideProgressBar:!0,autoClose:2e3,type:e})},[]);return{notify:e}}},2176:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return I}});var n=t(5893),s=t(7294),a=t(9332),l=t(9473),i=t(6586),o=t(2808),c=t(7999),u=t(6942),p=t(3778),d=t(2175),f=t(1664),h=t.n(f),m=t(6310),v=t(5697),g=t.n(v),y=["color","size","title"];function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var w=(0,s.forwardRef)(function(e,r){var t=e.color,n=e.size,a=e.title,l=function(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,y);return s.createElement("svg",b({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:t},l),a?s.createElement("title",null,a):null,s.createElement("path",{d:"M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"}),s.createElement("path",{d:"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"}))});w.propTypes={color:g().string,size:g().oneOfType([g().string,g().number]),title:g().string},w.defaultProps={color:"currentColor",size:"1em",title:null};var j=["color","size","title"];function x(){return(x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var _=(0,s.forwardRef)(function(e,r){var t=e.color,n=e.size,a=e.title,l=function(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,j);return s.createElement("svg",x({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:t},l),a?s.createElement("title",null,a):null,s.createElement("path",{d:"M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"}),s.createElement("path",{d:"M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"}))});_.propTypes={color:g().string,size:g().oneOfType([g().string,g().number]),title:g().string},_.defaultProps={color:"currentColor",size:"1em",title:null};var O=["color","size","title"];function Z(){return(Z=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var N=(0,s.forwardRef)(function(e,r){var t=e.color,n=e.size,a=e.title,l=function(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,O);return s.createElement("svg",Z({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:t},l),a?s.createElement("title",null,a):null,s.createElement("path",{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}))});N.propTypes={color:g().string,size:g().oneOfType([g().string,g().number]),title:g().string},N.defaultProps={color:"currentColor",size:"1em",title:null};var E=t(1534),P=["color","size","title"];function z(){return(z=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var C=(0,s.forwardRef)(function(e,r){var t=e.color,n=e.size,a=e.title,l=function(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,P);return s.createElement("svg",z({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:t},l),a?s.createElement("title",null,a):null,s.createElement("path",{d:"M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"}))});C.propTypes={color:g().string,size:g().oneOfType([g().string,g().number]),title:g().string},C.defaultProps={color:"currentColor",size:"1em",title:null};var k=t(1374),S=["color","size","title"];function L(){return(L=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var T=(0,s.forwardRef)(function(e,r){var t=e.color,n=e.size,a=e.title,l=function(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,S);return s.createElement("svg",L({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:t},l),a?s.createElement("title",null,a):null,s.createElement("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"}))});T.propTypes={color:g().string,size:g().oneOfType([g().string,g().number]),title:g().string},T.defaultProps={color:"currentColor",size:"1em",title:null};var q=t(5954),M=t(9069),R=t(5211);t(1237);var B=e=>{let{onRegister:r}=e,t=m.Ry({fullName:m.Z_().min(3,"Must be 15 characters or less").max(50,"Must be 50 characters or less").required("Required"),email:m.Z_().matches(q.E,"Email is invalid").required("Email is required"),phoneNumber:m.Z_().matches(q.J8,"Phone number is invalid").required("Phone is required"),password:m.Z_().min(8,"Password must be at least 8 charaters").required("Password is required"),passwordConfirm:m.Z_().oneOf([m.iH("password"),""],"Password must match").required("Confirm password is required")});return(0,n.jsx)(d.J9,{initialValues:{fullName:"",email:"",phoneNumber:"",password:"",passwordConfirm:""},validationSchema:t,onSubmit:e=>r(e),children:()=>(0,n.jsx)("div",{className:"register-container",style:{width:"100vw"},children:(0,n.jsxs)("div",{className:"form-container",children:[(0,n.jsx)("div",{className:"form__content register-form",children:(0,n.jsxs)("div",{className:"register",children:[(0,n.jsx)("h1",{className:"my-4 font-weight-bold sign-up-button",children:"Sign Up"}),(0,n.jsxs)(d.l0,{children:[(0,n.jsxs)("div",{className:"form__field",children:[(0,n.jsx)(w,{}),(0,n.jsx)(M.Z,{name:"fullName",type:"text",placeholder:"Full Name"})]}),(0,n.jsxs)("div",{className:"form__field",children:[(0,n.jsx)(_,{}),(0,n.jsx)(M.Z,{name:"email",type:"email",placeholder:"Email"})]}),(0,n.jsxs)("div",{className:"form__field",children:[(0,n.jsx)(N,{}),(0,n.jsx)(M.Z,{name:"phoneNumber",type:"text",placeholder:"Phone"})]}),(0,n.jsxs)("div",{className:"form__field",children:[(0,n.jsx)(E.Z,{}),(0,n.jsx)(M.Z,{name:"password",type:"password",placeholder:"Password"})]}),(0,n.jsxs)("div",{className:"form__field",children:[(0,n.jsx)(C,{}),(0,n.jsx)(M.Z,{name:"passwordConfirm",type:"password",placeholder:"Confirm Password"})]}),(0,n.jsxs)("div",{className:"d-flex gap-4 button-register",children:[(0,n.jsx)(R.Z,{icon:(0,n.jsx)(k.Z,{}),text:"Register Now",style:{width:"180px"}}),(0,n.jsx)(R.Z,{type:"reset",icon:(0,n.jsx)(T,{}),text:"Reset",style:{width:"160px"}})]})]}),(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)(h(),{href:"/login",children:"Do you have an account?"})})]})}),(0,n.jsxs)("div",{className:"screen__background",children:[(0,n.jsx)("span",{className:"screen__background__shape screen__background__shape4"}),(0,n.jsx)("span",{className:"screen__background__shape screen__background__shape3"}),(0,n.jsx)("span",{className:"screen__background__shape screen__background__shape2"}),(0,n.jsx)("span",{className:"screen__background__shape screen__background__shape1"})]})]})})})},I=()=>{let e=(0,a.useRouter)(),{notify:r}=(0,i.Z)(),t=(0,l.v9)(c._9),{typeRegister:d}=t,f=(0,l.I0)(),[h,m]=(0,s.useState)(!1),v=async t=>{m(!0);let n=await (0,u.qL)({...t,subscription:d});n.code===o.iH?(e.push("/verify"),r("success","Register successfully, please verify!"),f((0,c.Ke)(t.email))):r("error","Something error!"),m(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.Z,{loading:h}),(0,n.jsx)(B,{onRegister:v})]})}},6942:function(e,r,t){"use strict";t.d(r,{Z3:function(){return l},lx:function(){return a},qL:function(){return s}});var n=t(7155);let s=async e=>{try{let r=await n.Z.post("api/v2/users/register",{...e});return r.data}catch(e){return console.log(e),!1}},a=async e=>{try{let r=await n.Z.post("/api/v2/users/authenticate",{...e});return r.data}catch(e){return console.log(e),!1}},l=async e=>{try{let r=await n.Z.post("/api/v2/users/verify-email",{...e});return r.data}catch(e){return!1}}},9096:function(){},1051:function(){},1237:function(){}},function(e){e.O(0,[121,718,664,774,888,179],function(){return e(e.s=4722)}),_N_E=e.O()}]);