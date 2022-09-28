
<script setup lang="ts">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';

    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
</script>
<template>
  <div class="feature mt-6">
        <div class="flex justify-between items-center mb-4 px-4">
            <h2 class="text-white font-poppins text-base leading-6 font-medium">Layanan Kesehatan</h2>
            <div class="flex bg-blue-350 px-3 py-1 rounded-md">
                <p class="text-white font-poppins text-sm font-medium leading-5 mr-2">See All</p>
                <img src="../assets/images/arrow_right.svg" alt="">
            </div>
        </div>
            <!-- <div class="feature-list no-scrollbar overflow-x-auto whitespace-nowrap w-full">
                <div class="slide-feature flex ml-4 w-full">
                    <CardFeature icon="../../assets/images/feature_call.svg" title1="Tele" title2="Consultation" link="/teleconsultation" />
                    <CardFeature icon="../../assets/images/feature_monitor.svg" title1="Tele" title2="Monitoring" link="/telemonitoring" />
                    <CardFeature icon="../../assets/images/feature_meet.svg" title1="Clinic" title2="Reservation" />
                    <CardFeature icon="../../assets/images/feature_tracker.svg" title1="Health" title2="Tracker" />
                    <CardFeature icon="../../assets/images/feature_record.svg" title1="Medical" title2="Record" link="/profile/medical" />
                </div>
            </div> -->

        <swiper
            :slides-per-view="4"
            :space-between="90"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide class="ml-4">
                <CardFeature icon="../../assets/images/feature_call.svg" title1="Tele" title2="Consultation" link="/teleconsultation" />
            </swiper-slide>
            <swiper-slide class="">
                <CardFeature icon="../../assets/images/feature_monitor.svg" title1="Tele" title2="Monitoring" link="/telemonitoring" />
            </swiper-slide>
            <swiper-slide>
                <CardFeature icon="../../assets/images/feature_meet.svg" title1="Clinic" title2="Reservation" />
            </swiper-slide>
            <swiper-slide>
                <CardFeature icon="../../assets/images/feature_tracker.svg" title1="Health" title2="Tracker" />
            </swiper-slide>
            <swiper-slide class="">
                <CardFeature icon="../../assets/images/feature_record.svg" title1="Medical" title2="Record" link="/profile/medical" />
            </swiper-slide>  
            
            <swiper-slide class="">
                <div class=""></div>
            </swiper-slide>  
            
            </swiper>
    </div>
</template>

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
        
</style>