<script setup lang="ts">

    interface ObstetricsState {
        hpht : string,
        fetalWeight : string,
        fundusHeight : string,
        fetalHeartRate : string,
        hb : string,
        urin: string,
        glucose: string,
        arterial: string
    }

    const obstetrics: ObstetricsState = reactive({
        hpht : "",
        fetalWeight: "",
        fundusHeight : "",
        fetalHeartRate : "",
        hb : "",
        urin : "",
        glucose: "",
        arterial: ""
    })
</script>

<template>
    <div>
         <nuxt-layout name="main">
            <div class="input-vital-wrapper relative">
                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Input Obstetrics</h1>
                        <div></div>
                    </div>
                </div>
                <div class="px-4 mt-24">
                    <h3 class="font-poppins font-medium text-base">Gestational age based on HPHT?</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md" type="text" placeholder="HPHT" src="~/assets/images/calendar.svg" :icon="true" select="date" />
                    </div>
                    <h3 class="font-poppins font-medium text-base mt-6">What is the current Fatal Weight?</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md pr-12" v-model="obstetrics.fetalWeight" type="text" placeholder="Fetal Weight" suffixText="gr" :icon="true" />
                    </div>
                    <h3 class="font-poppins font-medium text-base mt-6">What is the current Fundus Height?</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md pr-12" v-model="obstetrics.fundusHeight" type="text" placeholder="Fundus Height" suffixText="cm" :icon="true" />
                    </div>
                    <h3 class="font-poppins font-medium text-base mt-6">What is the fetal heart rate at this time?</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md pr-12" v-model="obstetrics.fetalHeartRate" type="text" placeholder="50" suffixText="min" :icon="true" />
                    </div>
                    <h3 class="font-poppins font-medium text-base mt-6">What is the current value of HB?</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md pr-12" v-model="obstetrics.hb" type="text" placeholder="Hemogloblin" suffixText="mg/dl" :icon="true" />
                    </div>
                    <h3 class="font-poppins font-medium text-base mt-6">Value of the last Urine protein?</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md pr-12" v-model="obstetrics.urin" type="text" placeholder="Urine Protein" />
                    </div>
                    <h3 class="font-poppins font-medium text-base mt-6">Last Glucose Reduction value?</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md pr-12" v-model="obstetrics.glucose" type="text" placeholder="Glucose Reduction" />
                    </div>
                    <h3 class="font-poppins font-medium text-base mt-6">What is the mean Arterial Pressure?</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md pr-12" v-model="obstetrics.arterial" type="text" placeholder="Arterial Pressure" />
                    </div>
                    <div class="mt-6">
                        <Button className="mt-7 w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Save" />
                    </div>
                    
                    <div class="mt-28"></div>
                </div>
            </div>
         </nuxt-layout>
    </div>
</template>


<style>

</style>