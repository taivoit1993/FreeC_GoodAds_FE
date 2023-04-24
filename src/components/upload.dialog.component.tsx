import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    IconButton,
    Stack,
} from "@mui/material";
import React, {FC, useEffect} from "react";
import ReactImageUploading from "react-images-uploading";
import {IUploadDialog} from "../interfaces/upload.dialog.component";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

let arrayImage: { url: string, name: string }[] = [];
const UploadDialogComponent: FC<IUploadDialog> = (props) => {


    const [images, setImages] = React.useState([] as any);
    const [index, setIndex] = React.useState(0);
    const maxNumber = 5;
    useEffect(() => {
        setImages(props.files);
    }, [props.files]);
    const onChange = (imageList: any, addUpdateIndex: any) => {
        setImages(imageList);
    };

    const handleSave = () => {
        props.onSave(props.id || 0, images);
    }
    return (
        <Dialog
            maxWidth="md"
            open={props.open}
            aria-labelledby="responsive-dialog-title"
        >
            <ReactImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                  }) => (
                    <>
                        <DialogContent>
                            <div className="upload__image-wrapper">
                                <Divider sx={{mt: 2, mb: 2}}/>
                                <Stack direction="row" spacing={4}>
                                    {imageList.map((image, index) => (
                                        <div
                                            key={index}
                                            className="image-item"
                                            style={{position: "relative"}}
                                        >
                                            <div
                                                className="image-item__btn-wrapper"
                                                style={{position: "absolute", right: 0, top: -15}}
                                            >
                                                <IconButton
                                                    component="label"
                                                    color="error"
                                                    onClick={() => {
                                                        onImageRemove(index)
                                                    }}
                                                >
                                                    <CancelIcon/>
                                                </IconButton>
                                            </div>
                                            <img
                                                src={image.dataURL ? image.dataURL : `${process.env.REACT_APP_IMAGE_URL}` + image.url}
                                                alt=""
                                                width="150"
                                                height="150"
                                                style={{objectFit: "contain"}}
                                            />
                                        </div>
                                    ))}
                                </Stack>
                                <Divider sx={{mt: 2, mb: 2}}/>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleSave} variant="contained">
                                <SaveIcon/> Lưu
                            </Button>
                            <Button variant="contained" onClick={onImageUpload}>
                                <CloudUploadIcon/> Tải Ảnh
                            </Button>
                            <Button
                                variant="contained"
                                onClick={props.onClose}
                                color="error"
                                autoFocus
                            >
                                <CloseIcon/> Đóng
                            </Button>
                        </DialogActions>
                    </>
                )}
            </ReactImageUploading>
        </Dialog>
    );
};

export default UploadDialogComponent;
