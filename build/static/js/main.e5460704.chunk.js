(this.webpackJsonptestreactapp=this.webpackJsonptestreactapp||[]).push([[2],{145:function(e,n,t){},146:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(34),o=t.n(i),c=t(24),s=t(17),l=t(25),u=t(65),d=t(15),f=t(59),m=t(20),h=t(11),p=t(147),b="COMMON___SWITCH_THEME_COLOR";var v=Object(p.a)(Object(m.a)({},b,(function(e,n){var t=n.val;return Object(h.a)({},e,{isDark:t})})),{isDark:!1}),E=t(60),g=Object(p.a)(Object(m.a)({},E.a.HOME___TEST_ACTION,(function(e,n){console.log("REDUCER -----",n);var t=n.test;return Object(h.a)({},e,{test:t})})),{test:123}),x=function(e){return Object(d.c)({router:Object(l.b)(e),common:v,portfolio:g})},O={reduxThunkMiddleware:t(64).a};var w=Object(u.a)(),k=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(f.a)(e),r=d.d,a=r(Object(d.a)(O.reduxThunkMiddleware,t)),i=Object(d.e)(x(e),n,a);return i}(w,{}),T=t(4),j=t(16),y=t(9),A=t(10),C=t(47),D=t(67),_=t.n(D),H=t(35),S=t(68),I=t.n(S),N=[{label:"PORTFOLIO",path:"/portfolio"},{label:"ABOUT",path:"/about"}],B=t(2);function R(){var e=Object(y.a)(["\n  display: inline-block;\n  width: ",";\n  height: auto;\n  position: relative;\n  cursor: pointer;\n  opacity: ",";\n  pointer-events: ",';\n  input[type="checkbox"] {\n    display: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; \n    z-index: 2;\n    cursor: pointer;\n    &.active svg,\n    &:checked + svg {\n      rect {\n        opacity: 0.5;\n        fill: ',";\n      };\n      circle {\n        fill: ",";\n        transform: translate(48px, 0);\n      };\n    }\n  }\n  &.disabled {\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  /* &:active {\n    svg {\n      circle {\n        transform: scale(1.06);\n        stroke: #fff;\n        stroke-width: 2px;\n      }\n    }\n  } */\n  svg {\n    width: 100%;\n    height: auto;\n    path,\n    circle {\n      transition: 0.3s ease all;\n    }\n    rect {\n      fill: #e0e0e0;\n    }\n    circle {\n      fill: #f1f1f1;\n    }\n  }\n"]);return R=function(){return e},e}var L=A.a.label(R(),(function(e){return e.width}),(function(e){return e.disabled?.3:1}),(function(e){return e.disabled?"none":""}),(function(e){return e.color}),(function(e){return e.color})),P=function(e){return a.a.createElement(L,Object.assign({className:"switch"},e),a.a.createElement("input",Object.assign({type:"checkbox"},e)),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 106 75"},a.a.createElement("g",null,a.a.createElement("rect",{x:"0.5",y:"19",width:"100",height:"35",rx:"20"}),a.a.createElement("circle",{cx:"28",cy:"35",r:"28"}))))};P.defaultProps={disabled:!1,width:"3rem",color:"#2dd1ff",checked:!1};var W=P,M=t(45);function F(){var e=Object(y.a)(["\n  display: flex;\n  flex-direction: ",";\n\n  >a{\n    display: block;\n    margin: 0.5rem;\n\n    &:hover{\n      transform: translateX(5px);\n      transition: .5s ease all;\n    }\n  }\n"]);return F=function(){return e},e}var z=A.a.div(F(),(function(e){return e.direction})),K=function(e){var n=e.isDark,t=e.direction,i=e.isMenu,o=Object(r.useState)(B.a.WHITE),c=Object(H.a)(o,2),s=c[0],l=c[1];Object(r.useEffect)((function(){var e;e=i?n?B.a.BLACK:B.a.WHITE:n?B.a.WHITE:B.a.BLACK,l(e)}),[n,i]);var u={size:18,style:{fill:s}};return a.a.createElement(z,{isDark:n,direction:t},a.a.createElement("a",{href:"mailto:jyunc1512@gmail.com"},a.a.createElement(M.a,u)),a.a.createElement("a",{href:"http://linkedin.com/in/jin-chiu-a165ab142"},a.a.createElement(M.b,u)))};K.defaultProps={isMenu:!1,direction:"row"};var G=K;function U(){var e=Object(y.a)(["\n  display: none;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  letter-spacing: 2px;\n  height: 100vh;\n  text-align: right;\n  padding: 5rem 0 2rem;\n  background: rgb(152, 167, 175, 0.7);\n  @media "," {\n    width: 18rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: transform 0.4s ease-in-out;\n    z-index: 10;\n    box-shadow: 2px 0px 15px 0 rgba(0, 0, 0, 0.5);\n    transform: ",";\n    backdrop-filter: blur(3px);\n\n    .site-name{\n      width: 5rem;\n      font-family: ",";\n      font-weight: 600;\n      font-size: 1rem;\n      padding: 1rem;\n      background: #acbac1;\n      color: ",";\n      margin: 1rem 0 2.5rem;\n      box-shadow: 3px 4px 8px 0px #6F6F6F;\n      cursor: pointer;\n      &:hover{\n        box-shadow: 3px 2px 4px 0px #6F6F6F;\n        transition: .5s ease all;\n      }\n    }\n\n    .switch-box{\n      align-self: center;\n      padding-top: 2rem;\n      border-top: 1px solid #7f939c;\n      border-color: ",";\n      display: flex;\n      align-items: center;\n      font-size: 0.6rem;\n      justify-content: space-between;\n      width: 10rem;\n      justify-content: space-between;\n      color: ",";\n    }\n\n    .menu--social-box{\n      margin-top: 2rem;\n    }\n  }\n  @media "," {\n    width: 15rem;\n    .site-name{\n      width: 3rem;\n    }\n  }\n"]);return U=function(){return e},e}var X=A.a.div(U(),B.d.S,(function(e){return e.isOpen?"translateX(0)":"translateX(-150%)"}),B.b.SITE_NAME,(function(e){return e.isDark?B.a.BLACK:B.a.WHITE}),(function(e){return e.isDark?B.a.BLACK:B.a.WHITE}),(function(e){return e.isDark?B.a.BLACK:B.a.WHITE}),B.d.XS),J=function(e){var n=e.isHambugerOpen,t=e.isDark,r=e.switchThemeColor;return a.a.createElement(X,{isOpen:n,isDark:t},a.a.createElement("div",{className:"site-name",onClick:function(){return w.push("/portfolio")}},"Jin Chiu"),a.a.createElement("div",{className:"switch-box"},"LIGHT",a.a.createElement(W,{checked:t,onChange:r,color:"#4c4c4c"}),"DARK"),a.a.createElement("div",{className:"menu--social-box"},a.a.createElement(G,{isMenu:!0,isDark:t,direction:"column"})))};function Y(){var e=Object(y.a)(["\n  display: none;\n  @media "," {\n    position: absolute;\n    top: 1.8rem;\n    left: 2.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 1rem;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n    z-index: 99;\n\n    &:focus {\n      outline: none;\n    }\n\n    &:hover {\n      opacity: 0.8;\n    }\n\n    div {\n      width: 1.3rem;\n      height: 3px;\n      background: ",";\n      transition: all 0.3s linear;\n      position: relative;\n      transform-origin: 1px;\n\n      :first-child {\n        transform: ",";\n      }\n\n      /* :nth-child(2) {\n        opacity: ",";\n        transform: ",";\n      } */\n\n      :nth-child(2) {\n        width: ",";\n        transform: ",";\n      }\n    }\n  }\n"]);return Y=function(){return e},e}var q=A.a.button(Y(),B.d.S,(function(e){return e.isOpen?"rgba(255, 255, 255, 1)":B.a.GRAY}),(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(20px)":"translateX(0)"}),(function(e){return e.isOpen?"1.3rem":"0.8rem"}),(function(e){return e.isOpen?"translateY(5px) rotate(-45deg)":"rotate(0)"})),V=function(e){var n=e.isHambugerOpen,t=e.setIsHambugerOpen;return a.a.createElement(q,{isOpen:n,onClick:function(){return t(!n)}},a.a.createElement("div",null),a.a.createElement("div",null))};function Q(){var e=Object(y.a)(["\n  margin: 0rem 2rem 0.3rem;\n  text-decoration: none;\n  color: ",";\n  opacity: 0.4;\n\n  &.current{\n    opacity: 1;\n    &:after {\n      content: '';\n      display: block;\n      border-bottom: 4px solid #7f939c;\n      width: 2rem;\n      height: 0.4rem;\n      transition: width 0.6s ease all;\n    }\n  }\n\n  &:hover{\n    opacity: .8;\n  }\n\n  @media "," {\n    margin: 0rem 1rem 0rem;\n    font-size: ",";\n  }\n"]);return Q=function(){return e},e}function Z(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 1.2rem 8%;\n  letter-spacing: 2px;\n  background: ",";\n  color: ",";\n\n  .left-box {\n    display: flex;\n    align-self: center;\n    .site-name{\n      font-family: ",";\n      font-weight: 600;\n      font-size: ",";\n      padding: 1rem;\n      background: #acbac1;\n      color: ",";\n      margin-right: 2rem;\n      box-shadow: 3px 4px 8px 0px ",";\n      cursor: pointer;\n      &:hover{\n        box-shadow: 3px 2px 4px 0px ",";\n        transition: .5s ease all;\n      }\n    }\n  }\n\n  .right-box {\n    display: flex;\n    align-items: flex-start;\n    font-size: ",";\n    padding: 0rem 1rem;\n  }\n\n  .switch-box{\n    align-self: center;\n    padding-left: 1.5rem;\n    border-left: 1px solid #7f939c;\n    display: flex;\n    align-items: center;\n    font-size: 0.6rem;\n    justify-content: space-between;\n    width: 9rem;\n    justify-content: space-between;\n  }\n\n  @media "," {\n    justify-content: flex-end;\n    padding: 1.8rem 5% 1rem;\n    .left-box {\n      display: none;\n    }\n    \n    .right-box {\n     padding: 0\n    }\n  }\n"]);return Z=function(){return e},e}var $=A.a.nav(Z(),(function(e){return e.isDark?B.a.BLACK:"#FFFFFF"}),(function(e){return e.isDark?B.a.WHITE:B.a.BLACK}),B.b.SITE_NAME,B.c.WEB.BASE,(function(e){return e.isDark?B.a.BLACK:B.a.WHITE}),(function(e){return e.isDark?"#598683":"#6F6F6F"}),(function(e){return e.isDark?"#598683":"#6F6F6F"}),B.c.WEB.BASE,B.d.S),ee=Object(A.a)(c.b)(Q(),(function(e){return e.isDark?B.a.WHITE:B.a.BLACK}),B.d.S,B.c.MOB.BASE),ne=function(e){var n=e.isDark,t=e.switchThemeColor,i=Object(r.useState)(!1),o=Object(H.a)(i,2),c=o[0],s=o[1];Object(r.useEffect)((function(){return window.addEventListener("resize",l),l(),function(){return window.removeEventListener("resize",l)}}),[]);var l=I()((function(){window.innerWidth>500&&s(!1)}),600);return a.a.createElement(r.Fragment,null,a.a.createElement($,{isDark:n},a.a.createElement("div",{className:"left-box"},a.a.createElement("div",{className:"site-name",onClick:function(){return w.push("/portfolio")}},"Jin Chiu"),a.a.createElement("div",{className:"switch-box"},"LIGHT",a.a.createElement(W,{checked:n,onChange:t,color:"#4c4c4c"}),"DARK")),a.a.createElement("div",{className:"right-box"},N.map((function(e){return a.a.createElement(ee,{isDark:n,to:e.path,activeClassName:"current"},e.label)})))),a.a.createElement(V,{isHambugerOpen:c,setIsHambugerOpen:s}),a.a.createElement(J,{isDark:n,switchThemeColor:t,isHambugerOpen:c}))};ne.defaultProps={};var te=ne;function re(){var e=Object(y.a)(["\n  display: flex;\n  background: ",";\n  color: ",";\n  justify-content: center;\n  letter-spacing: 3px;\n  font-size: 12px;\n  padding: 1rem 0 2rem;\n  \n  >div{\n    transform: scale(0.8);\n  }\n  @media "," {\n    >div{\n    transform: scale(0.7);\n    }\n  }\n"]);return re=function(){return e},e}var ae=A.a.footer(re(),(function(e){return e.isDark?"#2f2f2f":"#f9f9f9"}),(function(e){return e.isDark?B.a.WHITE:B.a.BLACK}),B.d.XS),ie=function(e){var n=e.isDark;return a.a.createElement(ae,{isDark:n},a.a.createElement("div",null,"\xa9 Designed And Coded By JIN CHIU  2020"))};ie.defaultProps={};var oe=ie;function ce(){var e=Object(y.a)(["\n  position: relative;\n\n  .social-box{\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    bottom: 5rem;\n    left: 3rem;\n  }\n\n  .scroll-up-btn{\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 50%;\n    background: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 3px 8px 0px ",";\n    .arrow {\n      width: .5rem;\n      height: .5rem;\n      border-bottom: 3px solid;\n      border-left: 3px solid;\n      border-color: ",";\n      transform: rotate(135deg);\n      margin-top: 0.3rem;\n    }\n  }\n\n  @media "," {\n    .social-box{\n      display:none;\n    }\n  }\n\n"]);return ce=function(){return e},e}var se=A.a.div(ce(),(function(e){return e.isDark?B.a.WHITE:B.a.BLACK}),(function(e){return e.isDark?"#598683":"#929292"}),(function(e){return e.isDark?B.a.GRAY:"#acbac1"}),B.d.S),le={switchThemeColor:function(e){var n=e.target.checked;return{type:b,val:n}}},ue=Object(C.a)(Object(s.c)((function(e){return{isDark:e.common.isDark}}),le))((function(e){var n=e.isDark,t=e.switchThemeColor;return a.a.createElement(se,{isDark:n},a.a.createElement(te,{isDark:n,switchThemeColor:t}),a.a.createElement("div",null,e.children),a.a.createElement(oe,{isDark:n}),a.a.createElement("div",{className:"social-box"},a.a.createElement(G,{isDark:n,direction:"column"})),a.a.createElement(_.a,{showUnder:80,style:{bottom:window.innerWidth>500?60:50,right:window.innerWidth>500?80:20}},a.a.createElement("div",{className:"scroll-up-btn"},a.a.createElement("div",{className:"arrow"}))))})),de=function(){return a.a.createElement(ue,null,a.a.createElement(T.c,null,a.a.createElement(T.a,{exact:!0,path:"/",component:Object(j.a)((function(){return Promise.all([t.e(5),t.e(0)]).then(t.bind(null,225))}))}),a.a.createElement(T.a,{exact:!0,path:"/about",component:Object(j.a)((function(){return Promise.all([t.e(5),t.e(0)]).then(t.bind(null,226))}))}),a.a.createElement(T.a,{exact:!0,path:"/portfolio",component:Object(j.a)((function(){return Promise.all([t.e(5),t.e(0)]).then(t.bind(null,225))}))}),a.a.createElement(T.a,{exact:!0,path:"/portfolio/rebas",component:Object(j.a)((function(){return Promise.all([t.e(5),t.e(0)]).then(t.bind(null,227))}))}),a.a.createElement(T.a,{exact:!0,path:"/portfolio/myWeb",component:Object(j.a)((function(){return Promise.all([t.e(5),t.e(0)]).then(t.bind(null,228))}))}),a.a.createElement(T.a,{exact:!0,path:"/portfolio/others"}),a.a.createElement(T.a,{exact:!0,path:"/portfolio/dailyPractice",component:Object(j.a)((function(){return Promise.all([t.e(5),t.e(0)]).then(t.bind(null,229))}))}),a.a.createElement(T.a,{component:Object(j.a)((function(){return t.e(1).then(t.bind(null,230))}))})))},fe=(t(145),function(){return a.a.createElement(s.a,{store:k},a.a.createElement(l.a,{history:w},a.a.createElement(c.a,null,a.a.createElement(de,null))))});o.a.render(a.a.createElement(fe,null),document.querySelector("#root"))},2:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return o}));var r={BLACK:"#333333",WHITE:"#f9f9f9",LIGHT_GRAY:"#acbac1",GRAY:"#7f939c",SHADOW_GRAY:"b7b7b7"},a={SITE_NAME:"Cinzel",PROJECT_NO:"Playfair Display",PROJECT_NAME:"Playfair Display",ERROR_PAGE_BTN:"Ubuntu",ERROR_PAGE_NUM:"Crimson Text"},i={WEB:{SMALL:"0.8rem",BASE:"0.9rem",TITLE:"1.8rem"},MOB:{BASE:"0.8rem",TITLE:"1.5rem"}},o={M:"(max-width: 1367px)",S:"(max-width: 1241px)",XS:"(max-width: 550px)"}},60:function(e,n,t){"use strict";t.d(n,"a",(function(){return O})),t.d(n,"b",(function(){return w}));var r=function(e,n){return Math.floor(Math.random()*(e-n+1))+n},a=1,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"SOMETHING_WRONG";return new Promise((function(o,c){if("inOrder"===n){if(a%2===1){var s={data:t};setTimeout((function(){return o(s)}),e)}else{var l={data:i};setTimeout((function(){return c(l)}),e)}a+=1}if("random"===n){if(r(1,100)%2===1){var u={data:t};setTimeout((function(){return o(u)}),e)}else{var d={data:i};setTimeout((function(){return c(d)}),e)}a+=1}if("success"===n){var f={data:t};setTimeout((function(){return o(f)}),e)}if("fail"===n){var m={data:i};setTimeout((function(){return c(m)}),e)}}))},o=t(19),c=t(40),s=t.n(c),l=t(11),u=t(62),d=t(63),f=t.n(d),m=t(41),h=t.n(m);function p(e){return new Promise((function(n){var t=new FileReader;t.onload=function(e){var t=e.srcElement.result||"";n(t)},t.onerror=function(e){n("")},t.readAsText(e)}))}var b={baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL,timeout:1e4,withCredentials:!0},v=h.a.create(b);v.interceptors.response.use((function(e){return e}),function(){var e=Object(u.a)(s.a.mark((function e(n){var t,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=f()(n,["response","data"],""))instanceof Blob)){e.next=8;break}return e.next=4,p(t);case 4:if(!(r=e.sent)){e.next=8;break}return a=Object(l.a)({},n,{response:Object(l.a)({},n.response,{data:r})}),e.abrupt("return",Promise.reject(a));case 8:return e.abrupt("return",Promise.reject(n));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());var E={instance:v,mergeHeaders:function(e,n){var t={};if(n){var r="".concat(sessionStorage.getItem("tokentype")," ").concat(sessionStorage.getItem("token"));r&&(t=Object(l.a)({},t,{Authorization:r}))}return e&&(t=Object(l.a)({},t,{},e)),t},get:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.withToken,r=void 0!==t&&t,a=n.headers,i=Object(o.a)(n,["withToken","headers"]);return this.instance(Object(l.a)({method:"get",url:e,headers:this.mergeHeaders(a,r)},i)).catch(this.handleApiError)},cancelGet:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.withToken,a=void 0!==r&&r,i=t.headers,c=Object(o.a)(t,["withToken","headers"]),s=m.CancelToken.source();return{send:function(){return n.instance(Object(l.a)({method:"get",url:e,headers:n.mergeHeaders(i,a),cancelToken:s.token},c)).catch(n.handleApiError)},cancel:s.cancel}},post:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.withToken,r=void 0!==t&&t,a=n.headers,i=n.data,c=Object(o.a)(n,["withToken","headers","data"]);return this.instance(Object(l.a)({method:"post",url:e,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},delete:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.withToken,r=void 0!==t&&t,a=n.headers,i=n.data,c=Object(o.a)(n,["withToken","headers","data"]);return this.instance(Object(l.a)({method:"delete",url:e,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},put:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.withToken,r=void 0!==t&&t,a=n.headers,i=n.data,c=Object(o.a)(n,["withToken","headers","data"]);return this.instance(Object(l.a)({method:"put",url:e,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},patch:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.withToken,r=void 0!==t&&t,a=n.headers,i=n.data,c=Object(o.a)(n,["withToken","headers","data"]);return this.instance(Object(l.a)({method:"patch",url:e,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},handleApiError:function(e){var n=e.response,t=n.data,r=401===n.status&&"authorized expire"===t;if(!e.response)throw new Error("Unexpected Error: ".concat(e.message));if(r)throw sessionStorage.clear(),new Error("authorized expire");throw e}},g=!0,x={HomeResource:{testApi:function(e){return console.log("Resource -----",e),g?i(200,"success",{error:!1,message:"Get successfully",test:e}):E.get("/api/photos?limit=10")}}},O={HOME___TEST_ACTION:"HOME___TEST_ACTION"};function w(e){return console.log("ACTION -----",e),function(n){return x.HomeResource.testApi(e).then((function(e){var t=e.data.test;console.log("ACtion response",e),n({type:O.HOME___TEST_ACTION,test:t})})).catch((function(e){return console.log(e)}))}}},73:function(e,n,t){e.exports=t(146)}},[[73,3,4]]]);
//# sourceMappingURL=main.e5460704.chunk.js.map