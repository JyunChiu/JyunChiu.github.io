(this.webpackJsonptestreactapp=this.webpackJsonptestreactapp||[]).push([[1],{147:function(n,e,t){},148:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(34),o=t.n(i),c=t(24),s=t(17),l=t(25),u=t(68),d=t(16),f=t(63),m=t(15),h=t(8),p=t(149),b="COMMON___SWITCH_THEME_COLOR";var v=Object(p.a)(Object(m.a)({},b,(function(n,e){var t=e.val;return Object(h.a)({},n,{isDark:t})})),{isDark:!1}),E=t(50),g=Object(p.a)(Object(m.a)({},E.a.HOME___TEST_ACTION,(function(n,e){console.log("REDUCER -----",e);var t=e.test;return Object(h.a)({},n,{test:t})})),{test:123}),x=t(62),O=Object(p.a)(Object(m.a)({},x.a.HOME___TEST_ACTION,(function(n,e){console.log("REDUCER -----",e);var t=e.test;return Object(h.a)({},n,{test:t})})),{test:123}),w=function(n){return Object(d.c)({router:Object(l.b)(n),common:v,about:g,portfolio:O})},T={reduxThunkMiddleware:t(67).a};var k=Object(u.a)(),j=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(f.a)(n),r=d.d,a=r(Object(d.a)(T.reduxThunkMiddleware,t)),i=Object(d.e)(w(n),e,a);return i}(k,{}),A=t(4),y=t(22),C=t(10),_=t(11),D=t(48),H=t(70),S=t.n(H),I=t(35),N=t(71),B=t.n(N),L=[{label:"PORTFOLIO",path:"/portfolio"},{label:"ABOUT",path:"/about"}],M=t(2);function R(){var n=Object(C.a)(["\n  display: inline-block;\n  width: ",";\n  height: auto;\n  position: relative;\n  cursor: pointer;\n  opacity: ",";\n  pointer-events: ",';\n  input[type="checkbox"] {\n    display: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; \n    z-index: 2;\n    cursor: pointer;\n    &.active svg,\n    &:checked + svg {\n      rect {\n        opacity: 0.5;\n        fill: ',";\n      };\n      circle {\n        fill: ",";\n        transform: translate(48px, 0);\n      };\n    }\n  }\n  &.disabled {\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  /* &:active {\n    svg {\n      circle {\n        transform: scale(1.06);\n        stroke: #fff;\n        stroke-width: 2px;\n      }\n    }\n  } */\n  svg {\n    width: 100%;\n    height: auto;\n    path,\n    circle {\n      transition: 0.3s ease all;\n    }\n    rect {\n      fill: #e0e0e0;\n    }\n    circle {\n      fill: #f1f1f1;\n    }\n  }\n"]);return R=function(){return n},n}var W=_.a.label(R(),(function(n){return n.width}),(function(n){return n.disabled?.3:1}),(function(n){return n.disabled?"none":""}),(function(n){return n.color}),(function(n){return n.color})),P=function(n){return a.a.createElement(W,Object.assign({className:"switch"},n),a.a.createElement("input",Object.assign({type:"checkbox"},n)),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 106 75"},a.a.createElement("g",null,a.a.createElement("rect",{x:"0.5",y:"19",width:"100",height:"35",rx:"20"}),a.a.createElement("circle",{cx:"28",cy:"35",r:"28"}))))};P.defaultProps={disabled:!1,width:"3rem",color:"#2dd1ff",checked:!1};var F=P,z=t(46);function K(){var n=Object(C.a)(["\n  display: flex;\n  flex-direction: ",";\n\n  >a{\n    display: block;\n    margin: 0.5rem;\n\n    &:hover{\n      transform: translateX(5px);\n      transition: .5s ease all;\n    }\n  }\n"]);return K=function(){return n},n}var G=_.a.div(K(),(function(n){return n.direction})),U=function(n){var e=n.isDark,t=n.direction,i=n.isMenu,o=Object(r.useState)(M.a.WHITE),c=Object(I.a)(o,2),s=c[0],l=c[1];Object(r.useEffect)((function(){var n;n=i?e?M.a.BLACK:M.a.WHITE:e?M.a.WHITE:M.a.BLACK,l(n)}),[e,i]);var u={size:18,style:{fill:s}};return a.a.createElement(G,{isDark:e,direction:t},a.a.createElement("a",{href:"mailto:jyunc1512@gmail.com"},a.a.createElement(z.a,u)),a.a.createElement("a",{href:"http://linkedin.com/in/jin-chiu-a165ab142"},a.a.createElement(z.b,u)))};U.defaultProps={isMenu:!1,direction:"row"};var X=U;function J(){var n=Object(C.a)(["\n  display: none;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  letter-spacing: 2px;\n  height: 100vh;\n  text-align: right;\n  padding: 5rem 0 2rem;\n  background: rgb(152, 167, 175, 0.7);\n  @media "," {\n    width: 18rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: transform 0.4s ease-in-out;\n    z-index: 10;\n    box-shadow: 2px 0px 15px 0 rgba(0, 0, 0, 0.5);\n    transform: ",";\n    backdrop-filter: blur(3px);\n\n    .site-name{\n      width: 5rem;\n      font-family: ",";\n      font-weight: 600;\n      font-size: 1rem;\n      padding: 1rem;\n      background: #acbac1;\n      color: ",";\n      margin: 1rem 0 2.5rem;\n      box-shadow: 3px 4px 8px 0px #6F6F6F;\n      cursor: pointer;\n      &:hover{\n        box-shadow: 3px 2px 4px 0px #6F6F6F;\n        transition: .5s ease all;\n      }\n    }\n\n    .switch-box{\n      align-self: center;\n      padding-top: 2rem;\n      border-top: 1px solid #7f939c;\n      border-color: ",";\n      display: flex;\n      align-items: center;\n      font-size: 0.6rem;\n      justify-content: space-between;\n      width: 10rem;\n      justify-content: space-between;\n      color: ",";\n    }\n\n    .menu--social-box{\n      margin-top: 2rem;\n    }\n  }\n  @media "," {\n    width: 15rem;\n    .site-name{\n      width: 3rem;\n    }\n  }\n"]);return J=function(){return n},n}var Y=_.a.div(J(),M.d.S,(function(n){return n.isOpen?"translateX(0)":"translateX(-150%)"}),M.b.SITE_NAME,(function(n){return n.isDark?M.a.BLACK:M.a.WHITE}),(function(n){return n.isDark?M.a.BLACK:M.a.WHITE}),(function(n){return n.isDark?M.a.BLACK:M.a.WHITE}),M.d.XS),q=function(n){var e=n.isHambugerOpen,t=n.isDark,r=n.switchThemeColor;return a.a.createElement(Y,{isOpen:e,isDark:t},a.a.createElement("div",{className:"site-name",onClick:function(){return k.push("/portfolio")}},"Jin Chiu"),a.a.createElement("div",{className:"switch-box"},"LIGHT",a.a.createElement(F,{checked:t,onChange:r,color:"#4c4c4c"}),"DARK"),a.a.createElement("div",{className:"menu--social-box"},a.a.createElement(X,{isMenu:!0,isDark:t,direction:"column"})))};function V(){var n=Object(C.a)(["\n  display: none;\n  @media "," {\n    position: absolute;\n    top: 1.8rem;\n    left: 2.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 1rem;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n    z-index: 99;\n\n    &:focus {\n      outline: none;\n    }\n\n    &:hover {\n      opacity: 0.8;\n    }\n\n    div {\n      width: 1.3rem;\n      height: 3px;\n      background: ",";\n      transition: all 0.3s linear;\n      position: relative;\n      transform-origin: 1px;\n\n      :first-child {\n        transform: ",";\n      }\n\n      /* :nth-child(2) {\n        opacity: ",";\n        transform: ",";\n      } */\n\n      :nth-child(2) {\n        width: ",";\n        transform: ",";\n      }\n    }\n  }\n"]);return V=function(){return n},n}var Q=_.a.button(V(),M.d.S,(function(n){return n.isOpen?"rgba(255, 255, 255, 1)":M.a.GRAY}),(function(n){return n.isOpen?"rotate(45deg)":"rotate(0)"}),(function(n){return n.isOpen?"0":"1"}),(function(n){return n.isOpen?"translateX(20px)":"translateX(0)"}),(function(n){return n.isOpen?"1.3rem":"0.8rem"}),(function(n){return n.isOpen?"translateY(5px) rotate(-45deg)":"rotate(0)"})),Z=function(n){var e=n.isHambugerOpen,t=n.setIsHambugerOpen;return a.a.createElement(Q,{isOpen:e,onClick:function(){return t(!e)}},a.a.createElement("div",null),a.a.createElement("div",null))};function $(){var n=Object(C.a)(["\n  margin: 0rem 2rem 0.3rem;\n  text-decoration: none;\n  color: ",";\n  opacity: 0.4;\n\n  &.current{\n    opacity: 1;\n    &:after {\n      content: '';\n      display: block;\n      border-bottom: 4px solid #7f939c;\n      width: 2rem;\n      height: 0.4rem;\n      transition: width 0.6s ease all;\n    }\n  }\n\n  &:hover{\n    opacity: .8;\n  }\n\n  @media "," {\n    margin: 0rem 1rem 0rem;\n    font-size: ",";\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 1.2rem 8%;\n  letter-spacing: 2px;\n  background: ",";\n  color: ",";\n\n  .left-box {\n    display: flex;\n    align-self: center;\n    .site-name{\n      font-family: ",";\n      font-weight: 600;\n      font-size: ",";\n      padding: 1rem;\n      background: #acbac1;\n      color: ",";\n      margin-right: 2rem;\n      box-shadow: 3px 4px 8px 0px ",";\n      cursor: pointer;\n      &:hover{\n        box-shadow: 3px 2px 4px 0px ",";\n        transition: .5s ease all;\n      }\n    }\n  }\n\n  .right-box {\n    display: flex;\n    align-items: flex-start;\n    font-size: ",";\n    padding: 0rem 1rem;\n  }\n\n  .switch-box{\n    align-self: center;\n    padding-left: 1.5rem;\n    border-left: 1px solid #7f939c;\n    display: flex;\n    align-items: center;\n    font-size: 0.6rem;\n    justify-content: space-between;\n    width: 9rem;\n    justify-content: space-between;\n  }\n\n  @media "," {\n    justify-content: flex-end;\n    padding: 1.8rem 5% 1rem;\n    .left-box {\n      display: none;\n    }\n    \n    .right-box {\n     padding: 0\n    }\n  }\n"]);return nn=function(){return n},n}var en=_.a.nav(nn(),(function(n){return n.isDark?M.a.BLACK:M.a.WHITE}),(function(n){return n.isDark?M.a.WHITE:M.a.BLACK}),M.b.SITE_NAME,M.c.WEB.BASE,(function(n){return n.isDark?M.a.BLACK:M.a.WHITE}),(function(n){return n.isDark?"#598683":"#6F6F6F"}),(function(n){return n.isDark?"#598683":"#6F6F6F"}),M.c.WEB.BASE,M.d.S),tn=Object(_.a)(c.b)($(),(function(n){return n.isDark?M.a.WHITE:M.a.BLACK}),M.d.S,M.c.MOB.BASE),rn=function(n){var e=n.isDark,t=n.switchThemeColor,i=Object(r.useState)(!1),o=Object(I.a)(i,2),c=o[0],s=o[1];Object(r.useEffect)((function(){return window.addEventListener("resize",l),l(),function(){return window.removeEventListener("resize",l)}}),[]);var l=B()((function(){window.innerWidth>500&&s(!1)}),600);return a.a.createElement(r.Fragment,null,a.a.createElement(en,{isDark:e},a.a.createElement("div",{className:"left-box"},a.a.createElement("div",{className:"site-name",onClick:function(){return k.push("/portfolio")}},"Jin Chiu"),a.a.createElement("div",{className:"switch-box"},"LIGHT",a.a.createElement(F,{checked:e,onChange:t,color:"#4c4c4c"}),"DARK")),a.a.createElement("div",{className:"right-box"},L.map((function(n){return a.a.createElement(tn,{isDark:e,to:n.path,activeClassName:"current"},n.label)})))),a.a.createElement(Z,{isHambugerOpen:c,setIsHambugerOpen:s}),a.a.createElement(q,{isDark:e,switchThemeColor:t,isHambugerOpen:c}))};rn.defaultProps={};var an=rn;function on(){var n=Object(C.a)(["\n  display: flex;\n  background: ",";\n  color: ",";\n  justify-content: center;\n  letter-spacing: 3px;\n  font-size: 12px;\n  padding: 1rem 0 2rem;\n  \n  >div{\n    transform: scale(0.8);\n  }\n  @media "," {\n    >div{\n    transform: scale(0.7);\n    }\n  }\n"]);return on=function(){return n},n}var cn=_.a.footer(on(),(function(n){return n.isDark?"#2f2f2f":"#FFFFFF"}),(function(n){return n.isDark?M.a.WHITE:M.a.BLACK}),M.d.XS),sn=function(n){var e=n.isDark;return a.a.createElement(cn,{isDark:e},a.a.createElement("div",null,"\xa9 Designed And Coded By JIN CHIU  2020"))};sn.defaultProps={};var ln=sn;function un(){var n=Object(C.a)(["\n  position: relative;\n\n  .social-box{\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    bottom: 5rem;\n    left: 3rem;\n  }\n\n  .scroll-up-btn{\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 50%;\n    background: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 3px 8px 0px ",";\n    .arrow {\n      width: .5rem;\n      height: .5rem;\n      border-bottom: 3px solid;\n      border-left: 3px solid;\n      border-color: ",";\n      transform: rotate(135deg);\n      margin-top: 0.3rem;\n    }\n  }\n\n  @media "," {\n    .social-box{\n      display:none;\n    }\n  }\n\n"]);return un=function(){return n},n}var dn=_.a.div(un(),(function(n){return n.isDark?M.a.WHITE:M.a.BLACK}),(function(n){return n.isDark?"#598683":"#929292"}),(function(n){return n.isDark?M.a.GRAY:"#acbac1"}),M.d.S),fn={switchThemeColor:function(n){var e=n.target.checked;return{type:b,val:e}}},mn=Object(D.a)(Object(s.c)((function(n){return{isDark:n.common.isDark}}),fn))((function(n){var e=n.isDark,t=n.switchThemeColor;return a.a.createElement(dn,{isDark:e},a.a.createElement(an,{isDark:e,switchThemeColor:t}),a.a.createElement("div",null,n.children),a.a.createElement(ln,{isDark:e}),a.a.createElement("div",{className:"social-box"},a.a.createElement(X,{isDark:e,direction:"column"})),a.a.createElement(S.a,{showUnder:80,style:{bottom:window.innerWidth>500?60:50,right:window.innerWidth>500?80:20}},a.a.createElement("div",{className:"scroll-up-btn"},a.a.createElement("div",{className:"arrow"}))))})),hn=function(){return a.a.createElement(mn,null,a.a.createElement(A.c,null,a.a.createElement(A.a,{exact:!0,path:"/",component:Object(y.a)((function(){return Promise.all([t.e(4),t.e(0)]).then(t.bind(null,210))}))}),a.a.createElement(A.a,{exact:!0,path:"/about",component:Object(y.a)((function(){return Promise.all([t.e(4),t.e(0)]).then(t.bind(null,211))}))}),a.a.createElement(A.a,{exact:!0,path:"/portfolio",component:Object(y.a)((function(){return Promise.all([t.e(4),t.e(0)]).then(t.bind(null,210))}))}),a.a.createElement(A.a,{exact:!0,path:"/portfolio/rebas",component:Object(y.a)((function(){return Promise.all([t.e(4),t.e(0)]).then(t.bind(null,209))}))}),a.a.createElement(A.a,{exact:!0,path:"/portfolio/dailyPractice",component:Object(y.a)((function(){return Promise.all([t.e(4),t.e(0)]).then(t.bind(null,212))}))})))},pn=(t(147),function(){return a.a.createElement(s.a,{store:j},a.a.createElement(l.a,{history:k},a.a.createElement(c.a,null,a.a.createElement(hn,null))))});o.a.render(a.a.createElement(pn,null),document.querySelector("#root"))},2:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return o}));var r={BLACK:"#333333",WHITE:"#f9f9f9",LIGHT_GRAY:"#acbac1",GRAY:"#7f939c",SHADOW_GRAY:"b7b7b7"},a={SITE_NAME:"Cinzel",PROJECT_NO:"Playfair Display",PROJECT_NAME:"Playfair Display"},i={WEB:{SMALL:"0.8rem",BASE:"0.9rem",TITLE:"1.8rem"},MOB:{BASE:"0.8rem",TITLE:"1.5rem"}},o={M:"(max-width: 1367px)",S:"(max-width: 1241px)",XS:"(max-width: 550px)"}},36:function(n,e,t){"use strict";var r=function(n,e){return Math.floor(Math.random()*(n-e+1))+e},a=1,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"SOMETHING_WRONG";return new Promise((function(o,c){if("inOrder"===e){if(a%2===1){var s={data:t};setTimeout((function(){return o(s)}),n)}else{var l={data:i};setTimeout((function(){return c(l)}),n)}a+=1}if("random"===e){if(r(1,100)%2===1){var u={data:t};setTimeout((function(){return o(u)}),n)}else{var d={data:i};setTimeout((function(){return c(d)}),n)}a+=1}if("success"===e){var f={data:t};setTimeout((function(){return o(f)}),n)}if("fail"===e){var m={data:i};setTimeout((function(){return c(m)}),n)}}))},o=t(19),c=t(41),s=t.n(c),l=t(8),u=t(65),d=t(66),f=t.n(d),m=t(42),h=t.n(m);function p(n){return new Promise((function(e){var t=new FileReader;t.onload=function(n){var t=n.srcElement.result||"";e(t)},t.onerror=function(n){e("")},t.readAsText(n)}))}var b={baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL,timeout:1e4,withCredentials:!0},v=h.a.create(b);v.interceptors.response.use((function(n){return n}),function(){var n=Object(u.a)(s.a.mark((function n(e){var t,r,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!((t=f()(e,["response","data"],""))instanceof Blob)){n.next=8;break}return n.next=4,p(t);case 4:if(!(r=n.sent)){n.next=8;break}return a=Object(l.a)({},e,{response:Object(l.a)({},e.response,{data:r})}),n.abrupt("return",Promise.reject(a));case 8:return n.abrupt("return",Promise.reject(e));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());var E={instance:v,mergeHeaders:function(n,e){var t={};if(e){var r="".concat(sessionStorage.getItem("tokentype")," ").concat(sessionStorage.getItem("token"));r&&(t=Object(l.a)({},t,{Authorization:r}))}return n&&(t=Object(l.a)({},t,{},n)),t},get:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.withToken,r=void 0!==t&&t,a=e.headers,i=Object(o.a)(e,["withToken","headers"]);return this.instance(Object(l.a)({method:"get",url:n,headers:this.mergeHeaders(a,r)},i)).catch(this.handleApiError)},cancelGet:function(n){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.withToken,a=void 0!==r&&r,i=t.headers,c=Object(o.a)(t,["withToken","headers"]),s=m.CancelToken.source();return{send:function(){return e.instance(Object(l.a)({method:"get",url:n,headers:e.mergeHeaders(i,a),cancelToken:s.token},c)).catch(e.handleApiError)},cancel:s.cancel}},post:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.withToken,r=void 0!==t&&t,a=e.headers,i=e.data,c=Object(o.a)(e,["withToken","headers","data"]);return this.instance(Object(l.a)({method:"post",url:n,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},delete:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.withToken,r=void 0!==t&&t,a=e.headers,i=e.data,c=Object(o.a)(e,["withToken","headers","data"]);return this.instance(Object(l.a)({method:"delete",url:n,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},put:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.withToken,r=void 0!==t&&t,a=e.headers,i=e.data,c=Object(o.a)(e,["withToken","headers","data"]);return this.instance(Object(l.a)({method:"put",url:n,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},patch:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.withToken,r=void 0!==t&&t,a=e.headers,i=e.data,c=Object(o.a)(e,["withToken","headers","data"]);return this.instance(Object(l.a)({method:"patch",url:n,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},handleApiError:function(n){var e=n.response,t=e.data,r=401===e.status&&"authorized expire"===t;if(!n.response)throw new Error("Unexpected Error: ".concat(n.message));if(r)throw sessionStorage.clear(),new Error("authorized expire");throw n}},g=!0,x={testApi:function(n){return console.log("Resource -----",n),g?i(200,"success",{error:!1,message:"Get successfully",test:n}):E.get("/api/photos?limit=10")}};e.a={HomeResource:x}},50:function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i}));var r=t(36),a={HOME___TEST_ACTION:"HOME___TEST_ACTION"};function i(n){return console.log("ACTION -----",n),function(e){return r.a.HomeResource.testApi(n).then((function(n){var t=n.data.test;console.log("ACtion response",n),e({type:a.HOME___TEST_ACTION,test:t})})).catch((function(n){return console.log(n)}))}}},62:function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i}));var r=t(36),a={HOME___TEST_ACTION:"HOME___TEST_ACTION"};function i(n){return console.log("ACTION -----",n),function(e){return r.a.HomeResource.testApi(n).then((function(n){var t=n.data.test;console.log("ACtion response",n),e({type:a.HOME___TEST_ACTION,test:t})})).catch((function(n){return console.log(n)}))}}},75:function(n,e,t){n.exports=t(148)}},[[75,2,3]]]);
//# sourceMappingURL=main.371989cb.chunk.js.map