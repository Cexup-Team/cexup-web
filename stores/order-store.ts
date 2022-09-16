import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"


const session = useSession()

export const useOrderStore = defineStore('OrderStore',{
    state:()=>({
        stateOrder : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },


        state : {
            slcAppointment: "",
            slcStatus: "",
            isLoadingRe : false
        },

        stateShow : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        }

     
    }),
    actions:{
        async getListOrder(appointment, type, user_id){
            const api = useApi()
            this.stateOrder.isLoading = true
            const {success, message, data} = await api.getListOrder(appointment, type, user_id)
            if (success) {
                this.stateOrder.isData = data
                this.stateOrder.isLoading = false
                this.stateOrder.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateOrder.isLoading = false
                this.stateOrder.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        async showOrder(transaction_id){
            const api = useApi()
            this.stateShow.isLoading = true
            const {success, message, data} = await api.showOrder(transaction_id)
            if (success) {
                this.stateShow.isData = data
                this.stateShow.isLoading = false
                this.stateShow.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateShow.isLoading = false
                this.stateShow.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        
        async reschedule(json: Object){
            const api = useApi()
            this.state.isLoadingRe = true
            const {success, message, data} = await api.reschedule(json)
            if(success){
                // useSession().delItem("cexup-checkout")
                // useSession().delItem("cexup-quiz")
                
                this.state.isLoadingRe = false
                return {
                    data : data
                }
            }else{
                this.state.isLoadingRe = false
                return Promise.reject({
                    message: message
                });    
            }
        },

        async joinRoom(json: Object){
            const api = useApi()
            this.state.isLoadingRe = true
            const {success, message, data} = await api.joinRoom(json)
            if(success){                
                this.state.isLoadingRe = false
                return {
                    data : data
                }
            }else{
                this.state.isLoadingRe = false
                return Promise.reject({
                    message: message
                });    
            }
        },
        

        updateSelect(value) {
            this.state.slcAppointment = value
            const user = JSON.parse(session.getItem("cexup-user"))
            this.getListOrder(this.state.slcAppointment, "", user.user_id)
        },

        updateStatus(value) {
            this.state.slcStatus= value
            const user = JSON.parse(session.getItem("cexup-user"))
            this.getListOrder(this.state.slcAppointment, this.state.slcStatus, user.user_id)
        }

        



    }

})