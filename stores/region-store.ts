import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"

export const useRegionStore = defineStore('regionStore',{
    state:()=>({

    }),
    actions:{
        async getRegion(id: string){
            const api = useApi()
            const {success, message, data} = await api.getRegion(id)
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