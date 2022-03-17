<script setup lang="ts">

</script>

<template>
  <div class="w-screen h-screen bg-white">
    <div class="flex flex-col mb-4 pb-5">
      <span class="pt-7 mt-3 font-bold text-4xl text-[#008CA3]">
        Sign Up
      </span>
      <span class="mt-3 text-gray-400 font-semibold ">
        Already have an account? <router-link to="/auth/login" class="text-[#008CA3] ml-1 font-semibold"> Sign In!</router-link>
      </span>
    </div>
    
    <!-- form  -->
  <form class="space-y-7 pb-5">
    <div class="">
       <input type="text" name="full name" id="" class="w-110 rounded-md border-[#DBDFE3] focus:border-[#008CA3]" placeholder="Full Name (Based on KTP)">
    </div>

    <div class="">
       <input type="email" name="email" id="" class="w-110 rounded-md border-[#DBDFE3] focus:border-[#008CA3]" placeholder="Email Addres">
    </div>

    <div class="">
       <input type="password" name="password" id="" class="w-110 rounded-md border-[#DBDFE3] focus:border-[#008CA3]" placeholder="Password">
        <carbon-view id="password" class="icon-btn absolute -ml-7 mt-3" />
    </div>

    <div class="">
       <input type="password" name="confirm password" id="" class="w-110 rounded-md border-[#DBDFE3] focus:border-[#008CA3]" placeholder="Confirm Password">
        <carbon-view id="password" class="icon-btn absolute -ml-7 mt-3" />
    </div>

    <div class="-ml-26">
     <input type="checkbox" class="rounded-sm">
      <label class="ml-2">
       I agree to the 
       <a href="#" class="text-[#008CA3]"> Term of Use </a>  and 
       <a href="" class="text-[#008CA3]"> Privacy Policy </a>
      </label>
    </div>
  </form>

   <div>
     <button class="w-110 py-3 rounded-md text-white bg-[#008CA3] shadow-xl active:shadow-2xl font-semibold">
       Create My Account
     </button>
   </div>
   
   <div>
      <p class="py-5 text-[#9695AD] font-semibold">OR</p>
   </div>

   <div>
     <button class="flex flex-row justify-evenly  items-center w-110 ml-9 py-3 text-white rounded-md bg-[#4285F4] shadow-xl active:shadow-2xl">
       <img src="/public/Google.png" class="h-6 rounded-sm -ml-30 bg-white"/>
      <p class="-ml-10 font-semibold">Continue with Google </p> 
     </button>
   </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: auth
  <!-- requiresAuth: true -->
</route>