(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{81:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(33),s=c.n(a),i=c(7),j=c(2),l=c(6),h=c(34),d=c.n(h),o=c(14),b=c.n(o),m=c(1);var O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([!1]),i=Object(l.a)(s,2),j=i[0],h=i[1];return Object(n.useEffect)((function(){h(!0),fetch("https://api.jikan.moe/v3/top/anime/1/airing").then((function(e){return e.json()})).then((function(e){a(e.top.slice(0,5)),h(!1)}))}),[]),Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(b.a,{children:Object(m.jsx)("header",{className:"top-header",children:"Top airing anime"})}),Object(m.jsx)("div",{className:"anime-wrapper",children:j?Object(m.jsx)("div",{className:"loader",children:Object(m.jsx)(d.a,{color:"#3895d3",loading:j,size:10})}):Object(m.jsx)(m.Fragment,{children:c.map((function(e,t){return Object(m.jsx)("div",{className:"poster top-poster",children:Object(m.jsx)("div",{className:"content-wrapper",children:Object(m.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)("div",{className:"rank-box",children:Object(m.jsx)("div",{className:"rank",children:e.rank})}),Object(m.jsx)("img",{src:e.image_url,alt:"anime-src"}),Object(m.jsx)("div",{className:"anime-info",children:Object(m.jsx)("h5",{children:e.title})})]})})},t)}))})})]})};function u(){return Object(m.jsx)("header",{className:"top-header",children:"Nothing here yet..."})}var x=c(37);var p=function(e){var t=e.name,c=e.href,n=e.img,r=e.deletePoster;return Object(m.jsx)("div",{className:"poster",children:Object(m.jsxs)("div",{className:"content-wrapper",children:[Object(m.jsx)("div",{className:"cross-box",onClick:function(){r(t)},children:Object(m.jsx)("div",{className:"spoiler",children:Object(m.jsx)("div",{className:"cross",children:"x"})})}),Object(m.jsxs)("a",{href:c,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)("img",{src:n,alt:"anime-src"}),Object(m.jsx)("div",{className:"anime-info",children:Object(m.jsx)("h5",{children:t})})]})]})})};var v=function(e){var t=e.img;return Object(m.jsx)("div",{className:"banner",children:Object(m.jsx)("img",{src:t,alt:"banner-src"})})};var f=function(e){var t=e.addPoster,c=Object(n.useState)(""),r=Object(l.a)(c,2),a=r[0],s=r[1];return Object(m.jsx)("div",{className:"Input",children:Object(m.jsx)("input",{className:"Input-field",type:"text",placeholder:"Add anime..",value:a,onChange:function(e){s(e.target.value)},onKeyDown:function(e){var c=e.target.value;"Enter"===e.key&&c&&(t(c),s(""))}})})},g=c(35),N=c.n(g),k=c(49),y=c(68);var w=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(l.a)(a,2),i=s[0],j=s[1],h=function(e){r(c.filter((function(t){return t.name!==e}))),k.delete("https://mysql-animes.herokuapp.com/remove/".concat(e)).then((function(){}))};return Object(n.useEffect)((function(){return j(!0),fetch("https://mysql-animes.herokuapp.com/animes").then((function(e){return e.json()})).then((function(e){r(e.reverse()),j(!1)})),function(){r([])}}),[]),Object(m.jsxs)("div",{children:[Object(m.jsxs)(b.a,{children:[Object(m.jsx)(v,{img:"https://c.wallhere.com/photos/6c/bb/Little_Witch_Academia-284456.jpg!d"}),Object(m.jsxs)("div",{className:"input",children:[Object(m.jsx)(f,{addPoster:function(e){y.search("anime",e).then((function(e){var t=e.results[0],n=t.title,a=t.url,s={name:n,img:t.image_url,href:a};(function(e,t){return e.some((function(e){return Object.entries(t).every((function(t){var c=Object(l.a)(t,2),n=c[0];return c[1]===e[n]}))}))})(c,s)||r([s].concat(Object(x.a)(c))),k.post("https://mysql-animes.herokuapp.com/add",s)}))}}),Object(m.jsxs)("p",{children:[c.length," animes in this library.."]})]})]}),Object(m.jsx)("div",{className:"anime-wrapper",children:i?Object(m.jsx)("div",{className:"loader",children:Object(m.jsx)(N.a,{color:"#3895d3",loading:i,size:10,margin:20})}):Object(m.jsx)(m.Fragment,{children:c.map((function(e,t){return Object(m.jsx)(p,{name:e.name,href:e.href,img:e.img,deletePoster:h},t)}))})})]})};c(81);function S(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("header",{className:"nav",children:Object(m.jsxs)("div",{className:"head-wrapper header-height",children:[Object(m.jsx)("div",{className:"title-wrapper center header-height",children:Object(m.jsx)("h2",{children:"Naxocist"})}),Object(m.jsx)(i.b,{className:"nav-link center header-height",to:"/library",children:"Library"}),Object(m.jsx)(i.b,{className:"nav-link center header-height",to:"/favorite",children:"Favorite"}),Object(m.jsx)(i.b,{className:"nav-link center header-height",to:"/",children:"Home"})]})}),Object(m.jsx)("div",{className:"panel",children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",children:Object(m.jsx)(O,{})}),Object(m.jsx)(j.a,{path:"/favorite",children:Object(m.jsx)(u,{})}),Object(m.jsx)(j.a,{path:"/library",children:Object(m.jsx)(w,{})})]})})]})}s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(S,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.85546230.chunk.js.map