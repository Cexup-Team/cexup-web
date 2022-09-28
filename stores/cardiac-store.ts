import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"
import { getFormatHealthDate } from "~~/utils/getFormatDate";

export const useCardiactore = defineStore('Cardiactore',{
    state:()=>({
        state : {
            select : 'haasbledd',
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateChadsvas : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateHaasbledd : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },
    }),
    actions:{
   

        
        async getChadsvas(){
            const api = useApi()
            this.state.isLoading = true
            const {success, message, data} = await api.getChadsvas()
            if (success) {
                this.state.isData = data
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

        async getHaasbledd(){
            const api = useApi()
            this.state.isLoading = true
            const {success, message, data} = await api.getHaasbledd()
            if (success) {
                this.state.isData = data
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

    }

})