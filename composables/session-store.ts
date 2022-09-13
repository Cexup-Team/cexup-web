interface SessionStore{
    setItem(key: any, value: any)
    getItem(key: any): any
    delItem(key: any)
}