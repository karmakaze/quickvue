webpackJsonp([0],{"6Isr":function(t,e){},C3V3:function(t,e){},DAnY:function(t,e){},Efuz:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("/5sW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"app"},r,!1,function(t){s("dcbw")},null,null).exports,a=s("/ocq"),l={created:function(){this.load()},data:function(){return{services:[]}},watch:{$route:function(){this.load()}},methods:{selected:function(t){this.selecteditem=t},title:function(){return window.location.hostname.toLowerCase().endsWith("s.me")?"StatusPages.me":"StatusPage.me"},load:function(){var t=this,e=new XMLHttpRequest;e.open("GET","https://statuspages.me/services"),e.onload=function(){if(200===e.status&&e.responseText){var s=JSON.parse(e.responseText);if(Array.isArray(s)&&s.length){var i=s;i.sort(function(t,e){var s=t.name.toLowerCase(),i=e.name.toLowerCase();return s<i?-1:s>i?1:0}),t.services=i}}},e.send()}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{width:"100%"}},[s("div",[s("h2",[t._v("   "+t._s(t.title()))])]),t._v(" "),s("div",{staticClass:"services",staticStyle:{width:"100%"}},[s("table",[t._m(0),t._v(" "),t._l(t.services,function(t){return[s("service-card",{key:t.id,attrs:{service:t}})]})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{attrs:{align:"right"}},[this._v("Service     ")]),this._v(" "),e("th",{attrs:{align:"center"}},[this._v("Since")]),this._v(" "),e("th",{attrs:{align:"left"}},[this._v("     Current status")])])}]};var c=s("VU/8")(l,o,!1,function(t){s("6Isr")},"data-v-72fd0739",null).exports;i.a.use(a.a);var d=new a.a({routes:[{path:"/",name:"Services",component:c}]}),u=s("mvHQ"),v=s.n(u),f={props:[],data:function(){return{id:"",name:"",twitterHandle:"",statusPageUrl:"",errors:[]}},methods:{twitterLink:function(t){return t?"https://twitter.com/"+t:""},item:function(t,e){return e},selected:function(t){this.selecteditem=t},checkForm:function(t){this.id&&this.name&&this.statusPageUrl&&(this.$axios.post("https://statuspages.me/services",{id:this.id,name:this.name,twitterHandle:this.twitterHandle,statusPageUrl:this.statusPageUrl}).then(function(t){console.log("RESPONSE: "+v()(t.data))}),t.preventDefault()),this.errors=[],this.id||this.errors.push("'id' is required."),this.name||this.errors.push("'Name' is required."),this.statusPageUrl||this.errors.push("'Status page' is required."),t.preventDefault()},style:function(){return{"border-style":"solid",color:"#800080"}}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:t.style()},[s("form",{attrs:{id:"service-add"},on:{submit:t.checkForm}},[s("table",[s("tr",[s("td",[t._v("id:")]),t._v(" "),s("td",[s("input",{attrs:{placeholder:"e.g. new-relic",size:"25"},domProps:{value:t.id},on:{input:function(e){t.id=e.target.value}}})])]),t._v(" "),s("tr",[s("td",[t._v("Name:")]),t._v(" "),s("td",[s("input",{attrs:{placeholder:"e.g. New Relic",size:"25"},domProps:{value:t.name},on:{input:function(e){t.name=e.target.value}}})])]),t._v(" "),s("tr",[s("td",[t._v("Twitter:")]),t._v(" "),s("td",[s("input",{attrs:{placeholder:"e.g. @newrelic",size:"25"},domProps:{value:t.twitterHandle},on:{input:function(e){t.twitterHandle=e.target.value}}})])]),t._v(" "),s("tr",[s("td",[t._v("Status page:")]),t._v(" "),s("td",[s("input",{attrs:{placeholder:"e.g. https://status.newrelic.com",size:"25"},domProps:{value:t.statusPageUrl},on:{input:function(e){t.statusPageUrl=e.target.value}}})])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",t._l(t.errors,function(e,i){return s("div",{key:i},[t._v(t._s(e))])}))]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td"),this._v(" "),e("td",[e("input",{attrs:{type:"submit",value:"Add Service"}})])])}]};var h=s("VU/8")(f,m,!1,function(t){s("zcRY")},"data-v-5aa0b620",null).exports,p={props:["service"],created:function(){this.load()},data:function(){return{status:{status:"Checking..."}}},methods:{load:function(){var t="https://statuspages.me/services/"+this.service.id+"/checks/*/status",e=this,s=new XMLHttpRequest;s.open("GET",t),s.onload=function(){if(200===s.status&&s.responseText){var t=JSON.parse(s.responseText);Array.isArray(t)&&t.length?e.status=t[0]:e.status={status:""}}else e.status={status:""}},s.send()},twitterUrl:function(){return this.service.twitterHandle?"https://twitter.com/"+this.service.twitterHandle.replace(/^@+/,""):""},statusLine:function(t){if(!t)return t;var e=t.indexOf("\n");return e>=0&&(t=t.substring(0,e)),t.replace(/ +/," ")},statusColor:function(){var t={color:"#e00000"};return this.status&&("OK"===this.status.state?t={color:"#00b000"}:"WARN"===this.status.state&&(t={color:"#f08000"})),t},style:function(){return{"border-style":"solid",color:"#800080"}}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{attrs:{align:"right"}},[s("text-value",{attrs:{type:"link",value:[t.twitterUrl(),t.service.name],color:{color:"#304444"}}})],1),t._v(" "),s("td",{style:t.statusColor(),attrs:{align:"center"}},[s("text-value",{attrs:{type:"age",value:t.status.createdAt}})],1),t._v(" "),s("td",{style:t.statusColor()},[s("text-value",{attrs:{type:"link",value:[t.status.statusPageUrl,t.statusLine(t.status.status)],color:t.statusColor()}})],1)])},staticRenderFns:[]};var y=s("VU/8")(p,_,!1,function(t){s("zdL/")},"data-v-f82e9be0",null).exports,g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{display:"flex","margin-bottom":"0.8em"}},[s("label",{staticStyle:{"margin-top":"2px"},attrs:{for:"search"}},[t._v("Search:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.terms,expression:"terms"}],staticStyle:{"flex-grow":"1"},attrs:{id:"search"},domProps:{value:t.terms},on:{input:function(e){e.target.composing||(t.terms=e.target.value)}}})])},staticRenderFns:[]};var w=s("VU/8")({name:"search-bar",data:function(){return{terms:""}},watch:{terms:function(t,e){this.$emit("terms",t)}}},g,!1,function(t){s("eJvS")},"data-v-1f1d1cce",null).exports,k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("hr"),t._v(" "),s("div",{staticStyle:{"margin-left":"60px"}},[t._v("Title")]),t._v(" "),t._l(t.titles,function(e){return s("div",{key:e.id,staticStyle:{"margin-bottom":"10px",width:"100%",clear:"both"}},[s("div",{staticClass:"poster",staticStyle:{float:"left"}},["N/A"!=e.fields.Poster?s("img",{staticClass:"poster",staticStyle:{"margin-right":"5px","margin-bottom":"10px","object-fit":"cover"},attrs:{src:e.fields.Poster}}):t._e()]),t._v(" "),s("div",[s("div",[s("div",[s("div",{staticStyle:{display:"inline"}},[s("a",{attrs:{href:"https://www.imdb.com/title/"+e.fields.imdbID+"/"}},[t._v(t._s(e.fields.Title)+" ("+t._s(e.fields.Year)+")")])]),t._v(" "),s("div",{staticStyle:{float:"right"}},[s("div",{staticStyle:{display:"inline","font-size":"80%","vertical-align":"bottom","font-style":"italic"}},["N/A"!=e.fields.Language&&"English"!=e.fields.Language?[t._v("("+t._s(e.fields.Language)+")")]:t._e()],2),t._v(" "),s("div",{staticStyle:{display:"inline","font-size":"80%","vertical-align":"bottom","font-style":"italic"}},["N/A"!=e.fields.Genre?[t._v(t._s(e.fields.Genre))]:t._e()],2),t._v(" "),s("div",{staticStyle:{display:"inline"}},["N/A"!=e.fields.imdbRating?s("span",{staticStyle:{"font-weight":"bold",color:"#606060"}},[t._v(t._s(e.fields.imdbRating))]):s("span",[t._v("-.-")])])])])]),t._v(" "),s("div",[t._v(t._s(e.fields.Plot))])])])})],2)},staticRenderFns:[]};var b=s("VU/8")({created:function(){this.search(this.terms)},props:["terms"],data:function(){return{name:this.terms,titles:[],search_source:null}},watch:{terms:function(t,e){this.search(t)},name:function(t){this.search(t)}},methods:{search:function(t){var e=this;this.search_source&&(this.search_source.cancel("cancel search due to newer request"),this.search_source=null),this.search_source=this.$axios.CancelToken.source(),this.$axios.get("/api/objects?account_id=1&project_id=2&class=Title&name="+t,{cancelToken:this.search_source.token}).then(function(t){e.titles=t.data})}}},k,!1,function(t){s("Efuz")},"data-v-491cbc40",null).exports,x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticStyle:{display:"inline-block","vertical-align":"top","margin-top":"1.15em"}},[s("item-list",{attrs:{items:t.items,selecteditem:t.selecteditem,selectedcolor:t.selectedcolor,keyfield:t.listkey,fields:t.listfields},on:{selected:t.selected}})],1),t._v(" "),s("div",{staticStyle:{display:"inline-block","vertical-align":"top"}},[s("item-detail",{attrs:{item:t.item,title:t.itemtitle,fields:t.itemfields,maxwidth:t.itemmaxwidth,bordercolor:t.selectedcolor}})],1)])},staticRenderFns:[]};var S=s("VU/8")({props:["items","selecteditem","listkey","listfields","itemtitle","itemfields","selectedcolor","itemmaxwidth"],data:function(){return{item:{}}},methods:{selected:function(t){this.item=t,this.$emit("selected",t)}}},x,!1,function(t){s("t1B2")},"data-v-64e4a17a",null).exports,U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._l(t.items,function(e){return[s("div",{key:t.fieldValue(e,t.keyfield),staticStyle:{"border-style":"solid","margin-top":"0.2em"},style:t.selectedStyle(e===t.selecteditem),on:{click:function(s){t.selected(e)}}},[t._l(t.fields,function(i){return t._l(i,function(i,r){return s("div",{key:r,staticStyle:{display:"inline-block","vertical-align":"top","margin-left":"0.2em","margin-right":"0.2em"}},["literal"===i?[t._v(t._s(r))]:"date"===i?[t._v(t._s(new Date(t.fieldValue(e,r)).toLocaleDateString("en-CA")))]:i.match(/^\{.*\}$/)?[s("ul",t._l(t.fieldValue(e,r),function(e,i){return s("li",{key:i},[t._v(t._s(i)+": "+t._s(e))])}))]:i.match(/^\[.*\]$/)?[s("ul",t._l(t.fieldValue(e,r),function(e){return s("li",{key:e},[t._v(t._s(e))])}))]:[t._v(t._s(t.fieldValue(e,r)))]],2)})})],2)]})],2)])},staticRenderFns:[]};var $=s("VU/8")({props:["items","selecteditem","selectedcolor","keyfield","fields"],methods:{selected:function(t){this.$emit("selected",t)},selectedStyle:function(t){return t?{color:this.selectedcolor}:{}},fieldValue:function(t,e){var s=t;return e.split(".").forEach(function(t){s=s[t]}),s}}},U,!1,function(t){s("DAnY")},"data-v-d3f40d4e",null).exports,V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:{"max-width":t.maxwidth}},[t.title?s("div",[t._v(t._s(t.fieldValue(t.item,t.title)||" "))]):t._e(),t._v(" "),s("div",{style:t.boxStyle()},[t._l(t.fields,function(e){return t._l(e,function(e,i){return s("div",{key:i,staticStyle:{"margin-top":"0.4em"}},[i!=t.title?t._l([t.fieldValue(t.item,i)],function(r,n){return s("div",{key:i+"-"+n},[!1!==t.showkeys?[t._v(t._s(t.fieldName(i))+":")]:t._e(),t._v(" "),"date"===e?[t._v(t._s(new Date(r).toLocaleDateString("en-CA")))]:"image"===e&&t.isValidUrl(r)?[s("img",{attrs:{src:r}})]:"link"===e&&t.isValidUrl(r)?[s("a",{attrs:{href:r}},[t._v(t._s(r))])]:"object"==typeof e&&e.hasOwnProperty("map")?[t._v(t._s(e.map(r)))]:"object"==typeof e&&e.hasOwnProperty("link")?[s("a",{attrs:{href:e.link(t.item)}},[t._v(t._s(r))])]:e.match(/^\{.*\}$/)?[s("ul",t._l(r,function(e,i){return s("li",{key:i},[t._v(t._s(i)+" : "+t._s(e))])}))]:e.match(/^\[.*\]$/)?[s("ul",t._l(r,function(e){return s("li",{key:e},[t._v(t._s(e))])}))]:[t._v(t._s(r))]],2)}):t._e()],2)})})],2)])},staticRenderFns:[]};var E=s("VU/8")({props:["item","title","fields","showkeys","maxwidth","bordercolor"],methods:{boxStyle:function(){var t={"margin-top":"0.2em"};return this.bordercolor&&(t["border-style"]="solid",t.color=this.bordercolor),t},fieldName:function(t){var e=t.split(".");return e[e.length-1]},fieldValue:function(t,e){var s=t;return e.split(".").forEach(function(t){s=s[t]}),s},isValidUrl:function(t){return t.startsWith("https:")||t.startsWith("http:")||t.startsWith("data:")}}},V,!1,function(t){s("C3V3")},"data-v-3a4d233f",null).exports,P={props:["type","value","label","color"],methods:{twitterHandle:function(t){return t?t.startsWith("@")?t:"@"+t:""},twitterUrl:function(t){return t?"https://twitter.com/"+t.replace(/^@+/,""):""},validUrl:function(t){},linkUrl:function(t){var e=t;return Array.isArray(t)&&2===t.length&&(e=t[0]),e&&(e.startsWith("https:")||e.startsWith("http:")||e.startsWith("data:"))?e:""},linkText:function(t){return Array.isArray(t)&&2===t.length?t[1]:t.replace(/^https?:\/\//,"").replace(/\?.*/,"").replace(/\/$/,"")},age:function(t){var e=Date.now()-t.getTime(),s=Math.floor(e/864e5),i=Math.floor((e-864e5*s)/36e5),r=Math.floor((e-864e5*s-36e5*i)/6e4),n="";return s&&(n=s+"d"),s>1?n:(i&&(n=n+" "+i+"h"),s||i>1?n:(r&&(n=n+" "+r+"m"),n.trim()||"now"))}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t.value?["date"===t.type?[t._v(t._s(new Date(Date.parse(t.value)).toLocaleDateString("en-CA")))]:"datetime"===t.type?[t._v(t._s(new Date(Date.parse(t.value)).toISOString().replace("T"," ")))]:"age"===t.type?[t._v(t._s(t.age(new Date(Date.parse(t.value)))))]:"image"===t.type&&t.linkUrl(t.value)?[s("img",{attrs:{src:t.value}})]:"link"===t.type?[t.linkUrl(t.value)?s("a",{style:t.color,attrs:{href:t.linkUrl(t.value)}},[t._v(t._s(t.linkText(t.value)))]):s("span",{style:t.color},[t._v(t._s(t.linkText(t.value)))])]:"twitter"===t.type?[s("a",{attrs:{href:t.twitterUrl(t.value)}},[t._v(t._s(t.twitterHandle(t.value)))])]:"function"==typeof t.type?[t._v(t._s(t.type("text",t.value)))]:[t._v(t._s(t.value))]]:t._e()],2)},staticRenderFns:[]};var A=s("VU/8")(P,R,!1,function(t){s("ezJr")},"data-v-f5f8a518",null).exports,C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticStyle:{display:"inline-block","vertical-align":"top","margin-top":"1.15em"}},[s("item-list",{attrs:{items:t.items,selecteditem:t.item,selectedcolor:t.selectedcolor,keyfield:t.listkey,fields:t.listfields},on:{selected:t.selected}})],1),t._v(" "),s("div",{staticStyle:{display:"inline-block","vertical-align":"top"}},[s("lists-card",{attrs:{card:t.item}})],1)])},staticRenderFns:[]};var F=s("VU/8")({props:["items","selecteditem","listkey","listfields","itemtitle","itemfields","selectedcolor","itemmaxwidth"],data:function(){return{item:{}}},methods:{selected:function(t){this.item=t,this.$emit("selected",t)}}},C,!1,function(t){s("PFl/")},"data-v-a4dbd0d4",null).exports,T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:t.style()},[s("div",[t._v(t._s(t.card.fields.name))]),t._v(" "),s("ul",t._l(t.card.fields.items,function(e){return s("li",{key:e.name},[s("text-value",{attrs:{type:"string",value:e.name}}),t._v(" "),e.done?s("text-value",{attrs:{type:"date",value:e.done}}):t._e()],1)})),t._v(" "),s("tags",{attrs:{tags:t.card.fields.tags}}),t._v(" "),s("div",[t._v("Created: "),s("text-value",{attrs:{type:"date",value:t.card.created_at}})],1),t._v(" "),s("div",[t._v("Updated: "),s("text-value",{attrs:{type:"date",value:t.card.updated_at}})],1)],1)},staticRenderFns:[]};var D=s("VU/8")({props:["card"],data:function(){return{selecteditem:{}}},methods:{item:function(t,e){return e},selected:function(t){this.selecteditem=t},style:function(){var t={"border-style":"solid",color:"#800080","background-color":this.card.fields.bgcolor};return t}}},T,!1,function(t){s("YRmJ")},"data-v-17b04e24",null).exports,L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.tags,function(e){return[s("div",{key:e,staticClass:"tag",style:t.selectedStyle(e,e===t.selectedtag),on:{click:function(s){t.selected(e)}}},[t._v(t._s(e))])]})],2)},staticRenderFns:[]};var N=s("VU/8")({props:["tags","selectedtag","selectedcolor"],methods:{selected:function(t){this.$emit("selected",t)},selectedStyle:function(t,e){return e?{color:this.selectedcolor}:{}}}},L,!1,function(t){s("cFMf")},"data-v-0895e8f1",null).exports;i.a.config.productionTip=!1,i.a.component("service-card",y),i.a.component("service-add",h),i.a.component("search-bar",w),i.a.component("search-result",b),i.a.component("list-detail",S),i.a.component("item-list",$),i.a.component("item-detail",E),i.a.component("text-value",A),i.a.component("lists-cards",F),i.a.component("lists-card",D),i.a.component("tags",N),n.router=d,new i.a(n).$mount("#app")},"PFl/":function(t,e){},YRmJ:function(t,e){},cFMf:function(t,e){},dcbw:function(t,e){},eJvS:function(t,e){},ezJr:function(t,e){},t1B2:function(t,e){},zcRY:function(t,e){},"zdL/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ba293630c082c5b1c876.js.map