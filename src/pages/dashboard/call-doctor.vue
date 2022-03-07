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

  <div class="h-screen w-screen bg-light-800">
    <h2 class="text-2xl text-center font-bold text-gray-900">
      Call Doctor
    </h2>
    <div class="ml-3 mt-2">
      <h2 class="text-left text-2xl font-sans text-gray-900 text-xl font-bold">
        Speciality
      </h2>
    </div>

    <div class="">
      <img class="ml-28 w-8 h-8 rounded-full" src="/public/doctor.png" alt="" />
      <p
        class="
          text-justify
          ml-20
          focus:text-teal-500
          hover:text-teal-500
          text-xs
        "
      >
        General Practican
      </p>
    </div>

    <div>
      <h1 class="text-left font-bold text-xl m-3">Doctor</h1>

      <div class="bg-white rounded-lg shadow-2xl m-3 p-2 flex">
        <img
          src="/public/doctor.png"
          class="rounded-t-lg h-15 object-cover"
          alt=""
        />
        <div class="ml-2 text-left">
          <header class="text-sm font-bold">Dr. Satrio Susilo</header>
          <p class="text-xs font-bold text-gray-600">General pracitian</p>
          <p class="text-xs text-gray-600">
            Pusat Kedokteran Dan <br />
            Kesehatan POLRI
          </p>
          <footer class="text-xs flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            >Rp. 0.00
          </footer>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-2xl m-3 p-2 flex">
        <img
          src="/public/index.png"
          class="rounded-t-lg h-15 object-cover"
          alt=""
        />
        <div class="ml-2 text-left">
          <header class="text-sm font-bold">Dr. Ayu Alga</header>
          <p class="text-xs font-bold text-gray-600">General pracitian</p>
          <p class="text-xs text-gray-600">
            Pusat Kedokteran Dan <br />
            Kesehatan POLRI
          </p>
          <footer class="text-xs flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            >Rp. 0.00
          </footer>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-2xl m-3 p-2 flex">
        <img
          src="/public/doctor.png"
          class="rounded-t-lg h-15 object-cover"
          alt=""
        />
        <div class="ml-2 text-left">
          <header class="text-sm font-bold">Dr. Iqbal Mustofa</header>
          <p class="text-xs font-bold text-gray-600">General pracitian</p>
          <p class="text-xs text-gray-600">
            Pusat Kedokteran Dan <br />
            Kesehatan POLRI
          </p>
          <footer class="text-xs flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            >Rp. 0.00
          </footer>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-2xl m-3 p-2 flex">
        <img
          src="/public/doctor.png"
          class="rounded-t-lg h-15 object-cover"
          alt=""
        />
        <div class="ml-2 text-left">
          <header class="text-sm font-bold">Dr. Yakob Togar</header>
          <p class="text-xs font-bold text-gray-600">General pracitian</p>
          <p class="text-xs text-gray-600">
            Pusat Kedokteran Dan <br />
            Kesehatan POLRI
          </p>
          <footer class="text-xs flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            >Rp. 0.00
          </footer>
        </div>
      </div>
    </div>

    <div>
      <section
        id="bottom-navigation"
        class="
          block
          fixed-center
          max-w-screen-sm
          text-center
          inset-x-0
          bottom-0
          z-10
          bg-white
          shadow
        "
      >
        <div id="tabs" class="flex justify-between">
          <a
            href="#"
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <svg
              class="h-8 w-8 ml-12 text-gray-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              />
              <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
              <polyline points="7.5 19.79 7.5 14.6 3 12" />
              <polyline points="21 12 16.5 14.6 16.5 19.79" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>

            <span class="tab tab-home block text-xs">Home</span>
          </a>
          <a
            href="#"
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <svg
              class="h-8 w-8 ml-12 text-gray-800"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="3" y1="21" x2="21" y2="21" />
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
              <line x1="10" y1="9" x2="14" y2="9" />
              <line x1="12" y1="7" x2="12" y2="11" />
            </svg>

            <span class="tab tab-kategori block text-xs">Call Doctor</span>
          </a>
          <a
            href="#"
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <svg
              class="h-8 w-8 ml-12 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              />
            </svg>
            <span class="tab tab-explore block text-xs">My Order</span>
          </a>

          <a
            href="#"
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <svg
              class="h-8 w-8 ml-12 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span class="tab tab-account block text-xs">Account</span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>
