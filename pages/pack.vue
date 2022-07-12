<script setup lang="ts">
    import Tabs from '~~/parts/Tabs.vue';
    import BottomNav from '~~/parts/BottomNav.vue';
</script>
<template>
    <div>
        <nuxt-layout name="main">
            <div class="pack-wrapper h-full relative w-full">
                <BottomNav active="/pack" />
                <div class="flex justify-between mt-7 mx-6 items-center">
                    <img src="../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                    <h1 class="font-poppins text-xl font-semibold">Package</h1>
                    <div>

                    </div>
                </div>
                <Tabs bgBody="bg-white">
                    <template v-slot:tabHeader>
                        <div class="active font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5">
                            Explore
                        </div>
                        <div class="font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5">
                            My Subscribe
                        </div>
                    
                    </template>

                    <template v-slot:tabBody>
                        <div class="tab-body-item active w-full pb-44 px-4">
                            <h2 class="font-poppins font-medium text-base mt-6">Paket konsultasi Call dengan dokter untuk selalu terjaga kesehatanmu</h2>
                            <h3 class="font-poppins text-xs text-gray-350 mt-1 leading-4">Ambil paketnya hanya dalam durasi waktu yang kamu inginkan!</h3>
                            <div class="mt-4">
                                <CardExplorePackage img="../../assets/images/image-package.png" title="Stay Healthy Silver" subTitle="Call dokter umum 10x/1bln & voucher potongan terbatas" price="Rp15.000" duration="1 minggu" />
                            </div>
                            <div class="mt-4">
                                <CardExplorePackage img="../../assets/images/image-package.png" title="Stay Healthy Silver" subTitle="Call dokter umum 10x/1bln & voucher potongan terbatas" price="Rp20    .000" duration="1 minggu" />
                            </div>
                            <h2 class="font-poppins font-medium text-base mt-6">Paket Monitoring Spesialis Jantung</h2>
                            <h3 class="font-poppins text-xs text-gray-350 mt-1 leading-4">Monitoring jantung dengan dokter spesialis yang selalu siap sedia untukmu!</h3>
                            <div class="mt-4">
                                <CardExplorePackage img="../../assets/images/image-package-heart.png" title="Monitoring Jantung" subTitle="Call dokter spesialis 10x/1bln & meet dokter 3x/bln" price="Rp50.000" duration="1 minggu" />
                            </div>
                            <h2 class="font-poppins font-medium text-base mt-6">Paket Monitoring Spesialis Obygn</h2>
                            <h3 class="font-poppins text-xs text-gray-350 mt-1 leading-4">Monitoring kehamilan kamu dengan dokter spesialis untuk kesehatan ibu & calon buah hatimu</h3>
                            <div class="mt-4">
                                <CardExplorePackage img="../../assets/images/image-package-obgyn.png" title="Monitoring Hamil" subTitle="Checkup kehamilan dokter obygn 2x/1bln " price="Rp200.000" duration="1 bln" />
                            </div>
                        </div>
                        <div class="tab-body-item">
                            <h2>Call Doctor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem tempore corrupti eius rerum dolore, natus id, consequuntur magni deleniti alias et delectus porro corporis optio nisi aliquid! Ad, natus?</p>
                        </div>
                
                    </template>
                </Tabs>
            </div>
        </nuxt-layout>
    </div>
</template>


<style>

</style>