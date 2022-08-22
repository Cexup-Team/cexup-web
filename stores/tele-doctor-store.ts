import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"
import { selectSafeZero } from "../utils/getFormatDate";

export const useTeleDoctorStore = defineStore('TeleDoctorStore',{
    state:()=>({
        state : {
            slcDate : null,
            note: null,
            allDay : null,
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },
    
        stateTime : {
            slcTime: null,
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateSlcDate : {
            slc : null
        },
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
                
                console.log(this.stateSpeciality.isSelect)
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
            this.state.isLoading = true
            this.stateTime.isLoading = true
            const {success, message, data} = await api.getDoctorTele(id)
            if (success) {
                this.state.isData = data
                this.getTime(selectSafeZero(new Date()))
                this.state.isLoading = false
                this.state.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.state.isLoading = false
                this.state.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        async getTimeList(doctor_has_hospital, date, appointment){
            const api = useApi()
            this.stateTime.isLoading = true
            const {success, message, data} = await api.getTimeList(doctor_has_hospital, date, appointment)
            if (success) {
                this.stateTime.isData = data
                this.stateTime.isLoading = false
                this.stateTime.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateTime.isLoading = false
                this.stateTime.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        getTime(date) {
            const select  = selectSafeZero(date)
            const hospital_id = this.state.isData.hospital[0].id
            this.stateSlcDate.slc = select
            this.getTimeList(hospital_id, select, 'call')
        },

        getAllDaysInMonth(year, month) {
            const date = new Date(year, month, 1);
    
            const dates = [];
    
            while (date.getMonth() === month || date.getMonth() === month + 1) {
                dates.push(new Date(date));
                date.setDate(date.getDate() + 1);
            }
            return dates;
        },
        
        next(){
            const chekout = useSession().getItem("cexup-chekout")
            const users = JSON.parse(useSession().getItem("cexup-user"))
            if (!this.stateTime.isData) {
            }else {
                
                const json = {
                    "id" : this.stateTime.isData[this.stateTime.slcTime].id,
                    "time" : this.stateTime.isData[this.stateTime.slcTime].time,
                    "date" : this.stateSlcDate.slc,
                    "type" : "call",
                    "note" : this.state.note,
                    "allow_access_data" : true,
                    "data_questionnaire" :  null
                }

                useSession().setItem("cexup-chekout", JSON.stringify(json))
                console.log(useSession().getItem("cexup-chekout"))
                return {
                    router : 'register'
                }
                

            }
            
        }

    
    }

})