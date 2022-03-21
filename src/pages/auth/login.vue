<script setup lang="ts">

</script>
<template>
    <div class="h-screen w-screen bg-white">
      <h4 class="relative text-center text-4xl pt-7 pb-3 mt-3 text-[#008CA3] font:semibold-poppins">Sign In</h4>
      <p>Don't have an account? <button class="text-[#008CA3]"> <router-link to="/auth/register"> Sign Up now!</router-link></button></p>
        <div>
        <input class="border-1 border-[#DBDFE3] w-110 mt-10 mb-8 shadow-md rounded-md py-3" type="text" placeholder="Email or phone number"/>
        </div>
        <div>
        <input class="relative border-1 border-[#DBDFE3] w-110 mb-3 shadow-md rounded-md  py-3" type="password" name="password" placeholder="Password"/>
        <button>
        <carbon-view  class="absolute -mt-3 -ml-8 icon-btn"/>
        </button>
        </div>
        <div class="flex justify-between py-3">
          <div class="flex justify-start pl-9">
        <input type="checkbox" class="-pb-2 appearance-none checked:bg-[#008CA3]"><h7 class="pl-3">Remember Me</h7>
          </div>
        <h7 class="text-[#008CA3] relative text-right pr-9"><button>Forgot Password ?</button></h7>
        </div>
        <button class="bg-[#008CA3] text-white w-110 py-3 mr-1 rounded-md shadow-xl active:transition duration-300 transition-gray-500">Sign In</button>
        <p class="py-5"> OR </p>
        <div class="flex">
        <button class="bg-[#4285F4] py-3 ml-8.5 w-110 flex content-center rounded-md shadow-xl active:shadow-2xl">
          <div class="pl-3">
          <img src="/public/Google.png" class="h-8 flex bg-white p-1 rounded-md "/>
          </div>
          <p class="flex pl-25 pt-1 text-white">  Continue with google</p>
        </button>
        </div>
        
    </div>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>