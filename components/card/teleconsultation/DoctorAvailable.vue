<script setup lang="ts">
    import { idrFormat } from "~~/utils/currencyFormat";
    defineProps({
        name: {
            type: String
        },
        speciality: {
            type: String
        },
        online: {
            type: Boolean
        },
        price: {
            type: Number
        },
        link : {
            type: String
        }
    })
</script>

<template>
 <nuxt-link :to="link">
    <div class="tele-doctor-item flex justify-between items-center px-5 py-4 bg-white rounded-xl mr-3  ">
        <div>
            <h3 class="text-base font-poppins font-medium leading-6">{{ name }}</h3>
            <p class="mt-1 font-poppins text-gray-350 text-xs">{{speciality}}</p>
            <div class="flex mt-2 items-center justify-start">
                <div class="bg-teal-550 h-3 w-3 rounded-full mr-2"></div>
                <h5 class="text-teal-550 font-poppins font-medium text-xs">{{online ? 'Online' : 'Offline'}}</h5>
            </div>
            <h3 class="text-primary-color font-poppins font-semibold text-sm mt-4">{{idrFormat(price.toString(), "Rp. ")}}</h3>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-20 h-20 rounded-full overflow-hidden">
                <img src="../../../assets/images/doctor_img.png" class="object-cover" alt="">
            </div>
                <div class="mt-2">
                    <button class="outline-none bg-primary-color py-1 px-6 text-white font-poppins font-medium rounded-lg text-sm whitespace-pre">Start Call</button>
                </div>
        </div>  


        </div>

        </nuxt-link>
</template>


<style>

</style>