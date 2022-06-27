<script setup lang="ts">

import HealthStatusVue from "../parts/HealthStatus.vue";
import HealthFeatureVue from "../parts/HealthFeature.vue";
import BottomNav from '~~/parts/BottomNav.vue';


      
</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="dashboard-wrapper h-full relative">
                <BottomNav active="/" />
                
                <section class="pt-2">

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
                <section class="bg-white h-full w-full mt-6 rounded-2xl">
                    <div class="dashboard-doctor pt-7">
                        <div class="flex justify-between items-center w-full px-4">
                            <div class="">
                                <h2 class="font-poppins text-base leading-6 font-medium mb-1">Kesehatanmu Nomor Satu!</h2>
                                <p class="text-sm text-gray-350 font-poppins font-normal leading-5">Temukan solusi disini untuk tetap sehat!</p>
                            </div>
                            <div class="">
                                <img class="w-8 h-8" src="../assets/images/icon_right_background_rounded.svg" alt="">
                            </div>
                        </div>
                        <div class="doctor-list w-full mb-4">
                            <div class="slide-doctor pl-4 transform no-scrollbar overflow-auto flex justify-start pb-6">
                                <CardDoctor title="dr Yakob Togar" subTitle="Dermatologist" price="Rp. 5.000" icon="../../assets/images/dummy_doctor.png" />
                                  <CardDoctor title="dr Iqbal Nur Haq Binkidi" subTitle="Cardiac" price="Rp. 89.999.999"  icon="../../assets/images/dummy_doctor.png" />
                                  <CardDoctor  title="dr Wati" subTitle="Dermatologist" price="Rp. 5.000" icon="../../assets/images/dummy_doctor.png" />
                                  <CardDoctor title="dr Ayu Alga" subTitle="Dermatologist" price="Rp. 5.000" icon="../../assets/images/dummy_doctor.png" />
                            </div>
                        </div>
                    </div>

                    <div class="promo-banner">
                        <div class="flex justify-between items-center w-full px-4">
                            <div class="">
                                <h2 class="font-poppins text-base leading-6 font-medium mb-1">Promo Menarik</h2>
                            </div>
                            <div class="">
                                <img class="w-8 h-8" src="../assets/images/icon_right_background_rounded.svg" alt="">
                            </div>
                        </div>
                        <div class="w-full flex pl-3 mt-5 overflow-x-scroll no-scrollbar">
                            <img src="../assets/images/banner_promo.png" class="pr-3" alt="">
                            <img src="../assets/images/banner_promo.png" class="pr-3" alt="">
                        </div>
                    </div>

                    <div class="product mt-8">
                         <div class="flex justify-between items-center w-full px-4">
                            <div class="">
                                <h2 class="font-poppins text-base leading-6 font-medium mb-1">Alat Kesehatan</h2>
                                <p class="text-sm text-gray-350 font-poppins font-normal leading-5">Penuhi kebutuhan produk kesehatanmu</p>
                            </div>
                            <div class="">
                                <img class="w-8 h-8" src="../assets/images/icon_right_background_rounded.svg" alt="">
                            </div>
                        </div>

                        <div class="product-list w-full mb-5">
                            <div class="slide-product pl-4 transform no-scrollbar overflow-auto flex justify-start pb-6">
                                <CardDoctor title="Cexme Health Smartwatch" subTitle="Start From" price="Rp. 2.250.000" icon="../../assets/images/katalog.png"  />
                                <CardDoctor title="Cexme Health Smartwatch" subTitle="Start From" price="Rp. 2.250.000" icon="../../assets/images/katalog.png" />
                                <CardDoctor title="Cexme Health Smartwatch" subTitle="Start From" price="Rp. 2.250.000" icon="../../assets/images/katalog.png" />
                                <CardDoctor title="Cexme Health Smartwatch" subTitle="Start From" price="Rp. 2.250.000" icon="../../assets/images/katalog.png" />
                            </div>
                        </div>
                    </div>

                    <div class="article">
                        <div class="flex justify-between items-center w-full px-4">
                            <div class="">
                                <h2 class="font-poppins text-base leading-6 font-medium mb-1">Artikel Terbaru</h2>
                                <p class="text-sm text-gray-350 font-poppins font-normal leading-5">Baca artikel seputar kesehatan</p>
                            </div>
                            <div class="">
                                <img class="w-8 h-8" src="../assets/images/icon_right_background_rounded.svg" alt="">
                            </div>
                        </div>
                        
                        <div class="overflow-x-scroll no-scrollbar">
                            <div class="flex justify-start min-w-max px-3 pb-5 pt-5">
                              
                              <CardArticle img="../../assets/images/article1.png" title="Hidup Sehat" subTitle="Persiapan Vaksin Anak, Apa Saja yang Diperlukan?" date="24 Mei 2022" author="Iqbal Tmvn" />                         
                            
                              <CardArticle img="../../assets/images/article1.png" title="Hidup Sehat" subTitle="Persiapan Vaksin Anak, Apa Saja yang Diperlukan?" date="24 Mei 2022" author="Iqbal Tmvn" />                         
                                                 
                            </div>
                        </div>
                    </div>

                    <div class="pb-16">

                    </div>
                </section>

                  
            
            </div>
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
    .aticle-item {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }

      .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

  
</style>