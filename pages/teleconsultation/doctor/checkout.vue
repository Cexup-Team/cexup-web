<script setup lang="ts">
    import { Ref } from "vue"
    import { DateTimePicker } from 'vue-drumroll-datetime-picker'
    import 'vue-drumroll-datetime-picker/dist/style.css'

    // const state = reactive({
    //     now : new Date()
    // })

    let now: Ref<String> = ref(new Date())
    
    const state = reactive({
        item : ["Visa / Master card", "Domestic ATM", "E - Wallet", "Cash"],
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
                        <div class="card-register-doctor bg-white rounded-xl mt-3        ">
                            <div class="flex items-start p-4">
                                <div class="w-20 h-20 rounded-full overflow-hidden mr-5">
                                    <img src="../../../assets/images/doctor_img.png" class="object-cover" alt="">
                                </div>
                                <div class="flex flex-col">
                                    <h3 class="font-poppins font-medium text-base">Dr Iqbal Nur Haq</h3>
                                    <p class="font-poppins text-xs text-gray-350">Dermatologist</p>
                                    <h5 class="font-poppins text-xs text-gray-350 mt-2">RS. Sari Asih</h5>

                                    <div class="flex items-center mt-1">
                                        <img src="../../../assets/images/bag_icon.svg" class="w-3 h-3 mr-2" alt="">
                                        <span class="text-xs font-poppins">5 Years</span>
                                    </div>
                                    <p class="font-poppins text-xs mt-3">Monday, 14 Feb 2022 09:30 - 09:45</p>
                                  
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="mt-8">
                        <h2 class="font-poppins font-medium text-base mb-4">Detail Patient</h2>
                        <div class="flex justify-between items-center mt-4">
                            <div class="flex justify-start items-center">
                                <img src="../../../assets/images/user_checkout_icon.svg" class="mr-3" alt="">
                                <h4 class="font-poppins text-sm font-medium">Mario Prasetyo</h4>
                            </div>
                            <h5 class="font-poppins text-xs">Male, 23/08/2001</h5>
                        </div>
                        <div class="flex justify-between items-center mt-5">
                            <h4 class="font-poppins font-medium text-base">Date</h4>
                            <h5 class="text-primary-color font-poppins font-medium text-xs">Change</h5>
                        </div>
                        <div class="flex justify-start items-center mt-2">
                            <img src="../../../assets/images/date_checkout_icon.svg" class="w-9 h-9 mr-4" alt="">
                            <h6 class="font-poppins font-medium text-sm text-indigo-850">Monday,14 Feb 2022 09:30 - 09:45</h6>
                        </div>
                        <div class="flex justify-between items-center mt-5">
                            <h4 class="font-poppins font-medium text-base">My Simptons</h4>
                            <h5 class="text-primary-color font-poppins font-medium text-xs">Change</h5>
                        </div>
                        <div class="flex justify-start items-center mt-2">
                            <img src="../../../assets/images/pain_checkout_icon.svg" class="w-9 h-9 mr-4" alt="">
                            <h4 class="text-indigo-850 font-poppins font-medium text-sm">Chest pain</h4>
                        </div>
                        <h4 class="font-poppins font-medium text-base mt-5">Voucher</h4>
                        <div class="inputForm mt-4">
                            <InputText className="rounded-md" type="text" placeholder="Promotion Code" />
                        </div>
                        <h4 class="font-poppins font-medium text-base mt-5 text-indigo-850">Payment Method</h4>
                        <div class="select-payment flex justify-between items-center mt-4 p-4 rounded-xl" @click="slcValue">
                            <h5 class="font-poppins font-medium text-sm text-primary-color" v-if="!state.selected">Select your payment method</h5>
                            <h5 class="font-poppins font-medium text-sm text-primary-color" v-if="state.selected">{{state.selected}}</h5>
                            <img src="../../../assets/images/arrow_right_blue.svg" alt="">
                        </div>
                        <h4 class="font-poppins font-semibold text-base mt-5 text-indigo-850">Payment Detail</h4>
                        <div class="flex justify-between items-center mt-4"> 
                            <h5 class="font-poppins text-sm">Consultation</h5>
                            <span class="font-poppins text-sm">Rp 5.000</span>
                        </div>
                        <div class="flex justify-between items-center mt-2"> 
                            <h5 class="font-poppins text-sm">Aditional Discount</h5>
                            <span class="font-poppins text-sm">-</span>
                        </div>
                        <div class="flex justify-between items-center mt-2"> 
                            <h5 class="font-poppins text-sm font-semibold">Total</h5>
                            <span class="font-poppins text-sm font-semibold">Rp 5.000</span>
                        </div>
                    
                        <div class="mb-40">
                        </div>
                    </section>
                 </div>

                 <div class="floating-pay-now fixed bg-white w-full z-30 bottom-0 p-6">
                    <div class="flex justify-between items-center">
                        <div class="flex flex-col">
                            <h3 class="font-poppins text-xs font-medium">Total:</h3>
                            <h5 class="text-primary-color font-semibold font-poppins">Rp 5.000</h5>
                        </div>
                        <button :class="'text-white font-poppins outline-none font-medium text-sm py-3 px-10 rounded-lg '+(state.selected ? 'bg-primary-color' : 'bg-gray-550')">Pay now</button>
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
</style>