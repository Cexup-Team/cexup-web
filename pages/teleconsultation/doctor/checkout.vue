<script setup lang="ts">
    
    import { ref } from "vue"
    import { useRouter } from 'vue-router';
    import { useToast, useModal } from 'tailvue'
    import { useTeleRegisterStore } from '~~/stores/tele-register-store';
    import { nameDay, nameMonth } from "../../../utils/getFormatDate";
    import Datepicker from '@vuepic/vue-datepicker'
    import '@vuepic/vue-datepicker/dist/main.css'
    import {idrFormat} from '../../../utils/currencyFormat'

    
    const $toast = useToast()
    const router = useRouter()
    const tele = useTeleRegisterStore()
    const session = useSession()

    // const state = reactive({
    //     now : new Date()
    // })

    let now: Ref<String> = ref(new Date())
    
    const state = reactive({
        item : ["Doku"],
        selected : null
    })

    let openModal: Ref<boolean> = ref(false)

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


    const getCheckout = async () => {
        
        tele.stateCheckout.isLoading = true
        const checkout = await JSON.parse(session.getItem("cexup-checkout"))
        tele.stateCheckout.isData = checkout
        tele.stateCheckout.date = getDateFormat(tele.stateCheckout.isData.date)
        tele.stateCheckout.isLoading = false
        tele.stateCheckout.isStatus = 'success'
    }

    const getUser = async () => {
        
        tele.stateUser.isLoading = true
        const user = await JSON.parse(session.getItem("cexup-user"))
        tele.stateCheckout.birth = getDateFormatBirth(user.date_of_birth)
        tele.stateUser.isData = user
        tele.stateUser.isLoading = false
        tele.stateUser.isStatus = 'success'
    }

    const getDateFormat = (value) => {
        const newDate = new Date(value)
        const day = nameDay(value)
        const date = newDate.getDate()
        const month = nameMonth(newDate.getMonth())
        const year = newDate.getFullYear()

        const format = `${day}, ${date} ${month} ${year} ${tele.stateCheckout.isData.time}`
        return format
    }

    const getDateFormatBirth = (value) => {
        const newDate = new Date(value)
        const day = nameDay(value)
        const date = newDate.getDate()
        const month = nameMonth(newDate.getMonth())
        const year = newDate.getFullYear()

        const format = `${date} ${month} ${year}`
        return format
    }

    const pay = () => {
        const sessioData = JSON.parse(session.getItem('cexup-checkout'))
        const sessionQuiz = JSON.parse(session.getItem('cexup-quiz'))
        const quiz = []
        sessionQuiz.map((item, index) => {
            quiz.push({
                'slug' : item.slug,
                'name' : item.name,
                'questionnaire' : item.questionnaire
            })
        })
        const data = {
            "id" : sessioData.id,
            "time" : sessioData.time,
            "date" : sessioData.date,
            "type" : sessioData.type,
            "note" : sessioData.note,
            "allow_access_data" : true,
            "data_questionnaire" : quiz
        }

        tele.booking(data).then( res =>
            router.push(res.route)
        ).catch( err =>
            router.push(err.route)
        )
        
    }

    onMounted( async () => {
        await getCheckout()
        await getUser()
    })
    
</script>
<template>
    <div>
        <nuxt-layout name="main"> 
            <div class="checkout-wrapper relative">
                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="../../../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Checkout</h1>
                        <div></div>
                    </div>
                </div>
                

                <div class="mt-20 px-4">
                    <section class="">
                        <h2 class="font-poppins font-semibold text-sm">Doctor Information</h2>
                        <div class="card-register-doctor bg-white rounded-xl mt-3">
                            <div class="flex items-start p-4" v-if="!tele.stateCheckout.isLoading && tele.stateCheckout.isStatus === 'success'">
                                <div class="w-20 h-20 rounded-full overflow-hidden mr-5">
                                    <img :src="tele.stateCheckout.isData.doctor.thumb" class="object-cover" alt="">
                                </div>
                                <div class="flex flex-col">
                                    <h3 class="font-poppins font-medium text-base">{{tele.stateCheckout.isData.doctor.name}}</h3>
                                    <p class="font-poppins text-xs text-gray-350">{{tele.stateCheckout.isData.doctor.speciality}}</p>
                                    <h5 class="font-poppins text-xs text-gray-350 mt-2">{{tele.stateCheckout.isData.doctor.hospital}}</h5>

                                    <div class="flex items-center mt-1">
                                        <img src="../../../assets/images/bag_icon.svg" class="w-3 h-3 mr-2" alt="">
                                        <span class="text-xs font-poppins">5 Years</span>
                                    </div>
                                    <p class="font-poppins text-xs mt-3">{{tele.stateCheckout.date}}</p>
                                  
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="mt-8" v-if="!tele.stateCheckout.isLoading && tele.stateCheckout.isStatus === 'success' && !tele.stateUser.isLoading &&  tele.stateUser.isStatus === 'success'">
                        <h2 class="font-poppins font-medium text-base mb-4">Detail Patient</h2>
                        <div class="flex justify-between items-center mt-4">
                            <div class="flex justify-start items-center">
                                <img src="../../../assets/images/user_checkout_icon.svg" class="mr-3" alt="">
                                <h4 class="font-poppins text-sm font-medium">{{tele.stateUser.isData.name}}</h4>
                            </div>
                            <h5 class="font-poppins text-xs">{{`${tele.stateUser.isData.gender === 'laki-laki' ? 'Male' : 'Female'}, ${tele.stateCheckout.birth}`}}</h5>
                        </div>
                        <div class="flex justify-between items-center mt-5">
                            <h4 class="font-poppins font-medium text-base">Date</h4>
                            <!-- <h5 class="text-primary-color font-poppins font-medium text-xs">Change</h5> -->
                        </div>
                        <div class="flex justify-start items-center mt-2">
                            <img src="../../../assets/images/date_checkout_icon.svg" class="w-9 h-9 mr-4" alt="">
                            <h6 class="font-poppins font-medium text-sm text-indigo-850">{{tele.stateCheckout.date}}</h6>
                        </div>
                        <div class="flex justify-between items-center mt-5">
                            <h4 class="font-poppins font-medium text-base">My Simptons</h4>
                            <!-- <h5 class="text-primary-color font-poppins font-medium text-xs">Change</h5> -->
                        </div>
                        <div class="flex justify-start items-center mt-2">
                            <img src="../../../assets/images/pain_checkout_icon.svg" class="w-9 h-9 mr-4" alt="">
                            <h4 class="text-indigo-850 font-poppins font-medium text-sm">{{tele.stateCheckout.isData.note}}</h4>
                        </div>
                        <h4 class="font-poppins font-medium text-base mt-5">Voucher</h4>
                        <div class="inputForm mt-4">
                            <InputText className="rounded-md" type="text" placeholder="Promotion Code" />
                        </div>
                        <!-- <h4 class="font-poppins font-medium text-base mt-5 text-indigo-850">Payment Method</h4>
                        <div class="select-payment flex justify-between items-center mt-4 p-4 rounded-xl" @click="slcValue">
                            <h5 class="font-poppins font-medium text-sm text-primary-color" v-if="!state.selected">Select your payment method</h5>
                            <h5 class="font-poppins font-medium text-sm text-primary-color" v-if="state.selected">{{state.selected}}</h5>
                            <img src="../../../assets/images/arrow_right_blue.svg" alt="">
                        </div> -->
                        <h4 class="font-poppins font-semibold text-base mt-5 text-indigo-850">Payment Detail</h4>
                        <div class="flex justify-between items-center mt-4"> 
                            <h5 class="font-poppins text-sm">Consultation</h5>
                            <span class="font-poppins text-sm">{{idrFormat(tele.stateCheckout.isData.doctor.online_price.toString(), "Rp. ")}}</span>
                        </div>
                        <div class="flex justify-between items-center mt-2"> 
                            <h5 class="font-poppins text-sm">Aditional Discount</h5>
                            <span class="font-poppins text-sm">-</span>
                        </div>
                        <div class="flex justify-between items-center mt-2"> 
                            <h5 class="font-poppins text-sm font-semibold">Total</h5>
                            <span class="font-poppins text-sm font-semibold">{{idrFormat(tele.stateCheckout.isData.doctor.online_price.toString(), "Rp. ")}}</span>
                        </div>
                    
                        <div class="mb-40">
                        </div>
                    </section>
                 </div>

                 <div class="floating-pay-now fixed bg-white w-full z-30 bottom-0 p-6">
                    <div class="flex justify-between items-center">
                        <div class="flex flex-col" v-if="!tele.stateCheckout.isLoading && tele.stateCheckout.isStatus === 'success'">
                            <h3 class="font-poppins text-xs font-medium">Total:</h3>
                            <h5 class="text-primary-color font-semibold font-poppins">{{idrFormat(tele.stateCheckout.isData.doctor.online_price.toString(), "Rp. ")}}</h5>
                        </div>
                       
                        <button :class="'text-white font-poppins outline-none font-medium text-sm py-3 px-10 rounded-lg bg-primary-color'" @click="pay">Pay now</button>
                    </div>
                 </div>

                <BottomSheet :openModal="openModal" @update:change-open="changeOpen" @update:change-select="changeSelect" type="blank">
                    <template v-slot:bottomSheet>
                        <div class="">
                            <div class="flex flex-col justify-center w-full items-center">
                                <img src="../../../assets/images/money_icon.svg" class="w-20 h-20" alt="">
                                <h2 class="text-primary-color font-poppins font-semibold text-base mt-6">Select Payment Method</h2>
                                <p class="text-gray-350 text-center font-poppins mt-3 font-medium text-sm">Choose payment method on your <br> demand</p>
                            </div>
                            <ul class="w-full h-full overflow-y-scroll mt-6">
                                <li class="w-full border-b border-solid border-gray-175 pb-2 flex justify-between items-center mb-4" @click="selectOption(text)" v-for="(text, index) in state.item" :key="index">
                                    <p :class="'text-base leading-6 font-poppins '+(state.selected === text ? 'text-primary-color' : 'text-gray-350')">{{text}}</p>
                                    <img v-if="state.selected === text" src="../../../assets/images/check_with_bg.svg" class="m-1" alt="" />
                                </li>
                            </ul>
                        </div>
                    </template>
                </BottomSheet>
            </div>
        </nuxt-layout>
    </div>
</template>


<style>
    .select-payment {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }
    .floating-pay-now {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
        border-radius: 12px 12px 0px 0px;
    }

    @media only screen and (min-width: 700px) {
        .floating-pay-now {
            left: 50%; 
            margin-left: -255px;
            width: 510px;   

        }
    }
</style>