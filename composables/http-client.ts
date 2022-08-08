export type BaseResponse = {
    success: Boolean,
    message: string,
    data: any
}
export interface api{
    get(url:string):Promise<BaseResponse>
    post(url:string,body:any,token?:string):Promise<BaseResponse>
    postForm(url:string,body:FormData):Promise<BaseResponse>
    put(url:string,body:any):Promise<BaseResponse>
    delete(url:string):Promise<BaseResponse>
}
export class Api implements api{

    async get(url: string): Promise<BaseResponse> {

        return await fetch(`${import.meta.env.VITE_APP_BASE_URL}/${url}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'x-api-key' : 'nIqZx30tN1UVVVwXiOh4davvvkhvLzlKI4HcBbic3gtxJS1HCX'
            })
        })
            .then((res) => res.json())
            .then(val => {
                //todo extract respose
                return {
                    success: true,
                    data: val.data,
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

    async post(url: string, body: any, token?:string): Promise<BaseResponse> {
        return await fetch(`${import.meta.env.VITE_APP_BASE_URL}/${url}`, {
            method: 'POST',
            body:JSON.stringify(body),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'x-api-key' : 'nIqZx30tN1UVVVwXiOh4davvvkhvLzlKI4HcBbic3gtxJS1HCX',
                'Authorization' : token ? `Bearer ${token}` : ''
            })
        })
            .then((res) => res.json())
            .then((val) => {
                if (!val.success) {
                    return Promise.reject({
                        message: val.message
                    });
                    
                }
                return {
                    success: val.success,
                    message: "",
                    data: val.data
                }
            })
            .catch(e => {
                return {
                    success: false,
                    message: e.message,
                    data: null
                }
            })
    }
    async postForm(url: string, body: FormData): Promise<BaseResponse> {
        return await fetch(`${import.meta.env.VITE_APP_BASE_URL}/${url}`, {
            method: 'POST',
            body:body,
            headers: new Headers({
                'Content-Type': 'application/form-data; charset=UTF-8',
                'x-api-key' : 'nIqZx30tN1UVVVwXiOh4davvvkhvLzlKI4HcBbic3gtxJS1HCX'
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
        return await fetch(`${import.meta.env.VITE_APP_BASE_URL}/${url}`, {
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
        return await fetch(`${import.meta.env.VITE_APP_BASE_URL}/${url}`, {
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