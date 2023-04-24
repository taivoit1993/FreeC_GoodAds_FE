import React, {FC} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography} from '@mui/material';
import {IImportDialog} from '../interfaces/import.interface';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import PublishIcon from '@mui/icons-material/Publish';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import {blue, grey} from '@mui/material/colors';

const ImportComponent: FC<IImportDialog> = (props) => {
    const [fileName, setFileName] = React.useState("Chưa có tập tin nào tải lên");
    const [selectedImage, setSelectedImage] = React.useState(null);

    const handleSave = () => {
        props.onConfirm(selectedImage);
    }
    return (
        <Dialog
            maxWidth="xl"
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent sx={{minWidth: 600}}>
                <Stack spacing={2} direction="row" justifyContent="flex-end">
                    <Button variant="contained" onClick={props.onDownload}>
                        Tải File Mẫu
                    </Button>
                </Stack>
                <Stack spacing={2} direction="row" mt={2}>
                    <Typography variant="body1" mt={1}
                                sx={{width: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                        {fileName}
                    </Typography>
                    <IconButton aria-label="upload picture" component="label" sx={{
                        background: blue[700], color: grey['A100'], ":hover": {
                            background: blue[800], color: grey['A100']
                        }
                    }}>
                        <input hidden
                               accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,.dat"
                               type="file"
                               onChange={(event: any) => {
                                   setFileName(event.target.files[0].name);
                                   setSelectedImage(event.target.files[0]);
                               }}/>
                        <PublishIcon/>
                    </IconButton>
                </Stack>
                <Stack spacing={0} direction="row" alignItems="center" sx={{color: grey[600]}}>
                    <InfoIcon/>
                    <Typography variant="caption">
                        Chỉ tải được file với định dạng .xls, .xlsx hoặc .dat
                    </Typography>
                </Stack>

            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={props.onClose} color="error" autoFocus>
                    <CloseIcon/> Đóng
                </Button>
                <Button onClick={handleSave} variant="contained" disabled={selectedImage == null ? true : false}>
                    <PublishIcon/> Tải lên
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ImportComponent;