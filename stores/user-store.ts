import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"

export const useUserStore = defineStore('userStore',{
    state:()=>({

    }),
    actions:{
       async signIn(email:string,password:string){
            const api = useApi()
            const {success,message, data} = await api.signIn(email,password)
            console.log(data)
            if(success){
                useSession().setItem("cexup-session", data.access_token)
            }
        }
    }

})