import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"



export const useQuestionnaireStore = defineStore('QuestionnaireStore',{
    state:()=>({
        state : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

     
    }),
    actions:{
        async getListQuiz(speciality_id){
            const api = useApi()
            this.stateOrder.isLoading = true
            const {success, message, data} = await api.getListQuiz(speciality_id)
            if (success) {
                this.stateOrder.isData = data
                this.stateOrder.isLoading = false
                this.stateOrder.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.stateOrder.isLoading = false
                this.stateOrder.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

    }

})