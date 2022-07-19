<script setup lang="ts">
    import BottomNav from '~~/parts/BottomNav.vue';
    import Tabs from '~~/parts/Tabs.vue';


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


            <Tabs bgBody="bg-blue-50">
                <template v-slot:tabHeader>
                    <div class="active font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5">
                        All
                    </div>
                    <div class="font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5">
                        Call Doctor
                    </div>
                    <div class="font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5">
                        Meet Doctor
                    </div>
                    
                </template>
                <template v-slot:tabFilter>
                    <div class="pt-4 pb-5 bg-blue-50 overflow-x-scroll no-scrollbar">
                        <div class="tab-status flex items-center w-full min-w-max mx-3">
                            <div class="tab-status-item mr-3 active_tab_filter">
                                <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">All</p>
                            </div>
                            <div class="tab-status-item mr-3">
                                <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Waiting Payment</p>
                            </div>
                            <div class="tab-status-item mr-3">
                                <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Order Progress</p>
                            </div>
                            <div class="tab-status-item mr-3">
                                <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Waiting Meeting </p>
                            </div>

                            <div class="tab-status-item mr-3">
                                <p class="px-4 py-2 font-poppins transition-all duration-200 pointer-events-none cursor-pointer ease-in-out font-medium text-sm">Waiting Meeting </p>
                            </div>

                            <div class="tab-status-item">
                                <p class="px-4 py-2 font-poppins font-medium text-sm">Waiting Meeting </p>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:tabBody>
                    <div class="tab-body-item active w-full pb-44">
                        <CardOrder />
                        <CardOrder />
                        <CardOrder />
                        <CardOrder />
                        <CardOrder />
                        <div class="mt-14"></div>
                    </div>
                    <div class="tab-body-item">
                        <h2>Call Doctor</h2>
        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem tempore corrupti eius rerum dolore, natus id, consequuntur magni deleniti alias et delectus porro corporis optio nisi aliquid! Ad, natus?</p>
                    </div>
                    <div class="tab-body-item">
                        <h2> Meet Doctor</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem tempore corrupti eius rerum dolore, natus id, consequuntur magni deleniti alias et delectus porro corporis optio nisi aliquid! Ad, natus?</p>
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