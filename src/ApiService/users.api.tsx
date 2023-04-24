import axios from "axios"
import {downloadFile, responseApi} from "./common.api";
import {FILE_URL} from "./file.api";

export const USER_URL = `${process.env.REACT_APP_API}users`
export const USER_AUTH = `${process.env.REACT_APP_API}auth`
export const EXPORT_URL = `${process.env.REACT_APP_API}export`


export const getUsers = async (queryParams: any) => {
    const response = await axios.get(`${USER_URL}`, queryParams);
    return responseApi(response)
}

export const createUserData = async (data: any) => {
    const response = await axios.post(`${USER_URL}`, data);
    return responseApi(response)
}

export const updateUser = async (id: number, data: any) => {
    const response = await axios.put(`${USER_URL}/${id}`, data);
    return responseApi(response)
}

export const viewUser = async (id: number | null) => {
    const response = await axios.get(`${USER_URL}/${id}`);
    return responseApi(response);
}

export const downloadTemplate = async () => {
    const response = await axios.get(`${USER_URL}/downloadTemplate`, {
        responseType: 'blob'
    });
    return responseApi(response);
}

export const downloadUserTemplate = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API}template?template=users`, {
        responseType: 'blob'
    });
    return downloadFile(response);
}

export const ReadDataFromExcel = async (file: any) => {
    const response = await axios.post(`${process.env.REACT_APP_API}read-users-from-files`, file, {
        headers: {"Content-Type": "multipart/form-data"}
    });

    return responseApi(response)
}

export const ImportUserFromExcel = async (data: any) => {
    const response = await axios.post(`${process.env.REACT_APP_API}import-users-from-excel`, data);
    return responseApi(response)
}
export const deleteUser = async (id: number) => {
    const response = await axios.delete(`${USER_URL}/${id}`);
    return responseApi(response)
}
export const exportExcelUser = async (params: any) => {
    const response = await axios.get(`${EXPORT_URL}?template=users`, {
        params: params,
        responseType: 'blob'
    });
    return downloadFile(response);
}

