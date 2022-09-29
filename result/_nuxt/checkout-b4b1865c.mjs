import{_ as J}from"./Text-be6ee63f.mjs";import{_ as P}from"./Button-7638a4ec.mjs";import{_ as T}from"./BottomSheet-c213e1f0.mjs";import{_ as V,d as R,a as A,b as Y,aC as E,x as O,A as G,o as H,e as r,f as d,g as f,w as U,k as Q,J as K,aD as L,aE as I,h as W,i as t,t as n,j as x,F as X,D as Z,l as $,aF as tt,aG as et,aH as st,aI as ot,aJ as at,v as N,y as nt,G as ct}from"./entry-53aace6f.mjs";import{i as it}from"./currencyFormat-c478cab6.mjs";const lt=R({setup(q,{expose:w}){w();const v=A(),e=Y(),o=E(),i=Q();let g=O(new Date);const h=G({item:["Doku"],selected:null});let _=O(!1);const u=s=>{_.value=s},m=s=>{console.log(s)},y=s=>{_.value=!0},b=s=>{document.querySelector.bind(document)("#sheet").setAttribute("aria-hidden",String(!s))},C=()=>{b(!1),u(!1)},z=s=>{h.selected=s,C()},D=async()=>{o.stateCheckout.isLoading=!0;const s=await JSON.parse(i.getItem("cexup-checkout"));o.stateCheckout.isData=s,o.stateCheckout.date=j(o.stateCheckout.isData.date),o.stateCheckout.isLoading=!1,o.stateCheckout.isStatus="success"},S=async()=>{o.stateUser.isLoading=!0;const s=await JSON.parse(K(i.getItem("cexup-user")));o.stateCheckout.birth=F(s.date_of_birth),o.stateUser.isData=s,o.stateUser.isLoading=!1,o.stateUser.isStatus="success"},j=s=>{const c=new Date(s),l=L(s),p=c.getDate(),a=I(c.getMonth()),k=c.getFullYear();return`${l}, ${p} ${a} ${k} ${o.stateCheckout.isData.time}`},F=s=>{const c=new Date(s);L(s);const l=c.getDate(),p=I(c.getMonth()),a=c.getFullYear();return`${l} ${p} ${a}`},B=()=>{const s=JSON.parse(i.getItem("cexup-checkout")),c=JSON.parse(i.getItem("cexup-quiz")),l=[];c.map((a,k)=>{l.push({slug:a.slug,name:a.name,questionnaire:a.questionnaire})});const p={id:s.id,time:s.time,date:s.date,type:s.type,note:s.note,allow_access_data:!0,data_questionnaire:l};o.booking(p).then(a=>{window.open(a.payment_url,"_blank"),e.push(a.route)}).catch(a=>e.push(a.route))};H(async()=>{try{const s=i.getItem("cexup-checkout");await D(),await S()}catch{e.push("/")}});const M={$toast:v,router:e,tele:o,session:i,now:g,state:h,openModal:_,changeOpen:u,changeSelect:m,slcValue:y,setIsSheetShow:b,setOverlay:C,selectOption:z,getCheckout:D,getUser:S,getDateFormat:j,getDateFormatBirth:F,pay:B,idrFormat:it};return Object.defineProperty(M,"__isScriptSetup",{enumerable:!1,value:!0}),M}}),rt={class:"checkout-wrapper relative"},dt=t("div",{class:"nav-bar fixed bg-white w-full z-30 top-0 pb-4"},[t("div",{class:"flex justify-between mt-6 mx-6 items-center"},[t("img",{src:$,class:"w-3 h-4",alt:""}),t("h1",{class:"font-poppins text-xl font-semibold"},"Checkout"),t("div")])],-1),mt={class:"mt-20 px-4"},_t={class:""},pt=t("h2",{class:"font-poppins font-semibold text-sm"},"Doctor Information",-1),ht={class:"card-register-doctor bg-white rounded-xl mt-3"},ut={key:0,class:"flex items-start p-4"},ft={class:"w-20 h-20 rounded-full overflow-hidden mr-5"},xt=["src"],gt={class:"flex flex-col"},yt={class:"font-poppins font-medium text-base"},bt={class:"font-poppins text-xs text-gray-350"},kt={class:"font-poppins text-xs text-gray-350 mt-2"},wt=t("div",{class:"flex items-center mt-1"},[t("img",{src:tt,class:"w-3 h-3 mr-2",alt:""}),t("span",{class:"text-xs font-poppins"},"5 Years")],-1),vt={class:"font-poppins text-xs mt-3"},Ct={key:0,class:"mt-8"},Dt=t("h2",{class:"font-poppins font-medium text-base mb-4"},"Detail Patient",-1),St={class:"flex justify-between items-center mt-4"},jt={class:"flex justify-start items-center"},Ft=t("img",{src:et,class:"mr-3",alt:""},null,-1),Mt={class:"font-poppins text-sm font-medium"},Ot={class:"font-poppins text-xs"},Ut=t("div",{class:"flex justify-between items-center mt-5"},[t("h4",{class:"font-poppins font-medium text-base"},"Date")],-1),Lt={class:"flex justify-start items-center mt-2"},It=t("img",{src:st,class:"w-9 h-9 mr-4",alt:""},null,-1),Nt={class:"font-poppins font-medium text-sm text-indigo-850"},qt=t("div",{class:"flex justify-between items-center mt-5"},[t("h4",{class:"font-poppins font-medium text-base"},"My Simptons")],-1),zt={class:"flex justify-start items-center mt-2"},Bt=t("img",{src:ot,class:"w-9 h-9 mr-4",alt:""},null,-1),Jt={class:"text-indigo-850 font-poppins font-medium text-sm"},Pt=t("h4",{class:"font-poppins font-medium text-base mt-5"},"Voucher",-1),Tt={class:"inputForm mt-4"},Vt=t("h4",{class:"font-poppins font-semibold text-base mt-5 text-indigo-850"},"Payment Detail",-1),Rt={class:"flex justify-between items-center mt-4"},At=t("h5",{class:"font-poppins text-sm"},"Consultation",-1),Yt={class:"font-poppins text-sm"},Et=t("div",{class:"flex justify-between items-center mt-2"},[t("h5",{class:"font-poppins text-sm"},"Aditional Discount"),t("span",{class:"font-poppins text-sm"},"-")],-1),Gt={class:"flex justify-between items-center mt-2"},Ht=t("h5",{class:"font-poppins text-sm font-semibold"},"Total",-1),Qt={class:"font-poppins text-sm font-semibold"},Kt=t("div",{class:"mb-40"},null,-1),Wt={class:"floating-pay-now fixed bg-white w-full z-30 bottom-0 p-6"},Xt={class:"flex justify-between items-center"},Zt={key:0,class:"flex flex-col"},$t=t("h3",{class:"font-poppins text-xs font-medium"},"Total:",-1),te={class:"text-primary-color font-semibold font-poppins"},ee={class:""},se=t("div",{class:"flex flex-col justify-center w-full items-center"},[t("img",{src:at,class:"w-20 h-20",alt:""}),t("h2",{class:"text-primary-color font-poppins font-semibold text-base mt-6"},"Select Payment Method"),t("p",{class:"text-gray-350 text-center font-poppins mt-3 font-medium text-sm"},[N("Choose payment method on your "),t("br"),N(" demand")])],-1),oe={class:"w-full h-full overflow-y-scroll mt-6"},ae=["onClick"],ne={key:0,src:ct,class:"m-1",alt:""};function ce(q,w,v,e,o,i){const g=J,h=P,_=T,u=W;return r(),d("div",null,[f(u,{name:"main"},{default:U(()=>[t("div",rt,[dt,t("div",mt,[t("section",_t,[pt,t("div",ht,[!e.tele.stateCheckout.isLoading&&e.tele.stateCheckout.isStatus==="success"?(r(),d("div",ut,[t("div",ft,[t("img",{src:e.tele.stateCheckout.isData.doctor.thumb,class:"object-cover",alt:""},null,8,xt)]),t("div",gt,[t("h3",yt,n(e.tele.stateCheckout.isData.doctor.name),1),t("p",bt,n(e.tele.stateCheckout.isData.doctor.speciality),1),t("h5",kt,n(e.tele.stateCheckout.isData.doctor.hospital),1),wt,t("p",vt,n(e.tele.stateCheckout.date),1)])])):x("",!0)])]),!e.tele.stateCheckout.isLoading&&e.tele.stateCheckout.isStatus==="success"&&!e.tele.stateUser.isLoading&&e.tele.stateUser.isStatus==="success"?(r(),d("section",Ct,[Dt,t("div",St,[t("div",jt,[Ft,t("h4",Mt,n(e.tele.stateUser.isData.name),1)]),t("h5",Ot,n(`${e.tele.stateUser.isData.gender==="laki-laki"?"Male":"Female"}, ${e.tele.stateCheckout.birth}`),1)]),Ut,t("div",Lt,[It,t("h6",Nt,n(e.tele.stateCheckout.date),1)]),qt,t("div",zt,[Bt,t("h4",Jt,n(e.tele.stateCheckout.isData.note),1)]),Pt,t("div",Tt,[f(g,{className:"rounded-md",type:"text",placeholder:"Promotion Code"})]),Vt,t("div",Rt,[At,t("span",Yt,n(e.idrFormat(e.tele.stateCheckout.isData.doctor.online_price.toString(),"Rp. ")),1)]),Et,t("div",Gt,[Ht,t("span",Qt,n(e.idrFormat(e.tele.stateCheckout.isData.doctor.online_price.toString(),"Rp. ")),1)]),Kt])):x("",!0)]),t("div",Wt,[t("div",Xt,[!e.tele.stateCheckout.isLoading&&e.tele.stateCheckout.isStatus==="success"?(r(),d("div",Zt,[$t,t("h5",te,n(e.idrFormat(e.tele.stateCheckout.isData.doctor.online_price.toString(),"Rp. ")),1)])):x("",!0),f(h,{class:"text-white font-poppins outline-none font-medium text-sm py-3 px-10 rounded-lg bg-primary-color",onClick:e.pay,title:"Pay now",loading:e.tele.state.payLoading},null,8,["loading"])])]),f(_,{openModal:e.openModal,"onUpdate:changeOpen":e.changeOpen,"onUpdate:changeSelect":e.changeSelect,type:"blank"},{bottomSheet:U(()=>[t("div",ee,[se,t("ul",oe,[(r(!0),d(X,null,Z(e.state.item,(m,y)=>(r(),d("li",{class:"w-full border-b border-solid border-gray-175 pb-2 flex justify-between items-center mb-4",onClick:b=>e.selectOption(m),key:y},[t("p",{class:nt("text-base leading-6 font-poppins "+(e.state.selected===m?"text-primary-color":"text-gray-350"))},n(m),3),e.state.selected===m?(r(),d("img",ne)):x("",!0)],8,ae))),128))])])]),_:1},8,["openModal"])])]),_:1})])}var pe=V(lt,[["render",ce]]);export{pe as default};
