export type BaseResponse = {
    success: Boolean,
    message: string,
    data: any
}
export interface api{
    get(url:string):Promise<BaseResponse>
    post(url:string,body:any):Promise<BaseResponse>
    postForm(url:string,body:FormData):Promise<BaseResponse>
    put(url:string,body:any):Promise<BaseResponse>
    delete(url:string):Promise<BaseResponse>
}
export class Api implements api{

    async get(url: string): Promise<BaseResponse> {

        return await fetch(`${import.meta.env.BASE_URL_API}/${url}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
            })
        })
            .then((res) => res.json())
            .then(val => {
                //todo extract respose
                return {
                    success: true,
                    data: "",
                    message: ""
                }
            })
            .catch((e) => {
                return {
                    success: false,
                    message: e.message,
                    data: null
                }
            })
    }

    async post(url: string, body: any): Promise<BaseResponse> {
        return await fetch(`${import.meta.env.BASE_URL_API}/${url}`, {
            method: 'POST',
            body:JSON.stringify(body),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
            })
        })
            .then((res) => res.json())
            .then((val) => {
                return {
                    success: false,
                    message: "",
                    data: ""
                }
            })
            .catch(e => {
                return {
                    success: false,
                    message: e.message,
                    data: ""
                }
            })
    }
    async postForm(url: string, body: FormData): Promise<BaseResponse> {
        return await fetch(`${import.meta.env.BASE_URL_API}/${url}`, {
            method: 'POST',
            body:body,
            headers: new Headers({
                'Content-Type': 'application/form-data; charset=UTF-8',
            })
        })
            .then((res) => res.json())
            .then((val) => {
                return {
                    success: false,
                    message: "",
                    data: ""
                }
            })
            .catch(e => {
                return {
                    success: false,
                    message: e.message,
                    data: ""
                }
            })
    }

    async put(url: string, body: any): Promise<BaseResponse> {
        return await fetch(`${import.meta.env.BASE_URL_API}/${url}`, {
            method: 'PUT',
            body:JSON.stringify(body),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
            })
        })
            .then((res) => res.json())
            .then((val) => {
                return {
                    success: false,
                    message: "",
                    data: ""
                }
            })
            .catch(e => {
                return {
                    success: false,
                    message: e.message,
                    data: ""
                }
            })
    }
    async delete(url: string): Promise<BaseResponse> {
        return await fetch(`${import.meta.env.BASE_URL_API}/${url}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
            })
        })
            .then((res) => res.json())
            .then((val) => {
                return {
                    success: false,
                    message: "",
                    data: ""
                }
            })
            .catch(e => {
                return {
                    success: false,
                    message: e.message,
                    data: ""
                }
            })
    }


}