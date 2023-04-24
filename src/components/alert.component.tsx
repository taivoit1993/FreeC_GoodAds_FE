import {Alert, Snackbar} from '@mui/material';
import React from 'react';
import {useRecoilState} from 'recoil';
import {alertAtom} from '../store/common.recoil';

const AlertComponent = () => {
    const [alert, setAlert] = useRecoilState(alertAtom);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        setAlert({
            open: false,
            type: "success",
            title: ""
        })
    };
    return (
        <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}
                  anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
            <Alert onClose={handleClose} severity={alert.type} sx={{width: '100%'}}>
                {alert.title}
            </Alert>
        </Snackbar>
    );
};

export default AlertComponent;