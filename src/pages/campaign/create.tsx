import React from 'react';
import {
    Button, Card, CardContent, CardHeader, Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl, FormControlLabel,
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
import dayjs from "dayjs";

const CreateCampaign = (props: any) => {

    const [defaultValues, setDefaulValues] = React.useState({
        start_date: props.data?.start_date,
        end_date: props.data?.end_date
    })

    const campaignStatus: { key: number, value: string }[] = [
        // {
        //     "key": 0,
        //     "value": "UNSPECIFIED"
        // },
        // {
        //     "key": 1,
        //     "value": "UNKNOWN"
        // },
        {
            "key": 2,
            "value": "ENABLED"
        },
        {
            "key": 3,
            "value": "PAUSED"
        },
        // {
        //     "key": 4,
        //     "value": "REMOVED"
        // }
    ]
    const formOptions = {
        resolver: yupResolver(CreateCampaignValidation),
    };
    // get functions to build form with useForm() hook
    const {
        register,
        handleSubmit,
        setValue,
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

    const handleChangeValue = (key: string, value: any) => {
        let obj = JSON.parse(JSON.stringify(defaultValues));
        obj[key] = value;
        setDefaulValues(obj);
    }

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
                                            InputProps={{
                                                readOnly: props.isEdit ? true : false,
                                            }}
                                            {...register("amount_micros")}
                                        />
                                    </FormControl>


                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <FormControl fullWidth>
                                            <DatePicker
                                                inputFormat="DD/MM/YYYY"
                                                label="Start Date"
                                                value={defaultValues.start_date || null}
                                                onChange={(newValue) => {
                                                    handleChangeValue('start_date', newValue);
                                                    setValue('start_date', newValue);
                                                }}

                                                disabled={props.isEdit ? true : false}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </FormControl>

                                        <FormControl fullWidth>
                                            <DatePicker
                                                inputFormat="DD/MM/YYYY"
                                                label="End Date"
                                                value={defaultValues.end_date || null}
                                                onChange={(newValue) => {
                                                    handleChangeValue('end_date', newValue);
                                                    setValue('end_date', newValue);
                                                }}
                                                disabled={props.isEdit ? true : false}
                                                minDate={dayjs(defaultValues.start_date)?.add(1, "day")}
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
                    <CloseIcon/> Close
                </Button>
                <Button type="submit" variant="contained" autoFocus form="dayLeaveForm">
                    <SaveIcon/> Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateCampaign;