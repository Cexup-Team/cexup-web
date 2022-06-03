<script setup lang="ts">
import CheckboxForm from '~~/components/Input/CheckboxForm.vue';
import ButtonForm from '~~/components/Input/ButtonForm.vue';


</script>

<template>
    <nuxt-layout name="auth">
        <div class="mt-9">
            <img src="../../assets/images/icon_back.svg" alt="" class="w-2 h-4">
            <h2 class="text-3xl text-primary-color font-bold mt-9 w-full text-center font-poppins">Sign In</h2>
            <h5 class="text-sm font-medium w-full text-gray-350 text-center mt-6 font-poppins">Don’t have an account? <span class="text-primary-color">Sign up now!</span></h5>
            
            <div class="inputForm mt-12">
                <InputTextFrom className="rounded-md" type="email" placeholder="Email or Phone number" />
            </div>
            <div class="inputForm mt-7">
                <InputTextFrom className="rounded-md" type="password" placeholder="Password" src="../../assets/images/eye.svg" :icon="true" />
            </div>
            <div class="mt-7 flex justify-between items-center">
                <div class=""> 
                    <CheckboxForm title="Remeber me" />
                    <!-- <span class="text-xs font-poppins font-medium text-gray-350">aaa</span> -->
                </div>
                <span class="text-xs font-poppins font-medium text-primary-color">Forgot password?</span>

            </div>
            <ButtonForm className="mt-7 w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Sign In" />
            <p class="w-full text-center mt-6 text-gray-250 font-medium text-sm">OR</p>
            <div class="mt-6">
                <ButtonForm class="w-full text-center bg-blue-650 text-white py-3 font-poppins rounded-lg text-base" title="Continue with Google" icon />
            </div>

        </div>
    </nuxt-layout>
</template>


<style>

</style>