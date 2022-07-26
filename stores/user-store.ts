import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore',{
    state:()=>({

    }),
    actions:{
       async signIn(email:string,password:string){
            const api = useApi()
            const {success,message} = await api.signIn(email,password)
            if(success){
                //todo show toas or whatever
            }
        }
    }

})