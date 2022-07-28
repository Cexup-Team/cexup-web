import {SessionStoreImpl} from "~~/composables/session-store-impl"

export function useSession(): SessionStore {
    return new SessionStoreImpl()
}