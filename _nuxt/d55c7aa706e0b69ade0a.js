(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{263:function(t,e,l){"use strict";l.r(e);var o=l(247),n=l.n(o),r=(l(248),[{element:"#input1",popover:{title:"Email",description:"Write you email here.",position:"bottom"}},{element:"#input2",popover:{title:"Password",description:"Write your password here.",position:"bottom"}},{element:"#input3",popover:{title:"Terms",description:"You must agree to our Terms and Conditions",position:"bottom"}},{element:"#button",popover:{title:"Finish",description:"After complete all fields click submit",position:"bottom"}}]),c={head:function(){return{title:"Colors"}},data:function(){return{driver:null}},mounted:function(){this.driver=new n.a},methods:{guide:function(){this.driver.defineSteps(r),this.driver.start()}}},d=l(2),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h1",[t._v("Guide")]),l("button",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.guide(e)}}},[t._v("Start Guide")]),l("div",{staticClass:"grid has-space"},[l("div",{staticClass:"column is-desktop-6"},[l("AppCard",{staticClass:"is-full"},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[t._v("Basic")])]),l("form",{staticClass:"form"},[l("div",{staticClass:"field"},[l("label",{staticClass:"field-label"},[t._v("Email")]),l("input",{staticClass:"input",attrs:{id:"input1",type:"email",placeholder:"Enter email"}}),l("small",{staticClass:"field-text"},[t._v("We'll never share your email with anyone else.")])]),l("div",{staticClass:"field"},[l("label",{staticClass:"field-label"},[t._v("Password")]),l("input",{staticClass:"input",attrs:{id:"input2",type:"password",placeholder:"Enter password"}})]),l("div",{staticClass:"field"},[l("label",{staticClass:"checkbox",attrs:{id:"input3"}},[l("input",{staticClass:"checkbox-input",attrs:{type:"checkbox"}}),l("span",{staticClass:"checkbox-label"},[t._v("I agree to the Terms and Conditions")])])]),l("div",{staticClass:"field"},[l("button",{staticClass:"button",attrs:{id:"button"},on:{click:function(t){t.preventDefault()}}},[t._v("Submit")])])])],2)],1)])])},[],!1,null,null,null);e.default=component.exports}}]);