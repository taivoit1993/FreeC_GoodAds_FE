import React, {useEffect} from 'react';
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

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {useQuery} from "react-query";
import {getCampaign} from "../../ApiService/campaign.api";
import {CreateAdGroupValidation} from "./validate/validation";

const CreateAdGroup = (props: any) => {
    const [campaigns, setCampaigns] = React.useState([]);
    const [defaultValues, setDefaulValues] = React.useState({
        start_date: props.data?.start_date,
        end_date: props.data?.end_date
    })

    const adGroupStatus: { key: number, value: string }[] = [
        {
            "key": 2,
            "value": "ENABLED"
        },
        {
            "key": 3,
            "value": "PAUSED"
        }
    ]
    const formOptions = {
        resolver: yupResolver(CreateAdGroupValidation),
    };
    // get functions to build form with useForm() hook
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm(formOptions);
    const onSubmit = (data: any) => {
        console.log(data);
        if (props.isEdit) {
            data['id'] = props.data?.id;
        }
        props.onCreate(data);
    };
    const handleClose = () => {
        props.onclose();
    };

    const {isLoading, refetch} = useQuery({
        queryKey: ["getCampaign"],
        queryFn: () => getCampaign({params: {}}),
        onSuccess: (data) => {
            setCampaigns(data.data);
        },
    });

    return (
        <Dialog
            maxWidth="xl"
            open={props.open}
            aria-labelledby="responsive-dialog-title"
            onClose={handleClose}
        >
            <DialogTitle id="responsive-dialog-title">
                {props.isEdit ? "Edit Ad Group" : "Add Add Group"}
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
                                        <InputLabel id="select-ad-group-status">
                                            Status
                                        </InputLabel>
                                        <Select
                                            labelId="select-ad-group-status"
                                            id="select-ad-group-status"
                                            defaultValue={props.data?.status}
                                            sx={{marginBottom: 2}}
                                            label="status"
                                            {...register("status", {required: true})}
                                            error={!!errors["status"]}
                                        >
                                            {adGroupStatus.map((item: any, index: number) => (
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
                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <FormControl fullWidth>
                                        <InputLabel id="select-campaign-id">
                                            Campaign
                                        </InputLabel>
                                        <Select
                                            labelId="select-campaign-id"
                                            id="select-campaign-id"
                                            defaultValue={props.data?.campaign_id}

                                            sx={{marginBottom: 2}}
                                            label="Campaign"
                                            {...register("campaign_id", {required: true})}
                                            error={!!errors["campaign_id"]}
                                        >
                                            {campaigns.map((item: any, index: number) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {errors["campaign_id"] ? (
                                            <FormHelperText error={true}>
                                                {String(errors["campaign_id"] ? errors["campaign_id"].message : "")}
                                            </FormHelperText>
                                        ) : (
                                            ""
                                        )}
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="cpc_bid_micros"
                                            sx={{paddingBottom: 2}}
                                            type="number"
                                            variant="outlined"
                                            label="CPC Bid Micros"
                                            defaultValue={props.data?.cpc_bid_micros}
                                            error={!!errors["cpc_bid_micros"]}
                                            helperText={String(
                                                errors["cpc_bid_micros"] ? errors["cpc_bid_micros"].message : ""
                                            )}
                                            {...register("cpc_bid_micros")}
                                        />
                                    </FormControl>

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

export default CreateAdGroup;