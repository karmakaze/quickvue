webpackJsonp([1],{"0i8D":function(e,t){},"2UN7":function(e,t){},"5p5s":function(e,t){},C3V3:function(e,t){},DAnY:function(e,t){},"DdE+":function(e,t){},Efuz:function(e,t){},F5CV:function(e,t){},N9Z4:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("/5sW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"app"},a,!1,function(e){s("dcbw")},null,null).exports,n=s("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"readme"},[s("h1",{attrs:{id:"markdown-header-kaizenboard-github-issues-on-a-kanban-board"}},[e._v("kaizenboard - github issues on a kanban board")]),e._v(" "),s("p",[e._v("Go to "),s("a",{attrs:{href:"https://kaizenboard.xyz/#/ponylang/ponyc",rel:"nofollow"}},[e._v("https://kaizenboard.xyz/#/ponylang/ponyc")]),e._v(" to see issues in repository "),s("a",{attrs:{href:"http://github.com/ponylang/ponyc",rel:"nofollow"}},[e._v("github.com/ponylang/ponyc")]),e._v(". If you see an Error 502, click (Retry for a live version).")]),e._v(" "),s("p",[e._v("Click on "),s("code",[e._v("↗github")]),e._v(" to open an issue in a separate tab. Depending on your browser, the tab/page may be opened in the background.")]),e._v(" "),s("p",[e._v("Click on the "),s("code",[e._v("[+]")]),e._v(" at the top of the 'Backlog' column to create a New Issue.")]),e._v(" "),s("p",[e._v("Issue cards can be dragged around but currently do not update. "),s("em",[e._v("["),s("strong",[e._v("Coming soon")]),e._v("]")])]),e._v(" "),s("h3",{attrs:{id:"markdown-header-options"}},[e._v("Options")]),e._v(" "),s("p",[e._v("If the repo has many issues, each of the Backlog or Archived columms can be collapsed, e.g.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://kaizenboard.xyz/?backlog=0#/ponylang/ponyc",rel:"nofollow"}},[e._v("https://kaizenboard.xyz/?backlog=0#/ponylang/ponyc")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://kaizenboard.xyz/?archived=0#/ponylang/ponyc",rel:"nofollow"}},[e._v("https://kaizenboard.xyz/?archived=0#/ponylang/ponyc")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://kaizenboard.xyz/?backlog=0&archived=0#/ponylang/ponyc",rel:"nofollow"}},[e._v("https://kaizenboard.xyz/?backlog=0&archived=0#/ponylang/ponyc")])])]),e._v(" "),s("p",[e._v("Clicking on the blank space of the collapsed column expands it."),s("br"),e._v("\nRight-click on the collapsed word 'BACKLOG' or 'ARCHIVED' to open github issues listed in a new tab."),s("br"),e._v("\n(the 'Archived' issues listed are approximate--doesn't include issues with closed milestones)")]),e._v(" "),s("h2",{attrs:{id:"markdown-header-column-classification-of-issues"}},[e._v("Column classification of Issues")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Backlog")]),e._v(" "),s("th",[e._v("Ready")]),e._v(" "),s("th",[e._v("In-progress")]),e._v(" "),s("th",[e._v("Done")]),e._v(" "),s("th",[e._v("Archived")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v(" is:open")])]),e._v(" "),s("td",[s("code",[e._v(" is:open")])]),e._v(" "),s("td",[s("code",[e._v(" is:open")])]),e._v(" "),s("td",[s("code",[e._v(" is:closed")])]),e._v(" "),s("td",[s("code",[e._v(" is:closed")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v(" no:milestone")])]),e._v(" "),s("td",[s("code",[e._v(" milestone")])]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",[e._v(" no:milestone")]),e._v(" OR"),s("br"),s("code",[e._v(" milestone")]),e._v("."),s("code",[e._v("is:open")])]),e._v(" "),s("td",[s("code",[e._v(" milestone")]),e._v("."),s("code",[e._v("is:closed")]),e._v(" OR"),s("br"),s("code",[e._v(" label:archived")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v(" no:assignee")])]),e._v(" "),s("td",[s("code",[e._v(" no:assignee")])]),e._v(" "),s("td",[s("code",[e._v(" assignee")])]),e._v(" "),s("td",[s("code",[e._v(" ")]),e._v("no "),s("code",[e._v("label:archived")])]),e._v(" "),s("td")])])]),e._v(" "),s("p",[e._v("The above terminology corresponds to GitHub v3 API for listing issues for a repository: "),s("a",{attrs:{href:"https://developer.github.com/v3/issues/#list-issues-for-a-repository",rel:"nofollow"}},[e._v("https://developer.github.com/v3/issues/#list-issues-for-a-repository")])]),e._v(" "),s("h3",{attrs:{id:"markdown-header-ordering-of-issues"}},[e._v("Ordering of Issues")]),e._v(" "),s("ul",[s("li",[e._v("Issues with "),s("code",[e._v("label:@high")]),e._v(" appear at the top of 'Backlog', 'Ready', and 'In-progress' columns.")]),e._v(" "),s("li",[e._v("Issues with "),s("code",[e._v("label:@low")]),e._v(" appear at the bottom of 'Backlog', 'Ready', and 'In-progress' columns.")]),e._v(" "),s("li",[e._v("The 'Done' and 'Archived' columns show issues in reverse chronological order.")])]),e._v(" "),s("h3",{attrs:{id:"markdown-header-issue-size-estimates"}},[e._v("Issue Size Estimates")]),e._v(" "),s("p",[e._v("Counting Rod Numerals are shown to reflect size estimate labels as follows:")]),e._v(" "),s("p",[e._v("𝍠 "),s("code",[e._v("label:small")]),e._v(", "),s("code",[e._v("label:size-s")]),e._v("*, "),s("code",[e._v("label:size-1")])]),e._v(" "),s("p",[e._v("𝍡 "),s("code",[e._v("label:medium")]),e._v(", "),s("code",[e._v("label:size-m")]),e._v("*, "),s("code",[e._v("label:size-2")])]),e._v(" "),s("p",[e._v("𝍢 "),s("code",[e._v("label:large")]),e._v(", "),s("code",[e._v("label:size-l")]),e._v("*, "),s("code",[e._v("label:size-3")])]),e._v(" "),s("p",[e._v("𝍣 "),s("code",[e._v("label:xlarge")]),e._v(", "),s("code",[e._v("label:size-x")]),e._v("*, "),s("code",[e._v("label:size-4")]),e._v(", "),s("code",[e._v("label:size-5")]),e._v(", etc.")]),e._v(" "),s("p",[s("em",[s("code",[e._v("*")]),e._v(" can have any subsequent characters in label.")])])])}]};var l=s("VU/8")({props:[],data:function(){return{}},methods:{}},o,!1,function(e){s("DdE+")},"data-v-df8a4222",null).exports,c=s("mvHQ"),d=s.n(c),u=["localhost","127.0.0.1","::1"].includes(location.hostname);var v={created:function(){this.load()},data:function(){return{services:[]}},watch:{$route:function(){this.load()}},methods:{load:function(){this.loadGithub(function(){})},selected:function(e){this.selecteditem=e},loadGithub:function(e){var t=this;this.search_source&&(this.search_source.cancel("cancel search due to newer request"),this.search_source=null),this.search_source=this.$axios.CancelToken.source();this.$axios.get("http://statuspages.me:8880/services",{headers:{},cancelToken:this.search_source.token}).then(function(s){var r;t.services=s.data,r="got services response body: "+d()(t.services),u&&("function"==typeof r&&(r=r()),console.log(r)),e()})}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{width:"100%"}},[t("div",{staticClass:"services",staticStyle:{width:"100%"}},[this._l(this.services,function(e){return[t("service-card",{key:e.id,attrs:{service:e}})]})],2),this._v(" "),t("div",[t("service-add")],1)])},staticRenderFns:[]};var f=s("VU/8")(v,h,!1,function(e){s("N9Z4")},"data-v-35ab5157",null).exports,p=s("Gu7T"),m=s.n(p),_=s("fZjL"),g=s.n(_),y=s("pFYg"),b=s.n(y),k=s("W3Iv"),w=s.n(k),x=s("BO1k"),S=s.n(x),z=s("gRE1"),$=s.n(z),U=["localhost","127.0.0.1","::1"].includes(location.hostname);function C(e){U&&("function"==typeof e&&(e=e()),console.log(e))}var I={created:function(){this.load()},data:function(){return{columns:[]}},watch:{$route:function(){this.load()}},methods:{formatTitle:function(){return this.$route.params.repoOwner+"/"+this.$route.params.repoName},newIssueUrl:function(){return"https://github.com/"+this.$route.params.repoOwner+"/"+this.$route.params.repoName+"/issues/new"},backlogIssuesUrl:function(){return"https://github.com/"+this.$route.params.repoOwner+"/"+this.$route.params.repoName+"/issues?q=no:milestone+no:assignee"},archivedIssuesUrl:function(){return"https://github.com/"+this.$route.params.repoOwner+"/"+this.$route.params.repoName+"/issues?q=label:archived"},load:function(){var e=this,t=this.$route.params.repoOwner,s=this.$route.params.repoName;"pivotaltracker"===t.toLowerCase()?this.loadPivotalTracker(s,function(){return e.dragulaContainers(e)}):this.loadGithub(t,s,function(){return e.dragulaContainers(e)})},selected:function(e){this.selecteditem=e},dragulaContainers:function(e){setTimeout(function(){$()(document.querySelectorAll(".kanban-column")).forEach(function(t){e.$drake.containers.push(t)})},500)},loadGithub:function(e,t,s){var r=this;this.search_source&&(this.search_source.cancel("cancel search due to newer request"),this.search_source=null),this.search_source=this.$axios.CancelToken.source();var a,i,n=null;if(document.cookie){var o=(a="ghat",2===(i=("; "+document.cookie).split("; "+a+"=")).length?i[1].split(";")[0]:"");o&&(n="token "+o)}var l="https://api.github.com/repos/"+e+"/"+t+"/issues?filter=all&state=all&per_page=100",c={};n&&(c={Authorization:n},l=l+"&_="+Date.now()),this.$axios.get(l,{headers:c,cancelToken:this.search_source.token}).then(function(e){var t=e.data,a=[],i={},n=[],o=[],l=[],c=!0,u=!1,v=void 0;try{for(var h,f=S()(t);!(c=(h=f.next()).done);c=!0){var p=h.value;C(function(){var e=[];e.push("ISSUE");var t=!0,s=!1,r=void 0;try{for(var a,i=S()(w()(p));!(t=(a=i.next()).done);t=!0){var n=a.value;if(null===n[1]||"object"!==b()(n[1]))e.push("  "+n[0]+": "+d()(n[1]));else{var o=d()(g()(n[1]));o=o.replace('["',"{").replace(/","/g,", ").replace('"]',"}"),e.push("  "+n[0]+": "+o)}}}catch(e){s=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(s)throw r}}return e.push(""),e.join("  |")}),"closed"===p.state?p.milestone&&"closed"===p.milestone.state||p.labels.find(function(e){return"archived"===e.name})?l.push(p):o.push(p):p.assignee?n.push(p):p.milestone?"closed"===p.milestone.state?l.push(p):p.milestone.title in i?i[p.milestone.title].push(p):i[p.milestone.title]=[p]:a.push(p)}}catch(e){u=!0,v=e}finally{try{!c&&f.return&&f.return()}finally{if(u)throw v}}var _=[],y=!0,k=!1,x=void 0;try{for(var z,$=S()(g()(i).sort());!(y=(z=$.next()).done);y=!0){var U=z.value;_.push.apply(_,m()(i[U]))}}catch(e){k=!0,x=e}finally{try{!y&&$.return&&$.return()}finally{if(k)throw x}}var I=function(e){var t=[],s=[],r=[],a=!0,i=!1,n=void 0;try{for(var o,l=S()(e);!(a=(o=l.next()).done);a=!0){var c=o.value;c.labels.find(function(e){return"@high"===e.name})?t.push(c):c.labels.find(function(e){return"@low"===e.name})?r.push(c):s.push(c)}}catch(e){i=!0,n=e}finally{try{!a&&l.return&&l.return()}finally{if(i)throw n}}return t.push.apply(t,s),t.push.apply(t,r),t},R=location.search.startsWith("?")?location.search.substring(1):location.search,V={},E=!0,A=!1,M=void 0;try{for(var F,P=S()(R.split("&"));!(E=(F=P.next()).done);E=!0){var T=F.value.split("=");V[T[0]]=T[1]}}catch(e){A=!0,M=e}finally{try{!E&&P.return&&P.return()}finally{if(A)throw M}}r.columns=[{name:"Backlog",collapsed:"0"===V.backlog&&r.backlogIssuesUrl(),cards:I(a)},{name:"Ready",collapsed:!1,cards:I(_)},{name:"In-progress",collapsed:!1,cards:I(n)},{name:"Done",collapsed:!1,cards:I(o)},{name:"Archived",collapsed:"0"===V.archived&&r.archivedIssuesUrl(),cards:I(l)}],s()})},loadPivotalTracker:function(e,t){var s=this;this.search_source&&(this.search_source.cancel("cancel search due to newer request"),this.search_source=null),this.search_source=this.$axios.CancelToken.source();var r,a,i=null;if(document.cookie){r="token",a=("; "+document.cookie).split("; "+r+"="),i=2===a.length?a[1].split(";")[0]:""}null===i&&(document.cookie="token=<change me to pivotal tracer token>; expires=2019-01-01T00:00:00Z; path=/");var n="https://www.pivotaltracker.com/services/v5/projects/"+e+"/stories?filter=state:planned+OR+state:unstarted+OR+state:started+OR+state:finished+OR+state:delivered",o={};i&&(o={"X-TrackerToken":i}),this.$axios.get(n,{headers:o,cancelToken:this.search_source.token}).then(function(e){var r=e.data,a=[],n=[],o=[],l=[],c=[],u=[],v=!0,h=!1,f=void 0;try{for(var p,m=S()(r);!(v=(p=m.next()).done);v=!0){var _=p.value;i&&C(function(){var e=[];e.push("ISSUE");var t=!0,s=!1,r=void 0;try{for(var a,i=S()(w()(_));!(t=(a=i.next()).done);t=!0){var n=a.value;if(null===n[1]||"object"!==b()(n[1]))e.push("  "+n[0]+": "+d()(n[1]));else{var o=d()(g()(n[1]));o=o.replace('["',"{").replace(/","/g,", ").replace('"]',"}"),e.push("  "+n[0]+": "+o)}}}catch(e){s=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(s)throw r}}return e.push(""),e.join("  |")}),"release"!==_.story_type&&(["accepted","rejected"].includes(_.current_state)?u.push(_):["finished","delivered"].includes(_.current_state)?c.push(_):"unstarted"===_.current_state?_.owner_ids.length?o.push(_):n.push(_):"started"===_.current_state?l.push(_):a.push(_))}}catch(e){h=!0,f=e}finally{try{!v&&m.return&&m.return()}finally{if(h)throw f}}var y=function(e){var t=[],s=[],r=[],a=!0,i=!1,n=void 0;try{for(var o,l=S()(e);!(a=(o=l.next()).done);a=!0){var c=o.value;c.labels.find(function(e){return"@high"===e.name})?t.push(c):c.labels.find(function(e){return"@low"===e.name})?r.push(c):s.push(c)}}catch(e){i=!0,n=e}finally{try{!a&&l.return&&l.return()}finally{if(i)throw n}}return t.push.apply(t,s),t.push.apply(t,r),t},k=location.search.startsWith("?")?location.search.substring(1):location.search,x={},z=!0,$=!1,U=void 0;try{for(var I,R=S()(k.split("&"));!(z=(I=R.next()).done);z=!0){var V=I.value.split("=");x[V[0]]=V[1]}}catch(e){$=!0,U=e}finally{try{!z&&R.return&&R.return()}finally{if($)throw U}}s.columns=[{name:"Backlog",collapsed:"0"===x.backlog&&s.backlogIssuesUrl(),cards:y(n)},{name:"Ready",collapsed:!1,cards:y(o)},{name:"In-progress",collapsed:!1,cards:y(l)},{name:"Done",collapsed:!1,cards:y(c)},{name:"Archived",collapsed:"0"===x.archived&&s.archivedIssuesUrl(),cards:y(u)}],t()})}}},R={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{width:"100%"}},[s("div",{staticClass:"kanban-board",staticStyle:{width:"100%",display:"flex","flex-direction":"row"}},[e._l(e.columns,function(t,r){return[s("kanban-column",{key:t.name,style:"flex: "+(t.collapsed?"0":"1"),attrs:{column:t,add:0==r?e.newIssueUrl():""}})]})],2)])},staticRenderFns:[]};var V=s("VU/8")(I,R,!1,function(e){s("mWQ2")},"data-v-2b626e0d",null).exports;r.a.use(n.a);var E=new n.a({routes:[{path:"/",name:"ReadMe",component:l},{path:"/services",name:"Services",component:f},{path:"/:repoOwner/:repoName",name:"KaizenBoard",component:V}]}),A={props:[],data:function(){return{id:"",name:"",twitterHandle:"",statusPageUrl:"",errors:[]}},methods:{twitterLink:function(e){return e?"https://twitter.com/"+e:""},item:function(e,t){return t},selected:function(e){this.selecteditem=e},checkForm:function(e){this.id&&this.name&&this.statusPageUrl&&(this.$axios.post("http://statuspages.me:8880/services",{id:this.id,name:this.name,twitterHandle:this.twitterHandle,statusPageUrl:this.statusPageUrl}).then(function(e){console.log("RESPONSE: "+d()(e.data))}),e.preventDefault()),this.errors=[],this.id||this.errors.push("'id' is required."),this.name||this.errors.push("'Name' is required."),this.statusPageUrl||this.errors.push("'Status page' is required."),e.preventDefault()},style:function(){return{"border-style":"solid",color:"#800080"}}}},M={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{style:e.style()},[s("form",{attrs:{id:"service-add"},on:{submit:e.checkForm}},[s("table",[s("tr",[s("td",[e._v("id:")]),e._v(" "),s("td",[s("input",{attrs:{placeholder:"e.g. new-relic",size:"25"},domProps:{value:e.id},on:{input:function(t){e.id=t.target.value}}})])]),e._v(" "),s("tr",[s("td",[e._v("Name:")]),e._v(" "),s("td",[s("input",{attrs:{placeholder:"e.g. New Relic",size:"25"},domProps:{value:e.name},on:{input:function(t){e.name=t.target.value}}})])]),e._v(" "),s("tr",[s("td",[e._v("Twitter:")]),e._v(" "),s("td",[s("input",{attrs:{placeholder:"e.g. @newrelic",size:"25"},domProps:{value:e.twitterHandle},on:{input:function(t){e.twitterHandle=t.target.value}}})])]),e._v(" "),s("tr",[s("td",[e._v("Status page:")]),e._v(" "),s("td",[s("input",{attrs:{placeholder:"e.g. https://status.newrelic.com",size:"25"},domProps:{value:e.statusPageUrl},on:{input:function(t){e.statusPageUrl=t.target.value}}})])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td",e._l(e.errors,function(t,r){return s("div",{key:r},[e._v(e._s(t))])}))]),e._v(" "),e._m(0)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td"),this._v(" "),t("td",[t("input",{attrs:{type:"submit",value:"Add Service"}})])])}]};var F=s("VU/8")(A,M,!1,function(e){s("F5CV")},"data-v-f4e5966e",null).exports,P={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{style:e.style()},[s("div",[e._v("\n    "+e._s(e.service.name)+"\n    "),s("text-value",{attrs:{type:"twitter",value:e.service.twitterHandle}}),e._v("\n    :"+e._s(e.service.id)+"\n    "),s("text-value",{attrs:{type:"link",value:e.service.statusPageUrl}}),e._v("\n    modified: "),s("text-value",{attrs:{type:"date",value:e.service.updatedAt}})],1)])},staticRenderFns:[]};var T=s("VU/8")({props:["service"],data:function(){return{selecteditem:{}}},methods:{twitterLink:function(e){return e?"https://twitter.com/"+e:""},item:function(e,t){return t},selected:function(e){this.selecteditem=e},style:function(){return{"border-style":"solid",color:"#800080"}}}},P,!1,function(e){s("0i8D")},"data-v-c92539c0",null).exports,D={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{display:"flex","margin-bottom":"0.8em"}},[s("label",{staticStyle:{"margin-top":"2px"},attrs:{for:"search"}},[e._v("Search:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],staticStyle:{"flex-grow":"1"},attrs:{id:"search"},domProps:{value:e.terms},on:{input:function(t){t.target.composing||(e.terms=t.target.value)}}})])},staticRenderFns:[]};var N=s("VU/8")({name:"search-bar",data:function(){return{terms:""}},watch:{terms:function(e,t){this.$emit("terms",e)}}},D,!1,function(e){s("eJvS")},"data-v-1f1d1cce",null).exports,O={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("hr"),e._v(" "),s("div",{staticStyle:{"margin-left":"60px"}},[e._v("Title")]),e._v(" "),e._l(e.titles,function(t){return s("div",{key:t.id,staticStyle:{"margin-bottom":"10px",width:"100%",clear:"both"}},[s("div",{staticClass:"poster",staticStyle:{float:"left"}},["N/A"!=t.fields.Poster?s("img",{staticClass:"poster",staticStyle:{"margin-right":"5px","margin-bottom":"10px","object-fit":"cover"},attrs:{src:t.fields.Poster}}):e._e()]),e._v(" "),s("div",[s("div",[s("div",[s("div",{staticStyle:{display:"inline"}},[s("a",{attrs:{href:"https://www.imdb.com/title/"+t.fields.imdbID+"/"}},[e._v(e._s(t.fields.Title)+" ("+e._s(t.fields.Year)+")")])]),e._v(" "),s("div",{staticStyle:{float:"right"}},[s("div",{staticStyle:{display:"inline","font-size":"80%","vertical-align":"bottom","font-style":"italic"}},["N/A"!=t.fields.Language&&"English"!=t.fields.Language?[e._v("("+e._s(t.fields.Language)+")")]:e._e()],2),e._v(" "),s("div",{staticStyle:{display:"inline","font-size":"80%","vertical-align":"bottom","font-style":"italic"}},["N/A"!=t.fields.Genre?[e._v(e._s(t.fields.Genre))]:e._e()],2),e._v(" "),s("div",{staticStyle:{display:"inline"}},["N/A"!=t.fields.imdbRating?s("span",{staticStyle:{"font-weight":"bold",color:"#606060"}},[e._v(e._s(t.fields.imdbRating))]):s("span",[e._v("-.-")])])])])]),e._v(" "),s("div",[e._v(e._s(t.fields.Plot))])])])})],2)},staticRenderFns:[]};var j=s("VU/8")({created:function(){this.search(this.terms)},props:["terms"],data:function(){return{name:this.terms,titles:[],search_source:null}},watch:{terms:function(e,t){this.search(e)},name:function(e){this.search(e)}},methods:{search:function(e){var t=this;this.search_source&&(this.search_source.cancel("cancel search due to newer request"),this.search_source=null),this.search_source=this.$axios.CancelToken.source(),this.$axios.get("/api/objects?account_id=1&project_id=2&class=Title&name="+e,{cancelToken:this.search_source.token}).then(function(e){t.titles=e.data})}}},O,!1,function(e){s("Efuz")},"data-v-491cbc40",null).exports,W={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticStyle:{display:"inline-block","vertical-align":"top","margin-top":"1.15em"}},[s("item-list",{attrs:{items:e.items,selecteditem:e.selecteditem,selectedcolor:e.selectedcolor,keyfield:e.listkey,fields:e.listfields},on:{selected:e.selected}})],1),e._v(" "),s("div",{staticStyle:{display:"inline-block","vertical-align":"top"}},[s("item-detail",{attrs:{item:e.item,title:e.itemtitle,fields:e.itemfields,maxwidth:e.itemmaxwidth,bordercolor:e.selectedcolor}})],1)])},staticRenderFns:[]};var q=s("VU/8")({props:["items","selecteditem","listkey","listfields","itemtitle","itemfields","selectedcolor","itemmaxwidth"],data:function(){return{item:{}}},methods:{selected:function(e){this.item=e,this.$emit("selected",e)}}},W,!1,function(e){s("t1B2")},"data-v-64e4a17a",null).exports,L={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[e._l(e.items,function(t){return[s("div",{key:e.fieldValue(t,e.keyfield),staticStyle:{"border-style":"solid","margin-top":"0.2em"},style:e.selectedStyle(t===e.selecteditem),on:{click:function(s){e.selected(t)}}},[e._l(e.fields,function(r){return e._l(r,function(r,a){return s("div",{key:a,staticStyle:{display:"inline-block","vertical-align":"top","margin-left":"0.2em","margin-right":"0.2em"}},["literal"===r?[e._v(e._s(a))]:"date"===r?[e._v(e._s(new Date(e.fieldValue(t,a)).toLocaleDateString("en-CA")))]:r.match(/^\{.*\}$/)?[s("ul",e._l(e.fieldValue(t,a),function(t,r){return s("li",{key:r},[e._v(e._s(r)+": "+e._s(t))])}))]:r.match(/^\[.*\]$/)?[s("ul",e._l(e.fieldValue(t,a),function(t){return s("li",{key:t},[e._v(e._s(t))])}))]:[e._v(e._s(e.fieldValue(t,a)))]],2)})})],2)]})],2)])},staticRenderFns:[]};var H=s("VU/8")({props:["items","selecteditem","selectedcolor","keyfield","fields"],methods:{selected:function(e){this.$emit("selected",e)},selectedStyle:function(e){return e?{color:this.selectedcolor}:{}},fieldValue:function(e,t){var s=e;return t.split(".").forEach(function(e){s=s[e]}),s}}},L,!1,function(e){s("DAnY")},"data-v-d3f40d4e",null).exports,B={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{style:{"max-width":e.maxwidth}},[e.title?s("div",[e._v(e._s(e.fieldValue(e.item,e.title)||" "))]):e._e(),e._v(" "),s("div",{style:e.boxStyle()},[e._l(e.fields,function(t){return e._l(t,function(t,r){return s("div",{key:r,staticStyle:{"margin-top":"0.4em"}},[r!=e.title?e._l([e.fieldValue(e.item,r)],function(a,i){return s("div",{key:r+"-"+i},[!1!==e.showkeys?[e._v(e._s(e.fieldName(r))+":")]:e._e(),e._v(" "),"date"===t?[e._v(e._s(new Date(a).toLocaleDateString("en-CA")))]:"image"===t&&e.isValidUrl(a)?[s("img",{attrs:{src:a}})]:"link"===t&&e.isValidUrl(a)?[s("a",{attrs:{href:a}},[e._v(e._s(a))])]:"object"==typeof t&&t.hasOwnProperty("map")?[e._v(e._s(t.map(a)))]:"object"==typeof t&&t.hasOwnProperty("link")?[s("a",{attrs:{href:t.link(e.item)}},[e._v(e._s(a))])]:t.match(/^\{.*\}$/)?[s("ul",e._l(a,function(t,r){return s("li",{key:r},[e._v(e._s(r)+" : "+e._s(t))])}))]:t.match(/^\[.*\]$/)?[s("ul",e._l(a,function(t){return s("li",{key:t},[e._v(e._s(t))])}))]:[e._v(e._s(a))]],2)}):e._e()],2)})})],2)])},staticRenderFns:[]};var G=s("VU/8")({props:["item","title","fields","showkeys","maxwidth","bordercolor"],methods:{boxStyle:function(){var e={"margin-top":"0.2em"};return this.bordercolor&&(e["border-style"]="solid",e.color=this.bordercolor),e},fieldName:function(e){var t=e.split(".");return t[t.length-1]},fieldValue:function(e,t){var s=e;return t.split(".").forEach(function(e){s=s[e]}),s},isValidUrl:function(e){return e.startsWith("https:")||e.startsWith("http:")||e.startsWith("data:")}}},B,!1,function(e){s("C3V3")},"data-v-3a4d233f",null).exports,Y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",["date"===e.type?[e._v(e._s(new Date(Date.parse(e.value)).toLocaleDateString("en-CA")))]:"datetime"===e.type?[e._v(e._s(new Date(Date.parse(e.value)).toISOString().replace("T"," ")))]:"image"===e.type&&e.isValidUrl(e.value)?[s("img",{attrs:{src:e.value}})]:"link"===e.type&&e.isValidUrl(e.value)?[s("a",{attrs:{href:e.value}},[e._v(e._s(e.value))])]:"twitter"===e.type?[s("a",{attrs:{href:e.twitterUrl(e.value)}},[e._v(e._s(e.twitterHandle(e.value)))])]:"function"==typeof e.type?[e._v(e._s(e.type("text",e.value)))]:[e._v(e._s(e.value))]],2)},staticRenderFns:[]};var J=s("VU/8")({props:["type","value"],methods:{isValidUrl:function(e){return e.startsWith("https:")||e.startsWith("http:")||e.startsWith("data:")},twitterHandle:function(e){return e?e.startsWith("@")?e:"@"+e:""},twitterUrl:function(e){return e?"https://twitter.com/"+e.replace(/^@+/,""):""}}},Y,!1,function(e){s("2UN7")},"data-v-1a8a173b",null).exports,Z={created:function(){this.search(this.column)},props:["column","add","width"],data:function(){return{name:this.terms,cards:[],search_source:null,selecteditem:{}}},methods:{expandColumn:function(){var e=this.column.name.toLowerCase();location.href=location.href.replace(e+"=0",e+"=1")},search:function(e){},selected:function(e){this.selecteditem=e},style:function(){return{width:this.width,"min-height":"700px"}}}},Q={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"kanban-title-column"},[e.column.collapsed?[e.add?s("div",{staticStyle:{"margin-left":"0.5em"}},[s("a",{attrs:{href:e.add,target:"github_issues"}},[e._v("[+]")])]):e._e(),e._v(" "),s("div",{staticClass:"collapsed",on:{click:function(t){e.expandColumn()}}},[s("a",{staticStyle:{color:"#606060"},attrs:{href:e.column.collapsed,target:"github_issues"}},[e._v(e._s(e.column.name.toUpperCase().split("").join("\n")))])])]:[s("div",{staticStyle:{"text-align":"center"}},[e.add?s("span",{staticClass:"add",staticStyle:{"margin-left":"0.5em"}},[s("a",{attrs:{href:e.add,target:"github_issues"}},[e._v("[+]")])]):e._e(),e._v(" "),s("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.column.name))]),e._v(" "),e.add?s("span",{staticStyle:{"margin-left":"0.5em",color:"white"}},[e._v("[+]")]):e._e()]),e._v(" "),s("div",{staticClass:"kanban-column",style:e.style()},[e._l(e.column.cards,function(e){return[s("kanban-card",{key:e.number,attrs:{card:e}})]})],2)]],2)},staticRenderFns:[]};var K=s("VU/8")(Z,Q,!1,function(e){s("5p5s")},"data-v-92ebbe6e",null).exports,X={props:["card"],created:function(){this.init()},data:function(){return{selecteditem:{}}},methods:{selected:function(e){this.selecteditem=e},init:function(){if(this.card.estimate||0===this.card.estimate)this.card.size=""+this.card.estimate;else{var e=["small","medium","large","xlarge"],t=!0,s=!1,r=void 0;try{for(var a,i=S()(this.card.labels);!(t=(a=i.next()).done);t=!0){var n=a.value;n.color&&"ffffff"!==n.color&&(this.card.bgcolor="#"+n.color),n.name.startsWith("size-")?this.card.size=n.name.substring(5):e.includes(n.name.toLowerCase())&&(this.card.size=n.name.substring(0,1))}}catch(e){s=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(s)throw r}}this.card.bgcolor||(this.card.bgcolor="#e0e0e0")}},cardAssigned:function(){return this.card.assignee?this.card.assignee.login:this.card.owner_ids.join(" ")},cardAssignedAvatarUrl:function(){return this.card.assignee?this.card.assignee.avatar_url:""},cardIssueUrl:function(){return this.card.id?"https://www.pivotaltracker.com/story/show/"+this.card.id:this.card.url?this.card.url.replace(/^.*api\.github\.com\/repos\/(.*)$/,"https://github.com/$1"):""},formatCardTypeSize:function(){return"("+("bug"===this.card.story_type?"👹":"chore"===this.card.story_type?"⚙":"⭐")+([0,"0"].includes(this.card.size)?" ٠ ":[1,"1","s"].includes(this.card.size)?"𝍠":[2,"2","m"].includes(this.card.size)?"𝍡":[3,"3","l"].includes(this.card.size)?"𝍢":[4,"4","x"].includes(this.card.size)||"number"==typeof this.card.size&&this.card.size>3?"𝍣":"")+")"},formatCardLabels:function(){var e=[],t=!0,s=!1,r=void 0;try{for(var a,i=S()(this.card.labels);!(t=(a=i.next()).done);t=!0){var n=a.value;e.push("🏷 "+n.name)}}catch(e){s=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(s)throw r}}return e.join(" ")},cardStyle:function(){return this.card.bgcolor?{"background-color":this.pastelize(this.card.bgcolor),border:"2px solid "+this.intensify(this.card.bgcolor),"border-radius":"4px"}:{"background-color":"#d0d0d0",border:"2px solid #505050","border-radius":"4px"}},titleStyle:function(){return{"background-color":this.card.bgcolor}},footerStyle:function(){return this.card.bgcolor?{"border-top":"1px solid "+this.intensify(this.card.bgcolor)}:{"border-top":"1px solid #303030"}},intensify:function(e){var t,s,r;if(e.startsWith("#"))return 7===e.length?(t=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16)):4===e.length&&(t=parseInt(e.substring(1,2)+e.substring(1,2),16),s=parseInt(e.substring(2,3)+e.substring(2,3),16),r=parseInt(e.substring(3,4)+e.substring(3,4),16)),t>s&&t>r?(s=Math.floor(.7*s),r=Math.floor(.7*r)):s>t&&s>r?(t=Math.floor(.7*t),r=Math.floor(.7*r)):r>t&&r>s?(t=Math.floor(.7*t),s=Math.floor(.7*s)):t<s&&t<r?(t=Math.floor(.7*t),s=Math.floor(.9*s),r=Math.floor(.9*r)):s<t&&s<r?(t=Math.floor(.9*t),s=Math.floor(.7*s),r=Math.floor(.9*r)):r<t&&r<s?(t=Math.floor(.9*t),s=Math.floor(.9*s),r=Math.floor(.7*r)):(t=Math.floor(.8*t),s=Math.floor(.8*s),r=Math.floor(.8*r)),"#"+t.toString(16)+s.toString(16)+r.toString(16)},pastelize:function(e){var t,s,r;if(e.startsWith("#"))return 7===e.length?(t=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16)):4===e.length&&(t=parseInt(e.substring(1,2)+e.substring(1,2),16),s=parseInt(e.substring(2,3)+e.substring(2,3),16),r=parseInt(e.substring(3,4)+e.substring(3,4),16)),t=Math.floor(153*Math.sqrt(t/255)+.4*t),s=Math.floor(153*Math.sqrt(s/255)+.4*s),r=Math.floor(153*Math.sqrt(r/255)+.4*r),"#"+t.toString(16)+s.toString(16)+r.toString(16)},move:function(e,t){}}},ee={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"kanban-card",style:e.cardStyle()},[s("div",{staticClass:"kanban-card-title",style:e.titleStyle()},[s("span",{staticStyle:{"margin-left":"0.2em"}},[s("a",{staticStyle:{color:"#303030"},attrs:{href:e.cardIssueUrl(),target:"github_issues"}},[e._v("#"+e._s(e.card.id||""))])]),s("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.card.number||""))]),e._v(" "),s("span",[e._v(e._s(e.formatCardTypeSize()))]),e._v(" "),e.cardAssigned()?s("span",{staticStyle:{float:"right","margin-right":"0.2em"}},[s("span",{staticStyle:{"vertical-align":"top"}},[e._v(e._s(e.cardAssigned()))]),e._v(" "),e.cardAssignedAvatarUrl()?s("img",{staticStyle:{height:"1.4em"},attrs:{src:e.cardAssignedAvatarUrl()}}):e._e()]):e._e()]),e._v(" "),s("div",{staticClass:"kanban-card-description"},[e._v(e._s(e.card.title||e.card.name))]),e._v(" "),e.card.labels.length?s("div",{staticClass:"kanban-card-footer",style:e.footerStyle()},[s("span",[e._v(e._s(e.formatCardLabels()))])]):e._e()])},staticRenderFns:[]};var te=s("VU/8")(X,ee,!1,function(e){s("mAwG")},"data-v-7950f330",null).exports,se={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticStyle:{display:"inline-block","vertical-align":"top","margin-top":"1.15em"}},[s("item-list",{attrs:{items:e.items,selecteditem:e.item,selectedcolor:e.selectedcolor,keyfield:e.listkey,fields:e.listfields},on:{selected:e.selected}})],1),e._v(" "),s("div",{staticStyle:{display:"inline-block","vertical-align":"top"}},[s("lists-card",{attrs:{card:e.item}})],1)])},staticRenderFns:[]};var re=s("VU/8")({props:["items","selecteditem","listkey","listfields","itemtitle","itemfields","selectedcolor","itemmaxwidth"],data:function(){return{item:{}}},methods:{selected:function(e){this.item=e,this.$emit("selected",e)}}},se,!1,function(e){s("PFl/")},"data-v-a4dbd0d4",null).exports,ae={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{style:e.style()},[s("div",[e._v(e._s(e.card.fields.name))]),e._v(" "),s("ul",e._l(e.card.fields.items,function(t){return s("li",{key:t.name},[s("text-value",{attrs:{type:"string",value:t.name}}),e._v(" "),t.done?s("text-value",{attrs:{type:"date",value:t.done}}):e._e()],1)})),e._v(" "),s("tags",{attrs:{tags:e.card.fields.tags}}),e._v(" "),s("div",[e._v("Created: "),s("text-value",{attrs:{type:"date",value:e.card.created_at}})],1),e._v(" "),s("div",[e._v("Updated: "),s("text-value",{attrs:{type:"date",value:e.card.updated_at}})],1)],1)},staticRenderFns:[]};var ie=s("VU/8")({props:["card"],data:function(){return{selecteditem:{}}},methods:{item:function(e,t){return t},selected:function(e){this.selecteditem=e},style:function(){var e={"border-style":"solid",color:"#800080","background-color":this.card.fields.bgcolor};return e}}},ae,!1,function(e){s("YRmJ")},"data-v-17b04e24",null).exports,ne={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._l(e.tags,function(t){return[s("div",{key:t,staticClass:"tag",style:e.selectedStyle(t,t===e.selectedtag),on:{click:function(s){e.selected(t)}}},[e._v(e._s(t))])]})],2)},staticRenderFns:[]};var oe=s("VU/8")({props:["tags","selectedtag","selectedcolor"],methods:{selected:function(e){this.$emit("selected",e)},selectedStyle:function(e,t){return t?{color:this.selectedcolor}:{}}}},ne,!1,function(e){s("cFMf")},"data-v-0895e8f1",null).exports,le=s("mtWM"),ce=s.n(le);Object.defineProperty(r.a.prototype,"$axios",{value:ce.a}),r.a.config.productionTip=!1,r.a.component("service-card",T),r.a.component("service-add",F),r.a.component("search-bar",N),r.a.component("search-result",j),r.a.component("list-detail",q),r.a.component("item-list",H),r.a.component("item-detail",G),r.a.component("text-value",J),r.a.component("kaizen-board",V),r.a.component("kanban-column",K),r.a.component("kanban-card",te),r.a.component("lists-cards",re),r.a.component("lists-card",ie),r.a.component("tags",oe),i.router=E,new r.a(i).$mount("#app")},"PFl/":function(e,t){},YRmJ:function(e,t){},cFMf:function(e,t){},dcbw:function(e,t){},eJvS:function(e,t){},mAwG:function(e,t){},mWQ2:function(e,t){},t1B2:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.715baed819ea84978db8.js.map