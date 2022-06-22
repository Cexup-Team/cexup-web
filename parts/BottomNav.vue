<script setup lang="ts">
    const props = defineProps({
        active : {
            type : String
        }
    })

</script>
<template>
  <div class="w-full">
            <div class="navigation fixed z-50 bottom-0 h-14 w-full bg-white">
                <div class="flex justify-between w-full h-full">
                    <nuxt-link to="/" class="w-full h-full relative">
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div :class="props.active === '/' ? 'bg-primary-color rounded-lg p-4' : ''+ ' transition-all duration-200 ease-in-out'">
                                <img v-if="props.active === '/'" src="../assets/images/home_nav_fill.svg" alt="" class="w-4 h-4">
                                <img v-if="props.active !== '/'" src="../assets/images/home_nav.svg" alt="" class="w-5 h-5">
                            </div>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/order" class="w-full h-full relative">
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div :class="props.active === '/order' ? 'bg-primary-color rounded-lg p-4' : ''+ ' transition-all duration-200 ease-in-out'">
                                <img v-if="props.active !== '/order'" src="../assets/images/appointment_nav.svg" alt="" class="w-5 h-5">
                                <img v-if="props.active === '/order'" src="../assets/images/appointment_nav_fill.svg" alt="" class="w-4 h-4">
                            </div>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/pack" class="w-full h-full relative">
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div :class="props.active === '/pack' ? 'bg-primary-color rounded-lg p-4' : ''+ ' transition-all duration-200 ease-in-out'">
                                <img v-if="props.active !== '/pack'" src="../assets/images/packet_nav.svg" alt="" class="w-5 h-5">
                                <img v-if="props.active === '/pack'" src="../assets/images/packet_nav_fill.svg" alt="" class="w-4 h-4">
                            </div>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/profile" class="w-full h-full relative">
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div :class="props.active === '/profile' ? 'bg-primary-color rounded-lg p-4' : ''+ ' transition-all duration-200 ease-in-out'">
                                <img v-if="props.active !== '/profile'" src="../assets/images/user_nav.svg" alt="" class="w-5 h-5">
                                <img v-if="props.active === '/profile'" src="../assets/images/user_nav_fill.svg" alt="" class="w-4 h-4">
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>

        </div>
</template>


<style>

</style>