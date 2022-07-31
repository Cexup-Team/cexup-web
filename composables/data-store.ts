interface DataStore{
    signIn(emai:string,password:string):Promise<{success:Boolean,message:string,data:any}>
}