(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccf290b4"],{1815:function(t,e,s){t.exports=s.p+"img/home.168d16a8.png"},"254d":function(t,e,s){},"54e1":function(t,e,s){"use strict";var n=s("254d"),a=s.n(n);a.a},"94d3":function(t,e,s){t.exports=s.p+"img/pokemon_store.7524e985.png"},ac9e:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signin"},[t.isLoading?n("loading"):t._e(),n("div",{staticClass:"box"},[n("img",{attrs:{src:s("94d3"),alt:""}}),t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",placeholder:"abc@gmail.com",autocomplete:"true"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"******",autocomplete:"true"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),n("button",{on:{click:t.signin}},[t._v("登入")]),n("router-link",{attrs:{to:"back"}},[n("button",{staticClass:"back"},[t._v("返回")])])],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"anibox"},[n("div",{staticClass:"home"},[n("img",{attrs:{src:s("1815"),alt:""}})]),n("div",{staticClass:"truck"},[n("img",{attrs:{src:s("ec2d"),alt:""}})])])}],i=(s("cadf"),s("551c"),s("097d"),s("1157"),s("c428")),o={name:"signin",components:{loading:i["a"]},data:function(){return{user:{username:"",password:""},isLoading:!1}},methods:{signin:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/admin/signin");t.isLoading=!0,this.$http.post(e,t.user).then(function(e){e.data.success?(t.$router.push("/"),t.isLoading=!1):(alert("資料錯誤"),t.isLoading=!1)})}}},r=o,c=(s("54e1"),s("2877")),u=Object(c["a"])(r,n,a,!1,null,"424a852b",null);u.options.__file="signin.vue";e["default"]=u.exports},ec2d:function(t,e,s){t.exports=s.p+"img/truck.52c2bb1f.png"}}]);
//# sourceMappingURL=chunk-ccf290b4.93e3b7fc.js.map