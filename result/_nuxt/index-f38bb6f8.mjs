import{_ as m,d as h,e as a,f as c,i as t,t as n,y,v,a6 as w,b as S,o as $,O as N,g as i,w as f,Q as k,h as B,F as C,D as P,j,a7 as M,a8 as D,a9 as F,l as O,q as T}from"./entry-53aace6f.mjs";import{T as V}from"./Tabs-682e888a.mjs";const A=h({props:{img:{type:String},title:{type:String},time:{type:String},notif:{type:String}},setup(r,{expose:o}){o();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),H={class:"flex items-center px-4 py-6"},J={class:"p-4 rounded-full bg-blue-150 w-auto"},L=["src"],R={class:"w-full ml-3"},E={class:"flex items-center justify-between"},q={class:"font-poppins font-semibold text-sm"},z={class:"font-poppins text-gray-350 text-xs"},G={class:"font-poppins text-sm mt-1"};function I(r,o,e,s,_,l){return a(),c("div",H,[t("div",J,[t("img",{src:e.img,alt:"",class:"w-8 h-8"},null,8,L)]),t("div",R,[t("div",E,[t("h3",q,n(e.title),1),t("span",z,n(e.time),1)]),t("p",G,n(e.notif),1)])])}var Q=m(A,[["render",I]]);const U=h({props:{title:{type:String},price:{type:String},duration:{type:String},status:{type:Boolean,default:!1}},setup(r,{expose:o}){o();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),K={class:"card-my-subscribe bg-white overflow-hidden p-4",style:{"border-radius":"10px"}},W={class:"flex items-center"},X={class:"font-poppins font-medium text-lg w-full"},Y={class:"font-poppins text-sm"},Z={class:"font-poppins text-sm mt-2 font-normal"},tt=v("Jatuh tempo : "),et={class:"font-semibold"},st=t("hr",{class:"mt-4 border-2 border-gray-225 bg-gray-225"},null,-1),ot=t("button",{class:"text-primary-color font-poppins font-medium text-base mt-4 text-center w-full"},"See Detail",-1);function nt(r,o,e,s,_,l){return a(),c("div",K,[t("div",W,[t("h3",X,n(e.title),1),t("button",{class:y("w-auto text-base font-poppins font-medium text-white px-4 py-1 "+(e.status?"bg-teal-550":"bg-red-650")),style:{"border-radius":"5px"}},n(e.status?"Active":"Expired"),3)]),t("h4",Y,"Price: "+n(e.price),1),t("p",Z,[tt,t("b",et,n(e.duration),1)]),st,ot])}var it=m(U,[["render",nt]]);const at=h({setup(r,{expose:o}){o();const e=w(),s=S(),_=async d=>{await M(D(F,"notification",e.state.isMap.get(d))).then(p=>{s.push(`/teleconsultation/order/${d}`)}).catch(p=>{console.log(p)})};$(()=>{e.getNotif()}),N(()=>{e.state.isArray=[],e.state.isMap=new Map});const l={notif:e,router:s,updateNotif:_,Tabs:V,getFormatNotifDate:k};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),ct={class:"notif-wrapper w-full h-full relative"},rt={class:"flex justify-between mt-7 mx-6 items-center"},lt=t("img",{src:O,class:"w-3 h-4",alt:""},null,-1),_t=t("h1",{class:"font-poppins text-xl font-semibold"},"Inbox",-1),dt=t("div",null,null,-1),pt=t("div",{class:"active font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5"}," Notification ",-1),ut=t("div",{class:"font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5"}," Mail (1) ",-1),ft={key:0,class:"tab-body-item active w-full pb-44"},mt=t("hr",{class:"bg-gray-225 w-full",style:{height:"2px"}},null,-1),ht={class:"tab-body-item px-4 pb-44 w-full"},bt=t("h2",{class:"text-base font-poppins font-medium text-gray-350 mt-5"},"Paket Langganan",-1),xt={class:"mt-4"},gt={class:"mt-4"},yt=t("div",{class:"mt-10"},null,-1);function vt(r,o,e,s,_,l){const d=T,p=Q,b=it,x=B;return a(),c("div",null,[i(x,{name:"main"},{default:f(()=>[t("div",ct,[t("div",rt,[i(d,{to:"/"},{default:f(()=>[lt]),_:1}),_t,dt]),i(s.Tabs,{bgBody:"bg-white"},{tabHeader:f(()=>[pt,ut]),tabBody:f(()=>[!s.notif.state.isLoading&&s.notif.state.isStatus==="success"?(a(),c("div",ft,[(a(!0),c(C,null,P(s.notif.state.isArray,(u,g)=>(a(),c("div",{key:g},[i(p,{img:"~/assets/images/bag_icon.svg",title:u.title,time:s.getFormatNotifDate(u.created_at),notif:u.message,onClick:wt=>s.updateNotif(u.transaction_id)},null,8,["title","time","notif","onClick"]),mt]))),128))])):j("",!0),t("div",ht,[bt,t("div",xt,[i(b,{title:"Stay Healthy Silver",price:"Rp45.000/ Bulan",duration:"04 Jun 2022",status:""})]),t("div",gt,[i(b,{title:"Stay Healthy Gold",price:"Rp60.000/ Bulan",duration:"31 Jun 2022"})]),yt])]),_:1})])]),_:1})])}var Nt=m(at,[["render",vt]]);export{Nt as default};
