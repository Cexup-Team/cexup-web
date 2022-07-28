import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'

// const userSession = useUserSession()
export const useUserStore = defineStore('userStore',{
    state:()=>({

    }),
    actions:{
       async signIn(email:string,password:string){
            const api = useApi()
            const {success,message, data} = await api.signIn(email,password)
            console.log(data)
            if(success){
                localStorage.setItem("token-cexup", data.access_token)
            }
        }
    }

})