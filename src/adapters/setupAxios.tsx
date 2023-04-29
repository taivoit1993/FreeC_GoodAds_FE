import {AlertColor} from "@mui/material";
import {getRecoil, setRecoil} from "recoil-nexus";
import {authAtom} from "../store/auth.recoil";
import {alertAtom, loadingAtom} from "../store/common.recoil";

export function setupAxios(axios: any) {
    // Add a request interceptor
    axios.interceptors.request.use(
        (config: any) => {
            const goolgeAccount = getRecoil(authAtom);
            if (goolgeAccount?.refreshToken) {
                config.headers['google-token'] = goolgeAccount?.refreshToken
            }
            setRecoil(loadingAtom, true);
            return config
        },
        (error: any) => {
            Promise.reject(error)
        }
    )

    axios.interceptors.response.use((response: any) => {
            setRecoil(loadingAtom, false);
            return response;
        }, (error: any) => {
            setRecoil(loadingAtom, false);
            let errorMessage: any = "";

            if (error.response.status === 500) {
                errorMessage = "Có lỗi xảy ra vui lòng liên hệ quản trị viên!";
            }
            if (error.res?.status === 404) {
                errorMessage = "Không tìm thấy API! Vui lòng liện hệ quản trị viên!";
            }
            if (error.response.status === 401) {
                window.location = '/login' as unknown as Location;
                localStorage.clear();
            }
            if (error.response?.data?.errors) {
                errorMessage = Object.values(error.response?.data?.errors)[0];
            } else {
                if (error.response?.data?.message) {
                    errorMessage = error.response?.data?.message;
                } else {
                    errorMessage = error.response?.data?.errorMessage || Object.values(error.response?.data?.errors)[0];
                }
            }

            setRecoil(alertAtom, {
                open: true,
                type: 'error' as AlertColor,
                title: errorMessage
            })

            return error;
        }
    )
}