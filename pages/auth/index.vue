<script setup lang="ts">
import { useUserStore } from '~~/stores/user-store';
import {ref} from 'vue';
import { useError } from "../../utils/errorValidation"

import { useToast, useModal } from 'tailvue'
import { useRouter } from 'vue-router';
import { useSession } from "~~/composables/useSession"
import commonjs from '@rollup/plugin-commonjs';

const $toast = useToast()
const $router = useRouter()

interface LoginState {
    email : string,
    password : string,
    isLoading: boolean,
    isData : any,
    isStatus: string,
    isErrorMessage: any
}

const jsonError = {
    'email' : '',
    'password' : ''
}

const state: LoginState = reactive({
    email : "",
    password: "",
    isLoading: false,
    isData : null,
    isStatus: 'idle',
    isErrorMessage: jsonError
})


const user = useUserStore()
const session = useSession()


function signIn(){
    state.email === "" ? state.isErrorMessage.email = "Email must be required" : state.isErrorMessage.email = ""
    state.password === "" ? state.isErrorMessage.password = "Password must be required" : state.isErrorMessage.password = ""

    if (!state.isErrorMessage.email && !state.isErrorMessage.password) {
        state.isLoading = true
        user.signIn(
            state.email,
            state.password
        ).then(
            res => $router.push(res.route)
            
        ).catch(
            err => {
                $toast.show({
                    type: 'danger',
                    message: err.message,
                    timeout: 4,
                })
            }
        )
        state.isLoading = false
    }
    
}

</script>

<template>
<div>
    <nuxt-layout name="auth">
        
        <div class="mt-9 p-4">
            <img src="../../assets/images/icon_back.svg" alt="" class="w-2 h-4">
            <h2 class="text-3xl text-primary-color font-bold mt-9 w-full text-center font-poppins">Sign In</h2>
            <h5 class="text-sm font-medium w-full text-gray-350 text-center mt-6 font-poppins">Don’t have an account? <nuxt-link :to="'/auth/register'"><span class="text-primary-color">Sign up now!</span></nuxt-link></h5>
            
            <div class="inputForm mt-12">
                <InputText :className="'rounded-md '+(state.isErrorMessage.email ? ' border-red-550' : ' border-gray-150')" v-model="state.email" type="email" placeholder="Email or Phone number"  />
                <h3 v-if="state.isErrorMessage.email" class="text-red-550 font-poppins" style="font-size: 10px; margin-top: 2px;"> {{state.isErrorMessage.email}} </h3>
            </div>
            



            <div class="inputForm mt-7">
                <InputText :className="'rounded-md '+(state.isErrorMessage.password ? ' border-red-550' : ' border-gray-150')" v-model="state.password" type="password" placeholder="Password" src="../../assets/images/eye.svg" src_eye="../../assets/images/eye_open.svg" :icon="true" />
                <h3 v-if="state.isErrorMessage.password" class="text-red-550 font-poppins" style="font-size: 10px; margin-top: 2px;"> {{state.isErrorMessage.password }} </h3>
            </div>
            <div class="mt-7 flex justify-between items-center">
                <div class=""> 
                    <InputCheckbox title="Remeber me" />
                   
                </div>
                <span class="text-xs font-poppins font-medium text-primary-color">Forgot password?</span>

            </div>
            <Button @click="signIn" className="mt-7 w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Sign In" :loading="state.isLoading" />
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