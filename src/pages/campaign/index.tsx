import {Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import WrapperTableComponent from '../../components/wrapper-table.component';
import {useMutation, useQuery} from "react-query";
import {createCampaign, deleteCampaign, getCampaign, updateCampaign, viewCampaign} from "../../ApiService/campaign.api";
import {campaignColumn} from "./properties/properties";
import {IColumn} from "../../interfaces/wrapper-table.interface";
import FilterComponent from "../../components/filter.component";
import CreateCampaign from "./create";
import {showSuccessNotification} from "../../notifications/show.success.notification";
import ConfirmDialogComponent from "../../components/confirm.dialog.component";

const columns: IColumn[] = campaignColumn;
const Campaigns = () => {
    document.title = "Google Ads Campaign Manager";
    const [campaigns, setCampaigns] = React.useState([]);
    const [campaign, setCampaign] = React.useState(null as any);
    const [open, setOpen] = React.useState(false);
    const [idDelete, setIdDelete] = React.useState(0);
    const [idView, setIdView] = React.useState(null as (number | null));
    const [isEdit, setIsEdit] = React.useState(false);
    const [isConfirmDelete, setConfirmDelete] = React.useState(false);
    const handleChangePage = (newPage: number) => {
        // setPage(newPage);
    }

    const handleChangeRowsPerPage = (value: number) => {
        // setRowsPerPage(value);
        // setPage(0);
    }

    const handleView = (id: number) => {
        setIdView(id);
        setIsEdit(true);
    }

    const handleSearch = (name: string) => {

    }

    const openCreateDialog = () => {
        setCampaign(null);
        setOpen(true);
        setIsEdit(false);
    }

    const openConfirmDelete = (id: number) => {
        setConfirmDelete(true);
        setIdDelete(id);
    }

    const handleDelete = () => {
        setConfirmDelete(false);
        destroy(idDelete);
    }


    const onCreate = (data: any) => {
        if (isEdit) {
            update(data);
        } else {
            mutate(data);
        }
    }

    //API get list campaign
    const { isLoading, refetch } = useQuery({
        queryKey: ["getCampaign"],
        queryFn: () => getCampaign({ params: { } }),
        onSuccess: (data) => {
            setCampaigns(data.data);
        },
    });
    //API create campaign
    const { mutate } = useMutation("createCampaign", (data: any) => {
            return createCampaign(data);
        },
        {
            onSuccess: (data) => {
                refetch();
                setOpen(false);
                showSuccessNotification("Create Campaign Success")
            }
        }
    )
    //API remove campaign
    const { mutate: destroy } = useMutation("deleteCampaign", (id: number) => {
        return deleteCampaign(id);
    }, {
        onSuccess: (data) => {
            refetch();
            showSuccessNotification("Delete Campaign Success!")
        }
    })

    //API get details campaign
    useQuery({
        queryKey: ["getCampaign", idView],
        queryFn: () => viewCampaign(idView),
        onSuccess: (data) => {
            setIdView(null);
            setCampaign(data.data);
            setOpen(true);
        },
        enabled: !!idView
    })

    //API update campaign
    const { mutate: update } = useMutation("updateCampaign", (data: any) => {
        return updateCampaign(data.id, data);
    }, {
        onSuccess: (data) => {
            refetch();
            setOpen(false);
            showSuccessNotification("Update Campaign Success!")
        }
    })
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FilterComponent
                        seachTiltle={"Search Name"}
                        onSearch={handleSearch}
                        onCreate={openCreateDialog}

                    />
                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ m: "1rem", p: "0.5rem" }}>
                        <CardContent>
                            <WrapperTableComponent
                                columns={columns}
                                rows={campaigns}
                                loading={isLoading}
                                meta={null}
                                onChangePage={handleChangePage}
                                onChangeRowPerPage={handleChangeRowsPerPage}
                                onView={handleView}
                                onDelete={openConfirmDelete}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {open && (
                <CreateCampaign
                    open={open}
                    onclose={() => setOpen(false)}
                    onCreate={onCreate}
                    loading={isLoading}
                    data={campaign}
                    isEdit={isEdit}
                />
            )}

            <ConfirmDialogComponent
                open={isConfirmDelete}
                title={"Are you sure remove capaign?"}
                onClose={() => setConfirmDelete(false)}
                onConfirm={handleDelete}
            />
        </>
    );
};

export default Campaigns;