webpackJsonp([1],{102:function(e,t,a){"use strict";var n=a(116),s=a.n(n);a(25).a.directive("keyframe",{bind:function(e,t,a){e.style.opacity="0.1",e.setAttribute("data-keyframe",void 0)},inserted:function(e,t,a){var n=void 0,i=e.parentElement.children,r=0;s()(i).map(function(t){t.hasAttribute("data-keyframe")&&(r++,t===e&&(n=r))}),a.context.$store.subscribe(function(t,a){e.style.opacity=a.currentKeyframe>=n?"1":"0.1"})},update:function(e,t,a){},componentUpdated:function(e,t,a){},unbind:function(e,t,a){}})},103:function(e,t,a){"use strict";var n=a(157);t.a={install:function(e,t){var a=function(){function e(){return document.getElementById("slides").clientHeight}function t(){return a.offsetHeight}var a=document.getElementById("current"),n=function(e){console.log("clearing interval  "),clearInterval(e),console.groupEnd("resize")};!function(){var a=0,s=1;console.group("resize");var i=setInterval(function(){console.log("getBoundsHeight",e(),"getContainerHeight",t(),"vmax",s),a++>100&&n(i),s+=.25,document.getElementById("slides").style.fontSize=s+"vmax",t()>=e()?(s-=.25,document.getElementById("slides").style.fontSize=s+"vmax",n(i)):s>=5&&n(i)},30)}()},s=n.Observable.fromEvent(window,"resize").debounce(function(){return n.Observable.timer(300)}),i=n.Observable.fromEvent(document,"DOMContentLoaded"),r=function(e){a()};s.subscribe(r),i.subscribe(r)}}},104:function(e,t,a){"use strict";var n=a(25),s=a(101),i=a(435),r=a.n(i);n.a.use(s.a),t.a=new s.a({routes:[{path:"/",name:"Presi",component:r.a}]})},105:function(e,t,a){"use strict";var n,s=a(118),i=a.n(s),r=a(25),v=a(57),c=(a(101),a(115)),_=a(40);r.a.use(v.c);var l={page:1,currentKeyframe:0},o=(n={},i()(n,_.a,function(e,t){e.page=t,e.currentKeyframe=0}),i()(n,_.b,function(e,t){e.currentKeyframe++}),i()(n,_.c,function(e){e.page++,e.currentKeyframe=0}),i()(n,_.d,function(e){e.page>1&&e.page--,e.currentKeyframe=0}),n),u={page:function(e){return e.page},currentKeyframe:function(e){return e.currentKeyframe}};t.a=new v.c.Store({state:l,getters:u,mutations:o,actions:c,strict:!0})},108:function(e,t,a){a(151);var n=a(24)(a(109),a(440),null,null);e.exports=n.exports},109:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},110:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(437),s=a.n(n),i=a(438),r=a.n(i);t.default={name:"Presi",data:function(){return{}},components:{Slides:s.a,Navi:r.a},computed:{}}},111:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(59),s=a.n(n),i=a(57);a(40);t.default={name:"Slide",data:function(){return{}},props:{},methods:{},computed:s()({},a.i(i.b)(["page"]),{isShown:function(){return this.page===this.pageNr},pageNr:function(e){return this.$parent.$children.findIndex(function(t){return t===e})+1}}),mounted:function(){}}},112:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(436),s=a.n(n);t.default={name:"Slides",data:function(){return{}},components:{Slide:s.a}}},113:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(59),s=a.n(n),i=a(57);t.default={name:"Navi",data:function(){return{}},methods:s()({},a.i(i.a)(["nextPage","prevPage","nextKeyframe"]),{_nextPage:function(){this.nextPage()},_prevPage:function(){this.prevPage()}}),computed:s()({},a.i(i.b)(["page"]),{isShown:function(){return this.page===this.pageNr},pageNr:function(e){return this.page}}),created:function(){var e=this;window.addEventListener("keyup",function(t){switch(t.code){case"ArrowLeft":e._prevPage();break;case"Space":e.nextKeyframe();break;case"ArrowRight":e._nextPage()}})}}},114:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(25),s=a(108),i=a.n(s),r=a(104),v=a(105),c=(a(102),a(103));n.a.config.productionTip=!0,a(107).polyfill(),window.jQuery=a(106),new n.a({el:"#app",store:v.a,router:r.a,template:"<App/>",components:{App:i.a}}),n.a.use(c.a)},115:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(40);a.d(t,"setPage",function(){return s}),a.d(t,"nextKeyframe",function(){return i}),a.d(t,"nextPage",function(){return r}),a.d(t,"prevPage",function(){return v});var s=function(e,t){(0,e.commit)(n.a,t)},i=function(e){(0,e.commit)(n.b)},r=function(e){(0,e.commit)(n.c)},v=function(e){(0,e.commit)(n.d)}},150:function(e,t){},151:function(e,t){},152:function(e,t){},153:function(e,t){},154:function(e,t){},40:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"d",function(){return s}),a.d(t,"a",function(){return i}),a.d(t,"b",function(){return r});var n="NEXT_PAGE",s="PREV_PAGE",i="SET_PAGE",r="NEXT_KEYFRAME"},432:function(e,t,a){e.exports=a.p+"static/img/regex.9bcfe80.png"},433:function(e,t,a){e.exports=a.p+"static/img/structure.35db934.png"},434:function(e,t,a){e.exports=a.p+"static/img/umlauts.7e7ae95.jpg"},435:function(e,t,a){a(153);var n=a(24)(a(110),a(442),"data-v-462587fe",null);e.exports=n.exports},436:function(e,t,a){a(152);var n=a(24)(a(111),a(441),"data-v-37894d0e",null);e.exports=n.exports},437:function(e,t,a){a(154);var n=a(24)(a(112),a(443),"data-v-b249126c",null);e.exports=n.exports},438:function(e,t,a){a(150);var n=a(24)(a(113),a(439),"data-v-0663e76e",null);e.exports=n.exports},439:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{id:"navi"}},[a("div",{staticClass:"prev button",on:{click:function(t){e._prevPage()}}},[e._v("←")]),e._v(" "),a("div",{staticClass:"nr"},[e._v("\n        "+e._s(e.pageNr)+"\n    ")]),e._v(" "),a("div",{staticClass:"next button",on:{click:function(t){e._nextPage()}}},[e._v("→")])])},staticRenderFns:[]}},440:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},441:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"slide",class:["slide-"+e.pageNr,e.isShown?"shown":"hidden"]},[a("div",{ref:"container",staticClass:"container",attrs:{id:[e.isShown?"current":null]}},[e._t("default")],2)])},staticRenderFns:[]}},442:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"presi"}},[a("slides"),e._v(" "),a("navi")],1)},staticRenderFns:[]}},443:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"slides"}},[n("Slide",[n("h1",[e._v("Dev.Quickie:")]),e._v(" "),n("img",{attrs:{src:a(432),alt:"^RegEx$"}})]),e._v(" "),n("Slide",[n("h1",[e._v("Parlez-vous Regular Expressions?")]),e._v(" "),n("pre",[e._v("/^#?([a-f0-9]{6}|[a-f0-9]{3})$/m")]),e._v(" "),n("p",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[e._v("\n            Eine Zeichenkette die die genaue Ortung von Textmustern in einem String erlaubt\n        ")]),e._v(" "),n("ul",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[n("li",[e._v("Validierung")]),e._v(" "),n("li",[e._v("Datenextraktion")]),e._v(" "),n("li",[e._v("Manipulation von Daten")])])]),e._v(" "),n("Slide",[n("h1",[e._v("Aufbau einer Regular Expression")]),e._v(" "),n("img",{attrs:{src:a(433),alt:"Aufbau einer Regular Expression"}}),e._v(" "),n("br"),e._v(" "),n("p",{staticClass:"block"},[n("b",{staticClass:"red"},[e._v("Delimiters")]),e._v(" beschreiben den Anfang und Ende einer Expression "),n("br"),e._v(" "),n("b",{staticClass:"cyan"},[e._v("Pattern")]),e._v(" die Logik / Muster der Expression "),n("br"),e._v(" "),n("b",{staticClass:"orange"},[e._v("Flags/Modifiers")]),e._v(" Modifikationen des Musterungsverhaltens\n        ")])]),e._v(" "),n("Slide",[n("h1",[e._v("Das erste Pattern")]),e._v(" "),n("pre",[e._v("/Klein/")]),e._v(" "),n("ul",[n("li",{staticClass:"match"},[e._v("Kleintransporter")]),e._v(" "),n("li",{staticClass:"match"},[e._v("Calvin Klein")]),e._v(" "),n("li",{staticClass:"mismatch"},[e._v("deschutes")])]),e._v(" "),n("p",[e._v("\n            matcht den kompletten String sobald das Pattern mindestens einmal vorkommt\n        ")])]),e._v(" "),n("Slide",[n("h1",[n("b",[e._v("OR")]),e._v(" Operator")]),e._v(" "),n("pre",[e._v("/http|https/")]),e._v(" "),n("ul",[n("li",{staticClass:"match"},[e._v("http://enum.org")]),e._v(" "),n("li",{staticClass:"match"},[e._v("https://www.google.com")]),e._v(" "),n("li",{staticClass:"mismatch"},[e._v("www.icymi.co.uk")]),e._v(" "),n("li",{staticClass:"match"},[e._v("immer Ärger mit httpeter")])]),e._v(" "),n("p",[n("span",{staticClass:"pre"},[e._v("|")]),e._v(" matcht mehrere String Varianten in einem Pattern\n        ")])]),e._v(" "),n("Slide",[n("h1",[n("b",[e._v("PLUS")]),e._v(" Quantifier")]),e._v(" "),n("pre",[e._v("/Dreier+/")]),e._v(" "),n("ul",[n("li",{staticClass:"match"},[e._v("Dreier")]),e._v(" "),n("li",{staticClass:"match"},[e._v("Dreierrr")]),e._v(" "),n("li",{staticClass:"match"},[e._v("Dreierrrrrrr")])]),e._v(" "),n("p",[n("span",{staticClass:"pre"},[e._v("+")]),e._v(" matcht das Zeichen 1 bis unendlich oft\n        ")])]),e._v(" "),n("Slide",[n("h1",[e._v("Escapes und besondere Zeichen")]),e._v(" "),n("pre",[e._v("/.+/")]),e._v(" "),n("ul",[n("li",{staticClass:"match"},[e._v("...")]),e._v(" "),n("li",{staticClass:"match"},[e._v("Yay!")])]),e._v(" "),n("p",[n("span",{staticClass:"pre"},[e._v(".")]),e._v(' matcht jedes beliebige Zeichen ("Wildcard")\n        ')]),e._v(" "),n("pre",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[e._v("/\\.+/")]),e._v(" "),n("ul",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[n("li",{staticClass:"match"},[e._v("...")]),e._v(" "),n("li",{staticClass:"mismatch"},[e._v("Yay!")])]),e._v(" "),n("p",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[n("span",{staticClass:"pre"},[e._v("\\")]),e._v(' annuliert die syntaktische Bedeutung des nachfolgenden Zeichens ("escaped").\n        ')])]),e._v(" "),n("Slide",[n("h1",[e._v("Escapes und besondere Zeichen (2)")]),e._v(" "),n("p",[e._v("\n            Alle Zeichen die in RegEx besondere Bedeutung haben, müssen escaped werden wenn sie im zu matchenden String vorkommen.\n        ")]),e._v(" "),n("ul",[n("li",[n("span",{staticClass:"pre"},[e._v("\\.")])]),e._v(" "),n("li",[n("span",{staticClass:"pre"},[e._v("\\+")])]),e._v(" "),n("li",[n("span",{staticClass:"pre"},[e._v("\\/")])]),e._v(" "),n("li",[n("span",{staticClass:"pre"},[e._v("\\\\")])]),e._v(" "),n("li",[n("span",{staticClass:"pre"},[e._v("\\(\\/\\)")])]),e._v(" "),n("li",[e._v("...")])]),e._v(" "),n("p",{staticClass:"info"},[e._v("\n            Andernfalls werden sie als Teil der Logik verstanden und können Syntaxfehler verursachen\n        ")])]),e._v(" "),n("Slide",[n("h1",[e._v("Beispiele")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://regex101.com/r/IAYuHk/1"}},[e._v("Gästeliste validieren")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://regex101.com/r/KhMCDi/4"}},[e._v("URLs validieren")])])])]),e._v(" "),n("Slide",[n("h1",[e._v("Ranges")]),e._v(" "),n("pre",[e._v("/[a-z]+/")]),e._v(" "),n("ul",[n("li",{staticClass:"match"},[e._v("quick")]),e._v(" "),n("li",{staticClass:"match"},[e._v("start")]),e._v(" "),n("li",{staticClass:"match"},[e._v("abc")]),e._v(" "),n("li",{staticClass:"mismatch"},[e._v("Erbe")]),e._v(" "),n("li",{staticClass:"mismatch"},[e._v("von sich aus")])]),e._v(" "),n("p",[e._v("\n            matcht jeden Buchstaben innerhalb der Range\n        ")])]),e._v(" "),n("Slide",[n("h1",[e._v("Ranges (2)")]),e._v(" "),n("pre",[e._v("/[a-zA-Z0-9\\s]+/")]),e._v(" "),n("ul",[n("li",{staticClass:"match"},[e._v("Was 1 Tag")]),e._v(" "),n("li",{staticClass:"mismatch"},[e._v("Eine Hand wäscht die Andere")])]),e._v(" "),n("p",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[e._v("Umlaute müssen als Unicode angegeben werden")]),e._v(" "),n("img",{directives:[{name:"keyframe",rawName:"v-keyframe"}],attrs:{src:a(434),width:"50%",alt:"Umlauts"}})]),e._v(" "),n("Slide",[n("h1",[e._v("Ranges (3)")]),e._v(" "),n("pre",[e._v("/[^\\d]/")]),e._v(" "),n("ul",[n("li",{staticClass:"mismatch"},[e._v("123")]),e._v(" "),n("li",{staticClass:"match"},[e._v("abc")])]),e._v(" "),n("p",[e._v("\n            voranstehedes "),n("span",{staticClass:"pre"},[e._v("^")]),e._v(" negiert die Bedeutung des Patterns\n        ")]),e._v(" "),n("p",{staticClass:"info"},[e._v("das Negierungszeichen darf nur innerhalb der Rage vorkommen")])]),e._v(" "),n("Slide",[n("h1",[e._v("\n            Metacharacters\n        ")]),e._v(" "),n("p",[e._v('\n            "Syntax Sugar" um die Eingaben zu verkürzen\n        ')]),e._v(" "),n("ul",[n("li",[n("span",{staticClass:"pre"},[e._v("\\s")]),e._v('\n                whitespace character (" ")\n\n\n            ')]),e._v(" "),n("li",[n("span",{staticClass:"pre"},[e._v("\\w")]),e._v("\n                word character - entspricht [a-zA-Z0-9]\n\n\n            ")]),e._v(" "),n("li",[n("span",{staticClass:"pre"},[e._v("\\d")]),e._v("\n                any digit - entspricht [0-9]\n\n\n            ")]),e._v(" "),n("li",[n("span",{staticClass:"pre"},[e._v("\\b")]),e._v(" word boundary\n\n\n            ")])]),e._v(" "),n("p",{staticClass:"info"},[e._v("z.B. "),n("span",{staticClass:"pre"},[e._v("/\\b\\w+\\b/")]),e._v(" matcht nur ganze Wörter")]),e._v(" "),n("p",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[e._v("grossgeschriebene Metacharacter negieren ihre Bedeutung")]),e._v(" "),n("ul",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[n("li",[n("span",{staticClass:"pre"},[e._v("\\S")]),e._v(" alle Character ausser whitespace")]),e._v(" "),n("li",[n("span",{staticClass:"pre"},[e._v("\\W")]),e._v(" alle Zeichen ausser \\w (Sonderzeichen etc.)")]),e._v(" "),n("li",[n("span",{staticClass:"pre"},[e._v("\\D")]),e._v(" alles ausser Zahlen")]),e._v(" "),n("li",[n("span",{staticClass:"pre"},[e._v("\\B")]),e._v(" alles ausser am Wortanfang oder -ende")])])]),e._v(" "),n("Slide",[n("h1",[e._v("Quantifiers")]),e._v(" "),n("table",[n("tr",[n("td",[n("pre",[e._v("/^[a-z]{3}$/m")])]),e._v(" "),n("td",[n("ul",[n("li",{staticClass:"match"},[e._v("zip")]),e._v(" "),n("li",{staticClass:"mismatch"},[e._v("zippers")])])])]),e._v(" "),n("tr",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[n("td",[n("pre",[e._v("/^[a-z]{3,}$/m")])]),e._v(" "),n("td",[n("ul",[n("li",{staticClass:"match"},[e._v("zip")]),e._v(" "),n("li",{staticClass:"match"},[e._v("zippers")])])])]),e._v(" "),n("tr",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[n("td",[n("pre",[e._v("/^089-[0-9]{6-9}$/m")])]),e._v(" "),n("td",[n("ul",[n("li",{staticClass:"mismatch"},[e._v("089-12345")]),e._v(" "),n("li",{staticClass:"match"},[e._v("089-123456")]),e._v(" "),n("li",{staticClass:"mismatch"},[e._v("089-1234567890")])])])])]),e._v(" "),n("p",[e._v("quantifiers bestimmen wie oft ein Zeichenmuster im String vorkommen darf")])]),e._v(" "),n("Slide",[n("h1",[e._v("Weitere Quantifiers")]),e._v(" "),n("pre",[e._v("/(very)?\\s?(kind)?\\s?regards/i")]),e._v(" "),n("ul",[n("li",{staticClass:"match"},[e._v("Kind Regards")]),e._v(" "),n("li",{staticClass:"match"},[e._v("regards")])]),e._v(" "),n("table",[n("tr",[n("th",[e._v("Quantifier")]),e._v(" "),n("th",[e._v("Bedeutung")])]),e._v(" "),n("tr",[n("td",[n("span",{staticClass:"pre"},[e._v("{}")])]),e._v(" "),n("td",[e._v(" n, >n oder >n<m ")])]),e._v(" "),n("tr",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[n("td",[n("span",{staticClass:"pre"},[e._v("+")])]),e._v(" "),n("td",[e._v("1 oder >1")])]),e._v(" "),n("tr",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[n("td",[n("span",{staticClass:"pre"},[e._v("*")])]),e._v(" "),n("td",[e._v("0 oder >0")])]),e._v(" "),n("tr",{directives:[{name:"keyframe",rawName:"v-keyframe"}]},[n("td",[n("span",{staticClass:"pre"},[e._v("?")])]),e._v(" "),n("td",[e._v("0 oder 1")])])]),e._v(" "),n("p",[e._v("\n            neben "),n("span",{staticClass:"pre"},[e._v("+")]),e._v(" und "),n("span",{staticClass:"pre"},[e._v("{min,max}")]),e._v("\n            existieren weitere quantifiers um die Anzahl der zu matchenden Zeichen zu bestimmen\n        ")])]),e._v(" "),n("Slide",[n("h1",[e._v("Beispiele (2)")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://regex101.com/r/FBgrg6/3"}},[e._v("E-Mails validieren")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://regex101.com/r/4nx0Lw/1/"}},[e._v("IPs validieren")])])])]),e._v(" "),n("Slide",[n("h1",[e._v("\n            Modifier "),n("b",[e._v("Insensitive")])]),e._v(" "),n("pre",[e._v("/signal/i")]),e._v(" "),n("ul",[n("li",{staticClass:"match"},[e._v("signal")]),e._v(" "),n("li",{staticClass:"match"},[e._v("Signal")])]),e._v(" "),n("p",[e._v("\n            Modifier "),n("span",{staticClass:"pre"},[e._v("i")]),e._v(" ignoriert beim matching die Groß- und Kleinschreibung des Strings\n        ")])]),e._v(" "),n("Slide",[n("h1",[e._v("Modifier "),n("b",[e._v("Global")])]),e._v(" "),n("pre",[e._v("/Dumpty/g")]),e._v(" "),n("p",{staticClass:"block"},[e._v("\n            Humpty "),n("span",{staticClass:"match"},[e._v("Dumpty")]),e._v(" sat on a wall, "),n("br"),e._v("\n            Humpty "),n("span",{staticClass:"match"},[e._v("Dumpty")]),e._v(" had a great fall;\n        ")]),e._v(" "),n("p",[e._v("\n            modifier "),n("span",{staticClass:"pre"},[e._v("g")]),e._v(" erlaubt mehrere treffer pro Pattern\n        ")])]),e._v(" "),n("Slide",[n("h1",[e._v("Modifier "),n("b",[e._v("Multiline")])]),e._v(" "),n("pre",[e._v("/^[0-9]{5}\\s\\w+$/m")]),e._v(" "),n("ul",[n("li",{staticClass:"match"},[e._v("85748 Garching")]),e._v(" "),n("li",{staticClass:"mismatch"},[e._v("D-85748 Garching bei München")])]),e._v(" "),n("p",[e._v("\n            modifier "),n("span",{staticClass:"pre"},[e._v("m")]),e._v(" prüft das Pattern ausschließlich zwischen den Anchors\n        ")]),e._v(" "),n("table",[n("tr",[n("th",[e._v("Anchor")]),e._v(" "),n("th",[e._v("Beschreibung")])]),e._v(" "),n("tr",[n("td",[e._v("^")]),e._v(" "),n("td",[e._v("Anfang des Patterns")])]),e._v(" "),n("tr",[n("td",[e._v("$")]),e._v(" "),n("td",[e._v("Ende des Patterns")])])]),e._v(" "),n("p",{staticClass:"info"},[e._v("Anchor nicht zu verwechseln mit dem Negierungszeichen "),n("span",{staticClass:"pre"},[e._v("^")])]),e._v(" "),n("p",{staticClass:"info"},[e._v("man kann beliebige modifier miteinander kombinieren")])]),e._v(" "),n("Slide",[n("h1",[e._v("Matching Gruppen")]),e._v(" "),n("pre",[e._v("/^www\\.([\\w]+\\.co(m|\\.uk)?)$/gmi")]),e._v(" "),n("ul",[n("li",{staticClass:"match"},[e._v("www.medium.com")]),e._v(" "),n("li",{staticClass:"match"},[e._v("www.telegraph.co.uk")]),e._v(" "),n("li",{staticClass:"match"},[e._v("www.go.co")])]),e._v(" "),n("p",[e._v("\n            Um einen String in Teilergebnisse zu splitten, bedient man sich der matching Groups.\n            Gruppen dürfen mit quantifiers versehen werden\n        ")]),e._v(" "),n("p",{staticClass:"info"},[e._v("\n            Die Teilergebnisse der oberen Besipiele sind ihre Hostnames (medium.com)\n        ")])]),e._v(" "),n("Slide",[n("h1",[e._v("Lookarounds")]),e._v(" "),n("pre",[e._v("(?<=>)[\\w\\s]+(?=<\\/)")]),e._v(" "),n("p",{staticClass:"block"},[e._v('\n\n\n            <a href="/clickout?regex">'),n("span",{staticClass:"match"},[e._v("Regex for Dummies ")]),e._v("</a> <br> "),n("br"),e._v('\n\n\n            <a href="#" alt="vue clickout" @click="clickout()" id="nextchapter">'),n("span",{staticClass:"match"},[e._v("RegExpress yourself ")]),e._v("</a>  <br> "),n("br"),e._v(" "),n("span",{staticClass:"mismatch"},[e._v('\n            <a href="https://regex101.com/"><img src="/regularexpressions101.svg" alt="logo"></a>\n            ')])]),e._v(" "),n("p",[e._v("\n            Lookarounds erlauben nach Strings zu suchen, die "),n("b",[e._v("vor")]),e._v(" oder "),n("b",[e._v("nach")]),e._v(" einem Pattern vorkommen\n        ")])]),e._v(" "),n("Slide",[n("h1",[e._v("Lookaheads & Lookbehinds (2)")]),e._v(" "),n("table",[n("tr",[n("th",[e._v("RegEx")]),e._v(" "),n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Beschreibung")])]),e._v(" "),n("tr",[n("td",[e._v("/(?=foo)/")]),e._v(" "),n("td",[e._v("Lookahead")]),e._v(" "),n("td",[e._v("Alles was vor dem foo String kommen muss")])]),e._v(" "),n("tr",[n("td",[e._v("/(?<=foo)/")]),e._v(" "),n("td",[e._v("Lookbehind")]),e._v(" "),n("td",[e._v(" Alles was nach dem foo String kommen muss")])]),e._v(" "),n("tr",[n("td",[e._v("/(?!foo)/")]),e._v(" "),n("td",[e._v("Negative Lookahead")]),e._v(" "),n("td",[e._v("alles was vor einem String kommt der nicht foo ist")])]),e._v(" "),n("tr",[n("td",[e._v("/(?<!foo)/")]),e._v(" "),n("td",[e._v("Negative Lookbehind")]),e._v(" "),n("td",[e._v("alles was nach einem String kommt der nicht foo ist")])])])]),e._v(" "),n("Slide",[n("h1",[e._v("Beispiele (3)")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://regex101.com/r/rPNYjG/1"}},[e._v("Nullterminierte Ketten")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://regex101.com/r/lECWnS/1"}},[e._v("Inhalte parsen")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://regex101.com/r/bTiKIj/1"}},[e._v("eingerückte E-Mail Inhalte extrahieren ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://regex101.com/r/Clxcty/1"}},[e._v("Tags auslesen")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://regex101.com/r/xWoIpz/1"}},[e._v("Tag Inhalte auslesen")])])])]),e._v(" "),n("Slide",[n("h1",[e._v("👌🙏👋")]),e._v(" "),n("h2",[e._v("Weitere Ressourcen:")]),e._v(" "),n("ul",[n("li",[e._v("regular expression debugger with real time explanation, error detection and highlighting: "),n("a",{attrs:{href:"https://regex101.com/"}},[e._v("https://regex101.com/")])]),e._v(" "),n("li",[e._v("online tool to learn, build, & test Regular Expressions: "),n("a",{attrs:{href:"http://regexr.com/"}},[e._v("http://regexr.com/")])]),e._v(" "),n("li",[e._v("JavaScript Regular Expression Visualizer: "),n("a",{attrs:{href:"https://jex.im/regulex/"}},[e._v("https://jex.im/regulex/")])]),e._v(" "),n("li",[e._v("Learn Regular Expressions with simple, interactive exercises.: "),n("a",{attrs:{href:"https://regexone.com/"}},[e._v("https://regexone.com/")])])])])],1)},staticRenderFns:[]}}},[114]);
//# sourceMappingURL=app.144cf3dd1036385f1ff2.js.map