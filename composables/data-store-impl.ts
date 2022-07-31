import {api} from "@/composables/http-client"

export class DataStoreImpl implements DataStore{
    api:api

    constructor(api:api){
        this.api = api
    }

   async signIn(email: string, password: string): Promise<{success:Boolean,message:string, data:any}> {
        const {success,message,data} = await this.api.post('login/patient',{
            email:email,
            password:password
        })
    
        return{
            success:success,
            message:message,
            data: data
        }
    }

}