import{_ as f}from"./MoreProfile-b356b971.mjs";import{_ as h}from"./BottomSheet-c213e1f0.mjs";import{_ as x,d as g,x as b,b as v,e as w,f as y,g as o,w as p,h as k,i as t,k as S,v as d}from"./entry-53aace6f.mjs";import{N}from"./NavBar-f91e6303.mjs";const B=g({setup(_,{expose:n}){n();let s=b(!1);const e=S(),l=v(),r={openModal:s,session:e,router:l,changeOpen:c=>{s.value=c},changeSelect:c=>{},slcValue:c=>{s.value=!0},logout:()=>{e.delItem("cexup-user"),e.delItem("cexup-token"),e.delItem("cexup-checkout"),e.delItem("cexup-meet"),e.delItem("cexup-quiz"),l.push("/auth")},NavBar:N};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),C={class:"profile-wrapper h-full relative w-full"},M={class:"settings-profile px-4 pt-24 relative bg-blue-50 h-screen"},V={class:"bg-white rounded-lg px-4 w-full"},I=t("hr",null,null,-1),O={class:""},A=t("h2",{class:"w-full text-center text-base font-poppins font-medium"},[d("Are you sure want "),t("br"),d(" to logout")],-1),P={class:"flex justify-between items-center mt-10 mb-5"};function j(_,n,s,e,l,m){const a=f,i=h,u=k;return w(),y("div",null,[o(u,{name:"main"},{default:p(()=>[t("div",C,[o(e.NavBar,{title:"Account Settings",link:"/profile/more"}),t("section",M,[t("div",V,[o(a,{img:"",title:"Delete Account"}),I,o(a,{img:"",title:"Change Password"})]),t("button",{onClick:e.slcValue,class:"mt-7 py-4 w-full text-center bg-white col-start-auto text-red-650 font-poppins font-medium text-base border border-gray-225 rounded-xl outline-none"},"Logout")]),o(i,{openModal:e.openModal,"onUpdate:changeOpen":e.changeOpen,"onUpdate:changeSelect":e.changeSelect,type:"blank"},{bottomSheet:p(()=>[t("div",O,[A,t("div",P,[t("button",{class:"font-poppins text-base text-primary-color border border-primary-color bg-white rounded-xl py-3 w-full mr-3",onClick:e.logout},"Yes"),t("button",{class:"font-poppins text-base bg-primary-color text-white rounded-xl py-3 w-full",onClick:n[0]||(n[0]=r=>e.openModal=!1)},"No")])])]),_:1},8,["openModal"])])]),_:1})])}var E=x(B,[["render",j]]);export{E as default};