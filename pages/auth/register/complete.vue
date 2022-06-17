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
        selection : []
    })

    const stateBottomSheet = reactive({
        selection : null,
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
        stateBottomSheet.selection = value
        openModal.value = true
    }
    const changeOpen = (value) => {
        openModal.value = value
    }

    const changeSelect = (value) => {
        // state.gender = value
        const split = value.split("||")
        if (split[1] === 'gender') {
            state.gender = split[0]
        }else if(split[1] === 'identity'){
            state.identity = split[0]
            
        }else if(split[1] === 'province'){
            state.province = split[0]
        }else if(split[1] === 'regency'){
            state.regency = split[0]
        }else if(split[1] === 'district'){
            state.district = split[0]
        }else if(split[1] === 'village'){
            state.village = split[0]
        }
        state.selection[split[1]] = split[0]
        
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
                <InputText className="rounded-md"  type="text" placeholder="gender" v-model="state.gender" src="../../assets/images/arrow_down.svg" :icon="true" select="gender" slc @update:slc-value="slcValue" />
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
             <BottomSheet :openModal="openModal" @update:change-open="changeOpen" @update:change-select="changeSelect" :select="stateBottomSheet.selection" :list="listMap" firstSelect="gender" :choose="state.selection" :searchIcon="searchIcon" />
             <!-- <BottomSheet :openModal="openModal" @update:change-open="changeOpen" @update:change-select="changeSelect" :select="stateBottomSheet.selection" :list="listMap" firstSelect="gender" :choose="state.selection" type='date' /> -->
            <div class="mt-40">

            </div>
        </div>
       

        <div class="bottom-box fixed bottom-0 right-0 w-full bg-white pt-5 px-6 pb-10 z-10">
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

</style>