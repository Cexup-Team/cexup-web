import {api} from "@/composables/http-client"
import { useSession } from "~~/composables/useSession"

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

    async signUp(name: string, email: string, password: string): Promise<{ success: Boolean; message: string; data: any }> {
        const {success,message,data} = await this.api.post('register/patient', {
            name: name,
            email: email,
            password: password
        })

        return {
            success:success,
            message:message,
            data:data
        }
    }


    async getRegion(id: string): Promise<{ success: Boolean; message: string; data: any }> {
        const {success,message,data} = await this.api.get('wilayah/'+id)

        return {
            success:success,
            message:message,
            data:data
        }
    }

    async updatePatient(
        user_id:string,
        name?: string,
        phone?: string, 
        gender?: string, 
        date_of_birth?: string,
        address?: string,
        identity?:string, 
        province_id?: string, 
        regency_id?: string, 
        district_id?: string, 
        village_id?: string
    ): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.post('update/patient', {
            user_id: user_id,
            name: name,
            phone_number: phone, 
            gender: gender === 'Male' ? 'laki-laki' : 'perempuan', 
            date_of_birth: date_of_birth,
            address: address, 
            provinsi_id: province_id, 
            kabupaten_id: regency_id, 
            kecamatan_id: district_id, 
            desa_id: village_id 
        }, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }


    async getListDoctor(size): Promise<{ success: Boolean; message: string; data: any }> {
        const {success,message,data} = await this.api.get(`doctor?data=${size}`)

        return {
            success:success,
            message:message,
            data:data
        }
    }

}