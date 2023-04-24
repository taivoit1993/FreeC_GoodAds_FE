import {atom} from "recoil";

export const authAtom = atom({
    key: 'authAtom',
    default: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") as string) : null
})