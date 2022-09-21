import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"
import { getFormatHealthDate } from "~~/utils/getFormatDate";

export const useMedicalStore = defineStore('MedicalStore',{
    state:()=>({
        state : {
            name : ''
        },

        stateVitalSign : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateCurrentEWS : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },
    }),
    actions:{
   

        //vital sign
        async getLatestVitalSign(user_code){
            const api = useApi()
            this.stateVitalSign.isLoading = true
            const {success, message, data} = await api.getLatestVitalSign(user_code)
            if (success) {
                this.stateVitalSign.isData = data
                this.stateVitalSign.isLoading = false
                this.stateVitalSign.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateVitalSign.isLoading = false
                this.stateVitalSign.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

    }

})