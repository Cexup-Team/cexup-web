
<script>
export default {

}
</script>
<template>
  <div class="feature">
        <div class="feature-list no-scrollbar overflow-x-auto whitespace-nowrap w-full">
                <div class="slide-feature flex ml-4 w-full pt-6 pb-6">

                    <CardMedicalFeature icon="../../assets/images/feature_call.svg"  title="Rontgen" />

                    <CardMedicalFeature icon="../../assets/images/feature_meet.svg"  title="Labtest" />

                    <CardMedicalFeature icon="../../assets/images/feature_tracker.svg"  title="Medicine" />

                    <CardMedicalFeature icon="../../assets/images/feature_record.svg"  title="Note" />
                    <CardMedicalFeature icon="../../assets/images/feature_monitor.svg"  title="ECG" />
                    
                    <CardMedicalFeature icon="../../assets/images/feature_monitor.svg"  title="USG" />
                    
                    <CardMedicalFeature icon="../../assets/images/feature_monitor.svg"  title="SOAP" />
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