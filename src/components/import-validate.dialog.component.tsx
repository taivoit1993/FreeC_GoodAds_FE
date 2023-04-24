import {Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import React, {FC} from 'react';
import WrapperTableComponent from "./wrapper-table.component";
import CloseIcon from "@mui/icons-material/Close";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {IImportValidateDialog} from '../interfaces/import-validate.interface';
import _ from 'lodash';

const ImportValidateDialogComponent: FC<IImportValidateDialog> = (props: any) => {
    const [rows, setRows] = React.useState(props.row)
    const handleChangePage = () => {

    }

    const handleChangeRowsPerPage = () => {

    }

    const importData = () => {
        props.onImport(rows);
    }
    const deleteError = () => {
        let data = _.filter(rows, function ($item) {
            return $item.error == null;
        });
        setRows(data);
    }
    return (
        <Dialog
            maxWidth="xl"
            open={props.open}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent>
                <Button variant="contained" onClick={deleteError}>Xóa lỗi</Button>
                <Card sx={{mt: "1rem"}}>
                    <CardContent>
                        <WrapperTableComponent
                            columns={props.column}
                            rows={rows}
                            loading={false}
                            meta={{}}
                            onChangePage={handleChangePage}
                            onChangeRowPerPage={handleChangeRowsPerPage}
                        />
                    </CardContent>
                </Card>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={props.onClose} color="error">
                    <CloseIcon/> Đóng
                </Button>
                <Button
                    disabled={_.filter(rows, ($item) => $item.error != null).length > 0 && rows.length > 0}
                    onClick={importData}
                    variant="contained"
                >
                    <FileDownloadIcon/> Lưu
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ImportValidateDialogComponent;