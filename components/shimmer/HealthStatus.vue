
<script setup lang="ts">


</script>
<template>
  <div class="health-status mx-5 z-10 mt-6 h-44">
        <div class="bg-white w-full px-3 pt-2 pb-6 rounded-lg h-full">
            <div class="flex flex-col">
                <div class="w-full flex">
                    <div class="w-2/6 flex justify-center items-center">
                        <div class=" bg-gray-400 h-28 w-full object-cover object-center animate-pulse mb-2 rounded-full mt-2" style="width: 71px; height: 63px;"></div>
                    </div>
                    <div class="w-2/6 flex justify-center items-center">
                        <div class="flex flex-col justify-center items-center">
                            <div class="blood flex flex-col text-center">
                                <h4 class="text-gray-350 font-poppins font-normal text-xs">Blood Preasure</h4>
                                <p class="leading-relaxed w-full h-3 animate-pulse bg-primary-color mt-1"></p>
                            </div>
                        </div>
                    </div>


                    <div class="w-2/6 flex justify-center items-center">
                        <div class="flex flex-col justify-center items-center bgred">
                            <div class="spo flex flex-col text-center">
                                <h4 class="text-gray-350 font-poppins font-normal text-xs">SpO2</h4>
                                <p class="leading-relaxed w-full h-3 animate-pulse bg-primary-color mt-1"></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="w-full flex">
                    <div class="w-2/6">
                            <div class="flex flex-col justify-center items-center">
                            <div class="spo flex flex-col text-center">
                                <h4 class="text-gray-350 font-poppins font-normal text-xs">Heart Rate</h4>
                                <p class="leading-relaxed w-full h-3 animate-pulse bg-primary-color mt-1"></p>
                            </div>
                        </div>
                    </div>
                    <div class="w-2/6">
                            <div class="flex flex-col justify-center items-center">
                            <div class="spo flex flex-col text-center">
                                <h4 class="text-gray-350 font-poppins font-normal text-xs">Temparature</h4>
                                <p class="leading-relaxed w-full h-3 animate-pulse bg-primary-color mt-1"></p>
                            </div>
                        </div>
                    </div>
                    <div class="w-2/6">
                            <div class="flex flex-col justify-center items-center">
                            <div class="spo flex flex-col text-center">
                                <h4 class="text-gray-350 font-poppins font-normal text-xs">Respiration</h4>
                                <p class="leading-relaxed w-full h-3 animate-pulse bg-primary-color mt-1"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>