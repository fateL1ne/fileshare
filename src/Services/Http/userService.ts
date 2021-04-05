import axios, { AxiosResponse } from 'axios';
import * as Url from '../../Constants/urlConstants';

type UserCredentials = {
    email: string,
    password: string
}

export function login({email, password} : UserCredentials) : Promise<AxiosResponse> {
    return axios.post(Url.LOGIN, {
        email: email,
        password: password
    })
}

export function register({email, password} : UserCredentials) : Promise<AxiosResponse> {
    return axios.post(Url.REGISTER, {
        email: email,
        password: password
    })
}
