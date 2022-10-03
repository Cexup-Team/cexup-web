import{_ as r,d as m,e as _,L as u,w as i,i as t,t as f,q as d,f as g,g as s,h,l as x,m as v,v as c}from"./entry-53aace6f.mjs";const b=m({props:{title:{type:String},icon:{type:String},link:{type:String}},setup(l,{expose:n}){n();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),k={class:"flex flex-col justify-center items-center h-full w-full"},y=["src"],w={class:"text-base font-poppins font-semibold mt-4"};function S(l,n,e,o,a,K){const p=d;return _(),u(p,{to:e.link,class:"telemonitoring-card h-40 w-full rounded-xl cursor-pointer"},{default:i(()=>[t("div",k,[t("img",{src:e.icon,class:"p-4 rounded-full bg-blue-50",alt:""},null,8,y),t("h4",w,f(e.title),1)])]),_:1},8,["to"])}var T=r(b,[["render",S]]);const $={},C={class:"telemonitoring-wrapper relative"},j={class:"nav-bar fixed bg-white w-full z-30 top-0 pb-4"},B={class:"flex justify-between mt-6 mx-6 items-center"},N=t("img",{src:x,class:"w-3 h-4",alt:""},null,-1),V=t("h1",{class:"font-poppins text-xl font-semibold"},"Telemonitoring",-1),z=t("div",null,null,-1),O=t("div",{class:"form-search px-4 mt-6"},[t("div",{class:"relative"},[t("input",{type:"text",class:"w-full border border-gray-150 placeholder:text-gray-350 h-10 outline-none pr-12 pl-4 py-2 font-poppins text-sm",placeholder:"Search \u201Cdoctor\u201D",style:{"border-radius":"10px"}}),t("img",{src:v,class:"absolute z-20 right-6 transform translate-y-0.5 w-4 h-4",alt:"search icon"})])],-1),q=t("div",{class:"mt-4 bg-blue-50 px-6"},[t("h2",{class:"font-poppins text-xs py-2"},[c("Total "),t("b",{class:"font-medium"},"4"),c(" health object that you can monitor")])],-1),D={class:"grid grid-cols-2 gap-5 px-6 mt-4"};function E(l,n){const e=d,o=T,a=h;return _(),g("div",null,[s(a,{name:"main"},{default:i(()=>[t("div",C,[t("div",j,[t("div",B,[s(e,{to:"/"},{default:i(()=>[N]),_:1}),V,z])]),O,q,t("div",D,[s(o,{title:"Kids Tracker",icon:"~/assets/images/stetoskop.svg",link:"/telemonitoring/kids"}),s(o,{title:"Obgyn",icon:"~/assets/images/stetoskop.svg",link:"/telemonitoring/obgyn"}),s(o,{title:"Cardiac Tracker",icon:"~/assets/images/stetoskop.svg",link:"/telemonitoring/cardiac"}),s(o,{title:"Covid-19",icon:"~/assets/images/stetoskop.svg",link:"/telemonitoring/covid"})])])]),_:1})])}var P=r($,[["render",E]]);export{P as default};