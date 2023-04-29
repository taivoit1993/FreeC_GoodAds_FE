import React from 'react';
import {
    Button,
    Card,
    CardContent, Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormGroup, FormHelperText,
    InputLabel, MenuItem, Select,
    Stack,
    TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useForm} from "react-hook-form";
import {useQuery} from "react-query";
import {getAdGroups} from "../../ApiService/adGroup.api";
import {CreateAdValidation} from "./validate/validation";

const CreateAd = (props: any) => {
    const [adGroups, setAdGroups] = React.useState([]);


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
        resolver: yupResolver(CreateAdValidation),
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
            data['ad_group_id'] = props.data?.ad_group_id;
        }
        props.onCreate(data);
    };
    const handleClose = () => {
        props.onclose();
    };

    const {isLoading, refetch} = useQuery({
        queryKey: ["getAdGroups"],
        queryFn: () => getAdGroups({params: {}}),
        onSuccess: (data) => {
            setAdGroups(data.data);
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
                                            id="head_line_1"
                                            sx={{paddingBottom: 2}}
                                            type="text"
                                            variant="outlined"
                                            label="HeadeLine 1"
                                            defaultValue={props.data?.head_line_1}
                                            error={!!errors["head_line_1"]}
                                            helperText={String(
                                                errors["head_line_1"] ? errors["head_line_1"].message : ""
                                            )}
                                            {...register("head_line_1")}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="head_line_2"
                                            sx={{paddingBottom: 2}}
                                            type="text"
                                            variant="outlined"
                                            label="HeadeLine 2"
                                            defaultValue={props.data?.head_line_2}
                                            error={!!errors["head_line_2"]}
                                            helperText={String(
                                                errors["head_line_2"] ? errors["head_line_2"].message : ""
                                            )}
                                            {...register("head_line_2")}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="head_line_3"
                                            sx={{paddingBottom: 2}}
                                            type="text"
                                            variant="outlined"
                                            label="HeadeLine 3"
                                            defaultValue={props.data?.head_line_3}
                                            error={!!errors["head_line_3"]}
                                            helperText={String(
                                                errors["head_line_3"] ? errors["head_line_3"].message : ""
                                            )}
                                            {...register("head_line_3")}
                                        />
                                    </FormControl>
                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="description_1"
                                            sx={{paddingBottom: 2}}
                                            type="text"
                                            variant="outlined"
                                            label="Description 1"
                                            defaultValue={props.data?.description_1}
                                            error={!!errors["description_1"]}
                                            helperText={String(
                                                errors["description_1"] ? errors["description_1"].message : ""
                                            )}
                                            {...register("description_1")}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="description_2"
                                            sx={{paddingBottom: 2}}
                                            type="text"
                                            variant="outlined"
                                            label="Description 2"
                                            defaultValue={props.data?.description_1}
                                            error={!!errors["description_2"]}
                                            helperText={String(
                                                errors["description_2"] ? errors["description_2"].message : ""
                                            )}
                                            {...register("description_2")}
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
                                    <FormControl fullWidth>
                                        <InputLabel id="select-ad-group-id">
                                            Ad Group
                                        </InputLabel>
                                        <Select
                                            labelId="select-ad-group-id"
                                            id="sselect-ad-group-id"
                                            defaultValue={props.data?.ad_group_id}
                                            disabled={props.isEdit ? true : false}
                                            sx={{marginBottom: 2}}
                                            label="Ad Group"
                                            {...register("ad_group_id", {required: true})}
                                            error={!!errors["ad_group_id"]}
                                        >
                                            {adGroups.map((item: any, index: number) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {errors["ad_group_id"] ? (
                                            <FormHelperText error={true}>
                                                {String(errors["ad_group_id"] ? errors["ad_group_id"].message : "")}
                                            </FormHelperText>
                                        ) : (
                                            ""
                                        )}
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

export default CreateAd;