<script setup lang="ts">


    import NavBar from '~~/parts/NavBar.vue';
    import HealthStatusVue from "~~/parts/HealthStatus.vue";
    import { useRouter, useRoute } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useDashboardStore } from '~~/stores/dashboard-store';
    import { useMedicalStore } from "~~/stores/medical-store";
    import { aesDecrypt } from "~~/utils/crypto";
import HealthMedicalFeature from "~~/parts/HealthMedicalFeature.vue";


    const dashboard = useDashboardStore()
    const $toast = useToast()
    const router = useRouter()
    const route = useRoute()
    const session = useSession()  
    const medical = useMedicalStore()

    let tk: Ref<string> = ref('')
    let statusTk:  Ref<string> = ref('idle')
        const tokenQuery = route.query.tk
    onMounted(async () => {
        const query = route.query.tk
        const user_code = aesDecrypt(query.replaceAll('XMLSUTF39853', '+'))
        try {
            if(!user_code) router.push('/auth')   
            dashboard.getLatestVitalSign(user_code)
            dashboard.getCurrentEWS(user_code)  
            
        } catch (error) {
            router.push('/auth')
        }
        // const user = await JSON.parse(aesDecrypt(session.getItem("cexup-user")))
        // dashboard.state.name = user.name
      
    })

</script>

<template>
    <div>
        <nuxt-layout name="medical">
            <div class="medical-record-wrapper">
                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-7 mx-6 items-center">
                        <div></div>
                        <h1 class="font-poppins text-xl font-semibold">Medical Record</h1>
                        <div>
                            
                        </div>
                    </div>
                </div>
                
                <!-- Health Status -->
                <div class="pt-24">
                    
                    <div class="w-full px-6 flex justify-between items-center">
                        <h2 class="font-poppins text-sm font-semibold">Health Status</h2>
                        <nuxt-link class="text-primary-color text-sm font-poppins font-semibold" :to="'/doctor/detail?tk='+tokenQuery">Details</nuxt-link>
                    </div>
                    <div v-if="dashboard.stateVitalSign.isLoading && dashboard.stateCurrentEWS.isLoading">
                        <ShimmerHealthStatus />
                    </div>
                    <div v-if="!dashboard.stateVitalSign.isLoading && dashboard.stateVitalSign.isStatus === 'success' && !dashboard.stateCurrentEWS.isLoading && dashboard.stateCurrentEWS.isStatus === 'success'" class="">
                        <HealthStatusVue :vital="dashboard.stateVitalSign.isData" :ews="dashboard.stateCurrentEWS.isData" role="doctor" :tk="tokenQuery" />
                    </div>

                    <HealthMedicalFeature role="doctor" :tk="tokenQuery" />
                    
                   

                </div>

            </div>
        </nuxt-layout>
    </div>  
</template>


<style>

</style>