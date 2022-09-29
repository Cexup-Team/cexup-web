<script setup lang="ts">

    interface VitalState {
        systole : string,
        diastole : string,
        height : string,
        weight : string,
        heart : string
    }

    const vital: VitalState = reactive({
        systole : "",
        diastole: "",
        height : "",
        weight : "",
        heart : ""
    })
</script>

<template>
    <div>
         <nuxt-layout name="main">
            <div class="input-vital-wrapper relative">
                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Input Vital Sign</h1>
                        <div></div>
                    </div>
                </div>
                <div class="px-4 mt-24">
                    <h3 class="font-poppins font-medium text-base">What is your BPM</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md" v-model="vital.systole" type="text" placeholder="Systole" />
                    </div>
                    <div class="mt-3">
                        <InputText className="rounded-md" v-model="vital.diastole" type="text" placeholder="Diastole" />
                    </div>
                    <h3 class="font-poppins font-medium text-base mt-6">What is your Height and Weight?</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md pr-12" v-model="vital.height" type="text" placeholder="Height" suffixText="cm" :icon="true" />
                    </div>
                    <div class="mt-3">
                        <InputText className="rounded-md pr-12" v-model="vital.weight" type="text" placeholder="Weight" suffixText="kg" :icon="true" />
                    </div>
                    <h3 class="font-poppins font-medium text-base mt-6">What is your Heart Rate?</h3>
                    <div class="mt-3">
                        <InputText className="rounded-md pr-12" v-model="vital.heart" type="text" placeholder="Heart Rate" suffixText="%" :icon="true" />
                    </div>
                    <div class="mt-6">
                        <Button className="mt-7 w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Save" />
                    </div>
                    <div class="mt-24"></div>
                </div>
            </div>
         </nuxt-layout>
    </div>
</template>


<style>

</style>