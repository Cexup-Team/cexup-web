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

const user = useUserStore()


watch(() => [user.stateRegister.name, user.stateRegister.email, user.stateRegister.password, user.stateRegister.confirmPassword, user.stateRegister.agree], ([newName, newEmail, newPassword, newConfirm, newAgree]) => {
  if(newName !== "" && newEmail !== "" && newPassword !== "" && newConfirm !== "" && newAgree === true) {
    classNameButton.value = classNameButton.value.replace("bg-gray-550", "bg-primary-color")
    disableButton.value = false
  }else{
     classNameButton.value = classNameButton.value.replace("bg-primary-color","bg-gray-550")
     disableButton.value = true
  }
})


watch(() => user.stateRegister.email, (newEmail) => {
  
})

function signUp(){
    
  if (!disableButton.value) {
      if (user.stateRegister.password  !== user.stateRegister.confirmPassword) return user.stateRegister.isErrorMessage.password = "Confirm password must be the same"
      user.stateRegister.isLoading = true
      user.signUp(
          user.stateRegister.name,
          user.stateRegister.email,
          user.stateRegister.password
      ).then(
          res => {
            router.push("auth/register/complete")
          }
      ).catch(
          err => {
              $toast.show({
                  type: 'danger',
                  message: err.message,
                  timeout: 4,
              })
          }
      )
    }
    // if (!user.stateRegister.isErrorMessage.email && !user.stateRegister.isErrorMessage.password) {
    //     user.stateRegister.isLoading = true
    //     user.signIn(
    //         user.stateRegister.email,
    //         user.stateRegister.password
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
    //     user.stateRegister.isLoading = false
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
            <InputText className="rounded-md" v-model="user.stateRegister.name" type="text" placeholder="Full Name (Based on KTP)" />
          </div>
            <div class="inputForm mt-7">
              <InputText className="rounded-md" v-model="user.stateRegister.email" type="email" placeholder="Email Address" />
          </div>
          <div class="inputForm mt-7">
            <InputText :className="'rounded-md '+(user.stateRegister.isErrorMessage.password ? ' border-red-550' : ' border-gray-150')" v-model="user.stateRegister.password" type="password" placeholder="Password" src="../../assets/images/eye.svg" src_eye="../../assets/images/eye_open.svg" :icon="true" />
             <h3 v-if="user.stateRegister.isErrorMessage.password" class="text-red-550 font-poppins" style="font-size: 10px; margin-top: 2px;"> {{user.stateRegister.isErrorMessage.password }} </h3>
          </div>
          <div class="inputForm mt-7">
            <InputText :className="'rounded-md '+(user.stateRegister.isErrorMessage.password ? ' border-red-550' : ' border-gray-150')" v-model="user.stateRegister.confirmPassword" type="password" placeholder="Confrim Password" src="../../assets/images/eye.svg" src_eye="../../assets/images/eye_open.svg" :icon="true" />
             <h3 v-if="user.stateRegister.isErrorMessage.password" class="text-red-550 font-poppins" style="font-size: 10px; margin-top: 2px;"> {{user.stateRegister.isErrorMessage.password }} </h3>
          </div>

          <div class="mt-4">
            <InputCheckbox v-model="user.stateRegister.agree" title="I agree to the Term of Use and Privacy Policy." />
          </div>

          <Button @click="signUp" :className="classNameButton" title="Create My Account" :loading="user.stateRegister.isLoading" />
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