(this["webpackJsonpanime-app"]=this["webpackJsonpanime-app"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){e.exports=a(41)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),l=a.n(c),s=a(2),i=a(3),o=a.n(i),u=a(7),m="https://jikan1.p.rapidapi.com/",f={method:"GET",headers:{"x-rapidapi-key":"ebf8bbd763msh2c1131faf74d8c1p183bb1jsncfee2231dc88","x-rapidapi-host":"jikan1.p.rapidapi.com"}},p=(Math.floor(49*Math.random()),Math.floor(5*Math.random())+1),d=("top/anime/".concat(p,"/upcoming"),function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""===t){e.next=13;break}return e.next=4,fetch("".concat(m).concat("search/anime?q=").concat(t),f);case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,r=n.results,e.next=11,r.map((function(e){return{title:e.title,description:e.synopsis,img:null===e||void 0===e?void 0:e.image_url,type:e.type,episodes:e.episodes,url:e.url}}));case 11:return c=e.sent,e.abrupt("return",c);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",t);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()),E=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m).concat("top/anime/1/upcoming"),f);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=a.top,r=n.map((function(e){return{id:e.mal_id,title:e.title,image:e.image_url,url:e.url}})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m).concat("season/2019/fall"),f);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=a.anime,r=n.slice(0,20),c=r.map((function(e){return{id:e.mal_id,title:e.title,score:e.score,image:e.image_url,genre:e.genres,synopsis:e.synopsis,type:e.type,url:e.url,episodes:e.episodes}})),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],[],e.next=4,fetch("".concat(m,"genre/anime/1/"),f);case 4:return a=e.sent,e.next=7,a.json();case 7:e.sent,e.prev=8,n=1;case 10:if(!(n<3)){e.next=21;break}return e.next=13,fetch("".concat(m,"genre/anime/").concat(n,"/1"),f);case 13:return r=e.sent,e.next=16,r.json();case 16:c=e.sent,t.push(c);case 18:n++,e.next=10;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(8),console.error("data not found");case 26:return e.abrupt("return",t);case 27:case"end":return e.stop()}}),e,null,[[8,23]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(n.useState)({topData:[],loading:!0}),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){E().then((function(e){r({topData:e,loading:!1})}))}),[]),a},v=a(10),_=a.n(v),j=a(19),O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),a=Object(s.a)(t,2),r=a[0],c=a[1],l=function(){c(!r)};return[r,l]},y=a(6),N=(a(17),a(4)),k=function(e){e.id;var t=e.title,a=(e.score,e.image),n=(e.genre,e.synopsis);e.type,e.url,e.episodes;return r.a.createElement("section",{className:"info__card"},r.a.createElement("figure",{className:"info__card__img"},r.a.createElement(N.LazyLoadImage,{src:a,alt:t}),r.a.createElement("h3",null,t)),r.a.createElement("hr",null),r.a.createElement("p",{className:"info--synopsis"},n))},x=function(e){var t=O(),a=Object(s.a)(t,2),n=a[0],c=a[1],l=(e.id,e.title),i=e.image,o=e.episodes,u=l.slice(0,15);return r.a.createElement("li",{className:"anime__item"},r.a.createElement("div",{className:"feature__content"},r.a.createElement(N.LazyLoadImage,{src:i,alt:l,loading:"lazy"}),r.a.createElement("div",null,r.a.createElement("p",{className:"feature--title"},u,"..."),r.a.createElement("p",{className:"feature--synopsis"},"Episodes: ",r.a.createElement("small",null,o)))),r.a.createElement(j.a,{className:"feature--info",onClick:function(){return c(n)}}),r.a.createElement(_.a,{ariaHideApp:!1,className:"Modal",overlayClassName:"Overlay",isOpen:n},r.a.createElement("div",{className:"Modal--close"},r.a.createElement(y.a,{className:"IoCloseOutline",onClick:function(){return c(n)}})),r.a.createElement(k,Object.assign({open:c},e))))},w=function(){var e=function(){var e=Object(n.useState)({data:[],loading:!0}),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){g().then((function(e){r({data:e,loading:!1})}))}),[]),a}(),t=e.data;e.loading;return r.a.createElement("section",{className:"feature__anime"},r.a.createElement("h2",null,"Feature"),r.a.createElement("ul",{className:"feature__anime__list"},t.map((function(e){return r.a.createElement(x,Object.assign({key:e.id},e))}))))},C=(a(38),a(20)),D=function(e){var t=e.setAnime,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],i=c[1];return r.a.createElement("form",{className:"search__form",onSubmit:function(e){e.preventDefault(),l.trim().length>0&&(t((function(e){return[l].concat(Object(C.a)(e))})),i(""))}},r.a.createElement("input",{type:"text",className:"search--input",value:l,onChange:function(e){i(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Go"))},S=function(){for(var e=[],t=65;t<=90;t++)e.push(String.fromCharCode(t));return r.a.createElement("ul",{className:"abc__chart"},e.map((function(e){return r.a.createElement("li",{key:e,className:"abc--letter"},e)})))},L=function(e){var t=e.genreData,a=Object(n.useState)(t),c=Object(s.a)(a,2),l=(c[0],c[1]);return r.a.createElement("ul",{className:"genre__list"},t.map((function(e){var t=e.mal_url,a=t.name,n=t.mal_id,c=e.anime;return r.a.createElement("li",{key:n,className:"genre--item",onClick:function(){return function(e,t){l(e),console.log(t),console.log(e)}(c,a)}},a)})))},M=function(){var e=O(),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),o=i[0],u=i[1],m=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(o),f=m.data,p=(m.loading,function(){var e=Object(n.useState)({genreData:[],loading:!0}),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){b().then((function(e){r({genreData:e,loading:!1})}))}),[]),a}().genreData);return Object(n.useEffect)((function(){}),[o]),Object(n.useEffect)((function(){}),[p]),console.log(f),r.a.createElement("header",null,r.a.createElement("nav",{className:"menu__nav container"},r.a.createElement("h3",null,"AnimeApp"),r.a.createElement("div",{className:"right__side__container"},r.a.createElement(y.b,{className:"menu--icons",onClick:function(){return c(a)}}),r.a.createElement(_.a,{ariaHideApp:!1,className:"menu__modal",overlayClassName:"menu__overlay",isOpen:a},r.a.createElement(y.a,{className:"menu--icons",onClick:function(){return c(a)}}),r.a.createElement(D,{setAnime:u}),r.a.createElement(S,null),r.a.createElement(L,{genreData:p})))))},A=(a(39),Math.floor(50*Math.random())+1),z=function(){var e=h(),t=e.topData,a=(e.loading,!!t[A]&&t[A]),n=a.image,c=a.title,l=a.url;return r.a.createElement("main",{className:"hero"},r.a.createElement(N.LazyLoadImage,{src:n,alt:""}),r.a.createElement("div",null,r.a.createElement("h3",null,c),r.a.createElement("a",{href:l,target:"_blank"},r.a.createElement("button",{className:"watch--now"},"Watch Now"))))},I=(a(40),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"horizontal",t=h(),a=t.topData,n=(t.loading,O()),c=Object(s.a)(n,2);c[0],c[1];return r.a.createElement("section",{className:"top10"},r.a.createElement("h2",null,"Top 10 Anime"),r.a.createElement("ul",{className:"top10__list"},a.map((function(t,a){var n=t.title,c=t.image,l=(t.url,t.id);return r.a.createElement("li",{key:l,className:"top10__list__item"},r.a.createElement("p",null,a+1),r.a.createElement(N.LazyLoadImage,{src:c,alt:n,effect:"opacity",scrollPosition:e}))}))))}),F=(a(18),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(z,null),r.a.createElement(I,null),r.a.createElement(w,null))});l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c5897883.chunk.js.map