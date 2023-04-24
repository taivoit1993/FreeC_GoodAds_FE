import {Backdrop, CircularProgress} from "@mui/material";
import React from "react";
import {useRecoilValue} from "recoil";
import {loadingAtom} from "../store/common.recoil";

const ProcessComponent = () => {
    const isLoading = useRecoilValue(loadingAtom);
    return (
        <Backdrop
            sx={{color: "#fff", zIndex: 99999}}
            open={isLoading}
        >
            <CircularProgress
                sx={{
                    color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                }}
                size={50}
                thickness={5}
                value={100}/>
        </Backdrop>
    );
};

export default ProcessComponent;
