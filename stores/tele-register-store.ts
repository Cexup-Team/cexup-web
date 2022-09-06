import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"
import { selectSafeZero } from "../utils/getFormatDate";

export const useTeleRegisterStore = defineStore('TeleRegisterStore',{
    state:()=>({
        stateCheckout : {
            birth : null,
            date : null,
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

        stateUser : {
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },

    }),
    actions:{

    
    }

})