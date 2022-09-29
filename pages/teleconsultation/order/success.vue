<script setup lang="ts">

</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="order-success-wrapper h-full relative w-full">
                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">order</h1>
                        <div></div>
                    </div>
                </div>

                <div class="px-4 mt-20">
                    <img src="~/assets/images/card_success_order.png" alt="">
                    <h2 class="mt-6 font-poppins text-sm w-full text-center">Expected consultation by today 09:30 AM</h2>
                    <div class="mt-4 flex items-center">
                        <button class="w-3/6 bg-blue-150 mr-3 font-poppins px-4 py-3 font-medium text-sm text-primary-color rounded-xl">Back to browse</button>
                        <button class="w-3/6 bg-white font-poppins px-4 py-3 font-medium text-sm text-primary-color rounded-xl border-2 border-blue-175">Go to detail order</button>
                    </div>
                    <h3 class="font-poppins font-semibold text-sm mt-6">Patient Details</h3>
                    <div class="card-patient-detail rounded-xl px-5 py-4 mt-4">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <div class="w-12 h-12 overflow-hidden rounded-full mr-4">
                                    <img src="~/assets/images/profile_header.png" class="object-cover" alt="">
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

                    <h3 class="font-poppins font-medium text-base mt-6 text-indigo-850">Payment Method</h3>
                    <div class="select-payment flex justify-between items-center mt-4 p-4 rounded-xl">
                        <h5 class="font-poppins font-medium text-sm text-primary-color">E- Wallet | <span class="text-gray-900">0857825688768</span></h5>
                        <div class="w-16">
                            <img src="~/assets/images/gopay_logo.png" class="" alt="">
                        </div>
                    </div>
                    <h3 class="font-poppins font-semibold text-sm mt-6">Payment Detail</h3>
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


                    <div class="pt-14">
                 
                    </div>

                </div>
            </div>
        </nuxt-layout>
    </div>
</template>


<style>
    .card-patient-detail {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }
    .select-payment {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }
</style>