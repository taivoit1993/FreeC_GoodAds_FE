import React from 'react';
import {
    Button, Card, CardContent, CardHeader,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormGroup, FormHelperText, InputLabel, MenuItem, Select,
    Stack,
    TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import {CreateCampaignValidation} from "./validate/validation";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const CreateCampaign = (props: any) => {
    const campaignStatus: { key: string, value: string }[] = [
        {
            "key": "UNSPECIFIED",
            "value": "UNSPECIFIED"
        },
        {
            "key": "UNKNOWN",
            "value": "UNKNOWN"
        },
        {
            "key": "ENABLED",
            "value": "ENABLED"
        },
        {
            "key": "PAUSED",
            "value": "PAUSED"
        },
        {
            "key": "REMOVED",
            "value": "REMOVED"
        }
    ]
    const formOptions = {
        resolver: yupResolver(CreateCampaignValidation),
    };
    // get functions to build form with useForm() hook
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm(formOptions);
    const onSubmit = (data: any) => {
        if (props.isEdit) {
            data['id'] = props.data?.id;
        }
        props.onCreate(data);
    };
    const handleClose = () => {
        props.onclose();
    };
    return (
        <Dialog
            maxWidth="xl"
            open={props.open}
            aria-labelledby="responsive-dialog-title"
            onClose={handleClose}
        >
            <DialogTitle id="responsive-dialog-title">
                {props.isEdit ? "Edit Campaign" : "Add Campaign"}
            </DialogTitle>
            <DialogContent>
                <form method="post" id="dayLeaveForm" onSubmit={handleSubmit(onSubmit)}>
                    <Card>
                        <CardContent>
                            <FormGroup sx={{p: "1rem", minWidth: "1000px"}}>
                                <Stack direction="row" spacing={2}>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="name"
                                            sx={{paddingBottom: 2}}
                                            type="text"
                                            variant="outlined"
                                            label="Name"
                                            defaultValue={props.data?.name}
                                            error={!!errors["name"]}
                                            helperText={String(
                                                errors["name"] ? errors["name"].message : ""
                                            )}
                                            {...register("name")}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <InputLabel id="select-status-campaign">
                                            Status
                                        </InputLabel>
                                        <Select
                                            labelId="select-status-campaign"
                                            id="select-status-campaign"
                                            defaultValue={props.data?.status}
                                            sx={{marginBottom: 2}}
                                            label="status"
                                            {...register("status", {required: true})}
                                            error={!!errors["status"]}
                                        >
                                            {campaignStatus.map((item: any, index: number) => (
                                                <MenuItem key={index} value={item.key}>
                                                    {item.value}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {errors["status"] ? (
                                            <FormHelperText error={true}>
                                                {String(errors["status"] ? errors["status"].message : "")}
                                            </FormHelperText>
                                        ) : (
                                            ""
                                        )}
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="amount_micros"
                                            sx={{paddingBottom: 2}}
                                            type="number"
                                            variant="outlined"
                                            label="Amount Micros"
                                            defaultValue={props.data?.amount_micros}
                                            error={!!errors["amount_micros"]}
                                            helperText={String(
                                                errors["amount_micros"] ? errors["amount_micros"].message : ""
                                            )}
                                            {...register("amount_micros")}
                                        />
                                    </FormControl>

                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <FormControl fullWidth>
                                            <DatePicker
                                                label="Start Date"
                                                value={props.data?.start_date}
                                                onChange={(newValue) => {
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </FormControl>

                                        <FormControl fullWidth>
                                            <DatePicker
                                                label="End Date"
                                                value={props.data?.end_date}
                                                onChange={(newValue) => {
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </FormControl>
                                    </LocalizationProvider>
                                </Stack>
                            </FormGroup>
                        </CardContent>
                    </Card>
                </form>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleClose} color="error">
                    <CloseIcon/> Đóng
                </Button>
                <Button type="submit" variant="contained" autoFocus form="dayLeaveForm">
                    <SaveIcon/> Lưu
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateCampaign;