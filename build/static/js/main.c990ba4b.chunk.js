(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),l=n(84),u=n(85),i=n(92),m=n(91),s=function(e){return o.a.createElement("ul",null,e.data.map((function(e){return o.a.createElement("li",{key:e.id},e.title)})))},p=function(e){return o.a.createElement("div",null,[1,2,3,4,5].map((function(t){return o.a.createElement("button",{key:t,onClick:function(){return e.getData(t)}},t)})))},E=(o.a.Component,n(99),n(12)),d=n(10),f=(n(100),function(){return o.a.createElement("header",null,o.a.createElement("nav",null,o.a.createElement(E.b,{activeClassName:"active",exact:!0,to:"/"},"React"),o.a.createElement(E.b,{activeClassName:"active",to:"/doc"},"\u6587\u6863"),o.a.createElement(E.b,{activeClassName:"active",to:"/tuto"},"\u6559\u7a0b"),o.a.createElement(E.b,{activeClassName:"active",to:"/blog"},"\u535a\u5ba2"),o.a.createElement(E.b,{activeClassName:"active",to:"/comm"},"\u793e\u533a")))}),h=function(e){return console.log(e),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h2",null,"React"),o.a.createElement("p",null,"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return e.history.push("/doc")}},"\u5feb\u901f\u5f00\u59cb"),o.a.createElement("button",{onClick:function(){return e.history.push("/tuto")}},"\u5165\u95e8\u6559\u7a0b")))},b=(n(105),n(173),n(93));var v=function(e){var t=e.component,n=e.routes,a=Object(b.a)(e,["component","routes"]);return o.a.createElement(d.b,Object.assign({},a,{render:function(e){var a=e.location;return localStorage.getItem("userinfo")?o.a.createElement(t,{routes:n}):o.a.createElement(d.a,{to:{pathname:"/login",state:a}})}}))},g=function(e){return e.pri?o.a.createElement(v,e):o.a.createElement(d.b,{path:e.path,render:function(t){return o.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})},k=[{path:"/",exact:!0,component:h},{path:"/doc",component:Object(d.g)((function(e){return console.log(e),o.a.createElement("div",{className:"doc"},o.a.createElement("div",{className:"content"},e.routes.map((function(e){return o.a.createElement(g,e)})),o.a.createElement(d.a,{from:"/doc",to:"/doc/core"})),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement(E.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),o.a.createElement("li",null,o.a.createElement(E.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),o.a.createElement("li",null,o.a.createElement(E.b,{to:"/doc/api"},"API")),o.a.createElement("li",null,o.a.createElement(E.b,{to:"/doc/hooks"},"Hooks"))))})),pri:!0,routes:[{path:"/doc/core",component:function(){return o.a.createElement("h1",null,"Core")}},{path:"/doc/guide",component:function(){return o.a.createElement("h1",null,"Guide")}},{path:"/doc/api",component:function(){return o.a.createElement("h1",null,"Api")}},{path:"/doc/hooks",component:function(){return o.a.createElement("h1",null,"Hooks")}}]},{path:"/tuto",component:function(){return o.a.createElement("div",null,"Tuto")},pri:!0},{path:"/blog",component:function(){return o.a.createElement("div",null,"Blog")}},{path:"/comm",component:function(){return o.a.createElement("div",null,"Comm")}},{path:"/login",component:function(e){return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){localStorage.setItem("userinfo","tom"),e.history.replace(e.location.state)}},"\u767b\u5f55"))}}],C=function(){return o.a.createElement(E.a,null,o.a.createElement(f,null),o.a.createElement(d.d,null,k.map((function(e,t){return o.a.createElement(g,Object.assign({key:t},e))}))))};r.a.render(o.a.createElement(C,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},94:function(e,t,n){e.exports=n(174)}},[[94,1,2]]]);
//# sourceMappingURL=main.c990ba4b.chunk.js.map