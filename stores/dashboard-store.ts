import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"

export const useDashboardStore = defineStore('DashboardStore',{
    state:()=>({
        state : {
            name : ''
        },
        
        stateProduct : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateDoctor : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateArticle : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
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
        }
    }),
    actions:{
        async getListDoctor(size){
            const api = useApi()
            this.stateDoctor.isLoading = true
            const {success, message, data} = await api.getListDoctor(size)
            if (success) {
                this.stateDoctor.isData = data
                this.stateDoctor.isLoading = false
                this.stateDoctor.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateDoctor.isLoading = false
                this.stateDoctor.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        async getListProduct(size){
            const api = useApi()
            this.stateProduct.isLoading = true
            const {success, message, data} = await api.getListProduct(size)
            if (success) {
                this.stateProduct.isData = data
                this.stateProduct.isLoading = false
                this.stateProduct.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateProduct.isLoading = false
                this.stateProduct.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },


        async getListArticle(size){
            const api = useApi()
            this.stateArticle.isLoading = true
            const {success, message, data} = await api.getListArticle(size)
            if (success) {
                this.stateArticle.isData = data
                this.stateArticle.isLoading = false
                this.stateArticle.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateArticle.isLoading = false
                this.stateArticle.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

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

        //ews

        async getCurrentEWS(user_code){
            const api = useApi()
            this.stateCurrentEWS.isLoading = true
            const {success, message, data} = await api.getCurrentEWS(user_code)
            if (success) {
                this.stateCurrentEWS.isData = data
                this.stateCurrentEWS.isLoading = false
                this.stateCurrentEWS.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateCurrentEWS.isLoading = false
                this.stateCurrentEWS.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        //order
        async getListOrder(appointment, type, user_id){
            const api = useApi()
            const {success, message, data} = await api.getListOrder(appointment, type, user_id)
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