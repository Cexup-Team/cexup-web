import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"
import { getFormatHealthDate } from "~~/utils/getFormatDate";

export const useMedicalDetailStore = defineStore('MedicalDetailStore',{
    state:()=>({
        stateTemperature : {
            isArray: [],
            isTime : [],
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateSpo2 : {
            isArray: [],
            isTime : [],
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateHeartRate : {
            isArray: [],
            isTime : [],
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateRespiration : {
            isArray: [],
            isTime : [],
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateBloodPressure : {
            isSystole : [],
            isDiastole: [],
            isTime : [],
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateEcg : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },
    }),
    actions:{
   
        async getSPO2(user_code){
            const api = useApi()
            this.stateSpo2.isLoading = true
            const {success, message, data} = await api.getSPO2(user_code)
            if (success) {
                this.stateSpo2.isData = data
                this.stateSpo2.isData.items.map((item, index) => {
                    this.stateSpo2.isArray.push(item.value)
                    this.stateSpo2.isTime.push(getFormatHealthDate(item.createdAt))
                })
                this.stateSpo2.isLoading = false
                this.stateSpo2.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateSpo2.isLoading = false
                this.stateSpo2.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        async getTemperature(user_code){
            const api = useApi()
            this.stateTemperature.isLoading = true
            const {success, message, data} = await api.getTemperature(user_code)
            if (success) {
                this.stateTemperature.isData = data
                this.stateTemperature.isData.items.map((item, index) => {
                    this.stateTemperature.isArray.push(item.value)
                    this.stateTemperature.isTime.push(getFormatHealthDate(item.createdAt))
                    // console.log(getFormatHealthDate(item.createdAt))
                })
                this.stateTemperature.isLoading = false
                this.stateTemperature.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateTemperature.isLoading = false
                this.stateTemperature.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },


        async getHeartRate(user_code){
            const api = useApi()
            this.stateHeartRate.isLoading = true
            const {success, message, data} = await api.getHeartRate(user_code)
            if (success) {
                this.stateHeartRate.isData = data
                this.stateHeartRate.isData.items.map((item, index) => {
                    this.stateHeartRate.isArray.push(item.value)
                    this.stateHeartRate.isTime.push(getFormatHealthDate(item.createdAt))
                })
                this.stateHeartRate.isLoading = false
                this.stateHeartRate.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateHeartRate.isLoading = false
                this.stateHeartRate.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        async getRespiration(user_code){
            const api = useApi()
            this.stateRespiration.isLoading = true
            const {success, message, data} = await api.getRespiration(user_code)
            if (success) {
                this.stateRespiration.isData = data
                this.stateRespiration.isData.items.map((item, index) => {
                    this.stateRespiration.isArray.push(item.value)
                    this.stateRespiration.isTime.push(getFormatHealthDate(item.createdAt))
                })
                this.stateRespiration.isLoading = false
                this.stateRespiration.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateRespiration.isLoading = false
                this.stateRespiration.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        async getBloodPressure(user_code){
            const api = useApi()
            this.stateBloodPressure.isLoading = true
            const {success, message, data} = await api.getBloodPressure(user_code)
            if (success) {
                this.stateBloodPressure.isData = data
                this.stateBloodPressure.isData.items.map((item, index) => {
                    this.stateBloodPressure.isSystole.push(item.systole)
                    this.stateBloodPressure.isDiastole.push(item.diastole)
                    this.stateBloodPressure.isTime.push(getFormatHealthDate(item.createdAt))
                })
                this.stateBloodPressure.isLoading = false
                this.stateBloodPressure.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateBloodPressure.isLoading = false
                this.stateBloodPressure.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        // ecg

        async getECG(user_code){
            const api = useApi()
            this.stateEcg.isLoading = true
            const {success, message, data} = await api.getECG(user_code)
            if (success) {
                this.stateEcg.isData = data
                this.stateEcg.isLoading = false
                this.stateEcg.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateEcg.isLoading = false
                this.stateEcg.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

        
        
    }

})