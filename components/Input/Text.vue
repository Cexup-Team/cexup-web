
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const props = defineProps({
  className: {
    type: [String],
  },
  type: {
    type: [String],
  },
  placeholder :{
    type: [String]      
  },
  icon :{
    type: [Boolean]
  },
  src :{
    type :[String]
  },
  src_eye :{
    type :[String]
  },
  select: {
    type : [String],
  },
  slc: {
    type : [Boolean],
    default : false
  },
  modelValue: {
    type: [String],
  },
  slcValue : {
    type: [String]
  }

})

let type: Ref<String> = ref('text')

type.value = props.type

const emit = defineEmits(['update:modelValue', 'update:slcValue', 'update:changeOpen'])

function updateValue(event){
  event.type === 'focus' ? emit('update:slcValue', event.target.attributes.typeselect.value) : emit('update:modelValue', event.target.value)
}


function showPassword() {
   if (type.value === "password") {
    type.value = "text";
  } else {
    type.value = "password";
  }
}



</script>
<template>
    <div class="relative wrapper-input-text">
      
      <img :src="props.src" v-if="props.icon === true && type === 'password'" class="img-input-text absolute right-3 z-50 p-1 transition-all duration-300" alt="" @click="showPassword">
      <img :src="props.src_eye" v-if="props.icon === true && type === 'text'" class="img-input-text absolute right-3 z-50 p-1 transition-all duration-300" alt="" @click="showPassword">
      <input v-if="props.slc === false" :type="type" :value="modelValue" v-on:input="updateValue" placeholder=" " :class="'input-text outline-none border border-gray-150 w-full bg-none p-4  font-poppins text-sm absolute top-0 left-0 h-full '+props.className" />
      <input v-if="props.slc === true" :typeselect="props.select"  :type="type" :value="modelValue" v-on:focus="updateValue" placeholder=" " :class="'input-text outline-none border border-gray-150 w-full bg-none p-4  font-poppins text-sm absolute top-0 left-0 h-full '+props.className" readonly />
   
      <label for="" class="label-text absolute font-poppins pointer-events-none left-4 top-4 px-1 text-gray-350 bg-white text-sm transition-all duration-300">{{props.placeholder}}</label> 
    </div>
</template>

<style>
    .wrapper-input-text {
      height: 52px;
    }

    .input-text:focus ~ .label-text{
      outline: none;
      top: -.5rem;
      left: .8rem;
      color: #8A8A8E;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .input-text:not(:placeholder-shown) ~ .label-text {
      outline: none;
      top: -.5rem;
      left: .8rem;
      color: #8A8A8E;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .input-text:not(:placeholder-shown) {
      border: 1px solid #008CA3;
    }

    .input-text:focus {
      border: 1px solid #008CA3;
    }

    .img-input-text {
        top: 28%;
    }

</style>