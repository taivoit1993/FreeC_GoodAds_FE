import { AlertColor } from "@mui/material";
import {atom} from "recoil";

export const loadingAtom = atom({
    key: 'loadingAtom',
    default: false
})

export const alertAtom = atom({
    key: 'alertAtom',
    default: {
        open: false,
        title: "",
        type: "success" as AlertColor
    }
})