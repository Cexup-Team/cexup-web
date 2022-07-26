<script setup lang="ts">

    import Ref from "vue"

    const state = reactive({
        show: false
    })


    onMounted(() => {
        let styleFloatingTop = document.getElementsByClassName("floating-detail-package")[0]
        let floatingTop = document.getElementsByClassName("floating-detail-package")[0].offsetTop + 28
        console.log(floatingTop)

        let layoutWrapper = document.getElementsByClassName("layout-wrapper")
        layoutWrapper[0].addEventListener("scroll", (e) =>  {
            // myFunc()
            // console.log(e.target.scrollTop)
            if(floatingTop < e.target.scrollTop){
                state.show = true
                styleFloatingTop.classList.remove("init")
                styleFloatingTop.classList.add("sticky")
            } else{
                state.show = false 
                styleFloatingTop.classList.add("init")
                styleFloatingTop.classList.remove("sticky")
            }  
        }, { passive: true })
    })

</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="pack-detail-wrapper h-full relative w-full">
                <div class="nav-bar-package flex justify-between mt-7 mx-6 items-center">
                    <img src="../../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                    <h1 class="font-poppins text-xl font-semibold">Package</h1>
                    <div>
                    </div>
                </div>
                <div class="pack-detail-item w-full mt-6 relative" style="height: 240px;">
                    <img src="../../assets/images/image-package.png" class="object-cover object-top w-full h-full" alt="">
                   
                </div>
                <div class="mt-24">
                    <div class="w-full flex justify-center items-center">
                        <div class="flex items-center bg-blue-150 py-2 px-4" style="border-radius: 10px;">
                            <img src="../../assets/images/coupon_icon.svg" class="w-5 h-4" alt="">
                            <h5 class="font-poppins text-sm ml-3">Hemat hingga Rp5000</h5>
                        </div>
                    </div>
                    <div class="px-4">
                        <div class="card-detail-pack bg-white p-4">
                            <div class="bg-gray-450 px-4 py-2" style="border-radius: 10px;">
                                <h2 class="text-lg font-poppins font-medium">Manfaat utama</h2>
                                <ul class="mt-4">
                                    <li class="flex items-center">
                                        <div class="h-1 w-1 rounded-full bg-gray-900 ml-2 mr-3"></div>
                                        <span class="text-sm font-poppins">Chat dokter umum 10x/bulan</span>
                                    </li>
                                    <li class="flex items-center mt-2">
                                        <div class="h-1 w-1 rounded-full bg-gray-900 ml-2 mr-3"></div>
                                        <span class="text-sm font-poppins">Voucher diskon khusus</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-poppins text-lg font-medium mt-4">Kenapa beli paket ini?</h2>
                            <p class="font-poppins text-sm mt-2 leading-5">Prioritaskan kesehatan kamu dengan berlangganan paket yang menawarkan telekonsultasi dengan dokter umum hingga Rp. 25rb per konsukltasi selama 1 bulan dengan harga yang sangat terjangkau.</p>
                            <h4 class="font-poppins text-sm mt-4">See <span class="text-primary-color">Syarat & Ketentuan</span> for this package</h4>
                        </div>

                        <h2 class="font-poppins text-base font-medium mt-6">How subsciption works</h2>
                          <ul class="mt-4">
                            <li class="flex items-start">
                                <div class="w-auto">
                                    <div class="h-1 w-1 rounded-full bg-gray-900 mt-2 ml-2 mr-3"></div>
                                </div>
                                <span class="w-full text-sm font-poppins col-span-11">Setelah berlangganan paket pilihanmu, kami akan memberikan voucher yang sesuai ke akunmu.</span>
                            </li>
                            <li class="flex items-start mt-2">
                                <div class="w-auto">
                                    <div class="h-1 w-1 rounded-full bg-gray-900 mt-2 ml-2 mr-3"></div>
                                </div>
                                <span class="w-full text-sm font-poppins col-span-11">Voucher ini dapat diakses melalui halaman ‘My Subscribe’ di aplikasi Cexup.</span>
                            </li>
                            <li class="flex items-start mt-2">
                                <div class="w-auto">
                                    <div class="h-1 w-1 rounded-full bg-gray-900 mt-2 ml-2 mr-3"></div>
                                </div>
                                <span class="w-full text-sm font-poppins col-span-11">Cukup klik ‘voucher’ untuk melihat voucher kamu, lalu klik ‘Gunakan Sekarang’ sebelum memesan telekonsultasi call dokter.</span>
                            </li>
                             <li class="flex items-start mt-2">
                                <div class="w-auto">
                                    <div class="h-1 w-1 rounded-full bg-gray-900 mt-2 ml-2 mr-3"></div>
                                </div>
                                <span class="w-full text-sm font-poppins col-span-11">Harap diperhatikan bahwa tidak ada pengingat yang akan dikirim sebelum tanggal masa habis paket.</span>
                            </li>
                             <li class="flex items-start mt-2">
                                <div class="w-auto">
                                    <div class="h-1 w-1 rounded-full bg-gray-900 mt-2 ml-2 mr-3"></div>
                                </div>
                                <span class="w-full text-sm font-poppins col-span-11">Lakukan telekonsultasi lanjutan sesuai rekomendasi dari Dokter Umum (untuk mendapatkan hasil yang maksimal)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="pt-32"></div>

                <div class="floating-detail-package init z-10 w-full px-4">
                    <div class="floating-detail-package-item grid grid-cols-2 w-full rounded-xl">
                        <div class="text-center py-3 bg-primary-color rounded-l-xl">
                            <h2 class="text-xs font-poppins text-white">Paket Stay Healthy 1</h2>
                            <h3 class="font-poppins mt-1 text-base text-white font-medium">Rp45.000</h3>
                            <h4 class="font-poppins text-sm mt-1 text-white transition-all duration-300" v-if="!state.show">/ 1 bulan</h4>
                        </div>
                        <div class="text-center py-3 bg-white rounded-r-xl">
                            <h2 class="text-xs font-poppins text-gray-350">Paket Stay Healthy 2</h2>
                            <h3 class="font-poppins mt-1 text-base font-medium text-gray-350">Rp125.000</h3>
                            <h4 class="font-poppins text-sm mt-1 text-gray-350 transition-all duration-300" v-if="!state.show">/ 3 bulan</h4>
                        </div>
                    </div>
                </div>

                <div class="floting-detail-pack-button fixed bottom-0 w-full p-4 bg-white">
                     <Button className="w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Buy Now" />
                </div>
            </div>

            

        </nuxt-layout>
    </div>
</template>


<style>
    .floating-detail-package-item {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }

    .card-detail-pack {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
        border-radius: 10px;
    }

    @media only screen and (min-width: 300px) {
        .floating-detail-package.sticky {
            /* bottom: 0; */
            left: 50%;
            margin-top: -100px; 
            margin-left: -255px;
            width: 510px;
            top: 200px;
            /* position: fixed; */
        }
    }

    @media only screen and (min-width: 300px) {
        .floting-detail-pack-button {
            bottom: 0;
            left: 50%;
            margin-top: -100px; 
            margin-left: -255px;
            width: 510px;
            position: fixed;
        }
    }

    .floting-detail-pack-button {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
        border-radius: 12px 12px 0px 0px;
    }

/* 
    @media only screen and (max-width: 700px) {
        .floating-detail-package.sticky {
        top: 10px;
        position: fixed;
    }
    } */

    

    .floating-detail-package.init {
        top: 260px;
        position: absolute;
    }
    
    .floating-detail-package.sticky {
        top: 110px;
        position: fixed;
    }
    
</style>