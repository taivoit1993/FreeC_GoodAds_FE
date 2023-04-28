import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import React, {FC} from 'react';
import {IConfirmDialog} from '../interfaces/confirm.dialog.interface';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

const ConfirmDialogComponent: FC<IConfirmDialog> = (props) => {
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
                    <CloseIcon/> Close
                </Button>
                <Button onClick={props.onConfirm} variant="contained">
                    <SaveIcon/> OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialogComponent;