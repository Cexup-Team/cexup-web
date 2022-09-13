interface DataStore{
    signIn(emai:string,password:string):Promise<{success:Boolean,message:string,data:any}>
    signUp(name:string, email: string, password: string): Promise<{success:Boolean,message:string,data:any}>
    getRegion(id:string):Promise<{success:Boolean,message:string,data:any}>
    updatePatient(json: Object): Promise<{success:Boolean,message:string,data:any}>
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
    getTimeList(doctor_has_hospital, date, appointment): Promise<{success:Boolean,message:string,data:any}>
    
    // Quiz
    getListQuiz(speciality_id): Promise<{success:Boolean,message:string,data:any}>

    // Booking
    booking(json: object): Promise<{success:Boolean,message:string,data:any}>
}