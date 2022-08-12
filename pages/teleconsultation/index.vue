<script setup lang="ts">
    import { Ref } from "vue"
    import { useRouter } from 'vue-router';
    import { useSession } from "~~/composables/useSession"
    import { useToast, useModal } from 'tailvue'
    import { useTeleconsultationStore } from '~~/stores/teleconsultation-store';
    import { useUserStore } from '~~/stores/user-store';
    import { stat } from "fs";

    const $toast = useToast()
    const router = useRouter()
    const session = useSession()
    const listMap = new Map()

    const teleconsultation = useTeleconsultationStore()


    let openModal: Ref<boolean> = ref(false)

    let typingTimer;
    let doneTypingInterval = 2000;

    const stateSpeciality = reactive({
        isLoading: false,
        isSelect : [],
        isStatus: 'idle',
        isError : false,
        isData : null,
    })

    const stateTele = reactive({
        item : null,
        selectActive : '',
        speciality: '',
        search: '',
        searchIcon : ["speciality"],
        isLoading: false,
        isStatus: 'idle',
        isError : false,
        isData : null,
    })

    const slcValue = (value) => {
        stateTele.item = listMap.get(value)
        stateTele.selectActive = value
        openModal.value = true
    }
    const changeOpen = (value) => {
        openModal.value = value
    }

    const selectOption = (value) => {
        stateTele.speciality = value
        openModal.value = false
    }


    const reset = () => {
        stateTele.speciality = ""
        openModal.value = false
    }

    
    const getListDoctorTele = (size, search, speciality, hospital) => {
        stateTele.isLoading = true
        teleconsultation.getListDoctorTele(size, search, speciality, hospital).then(
            res => {
                stateTele.isData = res.data
                stateTele.isLoading = false
                stateTele.isStatus = "success"
            }
        ).catch(
            err => {
                console.log(err)
                stateTele.isLoading = false
                stateTele.isStatus = "error"
            }
        )
        // state.isLoading = false
    }


    const getListSpeciality = () => {
        stateSpeciality.isLoading = true
        teleconsultation.getListSpeciality().then(
            res => {
                stateSpeciality.isData = res.data
                stateSpeciality.isData.forEach(el => {
                    stateSpeciality.isSelect.push(el.name)
                });
                
                console.log(stateSpeciality.isSelect)
                stateSpeciality.isLoading = false
                stateSpeciality.isStatus = "success"
            }
        ).catch(
            err => {
                console.log(err)
                stateSpeciality.isLoading = false
                stateSpeciality.isStatus = "error"
            }
        )
        // state.isLoading = false
    }

    watch(() => stateTele.search, (newSearch, oldSearch) => {
        if (newSearch !== oldSearch) {
            stateTele.isLoading = true
            clearTimeout(typingTimer)
            typingTimer = setTimeout(() => {
                getListDoctorTele("", newSearch, stateTele.speciality, "")
                
            }, doneTypingInterval);
        }
    })


    watch(() => stateTele.speciality, (newSpeciality) => {
        getListDoctorTele("", "", newSpeciality, "")
    })


    onMounted(() => {
        getListDoctorTele("", "", "", "")
        getListSpeciality()
    })

    listMap.set('speciality', stateSpeciality.isSelect)

    const searchIcon = ["speciality"]
    

</script>
<template>
    <div>
        <nuxt-layout name="main">
            <div class="telemedicine-wrapper relative">

                <div class="nav-bar fixed bg-white w-full z-30 top-0 pb-4">
                    
                    <div class="flex justify-between mt-6 mx-6 items-center">
                        <img src="../../assets/images/icon_back.svg" class="w-3 h-4" alt="">
                        <h1 class="font-poppins text-xl font-semibold">Teleconsultation</h1>
                        <div></div>
                    </div>
                </div>

                <div class="fixed bottom-8 z-30 w-full">
                    <div class="w-full text-center">
                        <span class="choose-span rounded-2xl bg-white px-4 py-3" @click="slcValue('speciality')">Choose Specialization</span>
                        <!-- <InputText className="choose-span rounded-2xl bg-white px-4 py-3" /> -->
                    </div>
                </div>

                <section class="history-profile px-4 pt-20 relative">                   
                    <div class="relative h-11">
                        <input v-model="stateTele.search" class="search_input outline-none border border-gray-150 w-full bg-none p-4 font-poppins text-sm absolute top-0 left-0 h-full" placeholder="Search for doctor (min 3 word)" type="text">
                        <img src="../../assets/images/search_icon.svg" class="absolute w-5 h-5 right-3 top-0 transform translate-y-3" alt="">
                    </div> 
                </section>
                <section class="mt-6">
                    <div class="flex justify-between items-center px-4 w-full">
                        <h2 class="font-poppins text-sm font-semibold">Doctor available now</h2>
                        <span class="text-primary-color font-poppins text-sm font-semibold">See All</span>
                    </div>
                    <div class="mt-4 bg-blue-50 relative"> 
                        <div class="tele-doctor overflow-x-scroll no-scrollbar pb-20" >
                            <div class="min-w-max px-4 py-3 flex">
                                <!-- <CardTeleconsultationDoctorAvailable  name="Dr. Iqbal Nur Ha" speciality="Dermatologist" online :price=5000 link="/teleconsultation/doctor/kamskmas" /> -->
                            </div>
                        </div>
                        <div class="w-full flex px-4 mt-4 absolute bottom-0 transform translate-y-10 h-28 rounded-2xl overflow-hidden">
                            <img src="../../assets/images/banner_promo.png" class="object-cover w-full rounded-2xl" alt="">
                        </div>
                    </div>
                </section>

                <section class="mt-14 px-4"> 
                    <div v-if="!stateTele.isLoading && stateTele.isStatus === 'success'">
                        <div v-for="(item, index) in stateTele.isData" :key="index">
                            <CardTeleconsultationDoctor :name="item.name" :speciality="item.speciality" :rs="item.hospital[0].name" online :year=5 :price=100000 :image="item.thumb"  />
                        </div>
                    </div>

                    <div v-if="stateTele.isLoading || stateTele.isStatus === 'error'">
                        <div v-for="(item, index) in 5" :key="index">
                            <ShimmerCardTeleconsultationDoctor />
                        </div>
                    </div>
                </section>
                <div class="mt-9"></div>

                <BottomSheet :openModal="openModal" @update:change-open="changeOpen" type="blank">
                    <template v-slot:bottomSheet>
                        <div class="">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-sm font-semibold font-poppins leading-5 w-full">Choose Specialization</h3>
                                <h3 class="font-poppins text-sm text-primary-color" @click="reset">Reset</h3>
                            </div>
                            <div class="relative h-16 max-h-16 min-h-max mb-2" v-if="stateTele.searchIcon.indexOf(stateTele.selectActive) > -1">
                                <input class="search_input outline-none border border-gray-150 w-full bg-none p-3 font-poppins text-sm absolute top-0 left-0" placeholder="Search" type="text">
                                <img src="../../../assets/images/search_icon.svg" class="absolute w-5 h-5 right-3 top-0 transform translate-y-3" alt="">
                            </div>
                            <ul class="w-full h-full overflow-y-scroll mt-2 no-scrollbar">
                                <li class="w-full border-b border-solid border-gray-175 pb-2 flex justify-between items-center mb-4" @click="selectOption(text)" v-for="(text, index) in stateTele.item" :key="index">
                                    <p :class="'text-base leading-6 font-poppins '+(stateTele[`${stateTele.selectActive}`] === text ? 'text-primary-color' : 'text-gray-350')">{{text}}</p>
                                    <img v-if="stateTele[`${stateTele.selectActive}`] === text" src="../../../assets/images/check_with_bg.svg" class="m-1" alt="" />
                                </li>
                            </ul>
                        </div>
                    </template>
                </BottomSheet>

            </div>
        </nuxt-layout>
    </div>
</template>


<style>
    .tele-doctor-item {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }
    .tele-doctor-item {
        width: 330px;
    }

    .tele-doctor-list {
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
    }

    .tele-doctor-list .discount::after {
        content: '';
        width: 100%;
        height: 2px;
        background: #AEAEB2;
        position: absolute;
        left: 0;
        right: 0;
        top: 40%;
    }

    .choose-span {
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
    }
    

</style>