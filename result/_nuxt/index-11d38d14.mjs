import{_ as f,d as S,M as b,a as x,b as g,T as k,o as v,J as V,e as d,f as _,g as e,w as m,k as y,h as w,i as o,j as h,v as C,q as H}from"./entry-53aace6f.mjs";import{H as N,_ as E}from"./HealthStatus-27a3c206.mjs";import{N as M}from"./NavBar-f91e6303.mjs";import{H as B}from"./HealthMedicalFeature-3dbb39c1.mjs";import"./swiper-slide-54a59ba8.mjs";const D=S({setup(p,{expose:l}){l();const a=b(),t=x(),u=g(),n=y(),r=k(),i=history.state.back;v(async()=>{const c=await JSON.parse(V(n.getItem("cexup-user")));a.state.name=c.name,a.getLatestVitalSign(c.user_code),a.getCurrentEWS(c.user_code)});const s={dashboard:a,$toast:t,router:u,session:n,medical:r,backstack:i,NavBar:M,HealthStatusVue:N,HealthMedicalFeature:B};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),L={class:"medical-record-wrapper"},W={class:"pt-24"},j={class:"w-full px-6 flex justify-between items-center"},T=o("h2",{class:"font-poppins text-sm font-semibold"},"Health Status",-1),F=C("Details"),J={key:0},O={key:1,class:""};function R(p,l,a,t,u,n){const r=H,i=E,s=w;return d(),_("div",null,[e(s,{name:"main"},{default:m(()=>[o("div",L,[e(t.NavBar,{title:"Medical Record",link:t.backstack},null,8,["link"]),o("div",W,[o("div",j,[T,e(r,{class:"text-primary-color text-sm font-poppins font-semibold",to:"/profile/medical/detail"},{default:m(()=>[F]),_:1})]),t.dashboard.stateVitalSign.isLoading&&t.dashboard.stateCurrentEWS.isLoading?(d(),_("div",J,[e(i)])):h("",!0),!t.dashboard.stateVitalSign.isLoading&&t.dashboard.stateVitalSign.isStatus==="success"&&!t.dashboard.stateCurrentEWS.isLoading&&t.dashboard.stateCurrentEWS.isStatus==="success"?(d(),_("div",O,[e(t.HealthStatusVue,{vital:t.dashboard.stateVitalSign.isData,ews:t.dashboard.stateCurrentEWS.isData},null,8,["vital","ews"])])):h("",!0),e(t.HealthMedicalFeature)])])]),_:1})])}var G=f(D,[["render",R]]);export{G as default};
