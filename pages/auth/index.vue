<script setup lang="ts">
import { useUserStore } from '~~/stores/user-store';
import { useRouter } from 'vue-router';
import { validateEmail } from "../../utils/getValidEmail";

const router = useRouter()
const user = useUserStore()

function signIn(){
    user.signIn().then(res => {
        router.push(res.location)
    })
}

watch(() => user.stateLogin.email, (newEmail) => {
    !validateEmail(newEmail) ? user.stateLogin.isErrorMessage.email = "Email must be match" : user.stateLogin.isErrorMessage.email = ""

})

</script>

<template>
<div>
    <nuxt-layout name="auth">
        <div class="mt-9 p-4">
            <img src="~/assets/images/icon_back.svg" alt="" class="w-2 h-4">
            <h2 class="text-3xl text-primary-color font-bold mt-9 w-full text-center font-poppins">Sign In</h2>
            <h5 class="text-sm font-medium w-full text-gray-350 text-center mt-6 font-poppins">Don’t have an account? <nuxt-link :to="'/auth/register'"><span class="text-primary-color">Sign up now!</span></nuxt-link></h5>
            
            <div class="inputForm mt-12">
                <InputText :className="'rounded-md '+(user.stateLogin.isErrorMessage.email ? ' border-red-550' : ' border-gray-150')" v-model="user.stateLogin.email" type="email" placeholder="Email or Phone number"  />
                <h3 v-if="user.stateLogin.isErrorMessage.email" class="text-red-550 font-poppins" style="font-size: 10px; margin-top: 2px;"> {{user.stateLogin.isErrorMessage.email}} </h3>
            </div>
            <div class="inputForm mt-7">
                <InputText :className="'rounded-md '+(user.stateLogin.isErrorMessage.password ? ' border-red-550' : ' border-gray-150')" v-model="user.stateLogin.password" type="password" placeholder="Password" src="~/assets/images/eye.svg" src_eye="~/assets/images/eye_open.svg" :icon="true" />
                <h3 v-if="user.stateLogin.isErrorMessage.password" class="text-red-550 font-poppins" style="font-size: 10px; margin-top: 2px;"> {{user.stateLogin.isErrorMessage.password }} </h3>
            </div>
            <div class="mt-7 flex justify-between items-center">
                <div class=""> 
                    <InputCheckbox title="Remeber me" />  
                </div>
                <span class="text-xs font-poppins font-medium text-primary-color">Forgot password?</span>
            </div>
            <Button @click="signIn" className="mt-7 w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Sign In" :loading="user.stateLogin.isLoading" />
            <p class="w-full text-center mt-6 text-gray-250 font-medium text-sm">OR</p>
            <div class="mt-6">
                <Button @click="signIn" class="w-full text-center bg-blue-650 text-white py-3 font-poppins rounded-lg text-base" title="Continue with Google" icon />
            </div>
        </div>
    </nuxt-layout>
</div>
</template>

<style>

</style>