<script setup lang="ts">

    import {formatDate} from '../../utils/getFormatDate'
    import {getStatus} from '../../utils/statusOrder'
    const props = defineProps({
        order : {
            type: Object
        },
    })

</script>
<template>
    <div class="card-order-wrapper">
        <div class="card-order mx-6 rounded-lg mb-4">
            <div class="card-order-header px-4 py-2 bg-white">
                <div class="flex items-center justify-between"> 
                    <div class="w-full">
                        <div class="flex items-center">
                            <img src="../../assets/images/call_doctor__order.svg" class="w-5 h-5 mr-2" alt="">
                            <p class="text-primary-color font-medium text-xs font-poppins">{{ order.type === 'call' ? 'Online Consultation' : 'Clinic Reservation' }}</p>
                        </div>
                        <h4 class="text-primary-color font-poppins text-sm font-medium mt-2">{{order.transaction_id}}</h4>
                    </div>
                    <div class="w-auto flex flex-col items-end justify-end">
                        <h5 class="px-2 py-1 rounded-lg bg-blue-450 text-white text-xs whitespace-pre font-poppins">{{getStatus(props.order.status)}}</h5>
                        <p class="text-gray-350 text-xs font-poppins whitespace-pre mt-2">{{formatDate(order.date)}}, {{order.estimate}}</p>
                    </div>
                </div>
            </div>
            <div class="card-order-body mt-0.5 bg-white px-4 py-3">
                <div class="flex items-center">
                    <img src="../../assets/images/doctor_img.png" class="w-14 h-14 rounded-full object-cover mr-3" alt="">
                    <div>
                        <h2 class="font-poppins font-semibold text-base">{{order.doctor_account.name}}</h2>
                        <p class="text-xs font-poppins font-normal">{{ order.type === 'call' ? 'Online Consultation' : 'Clinic Reservation' }}</p>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h3 class="text-xs font-poppins text-gray-350 mt-4">Order Date: {{formatDate(order.date)}}</h3>
                    <h4 class="text-sm font-poppins font-medium mt-1">Total Tagihan: <span class="text-primary-color">Rp. {{order.price}}</span></h4>
                    <button class="mt-3 w-full border border-primary-color py-2 rounded-xl text-sm font-medium font-poppins text-primary-color">{{getStatus(props.order.status)}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>