(window.webpackJsonp=window.webpackJsonp||[]).push([[60,13,14],{370:function(t,e,l){"use strict";l.d(e,"d",(function(){return o})),l.d(e,"a",(function(){return n})),l.d(e,"c",(function(){return d})),l.d(e,"b",(function(){return c}));var r=l(62),o=function(p){return Object(r.b)("/api/products",p)},n=function(p){return Object(r.b)("/api/articles",p)},d=function(p){return Object(r.b)("/api/features",p)},c=function(p){return Object(r.b)("/strapi-icloud/iphone/events",p)}},375:function(t,e,l){var content=l(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(38).default)("4129c490",content,!0,{sourceMap:!1})},388:function(t,e,l){var content=l(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(38).default)("ceea9b7c",content,!0,{sourceMap:!1})},389:function(t,e,l){"use strict";l(375)},390:function(t,e,l){var r=l(37)(!1);r.push([t.i,".blog-item .heading-small[data-v-04444056]{font-size:20px!important}.blog-item .margin-small[data-v-04444056]{color:#01175e;font-size:13px!important}.blog-item .text-size-small[data-v-04444056]{font-size:14px!important;color:#737b80}",""]),t.exports=r},400:function(t,e,l){"use strict";l.r(e);var r={name:"BlogItem",props:{title:String,photo:String,description:String,publishedAt:String},computed:{reversedPhoto:function(){return"https://test.spyx.com"+this.photo}}},o=(l(389),l(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-item"},[l("div",{staticClass:"blog_image-wrapper"},[l("img",{staticClass:"blog_thumbnail-image",attrs:{alt:"Man working with a laptop",sizes:"(max-width: 767px) 92vw, (max-width: 991px) 43vw, 28vw",src:t.reversedPhoto}})]),t._v(" "),l("div",{staticClass:"margin-top margin-small"},[l("h2",{staticClass:"heading-small"},[t._v(t._s(t.title))])]),t._v(" "),l("div",{staticClass:"margin-top margin-small"},[l("p",[t._v(t._s(t.description))])]),t._v(" "),l("div",{staticClass:"text-size-small"},[t._v(t._s(t.publishedAt))])])}),[],!1,null,"04444056",null);e.default=component.exports},403:function(t,e,l){"use strict";l(388)},404:function(t,e,l){var r=l(37)(!1);r.push([t.i,".w-dyn-item[data-v-796a25bb]{padding:10px}.w-dyn-item[data-v-796a25bb]:hover{box-shadow:0 6px 16px #c1c1c1;background:#fff;border-radius:5px;transition:all .3s ease}",""]),t.exports=r},411:function(t,e,l){var content=l(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(38).default)("639e88f5",content,!0,{sourceMap:!1})},441:function(t,e,l){"use strict";l.r(e);var r={name:"BlogItems",props:{items:Array}},o=(l(403),l(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"section-blog"},[l("div",{staticClass:"page-padding"},[l("div",{staticClass:"container-large"},[l("div",{staticClass:"padding-vertical padding-xhuge"},[l("div",{staticClass:"blog_component"},[l("div",{staticClass:"blog_list-wrapper w-dyn-list"},[l("div",{staticClass:"blog_list w-dyn-items",attrs:{role:"list"}},t._l(t.items,(function(t,e){return l("div",{staticClass:"blog_collection-item w-dyn-item",attrs:{role:"listitem"}},[l("nuxt-link",{attrs:{to:{path:"blog/detail/"+t.id,parsms:{id:t.id}},title:t.attributes.title}},[l("BlogItem",{attrs:{title:t.attributes.name,photo:t.attributes.photo.data?t.attributes.photo.data.attributes.url:"",content:t.attributes.content,description:t.attributes.description,publishedAt:t.attributes.publishedAt}})],1)],1)})),0)])])])])])])}),[],!1,null,"796a25bb",null);e.default=component.exports;installComponents(component,{BlogItem:l(400).default})},447:function(t,e,l){"use strict";l(411)},448:function(t,e,l){var r=l(37)(!1);r.push([t.i,".v-application .primary[data-v-f608886a]{color:#1a1b46!important}",""]),t.exports=r},547:function(t,e,l){"use strict";l.r(e);var r=l(2),o=(l(28),l(370)),n=l(54),d=l.n(n),c=(l(62),{name:"blog-list",layout:"blog",auth:!1,data:function(){return{page:1,total:100,articles:[]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,l=t.query,t.params,r=d.a.stringify({sort:["title:asc"],populate:"*",fields:["name","title","author","keywords","description","content","is_deny","publishedAt"],pagination:{pageSize:void 0===l.pageSize?10:l.pageSize,page:void 0===l.page?1:l.page},publicationState:"live",locale:["en","zh-CN"]},{encodeValuesOnly:!0}),e.prev=2,e.next=5,Object(o.a)(r);case 5:return n=e.sent,e.abrupt("return",{articles:n.data,page:n.meta.pagination.page,total:1===n.meta.pagination.pageCount?10:n.meta.pagination.pageCount});case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})))()}}),v=(l(447),l(3)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog"},[t._m(0),t._v(" "),l("blog-items",{attrs:{items:t.articles}})],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container-large"},[l("div",{staticClass:"blog-header"},[l("div",{staticClass:"blog-header-hot"},[l("div",{staticClass:"blog-header-hot-photo"},[l("img",{attrs:{src:"https://blog.mspy.com/wp-content/uploads/2022/04/web-browsing-history-tracker.jpg",alt:""}})]),t._v(" "),l("div",{staticClass:"blog-header-hot-body"},[l("div",{staticClass:"blog-header-hot-body-title"},[t._v("Tracking Internet Browsing History: Your How-to Guide")]),t._v(" "),l("div",{staticClass:"blog-header-hot-body-author"},[l("div",{staticClass:"blog-header-hot-body-author-photo"},[l("img",{attrs:{src:"https://blog.mspy.com/wp-content/uploads/2018/05/y9-e1607962541838.png",alt:""}})]),t._v(" "),l("div",{staticClass:"blog-header-hot-body-author-name"},[t._v("艾格尼丝·W·林恩 在 "),l("span",{staticClass:"blog-header-featured-list-item-tag"},[t._v("如何")])])])])]),t._v(" "),l("div",{staticClass:"blog-header-featured"},[l("h2",[t._v("Spyx Featured")]),t._v(" "),l("div",{staticClass:"blog-header-featured-list"},[l("ul",[l("li",{staticClass:"blog-header-featured-list-item"},[l("div",{staticClass:"blog-header-featured-list-item-top"},[l("span",{staticClass:"blog-header-featured-list-item-tag"},[t._v("分类名称")]),t._v(" "),l("span",{staticClass:"blog-header-featured-list-item-time"},[t._v("2018 年 2 月 12 日")])]),t._v(" "),l("div",{staticClass:"blog-header-featured-list-item-title"},[t._v("3 [GIVEAWAY] We’re Giving Away Free eyeZy Subscriptions")])]),t._v(" "),l("li",{staticClass:"blog-header-featured-list-item"},[l("div",{staticClass:"blog-header-featured-list-item-top"},[l("span",{staticClass:"blog-header-featured-list-item-tag"},[t._v("分类名称")]),t._v(" "),l("span",{staticClass:"blog-header-featured-list-item-time"},[t._v("2018 年 2 月 12 日")])]),t._v(" "),l("div",{staticClass:"blog-header-featured-list-item-title"},[t._v("3 3 [GIVEAWAY] We’re Giving Away Free eyeZy Subscriptions")])]),t._v(" "),l("li",{staticClass:"blog-header-featured-list-item"},[l("div",{staticClass:"blog-header-featured-list-item-top"},[l("span",{staticClass:"blog-header-featured-list-item-tag"},[t._v("分类名称")]),t._v(" "),l("span",{staticClass:"blog-header-featured-list-item-time"},[t._v("2018 年 2 月 12 日")])]),t._v(" "),l("div",{staticClass:"blog-header-featured-list-item-title"},[t._v("3 3 [GIVEAWAY] We’re Giving Away Free eyeZy Subscriptions")])]),t._v(" "),l("li",{staticClass:"blog-header-featured-list-item"},[l("div",{staticClass:"blog-header-featured-list-item-top"},[l("span",{staticClass:"blog-header-featured-list-item-tag"},[t._v("分类名称")]),t._v(" "),l("span",{staticClass:"blog-header-featured-list-item-time"},[t._v("2018 年 2 月 12 日")])]),t._v(" "),l("div",{staticClass:"blog-header-featured-list-item-title"},[t._v("3 3 [GIVEAWAY] We’re Giving Away Free eyeZy Subscriptions3 [GIVEAWAY] We")])]),t._v(" "),l("li",{staticClass:"blog-header-featured-list-item"},[l("div",{staticClass:"blog-header-featured-list-item-top"},[l("span",{staticClass:"blog-header-featured-list-item-tag"},[t._v("分类名称")]),t._v(" "),l("span",{staticClass:"blog-header-featured-list-item-time"},[t._v("2018 年 2 月 12 日")])]),t._v(" "),l("div",{staticClass:"blog-header-featured-list-item-title"},[t._v("3 3 [GIVEAWAY] We’re Giving Away Free eyeZy Subscriptions")])])])])])])])}],!1,null,"f608886a",null);e.default=component.exports;installComponents(component,{BlogItems:l(441).default})}}]);