<script setup lang="ts">

</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="form-search pl-5 pr-4 mt-9 flex items-center">
                <div class="w-auto">
                    <img src="../../assets/images/icon_back.svg" alt="" class="w-2 h-4">
                </div>
                <div class="relative w-full ml-5">
                    <input type="text" class="w-full border border-gray-150 placeholder:text-gray-350 h-10 outline-none pr-12 pl-4 py-2 font-poppins text-sm" placeholder="Search Article" style="border-radius: 10px;">
                    <img src="../../assets/images/search_icon.svg" class="absolute z-20 right-6 transform translate-y-0.5 w-4 h-4" alt="search icon">
                </div>
            </div>
            <div class="w-full mt-2 overflow-hidden relative" style="height: 205px;">
                <img src="../../assets/images/article4.png" class="object-cover w-full h-full" alt="">
                <div class="overlay-article absolute inset-0 z-10"></div>
                <div class="absolute bottom-4 z-20 px-4">
                    <h3 class="font-poppins text-blue-550 text-xs font-medium">Penyakit</h3>
                    <h4 class="font-poppins text-white text-base font-medium mt-2">Punya Gejala Serupa, Ini Perbedaan Cacar Monyet, Cacar Api, dan Cacar</h4>
                    <span class="font-poppins text-gray-375 text-xs mt-2">24 Mei 2022 | Mario Prasetyo</span>
                </div>
            </div>
            <div class="px-4">

                <h2 class="mt-4 font-poppins font-semibold text-lg">Artikel Seputar Vaksin Corona</h2>
                <div class="mt-4">
                   <CardListArticle category="Hidup Sehat" title="Persiapan Vaksin Anak, Apa Saja yang Diperlukan?" time="24 Mei 2022" author="Iqbal Nurhaq" img="../../assets/images/article3.png" />
                </div>
                <hr class="h-0.5 bg-gray-185 w-full mt-4" />
                <div class="mt-4">
                    <CardListArticle category="Hidup Sehat" title="8 Lokasi Vaksin Booster di Jabodetabek Beserta Jadwalnya" time="25 Mei 2022" author="Kholidina" img="../../assets/images/article1.png" />
                </div>
                <hr class="h-0.5 bg-gray-185 w-full mt-4" />
                <div class="mt-4">
                    <CardListArticle category="News" title="Layanan Telemedicine Gratis untuk Pasien Covid" time="26 Mei 2022" author="Fahmi Firdaus" img="../../assets/images/article2.png" />
                </div>
                <hr class="h-0.5 bg-gray-185 w-full mt-4" />
            </div>
            <div class="bg-blue-150 mt-4">
                
                <h2 class="pt-4 font-poppins font-semibold text-lg px-4">Terpopuler</h2>
                
                <div class="overflow-x-scroll no-scrollbar">
                    <div class="flex justify-start min-w-max px-4 pb-28 pt-4">
                        <CardArticle img="../../assets/images/article1.png" title="Hidup Sehat" subTitle="Persiapan Vaksin Anak, Apa Saja yang Diperlukan?" date="24 Mei 2022" author="Iqbal Tmvn" />                         
                    
                        <CardArticle img="../../assets/images/article1.png" title="Hidup Sehat" subTitle="Persiapan Vaksin Anak, Apa Saja yang Diperlukan?" date="24 Mei 2022" author="Iqbal Tmvn" />                         
                                            
                    </div>
                </div>
            </div>
        </nuxt-layout>
    </div>
</template>


<style>
    .overlay-article {
        background: linear-gradient(179.65deg, rgba(0, 0, 0, 0) 2.37%, #000000 104.55%);
    }
</style>