<script setup lang="ts">

    import HealthStatusVue from "../parts/HealthStatus.vue";
    import HealthFeatureVue from "../parts/HealthFeature.vue";
    import BottomNav from '~~/parts/BottomNav.vue';
    import { useRouter } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useDashboardStore } from '~~/stores/dashboard-store';
    import { aesDecrypt } from "~~/utils/crypto";


    const dashboard = useDashboardStore()
    const $toast = useToast()
    const router = useRouter()
    const session = useSession()    

    onMounted(async () => {
        const user = await JSON.parse(aesDecrypt(session.getItem("cexup-user")))
        session.delItem('cexup-checkout')
        session.delItem('cexup-quiz')
        dashboard.state.name = user.name
        dashboard.state.address = `${user.current_address}, ${user.current_provinces_name}`
        dashboard.getListDoctor(4)
        dashboard.getListProduct("")
        dashboard.getListArticle("")
        dashboard.getLatestVitalSign(user.user_code)
        dashboard.getCurrentEWS(user.user_code)        
    })
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
                            <h1 class="font-poppins text-white font-semibold text-base leading-6">Hi, {{dashboard.state.name}} <span>👋</span> </h1>
                            <h2 class="flex items-center justify-start text-white text-sm font-normal"><span class="mr-1"><img src="../assets/images/place_icon.svg" alt=""></span> {{dashboard.state.address}} <span class="ml-2"><img src="../assets/images/arrow_right.svg" alt=""></span></h2>
                        </div>
                        <nuxt-link to="/inbox/notification" class="rounded-full">
                            <div class="w-3 h-3 bg-red-650 absolute z-20 rounded-full border-2 border-white"></div>
                            <img src="../assets/images/bell_icon.svg" alt="">
                        </nuxt-link>
                    </div>

                    <!-- Health Status -->
                    <div v-if="dashboard.stateVitalSign.isLoading && dashboard.stateCurrentEWS.isLoading">
                        <ShimmerHealthStatus />
                    </div>
                    <div v-if="!dashboard.stateVitalSign.isLoading && dashboard.stateVitalSign.isStatus === 'success' && !dashboard.stateCurrentEWS.isLoading && dashboard.stateCurrentEWS.isStatus === 'success'">
                        <HealthStatusVue :vital="dashboard.stateVitalSign.isData" :ews="dashboard.stateCurrentEWS.isData" />
                    </div>


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
                            <nuxt-link to="/teleconsultation" class="">
                                <img class="w-8 h-8" src="../assets/images/icon_right_background_rounded.svg" alt="">
                            </nuxt-link>
                        </div>
                        <div class="doctor-list w-full mb-4">
                            
                            <div v-if="dashboard.stateDoctor.isLoading">
                                <div class="slide-doctor pl-4 transform no-scrollbar overflow-auto flex justify-start pb-6">
                                    <div v-for="(i, index) in 4" :key="index">
                                        <ShimmerCardDoctor />
                                    </div>
                                </div>
                            </div>
                            
                            <div v-if="!dashboard.stateDoctor.isLoading && dashboard.stateDoctor.isStatus === 'success'">
                                <div class="slide-doctor pl-4 transform no-scrollbar overflow-auto flex justify-start pb-6">                                    
                                    <div v-for="(item, index) in dashboard.stateDoctor.isData" :key="index">
                                        <CardDoctor :title="item.name" :subTitle="item.speciality" :price="item.hospital[0].online_price" :icon="item.thumb" :link="`/teleconsultation/doctor/${item.slug}`" />
                                    </div>
                                </div>
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
                            <div v-if="dashboard.stateDoctor.isLoading">
                                <div class="slide-doctor pl-4 transform no-scrollbar overflow-auto flex justify-start pb-6">
                                    <div v-for="(i, index) in 4" :key="index">
                                        <ShimmerCardDoctor />
                                    </div>
                                </div>
                            </div>
                            
                            <div v-if="!dashboard.stateProduct.isLoading && dashboard.stateProduct.isStatus === 'success'">
                                <div class="slide-doctor transform no-scrollbar overflow-auto flex justify-start pb-6 pl-4">                                    
                                    <div v-for="(item, index) in dashboard.stateProduct.isData" :key="index" class="">
                                        <CardDoctor :title="item.title" :subTitle="item.category" :price="item.price" :icon="item.thumb" :link="item.link" type="product" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>

                    <div class="article">
                        <div class="flex justify-between items-center w-full px-4">
                            <div class="">
                                <h2 class="font-poppins text-base leading-6 font-medium mb-1">Artikel Terbaru</h2>
                                <p class="text-sm text-gray-350 font-poppins font-normal leading-5">Baca artikel seputar kesehatan</p>
                            </div>
                            <nuxt-link class="" to="/article">
                                <img class="w-8 h-8" src="../assets/images/icon_right_background_rounded.svg" alt="">
                            </nuxt-link>
                        </div>
                        
                        <div class="overflow-x-scroll no-scrollbar">
                            <div v-if="!dashboard.stateProduct.isLoading && dashboard.stateProduct.isStatus === 'success'">
                            <div class="flex justify-start min-w-max px-3 pb-5 pt-5">
                                <div v-for="(item, index) in dashboard.stateArticle.isData" :key="index" class="">
                                    <CardArticle :img="item.thumb" :title="item.category" :subTitle="item.title" date="24 Mei 2022" author="Iqbal Tmvn" />                         
                                </div>  
                            </div>
                            </div>


                            <div v-if="dashboard.stateProduct.isLoading">
                                <div class="flex justify-start min-w-max px-3 pb-5 pt-5">
                                    <div v-for="(i, index) in 4" :key="index">
                                        <ShimmerCardArticle />
                                    </div> 
                                </div>
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

    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;  
    }

  
</style>