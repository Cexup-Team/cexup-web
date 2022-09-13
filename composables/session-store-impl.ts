export class SessionStoreImpl implements SessionStore{
    
    setItem(key: any, value: any){
        sessionStorage.setItem(key, value)
    }

    getItem(key: any) {
        let val = sessionStorage.getItem(key)
        return val
    }

    delItem(key: any) {
        sessionStorage.removeItem(key);
    }

}