import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"
import { selectSafeZero } from "../utils/getFormatDate";

export const useTeleRegisterStore = defineStore('TeleRegisterStore',{
    state:()=>({
        state : {
            payLoading : false
        },
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
        },
        
        stateMessageFailed : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
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
            this.state.payLoading = true
            const {success, message, data} = await api.booking(json)
            if(success){
                useSession().delItem("cexup-checkout")
                useSession().delItem("cexup-quiz")
                
                this.state.payLoading = false
                return {
                    route : `/teleconsultation/order/${data.transaction_id}`,
                    payment_url : data.payment_url
                }
            }else{
                useSession().setItem("cexup-checkout", message)
                useSession().delItem("cexup-quiz")
                this.state.payLoading = false
                return Promise.reject({
                    route : '/teleconsultation/order/failed'
                });       
            }
        },
    
    }

})