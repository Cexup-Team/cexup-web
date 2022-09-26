<script setup lang="ts">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';

    defineProps({
        role: {
            type: String
        },
        tk: {
            type: String
        }
    })


    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

</script>
<template>
  <div class="feature mt-4">
        <!-- <div class="feature-list no-scrollbar overflow-x-auto whitespace-nowrap w-full transition-all duration-300">
                <div class="relative slide-feature flex ml-4 w-full pt-6 pb-6">

                    
            </div>
        </div> -->
        


        <swiper
            :slides-per-view="5"
            :space-between="25"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide class="ml-4">
                <CardMedicalFeature icon="../../assets/images/feature_call.svg"  title="Rontgen" />
            </swiper-slide>
            <swiper-slide>
                <CardMedicalFeature icon="../../assets/images/feature_meet.svg"  title="Labtest" />
            </swiper-slide>
            <swiper-slide>
                <CardMedicalFeature icon="../../assets/images/feature_tracker.svg"  title="Medicine" />
            </swiper-slide>
            <swiper-slide>
                <CardMedicalFeature icon="../../assets/images/feature_record.svg"  title="Note" />
            </swiper-slide>
            <swiper-slide>
                <CardMedicalFeature icon="../../assets/images/feature_monitor.svg"  title="ECG" :link="role === 'doctor' ? '/doctor/ecg?tk='+tk+'&role=doctor' : '/profile/medical/ecg'" />
            </swiper-slide>  
            <swiper-slide> 
                <CardMedicalFeature icon="../../assets/images/feature_monitor.svg"  title="USG" />
            </swiper-slide>
            <!-- <swiper-slide>
                <CardMedicalFeature icon="../../assets/images/feature_monitor.svg"  title="SOAP" :link="role === 'doctor' ? '/doctor/soap?tk='+tk+'&role=doctor' : '/profile/medical/soap'" />
            </swiper-slide> -->
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