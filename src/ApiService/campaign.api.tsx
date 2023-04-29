import axios from "axios"
import { responseApi } from "./common.api";

export const CAMPAIGN_URL = `${process.env.REACT_APP_API}campaign`


export const getCampaign = async (queryParams: any) => {
    const response = await axios.get(`${CAMPAIGN_URL}`, queryParams);
    return responseApi(response)
}

export const createCampaign = async (data: any) => {
    const response = await axios.post(`${CAMPAIGN_URL}`, data);
    return responseApi(response)
}

export const viewCampaign = async (id: number | null) => {
    const response = await axios.get(`${CAMPAIGN_URL}/${id}`);
    return responseApi(response)
}

export const updateCampaign = async (id: number, data: any) => {
    const response = await axios.put(`${CAMPAIGN_URL}/${id}`, data);
    return responseApi(response)
}

export const deleteCampaign = async (id: number) => {
    const response = await axios.delete(`${CAMPAIGN_URL}/${id}`);
    return responseApi(response)
}
