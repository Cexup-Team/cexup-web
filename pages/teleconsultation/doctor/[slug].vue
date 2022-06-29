<script setup lang="ts">
     setTimeout(() => {
            let tabStatus = document.getElementsByClassName("card-select-date")[0]
            let tabPaneStatus = document.getElementsByClassName("card-select-date-item")

            let tabTime = document.getElementsByClassName("card-select-time")[0]
            let tabPaneTime = document.getElementsByClassName("card-select-time-item")

            for (let i = 0; i < tabPaneStatus.length; i++) {
                tabPaneStatus[i].addEventListener("click", function() {
                    tabStatus.getElementsByClassName("active")[0].classList.remove("active")
                    tabPaneStatus[i].classList.add("active")
                })
            }

            for (let i = 0; i < tabPaneTime.length; i++) {
                tabPaneTime[i].addEventListener("click", function() {
                    tabTime.getElementsByClassName("active")[0].classList.remove("active")
                    tabPaneTime[i].classList.add("active")
                })
            }
        }, 300);
</script>
<template>
  <div>
    <nuxt-layout name="main">
            <div class="choose-schedule-wrapper relative">

                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="../../../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Choose Schedule</h1>
                        <div></div>
                    </div>
                </div>
                <div class="mt-20">
                    <section class="choose-schedule-header px-5 relative">                   
                        <div class="relative">
                            <div class="flex items-center justify-start">
                                <div class="w-24 h-24 rounded-full overflow-hidden">
                                    <img src="../../../assets/images/doctor_img.png" class="object-cover" alt="">
                                </div>
                                <div class="flex flex-col ml-4">
                                    <h2 class="font-poppins font-semibold text-lg">dr Iqbal Nur Haq</h2>
                                    <h4 class="font-poppins text-gray-350 text-xs">Dermatologist</h4>

                                    <div class="flex items-center mt-4">
                                        <div class="flex items-center bg-primary-color px-2 py-1 rounded-md mr-3">
                                            <img src="../../../assets/images/bag_icon_fill.svg" class="w-3 h-3 mr-2" alt="">
                                            <span class="text-xs font-light text-white font-poppins">5 Years</span>
                                        </div>
                                        <img src="../../../assets/images/icon_pin.svg" class="w-4 h-5" alt="">
                                    </div>
                                </div>
                            </div>
                            <p class="font-poppins text-xs text-gray-350 mt-4">Doctor of Medicine or Doctor of University Indonesia from an best accredited school in Indonesia</p>
                            <div class="w-full flex items-center mt-6">
                                <div class="bg-blue-150 w-auto flex items-center px-2 py-2 rounded-lg mr-3">
                                    <img src="../../../assets/images/shield_icon.svg" class="w-3 mr-2" alt="">
                                    <span class="text-xs font-poppins">STR-31.1.1.100.1.20.206361</span>
                                </div>
                                <div class="bg-blue-150 w-auto flex items-center px-2 py-2 rounded-lg">
                                    <img src="../../../assets/images/place_icon_red.svg" class="w-3 mr-2" alt="">
                                    <span class="text-xs font-poppins whitespace-nowrap">RS. Pusdokkes</span>
                                </div>
                            </div>
                        </div> 
                    </section>
                    <section class="bg-blue-150 px-5 py-2 mt-4 choose-schedule-body">
                        <div class="flex justify-between items-center">
                            <div class="">
                                <h4 class="font-medium font-poppins text-lg">Rp5.000</h4>
                                <span class="text-gray-350 font-poppins font-medium text-xs discount relative">Rp 15.000</span>
                            </div>
                            
                            <div class="px-3 py-2 rounded-md border-dashed border-teal-750 border-2">
                                <div class="flex items-center">
                                    <img src="../../../assets/images/discount_call_icon.svg" class="w-5 mr-2" alt="">
                                    <span class="text-teal-750 font-poppins font-medium text-sm">DISKONCALL</span>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section class="mt-6">
                        <div class="chest-pain px-5">
                           <h2 class="text-base font-poppins font-semibold">My Simptons</h2>
                           <input type="text" class="mt-4 p-4 text-sm w-full rounded-md font-poppins border border-gray-150 text-gray-900 outline-none placeholder:text-gray-900" placeholder="Chest pain">
                        </div>
                        <div class="avaibility-schedule">
                            <div class="flex justify-between mt-4 items-center px-5">
                                <h2 class="text-base font-poppins font-semibold">Avaibility</h2>
                                <span class="text-sm font-poppins"> Febuari</span>
                            </div>
                            <div class="card-select-date flex justify-start mt-4 overflow-x-scroll no-scrollbar px-5">
                                <div class="card-select-date-item cursor-pointer transition-all duration-300 ease-in-out mr-5 rounded-xl">
                                    <div class="flex flex-col items-center w-16 h-20 justify-center">
                                        <h5 class="font-poppins text-lg font-semibold">12</h5>
                                        <span class="text-gray-350 font-poppins text-sm">Mon</span>
                                    </div>
                                </div>
                                <div class="card-select-date-item cursor-pointer transition-all duration-300 ease-in-out rounded-xl mr-5 ">
                                    <div class="flex flex-col items-center w-16 h-20 justify-center">
                                        <h5 class="font-poppins text-lg font-semibold">12</h5>
                                        <span class="text-gray-350 font-poppins text-sm">Mon</span>
                                    </div>
                                </div>
                                
                                <div class="card-select-date-item cursor-pointer transition-all duration-300 ease-in-out rounded-xl mr-5 active">
                                    <div class="flex flex-col items-center w-16 h-20 justify-center">
                                        <h5 class="font-poppins text-lg font-semibold">12</h5>
                                        <span class="text-gray-350 font-poppins text-sm">Mon</span>
                                    </div>
                                </div>
                                <div class="card-select-date-item cursor-pointer transition-all duration-300 ease-in-out rounded-xl mr-5">
                                    <div class="flex flex-col items-center w-16 h-20 justify-center">
                                        <h5 class="font-poppins text-lg font-semibold">12</h5>
                                        <span class="text-gray-350 font-poppins text-sm">Mon</span>
                                    </div>
                                </div>
                                <div class="card-select-date-item cursor-pointer transition-all duration-300 ease-in-out rounded-xl mr-5">
                                    <div class="flex flex-col items-center w-16 h-20 justify-center">
                                        <h5 class="font-poppins text-lg font-semibold">12</h5>
                                        <span class="text-gray-350 font-poppins text-sm">Mon</span>
                                    </div>
                                </div>
                                <div class="card-select-date-item cursor-pointer transition-all duration-300 ease-in-out rounded-xl mr-5">
                                    <div class="flex flex-col items-center w-16 h-20 justify-center">
                                        <h5 class="font-poppins text-lg font-semibold">12</h5>
                                        <span class="text-gray-350 font-poppins text-sm">Mon</span>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div class="mt-4 px-5">
                                <h2 class="text-base font-poppins font-semibold">Select Time</h2>
                            </div>
                            <div class="select-time mt-4">
                                <div class="card-select-time grid grid-cols-3 gap-4 px-4">
                                    <div class="px-5 py-2 text-center border border-primary-color rounded-xl w-full card-select-time-item cursor-pointer outline-none transition-all duration-300 ease-in-out overflow-hidden">
                                        <h4 class="font-poppins text-sm whitespace-nowrap">09:00 am</h4>
                                    </div>
                                      <div class="px-5 py-2 text-center border border-primary-color rounded-xl w-full card-select-time-item cursor-pointer outline-none transition-all duration-300 ease-in-out overflow-hidden">
                                        <h4 class="font-poppins text-sm whitespace-nowrap">09:15 am</h4>
                                    </div>
                                      <div class="px-5 py-2 text-center border border-primary-color rounded-xl w-full card-select-time-item cursor-pointer outline-none transition-all duration-300 ease-in-out overflow-hidden active">
                                        <h4 class="font-poppins text-sm whitespace-nowrap">09:30 am</h4>
                                    </div>
                                    <div class="px-5 py-2 text-center border border-primary-color rounded-xl w-full card-select-time-item cursor-pointer outline-none transition-all duration-300 ease-in-out overflow-hidden">
                                        <h4 class="font-poppins text-sm whitespace-nowrap">09:45 am</h4>
                                    </div>
                                      <div class="px-5 py-2 text-center border border-primary-color rounded-xl w-full card-select-time-item cursor-pointer outline-none transition-all duration-300 ease-in-out overflow-hidden">
                                        <h4 class="font-poppins text-sm whitespace-nowrap">10:00 am</h4>
                                    </div>
                                  
                                </div>
                            </div>
                            <div class="mt-6 px-4 mb-10">
                                <Button className="w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Next" link="/teleconsultation/doctor/register" />
                            </div>
                        </div>
                    </section>
                </div>
      


            </div>
    </nuxt-layout>
  </div>
</template>


<style>
    .choose-schedule-body .discount::after {
        content: '';
        width: 100%;
        height: 1.2px;
        background: #8A8A8E;
        position: absolute;
        left: 0;
        right: 0;
        top: 45%;
    }

    .card-select-date .card-select-date-item.active {
        background-color: #008CA3;
        box-shadow: 11px 8px 20px rgba(0, 140, 163, 0.2);
    }
    .card-select-date .card-select-date-item.active span {
        color: #FFF;
    }

    .card-select-date .card-select-date-item.active h5 {
        color: #FFF;
    }


    .card-select-time .card-select-time-item.active {
        background-color: #008CA3;
    }

    .card-select-time .card-select-time-item.active h4 {
        color: #FFF;
    }
</style>