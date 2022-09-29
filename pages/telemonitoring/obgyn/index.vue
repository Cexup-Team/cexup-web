<script setup lang="ts">
  import { Ref } from "vue"
  let openPlus: Ref<boolean> = ref(false)

  const actionOpen = () => {
    openPlus.value = !openPlus.value
  }

</script>

<template>
  <div>
     <nuxt-layout name="main">
        <div class="obgyn-wrapper">
          <div class="relative">
              <div class="bg-blue-50 w-full">
                  <div class="flex justify-between pt-6 mx-6 items-center">
                          <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">
                          <h1 class="font-poppins text-xl font-semibold">Pregnant Tracker</h1>
                          <div class="relative">
                            <img src="~/assets/images/plus_icon.svg" alt="" class="w-6 h-6" @click="actionOpen()">
                            <div class="absolute right-0 shadow-card-obgyn px-3 py-2 bg-white rounded-xl top-10" v-if="openPlus === true">
                            <nuxt-link to="/telemonitoring/obgyn/input/vital" class="w-full">
                              <h5 class="font-poppins font-medium text-xs w-full">Input Vital Sign</h5>
                            </nuxt-link>
                            <nuxt-link to="/telemonitoring/obgyn/input/obstetrics" class="w-full">

                              <h5 class="font-poppins font-medium text-xs whitespace-nowrap w-full" style="margin-top: 6px;">Input Obsemetrics</h5>
                            </nuxt-link>
                            
                            </div>
                          </div>
                  </div>
                  <div class="">
                    <h2 class="mx-6 mt-8 font-poppins font-semibold" style="font-size: 22px">Welcome back, Yuki 👋</h2>
                    <h3 class="mx-6 font-poppins text-gray-350 text-sm" style="margin-top: 6px;">Let's tracker your baby</h3>
                    <div class="pt-32"></div>
                  
                  </div>
              </div>
              <div class="absolute floating-date-obgyn transform w-full px-4 -bottom-20">
                <div class="floating-date-obgyn-item p-4 pb-11 bg-white rounded-xl shadow-card-obgyn">
                  <div class="flex items-center">
                    <div class="bg-primary-color w-2 h-2 rounded-full mr-3"></div>
                    <h3 class="text-gray-350 font-poppins text-sm">You are 24 weeks pregnant</h3>
                  </div>
                  <div class="w-full">
                    <ul class="weeks-obgyn flex justify-between w-full mt-6 items-center">
                      <li class="items-center flex justify-center bg-primary-color text-white text-center w-12 h-12 rounded-full">22</li>
                      <li class="items-center flex justify-center bg-primary-color text-white text-center w-16 h-16 rounded-full">23</li>
                      <li class="items-center flex justify-center bg-primary-color text-white text-center w-20 h-20 rounded-full relative">24<br>Weeks <span class="absolute -bottom-7 text-primary-color font-poppins text-xs">This Week</span></li>
                      <li class="items-center flex justify-center bg-primary-color text-white text-center w-16 h-16 rounded-full">25</li>
                      <li class="items-center flex justify-center bg-primary-color text-white text-center w-12 h-12 rounded-full">26</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-28 px-4">
              <div class="shadow-card-obgyn grid grid-cols-5 px-4 py-4 bg-white rounded-xl">
                <div class="w-full flex items-center justify-center">
                  <div class="w-20 h-20"> 
                    <img src="../../../assets/images/baby-icon.svg" class="w-full h-full" alt="">
                  </div>
                </div>
                <div class="w-full flex flex-col items-center col-span-2">
                  <div>
                    <div class="">
                      <h3 class="font-poppins text-gray-350 text-xs">Height</h3>
                      <h4 class="font-poppins font-medium text-base">23 cm</h4>
                    </div>
                    <div class="mt-3">
                      <h3 class="font-poppins text-gray-350 text-xs">Days Left</h3>
                      <h4 class="font-poppins font-medium text-base">196 days</h4>
                    </div>
                  </div>
                </div>
                <div class="w-full flex flex-col items-center col-span-2">
                  <div>
                    <div class="">
                      <h3 class="font-poppins text-gray-350 text-xs">Weight</h3>
                      <h4 class="font-poppins font-medium text-base">145 gr</h4>
                    </div>
                    <div class="mt-3">
                      <h3 class="font-poppins text-gray-350 text-xs">Weeks Left</h3>
                      <h4 class="font-poppins font-medium text-base">28 weeks</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="px-4 mt-4">
              <div class="flex justify-start items-center bg-white p-4 shadow-card-obgyn rounded-lg">
                <div class="w-12 h-12 mr-4">
                  <img src="../../../assets/images/baby-sleep-icon.svg" class="w-full h-full" alt="">
                </div>
                <div class="flex flex-col">
                  <h3 class="font-poppins text-gray-350 text-xs">Due Date</h3>
                  <h4 class="font-poppins font-medium text-base mt-2">23 October 2021</h4>
                </div>
              </div>
            </div>

            <div class="px-4 mt-7">
              <h2 class="font-poppins font-semibold text-base">Alteration Tracker</h2>
              <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="flex items-center shadow-card-obgyn-tracker bg-white rounded-xl" style="padding: 14px;">
                  <div class="w-10 h-10 mr-2">
                    <img src="../../../assets/images/baby-icon.svg" class="w-full h-full" alt="">
                  </div>
                  <h3 class="font-poppins text-gray-350 text-sm">Your Baby</h3>
                </div>


                <div class="flex items-center shadow-card-obgyn-tracker bg-white rounded-xl" style="padding: 14px;">
                  <div class="w-10 h-10 mr-2">
                    <img src="../../../assets/images/body-obgyn-icon.svg" class="w-full h-full" alt="">
                  </div>
                  <h3 class="font-poppins text-gray-350 text-sm">Your Body</h3>
                </div>

              </div>
            </div>

            <div class="article-obgyn mt-7"> 
              <div class="flex justify-between px-4">
                
                <h2 class="font-poppins font-semibold text-base">Recommended Articles</h2>
                <span class="font-poppins text-primary-color text-base font-semibold">See All</span>
              </div>
              <div class="overflow-x-scroll no-scrollbar">
                <div class="min-w-max px-4 pb-5 pt-4">
                  <div class="flex justify-start bg-white">
                      <div class="shadow-card-obgyn bg-white p-2 rounded-md mr-4" style="width: 188px;">
                        <div class="h-24 w-full rounded-md overflow-hidden">
                          <img src="../.././../assets/images/image_obgyn1.png" class="h-full w-full object-cover" alt="">
                        </div>
                        <h3 class="font-poppins font-medium text-sm mt-2 px-1">Disinfectant use by pregnant women may</h3>
                        <div class="flex items-center mt-1 px-1">
                          <span class="font-poppins text-primary-color font-medium text-xs mr-2">Detail</span>
                          <img src="../../../assets/images/arrow_right_blue.svg" class="w-1 h-2" alt="">
                        </div>
                      </div>


                      <div class="shadow-card-obgyn bg-white p-2 rounded-md mr-4" style="width: 188px;">
                        <div class="h-24 w-full rounded-md overflow-hidden">
                          <img src="../.././../assets/images/image_obgyn2.png" class="h-full w-full object-cover" alt="">
                        </div>
                        <h3 class="font-poppins font-medium text-sm mt-2 px-1">is Vaccination during pregnancy safe?</h3>
                        <div class="flex items-center mt-1 px-1">
                          <span class="font-poppins text-primary-color font-medium text-xs mr-2">Detail</span>
                          <img src="../../../assets/images/arrow_right_blue.svg" class="w-1 h-2" alt="">
                        </div>
                      </div>

                      
                      <div class="shadow-card-obgyn bg-white p-2 rounded-md mr-4" style="width: 188px;">
                        <div class="h-24 w-full rounded-md overflow-hidden">
                          <img src="../.././../assets/images/image_obgyn2.png" class="h-full w-full object-cover" alt="">
                        </div>
                        <h3 class="font-poppins font-medium text-sm mt-2 px-1">Disinfectant use by pregnant women may</h3>
                        <div class="flex items-center mt-1 px-1">
                          <span class="font-poppins text-primary-color font-medium text-xs mr-2">Detail</span>
                          <img src="../../../assets/images/arrow_right_blue.svg" class="w-1 h-2" alt="">
                        </div>
                      </div>
                      
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-28"></div>



        </div>
     </nuxt-layout>
  </div>
</template>


<style>

   .weeks-obgyn > li:nth-child(2) {
        background: #9DDBE5;
    }

   .weeks-obgyn > li:nth-child(4) {
        background: #9DDBE5;
    }
     .weeks-obgyn > li:nth-child(1) {
        background: #CDF2F9;
    }

   .weeks-obgyn > li:nth-child(5) {
        background: #CDF2F9;
    }
    .shadow-card-obgyn{
      box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }

    .shadow-card-obgyn-tracker{
      box-shadow: 0px 2px 48px rgba(0, 0, 0, 0.08);
    }
</style>