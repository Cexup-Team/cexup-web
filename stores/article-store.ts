import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"
import { getFormatHealthDate } from "~~/utils/getFormatDate";

export const useArticleStore = defineStore('ArticleStore',{
    state:()=>({
        state : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },
    }),
    actions:{
   

        //vital sign
        async getDetailArticle(slug){
            const api = useApi()
            this.state.isLoading = true
            const {success, message, data} = await api.getDetailArticle(slug)
            if (success) {
                this.state.isData = data
                this.state.isLoading = false
                this.state.isStatus = "success"
                return {
                    data : data
                }
            }else{
                this.state.isLoading = false
                this.state.isStatus = "error"
                return Promise.reject({
                    message: message
                });       
            }
        },

    }

})