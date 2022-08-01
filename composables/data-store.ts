interface DataStore{
    signIn(emai:string,password:string):Promise<{success:Boolean,message:string,data:any}>
    signUp(name:string, email: string, password: string): Promise<{success:Boolean,message:string,data:any}>
    // region(emai:string,password:string):Promise<{success:Boolean,message:string,data:any}>
}