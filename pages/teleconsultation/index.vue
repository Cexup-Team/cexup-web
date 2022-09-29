<script setup lang="ts">
</script>
<template>
    <div>
        <nuxt-layout name="main">
            <div class="telemedicine-wrapper relative">

                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Teleconsultation</h1>
                        <div></div>
                    </div>
                </div>

                <div class="fixed bottom-8 z-50 w-full">
                    <div class="w-full text-center">
                        <span class="choose-span rounded-2xl bg-white px-4 py-3">Choose Specialization</span>
                    </div>
                </div>

                <section class="history-profile px-4 pt-20 relative">                   
                    <div class="relative h-11">
                        <input class="search_input outline-none border border-gray-150 w-full bg-none p-4 font-poppins text-sm absolute top-0 left-0 h-full" placeholder="Search for doctor" type="text">
                        <img src="~/assets/images/search_icon.svg" class="absolute w-5 h-5 right-3 top-0 transform translate-y-3" alt="">
                    </div> 
                </section>
                <section class="mt-6">
                    <div class="flex justify-between items-center px-4 w-full">
                        <h2 class="font-poppins text-sm font-semibold">Doctor available now</h2>
                        <span class="text-primary-color font-poppins text-sm font-semibold">See All</span>
                    </div>
                    <div class="mt-4 bg-blue-50 relative">

                    
                        
                            <div class="tele-doctor overflow-x-scroll no-scrollbar pb-20" >
                                <div class="min-w-max px-4 py-3 flex">
                                <nuxt-link to="/teleconsultation/doctor/kamskmas">

                               
                                <div class="tele-doctor-item flex justify-between items-center px-5 py-4 bg-white rounded-xl mr-3  ">
                                    <div>
                                        <h3 class="text-base font-poppins font-medium leading-6">Dr. Iqbal Nur Haq Yamah</h3>
                                        <p class="mt-1 font-poppins text-gray-350 text-xs">Dermatologist</p>
                                        <div class="flex mt-2 items-center justify-start">
                                            <div class="bg-teal-550 h-3 w-3 rounded-full mr-2"></div>
                                            <h5 class="text-teal-550 font-poppins font-medium text-xs">Online</h5>
                                        </div>
                                        <h3 class="text-primary-color font-poppins font-semibold text-sm mt-4">Rp 5.000</h3>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="w-20 h-20 rounded-full overflow-hidden">
                                            <img src="~/assets/images/doctor_img.png" class="object-cover" alt="">
                                        </div>
                                            <div class="mt-2">
                                                <button class="outline-none bg-primary-color py-1 px-6 text-white font-poppins font-medium rounded-lg text-sm whitespace-pre">Start Call</button>
                                            </div>
                                    </div>
                                </div>

                                 </nuxt-link>
                                <div class="tele-doctor-item flex justify-between items-center px-5 py-4 bg-white rounded-xl">
                                    <div>
                                        <h3 class="text-base font-poppins font-medium leading-6">Dr. Iqbal Nur Haq</h3>
                                        <p class="mt-1 font-poppins text-gray-350 text-xs">Dermatologist</p>
                                        <div class="flex mt-2 items-center justify-start">
                                            <div class="bg-teal-550 h-3 w-3 rounded-full mr-2"></div>
                                            <h5 class="text-teal-550 font-poppins font-medium text-xs">Online</h5>
                                        </div>
                                        <h3 class="text-primary-color font-poppins font-semibold text-sm mt-4">Rp 5.000</h3>
                                    </div>
                                    <div class="flex flex-col items-center justify-center">
                                        <div class="w-20 h-20 rounded-full overflow-hidden">
                                            <img src="~/assets/images/doctor_img.png" class="object-cover" alt="">
                                        </div>
                                        <div class="mt-2">
                                            <button class="outline-none bg-primary-color py-1 px-6 text-white font-poppins font-medium rounded-lg text-sm whitespace-pre">Start Call</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="w-full flex px-4 mt-4 absolute bottom-0 transform translate-y-10 h-28 rounded-2xl overflow-hidden">
                            <img src="~/assets/images/banner_promo.png" class="object-cover w-full rounded-2xl" alt="">
                        </div>
                    </div>
                </section>

                <section class="mt-14 px-4">
                    <div class="tele-doctor-list bg-white py-3 px-4 rounded-xl">
                        <div class="flex">
                            <div class="w-2/6 h-auto rounded-xl overflow-hidden mr-4 relative">
                                <img src="~/assets/images/doctor_img.png" class="rounded-xl overflow-hidden object-cover w-full h-full" alt="">
                            </div>
                            <div class="w-4/6">
                                <div class="flex justify-between items-center">
                                    <h3 class="text-base font-poppins font-medium leading-6">Dr. Iqbal Nur Haq</h3>
                                    <img src="~/assets/images/icon_pin.svg" class="w-4 h-5" alt="">
                                </div>
                                 <h5 class="mt-1 font-poppins text-primary-color text-xs">Dermatologist</h5>
                                 <h6 class="mt-3 font-poppins text-3">RS. Sari Asih</h6>
                                 <div class="flex justify-between items-center">
                                    <div class="flex flex-col">
                                        <div class="flex mt-2 items-center justify-start">
                                            <div class="bg-teal-550 h-3 w-3 rounded-full mr-2"></div>
                                            <h5 class="text-teal-550 font-poppins font-medium text-xs">Online</h5>
                                        </div>
                                        <div class="flex mt-2 items-center justify-start">
                                            <img src="~/assets/images/bag_icon.svg" class="mr-1" alt="">
                                            <h5 class="text-gray-350 font-poppins font-medium text-xs">5 Years</h5>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-gray-350 font-poppins font-semibold text-xs discount relative">Rp 10.000</span>
                                        <span class="text-primary-color font-semibold text-sm font-poppins">Rp 5.000</span>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                     <div class="tele-doctor-list bg-white py-3 px-4 rounded-xl mt-4 mb-5">
                        <div class="flex">
                            <div class="w-2/6 h-auto rounded-xl overflow-hidden mr-4 relative">
                                <img src="~/assets/images/doctor_img.png" class="rounded-xl overflow-hidden object-cover w-full h-full" alt="">
                            </div>
                            <div class="w-4/6">
                                <div class="flex justify-between items-center">
                                    <h3 class="text-base font-poppins font-medium leading-6">Dr. Iqbal Nur Haq</h3>
                                    <img src="~/assets/images/icon_pin.svg" class="w-4 h-5" alt="">
                                </div>
                                 <h5 class="mt-1 font-poppins text-primary-color text-xs">Dermatologist</h5>
                                 <h6 class="mt-3 font-poppins text-3">RS. Sari Asih</h6>
                                 <div class="flex justify-between items-center">
                                    <div class="flex flex-col">
                                        <div class="flex mt-2 items-center justify-start">
                                            <div class="bg-teal-550 h-3 w-3 rounded-full mr-2"></div>
                                            <h5 class="text-teal-550 font-poppins font-medium text-xs">Online</h5>
                                        </div>
                                        <div class="flex mt-2 items-center justify-start">
                                            <img src="~/assets/images/bag_icon.svg" class="mr-1" alt="">
                                            <h5 class="text-gray-350 font-poppins font-medium text-xs">5 Years</h5>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-gray-350 font-poppins font-semibold text-xs discount relative">Rp 10.000</span>
                                        <span class="text-primary-color font-semibold text-sm font-poppins">Rp 5.000</span>
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
    .tele-doctor-item {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }
    .tele-doctor-item {
        width: 330px;
    }

    .tele-doctor-list {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }

    .tele-doctor-list .discount::after {
        content: '';
        width: 100%;
        height: 2px;
        background: #AEAEB2;
        position: absolute;
        left: 0;
        right: 0;
        top: 40%;
    }

    .choose-span {
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
    }
    

</style>