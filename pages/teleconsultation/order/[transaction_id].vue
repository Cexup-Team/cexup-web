<script setup lang="ts">
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


                <div class="pt-20 px-4">
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
                    <section>
                        <h2 class="font-poppins font-semibold text-sm mt-5">Order Information</h2>
                        <div class="flex items-center mt-4 w-full">
                            <img src="../../../assets/images/transaction_id_icon.svg" class="w-9 h-9 mr-3" alt="">
                            <div class="flex flex-col w-full">
                                <h4 class="font-poppins text-xs text-gray-350">Order ID</h4>
                                <div class="flex justify-between items-center">
                                    <h5 class="font-poppins text-sm font-medium text-primary-color mt-1">#CXP-MT61b6f3fc2d7fd</h5>
                                    <img src="../../../assets/images/copy_icon.svg" class="w-3 h-4 mr-4" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center mt-3 w-full">
                            <img src="../../../assets/images/waiting_icon.svg" class="w-9 h-9 mr-3" alt="">
                            <div class="flex flex-col w-full">
                                <h4 class="font-poppins text-xs text-gray-350">Status Order</h4>
                                <h5 class="font-poppins text-sm font-medium text-primary-color mt-1">Waiting Meeting</h5>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 class="font-poppins font-semibold text-sm mt-5">Patient Details</h2>
                        <div class="card-patient-detail rounded-xl px-5 py-4 mt-4">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 overflow-hidden rounded-full mr-4">
                                        <img src="../../../assets/images/profile_header.png" class="object-cover" alt="">
                                    </div>
                                    <div class="flex flex-col">
                                        <h4 class="font-poppins font-medium text-sm">Mario Prasetyo</h4>
                                        <span class="font-poppins text-xs text-gray-350">21 Years, Male</span>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <h4 class="font-poppins text-gray-350" style="font-size: 10px">Simptons</h4>
                                    <h5 class="text-primary-color font-medium text-sm mt-2">Chest pain</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="subjective">
                            <h2 class="font-poppins font-semibold text-sm mt-5">Subjective</h2>
                            <textarea name="" id="" class="border-2 rounded-lg h-20 p-3 mt-4 outline-none border-gray-150 w-full text-xs font-poppins overflow-hidden">asas</textarea>
                        </div>
                        <div class="objective">
                            <h2 class="font-poppins font-semibold text-sm mt-5">Objective</h2>
                            <textarea name="" id="" class="border-2 rounded-lg h-20 p-3 mt-4 outline-none border-gray-150 w-full text-xs font-poppins overflow-hidden">asas</textarea>
                        </div>
                        <div class="assesment">
                            <h2 class="font-poppins font-semibold text-sm mt-5">Assesment</h2>
                            <textarea name="" id="" class="border-2 rounded-lg h-20 p-3 mt-4 outline-none border-gray-150 w-full text-xs font-poppins overflow-hidden">asas</textarea>
                        </div>
                        <div class="planning">
                            <h2 class="font-poppins font-semibold text-sm mt-5">Planning</h2>
                            <textarea name="" id="" class="border-2 rounded-lg h-20 p-3 mt-4 outline-none border-gray-150 w-full text-xs font-poppins overflow-hidden">asas</textarea>
                        </div>
                    </section>
                    <section>
                        <h2 class="font-poppins font-medium text-base mt-6">Payment Detail</h2>
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
                    </section>
                </div>

                <div class="floating-pay-now fixed bg-white w-full z-30 bottom-0 p-6">
                    <div class="flex flex-col justify-between items-center">
            
                        
                        <nuxt-link to="/teleconsultation/order/PSD-00348DNJDHS88" class="w-full">
                            <button class="text-white w-full font-poppins outline-none font-medium text-sm py-3 px-10 rounded-lg bg-gray-550">Waiting Meeting</button>
                        </nuxt-link>
                        <nuxt-link to="/teleconsultation/order/PSD-00348DNJDHS88" class="w-full mb-3 mt-5">
                            <button class="text-red-650 w-full font-poppins outline-none font-medium text-sm px-10 rounded-lg bg-white">Cancel</button>
                        </nuxt-link>

                    
                    </div>
                </div>
                <div class="pt-52"></div>
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
</style>