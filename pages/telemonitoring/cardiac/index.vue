<script setup lang="ts">
    import BottomNav from '~~/parts/BottomNav.vue';
    import NavBar from '~~/parts/NavBar.vue';
    import { useCardiactore } from '~~/stores/cardiac-store';
    import { useRouter } from 'vue-router';
    import { ref } from "vue";

    const cardiac = useCardiactore()

    const select = ref(null)
    onMounted(async () => {
        await cardiac.getHaasbledd()  
    })

    watch(() => cardiac.state.select, (newSelect) => {
        newSelect === 'haasbledd' ? cardiac.getHaasbledd() : cardiac.getChadsvas()
    })

    function capitalizeFirstLetter(string) {
        // return string.charAt(0).toUpperCase() + string.slice(1);
        let words = ''
        const split = string.split("_")
        split.map((item, index) => {{
            words += item.charAt(0).toUpperCase() + item.slice(1) + " "
        }})

        return words
    }





</script>
<template>
   <div>
       <nuxt-layout name="main">
           <div class="profile-wrapper h-full relative w-full">

               <NavBar title="Cardiac Tracker" link="/telemonitoring" />
               <div class="pt-24 px-4">
                   <div class="p-4 bg-blue-50 px-6 w-full rounded-lg">
                        <h2 class="font-poppins text-xs py-2 font-semibold">Recommendation :</h2>
                        <ul class="mt-4">
                            <li class="flex items-start">
                                <div class="w-auto">
                                    <div class="h-1 w-1 rounded-full bg-gray-900 mt-2 ml-2 mr-3"></div>
                                </div>
                                <span class="w-full text-xs font-poppins col-span-11">Check ECG once a week at 7-9 am.</span>
                            </li>
                        </ul>
                    </div>
                    <section>
                        <div class="rounded-xl overflow-hidden mt-6 cardiac-card-body bg-white" v-if="!cardiac.state.isLoading && cardiac.state.isStatus === 'success'">
                            <div class="bg-primary-color w-full text-center py-3">
                                <h2 class="font-poppins font-semibold text-white text-sm">Risk Score</h2>  
                            </div>

                            <div class="px-4">
                                <select class="w-full font-poppins text-sm px-3 border border-gray-150 py-2 rounded-lg mt-4 selection:border-gray-150" v-model="cardiac.state.select">
                                    <option selected value="haasbledd" class="font-poppins text-sm pointer-events-none border border-gray-150">Hasbled Score For AF</option>
                                    <option value="chadsvas" class="font-poppins text-sm pointer-events-none border border-gray-150">CHA2DS2-VASc Score For AF</option>
                                </select>
                            </div>

                            <div class="border border-gray-150 m-4 rounded-xl px-4" v-for="(item1, index1) in cardiac.state.isData" :key="index1">
                                <div class="text-center pt-3 pb-2 border-b border-gray-150" v-for="(item2, name, index2) in item1" :key="index2">
                                    <h3 class="font-poppins text-sm">{{name ===  'created_at' ? 'Created Date' : capitalizeFirstLetter(name)}}</h3>
                                    <h4 class="text-primary-color font-poppins font-semibold text-sm mt-2">{{item2}}</h4>
                                </div>

                                <!-- <div class="text-center pt-3 pb-2 border-b border-gray-150">
                                    <h3 class="font-poppins text-sm">Risk Category</h3>
                                    <h4 class="text-primary-color font-poppins font-semibold text-sm mt-2">High Risk*</h4>
                                </div>
                                <div class="text-center pt-3 pb-2">
                                    <h3 class="font-poppins text-sm">Estimated Vascular Age</h3>
                                    <h4 class="text-primary-color font-poppins font-semibold text-sm mt-2">28.5%*</h4>
                                </div> -->
                            </div>
                        </div>
                        <!-- <div class="rounded-xl overflow-hidden mt-6 cardiac-card-body bg-white">
                            <div class="bg-primary-color w-full text-center py-3">
                                <h2 class="font-poppins font-semibold text-white text-sm">Hasbled Score For AF</h2>  
                            </div>
                            <div class="border border-gray-150 m-4 rounded-xl px-4">
                                <div class="text-center pt-3 pb-2 border-b border-gray-150">
                                    <h3 class="font-poppins text-sm">Estimated 10-year Global CVD Risk</h3>
                                    <h4 class="text-primary-color font-poppins font-semibold text-sm mt-2">28.5%*</h4>
                                </div>

                                <div class="text-center pt-3 pb-2 border-b border-gray-150">
                                    <h3 class="font-poppins text-sm">Risk Category</h3>
                                    <h4 class="text-primary-color font-poppins font-semibold text-sm mt-2">High Risk*</h4>
                                </div>
                                <div class="text-center pt-3 pb-2">
                                    <h3 class="font-poppins text-sm">Estimated Vascular Age</h3>
                                    <h4 class="text-primary-color font-poppins font-semibold text-sm mt-2">28.5%*</h4>
                                </div>
                            </div>
                        </div> -->

                        <div class="pt-20"></div>

                        
                    </section>
               </div>
     
            

           </div>

       </nuxt-layout>
   </div>
</template>


<style>


   .cardiac-card-body {
       box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.09);
   }

     @media only screen and (min-width: 520px) {
       .nav-bar {
           top: 0;
           left: 50%; 
           margin-left: -255px;
           width: 510px;   

       }
   }

</style>