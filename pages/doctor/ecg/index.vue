<script setup lang="ts">

    import NavBar from '~~/parts/NavBar.vue';
    import HealthStatusVue from "~~/parts/HealthStatus.vue";
    import { useRouter, useRoute } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useMedicalDetailStore } from "~~/stores/medical-detail-store";
    import { aesDecrypt } from "~~/utils/crypto";
    import HealthMedicalFeature from "~~/parts/HealthMedicalFeature.vue";
    import { getFormatNotifDate } from "~~/utils/getFormatDate";

    const $toast = useToast()
    const router = useRouter()
    const route = useRoute()
    const session = useSession()  
    const medical = useMedicalDetailStore()
    const backstack  = history.state.back

    onMounted(async () => {
        const query = route.query.tk
        const user_code = aesDecrypt(query.replaceAll('XMLSUTF39853', '+'))
        try {
            if(!user_code) router.push('/auth')   
            medical.getECG(user_code)
            
        } catch (error) {
            router.push('/auth')
        }
       
    })

    const showEcg = (id) => {
        window.open(`https://medical-record.cexup.com/render/electrocardiogram?id=${id}`, '_blank', 'location=yes,height=970,width=820,scrollbars=yes,status=yes');
    }

</script>

<template>
    <div>
        <nuxt-layout name="medical">
            <div class="medical-record-wrapper">
                <NavBar title="ECG History" :link="backstack" />
                
                <!-- Health Status -->
                <div class="pt-20">
                    
                    <div class="ecg-wrappper">
                        <div class="px-4">
                            <div v-if="!medical.stateEcg.isLoading && medical.stateEcg.isStatus === 'success'">
                                <div v-for="(item, index) in medical.stateEcg.isData.items" :key="index">
                                    <div class="card-ecg border border-gray-250 w-full rounded-xl flex justify-between items-center p-2 mt-4 cursor-pointer" @click="showEcg(item.id)">
                                        <div class="flex items-center">
                                            <div class="w-8 h-8">
                                                <img src="~~/assets/images/feature_record.svg" class="w-full h-full" alt="">
                                            </div>
                                            <p class="font-poppins font-medium text-sm ml-3">{{getFormatNotifDate(item.createdAt /1000)}}</p>
                                        </div>
                                        <div class="w-4 h-4">
                                                <img src="~~/assets/images/arrow_right_gray.svg" alt="">
                                        </div>
                                    </div>
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