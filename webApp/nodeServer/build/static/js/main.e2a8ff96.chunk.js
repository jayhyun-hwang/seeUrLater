(this.webpackJsonpsulClient=this.webpackJsonpsulClient||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},50:function(e,t){e.exports={URL:"http://3.36.36.62",PORT:3001}},51:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),l=c(19),a=c.n(l),i=(c(25),c(3)),r=(c(26),c(5)),u=c.n(r),j=c.p+"static/media/alligator.cf10925a.png",o=c(0);var d,b=function(){return Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"main-header",onClick:function(){window.location.href="/"},children:[Object(o.jsx)("h1",{children:"seeULater"}),Object(o.jsx)("img",{className:"main-logo-img",src:j,alt:"seeULater"})]})})},O=c(20),p=function(e){var t=e.setInputText,c=e.urls,s=e.setUrls,n=e.inputText,l=e.setStatus;return Object(o.jsxs)("form",{className:"inputForm",children:[Object(o.jsxs)("div",{className:"input-addbutton-wrapper",children:[Object(o.jsx)("input",{value:n,onChange:function(e){t(e.target.value)},type:"text",className:"url-input"}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),u.a.post("http://3.36.36.62:3001/urls",{userID:1,url:n}).then((function(){s([].concat(Object(O.a)(c),[{url:n,completed:!1,id:1e3*Math.random()}])),t(""),alert("store success.")}))},className:"url-button",type:"submit",children:Object(o.jsx)("i",{className:"fas fa-plus-square"})})]}),Object(o.jsx)("div",{className:"select",children:Object(o.jsxs)("select",{onChange:function(e){l(e.target.value)},name:"urls",className:"filter-url",children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"completed",children:"Read"}),Object(o.jsx)("option",{value:"uncompleted",children:"Unread"})]})})]})},m=c(10),f=(c(47),c.p+"static/media/loading.decd7be1.png"),h=function(e){var t=e.url,c=e.setUrls,s=e.urls;return Object(o.jsxs)("div",{className:"url",children:[Object(o.jsx)("div",{className:"url-upper",children:Object(o.jsx)("a",{className:"url_a ".concat(t.completed?"completed":""),href:t.url,target:"_blank",children:t.title?t.title:t.url})}),Object(o.jsxs)("div",{className:"url-preview-and-button",children:[Object(o.jsx)("div",{onClick:function(){window.open(t.url,"_blank")},children:Object(o.jsxs)("div",{className:"preview-wrapper",children:[Object(o.jsx)("div",{className:"img-div",children:Object(o.jsx)("img",{src:t.icon_img?t.icon_img:f,alt:t.title})}),Object(o.jsxs)("div",{className:"p-div",children:[Object(o.jsx)("p",{children:t.url}),Object(o.jsx)("p",{}),Object(o.jsx)("p",{className:"p-description"})]})]})}),Object(o.jsxs)("div",{className:"url-button-div",children:[Object(o.jsx)("button",{onClick:function(){c(s.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{onClick:function(e){u.a.delete("http://3.36.36.62:3001/urls/".concat(t.url_id)).then((function(e){c(s.filter((function(e){return e.url_id!==t.url_id}))),alert("delete!")}))},className:"trash-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})]})]})},x=function(e){var t=e.urls,c=e.setUrls,s=e.filteredUrls;return Object(o.jsx)("div",{className:"url-container",children:Object(o.jsx)("ul",{className:"url-list",children:s.map((function(e){return Object(o.jsx)(h,{setUrls:c,urls:t,url:e,urlID:e.url_id},e.url_id)}))})})},v=c(50),N=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MODE;var g=function(){d=(d="dev"===N?"http://127.0.0.1":v.URL)+":"+v.PORT;var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],l=Object(s.useState)(""),a=Object(i.a)(l,2),r=(a[0],a[1],Object(s.useState)("")),j=Object(i.a)(r,2),O=(j[0],j[1],Object(s.useState)("")),m=Object(i.a)(O,2),f=(m[0],m[1],Object(s.useState)("")),h=Object(i.a)(f,2),g=(h[0],h[1],Object(s.useState)("")),S=Object(i.a)(g,2),_=(S[0],S[1],Object(s.useState)("")),C=Object(i.a)(_,2),T=(C[0],C[1],Object(s.useState)("")),U=Object(i.a)(T,2),k=(U[0],U[1],Object(s.useState)("")),E=Object(i.a)(k,2),w=E[0],R=E[1],D=Object(s.useState)("all"),P=Object(i.a)(D,2),I=P[0],L=P[1],F=Object(s.useState)([]),A=Object(i.a)(F,2),y=A[0],B=A[1];Object(s.useEffect)((function(){K()}),[]),Object(s.useEffect)((function(){H(),J()}),[c,I]);var H=function(){switch(I){case"completed":B(c.filter((function(e){return!0===e.completed})));break;case"uncompleted":B(c.filter((function(e){return!1===e.completed})));break;default:B(c)}},J=function(){localStorage.setItem("urls",JSON.stringify(c))},K=function(){console.log(d),u.a.get(d+"/urls").then((function(e){n(e.data)}))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:N}),Object(o.jsx)(b,{}),Object(o.jsxs)("div",{className:"Body",children:[Object(o.jsx)(p,{inputText:w,urls:c,setUrls:n,setInputText:R,setStatus:L}),Object(o.jsx)(x,{filteredUrls:y,setUrls:n,urls:c})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),l(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),S()}},[[51,1,2]]]);
//# sourceMappingURL=main.e2a8ff96.chunk.js.map