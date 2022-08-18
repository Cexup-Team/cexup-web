import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"

export const useTeleconsultationStore = defineStore('TeleconsultationStore',{
    state:()=>({

    }),
    actions:{
        async getListDoctorTele(size, search, speciality, hospital){
            const api = useApi()
            const {success, message, data} = await api.getListDoctorTele(size, search, speciality, hospital)

            if (success) {
                return {
                    data : data
                }
            }else{
                return Promise.reject({
                    message: message
                });       
            }
        },


        async getListSpeciality(){
            const api = useApi()
            const {success, message, data} = await api.getListSpeciality()
            if (success) {
                return {
                    data : data
                }
            }else{
                return Promise.reject({
                    message: message
                });       
            }
        },


        async getDoctorTele(id){
            const api = useApi()
            const {success, message, data} = await api.getDoctorTele(id)
            if (success) {
                return {
                    data : data
                }
            }else{
                return Promise.reject({
                    message: message
                });       
            }
        },

        async getTimeList(doctor_has_hospital, date, appointment){
            const api = useApi()
            const {success, message, data} = await api.getTimeList(doctor_has_hospital, date, appointment)
            if (success) {
                return {
                    data : data
                }
            }else{
                return Promise.reject({
                    message: message
                });       
            }
        },

    
    }

})