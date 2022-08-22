import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"
import { useToast, useModal } from 'tailvue'


const $toast = useToast()


export const useUserStore = defineStore('userStore',{
    state:()=>({
        stateLogin : {
            email : "",
            password: "",
            isLoading: false,
            isData : null,
            isStatus: 'idle',
            isErrorMessage: {
                'email' : '',
                'password': ''
            }
        },

        stateRegister : {
            name : "",
            email: "", 
            password: "",
            confirmPassword : "",
            agree : false,
            isLoading: false,
            isData : null,
            isStatus: 'idle',
            isErrorMessage: {
              'name': '',
              'email' : '',
              'password' : ''
            }
        }
    }),
    actions:{
       async signIn(){
            const api = useApi()
            const router = useRouter()
            this.stateLogin.email === "" ? this.stateLogin.isErrorMessage.email = "Email must be required" : this.stateLogin.isErrorMessage.email = ""
            this.stateLogin.password === "" ? this.stateLogin.isErrorMessage.password = "Password must be required" : this.stateLogin.isErrorMessage.password = ""
            this.stateLogin.isLoading = true
            const {success,message, data} = await api.signIn(this.stateLogin.email,this.stateLogin.password)
            if(success){
                useSession().setItem("cexup-token", data.access_token)
                useSession().setItem("cexup-user", JSON.stringify(data.user))
                const users = JSON.parse(useSession().getItem("cexup-user"))
                if (
                    !users.phone_number ||
                    !users.gender || 
                    !users.date_of_birth || 
                    !users.no_type || 
                    !users.type ||
                    !users.no_type ||  
                    !users.provinsi_id || 
                    !users.kabupaten_id || 
                    !users.kecamatan_id ||
                    !users.desa_id
                ) {
                    return {
                        location : '/auth/register/complete'
                    }
                }else{
                    return {
                        location: '/'
                    }
                }
            }else{
                
                $toast.show({
                    type: 'danger',
                    message: message,
                    timeout: 4,
                })

                this.stateLogin.isLoading = false

                return Promise.reject({
                    message: message
                });
            }
        },

        async signUp(name:string, emai:string, password:string){
            const api = useApi()
            const {success, message, data} = await api.signUp(name, emai, password)
            if(success){
                return {
                    data : data
                }
            }else{
                return Promise.reject({
                    message: message
                });       
            }
        },

        async updatePatient(
            phone?: string,
            gender?: string, 
            date_of_birth?: string,
            address?: string,
            identity?: string,
            province_id?: string, 
            regency_id?: string, 
            district_id?: string, 
            village_id?: string
        ){

            const api = useApi()
            const users = JSON.parse(useSession().getItem("cexup-user"))
            console.log(users)
            const {success, message, data} = await api.updatePatient(
                users.user_id,
                users.name,
                phone, 
                gender, 
                date_of_birth,
                address,
                identity,
                province_id, 
                regency_id, 
                district_id, 
                village_id
            )
            if(success){
                return {
                    route : '/'
                }
            }else{
                return Promise.reject({
                    message: message
                });       
            }
        },
        
    }

})