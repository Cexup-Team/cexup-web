import{_ as V,d as x,n as w,r as b,o as d,c,b as o,w as p,e as k,a as t,t as _,k as g,F as A,s as N,f as U,R as S,m as M,p as F,g as P,v as B}from"./entry-76a6ea75.mjs";import{_ as O}from"./Text-feacb47c.mjs";import{_ as T}from"./Button-1d4a8180.mjs";import{_ as j}from"./BottomSheet-cf4a30e9.mjs";const C=x({setup(v,{expose:s}){s();let r=w(!1);const e=b({name:"Mario Prasetyo",date:"2001-08-23",gender:"Male",email:"kotaksuratprasetyo@gmail.com",phone:"085782568768",address:"Jl. Nelayan Timur No. 1 RT. 08/RW.07",province:"DKI Jakarta",regency:"Purwokerto",district:"Banjarsari",village:"Kadipiro",selection:[],item:null,selectActive:"",searchIcon:["province","regency","district","village"]}),i=new Map;i.set("identity",["KTP","KITAS","PASSPORT"]),i.set("gender",["Male","Female"]),i.set("province",["Jawa Tengah","Jawa Barat","DKI Jakarta","Banten","Aceh","Maluku"]),i.set("regency",["Semarang","Tegal","Purwokerto","Pemalang","Surakarta","Kendal"]),i.set("district",["Banjarsari","Jebres","Mangkunegaran","Serengan"]),i.set("village",["Kadipiro","Skip","Mojosongo"]);const m={openModal:r,state:e,listMap:i,slcValue:a=>{e.item=i.get(a),e.selectActive=a,r.value=!0},changeOpen:a=>{r.value=a},selectOption:a=>{e.selectActive==="gender"?e.gender=a:e.selectActive==="identity"?e.identity=a:e.selectActive==="province"?e.province=a:e.selectActive==="regency"?e.regency=a:e.selectActive==="district"?e.district=a:e.selectActive==="village"&&(e.village=a),r.value=!1}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),K={class:"edit-profile-wrapper h-full relative w-full"},I={class:"nav-bar fixed bg-white w-full z-30 top-0 pb-4"},J={class:"flex justify-between mt-6 mx-6 items-center"},D=t("img",{src:U,class:"w-3 h-4",alt:""},null,-1),R=t("h1",{class:"font-poppins text-xl font-semibold"},"Edit Profile",-1),z=t("div",null,null,-1),E={class:"edit-profile-body px-4 pt-20 relative"},G=t("div",{class:"image-profile w-full flex justify-center items-center"},[t("div",{class:"w-20 h-20 overflow-hidden rounded-full relative"},[t("img",{src:S,alt:""}),t("div",{class:"absolute w-full h-4 z-20 bg-gray-900 opacity-50 bottom-0 text-center"},[t("p",{class:"font-poppins tracking-wide font-medium text-white",style:{"font-size":"10px","margin-top":"1px"}},"Edit")])])],-1),L={class:"mt-7"},W={class:"input-form"},q={class:"inputForm mt-7"},H={class:"inputForm mt-7"},Q={class:"input-form mt-7"},X={class:"inputForm mt-7"},Y={class:"inputForm mt-7"},Z={class:"inputForm mt-7"},$={class:"inputForm mt-7"},ee={class:"inputForm mt-7"},te={class:"inputForm mt-7"},le={class:""},se={class:"text-sm font-semibold font-poppins leading-5 w-full mb-6"},oe={key:0,class:"relative h-16 max-h-16 min-h-max mb-5"},ae=t("input",{class:"search_input outline-none border border-gray-150 w-full bg-none p-4 font-poppins text-sm absolute top-0 left-0",placeholder:"Search",type:"text"},null,-1),ne=t("img",{src:P,class:"absolute w-5 h-5 right-3 top-0 transform translate-y-3",alt:""},null,-1),ie=[ae,ne],re={class:"w-full h-full overflow-y-scroll mt-6 no-scrollbar"},de=["onClick"],ce={key:0,src:B,class:"m-1",alt:""},me=t("div",{class:"pt-40"},null,-1);function pe(v,s,r,e,i,f){const u=M,n=O,m=T,a=j,h=k;return d(),c("div",null,[o(h,{name:"main"},{default:p(()=>[t("div",K,[t("div",I,[t("div",J,[o(u,{to:"/profile"},{default:p(()=>[D]),_:1}),R,z])]),t("section",E,[G,t("div",L,[t("div",W,[o(n,{className:"rounded-md",modelValue:e.state.name,"onUpdate:modelValue":s[0]||(s[0]=l=>e.state.name=l),type:"text",placeholder:"Name"},null,8,["modelValue"])]),t("div",q,[o(n,{className:"rounded-md",type:"text",modelValue:e.state.date,"onUpdate:modelValue":s[1]||(s[1]=l=>e.state.date=l),placeholder:"Date of Birth",src:"~/assets/images/calendar.svg",icon:!0,slc:"","onUpdate:slcValue":e.slcValue,select:"date"},null,8,["modelValue"])]),t("div",H,[o(n,{className:"rounded-md",modelValue:e.state.gender,"onUpdate:modelValue":s[2]||(s[2]=l=>e.state.gender=l),type:"text",placeholder:"Gender",src:"~/assets/images/arrow_down.svg",icon:!0,select:"gender",slc:"","onUpdate:slcValue":e.slcValue},null,8,["modelValue"])]),t("div",Q,[o(n,{className:"rounded-md",type:"email",modelValue:e.state.email,"onUpdate:modelValue":s[3]||(s[3]=l=>e.state.email=l),placeholder:"Email"},null,8,["modelValue"])]),t("div",X,[o(n,{className:"rounded-md",type:"text",modelValue:e.state.phone,"onUpdate:modelValue":s[4]||(s[4]=l=>e.state.phone=l),placeholder:"Phone Number"},null,8,["modelValue"])]),t("div",Y,[o(n,{className:"rounded-md",type:"text",modelValue:e.state.address,"onUpdate:modelValue":s[5]||(s[5]=l=>e.state.address=l),placeholder:"Address"},null,8,["modelValue"])]),t("div",Z,[o(n,{className:"rounded-md",type:"text",modelValue:e.state.province,"onUpdate:modelValue":s[6]||(s[6]=l=>e.state.province=l),placeholder:"Province",src:"~/assets/images/arrow_down.svg",icon:!0,select:"province",slc:"","onUpdate:slcValue":e.slcValue},null,8,["modelValue"])]),t("div",$,[o(n,{className:"rounded-md",type:"text",modelValue:e.state.regency,"onUpdate:modelValue":s[7]||(s[7]=l=>e.state.regency=l),placeholder:"Regency",src:"~/assets/images/arrow_down.svg",icon:!0,select:"regency",slc:"","onUpdate:slcValue":e.slcValue},null,8,["modelValue"])]),t("div",ee,[o(n,{className:"rounded-md",type:"text",modelValue:e.state.district,"onUpdate:modelValue":s[8]||(s[8]=l=>e.state.district=l),placeholder:"District",src:"~/assets/images/arrow_down.svg",icon:!0,select:"district",slc:"","onUpdate:slcValue":e.slcValue},null,8,["modelValue"])]),t("div",te,[o(n,{className:"rounded-md",type:"text",modelValue:e.state.village,"onUpdate:modelValue":s[9]||(s[9]=l=>e.state.village=l),placeholder:"Village",src:"~/assets/images/arrow_down.svg",icon:!0,select:"village",slc:"","onUpdate:slcValue":e.slcValue},null,8,["modelValue"])]),o(m,{className:"mt-8 w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base",title:"Save"}),o(a,{openModal:e.openModal,"onUpdate:changeOpen":e.changeOpen,type:"blank"},{bottomSheet:p(()=>[t("div",le,[t("h3",se,_(e.state.selectActive.charAt(0).toUpperCase()+e.state.selectActive.slice(1)),1),e.state.searchIcon.indexOf(e.state.selectActive)>-1?(d(),c("div",oe,ie)):g("",!0),t("ul",re,[(d(!0),c(A,null,N(e.state.item,(l,y)=>(d(),c("li",{class:"w-full border-b border-solid border-gray-175 pb-2 flex justify-between items-center mb-4",onClick:ue=>e.selectOption(l),key:y},[t("p",{class:F("text-base leading-6 font-poppins "+(e.state[`${e.state.selectActive}`]===l?"text-primary-color":"text-gray-350"))},_(l),3),e.state[`${e.state.selectActive}`]===l?(d(),c("img",ce)):g("",!0)],8,de))),128))])])]),_:1},8,["openModal"]),me])])])]),_:1})])}var he=V(C,[["render",pe]]);export{he as default};
