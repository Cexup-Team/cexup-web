<script setup lang="ts">
     import BottomNav from '~~/parts/BottomNav.vue';
</script>
<template>
    <div>
        <nuxt-layout name="main">
            <div class="profile-wrapper h-full relative w-full">

                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">More</h1>
                        <div></div>
                    </div>
                </div>
                <section class="history-profile px-4 pt-20 relative bg-blue-50 h-screen">
                    <div>
                        <div class="bg-white rounded-lg px-4 w-full">
                           <MoreProfile link="/profile/settings" img="../assets/images/icon_setting.svg" title="Account Settings" alt="img account" />
                            <hr>
                            <MoreProfile img="../assets/images/icon_give_rating.svg" title="Give Rating" alt="img give rating" />
                        </div>
                    </div>              
                </section>

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