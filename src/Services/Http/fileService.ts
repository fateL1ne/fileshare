import axios, { AxiosResponse } from 'axios';
import * as Url from '../../Constants/urlConstants';


const getAuthHeader = () => {
    return {
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
}

export function upload( file: File, onUploadProgress: any ) : Promise<AxiosResponse> {
    let body = new FormData();
    body.append('file', file);

    return axios.post(Url.UPLOAD, body, {
        headers: getAuthHeader(),
        onDownloadProgress: onUploadProgress
    })
}

export function fetchAll() : Promise<AxiosResponse> {
    return axios.get(Url.DOCUMENTS, {
        headers: getAuthHeader()
    })
}

export function remove( filename : String ) : Promise<AxiosResponse> {
    return axios.get(Url.DELETE + filename, {
        headers: getAuthHeader()
    })
} 