import {api} from "@/composables/http-client"
import { useSession } from "~~/composables/useSession"

export class DataStoreImpl implements DataStore{
    api:api

    constructor(api:api){
        this.api = api
    }

   async signIn(email: string, password: string): Promise<{success:Boolean,message:string, data:any}> {
       const token = useSession().getItem("cexup-token")
       const { success, message, data } = await this.api.post(`${import.meta.env.VITE_APP_BASE_URL}`, 'login/patient', `${import.meta.env.VITE_APP_API_KEY}`, {
            email:email,
            password:password
       }, token)
    
        return{
            success:success,
            message:message,
            data: data
        }
    }

    async signUp(name: string, email: string, password: string): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const { success, message, data } = await this.api.post(`${import.meta.env.VITE_APP_BASE_URL}`, 'register/patient', `${import.meta.env.VITE_APP_API_KEY}`, {
            name: name,
            email: email,
            password: password
        }, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }


    async getRegion(id: string): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_BASE_URL}`,'wilayah/'+id, `${import.meta.env.VITE_APP_API_KEY}`, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }

    async updatePatient(
       json: Object
    ): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const { success, message, data } = await this.api.post(`${import.meta.env.VITE_APP_BASE_URL}`, 'update/patient', `${import.meta.env.VITE_APP_API_KEY}`, json, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }


    async getListDoctor(size): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_BASE_URL}`, `doctor?data=${size}`, `${import.meta.env.VITE_APP_API_KEY}`, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }

    async getListProduct(size): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_BASE_URL}`,`ecommerce/product?data=${size}`, `${import.meta.env.VITE_APP_API_KEY}`, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }

    async getListArticle(size): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_BASE_URL}`,`article?data=${size}`, `${import.meta.env.VITE_APP_API_KEY}`, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }



    async getLatestVitalSign(user_code): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_MEDICAL_RECORS}`,`latest-vital-sign/${user_code}`, `${import.meta.env.VITE_APP_MEDICAL_KEY}`, "")
        return {
            success:success,
            message:message,
            data:data
        }
    }


    async getCurrentEWS(user_code): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_BASE_URL}`,`ews/${user_code}`, `${import.meta.env.VITE_APP_API_KEY}`, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }

    async getListOrder(appointment, type, user_id): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_BASE_URL}`,`orders/${user_id}?appointment=${appointment}&type=${type}`, `${import.meta.env.VITE_APP_API_KEY}`, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }

    async getListSpeciality(): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_BASE_URL}`,'speciality', `${import.meta.env.VITE_APP_API_KEY}`, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }


    // Tele
    async getListDoctorTele(size, search, speciality, hospital): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_BASE_URL}`, `doctor?data=${size}&name=${search}&speciality=${speciality}&hospital=${hospital}`, `${import.meta.env.VITE_APP_API_KEY}`, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }

    async getDoctorTele(id): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_BASE_URL}`, `doctor/${id}`, `${import.meta.env.VITE_APP_API_KEY}`, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }


    async getTimeList(doctor_has_hospital, date, appointment): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const { success, message, data } = await this.api.post(`${import.meta.env.VITE_APP_BASE_URL}`, 'doctor/get-time-list', `${import.meta.env.VITE_APP_API_KEY}`, {
            doctor_has_hospital_id : doctor_has_hospital,
            date: date,
            appointment : appointment
        }, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }

    //
    
    async getListQuiz(speciality_id): Promise<{ success: Boolean; message: string; data: any }> {
        const token = useSession().getItem("cexup-token")
        const {success,message,data} = await this.api.get(`${import.meta.env.VITE_APP_BASE_URL}`, `questionnaire-patient/${speciality_id}`, `${import.meta.env.VITE_APP_API_KEY}`, token)

        return {
            success:success,
            message:message,
            data:data
        }
    }
    


}