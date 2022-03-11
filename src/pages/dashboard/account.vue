<script setup lang="ts">
</script>
<template>
<div class="h-auto w-screen bg-light-800">
    <div>
      <div class="flex">
        <button class="p-12 rounded-xl active:bg-gray-400 mt-3"></button>
        <svg xmlns="http://www.w3.org/2000/svg" class="float-left mt-19 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>
          <span class="block">
            <h3 class="fomt:bold text-2xl mt-3">Null</h3>
            <p>null</p>
          </span>
      </div>
        <div class="bg-white rounded-lg shadow-2xl m-3 p-2 flex">
          <div class="block">
          <h6 class="flex p-1 text-gray-400">Display Name</h6>
          <p class="flex pb-2 pl-1">null</p>
          <h6 class="flex p-1 text-gray-400">Phone</h6>
          <p class="flex pb-2 pl-1">null</p>
          <h6 class="flex p-1 text-gray-400">Email</h6>
          <p class="flex pb-2 pl-1">null</p>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-2xl m-3 p-2 block flex">
          <span class="block">
            <h6 class="flex py-2">About App</h6>
            <button class="py-2">Contact Support</button>
          </span>
        </div>
        <div class="bg-white rounded-lg shadow-2xl m-3 p-2">
          <span class="block">
          <h6 class="flex py-1">History</h6>
          <h6 class="flex justify-beetwen pb-1">
            <button>Call Doctor<carbon-chevron-right class="float-right ml-93"/></button>
          </h6>
          <h6>
            <button class="flex justify-around py-2">Medical Record<carbon-chevron-right class="float-right ml-85"/></button>
          </h6>
          </span>
        </div>
        <div class="static">
        <div class="static bg-white rounded-t-lg shadow-2xl m-3 mb-0 p-2">
          <div class="block">
            <span class="block">
              <p class="flex">Profile</p>
              <p class="flex pb-2">Your Profile is not complete</p>
            </span>
          </div>
        </div>
            <div class="static bg-cover bg-gradient-to-r from-red-500 to-orange-500 rounded-b-lg m-3 mt-0 p-2">
              <button class="text-white">Complete my profile <carbon-arrow-right class="float-right ml-2"/></button>
            </div>
        </div>
        <button class="text-orange-500 mt-5 mb-12">Sign Out</button>
    </div>
</div>
</template>
<route lang="yaml">
meta:
  layout: dashboard
</route>