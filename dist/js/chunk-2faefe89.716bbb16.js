(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2faefe89"],{6407:function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.pagination?e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!a.pagination.has_pre},on:{click:function(t){t.preventDefault(),a.updatePage(a.pagination.current_page-1)}}},[a._m(0)]),a._l(a.pagination.total_pages,function(t){return e("li",{key:t,staticClass:"page-item",class:{active:a.pagination.current_page===t},on:{click:function(e){e.preventDefault(),a.updatePage(t)}}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[a._v(a._s(t))])])}),e("li",{staticClass:"page-item",class:{disabled:!a.pagination.has_next},on:{click:function(t){t.preventDefault(),a.updatePage(a.pagination.current_page+1)}}},[a._m(1)])],2)]):a._e()},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[a._v("«")]),e("span",{staticClass:"sr-only"},[a._v("Previous")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[a._v("»")]),e("span",{staticClass:"sr-only"},[a._v("Next")])])}],s=e("c93e"),c=e("2f62"),r={name:"Navbar",methods:{updatePage:function(a){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("icguanyu","/products?page=").concat(a);this.$store.dispatch("getProducts",t)}},computed:Object(s["a"])({},Object(c["c"])(["pagination"]))},l=r,o=(e("ef61"),e("2877")),p=Object(o["a"])(l,n,i,!1,null,"d3bc58fc",null);p.options.__file="pagination.vue";t["a"]=p.exports},ee87:function(a,t,e){},ef61:function(a,t,e){"use strict";var n=e("ee87"),i=e.n(n);i.a}}]);
//# sourceMappingURL=chunk-2faefe89.716bbb16.js.map