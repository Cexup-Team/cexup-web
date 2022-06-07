<script setup lang="ts">
    defineProps({
        title: {
            type: [String],
            required : false
        },
        modelValue: {
            type: [Boolean],
        },
    })

    const emit = defineEmits(['update:modelValue'])

    function updateValue(event){
        emit('update:modelValue', event.target.checked)
    }
 
</script>
<template>
    <div class="block relative pl-6 cursor-pointer text-xs"> <span class="font-poppins font-medium text-gray-350">{{ title }}</span> 
        <label class="wrapper-checkbox">
        <input type="checkbox" class="absolute opacity-0 cursor-pointer h-0 w-0" :value="modelValue" v-on:input="updateValue">
        <span class="checkmark absolute top-0 left-0 h-4 w-4 bg-white"></span>
        </label>
    </div>
</template>


<style>

    /* .input-checkbox {
        outline: 2px solid #D8D8D8;

    }
    .input-checkbox:checked {
        background-color: #008CA3;
        outline: 2px solid #008CA3;
        border-radius: 2px;
    } */

    .wrapper-checkbox {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
  
    }

    input ~ .checkmark {
        background-color: #fff;
        outline: 2px solid #D8D8D8;
    }


    .wrapper-checkbox:hover input ~ .checkmark {
        background-color: #fff;
        outline: 2px solid #D8D8D8;
    }


    .wrapper-checkbox input:checked ~ .checkmark {
        background-color: #008CA3;
          outline: 2px solid #008CA3;
    }


    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }


    .wrapper-checkbox input:checked ~ .checkmark:after {
        display: block;
    }


    .wrapper-checkbox .checkmark:after {
        left: 6px;
        top: 2px;
        width: 6px;
        height: 9px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
</style>