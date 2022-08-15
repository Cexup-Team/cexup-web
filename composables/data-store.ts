interface DataStore{
    signIn(emai:string,password:string):Promise<{success:Boolean,message:string,data:any}>
    signUp(name:string, email: string, password: string): Promise<{success:Boolean,message:string,data:any}>
    getRegion(id:string):Promise<{success:Boolean,message:string,data:any}>
    updatePatient(
        user_id: string,
        name: string,
        phone?: string, 
        gender?: string, 
        date_of_birth?: string,
        address?: string,
        identity?: string, 
        province_id?: string, 
        regency_id?: string, 
        district_id?: string, 
        village_id?: string
    ): Promise<{success:Boolean,message:string,data:any}>
    // 
    getListDoctor(size): Promise<{success:Boolean,message:string,data:any}>
    getListProduct(size): Promise<{success:Boolean,message:string,data:any}>
    getListArticle(size): Promise<{success:Boolean,message:string,data:any}>
    getListSpeciality(): Promise<{success:Boolean,message:string,data:any}>
    // vital sign
    getLatestVitalSign(user_code): Promise<{success:Boolean,message:string,data:any}>
    // ews
    getCurrentEWS(user_code): Promise<{success:Boolean,message:string,data:any}>

    // order
    getListOrder(appointment, type, user_id): Promise<{success:Boolean,message:string,data:any}>

    // tele
    getListDoctorTele(size, search, speciality, hospital): Promise<{success:Boolean,message:string,data:any}>
    getDoctorTele(id): Promise<{success:Boolean,message:string,data:any}>
}