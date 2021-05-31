(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{30:function(e,t,a){},41:function(e,t,a){},48:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(31),i=a.n(c),r=a(12),s=a(2),o=a(3),l=(a(41),a(0));var u=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),d=u[0],b=u[1],j=Object(s.f)().push;return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(l.jsxs)("div",{className:"nav ".concat(a&&"nav_black"),children:[Object(l.jsx)(r.c,{to:"/",children:Object(l.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix Logo"})}),Object(l.jsxs)("form",{className:"form",onSubmit:function(){j("/search?query=".concat(d))},children:[Object(l.jsx)("i",{class:"fas fa-search fa-2x"}),Object(l.jsx)("input",{type:"text",name:"query",placeholder:"Search...",value:d,onChange:function(e){return b(e.target.value)},className:"input"})]}),Object(l.jsx)("img",{className:"nav_avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Avatar Logo"})]})},d=(a(48),function(){return Object(l.jsxs)("div",{className:"footer-container",children:[Object(l.jsxs)("div",{className:"social-container",children:[Object(l.jsx)("a",{href:"https://github.com/FlorenciaPetrone",target:"_blank",children:Object(l.jsx)("i",{class:"fab fa-github"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/florencia-petrone/",target:"_blank",children:Object(l.jsx)("i",{class:"fab fa-linkedin"})})]}),Object(l.jsx)("div",{className:"copyright",children:Object(l.jsx)("p",{children:"\xa9 2021 Petrone Florencia. All rights reserved."})})]})}),b=a(6),j=a.n(b),h=a(11),v=a(33),p=a.n(v).a.create({baseURL:"https://api.themoviedb.org/3"}),f=a(14);a(78);var m=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),s=r[0],u=r[1],d=Object(n.useState)(!0),b=Object(o.a)(d,2),v=b[0],m=b[1],O="fc700728a18cda64e804f048540489df";Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/discover/tv?api_key=".concat(O,"&with_networks=213"));case 2:t=e.sent,c(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var x,g,k=function(){var e=Object(h.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=5;break}u(""),m(!v),e.next=10;break;case 5:return e.next=7,p.get("/movie/".concat(t,"/videos?api_key=").concat(O));case 7:n=e.sent,u(null===(a=n.data.results[0])||void 0===a?void 0:a.key),m(!v);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n                  "https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'"\n              )'),backgroundPosition:"center center"},children:[Object(l.jsxs)("div",{className:"banner_contents",children:[Object(l.jsx)("h1",{className:"banner_title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(l.jsx)("div",{className:"banner_buttons",children:Object(l.jsx)("button",{className:"banner_button",onClick:function(){return k(a.id)},children:v?"Play Trailer":"Close Trailer"})}),Object(l.jsx)("h1",{className:"banner_description",children:(x=null===a||void 0===a?void 0:a.overview,g=150,(null===x||void 0===x?void 0:x.length)>g?x.substr(0,g-1)+"...":x)})]}),Object(l.jsx)("div",{className:"banner_fadeBottom"})]}),Object(l.jsx)("div",{className:"trailer-container",children:s&&Object(l.jsx)(f.a,{videoId:s,opts:{height:"300",width:"100%",playerVars:{autoplay:1}}})})]})},O=(a(79),a(36)),x=a.n(O),g=function(e){var t=e.title,a=e.fetchUrl,c=e.isLargeRow,i=Object(n.useState)([]),r=Object(o.a)(i,2),s=r[0],u=r[1],d=Object(n.useState)(""),b=Object(o.a)(d,2),v=b[0],m=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(a);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]);return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("h2",{className:"row_title",children:t}),Object(l.jsx)("div",{className:"row_posters",children:s.map((function(e){return Object(l.jsx)("img",{onClick:function(){return function(e){v?m(""):x()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(c&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),v&&Object(l.jsx)(f.a,{videoId:v,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},k="fc700728a18cda64e804f048540489df",w=[{title:"NETFLIX ORIGINALS",fetchUrl:"/discover/tv?api_key=".concat(k,"&with_networks=213"),isLargeRow:!0},{title:"Trending now",fetchUrl:"/trending/all/week?api_key=".concat(k,"&language=en-US")},{title:"Top Rated",fetchUrl:"/movie/top_rated?api_key=".concat(k,"&language=en-US")},{title:"Action Movies",fetchUrl:"/discover/movie?api_key=".concat(k,"&with_genres=28")},{title:"Comedy Movies",fetchUrl:"/discover/movie?api_key=".concat(k,"&with_genres=35")},{title:"Horror Movies",fetchUrl:"/discover/movie?api_key=".concat(k,"&with_genres=27")},{title:"Romance Movies",fetchUrl:"/discover/movie?api_key=".concat(k,"&with_genres=10749")},{title:"Documentaries",fetchUrl:"/discover/movie?api_key=".concat(k,"&with_genres=99")}],_=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{}),w.map((function(e){return Object(l.jsx)(g,{title:e.title,fetchUrl:e.fetchUrl,isLargeRow:e.isLargeRow},e.title)}))]})},N=(a(88),a(89),function(e){var t=e.movie,a=Object(s.f)(),n=a.push,c=a.location.search;return Object(l.jsx)("div",{children:t.backdrop_path&&Object(l.jsx)("img",{onClick:function(){var e="".concat(c,"&detail=").concat(t.id);n("detail".concat(e))},className:"movie",src:"".concat("https://image.tmdb.org/t/p/original/").concat(t.backdrop_path),alt:t.name||t.title},t.id)})}),y=(a(90),function(e){var t=e.pagination,a=e.changePage,n=t.pageInfo,c=t.totalPages;return Object(l.jsxs)("div",{className:"pagination-container",children:[Object(l.jsx)("button",{disabled:1===n,className:"button-hover button",onClick:function(){return a("previous")},children:"Previous"}),1!==n&&Object(l.jsx)("button",{className:"pagination-button button",disabled:!0,children:n-1}),Object(l.jsx)("button",{disabled:!0,className:"current-page pagination-button button",children:n}),c-n>0&&Object(l.jsx)("button",{className:"button-hover pagination-button button",onClick:function(){return a("next")},children:n+1}),c-n-1>0&&Object(l.jsx)("p",{children:"..."}),c-n-1>0&&Object(l.jsx)("p",{className:"button",children:c-n-1}),Object(l.jsx)("button",{disabled:c-n===0,className:"button-hover pagination-button button",onClick:function(){return a("next")},children:"Next"})]})}),S=function(){var e=Object(s.g)(),t=new URLSearchParams(e.search),a=Object(n.useState)([]),c=Object(o.a)(a,2),i=c[0],r=c[1],u=Object(n.useState)({}),d=Object(o.a)(u,2),b=d[0],v=d[1],f=Object(n.useState)(t.get("query")),m=Object(o.a)(f,1)[0],O=Object(n.useState)(1),x=Object(o.a)(O,2),g=x[0],k=x[1];Object(n.useEffect)((function(){Object(h.a)(j.a.mark((function e(){var t,a,n,c,i,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fc700728a18cda64e804f048540489df",t="/search/movie?api_key=".concat("fc700728a18cda64e804f048540489df","&language=en-US&query=").concat(m,"&page=").concat(g,"&include_adult=false"),e.prev=2,e.next=5,p.get(t);case 5:a=e.sent,n=a.data,c=n.results,i=n.page,s=n.total_pages,o=n.total_results,r(c),v({pageInfo:i,totalPages:s,totalResults:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))()}),[m,g]);return Object(l.jsxs)("div",{className:"search-component",children:[Object(l.jsx)("div",{className:"search-movies-component",children:i.filter((function(e){return e.poster_path})).map((function(e){return Object(l.jsx)(N,{movie:e},e.id)}))}),Object(l.jsx)(y,{pagination:b,changePage:function(e){k("next"===e?g+1:g-1)}})]})},U=(a(91),"fc700728a18cda64e804f048540489df"),L=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(s.g)(),r=new URLSearchParams(i.search),u=Object(n.useState)(r.get("detail")),d=Object(o.a)(u,1)[0],b=Object(n.useState)({}),v=Object(o.a)(b,2),m=v[0],O=v[1],x=Object(n.useState)(!0),g=Object(o.a)(x,2),k=g[0],w=g[1];Object(n.useEffect)((function(){Object(h.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(d,"?api_key=").concat(U,"&language=en-US"),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,O(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()}),[d]);var _=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}c(""),w(!k),e.next=10;break;case 5:return e.next=7,p.get("/movie/".concat(t,"/videos?api_key=").concat(U));case 7:i=e.sent,c(null===(n=i.data.results[0])||void 0===n?void 0:n.key),w(!k);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"detail-container",children:[Object(l.jsxs)("header",{className:"detail-image",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===m||void 0===m?void 0:m.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(l.jsxs)("div",{className:"detail-contents",children:[Object(l.jsx)("h1",{className:"detail-title",children:(null===m||void 0===m?void 0:m.title)||(null===m||void 0===m?void 0:m.name)||(null===m||void 0===m?void 0:m.original_name)}),Object(l.jsx)("button",{className:"detail-button",onClick:function(){return _(m.id)},children:k?"Play Trailer":"Close Trailer"})]}),Object(l.jsx)("div",{className:"banner_fadeBottom"})]}),Object(l.jsxs)("div",{className:"other-container",children:[Object(l.jsxs)("div",{className:"movie-description-container",children:[Object(l.jsx)("h1",{children:"Movie Description"}),Object(l.jsx)("h2",{className:"detail-description",children:m.overview})]}),Object(l.jsxs)("div",{className:"other-details",children:[Object(l.jsx)("h1",{children:"More info about this movie"}),Object(l.jsxs)("p",{children:["RELEASE DATE: ",m.release_date]}),Object(l.jsxs)("p",{children:["RATING: ",m.vote_average]}),Object(l.jsx)("p",{children:"GENRES: "}),m.genres&&m.genres.map((function(e){return Object(l.jsx)("li",{className:"genres-list",children:e.name},e.name)}))]})]}),Object(l.jsx)("div",{className:"trailer-container",children:a&&Object(l.jsx)(f.a,{videoId:a,opts:{height:"600",width:"90%",playerVars:{autoplay:1}}})})]})},R=(a(30),function(){return Object(l.jsx)(r.b,{basename:"/",children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(u,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",component:_}),Object(l.jsx)(s.a,{exact:!0,path:"/search",component:S}),Object(l.jsx)(s.a,{exact:!0,path:"/detail",component:L})]}),Object(l.jsx)(d,{})]})})});i.a.render(Object(l.jsx)(r.a,{basename:"/react-netflix-clone",children:Object(l.jsx)(R,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.b8785078.chunk.js.map