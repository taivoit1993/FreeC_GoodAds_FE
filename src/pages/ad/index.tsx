import React from 'react';
import {Card, CardContent, Grid} from "@mui/material";
import FilterComponent from "../../components/filter.component";
import WrapperTableComponent from "../../components/wrapper-table.component";
import {useMutation, useQuery} from "react-query";
import {IColumn} from "../../interfaces/wrapper-table.interface";
import {createAds, deleteAds, getAds, updateAds, viewAds} from "../../ApiService/ad.api";
import CreateAd from "./create";
import ConfirmDialogComponent from "../../components/confirm.dialog.component";
import {showSuccessNotification} from "../../notifications/show.success.notification";
import {addColumn} from "./properties/properties";

const columns: IColumn[] = addColumn;
const Ad = () => {
    document.title = "Google Ad Group Manager";
    const [ads, setAds] = React.useState([]);
    const [ad, setAd] = React.useState(null as any);
    const [open, setOpen] = React.useState(false);
    const [idDelete, setIdDelete] = React.useState(0);
    const [idAdGroup, setIdAdGroup] = React.useState(0);
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

    const openConfirmDelete = (id: number, optional?: number) => {
        setConfirmDelete(true);
        setIdDelete(id);
        setIdAdGroup(optional ?? 0);
    }

    const openCreateDialog = () => {
        setAd(null);
        setOpen(true);
        setIsEdit(false);
    }

    const onCreate = (data: any) => {
        if (isEdit) {
            update(data);
        } else {
            mutate(data);
        }
    }

    const handleDelete = () => {
        setConfirmDelete(false);
        destroy({id:idDelete,ad_group_id:idAdGroup});
    }
    //===================================
    //Recoil Call API
    //===================================

    // API get listing
    const {isLoading, refetch} = useQuery({
        queryKey: ["getAds"],
        queryFn: () => getAds({params: {}}),
        onSuccess: (data) => {
            setAds(data.data);
        },
    });

    //API create ad
    const {mutate} = useMutation("createAds", (data: any) => {
            return createAds(data);
        },
        {
            onSuccess: (data) => {
                refetch();
                setOpen(false);
                showSuccessNotification("Create Ad Success!")
            }
        }
    )
    //API remove ad group
    const {mutate: destroy} = useMutation("deleteAds", (data:{id: number, ad_group_id: number}) => {
        return deleteAds(data.id, data.ad_group_id);
    }, {
        onSuccess: (data) => {
            refetch();
            showSuccessNotification("Delete Ad Success!")
        }
    })

    //API update ad
    const {mutate: update} = useMutation("updateAds", (data: any) => {
        return updateAds(data.id, data);
    }, {
        onSuccess: (data) => {
            refetch();
            setOpen(false);
            showSuccessNotification("Update  Success!")
        }
    })

    useQuery({
        queryKey: ["viewAds", idView],
        queryFn: () => viewAds(idView),
        onSuccess: (data) => {
            setIdView(null);
            setAd(data.data);
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
                                rows={ads}
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
                <CreateAd
                    open={open}
                    onclose={() => setOpen(false)}
                    onCreate={onCreate}
                    loading={isLoading}
                    data={ad}
                    isEdit={isEdit}
                />
            )}


            <ConfirmDialogComponent
                open={isConfirmDelete}
                title={"Are you sure remove ad?"}
                onClose={() => setConfirmDelete(false)}
                onConfirm={handleDelete}
            />
        </>
    );
};

export default Ad;