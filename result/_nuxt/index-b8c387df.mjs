import{_ as y,d as v,M as g,a as V,b as w,c as C,T as H,x as m,o as M,J as E,e as l,f as _,g as s,w as p,h as L,i as e,j as f,k as D,v as T,q as W}from"./entry-53aace6f.mjs";import{H as j,_ as q}from"./HealthStatus-27a3c206.mjs";import{H as N}from"./HealthMedicalFeature-3dbb39c1.mjs";import"./swiper-slide-54a59ba8.mjs";const Q=v({setup(S,{expose:u}){u();const a=g(),t=V(),o=w(),n=C(),r=D(),i=H();let c=m(""),x=m("idle");const b=n.query.tk;M(async()=>{const k=n.query.tk,d=E(k.replaceAll("XMLSUTF39853","+"));try{d||o.push("/auth"),a.getLatestVitalSign(d),a.getCurrentEWS(d)}catch{o.push("/auth")}});const h={dashboard:a,$toast:t,router:o,route:n,session:r,medical:i,tk:c,statusTk:x,tokenQuery:b,HealthStatusVue:j,HealthMedicalFeature:N};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),B={class:"medical-record-wrapper"},F=e("div",{class:"nav-bar fixed bg-white w-full z-30 top-0 pb-4"},[e("div",{class:"flex justify-between mt-7 mx-6 items-center"},[e("div"),e("h1",{class:"font-poppins text-xl font-semibold"},"Medical Record"),e("div")])],-1),R={class:"pt-24"},z={class:"w-full px-6 flex justify-between items-center"},A=e("h2",{class:"font-poppins text-sm font-semibold"},"Health Status",-1),J=T("Details"),O={key:0},P={key:1,class:""};function U(S,u,a,t,o,n){const r=W,i=q,c=L;return l(),_("div",null,[s(c,{name:"medical"},{default:p(()=>[e("div",B,[F,e("div",R,[e("div",z,[A,s(r,{class:"text-primary-color text-sm font-poppins font-semibold",to:"/doctor/detail?tk="+t.tokenQuery},{default:p(()=>[J]),_:1},8,["to"])]),t.dashboard.stateVitalSign.isLoading&&t.dashboard.stateCurrentEWS.isLoading?(l(),_("div",O,[s(i)])):f("",!0),!t.dashboard.stateVitalSign.isLoading&&t.dashboard.stateVitalSign.isStatus==="success"&&!t.dashboard.stateCurrentEWS.isLoading&&t.dashboard.stateCurrentEWS.isStatus==="success"?(l(),_("div",P,[s(t.HealthStatusVue,{vital:t.dashboard.stateVitalSign.isData,ews:t.dashboard.stateCurrentEWS.isData,role:"doctor",tk:t.tokenQuery},null,8,["vital","ews","tk"])])):f("",!0),s(t.HealthMedicalFeature,{role:"doctor",tk:t.tokenQuery},null,8,["tk"])])])]),_:1})])}var Z=y(Q,[["render",U]]);export{Z as default};
