(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{69:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(28),s=c.n(a),i=c(6),j=c(2),l=c(1);function h(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Hello"})})}function o(){return Object(l.jsx)("div",{children:"Favorite"})}var d=c(31),b=c(12);var m=function(e){var t=e.name,c=e.href,n=e.img,r=e.deletePoster;return Object(l.jsx)("div",{className:"poster",children:Object(l.jsxs)("div",{className:"content-wrapper",children:[Object(l.jsx)("div",{className:"cross-box",onClick:function(){r(t)},children:Object(l.jsx)("div",{className:"spoiler",children:Object(l.jsx)("div",{className:"cross",children:"x"})})}),Object(l.jsxs)("a",{href:c,target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("img",{src:n,alt:"anime-src"}),Object(l.jsx)("div",{className:"anime-info",children:Object(l.jsx)("h5",{children:t})})]})]})})};var u=function(e){var t=e.img;return Object(l.jsx)("div",{className:"banner",children:Object(l.jsx)("img",{src:t,alt:"banner-src"})})};var O=function(e){var t=e.addPoster,c=Object(n.useState)(""),r=Object(b.a)(c,2),a=r[0],s=r[1];return Object(l.jsx)("div",{className:"Input",children:Object(l.jsx)("input",{className:"Input-field",type:"text",placeholder:"Add anime..",value:a,onChange:function(e){s(e.target.value)},onKeyDown:function(e){var c=e.target.value;"Enter"===e.key&&c&&(t(c),s(""))}})})},x=c(37),p=c(56);var v=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],a=function(e){x.delete("https://mysql-animes.herokuapp.com/remove/".concat(e)).then((function(){r(c.filter((function(t){return t.name!==e})))}))};return Object(n.useEffect)((function(){fetch("https://mysql-animes.herokuapp.com/animes").then((function(e){return e.json()})).then((function(e){return r(e.reverse())}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{img:"https://c.wallhere.com/photos/6c/bb/Little_Witch_Academia-284456.jpg!d"}),Object(l.jsx)("div",{className:"input",children:Object(l.jsx)(O,{addPoster:function(e){p.search("anime",e).then((function(e){console.log(e.results[0]);var t=e.results[0],n=t.title,a=t.url,s=t.image_url;console.log(n,a,s),r([{name:n,img:s,href:a}].concat(Object(d.a)(c))),x.post("https://mysql-animes.herokuapp.com/add",{name:n,img:s,href:a})}))}})}),Object(l.jsx)("div",{className:"anime-wrapper",children:c.map((function(e){return Object(l.jsx)(m,{name:e.name,href:e.href,img:e.img,deletePoster:a},e.name)}))})]})};c(69);function f(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsxs)("div",{className:"head-wrapper header-height",children:[Object(l.jsx)("div",{className:"title-wrapper center header-height",children:Object(l.jsx)("h2",{children:"Naxocist"})}),Object(l.jsx)(i.b,{className:"nav-link center header-height",to:"/library",children:"Library"}),Object(l.jsx)(i.b,{className:"nav-link center header-height",to:"/favorite",children:"Favorite"}),Object(l.jsx)(i.b,{className:"nav-link center header-height",to:"/",children:"Home"})]})}),Object(l.jsxs)("div",{className:"panel",children:[Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(h,{})}),Object(l.jsx)(j.a,{path:"/favorite",children:Object(l.jsx)(o,{})}),Object(l.jsx)(j.a,{path:"/library",children:Object(l.jsx)(v,{})})]})]})}s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(f,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.91180f21.chunk.js.map