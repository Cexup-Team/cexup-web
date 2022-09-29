<script>

</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="telemonitoring-wrapper relative">
                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Telemonitoring</h1>
                        <div></div>
                    </div>
                </div>

                    <div class="form-search px-4 mt-6">
                        <div class="relative">
                            <input type="text" class="w-full border border-gray-150 placeholder:text-gray-350 h-10 outline-none pr-12 pl-4 py-2 font-poppins text-sm" placeholder="Search “doctor”" style="border-radius: 10px;">
                            <img src="~/assets/images/search_icon.svg" class="absolute z-20 right-6 transform translate-y-0.5 w-4 h-4" alt="search icon">
                        </div>
                    </div>

                    <div class="mt-4 bg-blue-50 px-6">
                        <h2 class="font-poppins text-xs py-2">Total <b class="font-medium">4</b> health object that you can monitor</h2>
                    </div>

                    <div class="grid grid-cols-2 gap-5 px-6 mt-4">
                        <CardTelemonitoring title="Kids Tracker" icon="~/assets/images/stetoskop.svg" />
                        <CardTelemonitoring title="Obgyn" icon="~/assets/images/stetoskop.svg" link="/telemonitoring/obgyn" />
                        <CardTelemonitoring title="Cardiac Tracker" icon="~/assets/images/stetoskop.svg" />
                        <CardTelemonitoring title="Covid-19" icon="~/assets/images/stetoskop.svg" />
                 
                    </div>

          
            </div>
        </nuxt-layout>
    </div>
</template>


<style>
    .telemonitoring-card {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }
</style>