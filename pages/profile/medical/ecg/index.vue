<script setup lang="ts">

    import NavBar from '~~/parts/NavBar.vue';
    import HealthStatusVue from "~~/parts/HealthStatus.vue";
    import { useRouter } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useDashboardStore } from '~~/stores/dashboard-store';
    import { useMedicalStore } from "~~/stores/medical-store";
    import { aesDecrypt } from "~~/utils/crypto";
    import HealthMedicalFeature from "../../../../../parts/HealthMedicalFeature.vue";


    const dashboard = useDashboardStore()
    const $toast = useToast()
    const router = useRouter()
    const session = useSession()  
    const medical = useMedicalStore()

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
                <NavBar title="ECG History" link="/profile/medical" />
                
                <!-- Health Status -->
                <div class="pt-24">
                    
                    <div class="ecg-wrappper">
                        <div class="px-4">
                            <div class="card-ecg border border-gray-250 w-full rounded-xl flex justify-between items-center p-2">
                                <div class="flex items-center">
                                    <div class="w-8 h-8">
                                        <img src="~~/assets/images/feature_record.svg" class="w-full h-full" alt="">
                                    </div>
                                    <p class="font-poppins font-medium text-sm ml-3">Monday, 13 Sep 2022 / 10:30</p>
                                </div>
                                <div class="w-4 h-4">
                                        <img src="~~/assets/images/arrow_right_gray.svg" alt="">
                                    </div>
                            </div>

                        </div>
                    </div>
                    
                   

                </div>

            </div>
        </nuxt-layout>
    </div>  
</template>


<style>

</style>