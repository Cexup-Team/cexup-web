<script setup lang="ts">
import { Ref } from "vue"
import { useSessionStorage } from '@vueuse/core'

let disableButton: Ref<string> = ref("disabled")
let className: Ref<string> = ref("mt-8 w-full text-center text-white font-poppins py-3 rounded-lg font-medium text-base bg-gray-550 transition-all duration-300")

interface RegisterState{
  name : string,
  email : string,
  password : string,
  confirmPassword : string,
  agree : boolean
}

const register: RegisterState = reactive({
    name : "",
    email: "", 
    password: "",
    confirmPassword : "",
    agree : false
})


watch(() => [register.name, register.email, register.password, register.confirmPassword, register.agree], ([newName, newEmail, newPassword, newConfirm, newAgree]) => {
  if(newName !== "" && newEmail !== "" && newPassword !== "" && newConfirm !== "" && newAgree === true) {
    className.value = className.value.replace("bg-gray-550", "bg-primary-color")
  }else{
     className.value = className.value.replace("bg-primary-color","bg-gray-550")
  }
})





</script>

<template>
  <div>
    <nuxt-layout name="auth">
      <div class="mt-9 p-4">
        <img src="../../../assets/images/icon_back.svg" alt="" class="w-2 h-4" />
          <h2 class="text-3xl text-primary-color font-bold mt-9 w-full text-center font-poppins">Sign Up</h2>
          <h5 class="text-sm font-medium w-full text-gray-350 text-center mt-6 font-poppins">Already have an account? <span class="text-primary-color">Sign in!</span></h5>
          <div class="inputForm mt-12">
            <InputText className="rounded-md" v-model="register.name" type="text" placeholder="Full Name (Based on KTP)" />
          </div>
            <div class="inputForm mt-7">
              <InputText className="rounded-md" v-model="register.email" type="email" placeholder="Email Address" />
          </div>
          <div class="inputForm mt-7">
            <InputText className="rounded-md" v-model="register.password" type="password" placeholder="Password" src="../../assets/images/eye.svg" src_eye="../../assets/images/eye_open.svg" :icon="true" />
          </div>
          <div class="inputForm mt-7">
            <InputText className="rounded-md" v-model="register.confirmPassword" type="password" placeholder="Confrim Password" src="../../assets/images/eye.svg" src_eye="../../assets/images/eye_open.svg" :icon="true" />
          </div>

          <div class="mt-4"> 
            <InputCheckbox v-model="register.agree" title="I agree to the Term of Use and Privacy Policy." />
          </div>

          <Button :className="className" title="Create My Account" link="/auth/register/complete" />
              <p class="w-full text-center mt-6 text-gray-250 font-medium text-sm">OR</p>
            <div class="mt-6 mb-12">
              <Button class="w-full text-center bg-blue-650 text-white py-3 font-poppins rounded-lg text-base" title="Continue with Google" icon />
          </div>
      </div>
    </nuxt-layout>
  </div>
</template>


<style>

</style>