<script setup lang="ts">
   const props = defineProps({
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
        }

    })
</script>

<template>
  <div class="relative">
      <nuxt-link :to="'/auth/register'">
        <img v-if="props.icon === true" class="absolute right-0 left-2 bottom-0" src="../../assets/images/google.svg" alt="">
        <button :class="props.className+ ' focus:outline-none'">{{ props.title }}</button>
      </nuxt-link>
  </div>
</template>

<style>
    img{
        top: 21%;
    }
    
</style>