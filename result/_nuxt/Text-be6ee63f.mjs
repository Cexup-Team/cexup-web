import{_,d as x,x as g,e as o,f as l,j as r,t as u,y as d,i as m}from"./entry-53aace6f.mjs";const h=x({props:{className:{type:[String]},type:{type:[String]},placeholder:{type:[String]},icon:{type:[Boolean]},src:{type:[String]},src_eye:{type:[String]},select:{type:[String]},slc:{type:[Boolean],default:!1},modelValue:{type:[String]},slcValue:{type:[String]},suffixText:{type:[String]},borderValidation:{type:[String]},read:{type:[Boolean]}},emits:["update:modelValue","update:slcValue","update:changeOpen"],setup(n,{expose:p,emit:t}){p();const e=n;let a=g("text");a.value=e.type;function i(s){s.type==="focus"?t("update:slcValue",s.target.attributes.typeselect.value):t("update:modelValue",s.target.value)}function y(){a.value==="password"?a.value="text":a.value="password"}let f=document.querySelector(":root");const c={props:e,type:a,emit:t,updateValue:i,showPassword:y,root:f};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),b={class:"relative wrapper-input-text"},S=["src"],V=["src"],v=["src"],w={key:3,class:"absolute right-4 z-10 transition-all duration-300 font-poppins text-gray-350 text-sm top-0 h-full flex items-center"},k=["type","value","readonly"],B=["typeselect","type","value"],z={for:"",class:"label-text absolute font-poppins pointer-events-none left-4 top-4 px-1 text-gray-350 bg-white text-sm transition-all duration-300"};function C(n,p,t,e,a,i){return o(),l("div",b,[e.props.icon===!0&&e.type==="password"?(o(),l("img",{key:0,src:e.props.src,class:"img-input-text absolute right-3 z-50 p-1 transition-all duration-300",alt:"",onClick:e.showPassword},null,8,S)):r("",!0),e.props.icon===!0&&e.type==="text"&&!e.props.suffixText?(o(),l("img",{key:1,src:e.props.src_eye,class:"img-input-text absolute right-3 z-50 p-1 transition-all duration-300",alt:"",onClick:e.showPassword},null,8,V)):r("",!0),e.props.icon===!0?(o(),l("img",{key:2,src:e.props.src,class:"img-input-text absolute right-3 z-10 p-1 transition-all duration-300",alt:""},null,8,v)):r("",!0),e.props.suffixText?(o(),l("span",w,u(t.suffixText),1)):r("",!0),e.props.slc===!1?(o(),l("input",{key:4,type:e.type,value:t.modelValue,onInput:e.updateValue,placeholder:" ",class:d("input-text outline-none border focus:border-primary-color w-full bg-none p-4 font-poppins text-sm absolute top-0 left-0 h-full "+e.props.className),readonly:t.read},null,42,k)):r("",!0),e.props.slc===!0?(o(),l("input",{key:5,typeselect:e.props.select,type:e.type,value:t.modelValue,onFocus:e.updateValue,placeholder:" ",class:d("input-text outline-none border border-gray-150 w-full bg-none p-4  font-poppins text-sm absolute top-0 left-0 h-full "+e.props.className),readonly:""},null,42,B)):r("",!0),m("label",z,u(e.props.placeholder),1)])}var P=_(h,[["render",C]]);export{P as _};