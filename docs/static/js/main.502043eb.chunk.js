(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(16),s=n.n(a),r=n(19),i=[{id:1,todo:"comprar pan",done:!1}],j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;return"agregar"===(null===t||void 0===t?void 0:t.type)?[].concat(Object(r.a)(e),[t.payload]):[e]},l=j();l=j(l,{type:"agregar",payload:{id:2,todo:"comprar leche",done:!1}}),console.log(l);var o=n(20),b=n(8),d=n(2),x=Object(c.createContext)(null),h=n(1),v=function(){var e=Object(c.useContext)(x),t=e.user,n=e.setuser;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"About Screen"}),Object(h.jsx)("hr",{}),Object(h.jsx)("pre",{children:JSON.stringify(t,null,3)}),Object(h.jsx)("button",{className:"btn btn-warning",onClick:function(){n({})},children:"Logout"})]})},O=function(){var e=Object(c.useContext)(x).setuser;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login Screen"}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-primary",onClick:function(){e({id:123,name:"Christian"})},children:"Login"})})]})},u=function(){var e=Object(c.useContext)(x).user;return console.log(e),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Home Screen"}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{children:Object(h.jsx)("pre",{children:JSON.stringify(e,null,3)})})]})},p=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:"useContext"}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(h.jsxs)("div",{className:"navbar-nav",children:[Object(h.jsx)(b.b,{exact:!0,activeClassName:"nav-link active",className:"nav-link",to:"/",children:"Home"}),Object(h.jsx)(b.b,{exact:!0,activeClassName:"nav-link active",className:"nav-link",to:"/login",children:"Login"}),Object(h.jsx)(b.b,{exact:!0,activeClassName:"nav-link active",className:"nav-link",to:"/about",children:"About"})]})})]})})})},m=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{exact:!0,path:"/login",component:O}),Object(h.jsx)(d.b,{exact:!0,path:"/about",component:v}),Object(h.jsx)(d.b,{exact:!0,path:"/",component:u}),Object(h.jsx)(d.a,{to:"/"})]})})]})})})},g=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(h.jsx)(x.Provider,{value:{user:n,setuser:a},children:Object(h.jsx)(m,{})})};s.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.502043eb.chunk.js.map