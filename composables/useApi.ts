import {DataStoreImpl} from "@/composables/data-store-impl"
import {Api} from "@/composables/http-client"



export function useApi(): DataStore {
    return new DataStoreImpl(new Api())
}