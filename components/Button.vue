<script setup lang="ts">
  defineProps({
        className: {
            type: [String],
            required : false
        },
        title: {
            type: [String],
            required : false
        },
        icon :{
            type: [Boolean],
            required : false
        },
        src :{
            type :[String],
            required : false
        },
    })
</script>

<template>
    <div class="relative">
    <nuxt-link :to="'/auth'">
        <img v-if="icon === true" class="absolute right-0 left-2 bottom-0" src="../../assets/images/google.svg" alt="">
        <button :class="className+ ' focus:outline-none'">{{ title }}</button>
      </nuxt-link>
    </div>

</template>

<style>
    img{
        top: 21%;
    }
    
</style>