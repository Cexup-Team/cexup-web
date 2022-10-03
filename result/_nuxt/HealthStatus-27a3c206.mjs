import{_ as d,e as p,f,H as x,d as _,i as e,g as h,t as s,V as m,U as v}from"./entry-53aace6f.mjs";const u={},y={class:"health-status mx-5 z-10 mt-6 h-44"},g=x('<div class="bg-white w-full px-3 pt-2 pb-6 rounded-lg h-full"><div class="flex flex-col"><div class="w-full flex"><div class="w-2/6 flex justify-center items-center"><div class="bg-gray-400 h-28 w-full object-cover object-center animate-pulse mb-2 rounded-full mt-2" style="width:71px;height:63px;"></div></div><div class="w-2/6 flex justify-center items-center"><div class="flex flex-col justify-center items-center"><div class="blood flex flex-col text-center"><h4 class="text-gray-350 font-poppins font-normal text-xs">Blood Preasure</h4><p class="leading-relaxed w-full h-3 animate-pulse bg-primary-color mt-1"></p></div></div></div><div class="w-2/6 flex justify-center items-center"><div class="flex flex-col justify-center items-center bgred"><div class="spo flex flex-col text-center"><h4 class="text-gray-350 font-poppins font-normal text-xs">SpO2</h4><p class="leading-relaxed w-full h-3 animate-pulse bg-primary-color mt-1"></p></div></div></div></div><div class="w-full flex"><div class="w-2/6"><div class="flex flex-col justify-center items-center"><div class="spo flex flex-col text-center"><h4 class="text-gray-350 font-poppins font-normal text-xs">Heart Rate</h4><p class="leading-relaxed w-full h-3 animate-pulse bg-primary-color mt-1"></p></div></div></div><div class="w-2/6"><div class="flex flex-col justify-center items-center"><div class="spo flex flex-col text-center"><h4 class="text-gray-350 font-poppins font-normal text-xs">Temparature</h4><p class="leading-relaxed w-full h-3 animate-pulse bg-primary-color mt-1"></p></div></div></div><div class="w-2/6"><div class="flex flex-col justify-center items-center"><div class="spo flex flex-col text-center"><h4 class="text-gray-350 font-poppins font-normal text-xs">Respiration</h4><p class="leading-relaxed w-full h-3 animate-pulse bg-primary-color mt-1"></p></div></div></div></div></div></div>',1),b=[g];function w(l,i){return p(),f("div",y,b)}var se=d(u,[["render",w]]);const j=_({props:{vital:{type:Object},ews:{type:Object},role:{type:String},tk:{type:String}},setup(l,{expose:i}){var n;i();const o=l,t=()=>{v().push(o.role==="doctor"?"/doctor/detail?tk="+o.tk:"/profile/medical/detail")},a=[70],c={chart:{height:140,type:"radialBar"},plotOptions:{radialBar:{hollow:{size:"55%",margin:5},dataLabels:{name:{show:!0,color:"#000000",fontSize:"12px",fontFamily:"Poppins, sans-serif",fontWeight:"normal"},value:{show:!1}}}},labels:[(n=o.ews)==null?void 0:n.result],fill:{type:"gradient",gradient:{shade:["#77DAFA","#00C1FF"],type:"horizontal",opacityFrom:.7,opacityTo:.7,stops:[0,100],colorStops:[]}}},r={props:o,detailHealth:t,series:a,chartOptions:c,VueApexCharts:m};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),S={class:"health-status mx-5 z-10 mt-6"},O={class:"flex flex-col"},B={class:"w-full flex"},H={class:"w-2/6 flex justify-center items-center"},V={class:"w-2/6 flex justify-center items-center"},k={class:"flex flex-col justify-center items-center"},C={class:"blood flex flex-col text-center"},P=e("h4",{class:"text-gray-350 font-poppins font-normal text-xs"},"Blood Preasure",-1),R={class:"text-primary-color font-poppins font-medium text-base"},z={class:"w-2/6 flex justify-center items-center"},F={class:"flex flex-col justify-center items-center bgred"},A={class:"spo flex flex-col text-center"},N=e("h4",{class:"text-gray-350 font-poppins font-normal text-xs"},"SpO2",-1),T={class:"text-primary-color font-poppins font-medium text-base"},D={class:"w-full flex"},E={class:"w-2/6"},L={class:"flex flex-col justify-center items-center"},U={class:"spo flex flex-col text-center"},W=e("h4",{class:"text-gray-350 font-poppins font-normal text-xs"},"Heart Rate",-1),q={class:"text-primary-color font-poppins font-medium text-base"},G={class:"w-2/6"},I={class:"flex flex-col justify-center items-center"},J={class:"spo flex flex-col text-center"},K=e("h4",{class:"text-gray-350 font-poppins font-normal text-xs"},"Temparature",-1),M={class:"text-primary-color font-poppins font-medium text-base"},Q={class:"w-2/6"},X={class:"flex flex-col justify-center items-center"},Y={class:"spo flex flex-col text-center"},Z=e("h4",{class:"text-gray-350 font-poppins font-normal text-xs"},"Respiration",-1),$={class:"text-primary-color font-poppins font-medium text-base"};function ee(l,i,o,t,a,c){return p(),f("div",S,[e("div",{class:"bg-white w-full px-3 pt-2 pb-6 rounded-lg cursor-pointer",onClick:t.detailHealth},[e("div",O,[e("div",B,[e("div",H,[h(t.VueApexCharts,{type:"radialBar",class:"",height:"140",options:t.chartOptions,series:[t.series]},null,8,["series"])]),e("div",V,[e("div",k,[e("div",C,[P,e("p",R,s(t.props.vital.bloodPressure.systole)+"/"+s(t.props.vital.bloodPressure.diastole)+" mhg",1)])])]),e("div",z,[e("div",F,[e("div",A,[N,e("p",T,s(t.props.vital.bloodOxygen)+"%",1)])])])]),e("div",D,[e("div",E,[e("div",L,[e("div",U,[W,e("p",q,s(t.props.vital.heartRate)+" bpm",1)])])]),e("div",G,[e("div",I,[e("div",J,[K,e("p",M,s(t.props.vital.temperature)+" C",1)])])]),e("div",Q,[e("div",X,[e("div",Y,[Z,e("p",$,s(t.props.vital.respiration)+"%",1)])])])])])])])}var oe=d(j,[["render",ee]]);export{oe as H,se as _};