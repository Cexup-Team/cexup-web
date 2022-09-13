import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"
import { selectSafeZero } from "../utils/getFormatDate";

export const useTeleRegisterStore = defineStore('TeleRegisterStore',{
    state:()=>({
        stateCheckout : {
            birth : null,
            date : null,
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateUser : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateQuiz : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
            isSession : null,
        }

    }),
    actions:{
        
        async getListQuiz(speciality_id){
            const api = useApi()
            this.stateQuiz.isLoading = true
            const {success, message, data} = await api.getListQuiz(speciality_id)
            if (success) {
                this.stateQuiz.isData = data
                if (!useSession().getItem("cexup-quiz")) {
                    useSession().setItem("cexup-quiz", JSON.stringify(data))
                }
                this.stateQuiz.isSession = JSON.parse(useSession().getItem("cexup-quiz"))
                this.stateQuiz.isLoading = false
                this.stateQuiz.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateQuiz.isLoading = false
                this.stateQuiz.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        async booking(json: Object){
            const api = useApi()
            const {success, message, data} = await api.booking(json)
            if(success){
                // useSession().delItem("cexup-chekout")
                // useSession().delItem("cexup-quiz")
                return {
                    route : '/'
                }
            }else{
                useSession().setItem("cexup-chekout", message)
                useSession().delItem("cexup-quiz")
                return {
                    route : '/teleconsultation/order/failed'
                }       
            }
        },
    
    }

})