<script setup lang="ts">
     import BottomNav from '~~/parts/BottomNav.vue';
      let openModal: Ref<boolean> = ref(false)

      const changeOpen = (value) => {
        openModal.value = value
    }


    const changeSelect = (value) => {
        // state.gender = value
        console.log(value)
    }

    const slcValue = (value) => {
        openModal.value = true
    }
</script>
<template>
    <div>
        <nuxt-layout name="main">
            <div class="profile-wrapper h-full relative w-full">
         

                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Account Settings</h1>
                        <div></div>
                    </div>
                </div>
                <section class="settings-profile px-4 pt-20 relative bg-blue-50 h-screen">
                   
                    <div class="bg-white rounded-lg px-4 w-full">
                        <MoreProfile img="" title="Delete Account" />
                        <hr>
                        <MoreProfile img="" title="Change Password" />
                    </div>
                    <button @click="slcValue" class="mt-7 py-4 w-full text-center bg-white col-start-auto text-red-650 font-poppins font-medium text-base border border-gray-225 rounded-xl outline-none">Logout</button> 
                </section>
                
                <BottomSheet :openModal="openModal" @update:change-open="changeOpen" @update:change-select="changeSelect" type="blank">
                    <template v-slot:bottomSheet>
                        <div class="">
                            <h2 class="w-full text-center text-base font-poppins font-medium">Are you sure want <br> to logout</h2>
                            <div class="flex justify-between items-center mt-10 mb-5">

                                
                                    <button class="font-poppins text-base text-primary-color border border-primary-color bg-white rounded-xl py-3 w-full mr-3">Yes</button>
                                
                                    <button class="font-poppins text-base bg-primary-color text-white rounded-xl py-3 w-full">No</button>
                                
                            </div>
                        </div>
                    </template>
                </BottomSheet>

            </div>

        </nuxt-layout>
    </div>
</template>


<style>

      @media only screen and (min-width: 700px) {
        .nav-bar {
            top: 0;
            left: 50%; 
            margin-left: -255px;
            width: 510px;   

        }
    }

</style>