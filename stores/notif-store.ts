import { defineStore } from "pinia";
import { useSession } from "~~/composables/useSession"
import { firestore } from "~~/composables/firebase";
import { collection, query, where, getDocs, updateDoc, doc, setDoc } from "firebase/firestore";
import { aesDecrypt } from "~~/utils/crypto";


const session = useSession()  

export const useNotifStore = defineStore('NotifStore',{
    state:()=>({
        state : {
            isArray : [],
            isMap: new Map(),
            isLoading: false,
            isStatus: 'idle',
            isError : false,
            isData : null,
        },
   

      
    }),
    actions:{
        async getNotif(){
            const api = useApi()
            this.state.isLoading = true
            const user = await JSON.parse(aesDecrypt(session.getItem("cexup-user")))
            const q = query(collection(firestore, "notification"), where("user_code", "==", user.user_code), where("is_view", "==", false));        
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {

                this.state.isMap.set(doc.data().transaction_id, doc.id)
                this.state.isArray.push(doc.data());
            });
            this.state.isArray = this.state.isArray.reverse()
            this.state.isLoading = false
            this.state.isStatus = 'success'
        }
    }
})