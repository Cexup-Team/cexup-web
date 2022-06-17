
<script>
export default {

}
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
            <div class="feature-list no-scrollbar overflow-x-auto whitespace-nowrap w-full">
                <div class="slide-feature flex ml-4 w-full">

                    <CardFeature icon="../../assets/images/feature_call.svg" title1="Call" title2="Doctor" />

                    <CardFeature icon="../../assets/images/feature_meet.svg" title1="Meet" title2="Doctor" />

                    <CardFeature icon="../../assets/images/feature_tracker.svg" title1="Health" title2="Tracker" />

                    <CardFeature icon="../../assets/images/feature_record.svg" title1="Medical" title2="Record" />
                    <CardFeature icon="../../assets/images/feature_monitor.svg" title1="Health" title2="Monitor" className="s" />
            </div>
        </div>
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