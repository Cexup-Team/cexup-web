<script lang="ts">
</script>
<template>

  <div class="container w-sm">

   <div class=" container bg-light-50 columns-3 fixed max-w-sm">
      <router-link to="/dashboard/account" class="py-4">
         <svg xmlns="http://www.w3.org/2000/svg"   class="h-5 w-5 mt-2 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
      </router-link>
    <div class=" py-2 mb-2">Complete Profile</div>
  </div>

    <div class="container p-3 mt-7 items-center flex flex-col">
      <img src="/public/doc.png" alt="" class="w-23 rounded-md  ">
      <input type="file" accept="image/*" id="profile"  class="hidden" >
      <label for="profile" class="absolute ml-14 mt-16  ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg></label>
    </div>  

    <div class="flex flex-col py-2">
      <label for="name" class="flex justify-items-start mb-1">Your Name</label>
      <input id="name" type="text" class=" rounded-xl bg-[#DDEDFA] border-0 focus:ring-0">
    </div>

    <div class="flex flex-col py-2">
      <label for="email" class="flex justify-items-start mb-1">Email</label>
      <input id="email" type="email" class=" rounded-xl bg-[#DDEDFA] border-0 focus:ring-0">
    </div>

    <div class="flex flex-col py-2">
      <label for="phone" class="flex justify-items-start mb-1">Phone Number</label>
      <input id="phone" type="text" class="rounded-xl bg-[#DDEDFA] border-0 focus:ring-0">
    </div>

    <div class="flex flex-col py-2">
      <label for="date" class="flex justify-items-start mb-1">Date of birth</label>
      <input id="date" type="date" class="rounded-xl bg-[#DDEDFA] border-0 focus:ring-0">
    </div>

    <div class="flex flex-col py-2">
      <span class="flex justify-items-start mb-1">Gender</span>
      <div class="
        container
        rounded-xl
        bg-[#DDEDFA] 
        flex flex-col 
        justify items-start">
        <label class="ml-5 mt-4">
          <input type="radio" name="gender" value="male" required>
            Male
        </label><br>
        <label class="ml-5 ">
          <input type="radio" name="gender" value="female" required>
            Female
        </label><br>
        </div>
    </div>



    <div class="flex flex-col py-2">
      <label for="no-id" class="flex justify-items-start mb-1">Nomor Identitas</label>
        <select name="kitas" id="no-id" class="
        bg-[#DDEDFA] 
        rounded-t-lg
        border-0
         focus:ring-0">
           <option disabled selected></option>
            <option value="">Kitas</option>         
            <option value="">NIK</option>         
            <option value="">Pasport</option>         
        </select>
        <input id="no-id" type="text" class="bg-[#DDEDFA] rounded-b-xl border-0 focus:ring-0">
    </div>

    <div class="flex flex-col py-2">
      <label for="provinsi" class="flex justify-items-start mb-1">Provinsi</label>
      <input id="provinsi" type="text" class="rounded-xl bg-[#DDEDFA] border-0 focus:ring-0">
    </div>

    <div class="flex flex-col py-2">
      <label for="provinsi" class="flex justify-items-start mb-1">Kabupaten</label>
      <input id="provinsi" type="text" class="rounded-xl bg-[#DDEDFA] border-0 focus:ring-0">
    </div>

    <div class="flex flex-col py-2">
      <label for="provinsi" class="flex justify-items-start mb-1">Kecamatan</label>
      <input id="provinsi" type="text" class="rounded-xl bg-[#DDEDFA] border-0 focus:ring-0">
    </div>

    <div class="flex flex-col py-2">
      <label for="provinsi" class="flex justify-items-start mb-1">Desa/Dusun</label>
      <input id="provinsi" type="text" class="rounded-xl bg-[#DDEDFA] border-0 focus:ring-0">
    </div>

    <div class="flex flex-col py-2">
      <label for="addres" class="flex justify-items-start mb-1">Addres</label>
      <textarea id="addres" cols="20" rows="5" class="rounded-xl bg-[#DDEDFA] border-0 focus:ring-0"></textarea>
    </div>

    <button class="
        rounded
        text-light-200 
        bg-blue-500 
        w-full h-10 my-3"
        >Save
    </button>
  </div>
</template>
<route lang="yaml">
meta:
  layout: auth
</route>