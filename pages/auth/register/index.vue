<script setup lang="ts">
import { Ref } from "vue"
import { useSessionStorage } from '@vueuse/core'
import { useUserStore } from '~~/stores/user-store';
import { useToast, useModal } from 'tailvue'
import { useRouter } from 'vue-router';


const $toast = useToast()
const router = useRouter()

let disableButton: Ref<boolean> = ref(true)
let classNameButton: Ref<string> = ref("mt-8 w-full text-center text-white font-poppins py-3 rounded-lg font-medium text-base bg-gray-550 transition-all duration-300")

interface RegisterState{
  name : string,
  email : string,
  password : string,
  confirmPassword : string,
  agree : boolean,
  isLoading: boolean,
  isData : any,
  isStatus: string,
  isErrorMessage: any
}

const state: RegisterState = reactive({
    name : "",
    email: "", 
    password: "",
    confirmPassword : "",
    agree : false,
    isLoading: false,
    isData : null,
    isStatus: 'idle',
    isErrorMessage: {
      'name': '',
      'email' : '',
      'password' : ''
    }
})

const user = useUserStore()


watch(() => [state.name, state.email, state.password, state.confirmPassword, state.agree], ([newName, newEmail, newPassword, newConfirm, newAgree]) => {
  if(newName !== "" && newEmail !== "" && newPassword !== "" && newConfirm !== "" && newAgree === true) {
    classNameButton.value = classNameButton.value.replace("bg-gray-550", "bg-primary-color")
    disableButton.value = false
  }else{
     classNameButton.value = classNameButton.value.replace("bg-primary-color","bg-gray-550")
     disableButton.value = true
  }
})

function signUp(){
    
    if (!disableButton.value) {
      if (state.password  !== state.confirmPassword) return state.isErrorMessage.password = "Confirm password must be the same"
        state.isLoading = true
        user.signUp(
            state.name,
            state.email,
            state.password
        ).then(
            res => router.push("/register/complete")
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
    // if (!state.isErrorMessage.email && !state.isErrorMessage.password) {
    //     state.isLoading = true
    //     user.signIn(
    //         state.email,
    //         state.password
    //     ).then(
    //         res => router.push("/")
    //     ).catch(
    //         err => {
    //             $toast.show({
    //                 type: 'danger',
    //                 message: err.message,
    //                 timeout: 4,
    //             })
    //         }
    //     )
    //     state.isLoading = false
    // }
    
}





</script>

<template>
  <div>
    <nuxt-layout name="auth">
      <div class="mt-9 p-4">
        <img src="../../../assets/images/icon_back.svg" alt="" class="w-2 h-4" />
          <h2 class="text-3xl text-primary-color font-bold mt-9 w-full text-center font-poppins">Sign Up</h2>
          <h5 class="text-sm font-medium w-full text-gray-350 text-center mt-6 font-poppins">Already have an account? <span class="text-primary-color">Sign in!</span></h5>
          <div class="inputForm mt-12">
            <InputText className="rounded-md" v-model="state.name" type="text" placeholder="Full Name (Based on KTP)" />
          </div>
            <div class="inputForm mt-7">
              <InputText className="rounded-md" v-model="state.email" type="email" placeholder="Email Address" />
          </div>
          <div class="inputForm mt-7">
            <InputText :className="'rounded-md '+(state.isErrorMessage.password ? ' border-red-550' : ' border-gray-150')" v-model="state.password" type="password" placeholder="Password" src="../../assets/images/eye.svg" src_eye="../../assets/images/eye_open.svg" :icon="true" />
             <h3 v-if="state.isErrorMessage.password" class="text-red-550 font-poppins" style="font-size: 10px; margin-top: 2px;"> {{state.isErrorMessage.password }} </h3>
          </div>
          <div class="inputForm mt-7">
            <InputText :className="'rounded-md '+(state.isErrorMessage.password ? ' border-red-550' : ' border-gray-150')" v-model="state.confirmPassword" type="password" placeholder="Confrim Password" src="../../assets/images/eye.svg" src_eye="../../assets/images/eye_open.svg" :icon="true" />
             <h3 v-if="state.isErrorMessage.password" class="text-red-550 font-poppins" style="font-size: 10px; margin-top: 2px;"> {{state.isErrorMessage.password }} </h3>
          </div>

          <div class="mt-4">
            <InputCheckbox v-model="state.agree" title="I agree to the Term of Use and Privacy Policy." />
          </div>

          <Button @click="signUp" :className="classNameButton" title="Create My Account" :loading="state.isLoading" />
              <p class="w-full text-center mt-6 text-gray-250 font-medium text-sm font-poppins">OR</p>
            <div class="mt-6 mb-12">
              <Button class="w-full text-center bg-blue-650 text-white py-3 font-poppins rounded-lg text-base" title="Continue with Google" icon />
          </div>
      </div>
    </nuxt-layout>
  </div>
</template>


<style>

</style>