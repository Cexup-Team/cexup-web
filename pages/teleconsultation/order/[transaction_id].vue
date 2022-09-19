<script setup lang="ts">
    import { Ref } from "vue"
    import { useRouter, useRoute } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useOrderStore } from '~~/stores/order-store';
    import { useUserStore } from '~~/stores/user-store';
    import {getDateFormatBooking} from '~~/utils/getFormatDate'
    import {getStatus} from '~~/utils/statusOrder'
    import { useTeleDoctorStore } from '~~/stores/tele-doctor-store';
    import { aesDecrypt } from "~~/utils/crypto";
    import { idrFormat } from "~~/utils/currencyFormat";


    const $toast = useToast()
    const router = useRouter()
    const route = useRoute()
    const session = useSession()
    const listMap = new Map()
    
    const cardTime = ref(null);
    const cardSelectTime = ref(null)

    const order = useOrderStore()
    const tele = useTeleDoctorStore()
    
    const now = new Date();
    const day =  now.getDate()

    let openModal: Ref<boolean> = ref(false)
        
    let modalRe: Ref<boolean> = ref(false)

        
    let typingTimer;
    let doneTypingInterval = 2000;

    const state = reactive({
        isLoading: false,
        isStatus: 'idle',
        isError : false,
        isData : null,
    })



        // =====


    const changeOpen = (value) => {
        openModal.value = value
    }


    const changeSelect = (value) => {
        // state.gender = value
        console.log(value)
    }

    const slcValue = (value) => {
        openModal.value = true
    }

        const setIsSheetShow = (value) => {

        // console.log(!value)
        const $ = document.querySelector.bind(document)
        const sheet = $("#sheet")
        sheet.setAttribute("aria-hidden", String(!value))
    }

    const setOverlay = () => {
      setIsSheetShow(false)
      changeOpen(false)
    }

    const selectOption = (e) => {
        // changeSelect(`${e}||${e}`)
        state.selected = e
        setOverlay()
    }


        // ===============

    const closeModalRe = () => {
        modalRe.value = !modalRe.value
    }

    const actionStatus = async (status) => {
        if(status === 'waiting_payment') return window.open(order.stateShow.isData.payment_url, '_blank') 
        if(status === 'reschedule_from_doctor') return  modalRe.value = !modalRe.value
        if(status === 'on_air') return router.push('/meet')
        if(status === 'join_now') {
            order.joinRoom({'transaction_id' : order.stateShow.isData.transaction_id, 'type': 'patient'})
                .then(async res => {
                    const user = await JSON.parse(aesDecrypt(session.getItem('cexup-user')))
                    const meet = {
                        'id' : order.stateShow.isData.transaction_id,
                        'name': order.stateShow.isData.patient_account.name,
                        'email' : user.email
                    }
                    await session.setItem('cexup-meet' , JSON.stringify(meet))
                    router.push('/meet')
                }).catch(err => {
                    console.log(err)
                    $toast.show({
                        type: 'danger',
                        message: 'Something went wrong',
                        timeout: 4,
                    })
                })
            
        }
         
    }


    onMounted(async () => {
        tele.state.allDay = tele.getAllDaysInMonth(now.getFullYear(), now.getMonth()).slice(day-1, day+30);
        await order.showOrder(route.params.transaction_id)
        await tele.getDoctorTele(order.stateShow.isData.doctor_account.slug)
        order.stateShow.isData.status === 'reschedule_from_doctor' ? modalRe.value = true : null
    })

    
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

    const submitRe = () => {
        try {
            const json = {
                transaction_id: order.stateShow.isData.transaction_id,
                type: "reschedule_patient",
                date: tele.stateSlcDate.slc,
                time: tele.stateTime.isData[tele.stateTime.slcTime].time
            }

            order.reschedule(json)
                .then(res => router.go(0))
                .catch(err =>     
                    $toast.show({
                        type: 'danger',
                        message: err.message,
                        timeout: 4,
                    })
                )   
        } catch (error) {
            $toast.show({
                type: 'danger',
                message: 'Please choose time',
                timeout: 4,
            })
        }
    }

    const accept = () => {
        const json = {
            transaction_id: order.stateShow.isData.transaction_id,
            type: "accept"
        }
        order.reschedule(json)
                .then(res => router.go(0))
                .catch(err =>     
                    $toast.show({
                        type: 'danger',
                        message: err.message,
                        timeout: 4,
                    })
                )   
    }

</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="detail-order-wrapper relative">
                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">  
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="../../../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Detail Order</h1>
                        <div></div>
                    </div>
                </div>


                <div class="pt-20 px-4" v-if="!order.stateShow.isLoading && order.stateShow.isStatus === 'success'">
                    <section class="">
                        <h2 class="font-poppins font-semibold text-sm">Doctor Information</h2>
                        <div class="card-register-doctor bg-white rounded-xl mt-3">
                            <div class="flex items-start p-4">
                                <div class="w-20 h-20 rounded-full overflow-hidden mr-5">
                                    <img :src="order.stateShow.isData.doctor_account.thumb" class="object-cover" alt="">
                                </div>
                                <div class="flex flex-col">
                                    <h3 class="font-poppins font-medium text-base">{{order.stateShow.isData.doctor_account.name}}</h3>
                                    <p class="font-poppins text-xs text-gray-350">{{order.stateShow.isData.doctor_account.speciality}}</p>
                                    <h5 class="font-poppins text-xs text-gray-350 mt-2">{{order.stateShow.isData.hospital}}</h5>

                                    <div class="flex items-center mt-1">
                                        <img src="../../../assets/images/bag_icon.svg" class="w-3 h-3 mr-2" alt="">
                                        <span class="text-xs font-poppins">5 Years</span>
                                    </div>
                                    <p class="font-poppins text-xs mt-3">{{getDateFormatBooking(order.stateShow.isData.date)}}</p>
                                  
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 class="font-poppins font-semibold text-sm mt-5">Order Information</h2>
                        <div class="flex items-center mt-4 w-full">
                            <img src="../../../assets/images/transaction_id_icon.svg" class="w-9 h-9 mr-3" alt="">
                            <div class="flex flex-col w-full">
                                <h4 class="font-poppins text-xs text-gray-350">Order ID</h4>
                                <div class="flex justify-between items-center">
                                    <h5 class="font-poppins text-sm font-medium text-primary-color mt-1">{{order.stateShow.isData.transaction_id}}</h5>
                                    <img src="../../../assets/images/copy_icon.svg" class="w-3 h-4 mr-4" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center mt-3 w-full">
                            <img src="../../../assets/images/waiting_icon.svg" class="w-9 h-9 mr-3" alt="">
                            <div class="flex flex-col w-full">
                                <h4 class="font-poppins text-xs text-gray-350">Status Order</h4>
                                <h5 class="font-poppins text-sm font-medium text-primary-color mt-1">{{getStatus(order.stateShow.isData.status)}}</h5>
                            </div>
                        </div>

                        <div class="flex items-center mt-3 w-full">
                            <img src="../../../assets/images/waiting_icon.svg" class="w-9 h-9 mr-3" alt="">
                            <div class="flex flex-col w-full">
                                <h4 class="font-poppins text-xs text-gray-350">Due Date</h4>
                                <h5 class="font-poppins text-sm font-medium text-primary-color mt-1">{{getDateFormatBooking(order.stateShow.isData.date, order.stateShow.isData.estimate)}}</h5>
                            </div>
                        </div>

                    </section>
                    <section>
                        <h2 class="font-poppins font-semibold text-sm mt-5">Patient Details</h2>
                        <div class="card-patient-detail rounded-xl px-5 py-4 mt-4">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center w-2/4">
                                    <div class="w-12 h-12 overflow-hidden rounded-full mr-4">
                                        <img :src="order.stateShow.isData.patient_account.thumb" class="object-cover" alt="">
                                    </div>
                                    <div class="flex flex-col">
                                        <h4 class="font-poppins font-medium text-sm">{{order.stateShow.isData.patient_account.name}}</h4>
                                        <span class="font-poppins text-xs text-gray-350">{{new Date(new Date() - new Date(order.stateShow.isData.patient_account.date_of_birth)).getFullYear() - 1970}}, {{order.stateShow.isData.gender === 'laki-laki' ? 'Male' : 'Female'}}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <h4 class="font-poppins text-gray-350" style="font-size: 10px">Simptons</h4>
                                    <h5 class="text-primary-color font-medium text-sm mt-2">{{order.stateShow.isData.note}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="subjective">
                            <h2 class="font-poppins font-semibold text-sm mt-5">Subjective</h2>
                            <textarea name="" id="" class="border-2 rounded-lg h-20 p-3 mt-4 outline-none border-gray-150 w-full text-xs font-poppins overflow-scroll no-scrollbar" v-model="order.stateShow.isData.subjective" readonly></textarea>
                        </div>
                        <div class="objective">
                            <h2 class="font-poppins font-semibold text-sm mt-5">Objective</h2>
                            <textarea name="" id="" class="border-2 rounded-lg h-20 p-3 mt-4 outline-none border-gray-150 w-full text-xs font-poppins overflow-scroll no-scrollbar" v-model="order.stateShow.isData.objective" readonly></textarea>
                        </div>
                        <div class="assesment">
                            <h2 class="font-poppins font-semibold text-sm mt-5">Assesment</h2>
                            <div name="" id="" class="border-2 rounded-lg h-20 p-3 mt-4 outline-none border-gray-150 w-full text-xs font-poppins overflow-scroll no-scrollbar">
                                <div v-for="(item, index) in order.stateShow.isData.assesment" :key="index">
                                    <p class="font-poppins text-xs mt-1">{{`${index+=1}. ${item.name}`}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="planning">
                            <h2 class="font-poppins font-semibold text-sm mt-5">Planning</h2>
                            <textarea name="" id="" class="border-2 rounded-lg h-20 p-3 mt-4 outline-none border-gray-150 w-full text-xs font-poppins overflow-scroll no-scrollbar" v-model="order.stateShow.isData.planing.planing" readonly></textarea>
                        </div>
                        
                        <div class="planning">
                            <h2 class="font-poppins font-semibold text-sm mt-5">Non Medical Mentosa</h2>
                            <textarea name="" id="" class="border-2 rounded-lg h-20 p-3 mt-4 outline-none border-gray-150 w-full text-xs font-poppins overflow-scroll no-scrollbar" v-model="order.stateShow.isData.planing.non_medical_mentosa" readonly></textarea>
                        </div>
                        
                        <div class="planning">
                            <h2 class="font-poppins font-semibold text-sm mt-5">Procedure</h2>
                            <textarea name="" id="" class="border-2 rounded-lg h-20 p-3 mt-4 outline-none border-gray-150 w-full text-xs font-poppins overflow-scroll no-scrollbar" v-model="order.stateShow.isData.planing.procedure" readonly></textarea>
                        </div>
                    </section>
                    <section>
                        <h2 class="font-poppins font-medium text-base mt-6">Payment Detail</h2>
                        <div class="flex justify-between items-center mt-4"> 
                            <h5 class="font-poppins text-sm">Consultation</h5>
                            <span class="font-poppins text-sm">{{idrFormat(order.stateShow.isData.price.toString(), "Rp ")}}</span>
                        </div>
                        <div class="flex justify-between items-center mt-2"> 
                            <h5 class="font-poppins text-sm">Aditional Discount</h5>
                            <span class="font-poppins text-sm">-</span>
                        </div>
                        <div class="flex justify-between items-center mt-2"> 
                            <h5 class="font-poppins text-sm font-semibold">Total</h5>
                            <span class="font-poppins text-sm font-semibold">{{idrFormat(order.stateShow.isData.price.toString(), "Rp ")}}</span>
                        </div>
                    </section>
                </div>

                <div class="floating-pay-now fixed bg-white w-full z-30 bottom-0 p-6">
                    <div class="flex flex-col justify-between items-center">
            
                        
                        <div class="w-full">
                            <Button @click="actionStatus(order.stateShow.isData.status)" :class="'text-white w-full font-poppins outline-none font-medium text-sm py-3 px-10 rounded-lg text-center '+(order.stateShow.isData.status === 'waiting_payment' || order.stateShow.isData.status === 'reschedule_from_doctor' || order.stateShow.isData.status === 'join_now' || order.stateShow.isData.status === 'on_air'  ? 'bg-primary-color' : 'bg-gray-550')" v-if="!order.stateShow.isLoading && order.stateShow.isStatus === 'success'" :title="
                                 order.stateShow.isData.status === 'waiting_payment' ? 'Pay Now' : 
                                    order.stateShow.isData.status === 'waiting_meeting' ? 'Waiting Meeting' : 
                                    order.stateShow.isData.status === 'reschedule_from_doctor' ? 'Reschedule By Doctor' : 
                                    order.stateShow.isData.status === 'reschedule_from_patient' ? 'Reschedule By Patient' :
                                    order.stateShow.isData.status === 'waiting_doctor_join' ? 'Waiting Doctor Join' :
                                    order.stateShow.isData.status === 'missed_meeting' ? 'Missed Meeting' :
                                    order.stateShow.isData.status === 'on_air' ? 'Meet' :
                                    order.stateShow.isData.status === 'on_air' ? 'On Air' :
                                    order.stateShow.isData.status === 'done' ? 'Finish' :
                                    order.stateShow.isData.status === 'join_now' ? 'Start Meeting' : ''
                            " :loading="order.state.isLoadingRe" />
                        </div>
                        <nuxt-link to="/teleconsultation/order/PSD-00348DNJDHS88" class="w-full mb-3 mt-5">
                            <button class="text-red-650 w-full font-poppins outline-none font-medium text-sm px-10 rounded-lg bg-white">Cancel</button>
                        </nuxt-link>

                    
                    </div>
                </div>
                <div class="pt-52"></div>

                <!-- ====== Modal reschedule ==== -->
                <div id="modal" class="fixed z-30 inset-0" v-if="modalRe === true && order.stateShow.isData.status === 'reschedule_from_doctor'">
                    <div class="z-50 absolute inset-0 flex justify-center items-center px-8">
                        <div class="absolute z-40 bg-black opacity-20 inset-0" @click="closeModalRe"></div>
                        <div class="bg-white w-full p-4 flex justify-center items-center flex-col rounded-xl z-50">
                            <div class="w-28 h-28">
                                <img src="@/assets/images/reschedule-icon.svg" class="w-full h-full" alt="">
                            </div>
                            <p class="font-poppins text-sm text-gray-350">Doctor wants to reschedule to</p>
                            <p class="font-poppins text-base mt-1 font-semibold">{{getDateFormatBooking(order.stateShow.isData.date, order.stateShow.isData.estimate)}}</p>
                            <div class="w-full flex justify-between items-center">
                                <button class="font-poppins outline-none font-medium text-sm py-2 px-3 rounded-lg border border-gray-550 mt-3" @click="slcValue">Choose the time</button>
                                <button class="font-poppins text-white outline-none font-medium text-sm py-2 px-3 rounded-lg bg-primary-color" @click="accept">Yes, reschedule</button>
                            </div>
                        </div>
                    </div>
                </div>
                <BottomSheet :openModal="openModal" @update:change-open="changeOpen" @update:change-select="changeSelect" type="blank" v-if="modalRe === true">
                    <template v-slot:bottomSheet>
                        <div class="">
                            <div class="w-full justify-between items-center">
                                <h3 class="font-poppins text-sm font-semibold">Schedule</h3>

                                <CardTeleconsultationSelectDate :allDay="tele.state.allDay" @update:selectDate="tele.getTime" />

                                <h3 class="font-poppins text-sm font-semibold mt-4">Select Time</h3>
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
                                </div>
                                <Button class="font-poppins text-white outline-none text-base py-3 rounded-lg bg-primary-color mt-4 w-full text-center font-semibold" @click="submitRe" title="Submit" :loading="order.state.isLoadingRe"  />
                            </div>
                        </div>
                    </template>
                </BottomSheet>
            </div>
        </nuxt-layout>
    </div>
</template>


<style>
    .card-patient-detail {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }

    .floating-pay-now {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
        border-radius: 12px 12px 0px 0px;
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

    @media only screen and (min-width: 700px) {
         #modal {
            top: 0;
            left: 50%; 
            margin-left: -255px;
            width: 510px;   

        }
    }
</style>