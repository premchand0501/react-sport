(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(e,t,a){"use strict";a.d(t,"c",function(){return o}),a.d(t,"j",function(){return s}),a.d(t,"a",function(){return i}),a.d(t,"l",function(){return l}),a.d(t,"n",function(){return m}),a.d(t,"o",function(){return u}),a.d(t,"e",function(){return p}),a.d(t,"p",function(){return f}),a.d(t,"b",function(){return d}),a.d(t,"f",function(){return h}),a.d(t,"g",function(){return g}),a.d(t,"m",function(){return b}),a.d(t,"k",function(){return y}),a.d(t,"d",function(){return E}),a.d(t,"h",function(){return T}),a.d(t,"i",function(){return N});var n=a(11),r=a(0),c=a.n(r),o=function(e){return c.a.createElement("div",e,e.children)},s=function(e){return c.a.createElement("nav",e,e.children)},i=function(e){return c.a.createElement("a",e,e.children)},l=function(e){return c.a.createElement("p",e,e.children)},m=function(e){return c.a.createElement("small",e,e.children)},u=function(e){return c.a.createElement("span",e,e.children)},p=function(e){e.alt;var t=Object(n.a)(e,["alt"]);return c.a.createElement("img",Object.assign({},t,{alt:"alt"}))},f=function(e){return c.a.createElement("strong",e)},d=function(e){return c.a.createElement("button",e)},h=function(e){return c.a.createElement("input",e)},g=function(e){return c.a.createElement("label",e)},b=function(e){return c.a.createElement("select",e)},y=function(e){return c.a.createElement("option",e)},E=function(e){var t=e.tag,a=Object(n.a)(e,["tag"]),r="h".concat(t);return c.a.createElement(r,a)},T=function(e){var t=e.type,a=Object(n.a)(e,["type"]),r="".concat(t);return c.a.createElement(r,a)},N=function(e){return c.a.createElement("li",e)}},13:function(e,t,a){"use strict";var n=a(5),r=a(6),c=a(8),o=a(7),s=a(9),i=a(0),l=a.n(i),m=a(1),u=a(3),p=a(4),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={currentListItem:"",location:"",gameType:"",yourTeam:"",payment:"",setTeamName:""},a.setCurrentTab=function(e){a.setState({currentListItem:e},function(){a.props.changeTab(a.state.currentListItem),console.log(a.state.currentListItem)})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setCurrentTab(this.props.currentTab)}},{key:"componentWillReceiveProps",value:function(e){this.setState({location:e.location,gameType:e.currentGameName,currentListItem:e.currentTab,yourTeam:e.setTeamName})}},{key:"render",value:function(){var e=this;return l.a.createElement(m.c,{className:"container"},l.a.createElement(m.c,{className:"row"},l.a.createElement(m.j,{className:"navbar navbar-light"},l.a.createElement(m.a,{href:"#",className:"navbar-brand"},l.a.createElement(m.e,{src:a(16),alt:"logo"}),l.a.createElement(m.o,null,l.a.createElement(m.p,null,"Sports"))))),l.a.createElement(m.c,{className:"row",style:{marginTop:"3rem"}},l.a.createElement(m.c,{className:"col col-12 pt-3 pb-3"},l.a.createElement(m.d,{tag:"2",className:"text-primary"},"Find a team for game"),l.a.createElement(m.h,{className:"list-group steps",type:"ul"},l.a.createElement(m.i,{className:"".concat("location"===this.state.currentListItem?"current ":"","list-group-item d-flex align-items-center"),onClick:function(){return e.setCurrentTab("location")}},l.a.createElement(m.o,{className:"mr-3 icon"},l.a.createElement(u.a,{icon:p.d})),l.a.createElement(m.o,{className:"content"},l.a.createElement(m.o,null,l.a.createElement(m.l,{className:"".concat(""!==this.state.location?"text-uppercase text-gray UpAnim":""," m-0")},l.a.createElement(m.n,null,"Location")),l.a.createElement(m.d,{tag:"".concat(""!==this.state.location?"6":"5"),className:"m-0 text-primary DownAnim"},l.a.createElement(m.p,null,this.state.location))),"location"===this.state.currentListItem?l.a.createElement(m.o,{className:"RightSlideAnim"},l.a.createElement(u.a,{icon:p.a})):"")),l.a.createElement(m.i,{className:"".concat("Game Type"===this.state.currentListItem?"current ":"","list-group-item d-flex align-items-center"),onClick:function(){return e.setCurrentTab("Game Type")}},l.a.createElement(m.o,{className:"mr-3 icon"},l.a.createElement(u.a,{icon:p.f})),l.a.createElement(m.o,{className:"content"},l.a.createElement(m.o,null,l.a.createElement(m.l,{className:"".concat(""!==this.state.gameType?"text-uppercase text-gray UpAnim":""," m-0")},l.a.createElement(m.n,null,"Game Type")),l.a.createElement(m.d,{tag:"".concat(""!==this.state.gameType?"6":"5"),className:"m-0 text-primary DownAnim"},l.a.createElement(m.p,null,this.state.gameType))),"Game Type"===this.state.currentListItem?l.a.createElement(m.o,{className:"RightSlideAnim"},l.a.createElement(u.a,{icon:p.a})):"")),l.a.createElement(m.i,{className:"".concat("Your Team"===this.state.currentListItem?"current ":"","list-group-item d-flex align-items-center"),onClick:function(){return e.setCurrentTab("Your Team")}},l.a.createElement(m.o,{className:"mr-3 icon"},l.a.createElement(u.a,{icon:p.h})),l.a.createElement(m.o,{className:"content"},l.a.createElement(m.o,null,l.a.createElement(m.l,{className:"".concat(""!==this.state.yourTeam?"text-uppercase text-gray UpAnim":""," m-0")},l.a.createElement(m.n,null,"Your Team")),l.a.createElement(m.d,{tag:"".concat(""!==this.state.yourTeam?"6":"5"),className:"m-0 text-primary DownAnim"},l.a.createElement(m.p,null,this.state.yourTeam))),"Your Team"===this.state.currentListItem?l.a.createElement(m.o,{className:"RightSlideAnim"},l.a.createElement(u.a,{icon:p.a})):"")),l.a.createElement(m.i,{className:"".concat("payment"===this.state.currentListItem?"current ":"","list-group-item d-flex align-items-center"),onClick:function(){return e.setCurrentTab("payment")}},l.a.createElement(m.o,{className:"mr-3 icon"},l.a.createElement(u.a,{icon:p.b})),l.a.createElement(m.o,{className:"content"},l.a.createElement(m.o,null,l.a.createElement(m.l,{className:"".concat(""!==this.state.payment?"text-uppercase text-gray UpAnim":""," m-0")},l.a.createElement(m.n,null,"Payment")),l.a.createElement(m.d,{tag:"".concat(""!==this.state.payment?"6":"5"),className:"m-0 text-primary DownAnim"},l.a.createElement(m.p,null,this.state.payment))),"payment"===this.state.currentListItem?l.a.createElement(m.o,{className:"RightSlideAnim"},l.a.createElement(u.a,{icon:p.a})):""))))))}}]),t}(l.a.Component),d=Object(i.lazy)(function(){return Promise.all([a.e(7),a.e(1)]).then(a.bind(null,39))}),h=Object(i.lazy)(function(){return a.e(0).then(a.bind(null,40))}),g=Object(i.lazy)(function(){return a.e(3).then(a.bind(null,42))}),b=Object(i.lazy)(function(){return a.e(2).then(a.bind(null,41))}),y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={currentTab:"",currentGame:{}},a.setDist=function(e){a.props.setLocation("upto ".concat(e," near you")),a.props.changeTab("Game Type")},a.setGame=function(e){a.setState({currentGame:e},function(){a.props.setGameName(e.gameName),a.props.changeTab("Your Team")})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({currentTab:e.currentTab})}},{key:"render",value:function(){var e=l.a.createElement(d,null);switch(this.state.currentTab){case"location":e=l.a.createElement(d,{getDist:this.setDist});break;case"Game Type":e=l.a.createElement(h,{setGame:this.setGame});break;case"Your Team":e=l.a.createElement(g,{game:this.state.currentGame,setTeam:this.props.setTeam});break;case"payment":e=l.a.createElement(b,null)}if(null!=e)return l.a.createElement(m.c,{className:"container-fluid resultFragment w-100 p-3 ".concat("Your Team"===this.state.currentTab||"payment"===this.state.currentTab?"aqua":"primary")},l.a.createElement(i.Suspense,{fallback:l.a.createElement(m.c,null,"Connecting to payment gateway...")},e))}},{key:"componentWillUnmount",value:function(){console.log(this.state.currentTab)}}]),t}(l.a.Component);a.d(t,"b",function(){return T});var E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={location:"",currentTab:"location",currentGameName:"",setTeamName:""},a.setLocationFun=function(e){a.setState({location:e})},a.setCurrentTab=function(e){a.setState({currentTab:e},function(){"Your Team"===a.state.currentTab||"payment"===a.state.currentTab?(document.querySelector("body").classList.contains("aqua")&&document.querySelector("body").classList.remove("aqua"),document.querySelector("body").classList.add("primary")):(document.querySelector("body").classList.contains("primary")&&document.querySelector("body").classList.remove("primary"),document.querySelector("body").classList.add("aqua"))})},a.setGameName=function(e){a.setState({currentGameName:e})},a.setTeam=function(e,t){a.setState({setTeamName:e},function(){a.setCurrentTab(t)})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App container"},l.a.createElement(m.c,{className:"row"},l.a.createElement(m.c,{className:"col col-12 col-md-5 col-sm-5"},l.a.createElement(f,{location:this.state.location,currentTab:this.state.currentTab,currentGameName:this.state.currentGameName,changeTab:this.setCurrentTab,setTeamName:this.state.setTeamName})),l.a.createElement(m.c,{className:"col col-12 col-md-7 col-sm-7"},l.a.createElement(y,{setLocation:this.setLocationFun,currentTab:this.state.currentTab,setGameName:this.setGameName,changeTab:this.setCurrentTab,setTeam:this.setTeam}))))}}]),t}(l.a.Component),T=(t.a=E,[{gameName:"Tennis",teams:0,players:98,image:"tennis.jpg",icon:""},{gameName:"Soccer",teams:24,players:0,image:"",icon:"soccer.svg"},{gameName:"Hockey",teams:0,players:0,image:"",icon:"hockey.svg"},{gameName:"Rugby",teams:0,players:0,image:"",icon:"rugby.svg"},{gameName:"Basketball",teams:32,players:0,image:"basketball.jpg",icon:""},{gameName:"Cricket",teams:45,players:0,image:"",icon:"cricket.svg"},{gameName:"Kabaddi",teams:0,players:0,image:"",icon:"kabaddi.svg"}])},16:function(e,t,a){e.exports=a.p+"static/media/logo.6cb70b1f.svg"},17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=(a(22),a(13)),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(s.a,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/premchand0501/react-sport",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/premchand0501/react-sport","/service-worker.js");i?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):l(t,e)})}}()}},[[17,5,6]]]);
//# sourceMappingURL=main.23c4091e.chunk.js.map