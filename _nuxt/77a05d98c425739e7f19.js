(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{225:function(t,e,l){var content=l(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(6).default)("bff0b8a0",content,!0,{sourceMap:!1})},226:function(t,e,l){var content=l(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(6).default)("ce2801ac",content,!0,{sourceMap:!1})},227:function(t,e,l){var content=l(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(6).default)("f1fb7220",content,!0,{sourceMap:!1})},228:function(t,e,l){var content=l(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(6).default)("1cb4c020",content,!0,{sourceMap:!1})},235:function(t,e,l){"use strict";var n=l(225);l.n(n).a},236:function(t,e,l){(t.exports=l(5)(!1)).push([t.i,".files-header{display:flex;align-items:flex-start;justify-content:space-between}@media (max-width:47.99em){.files-header{flex-wrap:wrap}}.files-header-search{width:100%}.files-header .button{white-space:nowrap}@media (max-width:29.99em){.files-header .button,.files-header .dropdown,.files-header .dropdown-toggle{width:100%;margin-right:0;margin-left:0}.files-header .button{justify-content:flex-start}}",""])},237:function(t,e,l){"use strict";var n=l(7),r=l(21),o=l(26),f=l(127),c=l(65),d=l(14),m=l(66).f,h=l(87).f,v=l(15).f,x=l(238).trim,y=n.Number,C=y,_=y.prototype,w="Number"==o(l(86)(_)),M="trim"in String.prototype,A=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var l,n,r,o=(e=M?e.trim():x(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(l=e.charCodeAt(2))||120===l)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,f=e.slice(2),i=0,d=f.length;i<d;i++)if((code=f.charCodeAt(i))<48||code>r)return NaN;return parseInt(f,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,l=this;return l instanceof y&&(w?d(function(){_.valueOf.call(l)}):"Number"!=o(l))?f(new C(A(e)),l,y):A(e)};for(var k,I=l(12)?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),z=0;I.length>z;z++)r(C,k=I[z])&&!r(y,k)&&v(y,k,h(C,k));y.prototype=_,_.constructor=y,l(16)(n,"Number",y)}},238:function(t,e,l){var n=l(11),r=l(25),o=l(14),f=l(239),c="["+f+"]",d=RegExp("^"+c+c+"*"),m=RegExp(c+c+"*$"),h=function(t,e,l){var r={},c=o(function(){return!!f[t]()||"​"!="​"[t]()}),d=r[t]=c?e(v):f[t];l&&(r[l]=d),n(n.P+n.F*c,"String",r)},v=h.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},239:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},240:function(t,e,l){"use strict";var n=l(226);l.n(n).a},241:function(t,e,l){(t.exports=l(5)(!1)).push([t.i,".files-contextMenu{background:#fff;border-radius:8px;box-shadow:0 0 25.5px 4.5px rgba(0,0,0,.05);display:block;margin:0;padding:0;position:fixed;width:200px;z-index:99999;outline:0}.files-contextMenu ul{list-style:none;padding:10px 0;margin:0;font-size:12px;font-weight:600}.files-contextMenu ul li{margin:0;padding:10px 20px;cursor:pointer}.files-contextMenu ul li,.files-contextMenu ul li>a{display:flex;align-items:center}.files-contextMenu ul li>a:hover{color:#fff}.files-contextMenu ul li:hover{background:#2451f2;color:#fff}.files-contextMenu ul li:hover .icon{fill:#fff}.files-contextMenu ul li .icon{margin-right:10px}",""])},242:function(t,e,l){"use strict";var n=l(227);l.n(n).a},243:function(t,e,l){(t.exports=l(5)(!1)).push([t.i,".files-item{cursor:pointer;background:#fff;border-radius:8px;border:1px solid #e9e8f2;overflow:hidden;transition:.2s;-webkit-user-select:none;-khtml-user-drag:none;-moz-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none;font-size:14px;position:relative}.files-item-header{padding-top:100%;position:relative}.files-item-header-downloads{border-top-left-radius:4px;background:#fff;position:absolute;bottom:0;right:0;z-index:3;padding:2px 8px;font-size:12px}.files-item-header-thumb{height:100%;left:0;position:absolute;top:0;width:100%;display:flex}.files-item-header-thumb img{height:100%;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.files-item-header-thumb .icon{font-size:60px;display:flex}@media (max-width:30em){.files-item-header-thumb .icon{font-size:40px}}.files-item-header-thumb .icon{width:1em;height:1em;margin:auto}.files-item-footer{overflow:hidden;position:relative;text-overflow:ellipsis}.files-item-footer span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:14px;display:block}.files-item-checkbox{position:absolute;top:10px;left:10px;z-index:2}.files-item.is-selected{background:rgba(36,81,242,.1);border-color:rgba(36,81,242,.1)}",""])},244:function(t){t.exports=[{id:1,type:"folder",name:"Tellus",url:"http://dummyimage.com/648x1120.bmp/cc0000/ffffff"},{id:2,type:"image/gif",name:"UrnaPretiumNisl.gif",url:"http://dummyimage.com/788x1148.jpg/5fa2dd/ffffff"},{id:3,type:"application/pdf",name:"VelitVivamusVel.pdf",url:"http://dummyimage.com/676x649.jpg/ff4444/ffffff"},{id:4,type:"application/msword",name:"Faucibus.doc",url:"http://dummyimage.com/785x812.bmp/cc0000/ffffff"},{id:5,type:"video/x-msvideo",name:"NullaJustoAliquam.avi",url:"http://dummyimage.com/959x771.png/5fa2dd/ffffff"},{id:6,type:"application/vnd.ms-excel",name:"SedAccumsanFelis.xls",url:"http://dummyimage.com/938x843.bmp/5fa2dd/ffffff"},{id:7,type:"application/msword",name:"TortorQuis.doc",url:"http://dummyimage.com/824x665.png/ff4444/ffffff"},{id:8,type:"application/vnd.ms-excel",name:"Elit.xls",url:"http://dummyimage.com/1021x1141.bmp/ff4444/ffffff"},{id:9,type:"image/tiff",name:"Quis.tiff",url:"http://dummyimage.com/953x1039.jpg/dddddd/000000"},{id:10,type:"video/x-msvideo",name:"EnimLeo.avi",url:"http://dummyimage.com/1110x1111.jpg/5fa2dd/ffffff"},{id:11,type:"video/x-msvideo",name:"EleifendPedeLibero.avi",url:"http://dummyimage.com/749x713.jpg/cc0000/ffffff"},{id:12,type:"image/png",name:"NullaTellusIn.png",url:"http://dummyimage.com/1052x906.bmp/ff4444/ffffff"},{id:13,type:"image/pjpeg",name:"UtUltrices.jpeg",url:"http://dummyimage.com/899x960.jpg/cc0000/ffffff"},{id:14,type:"application/x-excel",name:"VitaeConsectetuer.xls",url:"http://dummyimage.com/833x1141.png/cc0000/ffffff"},{id:15,type:"application/excel",name:"Odio.xls",url:"http://dummyimage.com/1104x1176.bmp/cc0000/ffffff"},{id:16,type:"application/x-mspowerpoint",name:"PosuereNonummyInteger.ppt",url:"http://dummyimage.com/850x966.bmp/dddddd/000000"},{id:17,type:"video/mpeg",name:"NislNuncNisl.mpeg",url:"http://dummyimage.com/762x1090.png/5fa2dd/ffffff"},{id:18,type:"video/x-mpeg",name:"Nunc.mp3",url:"http://dummyimage.com/1126x986.png/dddddd/000000"},{id:19,type:"application/mspowerpoint",name:"PrimisInFaucibus.ppt",url:"http://dummyimage.com/1102x736.bmp/cc0000/ffffff"},{id:20,type:"video/mpeg",name:"JustoMaecenasRhoncus.mp3",url:"http://dummyimage.com/1168x805.bmp/dddddd/000000"},{id:21,type:"image/gif",name:"Porttitor.gif",url:"http://dummyimage.com/942x649.bmp/dddddd/000000"},{id:22,type:"application/pdf",name:"PellentesqueUltricesMattis.pdf",url:"http://dummyimage.com/1030x732.bmp/cc0000/ffffff"},{id:23,type:"text/plain",name:"ParturientMontesNascetur.txt",url:"http://dummyimage.com/1097x627.jpg/ff4444/ffffff"},{id:24,type:"video/x-mpeg",name:"OrciNullam.mp3",url:"http://dummyimage.com/1070x1003.bmp/ff4444/ffffff"},{id:25,type:"application/vnd.ms-excel",name:"VitaeNislAenean.xls",url:"http://dummyimage.com/983x1144.png/5fa2dd/ffffff"},{id:26,type:"video/x-mpeg",name:"Odio.mp3",url:"http://dummyimage.com/968x798.jpg/5fa2dd/ffffff"},{id:27,type:"application/mspowerpoint",name:"Curae.ppt",url:"http://dummyimage.com/939x918.bmp/5fa2dd/ffffff"},{id:28,type:"application/powerpoint",name:"OrnareConsequat.ppt",url:"http://dummyimage.com/654x628.bmp/cc0000/ffffff"},{id:29,type:"image/x-tiff",name:"InHacHabitasse.tiff",url:"http://dummyimage.com/983x775.jpg/ff4444/ffffff"},{id:30,type:"video/quicktime",name:"ImperdietEtCommodo.mov",url:"http://dummyimage.com/823x615.jpg/5fa2dd/ffffff"},{id:31,type:"image/x-tiff",name:"MorbiPorttitorLorem.tiff",url:"http://dummyimage.com/1089x1030.png/ff4444/ffffff"},{id:32,type:"video/msvideo",name:"IntegerAc.avi",url:"http://dummyimage.com/662x1128.bmp/ff4444/ffffff"},{id:33,type:"application/excel",name:"Blandit.xls",url:"http://dummyimage.com/686x754.png/dddddd/000000"},{id:34,type:"video/msvideo",name:"Ante.avi",url:"http://dummyimage.com/1066x1024.bmp/dddddd/000000"},{id:35,type:"application/x-msexcel",name:"VelIpsumPraesent.xls",url:"http://dummyimage.com/807x1104.bmp/ff4444/ffffff"},{id:36,type:"text/plain",name:"DolorMorbi.txt",url:"http://dummyimage.com/1175x1190.jpg/dddddd/000000"},{id:37,type:"audio/mpeg3",name:"SemSedSagittis.mp3",url:"http://dummyimage.com/1107x947.png/cc0000/ffffff"},{id:38,type:"application/vnd.ms-excel",name:"Maecenas.xls",url:"http://dummyimage.com/1146x1105.png/5fa2dd/ffffff"},{id:39,type:"video/x-mpeg",name:"SuscipitNullaElit.mp3",url:"http://dummyimage.com/1101x1112.png/dddddd/000000"},{id:40,type:"application/pdf",name:"QuamPede.pdf",url:"http://dummyimage.com/1005x1066.png/ff4444/ffffff"},{id:41,type:"application/x-msexcel",name:"MaurisMorbi.xls",url:"http://dummyimage.com/1183x1172.jpg/dddddd/000000"},{id:42,type:"application/mspowerpoint",name:"RisusDapibus.ppt",url:"http://dummyimage.com/1080x1176.bmp/5fa2dd/ffffff"},{id:43,type:"video/mpeg",name:"MorbiNonLectus.mpeg",url:"http://dummyimage.com/977x752.bmp/ff4444/ffffff"},{id:44,type:"application/mspowerpoint",name:"Tellus.ppt",url:"http://dummyimage.com/1024x748.bmp/cc0000/ffffff"},{id:45,type:"image/png",name:"InConsequatUt.png",url:"http://dummyimage.com/884x1008.bmp/cc0000/ffffff"},{id:46,type:"application/powerpoint",name:"Vel.ppt",url:"http://dummyimage.com/1016x1168.bmp/cc0000/ffffff"},{id:47,type:"video/mpeg",name:"Leo.mpeg",url:"http://dummyimage.com/640x768.png/5fa2dd/ffffff"},{id:48,type:"image/pjpeg",name:"Sit.jpeg",url:"http://dummyimage.com/770x1105.bmp/5fa2dd/ffffff"}]},245:function(t,e,l){"use strict";var n=l(228);l.n(n).a},246:function(t,e,l){(t.exports=l(5)(!1)).push([t.i,".files-items{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));grid-gap:16px;position:relative}.files-items-drag{position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(36,81,242,.1);border-radius:4px;z-index:3;border:2px dashed #2451f2;color:#fff;display:flex;align-items:center;justify-content:center;font-size:200px}.files-items-drag .icon{fill:#fff}.files-folders{list-style-type:none;padding:0;margin:0;max-height:40vh;overflow:auto}.files-folders>li{padding:10px;display:flex;align-items:center;justify-content:space-between;cursor:pointer}.files-folders>li:not(:last-child){border-bottom:1px solid #e9e8f2}.files-folders>li:hover{background:#f6f5fd}.files-folders>li.is-selected{background:rgba(36,81,242,.1)}.files-share-users{list-style-type:none;padding:0;margin:0}.files-share-users li{padding:5px 0;justify-content:space-between}.files-share-users-header,.files-share-users li{display:flex;align-items:center}.files-share-users-name{display:block}.files-share-users-email{display:block;font-size:12px;color:#9d99bc}.files-uploading{position:fixed;bottom:20px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);padding:8px 16px;background:#fff;border:1px solid #e9e8f2;border-radius:4px;z-index:5}.files-uploading .icon{font-size:24px;-webkit-animation:spin 1.2s linear infinite;animation:spin 1.2s linear infinite}.files-uploading .progress{height:2px;margin:0;position:absolute;bottom:0;left:0;right:0}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},257:function(t,e,l){"use strict";l.r(e);var n={name:"FilesHeader",props:{selected:{type:Array,required:!0}}},r=(l(235),l(2)),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"files-header u-mt-normal"},[l("button",{staticClass:"button is-primary",on:{click:function(e){return t.$refs.upload.click()}}},[l("input",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"file",name:"upload"}}),l("AppIcon",{attrs:{name:"cloud-upload",classes:"is-massive"}}),l("span",[t._v("Upload files")])],1),l("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.$emit("newFolder")}}},[l("AppIcon",{staticClass:"is-massive",attrs:{name:"create-new-folder"}}),l("span",[t._v("Create new folder")])],1),l("AppDropdown",[l("button",{staticClass:"button",attrs:{slot:"trigger"},slot:"trigger"},[l("AppIcon",{attrs:{name:"insert-file",classes:"is-massive"}}),l("span",[t._v("Create new file")])],1),l("a",{staticClass:"dropdown-item",attrs:{href:"#0"}},[l("svg",{staticClass:"icon is-massive",attrs:{focusable:"false",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"img"}},[l("path",{attrs:{d:"M1 3l13-2v21L1 20V3z",fill:"#2B579A"}}),l("path",{attrs:{d:"M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z",fill:"#2B579A"}}),l("path",{attrs:{fill:"#fff",d:"M14 4h8v15h-8z"}}),l("path",{attrs:{fill:"#2B579A",d:"M13 6h7v1h-7zM13 9h7V8h-7zM13 11h7v-1h-7zM13 13h7v-1h-7zM13 15h7v-1h-7zM13 17h7v-1h-7z"}}),l("path",{attrs:{d:"M12 8l-1.687 7H8.72l-1.06-4.49a4.084 4.084 0 0 1-.102-.787H7.54c-.027.32-.065.581-.116.786L6.338 15h-1.66L3 8h1.571l.9 4.662c.038.198.066.465.084.8h.027c.011-.25.054-.524.129-.82L6.868 8h1.54l1.046 4.7c.039.173.073.424.102.753h.018c.012-.258.043-.518.094-.781L10.549 8H12z",fill:"#fff"}})]),l("span",[t._v("Microsoft Word")])]),l("a",{staticClass:"dropdown-item",attrs:{href:"#0"}},[l("svg",{staticClass:"icon is-massive",attrs:{focusable:"false",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"img"}},[l("path",{attrs:{d:"M1 3l13-2v21L1 20V3z",fill:"#217346"}}),l("path",{attrs:{d:"M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z",fill:"#217346"}}),l("path",{attrs:{fill:"#fff",d:"M14 4h8v15h-8z"}}),l("path",{attrs:{fill:"#217346",d:"M14 14h2v-1h-2zM14 16h2v-1h-2zM14 10h2V9h-2zM14 12h2v-1h-2zM14 8h2V7h-2zM17 14h3v-1h-3zM17 16h3v-1h-3zM17 10h3V9h-3zM17 12h3v-1h-3zM17 8h3V7h-3z"}}),l("path",{attrs:{d:"M6 7H4l2 4.5L4 16h2l1-3 1 3h2l-2-4.5L10 7H8l-1 3-1-3z",fill:"#fff"}})]),l("span",[t._v("Microsoft Excel")])])]),t.selected.length>0?l("AppDropdown",[l("button",{staticClass:"button is-primary",attrs:{slot:"trigger"},slot:"trigger"},[l("AppIcon",{attrs:{name:"insert-file",classes:"is-massive"}}),l("span",[t._v(t._s(t.selected.length)+" Selected Items")])],1),l("a",{staticClass:"dropdown-item",attrs:{href:"#0"},on:{click:function(e){return e.preventDefault(),t.$emit("unselect")}}},[t._v("Unselect All")]),l("a",{staticClass:"dropdown-item",attrs:{href:"#0"},on:{click:function(e){return t.$emit("download")}}},[t._v("Download")]),l("a",{staticClass:"dropdown-item",attrs:{href:"#0"},on:{click:function(e){return t.$emit("move")}}},[t._v("Move")]),l("a",{staticClass:"dropdown-item",attrs:{href:"#0"},on:{click:function(e){return t.$emit("copy")}}},[t._v("Copy")]),l("a",{staticClass:"dropdown-item",attrs:{href:"#0"},on:{click:function(e){return t.$emit("remove")}}},[t._v("Delete")])]):t._e(),t._m(0)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"files-header-search"},[e("input",{staticClass:"input",attrs:{placeholder:"Search here",type:"search"}})])}],!1,null,null,null).exports,f=(l(237),{props:{closeOnScroll:{type:Boolean,default:!0}},computed:{style:function(){return this.show?{top:"".concat(this.top,"px"),left:"".concat(this.left,"px")}:null}},data:function(){return{top:null,left:null,show:!1,data:null}},mounted:function(){this.closeOnScroll&&this.addScrollEventListener()},beforeDestroy:function(){this.closeOnScroll&&this.removeScrollEventListener()},methods:{addScrollEventListener:function(){window.addEventListener("scroll",this.close)},close:function(){this.top=null,this.left=null,this.data=null,this.show=!1},open:function(t,data){var e=this;this.data=data,this.show=!0,this.$nextTick(function(){e.positionMenu(t.clientY,t.clientX),e.$el.focus()})},positionMenu:function(t,e){var l=window.innerHeight-this.$el.offsetHeight-25,n=window.innerWidth-this.$el.offsetWidth-25;t>l&&(t=l),e>n&&(e=n),this.top=t,this.left=e},removeScrollEventListener:function(){window.removeEventListener("scroll",this.close)}},watch:{closeOnScroll:function(t,e){t!==e&&(t?this.addScrollEventListener():this.removeScrollEventListener())}}}),c=(l(240),{name:"FilesItem",components:{FilesContextMenu:Object(r.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"files-contextMenu",style:this.style,attrs:{tabindex:"-1"},on:{blur:this.close,click:this.close,"!contextmenu":function(t){t.preventDefault()}}},[this._t("default",null,{data:this.data})],2)},[],!1,null,null,null).exports},props:{id:{type:Number,required:!0},name:{type:String,required:!0},downloads:{type:Number,default:0},type:{type:String,required:!0},url:{type:String,required:!0},isUploading:{type:Boolean,default:!1}},data:function(){return{selected:!1}},watch:{selected:function(t){this.$emit("selected",{val:t,id:this.id})}},methods:{}}),d=(l(242),Object(r.a)(c,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"files-item",class:{"is-selected":t.selected},attrs:{name:"name"},on:{contextmenu:function(e){return e.preventDefault(),t.$refs.menu.open(e,{foo:"bar"})}}},[l("div",{staticClass:"files-item-header"},[t.downloads?l("div",{staticClass:"files-item-header-downloads"},[l("span",[t._v(t._s(t.downloads))])]):t._e(),l("div",{staticClass:"files-item-header-thumb"},[t.type.startsWith("image")?l("img",{attrs:{src:t.url}}):t.type.startsWith("folder")?l("AppIcon",{attrs:{name:"folder"}}):t.type.startsWith("video")?l("AppIcon",{attrs:{name:"video-file"}}):t.type.endsWith("excel")?l("svg",{staticClass:"icon is-massive",attrs:{focusable:"false",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"img"}},[l("path",{attrs:{d:"M1 3l13-2v21L1 20V3z",fill:"#217346"}}),l("path",{attrs:{d:"M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z",fill:"#217346"}}),l("path",{attrs:{fill:"#fff",d:"M14 4h8v15h-8z"}}),l("path",{attrs:{fill:"#217346",d:"M14 14h2v-1h-2zM14 16h2v-1h-2zM14 10h2V9h-2zM14 12h2v-1h-2zM14 8h2V7h-2zM17 14h3v-1h-3zM17 16h3v-1h-3zM17 10h3V9h-3zM17 12h3v-1h-3zM17 8h3V7h-3z"}}),l("path",{attrs:{d:"M6 7H4l2 4.5L4 16h2l1-3 1 3h2l-2-4.5L10 7H8l-1 3-1-3z",fill:"#fff"}})]):t.type.endsWith("word")?l("svg",{staticClass:"icon is-massive",attrs:{focusable:"false",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"img"}},[l("path",{attrs:{d:"M1 3l13-2v21L1 20V3z",fill:"#2B579A"}}),l("path",{attrs:{d:"M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z",fill:"#2B579A"}}),l("path",{attrs:{fill:"#fff",d:"M14 4h8v15h-8z"}}),l("path",{attrs:{fill:"#2B579A",d:"M13 6h7v1h-7zM13 9h7V8h-7zM13 11h7v-1h-7zM13 13h7v-1h-7zM13 15h7v-1h-7zM13 17h7v-1h-7z"}}),l("path",{attrs:{d:"M12 8l-1.687 7H8.72l-1.06-4.49a4.084 4.084 0 0 1-.102-.787H7.54c-.027.32-.065.581-.116.786L6.338 15h-1.66L3 8h1.571l.9 4.662c.038.198.066.465.084.8h.027c.011-.25.054-.524.129-.82L6.868 8h1.54l1.046 4.7c.039.173.073.424.102.753h.018c.012-.258.043-.518.094-.781L10.549 8H12z",fill:"#fff"}})]):t.type.endsWith("powerpoint")?l("svg",{staticClass:"icon is-massive",attrs:{focusable:"false",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"img"}},[l("path",{attrs:{d:"M1 3l13-2v21L1 20V3z",fill:"#D24726"}}),l("path",{attrs:{d:"M7 13v3H5V7h2.897C9.966 7 11 7.956 11 9.868c0 .904-.298 1.636-.893 2.197A3.388 3.388 0 0 1 7.73 13H7zm0-4.444v2.806h.576c.985 0 1.477-.473 1.477-1.418 0-.925-.492-1.388-1.477-1.388H7z",fill:"#fff"}}),l("path",{attrs:{d:"M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z",fill:"#D24726"}}),l("path",{attrs:{fill:"#fff",d:"M14 4h8v15h-8z"}}),l("path",{attrs:{fill:"#D24726",d:"M14 15h6v-1h-6zM14 17h6v-1h-6z"}}),l("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16 13a3 3 0 0 0 3-3h-3V7a3 3 0 0 0 0 6z",fill:"#D24726"}}),l("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 9a3 3 0 0 0-3-3v3h3z",fill:"#D24726"}})]):l("AppIcon",{attrs:{name:"insert-file"}})],1)]),l("div",{staticClass:"files-item-footer"},[l("span",[t._v(t._s(t.name))])]),l("div",{staticClass:"files-item-checkbox"},[l("label",{staticClass:"checkbox"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],ref:"check",staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?t._i(t.selected,null)>-1:t.selected},on:{change:function(e){var l=t.selected,n=e.target,r=!!n.checked;if(Array.isArray(l)){var o=t._i(l,null);n.checked?o<0&&(t.selected=l.concat([null])):o>-1&&(t.selected=l.slice(0,o).concat(l.slice(o+1)))}else t.selected=r}}})])]),l("FilesContextMenu",{ref:"menu",scopedSlots:t._u([{key:"default",fn:function(e){return l("ul",{},[l("li",{on:{click:function(e){return t.$emit("share")}}},[t._v("  Share")]),l("li",{on:{click:function(e){return t.$emit("download")}}},[t._v("  Download")]),t.type.startsWith("image")?l("li",{on:{click:function(e){return t.$emit("edit")}}},[t._v("  Edit")]):t._e(),l("li",{on:{click:function(e){return t.$emit("rename")}}},[t._v("  Rename")]),l("li",{on:{click:function(e){return t.$emit("move")}}},[t._v("  Move")]),l("li",{on:{click:function(e){return t.$emit("copy")}}},[t._v(" Copy")]),l("li",{on:{click:function(e){return t.$emit("remove")}}},[t._v(" Delete")])])}}])})],1)},[],!1,null,null,null).exports),m=l(244),h={head:function(){return{title:"Files"}},components:{FilesHeader:o,FilesItem:d},data:function(){return{uploading:!1,files:m,selectedItems:[],dragActive:!1,newFolder:!1,rename:!1,edit:!1,copy:!1,move:!1,remove:!1,share:!1,shareInput:[],shareUsers:[{name:"Baianat Support",email:"abc@gmail.com"},{name:"Baianat Info",email:"abc@gmail.com"},{name:"Baianat Design",email:"abc@gmail.com"},{name:"Baianat Branding",email:"abc@gmail.com"}]}},methods:{select:function(t){if(!0===t.val)this.selectedItems.push(t.id);else{var e=this.selectedItems.indexOf(t.id);e>-1&&this.selectedItems.splice(e,1)}},unselect:function(){this.selectedItems=[],this.$refs.items.forEach(function(t){t.$el.classList.contains("is-selected")&&(t._data.selected=!1)})},addTag:function(t){var e={name:t,email:t.substring(0,2)+Math.floor(1e7*Math.random())};this.shareUsers.push(e),this.shareInput.push(e)},handleDrop:function(t){this.uploading=!0;var e=this.$refs.progress,l=1,n=setInterval(function(){l>=100?(clearInterval(n),this.uploading=!1):(l++,e.style.width=l+"%")},10)}}},v=(l(245),Object(r.a)(h,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"files"},[t._m(0),l("FilesHeader",{attrs:{selected:t.selectedItems},on:{unselect:t.unselect,newFolder:function(e){t.newFolder=!0},copy:function(e){t.copy=!0},move:function(e){t.move=!0},remove:function(e){t.remove=!0}}}),l("div",{staticClass:"files-items u-mt-normal",class:{"is-darg":t.dragActive},on:{dragenter:function(e){e.stopPropagation(),e.preventDefault(),t.dragActive=!0},dragover:function(e){e.stopPropagation(),e.preventDefault(),t.dragActive=!0},dragleave:function(e){e.stopPropagation(),e.preventDefault(),t.dragActive=!1},drop:function(e){e.stopPropagation(),e.preventDefault(),t.dragActive=!1,t.handleDrop(e)}}},[t.dragActive?l("div",{staticClass:"files-items-drag"},[l("AppIcon",{attrs:{name:"cloud-upload"}})],1):t._e(),t._l(t.files,function(e){return l("FilesItem",{key:e.id,ref:"items",refInFor:!0,attrs:{id:e.id,name:e.name,type:e.type,url:e.url},on:{selected:t.select,rename:function(e){t.rename=!0},edit:function(e){t.edit=!0},copy:function(e){t.copy=!0},move:function(e){t.move=!0},remove:function(e){t.remove=!0},share:function(e){t.share=!0}}})})],2),t.uploading?l("div",{staticClass:"files-uploading"},[l("AppIcon",{attrs:{name:"refresh"}}),l("span",[t._v("uploading file.jpg - 5 secs left")]),l("div",{staticClass:"progress"},[l("div",{ref:"progress",staticClass:"progress-bar",staticStyle:{width:"0%"}})])],1):t._e(),t.newFolder?l("AppModal",{on:{close:function(e){t.newFolder=!1}}},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[l("AppIcon",{attrs:{name:"folder"}}),t._v(" "),l("span",[t._v(" Create new folder")])],1)]),l("form",{staticClass:"form u-full"},[l("div",{staticClass:"field"},[l("label",{staticClass:"field-label"},[t._v("Name this folder")]),l("input",{staticClass:"input",attrs:{type:"text"}})])]),l("template",{slot:"footer"},[l("button",{staticClass:"button is-primary"},[t._v("Create")]),l("button",{staticClass:"button is-dark is-outlined",on:{click:function(e){t.newFolder=!1}}},[t._v("Cancel")])])],2):t._e(),t.rename?l("AppModal",{on:{close:function(e){t.rename=!1}}},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[l("AppIcon",{attrs:{name:"edit"}}),t._v(" "),l("span",[t._v(" Rename")])],1)]),l("form",{staticClass:"form u-full"},[l("div",{staticClass:"field"},[l("label",{staticClass:"field-label"},[t._v("Rename this file")]),l("input",{staticClass:"input",attrs:{type:"text",value:"Tellus.jpg"}})])]),l("template",{slot:"footer"},[l("button",{staticClass:"button is-primary"},[t._v("Save")]),l("button",{staticClass:"button is-dark is-outlined",on:{click:function(e){t.rename=!1}}},[t._v("Cancel")])])],2):t._e(),t.edit?l("AppModal",{on:{close:function(e){t.edit=!1}}},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[l("AppIcon",{attrs:{name:"edit"}}),t._v(" "),l("span",[t._v(" Edit")])],1)]),l("form",{staticClass:"form u-full"},[l("div",{staticClass:"field"},[l("label",{staticClass:"field-label"},[t._v("Name")]),l("input",{staticClass:"input",attrs:{type:"text",value:"Tellus.jpg"}})]),l("div",{staticClass:"field"},[l("label",{staticClass:"field-label"},[t._v("Caption")]),l("input",{staticClass:"input",attrs:{type:"text"}})]),l("div",{staticClass:"field"},[l("label",{staticClass:"field-label"},[t._v("Alt")]),l("input",{staticClass:"input",attrs:{type:"text"}})]),l("div",{staticClass:"field"},[l("label",{staticClass:"field-label"},[t._v("Description")]),l("input",{staticClass:"input",attrs:{type:"text"}})])]),l("template",{slot:"footer"},[l("button",{staticClass:"button is-primary"},[t._v("Save")]),l("button",{staticClass:"button is-dark is-outlined",on:{click:function(e){t.edit=!1}}},[t._v("Cancel")])])],2):t._e(),t.remove?l("AppModal",{on:{close:function(e){t.remove=!1}}},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[l("AppIcon",{attrs:{name:"delete"}}),t._v("  Delete file?")],1)]),l("p",[t._v("Are you sure you want to delete "),l("b",[t._v("InConsequatUt.png")]),t._v(" from your Files?")]),l("template",{slot:"footer"},[l("button",{staticClass:"button is-primary"},[t._v("Delete")]),l("button",{staticClass:"button is-dark is-outlined",on:{click:function(e){t.remove=!1}}},[t._v("Cancel")])])],2):t._e(),t.copy?l("AppModal",{on:{close:function(e){t.copy=!1}}},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[l("AppIcon",{attrs:{name:"edit"}}),t._v(" "),l("span",[t._v(" Copy 1 item to…")])],1)]),l("div",{staticClass:"u-full"},[l("nav",{staticClass:"u-mb-small",attrs:{"aria-label":"breadcrumb"}},[l("ol",{staticClass:"breadcrumb"},[l("li",{staticClass:"breadcrumb-item"},[l("a",{attrs:{href:"#"}},[t._v("Files")])]),l("li",{staticClass:"breadcrumb-item"},[l("a",{attrs:{href:"#"}},[t._v("Sub folder")])]),l("li",{staticClass:"breadcrumb-item is-active",attrs:{"aria-current":"page"}},[t._v("Current folder")])])]),l("ul",{staticClass:"files-folders"},[l("li",{staticClass:"is-selected"},[l("span",[l("AppIcon",{attrs:{name:"folder"}}),l("span",[t._v("folder 1")])],1),l("AppIcon",{attrs:{name:"keyboard-arrow-right"}})],1),l("li",[l("span",[l("AppIcon",{attrs:{name:"folder"}}),l("span",[t._v("folder 2")])],1),l("AppIcon",{attrs:{name:"keyboard-arrow-right"}})],1),t._l(5,function(i){return l("li",[l("span",[l("AppIcon",{attrs:{name:"folder"}}),l("span",[t._v("folder "+t._s(i+2))])],1)])})],2)]),l("template",{slot:"footer"},[l("button",{staticClass:"button is-primary"},[t._v("Copy")]),l("button",{staticClass:"button is-dark is-outlined",on:{click:function(e){t.copy=!1}}},[t._v("Cancel")])])],2):t._e(),t.move?l("AppModal",{on:{close:function(e){t.move=!1}}},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[l("AppIcon",{attrs:{name:"edit"}}),t._v(" "),l("span",[t._v(" Move 1 item to…")])],1)]),l("div",{staticClass:"u-full"},[l("nav",{staticClass:"u-mb-small",attrs:{"aria-label":"breadcrumb"}},[l("ol",{staticClass:"breadcrumb"},[l("li",{staticClass:"breadcrumb-item"},[l("a",{attrs:{href:"#"}},[t._v("Files")])]),l("li",{staticClass:"breadcrumb-item"},[l("a",{attrs:{href:"#"}},[t._v("Sub folder")])]),l("li",{staticClass:"breadcrumb-item is-active",attrs:{"aria-current":"page"}},[t._v("Current folder")])])]),l("ul",{staticClass:"files-folders"},[l("li",{staticClass:"is-selected"},[l("span",[l("AppIcon",{attrs:{name:"folder"}}),l("span",[t._v("folder 1")])],1),l("AppIcon",{attrs:{name:"keyboard-arrow-right"}})],1),l("li",[l("span",[l("AppIcon",{attrs:{name:"folder"}}),l("span",[t._v("folder 2")])],1),l("AppIcon",{attrs:{name:"keyboard-arrow-right"}})],1),t._l(5,function(i){return l("li",[l("span",[l("AppIcon",{attrs:{name:"folder"}}),l("span",[t._v("folder "+t._s(i+2))])],1)])})],2)]),l("template",{slot:"footer"},[l("button",{staticClass:"button is-primary"},[t._v("Move")]),l("button",{staticClass:"button is-dark is-outlined",on:{click:function(e){t.move=!1}}},[t._v("Cancel")])])],2):t._e(),t.share?l("AppModal",{on:{close:function(e){t.share=!1}}},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[l("AppIcon",{attrs:{name:"share"}}),t._v(" "),l("span",[t._v(" InConsequatUt.png")])],1)]),l("div",{staticClass:"u-full"},[l("form",{staticClass:"form"},[l("div",{staticClass:"field"},[l("label",{staticClass:"field-label"},[t._v("To:")]),l("Multiselect",{attrs:{options:t.shareUsers,multiple:!0,taggable:!0,"clear-on-select":!1,"close-on-select":!1,"track-by":"name",label:"name",placeholder:"Email or name"},on:{tag:t.addTag},model:{value:t.shareInput,callback:function(e){t.shareInput=e},expression:"shareInput"}})],1)]),l("ul",{staticClass:"files-share-users"},[l("li",[l("div",{staticClass:"files-share-users-header"},[l("figure",{staticClass:"avatar is-small is-inline is-secondary"},[l("span",{staticClass:"avatar-initials"},[t._v("BI")])]),l("span",[l("span",{staticClass:"files-share-users-name"},[t._v("Baianat Info")]),l("span",{staticClass:"files-share-users-email"},[t._v("support@baianat.com")])])]),l("div",{staticClass:"files-share-users-footer"},[l("AppDropdown",{staticClass:"is-right is-small"},[l("span",{staticClass:"u-font-small",attrs:{slot:"trigger"},slot:"trigger"},[l("span",[t._v("Can view")]),l("AppIcon",{attrs:{name:"arrow-drop-down",classes:"is-massive"}})],1),l("a",{staticClass:"dropdown-item",attrs:{href:"#0"}},[t._v("Can view")]),l("a",{staticClass:"dropdown-item",attrs:{href:"#0"}},[t._v("Can edit")]),l("a",{staticClass:"dropdown-item",attrs:{href:"#0"}},[t._v("Remove")])])],1)]),l("li",[l("div",{staticClass:"files-share-users-header"},[l("figure",{staticClass:"avatar is-small is-inline"},[l("span",{staticClass:"avatar-initials"},[t._v("BS")])]),l("span",[l("span",{staticClass:"files-share-users-name"},[t._v("Baianat Support")]),l("span",{staticClass:"files-share-users-email"},[t._v("support@baianat.com")])])]),l("div",{staticClass:"files-share-users-footer"},[l("span",{staticClass:"u-font-small"},[t._v("Owner")])])])])]),l("template",{slot:"footer"},[l("button",{staticClass:"button is-primary"},[t._v("Share")]),l("button",{staticClass:"button is-dark is-outlined",on:{click:function(e){t.share=!1}}},[t._v("Cancel")])])],2):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"files-breadcrumb"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"#"}},[this._v("Files")])]),e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"#"}},[this._v("Sub folder")])]),e("li",{staticClass:"breadcrumb-item is-active",attrs:{"aria-current":"page"}},[this._v("Current folder")])])])])}],!1,null,null,null));e.default=v.exports}}]);