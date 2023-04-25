import {atom} from "recoil";

export const authAtom = atom({
    key: 'authAtom',
    default: localStorage.getItem("googleAccount") ? JSON.parse(localStorage.getItem("googleAccount") as string) : null
})