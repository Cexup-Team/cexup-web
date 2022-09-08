<script setup lang="ts">
    import { Ref } from "vue"
    import { useRegionStore } from '~~/stores/region-store';
    import { useUserStore } from '~~/stores/user-store';
    import {getMapValue, replacer, reviver} from '../../../../utils/getMapValue';
    import Datepicker from '@vuepic/vue-datepicker'
    import '@vuepic/vue-datepicker/dist/main.css'
    import { useToast, useModal } from 'tailvue'
    import { useRouter } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import {aesEncrypt, aesDecrypt} from '../../../../utils/crypto';
import { stat } from "fs";

     
    const session = useSession()


    interface CompleteState{
        slcValue : string,

    }

    let openModal: Ref<boolean> = ref(false)
    const state  = reactive({
        country : 'Indonesia',
        country_id : '1',
        province_id : '',
        province: '',
        regency_id : '',
        regency : '',
        district_id : '',
        district :'',
        village_id : '',
        village : '',
        postal_code: '',
        rt: '',
        rw: '',
        selection : [],
        item : null,
        selectActive : '',
        searchIcon : ["province", "regency", "district", "village"],
        mapProvince: new Map(),
        listProvince: [],
        mapRegency: new Map(),
        listRegency: [],
        mapDistrict: new Map(),
        listDistrict: [],
        mapVillage: new Map(),
        mapPostal: new Map(),
        listVillage: [],
        isLoading: false,
        isData : null,
        isStatus: 'idle',
        isErrorMessage: {
            'province': '',
            'regency' : '',
            'district' : '',
            'village':''
        }
    })
    const listMap = new Map()
    const region = useRegionStore()
    const user = useUserStore()
    const $toast = useToast()
    const router = useRouter()

    

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
        state.selectActive === 'province' ? state.province = value
            : state.selectActive === 'regency' ? state.regency = value
            : state.selectActive === 'district' ? state.district = value
            : state.selectActive === 'village' ? state.village = value 
            : null
            
        openModal.value = false
    }

    const getRegion = (id, reg) => {
        
        region.getRegion(id).then(
            res => {
                reg === "province" ? 
                    res.data.map((item, index) => {
                        state.mapProvince.set(item.kode, item.name)
                        state.listProvince.push(item.name)
                    }) :
                reg === "regency" ?
                    res.data.map((item, index) => {
                        state.mapRegency.set(item.kode, item.name)
                        state.listRegency.push(item.name)
                    })  :
                reg === "district" ?
                    res.data.map((item, index) => {
                        state.mapDistrict.set(item.kode, item.name)
                        state.listDistrict.push(item.name)
                    }) :
                reg === "village" ?
                    res.data.map((item, index) => {
                        state.mapVillage.set(item.kode, item.name)
                        state.mapPostal.set(item.name, item.postal_code)
                        state.listVillage.push(item.name)
                    }) : ""
            }
        ).catch(
            
        )
        // state.isLoading = false
    }


    watch(() => [state.province, state.regency, state.district, state.village], async ([newProvince, newRegency, newDistrict, newVillage], [ oldProvince, oldRegency, oldDistrict, oldVillage]) => {
        // console.log(newProvince)
        if (newProvince !== '' && newProvince !== oldProvince) {

            state.regency = ''
            state.regency_id = ''
            state.district = ''
            state.district_id = ''
            state.village = ''
            state.village_id = ''
            state.postal_code = ''

            state.listRegency = []
            state.mapRegency = new Map()
            state.province_id = await getMapValue(state.mapProvince, newProvince)
            await getRegion(state.province_id, "regency")
            listMap.set('regency', state.listRegency)
        }else if (newRegency !== '' && newRegency !== oldRegency){
            state.district = ''
            state.district_id = ''
            state.village = ''
            state.village_id = ''
            state.postal_code = ''
            state.listDistrict = []
            state.mapDistrict = new Map()
            state.regency_id = await getMapValue(state.mapRegency, newRegency)
            await getRegion(state.regency_id, "district")
            listMap.set('district', state.listDistrict)
        }else if (newDistrict !== '' && newDistrict !== oldDistrict){
            state.village = ''
            state.village_id = ''
            state.postal_code = ''
            state.listVillage = []
            state.mapVillage = new Map()
            state.district_id = await getMapValue(state.mapDistrict, newDistrict)
            await getRegion(state.district_id, "village")
            listMap.set('village', state.listVillage)
        }else if (newVillage !== '' && newVillage !== oldVillage){
            state.village_id = await getMapValue(state.mapVillage, newVillage)
            state.postal_code = state.mapPostal.get(state.village)
        }
        
    })


    const searchIcon = ["province", "regency", "district", "village"]

        
    
    onMounted(() => {
        
        const users = JSON.parse(aesDecrypt(session.getItem('cexup-profile')))
        if (users.province_id || users.regency_id || users.district_id || users.village_id) {
            state.province_id = users.province_id
            state.regency_id = users.regency_id
            state.district_id = users.district_id
            state.village_id = users.village_id
            setTimeout(() => {
                state.province = users.province
            }, 500);
            setTimeout(() => {
                state.regency = users.regency
            }, 1000);
            setTimeout(() => {
                state.district = users.district
            }, 1500);
            setTimeout(() => {
                state.village = users.village
            }, 2000);
            state.postal_code = users.postal_code
            state.rt = users.rt
            state.rw = users.rw
            
        }

        // console.log(users)
       
        getRegion("", "province")
        listMap.set('identity', ["KTP", "KITAS", "PASSPORT"])
        listMap.set('gender', ["Male", "Female"])
        listMap.set('province', state.listProvince)
 
        
    })


    const next = () => {

        try {
            if (!state.province_id || !state.regency_id || !state.district_id ||!state.village_id || !state.rt || !state.rw) return $toast.show({
                type: 'danger',
                message: 'Please enter all field',
                timeout: 4,
            }) 
        
            const users = JSON.parse(aesDecrypt(session.getItem('cexup-profile')))
            users['province'] = state.province
            users['province_id'] = state.province_id
            users['regency'] = state.regency
            users['regency_id'] = state.regency_id
            users['district'] = state.district
            users['district_id'] = state.district_id
            users['village'] = state.village
            users['village_id'] = state.village_id 
            users['postal_code'] = state.postal_code
            users['rt'] = state.rt 
            users['rw'] = state.rw 
            session.setItem('cexup-profile', aesEncrypt(JSON.stringify(users)))
            router.push('/auth/register/rsui/complete_third')
        } catch (error) {
            console.log(error)
        }
        
   
        
    } 

    

</script>

<template>
    <div>
        <nuxt-layout name="auth">
            <div class="mt-9 p-4">
                <h2 class="text-lg text-primary-color font-bold mt-9 w-full text-center font-poppins">Orginal Address
                </h2>
                <div class="inputForm mt-7">
                    <InputText className="rounded-md" type="text" placeholder="Country" v-model="state.country"
                        src="../../assets/images/arrow_down.svg" :icon="true" select="" slc
                        @update:slc-value="slcValue" />
                </div>
                <div class="inputForm mt-7">
                    <InputText className="rounded-md" type="text" placeholder="Province" v-model="state.province"
                        src="../../assets/images/arrow_down.svg" :icon="true" select="province" slc
                        @update:slc-value="slcValue" />
                </div>
                <div class="inputForm mt-7">
                    <InputText className="rounded-md" type="text" placeholder="Regency" v-model="state.regency"
                        src="../../assets/images/arrow_down.svg" :icon="true" select="regency" slc
                        @update:slc-value="slcValue" />
                </div>
                <div class="inputForm mt-7">
                    <InputText className="rounded-md" type="text" placeholder="District" v-model="state.district"
                        src="../../assets/images/arrow_down.svg" :icon="true" select="district" slc
                        @update:slc-value="slcValue" />
                </div>
                <div class="inputForm mt-7">
                    <InputText className="rounded-md" type="text" placeholder="Village" v-model="state.village"
                        src="../../assets/images/arrow_down.svg" :icon="true" select="village" slc
                        @update:slc-value="slcValue" />
                </div>
                <div class="inputForm mt-6">
                    <InputText className="rounded-md" v-model="state.postal_code" type="number" placeholder="Postal Code" />
                </div>
                <div class="inputForm mt-6">
                    <InputText className="rounded-md" v-model="state.rt" type="number" placeholder="RT" />
                </div>
                <div class="inputForm mt-6">
                    <InputText className="rounded-md" v-model="state.rw" type="number" placeholder="RW" />
                </div>
                <!-- <BottomSheet :openModal="openModal" @update:change-open="changeOpen" @update:change-select="changeSelect" :select="stateBottomSheet.selection" :list="listMap" firstSelect="gender" :choose="state.selection" :searchIcon="searchIcon" /> -->
                <!-- <BottomSheet :openModal="openModal" @update:change-open="changeOpen" @update:change-select="changeSelect" :select="stateBottomSheet.selection" :list="listMap" type='blank' /> -->
                <BottomSheet :openModal="openModal" @update:change-open="changeOpen" type="blank">
                    <template v-slot:bottomSheet>
                        <div class="">
                            <h3 class="text-sm font-semibold font-poppins leading-5 w-full mb-6">
                                {{state.selectActive.charAt(0).toUpperCase() + state.selectActive.slice(1)}}</h3>
                            <div class="relative h-16 max-h-16 min-h-max mb-5"
                                v-if="state.searchIcon.indexOf(state.selectActive) > -1">
                                <input
                                    class="search_input outline-none border border-gray-150 w-full bg-none p-4 font-poppins text-sm absolute top-0 left-0"
                                    placeholder="Search" type="text">
                                <img src="@/assets/images/search_icon.svg"
                                    class="absolute w-5 h-5 right-3 top-0 transform translate-y-3" alt="">
                            </div>
                            <ul class="w-full h-full overflow-y-scroll mt-6 no-scrollbar">
                                <li class="w-full border-b border-solid border-gray-175 pb-2 flex justify-between items-center mb-4"
                                    @click="selectOption(text)" v-for="(text, index) in state.item" :key="index">
                                    <p
                                        :class="'text-base leading-6 font-poppins '+(state[`${state.selectActive}`] === text ? 'text-primary-color' : 'text-gray-350')">
                                        {{text}}</p>
                                    <img v-if="state[`${state.selectActive}`] === text"
                                        src="@/assets/images/check_with_bg.svg" class="m-1" alt="" />
                                </li>
                            </ul>
                        </div>
                    </template>
                </BottomSheet>
                <div class="mt-56">

                </div>
            </div>


            <div class="bottom-box floating-next fixed bottom-0 right-0 w-full bg-white pt-5 px-6 pb-10 z-10">
                <Button
                    className="w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base"
                    title="Next" @click="next" />
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