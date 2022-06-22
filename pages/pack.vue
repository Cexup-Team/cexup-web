<script setup lang="ts">
    import BottomNav from '~~/parts/BottomNav.vue';
</script>
<template>
    <div>
        <nuxt-layout name="main">
            <BottomNav active="/pack" />
            <div class="pack-wrapper flex justify-center items-center w-full h-screen text-center relative">
                <h1 class="text-2xl font-poppins font-semibold -mt-20">Page is Cooming Soon</h1>
            </div>
        </nuxt-layout>
    </div>
</template>


<style>

</style>