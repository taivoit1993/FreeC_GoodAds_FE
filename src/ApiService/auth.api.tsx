import axios from "axios"
import {LoginInterface} from "../interfaces/auth.interface";
import {setRecoil} from "recoil-nexus";
import {authAtom} from "../store/auth.recoil";

export const AUTH_URL = `${process.env.REACT_APP_API}`


export const login = async (data: LoginInterface) => {
    const response = await axios.post(`${AUTH_URL}clients/web/login`, data);

    if (response?.status === 200) {
        localStorage.setItem("users", JSON.stringify(response.data));
        setRecoil(authAtom,response.data)
        return response.data;
    }
    throw new Error("Error")
}


export const logout = async () => {
    const response = await axios.post(`${AUTH_URL}auth/logout`);
    if (response?.status === 200) {
        return response.data;
    }
    throw new Error("Error");
}

export const getGoogleUrl = async (queryParams: String) => {

        const response = await axios.get(`${AUTH_URL}auth/google/url`);
        if (response?.status === 200) {
            return response.data;
        }
        throw new Error("Error");

}

export const callbackGoogleUrl = async (queryParams: String) => {
    if(queryParams.length > 0){
        const response = await axios.get(`${AUTH_URL}auth/google/oauth2callback`+ queryParams);
        if (response?.status === 200) {
            localStorage.setItem("googleAccount", JSON.stringify(response.data.data));
            setRecoil(authAtom,response.data.data)
            return response.data;
        }
        throw new Error("Error");
    }
}
