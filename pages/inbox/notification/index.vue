<script setup lang="ts">

    import Tabs from '~~/parts/Tabs.vue';
</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="notif-wrapper w-full h-full relative">
                <div class="flex justify-between mt-7 mx-6 items-center">
                    <img src="~/assets/images/icon_back.svg" class="w-3 h-4" alt="">
                    <h1 class="font-poppins text-xl font-semibold">Inbox</h1>
                    <div>

                    </div>
                </div>
                <Tabs bgBody="bg-white">
                    <template v-slot:tabHeader>
                        <div class="active font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5">
                            Notification
                        </div>
                        <div class="font-poppins text-center font-semibold cursor-pointer outline-none text-sm leading-5">
                            Mail (1)
                        </div>
                    </template>
                    <template v-slot:tabBody>
                        <div class="tab-body-item active w-full pb-44">
                            <CardNotif img="~/assets/images/telephone_icon.svg" title="Call Doctor" time="01 Jun, 04:20 AM" notif="Order selesai! jangan lupa berikan ulasan untuk pembelianmu, ya" />
                            <hr class="bg-gray-225 w-full" style="height: 2px;">
                            
                            <CardNotif img="~/assets/images/bag_icon.svg" title="Meet Doctor" time="30 Mei, 03:10 AM" notif="Order selesai! jangan lupa berikan ulasan untuk pembelianmu, ya" />
                            <hr class="bg-gray-225 w-full" style="height: 2px;">

                            <CardNotif img="~/assets/images/telephone_icon.svg" title="Call Doctor" time="30 Mei, 01:20 AM" notif="Kamu telah membuat order untuk tanggal 31 Mei 2022 sebesar Rp5.000. Klik buat cek rinciannya." />
                            <hr class="bg-gray-225 w-full" style="height: 2px;">

                            <CardNotif img="~/assets/images/bag_icon.svg" title="Meet Doctor" time="29 Mei, 02:30 AM" notif="Reschedule Confirm! dokter minta jadwal bookingnya dirubah nih. Klik buat liat informasinya." />
                            <hr class="bg-gray-225 w-full" style="height: 2px;">

                            <CardNotif img="~/assets/images/telephone_icon.svg" title="Call Doctor" time="28 Mei, 02:15 AM" notif="Order dibatalkan! jangan khawatir kamu bisa order ulang disini ya." />
                            <hr class="bg-gray-225 w-full" style="height: 2px;">
                            
                        </div>
                        <div class="tab-body-item px-4 pb-44 w-full">
                            <h2 class="text-base font-poppins font-medium text-gray-350 mt-5">Paket Langganan</h2>
                            <div class="mt-4">
                                <CardMySubscribePackage title="Stay Healthy Silver" price="Rp45.000/ Bulan" duration="04 Jun 2022" status />
                            </div>
                             <div class="mt-4">
                                <CardMySubscribePackage title="Stay Healthy Gold" price="Rp60.000/ Bulan" duration="31 Jun 2022" />
                            </div>

                            <div class="mt-10"></div>
                        </div>
                
                    </template>
                </Tabs>
            </div>
        </nuxt-layout>
    </div>
</template>


<style>

</style>