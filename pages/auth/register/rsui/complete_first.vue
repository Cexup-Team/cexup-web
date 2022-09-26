<script setup lang="ts">
    import { Ref } from "vue"
    import { useRegionStore } from '~~/stores/region-store';
    import { useUserStore } from '~~/stores/user-store';
    import {getMapValue} from '../../../../utils/getMapValue';
    import Datepicker from '@vuepic/vue-datepicker'
    import '@vuepic/vue-datepicker/dist/main.css'
    import { useToast, useModal } from 'tailvue'
    import { useRouter } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import {aesEncrypt, aesDecrypt} from '../../../../utils/crypto';



    


    const session = useSession()


    interface CompleteState{
        slcValue : string,

    }

    let openModal: Ref<boolean> = ref(false)
    const state  = reactive({
        name: '',
        place_of_birth : '',
        home_address: '',
        phone : '',
        gender : '',
        identity_number: '',
        identity : '',
        address: '',
        selection : [],
        item : null,
        date : null,
        selectActive : '',
        searchIcon : ["province", "regency", "district", "village"],
        isLoading: false,
        isData : null,
        isStatus: 'idle',
        isErrorMessage: {
            'name' : '',
            'gender' : '',
            'phone': '',
            'place_of_birth' : '',
            'date_of_birth' : '',
            'home_address' : '',
            'identity_type' : '',
            'identity_number': '',
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
        state.selectActive === 'gender' ? state.gender = value 
            : state.selectActive === 'identity' ? state.identity = value 
         
            : null
            
        openModal.value = false
    }


    const searchIcon = ["province", "regency", "district", "village"]

        
    
    onMounted(() => {
        
        try {
            
            const users = JSON.parse(aesDecrypt(session.getItem("cexup-user")))
            state.name = users.name

            const getProfile = session.getItem('cexup-profile')

            if (getProfile) {
                const profile = JSON.parse(aesDecrypt(getProfile))
                state.gender = profile.gender ?? ''
                state.phone = profile.phone ?? ''
                state.place_of_birth = profile.place_of_birth ?? ''
                state.date = profile.date_of_birth ?? '' 
                state.home_address = profile.home_address ?? ''
                state.identity = profile.identity_type
                state.identity_number  = profile.identity_number ?? ''
            }
            

            listMap.set('identity', ["KTP", "KITAS", "PASSPORT"])
            listMap.set('gender', ["Male", "Female"])
        } catch (error) {
            router.push('/auth')
        }

 
        
    })

    const next = () => {
        try {
            const d = new Date(state.date)
            const month = d?.getMonth()+1 < 10 ? `0${d?.getMonth()+1}` : d?.getMonth()+1
            const date = state.date ? `${d?.getFullYear()}-${month}-${d?.getDate()+1 < 10 ? `0${d?.getDate()+1}` : d?.getDate()+1}` : ""

            const json = {
                'name' : state.name,
                'gender': state.gender,
                'phone': state.phone,
                'place_of_birth': state.place_of_birth,
                'date_of_birth': date,
                'home_address': state.home_address,
                'identity_type': state.identity,
                'identity_number' : state.identity_number
            }

            if (!state.name || !state.gender || !state.phone || !state.place_of_birth || !state.date || !state.home_address || !state.identity || !state.identity_number) return $toast.show({
                type: 'danger',
                message: 'Please enter all field',
                timeout: 4,
            }) 

            if (state.identity_number.length !== 16) return $toast.show({
                type: 'danger',
                message: 'Please check again',
                timeout: 4,
            })

            const getUsers = session.getItem('cexup-profile')
            if (!getUsers) {
                session.setItem('cexup-profile', aesEncrypt(JSON.stringify(json)))
            }else{
                const users = JSON.parse(aesDecrypt(getUsers))
                users['name'] = state.name,
                users['gender']= state.gender,
                users['phone']= state.phone,
                users['place_of_birth']= state.place_of_birth,
                users['date_of_birth']= date,
                users['home_address']= state.home_address,
                users['identity_type']= state.identity,
                users['identity_number'] = state.identity_number
                session.setItem('cexup-profile', aesEncrypt(JSON.stringify(users)))
            }

            

            router.push('/auth/register/rsui/complete_second')
                
        } catch (error) {
            console.log(error)
        }
    } 

watch(() => state.identity_number, (newNumber) => {
    newNumber.length === 16 ? state.isErrorMessage.identity_number = '' : state.isErrorMessage.identity_number = 'Identity must be 16 char' 
})
    
    

</script>

<template>
    <div>
        <nuxt-layout name="auth">
            <div class="mt-9 p-4">
                <h2 class="text-lg text-primary-color font-bold mt-9 w-full text-center font-poppins">Complete Profile
                </h2>
                <div class="inputForm mt-6">
                    <InputText className="rounded-md" v-model="state.name" type="text" placeholder="Full Name" read />
                </div>
                <div class="inputForm mt-7">
                    <InputText className="rounded-md" type="text" placeholder="Gender" v-model="state.gender"
                        src="../../assets/images/arrow_down.svg" :icon="true" select="gender" slc
                        @update:slc-value="slcValue" />
                </div>
                <div class="inputForm mt-6">
                    <InputText className="rounded-md" v-model="state.phone" type="number" placeholder="Phone Number" />
                </div>

                <div class="inputForm mt-6">
                    <InputText className="rounded-md" v-model="state.place_of_birth" type="text"
                        placeholder="Place Of Birth" />
                </div>
                <div class="inputForm mt-7">
                    <!-- <InputText className="rounded-md" type="text" placeholder="Date of Birth" src="../../assets/images/calendar.svg" :icon="true" slc @update:slc-value="slcValue" select="date" /> -->
                    <Datepicker :input-class-name="'h-14'" v-model="state.date" :enable-time-picker="false"
                        :placeholder="'Date of Birth'" />
                </div>

                <div class="inputForm mt-6">
                    <InputText className="rounded-md" v-model="state.home_address" type="text"
                        placeholder="Home Address" />
                </div>


                <div class="inputForm mt-7">
                    <InputText className="rounded-md" type="text" placeholder="Identity Type" v-model="state.identity"
                        src="../../assets/images/arrow_down.svg" :icon="true" select="identity" slc
                        @update:slc-value="slcValue" />
                </div>

                <div class="inputForm mt-6">
                    <InputText
                        :className="'rounded-md '+(state.isErrorMessage.identity_number ? ' border-red-550' : ' border-gray-150')"
                        v-model="state.identity_number" type="number" placeholder="Identity Number" />
                    <h3 v-if="state.isErrorMessage.identity_number" class="text-red-550 font-poppins"
                        style="font-size: 10px; margin-top: 2px;"> {{state.isErrorMessage.identity_number}} </h3>
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
                                <img src="../../../assets/images/search_icon.svg"
                                    class="absolute w-5 h-5 right-3 top-0 transform translate-y-3" alt="">
                            </div>
                            <ul class="w-full h-full overflow-y-scroll mt-6 no-scrollbar">
                                <li class="w-full border-b border-solid border-gray-175 pb-2 flex justify-between items-center mb-4"
                                    @click="selectOption(text)" v-for="(text, index) in state.item" :key="index">
                                    <p
                                        :class="'text-base leading-6 font-poppins '+(state[`${state.selectActive}`] === text ? 'text-primary-color' : 'text-gray-350')">
                                        {{text}}</p>
                                    <img v-if="state[`${state.selectActive}`] === text"
                                        src="../../../assets/images/check_with_bg.svg" class="m-1" alt="" />
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

    @media only screen and (min-width: 520px) {
        .floating-next {
            bottom: 0;
            left: 50%; 
            margin-left: -255px;
            width: 510px;   

        }
    }

</style>