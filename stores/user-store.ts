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
                    !users.country_id||
                    !users.country_name||
                    !users.current_address||
                    !users.current_country_id||
                    !users.current_country_name||
                    !users.current_districts_id||
                    !users.current_districts_name||
                    !users.current_postal_code||
                    !users.current_provinces_id||
                    !users.current_provinces_name||
                    !users.current_regencies_cities_id||
                    !users.current_regencies_cities_name||
                    !users.current_rt||
                    !users.current_rw||
                    !users.current_villages_id||
                    !users.current_villages_name||
                    !users.date_of_birth||
                    !users.districts_id||
                    !users.districts_name||
                    !users.gender||
                    !users.home_address||
                    !users.name||
                    !users.no_type||
                    !users.phone_number||
                    !users.place_of_birth||
                    !users.postal_code||
                    !users.provinces_id||
                    !users.provinces_name||
                    !users.regencies_cities_id||
                    !users.regencies_cities_name||
                    !users.rt||
                    !users.rw||
                    !users.type||
                    !users.villages_id||
                    !users.villages_name
                ) {
                    console.log('wkwkwkw')
                    return {
                        location : '/auth/register/rsui/complete_first'
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
          json: Object
        ){
            const api = useApi()
            const users = JSON.parse(useSession().getItem("cexup-user"))
            console.log(users)
            const {success, message, data} = await api.updatePatient(json)
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