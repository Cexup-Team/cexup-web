import{_ as a,d as c,e as _,f as l,g as r,w as d,i as e,t as s,p as u,q as p}from"./entry-53aace6f.mjs";const m=c({props:{img:{type:String},alt:{type:String,default:"image article"},title:{type:String},subTitle:{type:String},date:{type:String},author:{type:String},slug:{type:String}},setup(i,{expose:n}){n();const t={};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),f={class:"aticle-item rounded-lg w-80 mr-4 h-auto p-4 bg-white"},g={class:"flex justify-between items-center"},h={class:"w-3/6"},x={class:"text-sm font-medium text-primary-color font-poppins mb-2"},y={class:"text-base font-poppins font-medium line-clamp-3"},w={class:"w-2/6"},b=["src","alt"],S={class:"flex justify-between w-full items-center mt-5"},v={class:"text-xs font-poppins text-gray-400"},j=e("img",{src:u,class:"w-6 h-6",alt:""},null,-1);function k(i,n,t,B,C,N){const o=p;return _(),l("div",f,[r(o,{to:`/article/${t.slug}`},{default:d(()=>[e("div",g,[e("div",h,[e("h2",x,s(t.title),1),e("p",y,s(t.subTitle),1)]),e("div",w,[e("img",{src:t.img,class:"w-24 h-24 object-cover rounded-lg",alt:t.alt},null,8,b)])]),e("div",S,[e("h4",v,s(t.date)+" | "+s(t.author),1),j])]),_:1},8,["to"])])}var V=a(m,[["render",k]]);export{V as _};