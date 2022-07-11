<script>

</script>

<template>
    <div>
        <nuxt-layout name="main">
            <div class="edit-profile-wrapper h-full relative w-full">
                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="../../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Edit Profile</h1>
                        <div></div>
                    </div>
                </div>
                <section class="edit-profile-body px-4 pt-20 relative">
                    <div class="image-profile w-full flex justify-center items-center">
                        <div class="w-20 h-20 overflow-hidden rounded-full relative">
                            <img src="../../assets/images/profile_header.png" alt="">
                            <div class="absolute w-full h-4 z-20 bg-gray-900 opacity-50 bottom-0 text-center">
                               <p class="font-poppins tracking-wide font-medium text-white" style="font-size: 10px; margin-top: 1px;">Edit</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-7">
                        <div class="input-form">
                            <InputText className="rounded-md" type="text" placeholder="Name" />
                        </div>
                        
                    </div>
                </section>
            </div>
        </nuxt-layout>
    </div>
</template>


<style>

</style>