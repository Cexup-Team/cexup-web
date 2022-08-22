<script setup lang="ts">
</script>
<template>
    <div class="card-doctor pr-3">
        <div class="card-item w-36 mt-4 rounded-lg bg-white overflow-hidden h-56">
            <div class=" bg-gray-400 h-32 w-full object-cover object-center animate-pulse mb-3"></div>
            <div class="px-3">
                <p class="leading-relaxed mb-4 w-full h-5 animate-pulse bg-gray-400"></p>
                <p class="leading-relaxed mb-6 w-3/4 h-3 animate-pulse bg-gray-200"></p>
                <p class="leading-relaxed mb-3 w-2/4 h-4 animate-pulse bg-primary-color"></p>
            </div>
        </div>
    </div>
</template>


<style>
    .card-item {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        height: 260px;
    }
</style>