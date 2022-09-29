<script setup lang="ts">

</script>
<template>
    <div class="card-order-wrapper">
        <div class="card-order mx-6 rounded-lg mb-4">
            <div class="card-order-header px-4 py-2 bg-white">
                <div class="flex items-center justify-between"> 
                    <div class="w-8/12">
                        <div class="flex items-center">
                            <img src="~/assets/images/call_doctor__order.svg" class="w-5 h-5 mr-2" alt="">
                            <p class="leading-relaxed w-4/12 h-2 animate-pulse bg-primary-color"></p>
                        </div>
                        <p class="leading-relaxed w-8/12 h-4 mt-2 animate-pulse bg-primary-color"></p>
                    </div>
                    <div class="w-4/12 flex flex-col items-end justify-end">
                        <p class="leading-relaxed w-3/4 h-4 animate-pulse bg-blue-450 rounded-lg"></p>
                        <p class="leading-relaxed h-3 w-full animate-pulse bg-gray-200 mt-2"></p>
                    </div>
                </div>
            </div>
            <div class="card-order-body mt-0.5 bg-white px-4 py-3">
                <div class="flex items-center w-full">
                    <div class="w-14 h-14 mr-3">
                        <div class=" bg-gray-400 w-14 h-14 rounded-full animate-pulse"></div>
                    </div>
                    <div class="w-full">
                        <p class="leading-relaxed h-3 w-3/4 animate-pulse bg-gray-400"></p>
                        <p class="leading-relaxed h-2 w-2/4 mt-2 animate-pulse bg-gray-400"></p>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="flex mt-4 items-center">
                        <h3 class="text-xs font-poppins text-gray-350 mr-2">Order Date: </h3>
                        <p class="leading-relaxed h-3 w-1/4 animate-pulse bg-gray-200"></p>

                    </div>
                    <div class="flex items-center mt-2">
                        <h4 class="text-sm font-poppins font-medium mr-2">Total Tagihan: </h4>
                        <p class="leading-relaxed w-4/12 h-4 animate-pulse bg-primary-color"></p>
                    </div>
                    <p class="leading-relaxed h-9 w-full mt-3 animate-pulse bg-gray-400 rounded-xl"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>