import axios from "axios"
import { responseApi } from "./common.api";

export const AD_URL = `${process.env.REACT_APP_API}ads`


export const getAds = async (queryParams: any) => {
    const response = await axios.get(`${AD_URL}`, queryParams);
    return responseApi(response)
}

export const createAds = async (data: any) => {
    const response = await axios.post(`${AD_URL}`, data);
    return responseApi(response)
}

export const viewAds = async (id: number | null) => {
    const response = await axios.get(`${AD_URL}/${id}`);
    return responseApi(response)
}

export const updateAds = async (id: number, data: any) => {
    const response = await axios.put(`${AD_URL}/${id}`, data);
    return responseApi(response)
}

export const deleteAds = async (id: number, ad_group_id: number) => {
    const response = await axios.delete(`${AD_URL}/${id}?ad_group_id=${ad_group_id}`);
    return responseApi(response)
}
