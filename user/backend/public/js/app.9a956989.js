(function(e){function t(t){for(var r,c,s=t[0],a=t[1],i=t[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=a;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("bc3a"),o=n.n(r),u=n("7a23"),c={id:"nav"},s=Object(u["g"])("Home"),a=Object(u["g"])(" | "),i=Object(u["g"])("Login"),l=Object(u["g"])(" | "),d=Object(u["g"])("signUp");function p(e,t){var n=Object(u["x"])("router-link"),r=Object(u["x"])("router-view");return Object(u["q"])(),Object(u["d"])(u["a"],null,[Object(u["e"])("div",c,[Object(u["h"])(n,{to:"/"},{default:Object(u["D"])((function(){return[s]})),_:1}),a,Object(u["h"])(n,{to:"/login"},{default:Object(u["D"])((function(){return[i]})),_:1}),l,Object(u["h"])(n,{to:"/signup"},{default:Object(u["D"])((function(){return[d]})),_:1})]),Object(u["h"])(r)],64)}n("dae5");var f=n("d959"),b=n.n(f);const j={},O=b()(j,[["render",p]]);var m=O,g=n("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var v=n("6c02"),h=n("cf05"),w=n.n(h);w.a;n("ee5d");var _={class:"hello"},y=Object(u["e"])("dt",null,"이메일",-1),k=Object(u["e"])("dt",null,"이름",-1);function x(e,t,n,r,o,c){return Object(u["q"])(),Object(u["d"])("div",_,[(Object(u["q"])(!0),Object(u["d"])(u["a"],null,Object(u["w"])(o.users,(function(e,t){return Object(u["q"])(),Object(u["d"])("div",{key:e.user_id,class:"user-wrap"},[Object(u["e"])("h2",null,"No. "+Object(u["z"])(t+1),1),Object(u["e"])("dl",null,[y,Object(u["e"])("dd",null,Object(u["z"])(e.user_email),1),k,Object(u["e"])("dd",null,Object(u["z"])(e.user_name),1)])])})),128))])}var P={data:function(){return{users:[]}},created:function(){var e=this;o.a.get("/api/users").then((function(t){e.users=t.data}))}};const U=b()(P,[["render",x]]);var q=U,B={class:"hello"},E={class:"input_row"},S=Object(u["e"])("label",{for:"email"},"이메일",-1),V={class:"input_row"},C=Object(u["e"])("label",{for:"password"},"비밀번호",-1),F=Object(u["e"])("a",{href:"/#/signup"},"가입하기",-1);function M(e,t,n,r,o,c){return Object(u["q"])(),Object(u["d"])("div",B,[Object(u["e"])("div",E,[S,Object(u["E"])(Object(u["e"])("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.user.user_email=e})},null,512),[[u["B"],o.user.user_email]])]),Object(u["e"])("div",V,[C,Object(u["E"])(Object(u["e"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.user.user_password=e})},null,512),[[u["B"],o.user.user_password]])]),Object(u["e"])("button",{onClick:t[2]||(t[2]=function(){return c.login&&c.login.apply(c,arguments)})},"로그인"),F])}var N={data:function(){return{user:{user_email:"",user_password:""}}},methods:{login:function(e){o.a.post("/api/users/login",{user:this.user}).then((function(e){alert(e.data.message)}),(function(e){alert("Login failed!")})).catch((function(e){alert(e)}))}}};const $=b()(N,[["render",M]]);var z=$,A={class:"app"},D={class:"input_row"},L=Object(u["e"])("label",{for:"name"},"이름",-1),R={class:"input_row"},T=Object(u["e"])("label",{for:"email"},"이메일",-1),J={class:"input_row"},H=Object(u["e"])("label",{for:"password"},"비밀번호",-1);function G(e,t,n,r,o,c){return Object(u["q"])(),Object(u["d"])("div",A,[Object(u["e"])("div",D,[L,Object(u["E"])(Object(u["e"])("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.user.user_name=e})},null,512),[[u["B"],o.user.user_name]])]),Object(u["e"])("div",R,[T,Object(u["E"])(Object(u["e"])("input",{type:"text",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.user.user_email=e})},null,512),[[u["B"],o.user.user_email]])]),Object(u["e"])("div",J,[H,Object(u["E"])(Object(u["e"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.user.user_password=e})},null,512),[[u["B"],o.user.user_password]])]),Object(u["e"])("button",{onClick:t[3]||(t[3]=function(e){return c.submitForm()})},"회원가입")])}var I=n("1da1"),K=(n("96cf"),o.a.create({baseURL:"http://localhost:3000/"})),Q={headers:{"Content-type":"application/json"}};function W(e){return K.post("api/users/signup",e,Q)}o.a.defaults.headers.post=null;var X={signUp:W},Y={methods:{submitForm:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={user_email:e.user.user_email,user_name:e.user.user_name,user_password:e.user.user_password},console.log(n),t.next=5,X(n);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("error: ",t.t0.res);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},data:function(){return{user:{user_name:"",user_email:"",user_password:""}}}};const Z=b()(Y,[["render",G]]);var ee=Z,te=[{path:"/",name:"index",component:q},{path:"/login",name:"login",component:z},{path:"/signup",name:"signup",component:ee}],ne=Object(v["a"])({history:Object(v["b"])(),routes:te}),re=ne,oe=n("5502");n("ac1f"),n("5319");function ue(){return document.cookie.replace(/(?:(?:^|.*;\s*)auth\s*=\s*([^;]*).*$)|^.*$/.compile,"$1")}var ce=Object(oe["a"])({state:{user_name:ue||"",token:ue||""},mutations:{setToken:function(e,t){e.token=t}},actions:{},modules:{}}),se=Object(u["c"])(m);se.config.globalProperties.$axios=o.a,se.use(ce).use(re).mount("#app")},"640f":function(e,t,n){},"82ae":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},dae5:function(e,t,n){"use strict";n("82ae")},ee5d:function(e,t,n){"use strict";n("640f")}});
//# sourceMappingURL=app.9a956989.js.map