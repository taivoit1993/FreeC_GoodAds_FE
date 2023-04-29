import axios from "axios"
import { responseApi } from "./common.api";

export const AD_GROUP_URL = `${process.env.REACT_APP_API}ads-group`


export const getAdGroups = async (queryParams: any) => {
    const response = await axios.get(`${AD_GROUP_URL}`, queryParams);
    return responseApi(response)
}

export const createAdGroup = async (data: any) => {
    const response = await axios.post(`${AD_GROUP_URL}`, data);
    return responseApi(response)
}

export const viewAdGroup = async (id: number | null) => {
    const response = await axios.get(`${AD_GROUP_URL}/${id}`);
    return responseApi(response)
}

export const updateAdGroup = async (id: number, data: any) => {
    const response = await axios.put(`${AD_GROUP_URL}/${id}`, data);
    return responseApi(response)
}

export const deleteAdGroup = async (id: number) => {
    const response = await axios.delete(`${AD_GROUP_URL}/${id}`);
    return responseApi(response)
}
