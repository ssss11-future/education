(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{347:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(90).default)("f0ca79f6",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n(347)},352:function(t,e,n){var o=n(89)(!1);o.push([t.i,'.nuxt-content h2{font-size:1.25rem;font-weight:600;line-height:1.125;margin-top:1.5rem;margin-bottom:1.5rem}.nuxt-content h2>a:before{content:"#"}.nuxt-content h2 a .icon{height:.5rem;width:.5rem}',""]),t.exports=o},368:function(t,e,n){"use strict";n.r(e);var o=n(29),r=(n(4),n(58),n(57),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("articles",o.slug).fetch();case 3:return r=e.sent,e.abrupt("return",{post:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.post.title,meta:[{hid:"description",name:"description",content:this.post.description},{hid:"og:title",property:"og:title",content:this.post.title},{hid:"og:description",property:"og:description",content:this.post.description},{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.description}]}}}),c=(n(351),n(70)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[e("h1",{staticClass:"title is-1 has-text-centered"},[t._v("\n          "+t._s(t.post.title)+"\n        ")]),t._v(" "),e("nuxt-content",{attrs:{document:t.post}}),t._v(" "),e("div",{staticClass:"mt-4 has-text-centered"},[e("nuxt-link",{staticClass:"button is-primary is-light",attrs:{to:"/"}},[t._v("\n            View All Posts\n          ")])],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);