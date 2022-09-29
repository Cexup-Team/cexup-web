
<script setup lang="ts">
    defineProps({
        title : {
            type: String
        },
        link : {
            type: String
        }
    })
</script>
<template>
    <div :class="title === 'Order' ? '' :'nav-bar fixed bg-white w-full z-30 top-0 pb-4'">
                    
        <div class="flex justify-between mt-7 mx-6 items-center">
            <nuxt-link :to="link">
                <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">

            </nuxt-link>
            <h1 class="font-poppins text-xl font-semibold">{{title}}</h1>
            <div>
                <nuxt-link to="/profile/more" v-if="title === 'Profile'">
                    <img src="~/assets/images/more_profile_icon.svg" class="w-2 h-4 cursor-pointer" alt="">
                </nuxt-link>
            </div>
        </div>
    </div>
</template>


<style>

</style>