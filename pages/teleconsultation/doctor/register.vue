
<script>
export default {

}
</script>
<template>
  <div>
     <nuxt-layout name="main">
        <div class="register-schedule-wrapper relative">

                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="../../../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Register Call Doctor</h1>
                        <div></div>
                    </div>
                </div>
                <div class="mt-20 px-4">
                    <section class="">
                        <h2 class="font-poppins font-semibold text-sm">Doctor Information</h2>
                        <div class="card-register-doctor bg-white rounded-xl mt-3        ">
                            <div class="flex items-start p-4">
                                <div class="w-20 h-20 rounded-full overflow-hidden mr-5">
                                    <img src="../../../assets/images/doctor_img.png" class="object-cover" alt="">
                                </div>
                                <div class="flex flex-col">
                                    <h3 class="font-poppins font-medium text-base">Dr Iqbal Nur Haq</h3>
                                    <p class="font-poppins text-xs text-gray-350">Dermatologist</p>
                                    <h5 class="font-poppins text-xs text-gray-350 mt-2">RS. Sari Asih</h5>

                                    <div class="flex items-center mt-1">
                                        <img src="../../../assets/images/bag_icon.svg" class="w-3 h-3 mr-2" alt="">
                                        <span class="text-xs font-poppins">5 Years</span>
                                    </div>
                                    <p class="font-poppins text-xs mt-3">Monday, 14 Feb 2022 09:30 - 09:45</p>
                                  
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="mt-8">
                        <h2 class="font-poppins font-semibold text-base mb-4">Date of Birth</h2>
                        <InputText className="rounded-md" type="text" placeholder="Date of Birth" src="../../assets/images/calendar.svg" :icon="true" slc @update:slc-value="slcValue" select="date" />
                        <h2 class="font-poppins font-semibold text-base mt-6 mb-4">Phone Number</h2>
                        <InputText className="rounded-md" type="text" placeholder="Phone Number" />
                        <h2 class="font-poppins font-semibold text-base mt-6 mb-4">Gender</h2>
                        <div class="grid grid-cols-2">
                            <div class="flex items-center justify-start">
                                <input type="radio" name="gender" class="mr-3 relative transition-all duration-300">
                                <h5 class="font-poppins font-medium text-sm">Male</h5>
                            </div>
                            <div class="flex items-center justify-start">
                                <input type="radio" name="gender" class="mr-3 relative transition-all duration-300">
                                <h5 class="font-poppins font-medium text-sm">Female</h5>
                            </div>
                        </div>
                        <h2 class="font-poppins font-semibold text-base mt-6 mb-4">Questionnaire</h2>
                        <div class="flex justify-start items-center">
                            <img src="../.././../assets/images/kuis_icon.svg" class="w-7 h-7 mr-3" alt="">
                            <h6 class="font-poppins font-medium text-sm">Please fill it out</h6>
                        </div>
                    </section>
                    <div class="mt-12 mb-10">
                        <Button className="w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Checkout" link="/teleconsultation/doctor/checkout" />
                    </div>
                </div>
        </div>
     </nuxt-layout>
  </div>
</template>

<style>
    .card-register-doctor {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }


    input[type="radio"] {
        /* ...existing styles */
        display: grid;
        place-content: center;
        width: 20px;
        height: 20px;
        
    }

    input[type="radio"]::before {
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        border: 3px solid #008CA3;
        background: white;
        border-radius: 50%;
        z-index: 20;
    
    }

    input[type="radio"]:checked::after {
        content: "";
        width: 10px;
        height: 10px;
        left: 5px;
        right: 0;
        top: 5px;
        bottom: 0;
        border-radius: 50%;
        position: absolute;
        background: white;
        background-color: #008CA3;
        z-index: 30;
    }
</style>