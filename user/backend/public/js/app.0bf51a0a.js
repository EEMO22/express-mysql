(function(e){function t(t){for(var r,s,c=t[0],a=t[1],i=t[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},u=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=a;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("bc3a"),o=n.n(r),u=n("7a23"),s={id:"nav"},c=Object(u["g"])("Home"),a=Object(u["g"])(" | "),i=Object(u["g"])("Login"),l=Object(u["g"])(" | "),p=Object(u["g"])("signUp");function d(e,t){var n=Object(u["w"])("router-link"),r=Object(u["w"])("router-view");return Object(u["q"])(),Object(u["d"])(u["a"],null,[Object(u["e"])("div",s,[Object(u["h"])(n,{to:"/"},{default:Object(u["C"])((function(){return[c]})),_:1}),a,Object(u["h"])(n,{to:"/login"},{default:Object(u["C"])((function(){return[i]})),_:1}),l,Object(u["h"])(n,{to:"/signup"},{default:Object(u["C"])((function(){return[p]})),_:1})]),Object(u["h"])(r)],64)}n("dae5");var f=n("6b0d"),b=n.n(f);const O={},g=b()(O,[["render",d]]);var j=g,m=n("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=n("6c02"),v=n("cf05"),w=n.n(v);w.a;n("ee5d");var _=n("74b3"),y=n.n(_),x={class:"hello"},k={class:"input_row"},U=Object(u["e"])("label",{for:"email"},"이메일",-1),A={class:"input_row"},P=Object(u["e"])("label",{for:"password"},"비밀번호",-1),C=Object(u["e"])("a",{href:"/#/signup"},"가입하기",-1);function S(e,t,n,r,o,s){return Object(u["q"])(),Object(u["d"])("div",x,[Object(u["e"])("div",k,[U,Object(u["D"])(Object(u["e"])("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.user.user_email=e})},null,512),[[u["A"],o.user.user_email]])]),Object(u["e"])("div",A,[P,Object(u["D"])(Object(u["e"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.user.user_password=e})},null,512),[[u["A"],o.user.user_password]])]),Object(u["e"])("button",{onClick:t[2]||(t[2]=function(){return s.login&&s.login.apply(s,arguments)})},"로그인"),C])}var D={data:function(){return{user:{user_email:"",user_password:""}}},methods:{login:function(e){o.a.post("/api/users/login",{user:this.user}).then((function(e){alert(e.data.message)}),(function(e){alert("Login failed!")})).catch((function(e){alert(e)}))}}};const V=b()(D,[["render",S]]);var q=V,M={class:"app"},N={class:"input_row"},$=Object(u["e"])("label",{for:"name"},"이름",-1),F={class:"input_row"},J=Object(u["e"])("label",{for:"email"},"이메일",-1),L={class:"input_row"},T=Object(u["e"])("label",{for:"password"},"비밀번호",-1);function B(e,t,n,r,o,s){return Object(u["q"])(),Object(u["d"])("div",M,[Object(u["e"])("div",N,[$,Object(u["D"])(Object(u["e"])("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.user.user_name=e})},null,512),[[u["A"],o.user.user_name]])]),Object(u["e"])("div",F,[J,Object(u["D"])(Object(u["e"])("input",{type:"text",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.user.user_email=e})},null,512),[[u["A"],o.user.user_email]])]),Object(u["e"])("div",L,[T,Object(u["D"])(Object(u["e"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.user.user_password=e})},null,512),[[u["A"],o.user.user_password]])]),Object(u["e"])("button",{onClick:t[3]||(t[3]=function(){return s.signUp&&s.signUp.apply(s,arguments)})},"회원가입")])}var E={methods:{signUp:function(e){var t=this;console.log({user:this.user}),this.$axios.post("/api/users/signup",{user:this.user}).then((function(e){e.data.success&&(alert(e.data.message),t.$router.push("/login")),e.data.success||alert(e.data.message)})).catch((function(e){alert("error")}))}},data:function(){return{user:{user_name:"",user_email:"",user_password:""}}}};const H=b()(E,[["render",B]]);var z=H,G=[{path:"/",name:"index",component:y.a},{path:"/login",name:"login",component:q},{path:"/signup",name:"signup",component:z}],I=Object(h["a"])({history:Object(h["b"])(),routes:G}),K=I,Q=n("5502"),R=Object(Q["a"])({state:{},mutations:{},actions:{},modules:{}}),W=Object(u["c"])(j);W.config.globalProperties.$axios=o.a,W.use(R).use(K).mount("#app")},"743d":function(e,t,n){},"74b3":function(e,t){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},dae5:function(e,t,n){"use strict";n("743d")},ee5d:function(e,t,n){"use strict";n("f79d")},f79d:function(e,t,n){}});
//# sourceMappingURL=app.0bf51a0a.js.map