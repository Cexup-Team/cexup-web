<script setup lang="ts">

    import NavBar from '~~/parts/NavBar.vue';
    import HealthStatusVue from "~~/parts/HealthStatus.vue";
    import { useRouter } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useOrderStore } from '~~/stores/order-store';
    import { useMedicalStore } from "~~/stores/medical-store";
    import { aesDecrypt } from "~~/utils/crypto";
    import HealthMedicalFeature from "../../../../../parts/HealthMedicalFeature.vue";


    const order = useOrderStore()
    const $toast = useToast()
    const router = useRouter()
    const session = useSession()  
    const medical = useMedicalStore()

    onMounted(async () => {
        const user = await JSON.parse(aesDecrypt(session.getItem("cexup-user")))
        order.getListOrder("call", "finish", user.user_id)
    })

</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="medical-record-wrapper">
                <NavBar title="SOAP" link="/profile/medical/soap" />
                
                <!-- Health Status -->
                <div class="pt-24">
                    
                    <div v-if="order.stateOrder.isLoading">
                        <div v-for="(item, index) in 5" :key="index">
                            <ShimmerCardOrder />
                        </div>
                    </div>

                    <div v-if="!order.stateOrder.isLoading && order.stateOrder.isStatus === 'success'">
                        <div v-for="(item, index) in order.stateOrder.isData" :key="index">
                            <CardOrder :order="item" />
                        </div>
                    </div>
                </div>

                <div class="pt-24">

                </div>

            </div>
        </nuxt-layout>
    </div>  
</template>


<style>

</style>