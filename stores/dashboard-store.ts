import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"

export const useDashboardStore = defineStore('DashboardStore',{
    state:()=>({

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


    }

})