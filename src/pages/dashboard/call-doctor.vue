<script setup lang="ts">

</script>
<template>
  <div class="container">
    <div class=" columns-3">
      <router-link to="/dashboard" class="py-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 box-content h-3 w-3 p-2 bg-light-50" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </router-link>
    <div class="font-semibold py-4">Call Doctor</div>
  </div>

  <div class="mr-80 font-semibold">Speciality</div>
    <div class="container-sm w-45 h-32 p-4 ">
      <div class="">
        <div class="w-full ">
          <div class="">
            <img src="/public/doc.png" class="w-17 h-17 ml-10 "/>
          </div>
          <div>
            <p class="text-blue-800">
              General Practician
            </p>
          </div>
        </div>
      </div>
  </div>
      
  <div>
    <h1 class="mr-85 mb-4 font-semibold">Doctor</h1>
      <div class="container my-4">
        <div class="bg-light-50 p-6 shadow-md rounded-md flex justify-between">
          <div class="flex ">
            <img src="/public/docmale.png" class="w-20 h-20">
              <div class="text-left">
                <strong>Dr. Satrio Susilo</strong>
                <p class="text-gray-500">General Practician</p>
                 <p class="text-xs text-gray-500">Pusat Kedokteran Dan Kesehatan POLRI</p>
              </div>
          </div>
        </div>
      </div>
         
  <div class="container py-4">
    <div class="bg-light-50 p-6 shadow-md rounded-md flex justify-between">
      <div class="flex ">
        <img src="/public/docfemale.png" class="w-20 h-20">
          <div class="text-left">
            <strong>Dr. Ayu Alga</strong>
              <p class="text-gray-500">General Practician</p>
              <p class="text-xs text-gray-500">Pusat Kedokteran Dan Kesehatan POLRI</p>
          </div>
      </div>
    </div>
  </div>
         
  <div class="container py-4">
    <div class="bg-light-50 p-6 shadow-md rounded-md flex justify-between">
      <div class="flex ">
        <img src="/public/docmale.png" class="w-20 h-20">
          <div class="text-left">
            <strong>Dr. Iqbal Mustofa</strong>
            <p class="text-gray-500">General Practician</p>
            <p class="text-xs text-gray-500">Pusat Kedokteran Dan Kesehatan POLRI</p>
          </div>
      </div>
    </div>
  </div>

  <div class="container py-4 mb-8">
    <div class="bg-light-50 p-6 shadow-md rounded-md flex justify-between">
      <div class="flex ">
        <img src="/public/docmale.png" class="w-20 h-20">
          <div class="text-left">
              <strong>Dr. Yakob Togar</strong>
              <p class="text-gray-500">General Practician</p>
              <p class="text-xs text-gray-500">Pusat Kedokteran Dan Kesehatan POLRI</p>
          </div>
      </div>
    </div>
  </div>
</div>

    </div>
</template>
<route lang="yaml">
meta:
  layout: dashboard
</route>

