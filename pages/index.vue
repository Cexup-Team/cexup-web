<script setup lang="ts">

import HealthStatusVue from "../parts/HealthStatus.vue";
import HealthFeatureVue from "../parts/HealthFeature.vue";

      
</script>

<template>
    <div>
        <nuxt-layout name="main">
            <section class="dashboard-wrapper pt-2 h-full">

                <!-- Header Name -->

                <div class="flex justify-between items-center w-full mt-6 px-4">
                    <div class="">
                        <h1 class="font-poppins text-white font-semibold text-base leading-6">Hi, Mario Prasetyo <span>👋</span> </h1>
                        <h2 class="flex items-center justify-start text-white text-sm font-normal"><span class="mr-1"><img src="../assets/images/place_icon.svg" alt=""></span>Jl. Haji Merlin, Jakarta <span class="ml-2"><img src="../assets/images/arrow_right.svg" alt=""></span></h2>
                    </div>
                    <div class="">
                        <img src="../assets/images/bell_icon.svg" alt="">
                    </div>
                </div>

                <!-- Health Status -->

                <HealthStatusVue />

                <!-- Feature -->
                <HealthFeatureVue />
                

            </section>
           
        </nuxt-layout>
    </div>  
</template>


<style>
    .dashboard-wrapper {
        background: linear-gradient(68.89deg, #008CA3 0%, #008CA3 0.01%, #239EB3 100%);
    }
    .health-status {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }

  
</style>