
<script setup lang="ts">
    import { ref } from "vue"
    import { useRouter } from 'vue-router';
    import { useToast, useModal } from 'tailvue'
    import { useTeleRegisterStore } from '~~/stores/tele-register-store';
    import { nameDay, nameMonth } from "../../../utils/getFormatDate";
    import Datepicker from '@vuepic/vue-datepicker'
    import '@vuepic/vue-datepicker/dist/main.css'
import NavBar from "~~/parts/NavBar.vue";
import { aesDecrypt } from "~~/utils/crypto";

    

    const $toast = useToast()
    const router = useRouter()
    const tele = useTeleRegisterStore()
    const session = useSession()


    let openModal: Ref<boolean> = ref(false)
    const answer = ref(null)

    const changeOpen = (value) => {
        openModal.value = value
    }


    const changeSelect = (value) => {
        // state.gender = value
        console.log(value)
    }

    const slcValue = (value) => {
        openModal.value = true
    }

        const setIsSheetShow = (value) => {

        // console.log(!value)
        const $ = document.querySelector.bind(document)
        const sheet = $("#sheet")
        sheet.setAttribute("aria-hidden", String(!value))
    }

    const setOverlay = () => {
      setIsSheetShow(false)
      changeOpen(false)
    }

    const selectOption = (e) => {
        // changeSelect(`${e}||${e}`)
        // state.selected = e
        setOverlay()
    }
    
    const getCheckout = async () => {
        
        tele.stateCheckout.isLoading = true
        const checkout = await JSON.parse(session.getItem("cexup-checkout"))
        tele.stateCheckout.isData = checkout
        tele.stateCheckout.date = getDateFormat(tele.stateCheckout.isData.date)
        tele.stateCheckout.isLoading = false
        tele.stateCheckout.isStatus = 'success'
    }

    const getUser = async () => {
        
        tele.stateUser.isLoading = true
        const user = await JSON.parse(aesDecrypt(session.getItem("cexup-user")))
        tele.stateCheckout.birth = getDateFormatBirth(user.date_of_birth)
        tele.stateUser.isData = user
        tele.stateUser.isLoading = false
        tele.stateUser.isStatus = 'success'
    }



    const getDateFormat = (value) => {
        const newDate = new Date(value)
        const day = nameDay(value)
        const date = newDate.getDate()
        const month = nameMonth(newDate.getMonth())
        const year = newDate.getFullYear()

        const format = `${day}, ${date} ${month} ${year} ${tele.stateCheckout.isData.time}`
        return format
    }

    const getDateFormatBirth = (value) => {
        const newDate = new Date(value)
        const day = nameDay(value)
        const date = newDate.getDate()
        const month = nameMonth(newDate.getMonth())
        const year = newDate.getFullYear()

        const format = `${date} ${month} ${year}`
        return format
    }

    onMounted( async () => {
        try {
            const checkout = JSON.parse(session.getItem('cexup-checkout'))
        } catch (error) {
            router.push('/')
        }
        await getCheckout()
        await getUser()
        await tele.getListQuiz(tele.stateCheckout.isData.doctor.speciality_id)
    })


    const onChangeRadio = (e) => {
        const sessionQuiz = JSON.parse(session.getItem('cexup-quiz'))
        const splitName = e.target.getAttribute('name').split("||")
        const splitValue = e.target.value.split("||")
        sessionQuiz[splitName[1]].questionnaire[splitName[2]].answer = []
        sessionQuiz[splitName[1]].questionnaire[splitName[2]].answer.push({
            'key': splitValue[0],
            'text' : splitValue[1]
        })
        session.setItem('cexup-quiz', JSON.stringify(sessionQuiz))

    }

    const done = () => {
        // const sessionQuiz = JSON.parse(session.getItem('cexup-quiz'))
        openModal.value = false
    }
    
    const cancel = () => {
        answer.value.map((item, index)=> {
            item.checked = false;
        })
        openModal.value = false
    }

</script>
<template>
  <div>
     <nuxt-layout name="main">
        <div class="register-schedule-wrapper relative">
            
            <NavBar title="Register Teleconsultation" v-if="!tele.stateCheckout.isLoading && tele.stateCheckout.isStatus === 'success'" :link="tele.stateCheckout.isData.doctor.slug" />
            <div class="mt-20 px-4">
                <section class="">
                    <h2 class="font-poppins font-semibold text-sm">Doctor Information</h2>
                    <div class="card-register-doctor bg-white rounded-xl mt-3">
                        <div class="flex items-start p-4" v-if="!tele.stateCheckout.isLoading && tele.stateCheckout.isStatus === 'success'">
                            <div class="w-20 h-20 rounded-full overflow-hidden mr-5">
                                <img :src="tele.stateCheckout.isData.doctor.thumb" class="object-cover" alt="">
                            </div>
                            <div class="flex flex-col" >
                                <h3 class="font-poppins font-medium text-base">{{tele.stateCheckout.isData.doctor.name}}</h3>
                                <p class="font-poppins text-xs text-gray-350">{{tele.stateCheckout.isData.doctor.speciality}}</p>
                                <h5 class="font-poppins text-xs text-gray-350 mt-2">{{tele.stateCheckout.isData.doctor.hospital}}</h5>

                                <div class="flex items-center mt-1">
                                    <img src="../../../assets/images/bag_icon.svg" class="w-3 h-3 mr-2" alt="">
                                    <span class="text-xs font-poppins">5 Years</span>
                                </div>
                                <p class="font-poppins text-xs mt-3">{{tele.stateCheckout.date}}</p>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mt-8" v-if="!tele.stateUser.isLoading && tele.stateUser.isStatus === 'success'">
                    <h2 class="font-poppins font-semibold text-base mb-4">Date of Birth</h2>
                    <!-- <InputText className="rounded-md" type="text" placeholder="Date of Birth" src="../../assets/images/calendar.svg" :icon="true" slc @update:slc-value="slcValue" select="date" /> -->
                    <!-- <Datepicker :input-class-name="'h-14'" v-model="tele.stateCheckout.birth" :enable-time-picker="false" :placeholder="'Date of Birth'"  /> -->
                    <InputText className="rounded-md" type="text" v-model="tele.stateCheckout.birth" read placeholder="" />
                    <h2 class="font-poppins font-semibold text-base mt-6 mb-4">Phone Number</h2>
                    <InputText className="rounded-md" type="text" v-model="tele.stateUser.isData.phone_number" read placeholder="" />
                    <h2 class="font-poppins font-semibold text-base mt-6 mb-4">Gender</h2>
                    <div class="grid grid-cols-2">
                        <div class="flex items-center justify-start">
                            <input type="radio" name="gender" class="mr-3 relative transition-all duration-300" :checked="tele.stateUser.isData.gender === 'laki-laki'" disabled>
                            <h5 class="font-poppins font-medium text-sm">Male</h5>
                        </div>
                        <div class="flex items-center justify-start">
                            <input type="radio" name="gender" class="mr-3 relative transition-all duration-300" :checked="tele.stateUser.isData.gender === 'perempuan'" disabled>
                            <h5 class="font-poppins font-medium text-sm">Female</h5>
                        </div>
                    </div>
                    <h2 class="font-poppins font-semibold text-base mt-6 mb-4">Questionnaire</h2>
                    <div class="flex justify-start items-center" @click="slcValue">
                        <img src="~/assets/images/kuis_icon.svg" class="w-7 h-7 mr-3" alt="">
                        <h6 class="font-poppins font-medium text-sm">Please fill it out</h6>
                    </div>
                </section>
                <div class="mt-12 mb-10">
                    <Button className="w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base" title="Checkout" link="/teleconsultation/doctor/checkout" />
                </div>
            </div>

            <BottomSheet :openModal="openModal" @update:change-open="changeOpen" @update:change-select="changeSelect" type="blank">
                <template v-slot:bottomSheet>
                    <div class="w-full" v-if="!tele.stateQuiz.isLoading && tele.stateQuiz.isStatus === 'success'">

                        <div class="w-full" v-for="(item1, index1) in tele.stateQuiz.isData" :key="index1">
                            <h3 class="font-poppins text-sm font-semibold mt-3">{{`${index1 + 1}. ${item1.name}`}}</h3>
                            <div class="w-full p-3" v-for="(item2, index2) in tele.stateQuiz.isData[index1].questionnaire" :key="index2">
                                <div class="shadow-lg w-full rounded-lg border border-gray-50">
                                    <div class="p-4">
                                        <h3 class="font-poppins text-sm">{{item2.question}}</h3>
                                        <div class="flex flex-col ml-4">
                                            <div class="flex items-center justify-start mt-3" v-for="(item3, index3) in item2.alternatives" :key="index3">
                                                <input :checked="(tele.stateQuiz.isSession[index1].questionnaire[index2].answer[0] ? parseInt(tele.stateQuiz.isSession[index1].questionnaire[index2].answer[0].key) : null) === parseInt(item3.key)" type="radio" ref="answer" @change="onChangeRadio" :name="`alter||${index1}||${index2}`" :value="`${item3.key}||${item3.text}`" class="relative transition-all duration-300 w-auto">
                                                <h5 class="font-poppins font-medium text-sm ml-3 w-full">{{item3.text}}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full text-center bg-primary-color text-white font-poppins py-3 rounded-lg font-medium text-base mt-4" title="Done" @click="done" />
                        
                        <Button className="w-full text-center bg-white text-red-550 border border-red-550 font-poppins py-3 rounded-lg font-medium text-base mt-4" title="Cancel" @click="cancel" />
                        

                        <!-- <div class="w-full p-3">
                            <div class="shadow-lg w-full rounded-lg border border-gray-50">
                                <div class="p-4">
                                    <h3 class="font-poppins text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi obcaecati cum repellendus veritatis ratione doloribus consequuntur voluptate magnam, natus laborum magni facere eveniet iste voluptatibus, possimus sunt! Quo, quos pariatur?</h3>
                                    <div class="flex flex-col ml-4">
                                        <div class="flex items-center justify-start mt-3">
                                            <input type="radio" name="gender" class="relative transition-all duration-300 w-auto">
                                            <h5 class="font-poppins font-medium text-sm ml-3 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam alias esse voluptate. Iste atque quia alias molestias asperiores exercitationem nesciunt, inventore optio animi! Veritatis accusamus fuga ad deleniti suscipit.</h5>
                                        </div>

                                        <div class="flex items-center justify-start mt-3">
                                            <input type="radio" name="gender" class="relative transition-all duration-300 w-auto">
                                            <h5 class="font-poppins font-medium text-sm ml-3 w-full">No</h5>
                                        </div>
                                   
                                   
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full p-3">
                            <div class="shadow-lg w-full rounded-lg border border-gray-50">
                                <div class="p-4">
                                    <h3 class="font-poppins text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi obcaecati cum repellendus veritatis ratione doloribus consequuntur voluptate magnam, natus laborum magni facere eveniet iste voluptatibus, possimus sunt! Quo, quos pariatur?</h3>
                                    <div class="flex flex-col ml-4">
                                        <div class="flex items-center justify-start mt-3">
                                            <input type="radio" name="gender" class="relative transition-all duration-300 w-auto">
                                            <h5 class="font-poppins font-medium text-sm ml-3 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam alias esse voluptate. Iste atque quia alias molestias asperiores exercitationem nesciunt, inventore optio animi! Veritatis accusamus fuga ad deleniti suscipit.</h5>
                                        </div>

                                        <div class="flex items-center justify-start mt-3">
                                            <input type="radio" name="gender" class="relative transition-all duration-300 w-auto">
                                            <h5 class="font-poppins font-medium text-sm ml-3 w-full">No</h5>
                                        </div>
                                   
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                         -->

                        
                    </div>
                </template>
            </BottomSheet>
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