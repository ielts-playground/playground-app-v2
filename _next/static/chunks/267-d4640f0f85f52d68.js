(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{7155:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5121);let i=s.Z.create({baseURL:"https://test.tuanm.dev",headers:{"Content-Type":"application/json"},timeout:3e4});i.interceptors.request.use(e=>{if(!e.headers.Authorization){let t=localStorage.getItem("TOKEN");t&&(e.headers.Authorization="Bearer ".concat(t))}return e},e=>Promise.reject(e));var a=i},3778:function(e,t,n){"use strict";var s=n(5893);n(1051),t.Z=e=>{let{loading:t}=e;return(0,s.jsx)("div",{id:"loading",className:t?"":"hide",children:(0,s.jsxs)("div",{id:"loadingInnerWrapper",children:[(0,s.jsx)("span",{id:"load1",children:"."}),(0,s.jsx)("span",{id:"load2",children:"."}),(0,s.jsx)("span",{id:"load3",children:"."})]})})}},6487:function(e,t,n){"use strict";n.d(t,{ll:function(){return s},sL:function(){return i}});let s=[1,2].map(e=>({id:e,subId:e,part:e,numberOrder:e,type:"",questionTitle:null,text:null,lastText:null,isDownLine:null,options:null,value:"",isAnswer:!1,isReview:!1})),i={id:1,subId:1,part:1,type:"",numberOrder:1,questionTitle:null,text:null,lastText:null,isDownLine:null,options:null,value:"",isAnswer:!1,isReview:!1}},2314:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var s=n(5893),i=n(7294);n(7855);var a=e=>{let{isListening:t,isReading:n,isWriting:i,partActive:a,numericalOrderInPart:l}=e;return(0,s.jsxs)("div",{className:"part-description-container",children:[(0,s.jsx)("h1",{className:"part-content",children:i?(0,s.jsxs)(s.Fragment,{children:["Academic Writing Part ",a]}):(0,s.jsxs)(s.Fragment,{children:["Part ",a,n&&": Reading passage ".concat(a)]})}),(0,s.jsx)("p",{className:"part-description",children:i?"\n          You should spend about ".concat(1===a?20:40," minutes on this task. Write at least ").concat(1===a?150:250,"\n          words."):t?"Listen and answer question ".concat(l.first," to ").concat(l.last):"You should spend about 20 minutes on Questions\n          ".concat(l.first,"-").concat(l.last,", which are\n          based on Reading Passage ").concat(a," below.")})]})},l=n(5702),r=n(2808);n(3255);var c=e=>{let{title:t,value:n,checked:i,onChangeValue:a}=e;return(0,s.jsxs)("label",{className:"checkbox-container",style:{lineHeight:"18px"},children:[t,(0,s.jsx)("input",{type:"checkbox",value:n,checked:i,onChange:a}),(0,s.jsx)("span",{className:"checkmark"})]})},o=e=>{let{listQuestion:t,questionActive:n,numberOrder:i,setQuestionActive:a,onChangeValue:o}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:"\n"}}),(0,s.jsx)("div",{className:"select-question-container",children:t.filter(e=>e.type===r.Nb.LISTENING_CHOOSE_ANSWER&&e.numberOrder===i).map(e=>{var t;return(0,s.jsxs)("div",{className:"one-question-container",children:[(0,s.jsxs)("div",{id:"question".concat(e.id),className:"question ".concat(n===e.id?"question__active":""),onClick:()=>a(e.id),children:[(0,s.jsx)("span",{className:"question-number",children:e.id}),(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,l.c8)(e.questionTitle||"")}})]}),(0,s.jsx)("div",{className:"answer-container",children:null===(t=e.options)||void 0===t?void 0:t.map((t,n)=>(0,s.jsx)(c,{title:t.title,value:e.value,checked:e.value===t.value,onChangeValue:()=>o(e.id,t.value)},n))})]},e.id)})})]})},u=n(6487),d=e=>{var t;let{listQuestion:n,questionActive:a,numberOrder:o,setQuestionActive:d,onChangeTwoValue:v}=e,[m,h]=(0,i.useState)(u.sL);return(0,i.useEffect)(()=>{let e=n.find(e=>e.type===r.Nb.CHOOSE_TWO_ANSWER_LISTENING&&e.numberOrder===o);h(e||u.sL)},[n,o]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"select-question-container",children:(0,s.jsxs)("div",{className:"one-question-container",children:[(0,s.jsxs)("div",{id:"question".concat(m.id),className:"question ".concat(a===m.id?"question__active":""),onClick:()=>d(m.id),children:[(0,s.jsx)("span",{className:"question_number",children:m.id+" + "+"".concat(m.id+1)}),(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,l.c8)(m.questionTitle||"")}})]}),(0,s.jsx)("div",{className:"answer-container",children:null===(t=m.options)||void 0===t?void 0:t.map((e,t)=>{var n;return(0,s.jsx)(c,{title:e.title,value:e.value,checked:null===(n=m.value)||void 0===n?void 0:n.includes(e.value),onChangeValue:()=>v(m.subId,e.value)},t)})})]})})})},v=()=>{let e=(0,i.useRef)({});return{getInputRef:t=>{let n="".concat(t);return e.current[n]||(e.current[n]=(0,i.createRef)()),e.current[n]},getAllInputRefs:()=>e.current}};n(6924);var m=e=>{let{listQuestion:t,numberOrder:n,questionActive:a,onChangeValue:r,onClickQuestionInput:c}=e,{getInputRef:o,getAllInputRefs:u}=v();(0,i.useEffect)(()=>{var e;let t=u(),n=null==t?void 0:t["".concat(a)];null==n||null===(e=n.current)||void 0===e||e.focus()},[a]);let d=(0,i.useMemo)(()=>t.filter(e=>e.numberOrder===n),[t,n]);return(0,s.jsx)(s.Fragment,{children:d.map((e,t)=>{let n=o(e.id);return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,l.c8)(e.text||"")}}),(0,s.jsx)("input",{ref:n,style:{margin:"4px 8px"},autoComplete:"off",autoCapitalize:"off",spellCheck:"false",id:"question".concat(e.id),className:"input-answer",type:"text",placeholder:String(e.id),value:e.value,onClick:()=>c(e.id),onChange:t=>r(t,e.id)}),e.isDownLine?(0,s.jsx)("br",{}):(0,s.jsx)(s.Fragment,{}),t===d.length-1&&(0,s.jsx)("span",{children:d[0].lastText})]},e.id)})})};n(6063);let h={animation:"inAnimation 350ms ease-in"},x={animation:"outAnimation 350ms ease-out",animationFillMode:"forwards"};var p=e=>{let{listQuestion:t,questionActive:n,numberOrder:i,setQuestionActive:a,onChangeValue:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,l.c8)("\n")}}),t.filter(e=>e.numberOrder===i).map(e=>{var t;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{id:"question".concat(e.id),className:"question ".concat(n===e.id?"question__active":""),onClick:()=>a(e.id),children:[(0,s.jsx)("span",{className:"question-number",children:e.id}),(0,s.jsx)("span",{children:e.questionTitle})]}),n===e.id&&(0,s.jsx)("div",{className:"answer-container",style:n===e.id?h:x,children:null==e?void 0:null===(t=e.options)||void 0===t?void 0:t.map((t,n)=>(0,s.jsx)(c,{title:t.title,value:e.value,checked:e.value===t.value,onChangeValue:()=>r(e.id,t.value)},n))})]},e.id)})]})};let j={animation:"inAnimation 350ms ease-in"},f={animation:"outAnimation 350ms ease-out",animationFillMode:"forwards"};var g=e=>{var t;let{listQuestion:n,questionActive:a,numberOrder:r,setQuestionActive:o,onChangeTwoValue:d}=e,[v,m]=(0,i.useState)(u.sL);return(0,i.useEffect)(()=>{let e=n.find(e=>e.numberOrder===r);m(e||u.sL)},[n,r]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{id:"question".concat(v.id),className:"question ".concat(a===v.id?"question__active":""),onClick:()=>o(v.subId),children:[(0,s.jsx)("span",{className:"question-number",children:v.id+" + "+"".concat(v.id+1)}),(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,l.c8)(v.questionTitle||"")}})]}),a===v.id&&(0,s.jsx)("div",{className:"answer-container",style:a===v.subId?j:f,children:null==v?void 0:null===(t=v.options)||void 0===t?void 0:t.map((e,t)=>{var n;return(0,s.jsx)(c,{title:e.title,value:e.value,checked:null===(n=v.value)||void 0===n?void 0:n.includes(e.value),onChangeValue:()=>d(v.subId,e.value)},t)})})]})},N=e=>{var t,n,a;let{isListening:c,isReading:u,listQuestionTypeInPart:v,leftContent:h,listQuestionInPart:x,questionActive:j,setQuestionActive:f,onChangeCheckBoxValue:N,onChangeInputValue:b,onChangeTwoValue:w,onChangeAnswerWriting:_,onClickQuestionInput:A}=e,C=(e,t)=>{switch(e){case r.Nb.LISTENING_CHOOSE_ANSWER:return(0,s.jsx)(o,{numberOrder:t,listQuestion:x,questionActive:j,setQuestionActive:f,onChangeValue:N});case r.Nb.CHOOSE_TWO_ANSWER_LISTENING:return(0,s.jsx)(d,{numberOrder:t,listQuestion:x,questionActive:j,setQuestionActive:f,onChangeTwoValue:w});case r.Nb.ANSWER_PARAGRAPH_LISTENING:return(0,s.jsx)(m,{numberOrder:t,listQuestion:x,questionActive:j,onChangeValue:b,onClickQuestionInput:A});case r.Nb.ANSWER_PARAGRAPH:return(0,s.jsx)(m,{numberOrder:t,questionActive:j,listQuestion:x,onChangeValue:b,onClickQuestionInput:A});case r.Nb.CHOOSE_ANSWER:return(0,s.jsx)(p,{numberOrder:t,listQuestion:x,questionActive:j,setQuestionActive:f,onChangeValue:N});case r.Nb.CHOOSE_TWO_ANSWER:return(0,s.jsx)(g,{numberOrder:t,listQuestion:x,questionActive:j,setQuestionActive:f,onChangeTwoValue:w});default:return(0,s.jsx)(s.Fragment,{})}};return(0,s.jsx)("div",{className:"exam-content-container ".concat(c?"listening-container":"content-container"),style:c?{overflow:"auto"}:{},children:c?(0,s.jsx)("div",{className:"listening-content",children:(null==v?void 0:v.length)?null==v?void 0:v.map((e,t)=>(0,s.jsx)(i.Fragment,{children:C(e,t+1)},t)):(0,s.jsx)(s.Fragment,{})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"topic-container left-topic",children:(0,s.jsx)("div",{className:"topic-content",children:null==h?void 0:h.map((e,t)=>(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,l.c8)(e)},onContextMenu:e=>{e.preventDefault()}},t))})}),(0,s.jsx)("div",{className:"topic-container right-topic",children:u?(0,s.jsx)("div",{className:"topic-content",children:(null==v?void 0:v.length)?v.map((e,t)=>(0,s.jsxs)(i.Fragment,{children:[C(e,t+1),t>0&&(0,s.jsx)("hr",{})]},t)):(0,s.jsx)(s.Fragment,{})}):(0,s.jsxs)("div",{className:"topic-writing-content",children:[(0,s.jsx)("textarea",{autoCapitalize:"off",spellCheck:"false",autoComplete:"off",value:null===(t=x[0])||void 0===t?void 0:t.value,onChange:_}),(0,s.jsxs)("span",{children:["Word count:"," ",(null===(n=x[0])||void 0===n?void 0:n.value)&&(0,l.Ht)(null===(a=x[0])||void 0===a?void 0:a.value)]})]})})]})})};n(4209);var b=e=>{var t;let{listQuestion:n,questionActive:a,isReview:l,onSetQuestionActive:r,onChangeReviewQuestion:c,onSelectPrevOrNextQuestion:o}=e,[u,d]=(0,i.useState)([]);return(0,i.useEffect)(()=>{var e;let t=null===(e=n[(null==n?void 0:n.length)-1])||void 0===e?void 0:e.part,s=Array.from({length:t},(e,t)=>t+1);d(s)},[n]),(0,s.jsxs)("div",{className:"navigator-question-container",children:[(0,s.jsx)("div",{className:"review-container",children:(0,s.jsxs)("label",{className:"container review-title",children:[(0,s.jsx)("input",{type:"checkbox",checked:l||void 0,onChange:c}),(0,s.jsx)("span",{className:"checkmark"}),"Review"]})}),(0,s.jsx)("div",{className:"list-part-container",children:u.map(e=>(0,s.jsx)(i.Fragment,{children:n.filter(t=>t.part===e).length?(0,s.jsxs)("div",{className:"part-item",children:[(0,s.jsxs)("h3",{className:"part-name ".concat(e>1?"part-name-right":""),children:["Part ",e,":"]}),n.filter(t=>t.part===e).map(e=>(0,s.jsx)("button",{className:"question-item ".concat(a===e.subId?"question__active":"","  ").concat(e.isAnswer?"question__answered":""," ").concat(e.isReview?"question__review  ":""),onClick:()=>r(e.subId,e.part),children:(0,s.jsx)("span",{children:e.id})},e.id))]},e):(0,s.jsx)(s.Fragment,{})},e))}),(0,s.jsxs)("div",{className:"list-feature-button",children:[(0,s.jsx)("button",{className:"button-feature button-previous ".concat(1===a?"button-prev__disable":""),onClick:()=>o(a-1)}),(0,s.jsx)("button",{className:"button-feature button-next ".concat(a===(null===(t=n[n.length-1])||void 0===t?void 0:t.id)?"button-next__disable":""),onClick:()=>o(a+1)})]})]})},w=e=>{let{isListening:t,isReading:n,isWriting:l,listTypeQuestion:r,contentLeft:c,listQuestion:o,setListQuestion:u}=e,[d,v]=(0,i.useState)(1),[m,h]=(0,i.useState)(1),[x,p]=(0,i.useState)({first:0,last:0}),[j,f]=(0,i.useState)([]),[g,w]=(0,i.useState)([]),[_,A]=(0,i.useState)([]),[C,S]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var e,t;let n;let s={first:0,last:0};(n=o.find(e=>e.subId===d))||(n=o.find(e=>e.subId===d+1));let i=o.filter(e=>e.part===m||e.part===(null==n?void 0:n.part));s={first:null===(e=i[0])||void 0===e?void 0:e.id,last:null===(t=i[i.length-1])||void 0===t?void 0:t.id},f(i),p(s),h(null==n?void 0:n.part)},[o,m,d]),(0,i.useEffect)(()=>{r&&w(r["part".concat(m)]),c&&A(c[m-1])},[c,r,m]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{isListening:!0,partActive:m,numericalOrderInPart:x}),(0,s.jsx)(N,{isListening:t,isReading:n,listQuestionTypeInPart:g,leftContent:_,listQuestionInPart:j,questionActive:d,setQuestionActive:v,onChangeCheckBoxValue:(e,t)=>{v(e),u(n=>{let s=[...n],i=s[e-1];return t&&(i.value===t?(i.value="",i.isAnswer=!1):(i.value=t,i.isAnswer=!0)),s})},onChangeInputValue:(e,t)=>{u(n=>{let s=[...n],i=s[t-1];return e.target.value?i.isAnswer=!0:i.isAnswer=!1,i.value=e.target.value,s})},onClickQuestionInput:e=>{v(e)},onChangeTwoValue:(e,t)=>{v(e),u(n=>{let s=[...n],i=s[e-1],a=s[e];if((null==i?void 0:i.value)||(i.value=[]),t){var l;if(null===(l=i.value)||void 0===l?void 0:l.includes(t)){let e=i.value.indexOf(t);1===e?i.value.pop():i.value.shift(),i.value.length||(i.value="",i.isAnswer=!1,a.isAnswer=!1)}else i.isAnswer=!0,a.isAnswer=!0,2===i.value.length&&i.value.shift(),i.value.push(t)}return a.value=i.value,s})},onChangeAnswerWriting:e=>{u(t=>{let n=[...t];return n[m-1].value=e.target.value,e.target.value?n[m-1].isAnswer=!0:n[m-1].isAnswer=!1,n})}}),(0,s.jsx)(b,{listQuestion:o,questionActive:d,isReview:C,onSetQuestionActive:(e,t)=>{let n=o[e-1];S(n.isReview),v(e),h(t)},onChangeReviewQuestion:e=>{let t=e.target.checked;S(t),u(e=>{let n=[...e],s=n[d-1],i=n.filter(e=>e.subId===d);if(2===i.length){let e=n[d];e.isReview=t}return s.isReview=t,n})},onSelectPrevOrNextQuestion:e=>{var t;if(!e||e>(null===(t=o[o.length-1])||void 0===t?void 0:t.id))return;let n=o[e-1];S(n.isReview),v(e)}})]})}},5702:function(e,t,n){"use strict";n.d(t,{A4:function(){return c},Ht:function(){return r},c8:function(){return l}});var s=n(3787),i=n(6487);let a=new s.Converter;function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.startsWith("\n"),n=e.endsWith("\n"),s=a.makeHtml(e.trim()).replaceAll(/<\/p>\s*<p>/g,"</span><br><span>").replace(/^\s*<p>/,"<span>").replace(/<\/p>\s*$/,"</span>");return t&&(s="<br>"+s),n&&(s+="<br>"),s}a.setOption("simpleLineBreaks",!1);let r=e=>{let t=e.split(" ");return t.filter(e=>""!==e).length},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],s=[],a=(null==e?void 0:e.displayQuestionDataResponse)||{},l=[];for(let e=1;e<=Object.keys(a).length;e++){let t=a["".concat(e)].rightContent.map(e=>({id:e.id||1,subId:e.subId||1,part:e.part||1,type:e.type||"",numberOrder:e.numberOrder,questionTitle:e.questionTitle||"",text:e.text,lastText:e.lastText||"",isDownLine:e.isDownLine||!1,options:e.options||null,value:"",isAnswer:!1,isReview:!1}));l.push(t);let n=null==a?void 0:a["".concat(e)].leftContent.map(e=>e.text||"");s.push(n||[])}n=l.flat(1),t&&(n=i.ll);let r=null==e?void 0:e.listTypeQuestion,c={dataContent:n,listTypeQuestion:r,contentLeft:s};return c}},1002:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var s=n(5893),i=n(1163),a=n(5675),l=n.n(a),r=n(9473),c=n(945),o=n(7294);let u=e=>{let t={minutes:"00",minutesAndSeconds:"00:00"};if(e&&!isNaN(e)){let n=Math.floor(e/60),s=Math.floor(e%60);t={minutes:n<9?"0".concat(n+1):"".concat(n+1),minutesAndSeconds:"".concat(n<10?"0".concat(n):"".concat(n),":").concat(s<10?"0".concat(s):"".concat(s))}}return t};var d={src:"/_next/static/media/time-exam-icon.57ea63ee.svg",height:32,width:32,blurWidth:0,blurHeight:0},v={src:"/_next/static/media/listen-exam-icon.f4e79f6d.svg",height:32,width:32,blurWidth:0,blurHeight:0},m=n(9138),h=n(2808);n(728);var x=e=>{let{typePart:t,isOpen:n,setIsOpen:a,onSubmitExam:l}=e,r=(0,i.useRouter)();return(0,s.jsx)(s.Fragment,{children:n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"overlay-background",onClick:()=>a(!1)}),(0,s.jsx)("div",{className:"modal__centered",children:(0,s.jsxs)("div",{className:"modal-container",children:[(0,s.jsx)("div",{className:"modal-header",children:(0,s.jsx)("h5",{className:"title-header",children:"Submit the answers"})}),(0,s.jsx)("div",{className:"modal-content",children:(0,s.jsxs)("p",{className:"mt-16",children:["Are you sure that you want to submit your answers now? ",(0,s.jsx)("br",{})," Click OK to confirm or Cancel to return to the test."]})}),(0,s.jsxs)("div",{className:"d-flex justify-content-center align-items-center ",style:{gap:"10px"},children:[(0,s.jsx)(m.Z,{text:"Cancel",onClick:()=>a(!1)}),(0,s.jsx)(m.Z,{text:"OK",onClick:()=>{a(!1),l(),r.push(h.Mf.LIST_EXAM)}})]})]})})]})})};n(4186);var p=e=>{let{typePart:t,isListening:n,examTime:a,onSubmitExam:h,setVolume:p}=e,j=(0,i.useRouter)(),f=(0,r.I0)(),[g,N]=(0,o.useState)(a),[b,w]=(0,o.useState)(!1),[_,A]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!g){if(f((0,c.vO)(t)),h(),"writing"===t){j.push("thanks");return}j.push("list-exam");return}let e=setInterval(()=>{N(g-1)},1e3);return()=>clearInterval(e)},[g]);let C=(0,o.useMemo)(()=>g<600?"time__warning":"",[g]);return(0,s.jsxs)("header",{className:"exam-header-container",children:[(0,s.jsx)("div",{className:"info-container",children:(0,s.jsx)("h4",{children:"Logo"})}),(0,s.jsxs)("div",{className:"info-container",children:[(0,s.jsx)("div",{className:"icon-size",children:(0,s.jsx)(l(),{src:d,alt:"My SVG"})}),b?(0,s.jsxs)("div",{className:"'time__down' ".concat(C),onMouseLeave:()=>{w(!1)},children:[(0,s.jsx)("span",{className:"time",children:u(g).minutesAndSeconds})," ",(0,s.jsx)("span",{className:"left-text",children:"left"})]}):(0,s.jsxs)("div",{className:"'time__down' ".concat(C),onFocus:()=>{},onMouseOver:()=>{w(!0)},children:[(0,s.jsx)("span",{className:"time",children:u(g).minutes})," ",(0,s.jsx)("span",{className:"left-text",children:"minutes left"})]})]}),(0,s.jsxs)("div",{className:n?"right-info":"",children:[n&&(0,s.jsxs)("div",{className:"listening-box",children:[(0,s.jsx)("div",{className:"size-icon",children:(0,s.jsx)(l(),{src:v,alt:"My SVG"})}),(0,s.jsx)("input",{type:"range",className:"slide-volume",onInput:e=>p&&p(e.target.value)})]}),(0,s.jsx)(m.Z,{text:"Submit",onClick:()=>{A(!0)}})]}),(0,s.jsx)(x,{isOpen:_,typePart:t,setIsOpen:A,onSubmitExam:h})]})}},5272:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});let s={LISTENING:1919,READING:3599,WRITING:3599}},5016:function(e,t,n){"use strict";n.d(t,{K:function(){return i},j:function(){return a}});var s=n(7155);let i=async(e,t)=>{try{let n=await s.Z.get("api/v1/random/".concat(e,"?id=").concat(t)),i=n.data;return i.data}catch(e){console.log(e);return}},a=async(e,t)=>{try{let n=await s.Z.put("api/v1/exam/".concat(e,"/submit"),{...t});return n}catch(e){return!1}}},3255:function(){},1051:function(){},6924:function(){},6063:function(){},4209:function(){},7855:function(){},4186:function(){},728:function(){}}]);