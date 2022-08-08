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
        }
    }

})