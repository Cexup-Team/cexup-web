<script setup lang="ts">
    import { Ref } from "vue"

    interface CompleteState{
        slcValue : string,

    }

    let openModal: Ref<boolean> = ref(false)
    const state  = reactive({
        gender : '',
        identity : '',
        province: '',
        regency : '',
        district :'',
        village : '',
        selection : [],
        item : null,
        selectActive : '',
        searchIcon : ["province", "regency", "district", "village"]
    })

    

    const props = defineProps({
        list : {
            type: Array
        },
        title: {
            type: String
        },
        select :{
            type: String
        }
        
    })


    const complete: CompleteState = reactive({
        slcValue : "",
    })


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

    const listMap = new Map()

    listMap.set('identity', ["KTP", "KITAS", "PASSPORT"])
    listMap.set('gender', ["Male", "Female"])
    listMap.set('province', ["Jawa Tengah", "Jawa Barat", "DKI Jakarta", "Banten", "Aceh", "Maluku"])
    listMap.set('regency', ["Semarang", "Tegal", "Purwokerto", "Pemalang", "Surakarta", "Kendal"])
    listMap.set('district', ["Banjarsari", "Jebres", "Mangkunegaran", "Serengan"])
    listMap.set('village', ["Kadipiro", "Skip", "Mojosongo"])


    const searchIcon = ["province", "regency", "district", "village"]
    

</script>

<template>
  <div>
      <nuxt-layout name="auth">
        <div class="mt-9 p-4">
            <h2 class="text-lg text-primary-color font-bold mt-9 w-full text-center font-poppins">Complete Profile</h2>
            <div class="inputForm mt-6">
                <InputText className="rounded-md" type="text" placeholder="Phone Number" />
            </div>
            <div class="inputForm mt-7">
                <InputText className="rounded-md" type="text" placeholder="Date of Birth" src="../../assets/images/calendar.svg" :icon="true" slc @update:slc-value="slcValue" select="date" />
            </div>
            <div class="inputForm mt-7">
                <InputText className="rounded-md"  type="text" placeholder="Gender" v-model="state.gender" src="../../assets/images/arrow_down.svg" :icon="true" select="gender" slc @update:slc-value="slcValue" />
            </div>
            <div class="inputForm mt-7">
              <InputText className="rounded-md"  type="text" placeholder="Identity" v-model="state.identity" src="../../assets/images/arrow_down.svg" :icon="true" select="identity" slc @update:slc-value="slcValue" />
            </div>

            <div class="inputForm mt-7">
              <InputText className="rounded-md"  type="text" placeholder="Province" v-model="state.province" src="../../assets/images/arrow_down.svg" :icon="true" select="province" slc @update:slc-value="slcValue" />
            </div>
            <div class="inputForm mt-7">
              <InputText className="rounded-md"  type="text" placeholder="Regency" v-model="state.regency" src="../../assets/images/arrow_down.svg" :icon="true" select="regency" slc @update:slc-value="slcValue" />
            </div>
            <div class="inputForm mt-7">
              <InputText className="rounded-md"  type="text" placeholder="District" v-model="state.district" src="../../assets/images/arrow_down.svg" :icon="true" select="district" slc @update:slc-value="slcValue" />
            </div>
            <div class="inputForm mt-7">
              <InputText className="rounded-md"  type="text" placeholder="Village" v-model="state.village" src="../../assets/images/arrow_down.svg" :icon="true" select="village" slc @update:slc-value="slcValue" />
            </div>
             <!-- <BottomSheet :openModal="openModal" @update:change-open="changeOpen" @update:change-select="changeSelect" :select="stateBottomSheet.selection" :list="listMap" firstSelect="gender" :choose="state.selection" :searchIcon="searchIcon" /> -->
             <!-- <BottomSheet :openModal="openModal" @update:change-open="changeOpen" @update:change-select="changeSelect" :select="stateBottomSheet.selection" :list="listMap" type='blank' /> -->
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
            <div class="mt-56">

            </div>
        </div>
       

        <div class="bottom-box floating-next fixed bottom-0 right-0 w-full bg-white pt-5 px-6 pb-10 z-10">
                <Button className="w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Next" />
            <p class="w-full text-center text-primary-color mt-5">Skip</p>
        </div>

     
      </nuxt-layout>
  </div>
</template>

<style>
    .bottom-box {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
        border-radius: 12px 12px 0px 0px;
    }

    .search_input {
        border-radius: 10px;
    }

    @media only screen and (min-width: 700px) {
        .floating-next {
            bottom: 0;
            left: 50%; 
            margin-left: -255px;
            width: 510px;   

        }
    }

</style>