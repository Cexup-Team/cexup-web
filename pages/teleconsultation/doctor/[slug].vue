<script setup lang="ts">

    import { ref } from "vue"
    import { useRouter,useRoute } from 'vue-router';
    import { useToast, useModal } from 'tailvue'
    import { useTeleDoctorStore } from '~~/stores/tele-doctor-store';
    import { useUserStore } from '~~/stores/user-store';
    import { selectSafeZero } from "../../../utils/getFormatDate";
    import NavBar from "~~/parts/NavBar.vue";
    import {idrFormat} from '../../../utils/currencyFormat'

    const $toast = useToast()
    const router = useRouter()
    const route = useRoute()
    const tele = useTeleDoctorStore()
    const session = useSession()

    const now = new Date();
    const day =  now.getDate()

    const cardTime = ref(null);
    const cardSelectTime = ref(null)

    const next = () => {
        router.push(tele.next().router)
    }   

    watch(() => tele.stateTime.isData, (newCardItem) => {
        tele.stateTime.slcTime = null
        setTimeout(() => {
            let tabTime = document.getElementsByClassName("card-select-time")[0]
            let tabPaneTime = document.getElementsByClassName("card-select-time-item")
            for (let i = 0; i < tabPaneTime.length; i++) {
                tabPaneTime[i].addEventListener("click", function(e) {
                    tele.stateTime.slcTime = e.target.getAttribute('slcTime')
                    tabTime.getElementsByClassName("active")[0]?.classList.remove("active")
                    tabPaneTime[i].classList.add("active")
                })
            }
            
        }, 500);
    })

    onMounted( async () => {
        const params = router.currentRoute.value.params.slug
        tele.state.back = history.state.back
        // typeof session.getItem("cexup-checkout") === 'string' ? router.push('/')  :''
        const checkout = await JSON.parse(session.getItem("cexup-checkout"))
        tele.state.note = checkout ? checkout.note : ''
        tele.getDoctorTele(params)
        tele.state.allDay = tele.getAllDaysInMonth(now.getFullYear(), now.getMonth()).slice(day-1, day+30);
    })


</script>
<template>
  <div>
    <nuxt-layout name="main">
        <div class="choose-schedule-wrapper relative" v-if="!tele.state.isLoading && tele.state.isStatus === 'success'">
            <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                
                <div class="flex justify-between mt-6 mx-6 items-center">
                    <img src="../../../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                    <h1 class="font-poppins text-xl font-semibold"></h1>
                    <div></div>
                </div>
            </div>
            <NavBar title="Choose Schedule" :link="tele.state.back" />
            <div class="mt-20">
                <section class="choose-schedule-header px-5 relative">                   
                    <div class="relative">
                        <div class="w-full flex items-center">
                            <div class="w-fit items-center flex">
                                <div class="w-24 h-24 rounded-full overflow-hidden">
                                    <img :src="tele.state.isData.thumb" class="object-cover w-full h-full" alt="">
                                </div>
                            </div>
                            <div class="flex flex-col ml-4">
                                <h2 class="font-poppins font-semibold text-lg">{{tele.state.isData.name}}</h2>
                                <h4 class="font-poppins text-gray-350 text-xs">{{tele.state.isData.speciality}}</h4>

                                <div class="flex items-center mt-4">
                                    <div class="flex items-center bg-primary-color px-2 py-1 rounded-md mr-3">
                                        <img src="../../../assets/images/bag_icon_fill.svg" class="w-3 h-3 mr-2" alt="">
                                        <span class="text-xs font-light text-white font-poppins">5 Years</span>
                                    </div>
                                    <img src="../../../assets/images/icon_pin.svg" class="w-4 h-5" alt="">
                                </div>
                            </div>
                        </div>
                        <p class="font-poppins text-xs text-gray-350 mt-4">Doctor of Medicine or Doctor of University Indonesia from an best accredited school in Indonesia</p>
                        <div class="w-full flex items-center mt-6">
                            <div class="bg-blue-150 w-auto flex items-center px-2 py-2 rounded-lg mr-3">
                                <img src="../../../assets/images/shield_icon.svg" class="w-3 mr-2" alt="">
                                <span class="text-xs font-poppins">STR-31.1.1.100.1.20.206361</span>
                            </div>
                            <div class="bg-blue-150 w-auto flex items-center px-2 py-2 rounded-lg">
                                <img src="../../../assets/images/place_icon_red.svg" class="w-3 mr-2" alt="">
                                <span class="text-xs font-poppins whitespace-nowrap">{{tele.state.isData.hospital[0].name}}</span>
                            </div>
                        </div>
                    </div> 
                </section>
                <section class="bg-blue-150 px-5 py-2 mt-4 choose-schedule-body">
                    <div class="flex justify-between items-center">
                        <div class="">
                            <h4 class="font-medium font-poppins text-lg">{{idrFormat(tele.state.isData.hospital[0].online_price.toString(), "Rp. ") }}</h4>
                            <!-- <span class="text-gray-350 font-poppins font-medium text-xs discount relative">{{tele.state.isData.hospital[0].offline_price === 0 ? '' : tele.state.isData.hospital[0].offline_price}}</span> -->
                        </div>
                        
                        <div class="px-3 py-2 rounded-md border-dashed border-teal-750 border-2">
                            <div class="flex items-center">
                                <img src="../../../assets/images/discount_call_icon.svg" class="w-5 mr-2" alt="">
                                <span class="text-teal-750 font-poppins font-medium text-sm">DISKONCALL</span>
                            </div>
                        </div>

                    </div>
                </section>
                <section class="mt-6">
                    <div class="chest-pain px-5">
                        <h2 class="text-base font-poppins font-semibold">My Simptons</h2>
                        <input v-model="tele.state.note" type="text" class="mt-4 p-4 text-sm w-full rounded-md font-poppins border border-gray-150 text-gray-900 outline-none placeholder:text-gray-350" placeholder="Chest pain">
                    </div>
                    <div class="avaibility-schedule">
                        <div class="flex justify-between mt-4 items-center px-5">
                            <h2 class="text-base font-poppins font-semibold">Avaibility</h2>
                            <span class="text-sm font-poppins"> Febuari</span>
                        </div>
                        

                        <CardTeleconsultationSelectDate :allDay="tele.state.allDay" @update:selectDate="tele.getTime" />
                        
                        <div class="mt-4 px-5">
                            <h2 class="text-base font-poppins font-semibold">Select Time</h2>
                        </div>
                        <div class="select-time mt-4">

                            <div v-if="tele.stateTime.isLoading" class="w-full px-4 grid grid-cols-3 gap-4">
                                <p class="leading-relaxed h-9 animate-pulse bg-gray-400 rounded-xl"></p>
                                <p class="leading-relaxed h-9 animate-pulse bg-gray-400 rounded-xl"></p>
                                <p class="leading-relaxed h-9 animate-pulse bg-gray-400 rounded-xl"></p>
                            </div>

                            <div class="card-select-time px-4" ref="cardTime">
                                <div v-if="!tele.stateTime.isLoading && tele.stateTime.isStatus === 'success'" class="grid grid-cols-3 gap-4 w-full">
                                    <div v-for="(item, index) in tele.stateTime.isData" :key="index">
                                        <div ref="cardSelectTime" :slcTime="index" class="px-5 py-2 text-center border border-primary-color rounded-xl w-full card-select-time-item cursor-pointer outline-none transition-all duration-300 ease-in-out overflow-hidden">
                                            <h4 class="font-poppins text-sm whitespace-nowrap" :slcTime="index">{{item.time}}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="px-4">
                                <div v-if="!tele.stateTime.isLoading && tele.stateTime.isStatus === 'success' && tele.stateTime.isData.length === 0" class="w-full">    
                                    <div ref="cardSelectTime" class="px-5 py-2 text-center rounded-xl w-full card-select-time-item bg-gray-550 cursor-pointer outline-none transition-all duration-300 ease-in-out overflow-hidden">
                                        <h4 class="font-poppins text-sm whitespace-nowrap">No Schedule</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="mt-6 px-4 mb-10">
                            <Button :className="'w-full text-center text-white font-poppins py-3 rounded-lg font-medium text-base '+(tele.stateTime.slcTime && tele.state.note ? 'bg-primary-color' : 'bg-gray-550')" title="Next" @click="next" />
                        </div>
                    </div>
                </section>
            </div>
    


        </div>
    </nuxt-layout>
  </div>
</template>


<style>
    .choose-schedule-body .discount::after {
        content: '';
        width: 100%;
        height: 1.2px;
        background: #8A8A8E;
        position: absolute;
        left: 0;
        right: 0;
        top: 45%;
    }

    .card-select-date .card-select-date-item.active {
        background-color: #008CA3;
        box-shadow: 11px 8px 20px rgba(0, 140, 163, 0.2);
    }
    .card-select-date .card-select-date-item.active span {
        color: #FFF;
    }

    .card-select-date .card-select-date-item.active h5 {
        color: #FFF;
    }


    .card-select-time .card-select-time-item.active {
        background-color: #008CA3;
    }

    .card-select-time .card-select-time-item.active h4 {
        color: #FFF;
    }
</style>