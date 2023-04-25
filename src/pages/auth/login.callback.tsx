import React from 'react';
import AlertComponent from "../../components/alert.component";
import ProcessComponent from "../../components/process.component";
import {Button, Typography} from "@mui/material";
import {useQuery} from "react-query";
import {callbackGoogleUrl, getGoogleUrl} from "../../ApiService/auth.api";
import {useLocation} from "react-router-dom";

const LoginCallback = (props:any) => {
    const location = useLocation();
    const {isLoading} = useQuery({
        queryKey: ["callbackGoogleUrl"],
        queryFn: () => callbackGoogleUrl(location.search),
        onSuccess: (data) => {
            console.log(data);
        },
    });
    return (
        <>
            <AlertComponent/>
            <ProcessComponent/>
            <div className='App login'>
                <form className="form" method="post" >
                    <Typography variant="h5" component="h2" mb={3} align="center">
                        Google Authorization
                    </Typography>
                    <Button type="submit" color="primary" variant="contained" sx={{fontWeight: 600}}>
                        ĐĂNG NHẬP
                    </Button>
                </form>
            </div>
        </>
    );
};

export default LoginCallback;