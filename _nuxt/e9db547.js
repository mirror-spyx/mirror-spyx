(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{548:function(e,t,o){"use strict";o.r(t);var r=o(2),c=(o(28),o(62)),n=o(54),l=o.n(n),h={name:"callback",auth:!1,data:function(){return{client_id:"860765997780-rihj0sackhlhcpiv3dtvpnvjcge7jgfd.apps.googleusercontent.com",client_secret:"o4J3Om37AdvouiaDbZBbIDQA"}},mounted:function(){var code=this.$route.query.code;this.googleLogin(code)},methods:{googleLogin:function(code){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e,t.prev=1,t.next=4,Object(c.c)("https://www.googleapis.com/oauth2/v4/token?client_id="+e.client_id+"&client_secret="+e.client_secret+"&code="+code+"&grant_type=authorization_code&redirect_uri="+encodeURIComponent(window.location.origin+"/callback"));case 4:if(void 0===(r=t.sent).access_token){t.next=20;break}return"https://test.spyx.com/api/auth/google/callback",t.next=9,Object(c.b)("https://test.spyx.com/api/auth/google/callback",l.a.stringify({access_token:r.access_token}));case 9:if(void 0===(n=t.sent).jwt){t.next=19;break}return o.$auth.$storage.setLocalStorage("access-token",n.jwt),o.$auth.$storage.setLocalStorage("email",n.user.email),o.$auth.$storage.setLocalStorage("uid",n.user.id),o.$auth.$storage.setLocalStorage("user",n.user),o.$auth.setUser(n.user),t.abrupt("return",o.$router.push({path:"/signup"}));case 19:o.$message({showClose:!1,message:"授权异常",offset:200,type:"error"});case 20:t.next=26;break;case 22:t.prev=22,t.t0=t.catch(1),console.log("===========error=================",t.t0),o.$message({showClose:!1,message:"请求异常",offset:200,type:"error"});case 26:case"end":return t.stop()}}),t,null,[[1,22]])})))()}}},d=o(3),component=Object(d.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"oauth"})}),[],!1,null,"24c1bccb",null);t.default=component.exports}}]);