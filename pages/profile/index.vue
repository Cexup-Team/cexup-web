<script setup lang="ts">
     import BottomNav from '~~/parts/BottomNav.vue';
import NavBar from '~~/parts/NavBar.vue';
</script>
<template>
    <div>
        <nuxt-layout name="main">
            <div class="profile-wrapper h-full relative w-full">
                <BottomNav active="/profile" />

                <NavBar title="Profile" link="/" />
                <section class="profile-header mt-20">
                    <div class="flex px-5 items-center">
                        <div class="w-20 h-20 rounded-full overflow-hidden mr-4">
                            <img src="../../assets/images/profile_header.png" class="object-cover" alt="">
                        </div>
                        <div class="flex flex-col">
                            <h2 class="text-lg font-semibold font-poppins leading-7">Iqbal Nur Tmvn</h2>
                            <h3 class="text-xs font-poppins text-gray-350">iqbalnunrhaqbinkidi@gmail.com</h3>
                            <nuxt-link to="/profile/edit" class="w-fit mt-3 rounded-xl">
                                <button class="px-2 py-2 border border-gray-150 font-poppins w-fit rounded-xl text-primary-color font-medium text-sm">Edit Profile</button>
                            </nuxt-link>
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
                    <div class="bg-blue-50 w-full pt-16 px-4 overflow-y-scroll h-full no-scrollbar">
                        <h2 class="font-semibold font-poppins text-base">History</h2>
                        <div class="history-card mt-4">
                            <div class="history-card-body bg-white rounded-xl">
                                <div class="flex items-start pt-5 px-6">
                                    <img src="../../assets/images/activity_icon_profile.svg" class="w-8 h-w-8" alt="">
                                    <div class="ml-4 mb-5">
                                        <h2 class="font-poppins font-semibold text-sm">Activity</h2>
                                        <p class="mt-2 font-poppins text-xs">Check history on Cexup to call doctor, meet doctor and reservation for medical treatment.</p>
                                    </div>
                                </div>
                                <hr class="w-full h-0.5 bg-gray-175">
                                <div class="flex items-start pb-5 pt-5 px-6">
                                    <img src="../../assets/images/medical_record_icon_profile.svg" class="w-8 h-w-8" alt="">
                                    <div class="ml-4">
                                        <h2 class="font-poppins font-semibold text-sm">Medical Record</h2>
                                        <p class="mt-2 font-poppins text-xs">Read the notes on the consultation with the doctor for your health condition.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 class="font-semibold font-poppins text-base mt-5">Help</h2>
                        <div class="history-card mt-4 mb-20">
                            <div class="history-card-body bg-white rounded-xl">
                                <div class="flex items-start pt-5 px-6">
                                    <img src="../../assets/images/help_icon_profile.svg" class="w-8 h-w-8" alt="">
                                    <div class="ml-4 mb-5">
                                        <h2 class="font-poppins font-semibold text-sm">Activity</h2>
                                        <p class="mt-2 font-poppins text-xs">Check history on Cexup to call doctor, meet doctor and reservation for medical treatment.</p>
                                    </div>
                                </div>
                                <hr class="w-full h-0.5 bg-gray-175">
                                <div class="flex items-start pb-5 pt-5 px-6">
                                    <img src="../../assets/images/about_icon_profile.svg" class="w-8 h-w-8" alt="">
                                    <div class="ml-4">
                                        <h2 class="font-poppins font-semibold text-sm">Medical Record</h2>
                                        <p class="mt-2 font-poppins text-xs">Read the notes on the consultation with the doctor for your health condition.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
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

    .history-card-body {
        box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.09);
    }

      @media only screen and (min-width: 700px) {
        .nav-bar {
            top: 0;
            left: 50%; 
            margin-left: -255px;
            width: 510px;   

        }
    }

</style>