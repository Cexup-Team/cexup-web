interface session {
    setItem(key: any, value: any)
    getItem(key: any): any
}

export class useSession implements session{
    
    setItem(key: any, value: any){
        sessionStorage.setItem(key, value)
    }

    getItem(key: any) {
        let val = sessionStorage.getItem(key)
        return val
    }

}