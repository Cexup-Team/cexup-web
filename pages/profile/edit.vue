<script setup lang="ts">

    import { Ref } from "vue"


    let openModal: Ref<boolean> = ref(false)
    const state  = reactive({
        name : 'Mario Prasetyo',
        date : '2001-08-23',
        gender : 'Male',
        email : 'kotaksuratprasetyo@gmail.com',
        phone : '085782568768',
        address: 'Jl. Nelayan Timur No. 1 RT. 08/RW.07',
        province: 'DKI Jakarta',
        regency : 'Purwokerto',
        district :'Banjarsari',
        village : 'Kadipiro',
        selection : [],
        item : null,
        selectActive : '',
        searchIcon : ["province", "regency", "district", "village"]
    })


    const listMap = new Map()
    listMap.set('identity', ["KTP", "KITAS", "PASSPORT"])
    listMap.set('gender', ["Male", "Female"])
    listMap.set('province', ["Jawa Tengah", "Jawa Barat", "DKI Jakarta", "Banten", "Aceh", "Maluku"])
    listMap.set('regency', ["Semarang", "Tegal", "Purwokerto", "Pemalang", "Surakarta", "Kendal"])
    listMap.set('district', ["Banjarsari", "Jebres", "Mangkunegaran", "Serengan"])
    listMap.set('village', ["Kadipiro", "Skip", "Mojosongo"])



    const slcValue = (value) => {
        state.item = listMap.get(value)
        state.selectActive = value
        openModal.value = true
    }
    const changeOpen = (value) => {
        openModal.value = value
    }


    const selectOption = (value) => {
        state.selectActive === 'gender' ? state.gender = value 
            : state.selectActive === 'identity' ? state.identity = value 
            : state.selectActive === 'province' ? state.province = value
            : state.selectActive === 'regency' ? state.regency = value
            : state.selectActive === 'district' ? state.district = value
            : state.selectActive === 'village' ? state.village = value 
            : null
            
        openModal.value = false
    }
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
                            <InputText className="rounded-md" v-model="state.name" type="text" placeholder="Name" />
                        </div>
                        <div class="inputForm mt-7">
                            <InputText className="rounded-md" type="text" v-model="state.date" placeholder="Date of Birth" src="../../assets/images/calendar.svg" :icon="true" slc @update:slc-value="slcValue" select="date" />
                        </div>
                        <div class="inputForm mt-7">
                            <InputText className="rounded-md" v-model="state.gender"  type="text" placeholder="Gender" src="../../assets/images/arrow_down.svg" :icon="true" select="gender" slc @update:slc-value="slcValue" />
                        </div>
                        <div class="input-form mt-7">
                            <InputText className="rounded-md" type="email" v-model="state.email" placeholder="Email" />
                        </div>
                        <div class="inputForm mt-7">
                            <InputText className="rounded-md" type="text" v-model="state.phone" placeholder="Phone Number" />
                        </div>
                        <div class="inputForm mt-7">
                            <InputText className="rounded-md" type="text" v-model="state.address" placeholder="Address" />
                        </div>
                        <div class="inputForm mt-7">
                            <InputText className="rounded-md"  type="text" v-model="state.province" placeholder="Province"  src="../../assets/images/arrow_down.svg" :icon="true" select="province" slc @update:slc-value="slcValue" />
                        </div>
                        <div class="inputForm mt-7">
                            <InputText className="rounded-md"  type="text" v-model="state.regency" placeholder="Regency"  src="../../assets/images/arrow_down.svg" :icon="true" select="regency" slc @update:slc-value="slcValue" />
                        </div>
                        <div class="inputForm mt-7">
                            <InputText className="rounded-md"  type="text" v-model="state.district" placeholder="District"  src="../../assets/images/arrow_down.svg" :icon="true" select="district" slc @update:slc-value="slcValue" />
                        </div>
                        <div class="inputForm mt-7">
                            <InputText className="rounded-md"  type="text" v-model="state.village" placeholder="Village" src="../../assets/images/arrow_down.svg" :icon="true" select="village" slc @update:slc-value="slcValue" />
                        </div>

                        <Button className="mt-8 w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Save" />

                        <BottomSheet :openModal="openModal" @update:change-open="changeOpen" type="blank">
                            <template v-slot:bottomSheet>
                                <div class="">
                                    <h3 class="text-sm font-semibold font-poppins leading-5 w-full mb-6">{{state.selectActive.charAt(0).toUpperCase() + state.selectActive.slice(1)}}</h3>
                                    <div class="relative h-16 max-h-16 min-h-max mb-5" v-if="state.searchIcon.indexOf(state.selectActive) > -1">
                                        <input class="search_input outline-none border border-gray-150 w-full bg-none p-4 font-poppins text-sm absolute top-0 left-0" placeholder="Search" type="text">
                                        <img src="../../../assets/images/search_icon.svg" class="absolute w-5 h-5 right-3 top-0 transform translate-y-3" alt="">
                                    </div>
                                    <ul class="w-full h-full overflow-y-scroll mt-6 no-scrollbar">
                                        <li class="w-full border-b border-solid border-gray-175 pb-2 flex justify-between items-center mb-4" @click="selectOption(text)" v-for="(text, index) in state.item" :key="index">
                                            <p :class="'text-base leading-6 font-poppins '+(state[`${state.selectActive}`] === text ? 'text-primary-color' : 'text-gray-350')">{{text}}</p>
                                            <img v-if="state[`${state.selectActive}`] === text" src="../../../assets/images/check_with_bg.svg" class="m-1" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </BottomSheet>

                        <div class="pt-40"></div>
                    </div>
                </section>
            </div>
        </nuxt-layout>
    </div>
</template>


<style>
    .search_input {
        border-radius: 10px;
    }

</style>