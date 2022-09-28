import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"

export const useTeleconsultationStore = defineStore('TeleconsultationStore',{
    state:()=>({
        stateSpeciality : {
            isLoading: false,
            isSelect : [],
            isStatus: 'idle',
            isError : false,
            isData : null,
        },
    
        stateTele : {
            item : null,
            selectActive : '',
            speciality: '',
            search: '',
            searchIcon : ["speciality"],
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        }
    }),
    actions:{
        async getListDoctorTele(size, search, speciality, hospital){
            const api = useApi()
            this.stateTele.isLoading = true
            const {success, message, data} = await api.getListDoctorTele(size, search, speciality, hospital)

            if (success) {
                this.stateTele.isData = data
                this.stateTele.isLoading = false
                this.stateTele.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateTele.isLoading = false
                this.stateTele.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },


        async getListSpeciality(){
            const api = useApi()
            this.stateSpeciality.isLoading = true
            const {success, message, data} = await api.getListSpeciality()
            if (success) {
                this.stateSpeciality.isData = data
                this.stateSpeciality.isData.forEach(el => {
                    this.stateSpeciality.isSelect.push(el.name)
                });
                this.stateSpeciality.isLoading = false
                this.stateSpeciality.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateSpeciality.isLoading = false
                this.stateSpeciality.isStatus = "error"
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