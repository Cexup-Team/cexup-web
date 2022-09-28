<script setup lang="ts">

    import NavBar from '~~/parts/NavBar.vue';
    import { useRouter } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { aesDecrypt } from "~~/utils/crypto";
    import { getFormatNotifDate } from "~~/utils/getFormatDate";

    const $toast = useToast()
    const router = useRouter()
    const session = useSession()  
    

    onMounted(async () => {
    })


</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="medical-record-wrapper">
                <NavBar title="Clinic Reservation" link="/" />
                
                <!-- Health Status -->
                <div class="pt-20">
                    
                    <div class="w-full h-screen flex justify-center items-center">
                        <h1 class="font-poppins font-semibold text-2xl text-center">Available on Android App</h1>
                    </div>
                </div>
            </div>
        </nuxt-layout>
    </div>  
</template>


<style>

</style>