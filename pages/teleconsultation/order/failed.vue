<script setup lang="ts">

</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="order-success-wrapper relative w-full h-screen">
                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">order</h1>
                        <div></div>
                    </div>
                
                </div>

                <div class="px-4 pt-20">
                    <img src="~/assets/images/card_failed_order.png" alt="">
                    <h2 class="mt-6 font-poppins text-sm w-full text-center">Canceled due to overdue payment</h2>



            
                </div>

                <div class="mt-4 flex items-center absolute bottom-0 px-4 w-full mb-20">
                    <button class="w-3/6 bg-blue-150 mr-3 font-poppins px-4 py-3 font-medium text-sm text-primary-color rounded-xl">Back to browse</button>
                    <button class="w-3/6 font-poppins px-4 py-3 font-medium text-sm text-white rounded-xl bg-primary-color">Order Again</button>
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