<script setup lang="ts">
    import BottomNav from '~~/parts/BottomNav.vue';
    import Tabs from '~~/parts/Tabs.vue';

    import { useRouter } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useOrderStore } from '~~/stores/order-store';




    const order = useOrderStore()

    const $toast = useToast()
    const router = useRouter()
    const session = useSession()

    const getListOrder = (appointment, type, user_id) => {
        order.getListOrder(appointment, type, user_id)
    }

    onMounted(() => {
        const user = JSON.parse(session.getItem("cexup-user"))
        getListOrder(order.state.slcAppointment, "", user.user_id)
    })


</script>
<template>
<div>
    <nuxt-layout name="main">
        <div class="order-wrapper h-full relative w-full">
             <BottomNav active="/order" />
            <div class="flex justify-between mt-7 mx-6 items-center">
                <img src="../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                <h1 class="font-poppins text-xl font-semibold">Order</h1>
                <div>

                </div>
            </div>


            <Tabs bgBody="bg-blue-50" @update:select="order.updateSelect" @update:status="order.updateStatus">
                <template v-slot:tabHeader>
                    <div class="active font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5" select="">
                        All
                    </div>
                    <div class="font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5" select="call">
                        Call Doctor
                    </div>
                    <div class="font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5" select="meet">
                        Meet Doctor
                    </div>
                    
                </template>
                <template v-slot:tabFilter>
                    <div class="pt-4 pb-5 bg-blue-50 overflow-x-scroll no-scrollbar">
                        <div class="tab-status flex items-center w-full min-w-max mx-3">
                            <div class="tab-status-item mr-3 active_tab_filter" status="">
                                <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">All</p>
                            </div>
                            <div class="tab-status-item mr-3" status="pending">
                                <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Waiting Payment</p>
                            </div>
                            <div class="tab-status-item mr-3" status="booked">
                                <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Order Processed</p>
                            </div>
                            <div class="tab-status-item mr-3" status="finish">
                                <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Order Completed</p>
                            </div>

                            <div class="tab-status-item" status="failed">
                                <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Order Canceled</p>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:tabBody>
                    <div class="tab-body-item active w-full pb-44">
                        <div v-if="order.stateOrder.isLoading">
                            <div v-for="(item, index) in 5" :key="index">
                                <ShimmerCardOrder />
                            </div>
                        </div>

                        <div v-if="!order.stateOrder.isLoading && order.stateOrder.isStatus === 'success'">
                            <div v-for="(item, index) in order.stateOrder.isData" :key="index">
                                <CardOrder :order="item" />
                            </div>
                        </div>

                      
                        <div class="mt-14"></div>
                    </div>
                    <div class="tab-body-item w-full pb-44">
                        <div v-if="order.stateOrder.isLoading">
                            <div v-for="(item, index) in 5" :key="index">
                                <ShimmerCardOrder />
                            </div>
                        </div>
                        
                        <div v-if="!order.stateOrder.isLoading && order.stateOrder.isStatus === 'success' && order.stateOrder.isData.type === 'call'">
                            <div v-for="(item, index) in order.stateOrder.isData" :key="index">
                                <CardOrder :order="item" />
                            </div>
                        </div>

                        <div class="mt-14"></div>
                    </div>
                    <div class="tab-body-item w-full pb-44">

                        <div v-if="order.stateOrder.isLoading">
                            <div v-for="(item, index) in 5" :key="index">
                                <ShimmerCardOrder />
                            </div>
                        </div>

                        <div v-if="!order.stateOrder.isLoading && order.stateOrder.isStatus === 'success' && order.stateOrder.isData.type === 'reservation'">
                            <div v-for="(item, index) in order.stateOrder.isData" :key="index">
                                <CardOrder :order="item" />
                            </div>
                        </div>

                        <div class="mt-14"></div>
                    
                    </div>
                    
                </template>
            </Tabs>

        </div>
    </nuxt-layout>
    
</div>
</template>


<style>

    .card-order-header {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
        border-radius: 12px 12px 0px 0px;
    }
    .card-order-body {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
        border-radius: 0px 0px 12px 12px;
    }
    
</style>