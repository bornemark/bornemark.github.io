(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(n,e,t){n.exports=t(73)},56:function(n,e,t){},70:function(n,e,t){},73:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(15),i=t.n(o),c=t(17),l=t(3),u=t(8),s=t(18),m=t.n(s),d=t(11),b={gray:"#4a4a4a",grayDark:"#1b1b1b",grayLight:"#cccccc",primaryFaded:"#adadad",grayTransparent:Object(d.b)(.99,"white"),brownDark:"#2a2f3a",shadowPrimary:"rgba(0,0,0,0.2)",shadowHover:"rgba(0,0,0,0.04)",borderPrimary:"#ececec",borderHover:"#e2e2e2",white:"#FFF",whiteTransparent:Object(d.b)(.992,"#FFF"),accent:"#FFDFA5",accentTransparent:Object(d.b)(.75,"#FFDFA5"),backgrounds:{blue:"#1a1c1e",orange:"#201c19",purple:"#1d1a1e",green:"#1a1e1a",yellow:"#1e1e1a"}},f={colors:b,shadows:{default:"0 5px 15px ".concat(b.shadowPrimary),hover:"2px 4px 15px ".concat(b.shadowHover)},typography:{primary:"'Titillium Web', sans-serif"},mediaPlayers:{soundCloudPlayerHeight:"14rem",youtubePlayerHeight:"224px"},other:{borderRadiusPrimary:"4px",debounceTime:250},breakpoints:{tablet:"1000px",mobile:"660px"}};var h={pageNumber:1,lastPage:1,searchTerm:"",backgroundColor:"black",showMobileMenu:!1};function p(n,e){switch(e.type){case"SET_PAGE_NUMBER":return Object(u.a)({},n,{pageNumber:e.pageNumber});case"SET_LAST_PAGE":return Object(u.a)({},n,{lastPage:e.lastPage});case"SET_SEARCH_TERM":return Object(u.a)({},n,{searchTerm:e.searchTerm});case"SET_BACKGROUND_COLOR":return Object(u.a)({},n,{backgroundColor:e.backgroundColor});case"TOGGLE_SHOW_MOBILE_MENU":return Object(u.a)({},n,{showMobileMenu:!n.showMobileMenu});case"HIDE_MOBILE_MENU":return Object(u.a)({},n,{showMobileMenu:!1});default:return n}}var g=r.a.createContext(h),v=(t(56),t(2)),w=t(1),y=t(12),O=t(22);function E(){return(E=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function j(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var x=r.a.createElement("image",{x:4,y:1,width:492,height:98,xlinkHref:"data:img/png;base64,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"}),k=function(n){var e=n.svgRef,t=j(n,["svgRef"]);return r.a.createElement("svg",E({viewBox:"0 0 500 105",ref:e},t),x)},M=r.a.forwardRef(function(n,e){return r.a.createElement(k,E({svgRef:e},n))});t.p;function A(){var n=Object(v.a)(["\n  display: block;\n  text-decoration: none;\n  color: inherit;\n\n  &.active {\n    color: ",";\n  }\n"]);return A=function(){return n},n}function T(){var n=Object(v.a)(["\n  font-size: 1.6em;\n  padding: 0.5rem;\n  line-height: 1;\n  height: 2.7rem;\n  font-family: ",";\n  text-transform: lowercase;\n\n  @media (max-width: ",") {\n    font-size: 1.8em;\n    display: block;\n  }\n"]);return T=function(){return n},n}function N(){var n=Object(v.a)(["\n  margin: 0;\n  margin-top: 5rem;\n  padding: 0;\n  text-align: right;\n  list-style: none;\n\n  > li:not(:last-child) {\n    margin-bottom: 0.5rem;\n  }\n\n  @media (max-width: ",") {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    text-align: center;\n    margin: auto 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    > li:not(:last-child) {\n      margin-bottom: 3vh;\n    }\n  }\n"]);return N=function(){return n},n}function R(){var n=Object(v.a)(["\n  display: block;\n  width: 100%;\n  max-width: 12rem;\n  opacity: 0.75;\n  margin: auto;\n\n  @media (max-width: ",") {\n    max-width: 9.5rem;\n  }\n"]);return R=function(){return n},n}function C(){var n=Object(v.a)(["\n  width: 100%;\n"]);return C=function(){return n},n}var P=w.a.nav(C()),S=Object(w.a)(M)(R(),f.breakpoints.tablet),Y=w.a.ul(N(),f.breakpoints.tablet),z=w.a.li(T(),f.typography.primary,f.breakpoints.tablet),H=Object(w.a)(c.b)(A(),f.colors.accent);function F(){return r.a.createElement(P,null,r.a.createElement(S,null),r.a.createElement(Y,null,r.a.createElement(z,null,r.a.createElement(H,{to:"/originals"},"Originals")),r.a.createElement(z,null,r.a.createElement(H,{to:"/remixes"},"Remixes")),r.a.createElement(z,null,r.a.createElement(H,{to:"/mixtapes"},"Mixtapes")),r.a.createElement(z,null,r.a.createElement(H,{to:"/mashups"},"Mashups")),r.a.createElement(z,null,r.a.createElement(H,{to:"/videos"},"Videos"))))}var V=t(25),G=t.n(V),Z=t(34),B={headers:{"Content-Type":"application/json"}};function W(n){var e=n.filters,t=e.trackType,o=e.mediaType,i=n.orderBy,c=(i=void 0===i?{}:i).prop,s=i.order,m=r.a.useContext(g).state,d=m.pageNumber,b=m.searchTerm;return function(n){var e=n.url,t=n.options,r=Object(a.useState)(!1),o=Object(l.a)(r,2),i=o[0],c=o[1],s=Object(a.useState)(null),m=Object(l.a)(s,2),d=m[0],b=m[1];return Object(a.useEffect)(function(){Object(Z.a)(G.a.mark(function n(){var a,r,o,i;return G.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,a="".concat("https://bornemark-api.bornemark.xyz/api","/").concat(e),t.body=JSON.stringify(t.body),r=Object(u.a)({},B,t),n.next=7,fetch(a,r);case 7:if(!(o=n.sent).ok){n.next=13;break}return n.next=11,o.json();case 11:i=n.sent,b(i);case 13:n.next=17;break;case 15:n.prev=15,n.t0=n.catch(1);case 17:c(!1);case 18:case"end":return n.stop()}},n,null,[[1,15]])}))()},[e,t]),[d,i]}({url:"tracks/filter",options:r.a.useMemo(function(){return{method:"POST",body:{page:d,filters:{trackType:t,mediaType:o,title:b},orderBy:{prop:c,order:s}}}},[o,s,d,c,b,t])})}var q=t(38),J=t.n(q);function I(){var n=Object(v.a)(["\n  width: 70px;\n  text-align: center;\n\n  div {\n    width: 12px;\n    height: 12px;\n    background-color: ",";\n\n    border-radius: 100%;\n    display: inline-block;\n    animation: "," 1.4s infinite ease-in-out both;\n\n    &:not(:last-child) {\n      margin-right: 5px;\n    }\n\n    &:nth-child(1) {\n      animation-delay: -0.32s;\n    }\n    &:nth-child(2) {\n      animation-delay: -0.16s;\n    }\n  }\n"]);return I=function(){return n},n}function X(){var n=Object(v.a)(["\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n  }\n"]);return X=function(){return n},n}var L=Object(w.b)(X()),K=w.a.div(I(),f.colors.primaryFaded,L);function U(n){var e=n.className;return r.a.createElement(K,{className:e},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}function D(){var n=Object(v.a)(["\n  display: ",";\n  width: 100%;\n  height: ",";\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"]);return D=function(){return n},n}var Q=w.a.div(D(),function(n){return n.isReady?"none":"flex"},f.mediaPlayers.soundCloudPlayerHeight,f.colors.whiteTransparent);function _(n){var e=n.soundCloudTrackId,t=r.a.useState(!1),a=Object(l.a)(t,2),o=a[0],i=a[1];return r.a.useEffect(function(){SC.Widget(document.getElementById("sc-widget")).bind(SC.Widget.Events.READY,function(){i(!0)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{isReady:o},r.a.createElement(U,null)),r.a.createElement("iframe",{id:"sc-widget",title:"Soundcloud Player",scrolling:"no",frameBorder:"no",style:{display:o?"flex":"none",width:"100%",height:f.mediaPlayers.soundCloudPlayerHeight},src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/".concat(e)+"&auto_play=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}))}var $=t(35);t(70);function nn(){var n=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: ",";\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"]);return nn=function(){return n},n}var en=w.a.div(nn(),function(n){return n.ready?"none":"flex"},f.colors.whiteTransparent);function tn(n){var e=n.youtubeTrackId,t=r.a.useState(!1),a=Object(l.a)(t,2),o=a[0],i=a[1],c={height:f.mediaPlayers.youtubePlayerHeight,width:"100%",playerVars:{autoplay:0}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(en,{ready:o},r.a.createElement(U,null)),r.a.createElement($.a,{videoId:e,opts:c,containerClassName:"youtube-container",onReady:function(){console.log("yup"),i(!0)}}))}function an(){var n=Object(v.a)(["\n  position: relative;\n  width: 100%;\n"]);return an=function(){return n},n}function rn(){var n=Object(v.a)(["\n  font-size: 0.9em;\n  margin: 0;\n  text-transform: capitalize;\n"]);return rn=function(){return n},n}function on(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-end;\n  justify-content: space-between;\n  height: 1.3rem;\n  width: 100%;\n  padding: 0 0.35rem;\n  margin-top: 2px;\n  transition: color 0.15s ease-in;\n  color: ",";\n"]);return on=function(){return n},n}function cn(){var n=Object(v.a)(["\n  font-size: 1.4em;\n  margin: 0;\n  font-weight: normal;\n  line-height: 2rem;\n\n  @media (max-width: ",") {\n    font-size: 1.3em;\n    line-height: 1.5rem;\n  }\n\n  @media (max-width: ",") {\n    font-size: 1.1em;\n    line-height: 1rem;\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-wrap: nowrap;\n  margin-bottom: 0.8rem;\n  color: ",";\n  width: 100%;\n"]);return ln=function(){return n},n}function un(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  opacity: 0;\n  transition: opacity ","ms ease-out;\n  min-width: 16rem;\n  list-style: none;\n"]);return un=function(){return n},n}var sn=250,mn=w.a.li(un(),sn),dn=w.a.header(ln(),f.colors.white),bn=w.a.h1(cn(),f.breakpoints.tablet,f.breakpoints.mobile),fn=w.a.figcaption(on(),f.colors.grayLight),hn=w.a.p(rn()),pn=w.a.div(an());function gn(n){var e=n.item,t=e.title,a=e.soundcloudId,o=e.youtubeId,i=e.created_at,c=new Date(i.replace(" ","T")).toLocaleDateString("sv-SE",{year:"numeric",month:"long"}),l={entering:{opacity:0},entered:{opacity:1}},s=a?r.a.createElement(_,{soundCloudTrackId:a}):r.a.createElement(tn,{youtubeTrackId:o});return r.a.createElement(J.a,{in:!0,appear:!0,timeout:sn},function(n){return r.a.createElement(mn,{style:Object(u.a)({},l[n])},r.a.createElement(dn,null,r.a.createElement(bn,null,t)),r.a.createElement(pn,null,s),r.a.createElement(fn,null,r.a.createElement(hn,null,c)))})}function vn(){var n=Object(v.a)(["\n  width: 50px;\n  height: 40px;\n\n  div {\n    background-color: ",";\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    animation: "," 1.2s infinite ease-in-out;\n\n    &:not(:last-child) {\n      margin-right: 2px;\n    }\n    &:nth-child(2) {\n      animation-delay: -1.1s;\n    }\n    &:nth-child(3) {\n      animation-delay: -1s;\n    }\n    &:nth-child(4) {\n      animation-delay: -0.9s;\n    }\n    &:nth-child(5) {\n      animation-delay: -0.8s;\n    }\n  }\n"]);return vn=function(){return n},n}function wn(){var n=Object(v.a)(["\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1);\n  }\n"]);return wn=function(){return n},n}var yn=Object(w.b)(wn()),On=w.a.div(vn(),f.colors.primaryFaded,yn);function En(n){var e=n.className;return r.a.createElement(On,{className:e},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}function jn(){var n=Object(v.a)(["\n  color: ",";\n  font-size: 3.5em;\n  font-family: ",";\n  text-transform: lowercase;\n  margin: 0;\n  margin-bottom: 4rem;\n"]);return jn=function(){return n},n}var xn=w.a.h1(jn(),f.colors.accent,f.typography.primary);function kn(n,e){var t=Object(a.useState)(n),r=Object(l.a)(t,2),o=r[0],i=r[1];return Object(a.useEffect)(function(){var t=setTimeout(function(){i(n)},e);return function(){clearTimeout(t)}},[n,e]),o}function Mn(){var n=Object(v.a)(["\n  font-size: 1.1em;\n"]);return Mn=function(){return n},n}function An(){var n=Object(v.a)(["\n  height: 1.9rem;\n  min-width: 1.9rem;\n  background: ",";\n  border: 2px solid ",";\n  border-radius: ",";\n  padding: 0 0.5rem;\n  cursor: pointer;\n  font-size: 0.9em;\n  outline: none;\n  background-color: ",";\n  color: ",";\n  font-weight: ",";\n\n  &:not(:disabled):hover {\n    background-color: ",";\n    color: ",";\n    font-weight: bold;\n  }\n\n  &:disabled {\n    opacity: 0.4;\n    cursor: default;\n  }\n"]);return An=function(){return n},n}function Tn(){var n=Object(v.a)(["\n  margin-top: 3rem;\n\n  > button:not(:last-child) {\n    margin-right: 0.5rem;\n  }\n\n  @media (max-width: ",") {\n    margin: auto;\n  }\n"]);return Tn=function(){return n},n}var Nn=w.a.nav(Tn(),f.breakpoints.mobile),Rn=w.a.button(An(),f.colors.grayTransparent,f.colors.accentTransparent,f.other.borderRadiusPrimary,function(n){return n.active?f.colors.accent:"none"},function(n){return n.active?f.colors.grayDark:f.colors.grayLight},function(n){return n.active?"bold":"normal"},f.colors.accent,f.colors.grayDark),Cn=Object(w.a)(Rn)(Mn());var Pn=Object(a.memo)(function(n){var e=n.lastPage,t=r.a.useState(1),a=Object(l.a)(t,2),o=a[0],i=a[1],c=r.a.useContext(g).dispatch,u=kn(o,500);r.a.useEffect(function(){c({type:"SET_PAGE_NUMBER",pageNumber:u})},[u,c]);var s=function(){o-1<1||i(o-1)},m=function(){o+1>e||i(o+1)};return r.a.createElement(Nn,null,r.a.createElement(Cn,{onClick:function(){return i(1)},disabled:1===o},"\xab"),r.a.createElement(Cn,{onClick:s,disabled:o-1===0},"\u2039"),o-2>=1&&r.a.createElement(Rn,{onClick:function(){o-2<1||i(o-2)}},o-2),o-1>=1&&r.a.createElement(Rn,{onClick:s},o-1),r.a.createElement(Rn,{active:!0},o),o+1<=e&&r.a.createElement(Rn,{onClick:m},o+1),o+2<=e&&r.a.createElement(Rn,{onClick:function(){o+2>e||i(o+2)}},o+2),r.a.createElement(Cn,{onClick:m,disabled:o+1>e},"\u203a"),r.a.createElement(Cn,{onClick:function(){return i(e)},disabled:o+1>e},"\xbb"))}),Sn=t(39),Yn=t(19);function zn(){var n=Object(v.a)(["\n  width: 100%;\n  padding: 0.8rem 1rem;\n  border: none;\n  background: none;\n  font-size: 1.2em;\n  outline: none;\n  color: white;\n"]);return zn=function(){return n},n}function Hn(){var n=Object(v.a)(["\n  height: 1.1rem;\n  margin-left: 1rem;\n  color: ",";\n"]);return Hn=function(){return n},n}function Fn(){var n=Object(v.a)(["\n  display: flex;\n  margin-bottom: 4rem;\n  flex-wrap: nowrap;\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  max-width: 100%;\n  z-index: 1;\n\n  @media (max-width: ",") {\n    margin-bottom: 2rem;\n  }\n"]);return Fn=function(){return n},n}var Vn=w.a.div(Fn(),f.colors.grayTransparent,f.other.borderRadiusPrimary,f.breakpoints.mobile),Gn=Object(w.a)(Sn.a)(Hn(),f.colors.gray),Zn=w.a.input(zn());function Bn(){var n=r.a.useState(""),e=Object(l.a)(n,2),t=e[0],a=e[1],o=r.a.useContext(g),i=o.state.showMobileMenu,c=o.dispatch,u=kn(t,500);return r.a.useEffect(function(){c({type:"SET_SEARCH_TERM",searchTerm:u})},[u,c]),r.a.createElement(Vn,null,r.a.createElement(Gn,null),r.a.createElement(Zn,{value:t,onChange:function(n){return a(n.target.value)},autoFocus:Yn.isBrowser&&!i}))}function Wn(){var n=Object(v.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 5rem;\n  grid-row-gap: 4rem;\n  padding: 0;\n\n  @media (max-width: ",") {\n    grid-template-columns: 1fr;\n  }\n"]);return Wn=function(){return n},n}var qn=w.a.ul(Wn(),f.breakpoints.mobile);function Jn(){var n=Object(v.a)(["\n  font-size: 2em;\n"]);return Jn=function(){return n},n}function In(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 4rem;\n  margin-top: -3.5rem;\n  max-width: 80rem;\n\n  @media (max-width: ",") {\n    padding: 2rem;\n  }\n\n  @media (max-width: ",") {\n    padding: 1rem;\n    margin-top: -2rem;\n  }\n"]);return In=function(){return n},n}function Xn(){var n=Object(v.a)(["\n  position: relative;\n  padding: 4rem;\n  height: 27vh;\n  width: 78vw;\n\n  h1 {\n    line-height: 0.8;\n  }\n\n  @media (max-width: ",") {\n    width: 100vw;\n    padding: 3rem;\n  }\n\n  @media (max-width: ",") {\n    padding: 2.2rem 1.5rem;\n    h1 {\n      font-size: 2.3rem;\n    }\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    width: 100%;\n    background-image: linear-gradient(\n        90deg,\n        transparent 55%,\n        "," 100%\n      ),\n      linear-gradient(transparent 65%, "," 100%),\n      url('https://i.imgur.com/rrstaTs.png');\n    background-position: 50% 65%;\n    background-size: cover;\n    opacity: 0.3;\n    filter: grayscale(60%);\n  }\n\n  > h1 {\n    position: relative;\n  }\n"]);return Xn=function(){return n},n}var Ln=w.a.header(Xn(),f.breakpoints.tablet,f.breakpoints.mobile,function(n){return n.backgroundColor},function(n){return n.backgroundColor}),Kn=w.a.section(In(),f.breakpoints.tablet,f.breakpoints.mobile),Un=w.a.p(Jn()),Dn=function(n,e){return n&&n.length?r.a.createElement(qn,null,n):e?r.a.createElement(Un,null,"\ud83e\udd37\u200d\u2642\ufe0f"):null};function Qn(n){var e=n.title,t=n.children,a=n.loading,o=n.tracksData,i=r.a.useContext(g).state.backgroundColor,c=r.a.useState(!1),u=Object(l.a)(c,2),s=u[0],m=u[1];r.a.useEffect(function(){m(!0)},[]);var d=o&&parseInt(o.total)>o.perPage,b=o&&o.lastPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ln,{backgroundColor:i},r.a.createElement(xn,null,e)),r.a.createElement(Kn,null,r.a.createElement(Bn,null),a?r.a.createElement(En,null):Dn(t,s),d&&r.a.createElement(Pn,{lastPage:b})))}function _n(n){var e=W({filters:{trackType:1}}),t=Object(l.a)(e,2),a=t[0],o=t[1],i=r.a.useMemo(function(){return a&&a.data.map(function(n){return r.a.createElement(gn,{key:n.id,item:n})})},[a]);return r.a.createElement(Qn,Object.assign({title:"Originals",tracksData:a,loading:o},n),i)}function $n(n){var e=W({filters:{trackType:5}}),t=Object(l.a)(e,2),a=t[0],o=t[1],i=r.a.useMemo(function(){return a&&a.data.map(function(n){return r.a.createElement(gn,{key:n.id,item:n})})},[a]);return r.a.createElement(Qn,Object.assign({title:"Remixes",tracksData:a,loading:o},n),i)}function ne(n){var e=W({filters:{trackType:2}}),t=Object(l.a)(e,2),a=t[0],o=t[1],i=r.a.useMemo(function(){return a&&a.data.map(function(n){return r.a.createElement(gn,{key:n.id,item:n})})},[a]);return r.a.createElement(Qn,Object.assign({title:"Mixtapes",tracksData:a,loading:o},n),i)}function ee(n){var e=W({filters:{trackType:3}}),t=Object(l.a)(e,2),a=t[0],o=t[1],i=r.a.useMemo(function(){return a&&a.data.map(function(n){return r.a.createElement(gn,{key:n.id,item:n})})},[a]);return r.a.createElement(Qn,Object.assign({title:"Mashups",tracksData:a,loading:o},n),i)}function te(n){var e=W({filters:{trackType:4,mediaType:2}}),t=Object(l.a)(e,2),a=t[0],o=t[1],i=r.a.useMemo(function(){return a&&a.data.map(function(n){return r.a.createElement(gn,{key:n.id,item:n})})},[a]);return r.a.createElement(Qn,Object.assign({title:"Videos",tracksData:a,loading:o},n),i)}var ae=t(40),re=t(41);function oe(){var n=Object(v.a)(["\n  color: ",";\n  height: 2.2rem;\n  width: 2.2rem;\n\n  > svg {\n    width: 2.2rem;\n    height: 2.2rem;\n  }\n"]);return oe=function(){return n},n}function ie(){var n=Object(v.a)(["\n  cursor: pointer;\n  position: ",";\n  top: 0.55rem;\n  right: 0;\n  background: none;\n  outline: none;\n  border: none;\n  padding: 1.5rem;\n  z-index: 99999;\n  display: none;\n  touch-action: manipulation;\n\n  @media (max-width: ",") {\n    display: block;\n  }\n"]);return ie=function(){return n},n}var ce=w.a.button(ie(),function(n){return n.showMobileMenu?"fixed":"absolute"},f.breakpoints.tablet),le=w.a.linearGradient(oe(),f.colors.accent);function ue(){var n=m()().history,e=r.a.useContext(g),t=e.state.showMobileMenu,a=e.dispatch,o=r.a.useCallback(function(){a({type:"TOGGLE_SHOW_MOBILE_MENU"})},[a]);return r.a.useEffect(function(){var n=document.getElementById("hamburger-button");n&&n.addEventListener("touchstart",o)},[a,o]),n.listen(function(){a({type:"HIDE_MOBILE_MENU"})}),r.a.createElement(ce,{id:"hamburger-button",showMobileMenu:t,onClick:Yn.isBrowser&&o},r.a.createElement(le,{as:t?re.a:ae.a}))}function se(){var n=Object(v.a)(["\n  margin-left: ",";\n\n  @media (max-width: ",") {\n    margin-left: 0;\n  }\n"]);return se=function(){return n},n}function me(){var n=Object(v.a)(["\n  width: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  padding: 2.5rem;\n  padding-top: 6rem;\n  color: ",";\n  border-right: 1px solid ",";\n  background-color: ",";\n\n  @media (max-width: ",") {\n    display: ",";\n    border-right: none;\n    width: 100%;\n    right: 0;\n    padding: 2.35rem;\n    z-index: 2;\n    background-color: ",";\n  }\n"]);return me=function(){return n},n}function de(){var n=Object(v.a)(["\n  position: relative;\n  background-color: ",";\n  min-height: 100vh;\n"]);return de=function(){return n},n}var be=w.a.div(de(),function(n){return n.bgColor}),fe=w.a.div(me(),"20vw",f.colors.white,Object(d.b)(.4,f.colors.accent),function(n){return Object(d.a)(.03,n.bgColor)},f.breakpoints.tablet,function(n){return n.showMobileMenu?"block":"none"},function(n){return Object(d.b)(.03,Object(d.a)(.03,n.bgColor))}),he=w.a.main(se(),"20vw",f.breakpoints.tablet);var pe=function(){var n=r.a.useContext(g).state,e=n.backgroundColor,t=n.showMobileMenu;return r.a.useEffect(function(){var n=document.getElementById("main-container");(t?O.disableBodyScroll:O.enableBodyScroll)(n)},[t]),r.a.createElement(be,{bgColor:e,showMobileMenu:t,id:"main-container"},r.a.createElement(ue,null),r.a.createElement(fe,{bgColor:e,showMobileMenu:t},r.a.createElement(F,null)),r.a.createElement(he,null,r.a.createElement(y.Switch,null,r.a.createElement(y.Route,{path:"/originals",component:_n}),r.a.createElement(y.Route,{path:"/remixes",component:$n}),r.a.createElement(y.Route,{path:"/mixtapes",component:ne}),r.a.createElement(y.Route,{path:"/mashups",component:ee}),r.a.createElement(y.Route,{path:"/videos",component:te}),r.a.createElement(y.Redirect,{from:"",to:"/originals"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null,r.a.createElement(function(n){var e=n.children,t=function(){var n=m()().location,e=r.a.useState(f.colors.backgrounds.purple),t=Object(l.a)(e,2),a=t[0],o=t[1];return r.a.useEffect(function(){var e=function(){switch(n.pathname){case"/":case"/originals":return f.colors.backgrounds.blue;case"/remixes":return f.colors.backgrounds.orange;case"/mixtapes":return f.colors.backgrounds.green;case"/mashups":return f.colors.backgrounds.purple;case"/videos":return f.colors.backgrounds.yellow;default:return"black"}}();o(e)},[n]),a}(),a=r.a.useReducer(p,h),o=Object(l.a)(a,2),i=o[0],c=o[1];return t!==i.backgroundColor&&c({type:"SET_BACKGROUND_COLOR",backgroundColor:t}),r.a.createElement(g.Provider,{value:{state:i,dispatch:c}},e)},null,r.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.0b2d46b9.chunk.js.map