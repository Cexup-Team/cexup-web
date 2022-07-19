<script setup lang="ts">
    defineProps({
        title : {
            type : String
        },
        price: {
            type: String
        },
        duration : {
            type: String
        },
        status:{
            type: Boolean,
            default: false
        }

    })
</script>

<template>
    <div class="card-my-subscribe bg-white overflow-hidden p-4" style="border-radius: 10px;">
        <div class="flex items-center">
            <h3 class="font-poppins font-medium text-lg w-full">{{ title }}</h3>
            <button :class="'w-auto text-base font-poppins font-medium text-white px-4 py-1 '+(status ? 'bg-teal-550' : 'bg-red-650')" style="border-radius: 5px;">{{ status ?  'Active' : 'Expired'}}</button>
        </div>
        <h4 class="font-poppins text-sm">Price: {{ price }}</h4>
        <p class="font-poppins text-sm mt-2 font-normal">Jatuh tempo : <b class="font-semibold">{{ duration }}</b> </p>
        <hr class="mt-4 border-2 border-gray-225 bg-gray-225">
        <button class="text-primary-color font-poppins font-medium text-base mt-4 text-center w-full">See Detail</button>
    </div>
</template>


<style>
    .card-my-subscribe {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }
</style>