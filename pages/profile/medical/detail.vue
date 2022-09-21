<script setup lang="ts">
   
    import NavBar from "~~/parts/NavBar.vue";
    import DetailHealthStatus from "~~/components/card/DetailHealthStatus.vue";
    import { useRouter } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useDashboardStore } from '~~/stores/dashboard-store';
    import { useMedicalDetailStore } from "~~/stores/medical-detail-store";
    import { aesDecrypt } from "~~/utils/crypto";
    import HealthMedicalFeature from "../../../parts/HealthMedicalFeature.vue";


    const dashboard = useDashboardStore()
    const $toast = useToast()
    const router = useRouter()
    const session = useSession()  
    const medical = useMedicalDetailStore()

    onMounted(async () => {
        const user = await JSON.parse(aesDecrypt(session.getItem("cexup-user")))
        medical.getTemperature(user.user_code)
        medical.getSPO2(user.user_code)
        medical.getHeartRate(user.user_code)
        medical.getRespiration(user.user_code)
        medical.getBloodPressure(user.user_code)
    })

    onUnmounted(() => {
        medical.stateBloodPressure.isSystole =  []
        medical.stateBloodPressure.isDiastole =  []
        medical.stateBloodPressure.isTime =  []

        medical.stateHeartRate.isArray =  []
        medical.stateHeartRate.isTime =  []

        
        medical.stateSpo2.isArray =  []
        medical.stateSpo2.isTime =  []

        
        medical.stateTemperature.isArray =  []
        medical.stateTemperature.isTime =  []

        
        medical.stateRespiration.isArray =  []
        medical.stateRespiration.isTime =  []

    })
</script>
<template>
    <div>
        <nuxt-layout name="main">
            <div class="medical-record-detail-wrapper">
                <NavBar title="Detail Health Data" />
                <div class="pt-24">
                   
                    <div v-if="!medical.stateBloodPressure.isLoading && medical.stateBloodPressure.isStatus === 'success'">
                        <DetailHealthStatus :data="medical.stateBloodPressure.isSystole" :time="medical.stateBloodPressure.isTime" title="Systole" :min="80" :max="170" />
                    </div>

                    <div v-if="!medical.stateBloodPressure.isLoading && medical.stateBloodPressure.isStatus === 'success'">
                        <DetailHealthStatus :data="medical.stateBloodPressure.isDiastole" :time="medical.stateBloodPressure.isTime" title="Diastole" :min="60" :max="120" />
                    </div>
                    
                    <div v-if="!medical.stateTemperature.isLoading && medical.stateTemperature.isStatus === 'success'">
                        <DetailHealthStatus :data="medical.stateTemperature.isArray" :time="medical.stateTemperature.isTime" title="Temperature" :min="20" :max="50" />
                    </div>

                    <div v-if="!medical.stateSpo2.isLoading && medical.stateSpo2.isStatus === 'success'" class="mt-3">
                        <DetailHealthStatus :data="medical.stateSpo2.isArray" :time="medical.stateSpo2.isTime" title="SPO 2" :min="80" :max="120" />
                    </div>

                    <div v-if="!medical.stateHeartRate.isLoading && medical.stateHeartRate.isStatus === 'success'" class="mt-3">
                        <DetailHealthStatus :data="medical.stateHeartRate.isArray" :time="medical.stateHeartRate.isTime" title="Heart Rate" :min="50" :max="110" />
                    </div>

                    <div v-if="!medical.stateRespiration.isLoading && medical.stateRespiration.isStatus === 'success'" class="mt-3">
                        <DetailHealthStatus :data="medical.stateRespiration.isArray" :time="medical.stateRespiration.isTime" title="Heart Rate" :min="0" :max="30" />
                    </div>

                    
                </div>
            </div>
        </nuxt-layout>
    </div>
</template>


<style>

</style>