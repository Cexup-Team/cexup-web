import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"

export const useDashboardStore = defineStore('DashboardStore',{
    state:()=>({
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
            const {success, message, data} = await api.getListDoctor(size)
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

        async getListProduct(size){
            const api = useApi()
            const {success, message, data} = await api.getListProduct(size)
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


        async getListArticle(size){
            const api = useApi()
            const {success, message, data} = await api.getListArticle(size)
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

        //vital sign

        async getLatestVitalSign(user_code){
            const api = useApi()
            const {success, message, data} = await api.getLatestVitalSign(user_code)
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

        //ews

        async getCurrentEWS(user_code){
            const api = useApi()
            const {success, message, data} = await api.getCurrentEWS(user_code)
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