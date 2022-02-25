<script setup lang="ts">

</script>

<template>
  <div class="container text-sm mt-0">
    <div class="display-block  font:semibold text-3xl">
      <p class="block mr-77">
        Create
      </p>
      <p class="block mr-72">
        Account
      </p>
    </div>

    <!-- form  -->
    <div class="container ">
      <div class="flex flex-col px-3 py-3">
        <label for="fullName" class="mr-80 mb-2">Your Name</label>
        <input id="fullName" type="text" class="text-xs rounded bg-[#DDEDFA] border-0 focus:ring-0 border-blue-2 border-red-500 focus:border-blue-4 focus:border-red-500 caret-blue-400" placeholder="Full Name">
      </div>
      <div class="flex flex-col px-3 py-2">
        <label for="email" class="mr-90 mb-2">Email</label>
        <input id="email" type="email" class="text-xs rounded bg-blue-100 border-0 focus:ring-0 border-blue-2 border-red-500 focus:border-blue-4 focus:border-red-500 caret-blue-400 " placeholder="Your mail">
      </div>
      <div class="flex flex-col px-3 py-2">
        <label for="username" class="mr-85 mb-2">Username</label>
        <input id="username" type="text" class="text-xs rounded bg-blue-100 border-0 focus:ring-0 border-blue-2 border-red-500 focus:border-blue-4 focus:border-red-500 caret-blue-400 " placeholder="Username">
      </div>

      <div class="flex flex-col px-3 py-2">
        <label for="password" class="mr-85 mb-2">Password</label>
        <input id="password" type="password" class=" text-xs rounded bg-blue-100 border-0 focus:ring-0 border-blue-2 border-red-500 focus:border-blue-4 focus:border-red-500 caret-blue-400" placeholder="Your Secret Password">
        <carbon-view id="password" class="icon-btn relative bottom-6 left-92" />
      </div>
      <div class="flex flex-col px-3 py-2">
        <label for="retype" class="mr-70 mb-2 relative bottom-3">Retype Password</label>
        <input id="retype" type="password" class="relative bottom-3 w-full text-xs rounded bg-blue-100 border-0 focus:ring-0 border-blue-2 border-red-500 focus:border-blue-4 focus:border-red-500 caret-blue-400" placeholder="Retype Your Secret password" required>
        <carbon-view class="icon-btn relative bottom-9 left-92  " />
      </div>
      <div class="flex flex-col px-3 mt-0">
        <label for="addres" class="mr-87 mb-2 relative bottom-5">Addres</label>
        <input id="addres" type="text" class="relative bottom-5 text-xs rounded bg-blue-100  border-0 focus:ring-0 border-blue-2 border-red-500 focus:border-blue-4 focus:border-red-500 caret-blue-400" placeholder="Your adress">
      </div>
    </div>

    <div class="flex justify-start py-3">
      <input id="terms" type="checkbox" class="ml-6 border-gray-800 focus:ring-0">
      <label for="terms" class="ml-4 text-sm"><a href="#">i agree to the Terms & Conditions and Privacy Policy</a></label>
    </div>
    <button id="btn" type="submit" class="py-4  bg-blue-500 p-3 rounded-md w-98 hover:bg-opacity-80 text-light-50">
      Sign Up
    </button>

    <div class="flex flex-col justify-between mt-5">
      <p class="text-gray-400">
        Already have an account? <a href="#" class="py-4 text-blue-500 ml-3"> Sign In</a>
      </p>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: dashboard
  requiresAuth: true
</route>
