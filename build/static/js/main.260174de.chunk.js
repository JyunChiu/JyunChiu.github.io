(this.webpackJsonptestreactapp=this.webpackJsonptestreactapp||[]).push([[1],{147:function(e,n,t){},148:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(33),o=t.n(i),c=t(23),s=t(17),u=t(24),l=t(67),d=t(16),f=t(62),m=t(15),h=t(8),p=t(149),b="COMMON___SWITCH_THEME_COLOR";var g=Object(p.a)(Object(m.a)({},b,(function(e,n){var t=n.val;return Object(h.a)({},e,{isDark:t})})),{isDark:!1}),v=t(49),E=Object(p.a)(Object(m.a)({},v.a.HOME___TEST_ACTION,(function(e,n){console.log("REDUCER -----",n);var t=n.test;return Object(h.a)({},e,{test:t})})),{test:123}),O=t(61),x=Object(p.a)(Object(m.a)({},O.a.HOME___TEST_ACTION,(function(e,n){console.log("REDUCER -----",n);var t=n.test;return Object(h.a)({},e,{test:t})})),{test:123}),T=function(e){return Object(d.c)({router:Object(u.b)(e),common:g,about:E,protfolio:x})},w={reduxThunkMiddleware:t(66).a};var k=Object(l.a)(),j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(f.a)(e),r=d.d,a=r(Object(d.a)(w.reduxThunkMiddleware,t)),i=Object(d.e)(T(e),n,a);return i}(k,{}),A=t(4),_=t(45),y=t(11),C=t(12),D=t(47),H=t(69),I=t.n(H),S=t(74),N=t(70),B=t.n(N),R=[{label:"PROTFOLIO",path:"/protfolio"},{label:"ABOUT",path:"/about"}],L=t(2);function M(){var e=Object(y.a)(["\n  display: inline-block;\n  width: ",";\n  height: auto;\n  position: relative;\n  cursor: pointer;\n  opacity: ",";\n  pointer-events: ",';\n  input[type="checkbox"] {\n    display: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; \n    z-index: 2;\n    cursor: pointer;\n    &.active svg,\n    &:checked + svg {\n      rect {\n        opacity: 0.5;\n        fill: ',";\n      };\n      circle {\n        fill: ",";\n        transform: translate(48px, 0);\n      };\n    }\n  }\n  &.disabled {\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  /* &:active {\n    svg {\n      circle {\n        transform: scale(1.06);\n        stroke: #fff;\n        stroke-width: 2px;\n      }\n    }\n  } */\n  svg {\n    width: 100%;\n    height: auto;\n    path,\n    circle {\n      transition: 0.3s ease all;\n    }\n    rect {\n      fill: #e0e0e0;\n    }\n    circle {\n      fill: #f1f1f1;\n    }\n  }\n"]);return M=function(){return e},e}var F=C.a.label(M(),(function(e){return e.width}),(function(e){return e.disabled?.3:1}),(function(e){return e.disabled?"none":""}),(function(e){return e.color}),(function(e){return e.color})),W=function(e){return a.a.createElement(F,Object.assign({className:"switch"},e),a.a.createElement("input",Object.assign({type:"checkbox"},e)),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 106 75"},a.a.createElement("g",null,a.a.createElement("rect",{x:"0.5",y:"19",width:"100",height:"35",rx:"20"}),a.a.createElement("circle",{cx:"28",cy:"35",r:"28"}))))};W.defaultProps={disabled:!1,width:"3rem",color:"#2dd1ff",checked:!1};var z=W;function P(){var e=Object(y.a)(["\n  display: none;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  @media "," {\n    letter-spacing: 2px;\n    width: 45%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: rgb(152, 167, 175, 0.7);\n    height: 100vh;\n    text-align: left;\n    padding: 5rem 0 2rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: transform 0.4s ease-in-out;\n    z-index: 10;\n    box-shadow: 2px 0px 15px 0 rgba(0, 0, 0, 0.5);\n    transform: ",";\n    backdrop-filter: blur(3px);\n\n    .site-name{\n      width: 3rem;\n      font-family: ",";\n      font-weight: 600;\n      font-size: 1rem;\n      padding: 1rem;\n      background: #acbac1;\n      color: ",";\n      margin: 1rem 0 2.5rem;\n      box-shadow: 3px 4px 8px 0px #6F6F6F;\n    }\n\n    .switch-box{\n      align-self: center;\n      padding-top: 2rem;\n      border-top: 1px solid #7f939c;\n      border-color: ",";\n      display: flex;\n      align-items: center;\n      font-size: 0.6rem;\n      justify-content: space-between;\n      width: 9rem;\n      justify-content: space-between;\n      color: ",";\n    }\n  }\n"]);return P=function(){return e},e}var K=C.a.div(P(),L.d.S,(function(e){return e.isOpen?"translateX(0)":"translateX(-150%)"}),L.b.SITE_NAME,(function(e){return e.isDark?L.a.BLACK:L.a.WHITE}),(function(e){return e.isDark?L.a.BLACK:L.a.WHITE}),(function(e){return e.isDark?L.a.BLACK:L.a.WHITE})),G=function(e){var n=e.isHambugerOpen,t=e.isDark,r=e.switchThemeColor;return a.a.createElement(K,{isOpen:n,isDark:t},a.a.createElement("div",{className:"site-name"},"Jin Chiu"),a.a.createElement("div",{className:"switch-box"},"LIGHT",a.a.createElement(z,{checked:t,onChange:r,color:"#4c4c4c"}),"DARK"))};function U(){var e=Object(y.a)(["\n  display: none;\n  @media "," {\n    position: absolute;\n    top: 1.8rem;\n    left: 2.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 1rem;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n    z-index: 99;\n\n    &:focus {\n      outline: none;\n    }\n\n    &:hover {\n      opacity: 0.8;\n    }\n\n    div {\n      width: 1.3rem;\n      height: 3px;\n      background: ",";\n      transition: all 0.3s linear;\n      position: relative;\n      transform-origin: 1px;\n\n      :first-child {\n        transform: ",";\n      }\n\n      /* :nth-child(2) {\n        opacity: ",";\n        transform: ",";\n      } */\n\n      :nth-child(2) {\n        width: ",";\n        transform: ",";\n      }\n    }\n  }\n"]);return U=function(){return e},e}var J=C.a.button(U(),L.d.S,(function(e){return e.isOpen?"rgba(255, 255, 255, 1)":L.a.GRAY}),(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(20px)":"translateX(0)"}),(function(e){return e.isOpen?"1.3rem":"0.8rem"}),(function(e){return e.isOpen?"translateY(5px) rotate(-45deg)":"rotate(0)"})),X=function(e){var n=e.isHambugerOpen,t=e.setIsHambugerOpen;return a.a.createElement(J,{isOpen:n,onClick:function(){return t(!n)}},a.a.createElement("div",null),a.a.createElement("div",null))};function Y(){var e=Object(y.a)(["\n  margin: 0rem 2rem 0.3rem;\n  text-decoration: none;\n  color: ",";\n  opacity: 0.4;\n\n  &.active{\n    opacity: 1;\n    &:after {\n      content: '';\n      display: block;\n      border-bottom: 4px solid #7f939c;\n      width: 2rem;\n      height: 0.4rem;\n      transition: width 0.6s ease all;\n    }\n  }\n\n  &:hover{\n    opacity: .8;\n  }\n\n  @media (max-width: 500px) {\n    margin: 0rem 1rem 0rem;\n    font-size: ",";\n  }\n"]);return Y=function(){return e},e}function q(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 1.2rem 8%;\n  letter-spacing: 2px;\n  background: ",";\n  color: ",";\n\n  .left-box {\n    display: flex;\n    align-self: center;\n    .site-name{\n      font-family: ",";\n      font-weight: 600;\n      font-size: ",";\n      padding: 1rem;\n      background: #acbac1;\n      color: ",";\n      margin-right: 2rem;\n      box-shadow: 3px 4px 8px 0px ",";\n    }\n  }\n\n  .right-box {\n    display: flex;\n    align-items: flex-start;\n    font-size: ",";\n    padding: 0rem 1rem;\n  }\n\n  .switch-box{\n    align-self: center;\n    padding-left: 1.5rem;\n    border-left: 1px solid #7f939c;\n    display: flex;\n    align-items: center;\n    font-size: 0.6rem;\n    justify-content: space-between;\n    width: 9rem;\n    justify-content: space-between;\n  }\n\n  @media "," {\n    justify-content: flex-end;\n    padding: 1.8rem 5% 1rem;\n    .left-box {\n      display: none;\n    }\n    \n    .right-box {\n     padding: 0\n    }\n  }\n"]);return q=function(){return e},e}var V=C.a.nav(q(),(function(e){return e.isDark?L.a.BLACK:L.a.WHITE}),(function(e){return e.isDark?L.a.WHITE:L.a.BLACK}),L.b.SITE_NAME,L.c.WEB.BASE,(function(e){return e.isDark?L.a.BLACK:L.a.WHITE}),(function(e){return e.isDark?"#598683":"#6F6F6F"}),L.c.WEB.BASE,L.d.S),Q=Object(C.a)(c.b)(Y(),(function(e){return e.isDark?L.a.WHITE:L.a.BLACK}),L.c.MOB.BASE),Z=function(e){var n=e.isDark,t=e.switchThemeColor,i=Object(r.useState)(!1),o=Object(S.a)(i,2),c=o[0],s=o[1];Object(r.useEffect)((function(){return window.addEventListener("resize",u),u(),function(){return window.removeEventListener("resize",u)}}),[]);var u=B()((function(){window.innerWidth>500&&s(!1)}),600);return a.a.createElement(r.Fragment,null,a.a.createElement(V,{isDark:n},a.a.createElement("div",{className:"left-box"},a.a.createElement("div",{className:"site-name"},"Jin Chiu"),a.a.createElement("div",{className:"switch-box"},"LIGHT",a.a.createElement(z,{checked:n,onChange:t,color:"#4c4c4c"}),"DARK")),a.a.createElement("div",{className:"right-box"},R.map((function(e){return a.a.createElement(Q,{isDark:n,to:e.path},e.label)})))),a.a.createElement(X,{isHambugerOpen:c,setIsHambugerOpen:s}),a.a.createElement(G,{isDark:n,switchThemeColor:t,isHambugerOpen:c}))};Z.defaultProps={};var $=Z;function ee(){var e=Object(y.a)(["\n  display: flex;\n  background: ",";\n  /* background: ","; */\n  color: ",";\n  justify-content: center;\n  letter-spacing: 3px;\n  font-size: 12px;\n  padding: 1rem 0 2rem;\n  \n  >div{\n    transform: scale(0.8);\n  }\n  @media (max-width: 500px) {\n    >div{\n    transform: scale(0.7);\n    }\n  }\n"]);return ee=function(){return e},e}var ne=C.a.footer(ee(),(function(e){return e.isDark?"#2f2f2f":"#FFFFFF"}),(function(e){return e.isDark?"#2f2f2f":"#FFFFFF"}),(function(e){return e.isDark?L.a.WHITE:L.a.BLACK})),te=function(e){var n=e.isDark;return a.a.createElement(ne,{isDark:n},a.a.createElement("div",null,"\xa9 Designed And Coded By JIN CHIU  2020"))};te.defaultProps={};var re=te,ae=t(44);function ie(){var e=Object(y.a)(["\n  position: relative;\n\n  .icon-box{\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    bottom: 12rem;\n    left: 3rem;\n  }\n\n  .scroll-up-btn{\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 50%;\n    background: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 3px 8px 0px ",";\n    .arrow {\n      width: .5rem;\n      height: .5rem;\n      border-bottom: 3px solid;\n      border-left: 3px solid;\n      border-color: ",";\n      transform: rotate(135deg);\n      margin-top: 0.3rem;\n    }\n  }\n\n"]);return ie=function(){return e},e}var oe=C.a.div(ie(),(function(e){return e.isDark?L.a.WHITE:L.a.BLACK}),(function(e){return e.isDark?"#598683":"#929292"}),(function(e){return e.isDark?L.a.GRAY:"#acbac1"})),ce={switchThemeColor:function(e){var n=e.target.checked;return{type:b,val:n}}},se=Object(D.a)(Object(s.c)((function(e){return{isDark:e.common.isDark}}),ce))((function(e){var n=e.isDark,t=e.switchThemeColor;return console.log("eee",n),a.a.createElement(oe,{isDark:n},a.a.createElement($,{isDark:n,switchThemeColor:t}),a.a.createElement("div",null,e.children),a.a.createElement(re,{isDark:n}),a.a.createElement("div",{className:"icon-box"},a.a.createElement(ae.a,null),a.a.createElement(ae.b,null)),a.a.createElement(I.a,{showUnder:80,style:{bottom:80,right:50}},a.a.createElement("div",{className:"scroll-up-btn"},a.a.createElement("div",{className:"arrow"}))))})),ue=function(){return a.a.createElement(se,null,a.a.createElement(A.c,null,a.a.createElement(A.a,{exact:!0,path:"/about",component:Object(_.a)((function(){return t.e(0).then(t.bind(null,151))}))}),a.a.createElement(A.a,{exact:!0,path:"/protfolio",component:Object(_.a)((function(){return t.e(0).then(t.bind(null,150))}))})))},le=(t(147),function(){return a.a.createElement(s.a,{store:j},a.a.createElement(u.a,{history:k},a.a.createElement(c.a,null,a.a.createElement(ue,null))))});o.a.render(a.a.createElement(le,null),document.querySelector("#root"))},2:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return o}));var r={BLACK:"#333333",WHITE:"#f9f9f9",GRAY:"#7f939c",SHADOW_GRAY:"b7b7b7"},a={SITE_NAME:"Cinzel",PROJECT_NO:"Playfair Display",PROJECT_NAME:"Playfair Display"},i={WEB:{SMALL:"0.8rem",BASE:"0.95rem",TITLE:"2rem"},MOB:{BASE:"0.8rem",TITLE:"1.5rem"}},o={M:"(max-width: 1367px)",S:"(max-width: 1241px)",XS:"(max-width: 550px)"}},34:function(e,n,t){"use strict";var r=function(e,n){return Math.floor(Math.random()*(e-n+1))+n},a=1,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"SOMETHING_WRONG";return new Promise((function(o,c){if("inOrder"===n){if(a%2===1){var s={data:t};setTimeout((function(){return o(s)}),e)}else{var u={data:i};setTimeout((function(){return c(u)}),e)}a+=1}if("random"===n){if(r(1,100)%2===1){var l={data:t};setTimeout((function(){return o(l)}),e)}else{var d={data:i};setTimeout((function(){return c(d)}),e)}a+=1}if("success"===n){var f={data:t};setTimeout((function(){return o(f)}),e)}if("fail"===n){var m={data:i};setTimeout((function(){return c(m)}),e)}}))},o=t(19),c=t(39),s=t.n(c),u=t(8),l=t(64),d=t(65),f=t.n(d),m=t(40),h=t.n(m);function p(e){return new Promise((function(n){var t=new FileReader;t.onload=function(e){var t=e.srcElement.result||"";n(t)},t.onerror=function(e){n("")},t.readAsText(e)}))}var b={baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL,timeout:1e4,withCredentials:!0},g=h.a.create(b);g.interceptors.response.use((function(e){return e}),function(){var e=Object(l.a)(s.a.mark((function e(n){var t,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=f()(n,["response","data"],""))instanceof Blob)){e.next=8;break}return e.next=4,p(t);case 4:if(!(r=e.sent)){e.next=8;break}return a=Object(u.a)({},n,{response:Object(u.a)({},n.response,{data:r})}),e.abrupt("return",Promise.reject(a));case 8:return e.abrupt("return",Promise.reject(n));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());var v={instance:g,mergeHeaders:function(e,n){var t={};if(n){var r="".concat(sessionStorage.getItem("tokentype")," ").concat(sessionStorage.getItem("token"));r&&(t=Object(u.a)({},t,{Authorization:r}))}return e&&(t=Object(u.a)({},t,{},e)),t},get:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.withToken,r=void 0!==t&&t,a=n.headers,i=Object(o.a)(n,["withToken","headers"]);return this.instance(Object(u.a)({method:"get",url:e,headers:this.mergeHeaders(a,r)},i)).catch(this.handleApiError)},cancelGet:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.withToken,a=void 0!==r&&r,i=t.headers,c=Object(o.a)(t,["withToken","headers"]),s=m.CancelToken.source();return{send:function(){return n.instance(Object(u.a)({method:"get",url:e,headers:n.mergeHeaders(i,a),cancelToken:s.token},c)).catch(n.handleApiError)},cancel:s.cancel}},post:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.withToken,r=void 0!==t&&t,a=n.headers,i=n.data,c=Object(o.a)(n,["withToken","headers","data"]);return this.instance(Object(u.a)({method:"post",url:e,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},delete:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.withToken,r=void 0!==t&&t,a=n.headers,i=n.data,c=Object(o.a)(n,["withToken","headers","data"]);return this.instance(Object(u.a)({method:"delete",url:e,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},put:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.withToken,r=void 0!==t&&t,a=n.headers,i=n.data,c=Object(o.a)(n,["withToken","headers","data"]);return this.instance(Object(u.a)({method:"put",url:e,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},patch:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.withToken,r=void 0!==t&&t,a=n.headers,i=n.data,c=Object(o.a)(n,["withToken","headers","data"]);return this.instance(Object(u.a)({method:"patch",url:e,data:i,headers:this.mergeHeaders(a,r)},c)).catch(this.handleApiError)},handleApiError:function(e){var n=e.response,t=n.data,r=401===n.status&&"authorized expire"===t;if(!e.response)throw new Error("Unexpected Error: ".concat(e.message));if(r)throw sessionStorage.clear(),new Error("authorized expire");throw e}},E=!0,O={testApi:function(e){return console.log("Resource -----",e),E?i(200,"success",{error:!1,message:"Get successfully",test:e}):v.get("/api/photos?limit=10")}};n.a={HomeResource:O}},49:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i}));var r=t(34),a={HOME___TEST_ACTION:"HOME___TEST_ACTION"};function i(e){return console.log("ACTION -----",e),function(n){return r.a.HomeResource.testApi(e).then((function(e){var t=e.data.test;console.log("ACtion response",e),n({type:a.HOME___TEST_ACTION,test:t})})).catch((function(e){return console.log(e)}))}}},61:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i}));var r=t(34),a={HOME___TEST_ACTION:"HOME___TEST_ACTION"};function i(e){return console.log("ACTION -----",e),function(n){return r.a.HomeResource.testApi(e).then((function(e){var t=e.data.test;console.log("ACtion response",e),n({type:a.HOME___TEST_ACTION,test:t})})).catch((function(e){return console.log(e)}))}}},75:function(e,n,t){e.exports=t(148)}},[[75,2,3]]]);
//# sourceMappingURL=main.260174de.chunk.js.map