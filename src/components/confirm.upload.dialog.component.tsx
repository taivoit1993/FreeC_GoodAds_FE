import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import React, {FC} from 'react';
import {IConfirmUploadDialog} from '../interfaces/confirm.upload.dialog.interface';

const ConfirmUploadDialogComponent: FC<IConfirmUploadDialog> = (props) => {
    return (
        <Dialog
            maxWidth="md"
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={props.onClose} color="error" autoFocus>
                    <CloseIcon/> Đóng
                </Button>
                <Button onClick={props.onConfirm} variant="contained">
                    <SaveIcon/> Đồng ý
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmUploadDialogComponent;