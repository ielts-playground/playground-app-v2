(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156],{8370:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reading",function(){return n(3389)}])},3389:function(e,t,n){"use strict";n.r(t);var i=n(5893),s=n(7294),u=n(9473),r=n(945),a=n(3315),o=n(5016),f=n(5702),c=n(5272),d=n(3778),l=n(1002),_=n(6439);t.default=()=>{let e=(0,u.I0)(),{handleSubmit:t}=(0,a.Z)("reading"),n=(0,s.useRef)([]),E=(0,s.useRef)(0),[g,w]=(0,s.useState)(!1),[m,p]=(0,s.useState)([]),[N,v]=(0,s.useState)(void 0),[b,x]=(0,s.useState)();(0,s.useEffect)(()=>{n.current=m},[m]);let S=()=>{t(n.current,E.current,"reading","writing")},h=()=>(0,i.jsx)(l.Z,{typePart:"reading",examTime:c.a.LISTENING,onSubmitExam:S});return(0,s.useEffect)(()=>(e((0,r._G)(h())),()=>{e((0,r._G)(void 0))}),[e]),(0,s.useEffect)(()=>{let e=async()=>{w(!0);let e=sessionStorage.getItem("EXAM_ID"),t=await (0,o.K)("reading",Number(e));if(t){let e=(0,f.A4)(t);p(e.dataContent),v(e.listTypeQuestion),x(e.contentLeft),E.current=t.submitId}w(!1)};e()},[]),(0,s.useEffect)(()=>{let e=e=>(e.preventDefault(),e.returnValue="","");return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{loading:g}),(0,i.jsx)("div",{className:"page-container",children:(0,i.jsx)(_.Z,{isReading:!0,listTypeQuestion:N,contentLeft:b,listQuestion:m,setListQuestion:p})})]})}}},function(e){e.O(0,[121,787,790,774,888,179],function(){return e(e.s=8370)}),_N_E=e.O()}]);