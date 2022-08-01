import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"

export const useUserStore = defineStore('userStore',{
    state:()=>({

    }),
    actions:{
       async signIn(email:string,password:string){
            const api = useApi()
            const {success,message, data} = await api.signIn(email,password)
            if(success){
                useSession().setItem("cexup-session ", data.access_token)
                useSession().setItem("cexup-user ", data.user)
                return {
                    data : data.access_token
                }
            }else{
                return Promise.reject({
                    message: message
                });       
            }
        },

        async signUp(name:string, emai:string, password:string){
            const api = useApi()
            const {success, message, data} = await api.signUp(name, emai, password)
            console.log(success)
            console.log(data)
        }
    }

})