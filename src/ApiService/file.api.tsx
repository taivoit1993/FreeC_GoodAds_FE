import axios from "axios"
import {responseApi} from "./common.api";

export const FILE_URL = `${process.env.REACT_APP_API}files`

export const uploadFile = async (data: any) => {
    const response = await axios.post(`${FILE_URL}`, data, {
        headers: {"Content-Type": "multipart/form-data"}
    });

    return  responseApi(response)
}

