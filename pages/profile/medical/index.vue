<script setup lang="ts">

    import NavBar from '~~/parts/NavBar.vue';
    import HealthStatusVue from "~~/parts/HealthStatus.vue";
    import { useRouter } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useDashboardStore } from '~~/stores/dashboard-store';
    import { useMedicalStore } from "~~/stores/medical-store";
    import { aesDecrypt } from "~~/utils/crypto";
import HealthMedicalFeature from "../../../parts/HealthMedicalFeature.vue";


    const dashboard = useDashboardStore()
    const $toast = useToast()
    const router = useRouter()
    const session = useSession()  
    const medical = useMedicalStore()
    const backstack = history.state.back

    onMounted(async () => {
        const user = await JSON.parse(aesDecrypt(session.getItem("cexup-user")))
        dashboard.state.name = user.name 
        dashboard.getLatestVitalSign(user.user_code)
        dashboard.getCurrentEWS(user.user_code)  
    })

</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="medical-record-wrapper">
                <NavBar title="Medical Record" :link="backstack" />
                
                <!-- Health Status -->
                <div class="pt-24">
                    
                    <div class="w-full px-6 flex justify-between items-center">
                        <h2 class="font-poppins text-sm font-semibold">Health Status</h2>
                        <nuxt-link class="text-primary-color text-sm font-poppins font-semibold" to="/profile/medical/detail">Details</nuxt-link>
                    </div>
                    <div v-if="dashboard.stateVitalSign.isLoading && dashboard.stateCurrentEWS.isLoading">
                        <ShimmerHealthStatus />
                    </div>
                    <div v-if="!dashboard.stateVitalSign.isLoading && dashboard.stateVitalSign.isStatus === 'success' && !dashboard.stateCurrentEWS.isLoading && dashboard.stateCurrentEWS.isStatus === 'success'" class="">
                        <HealthStatusVue :vital="dashboard.stateVitalSign.isData" :ews="dashboard.stateCurrentEWS.isData" />
                    </div>

                    <HealthMedicalFeature />
                    
                   

                </div>

            </div>
        </nuxt-layout>
    </div>  
</template>


<style>

</style>