<script setup lang="ts">

</script>
<template>
    <div class="h-screen w-screen bg-light-800">
      <h1 class="relative text-left pl-13 py-7 text-7xl font:semibold">Log In</h1>
        <p class="relative text-left pl-13 pt-5 pb-1">Username</p>
        <div class="bg-[#DDEDFA] w-100 ml-13 shadow-md rounded-md">
        <carbon-user class="float-left ml-6 mt-3"/>
        <input class="outline-none bg-[#DDEDFA] pr-32 py-3 " type="name" placeholder="Username"/>
        </div>
        <p class="relative text-left pl-13 pt-5 pb-1">Password</p>
        <div class="bg-[#DDEDFA] w-100 ml-13 shadow-md rounded-md">
        <carbon-password class="float-left ml-6 mt-3"/>
        <input class="outline-none bg-[#DDEDFA] mr-0 pr-22.5 py-3" type="password" placeholder="Your Secret Password"/>
        <img src="/public/eye.png" class="h-5 float-right mr-4 mt-3 icon-btn">
        </div>
        <p class="text-blue-500 py-3 relative text-right pr-13"><button>Forgot Password ?</button></p>
        <button class="bg-blue-500 text-white px-46 py-3 rounded-md shadow-xl active:shadow-2xl">Login</button>
        <p class="py-3">—————  Or log in with  —————</p>
        <button class="bg-white px-28 py-3 ml-13 flex content-center rounded-md shadow-xl active:shadow-2xl">
          <img src="/public/Google.png" class="h-6 flex"/>
          <p class="flex pl-3">  Continue with google</p>
        </button>
        <p class="pt-4">Don't have an account yet? <button class="text-blue-500">Sign Up</button></p>
    </div>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>