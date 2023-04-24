import React from 'react';
import AlertComponent from "../../components/alert.component";
import ProcessComponent from "../../components/process.component";
import {Button, Typography} from "@mui/material";

const LoginCallback = () => {
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