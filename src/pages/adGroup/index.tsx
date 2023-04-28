import React from 'react';
import {Card, CardContent, Grid} from "@mui/material";
import FilterComponent from "../../components/filter.component";
import WrapperTableComponent from "../../components/wrapper-table.component";
import {useMutation, useQuery} from "react-query";
import {createAdGroup, deleteAdGroup, getAdGroups, updateAdGroup, viewAdGroup} from "../../ApiService/adGroup.api";
import {IColumn} from "../../interfaces/wrapper-table.interface";
import {addGroupColumn} from "./properties/properties";
import {showSuccessNotification} from "../../notifications/show.success.notification";
import CreateAdGroup from "./create";
import ConfirmDialogComponent from "../../components/confirm.dialog.component";
import {viewCampaign} from "../../ApiService/campaign.api";

const columns: IColumn[] = addGroupColumn;
const AdGroup = () => {
    document.title = "Google Ad Group Manager";
    const [adGroups, setAdGroups] = React.useState([]);
    const [adGroup, setAdGroup] = React.useState(null as any);
    const [open, setOpen] = React.useState(false);
    const [idDelete, setIdDelete] = React.useState(0);
    const [idView, setIdView] = React.useState(null as (number | null));
    const [isEdit, setIsEdit] = React.useState(false);
    const [isConfirmDelete, setConfirmDelete] = React.useState(false);
    const handleSearch = (name: string) => {

    }

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

    const openConfirmDelete = (id: number) => {
        setConfirmDelete(true);
        setIdDelete(id);
    }

    const onCreate = (data: any) => {
        if (isEdit) {
            update(data);
        } else {
            mutate(data);
        }
    }

    const openCreateDialog = () => {
        setAdGroup(null);
        setOpen(true);
        setIsEdit(false);
    }

    const handleDelete = () => {
        setConfirmDelete(false);
        destroy(idDelete);
    }

    const {isLoading, refetch} = useQuery({
        queryKey: ["getAdGroups"],
        queryFn: () => getAdGroups({params: {}}),
        onSuccess: (data) => {
            setAdGroups(data.data);
        },
    });

    //API create ad group
    const {mutate} = useMutation("createAdGroup", (data: any) => {
            return createAdGroup(data);
        },
        {
            onSuccess: (data) => {
                refetch();
                setOpen(false);
                showSuccessNotification("Create Ad Group Success!")
            }
        }
    )
    //API remove ad group
    const {mutate: destroy} = useMutation("deleteAdGroup", (id: number) => {
        return deleteAdGroup(id);
    }, {
        onSuccess: (data) => {
            refetch();
            showSuccessNotification("Delete Ad Group Success!")
        }
    })

    //API update ad group
    const {mutate: update} = useMutation("updateAdGroup", (data: any) => {
        return updateAdGroup(data.id, data);
    }, {
        onSuccess: (data) => {
            refetch();
            setOpen(false);
            showSuccessNotification("Update Campaign Success!")
        }
    })

    useQuery({
        queryKey: ["viewAdGroup", idView],
        queryFn: () => viewAdGroup(idView),
        onSuccess: (data) => {
            setIdView(null);
            setAdGroup(data.data);
            setOpen(true);
        },
        enabled: !!idView
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
                    <Card sx={{m: "1rem", p: "0.5rem"}}>
                        <CardContent>
                            <WrapperTableComponent
                                columns={columns}
                                rows={adGroups}
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
                <CreateAdGroup
                    open={open}
                    onclose={() => setOpen(false)}
                    onCreate={onCreate}
                    loading={isLoading}
                    data={adGroup}
                    isEdit={isEdit}
                />
            )}


            <ConfirmDialogComponent
                open={isConfirmDelete}
                title={"Are you sure remove Ad Group?"}
                onClose={() => setConfirmDelete(false)}
                onConfirm={handleDelete}
            />
        </>
    );
};

export default AdGroup;