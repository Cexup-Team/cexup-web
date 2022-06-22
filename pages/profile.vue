<script setup lang="ts">
     import BottomNav from '~~/parts/BottomNav.vue';
</script>
<template>
    <div>
        <nuxt-layout name="main">
            <div class="profile-wrapper h-full relative w-full">
                <BottomNav active="/profile" />

                <div class="flex justify-between mt-7 mx-6 items-center">
                    <img src="../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                    <h1 class="font-poppins text-xl font-semibold">Profile</h1>
                    <div></div>
                </div>
                <section class="profile-header mt-6">
                    <div class="flex px-5 items-center">
                        <div class="w-20 h-20 rounded-full overflow-hidden mr-4">
                            <img src="../assets/images/profile_header.png" class="object-cover" alt="">
                        </div>
                        <div class="flex flex-col">
                            <h2 class="text-lg font-semibold font-poppins leading-7">Iqbal Nur Tmvn</h2>
                            <h3 class="text-xs font-poppins text-gray-350">iqbalnunrhaqbinkidi@gmail.com</h3>
                            <button class="px-2 py-2 border border-gray-150 font-poppins w-fit rounded-xl text-primary-color font-medium text-sm mt-3">Edit Profile</button>
                        </div>
                    </div>
                </section>
                <section class="history-profile mt-16 relative">
                    <div class="floating-profile absolute right-6 left-6 transform -translate-y-1/2">
                        <div class="floating-profile-body rounded-xl w-full h-full bg-white flex justify-between items-start py-4 px-6">
                            <div class="text-center">
                                <h3 class="text-base text-primary-color font-medium">21</h3>
                                <p class="text-sm font-poppins font-medium text-gray-350 mt-1">Age (Yrs)</p>
                            </div>
                              <div class="text-center">
                                <h3 class="text-base text-primary-color font-medium">169</h3>
                                <p class="text-sm font-poppins font-medium text-gray-350 mt-1">Height (cm)</p>
                            </div>
                              <div class="text-center">
                                <h3 class="text-base text-primary-color font-medium">58</h3>
                                <p class="text-sm font-poppins font-medium text-gray-350 mt-1">Weight (kg)</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="bg-blue-50 h-screen w-full pt-16 px-4">
                        <h2 class="font-semibold font-poppins text-base">History</h2>
                    </div>
                </section>

            </div>

        </nuxt-layout>
    </div>
</template>


<style>
    .floating-profile-body {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.09);
    }
</style>