import React from 'react';
import {Card, CardContent, Grid} from "@mui/material";
import FilterComponent from "../../components/filter.component";
import WrapperTableComponent from "../../components/wrapper-table.component";
import {useQuery} from "react-query";
import {getAdGroups} from "../../ApiService/adGroup.api";
import {IColumn} from "../../interfaces/wrapper-table.interface";
import {addGroupColumn} from "../adGroup/properties/properties";
import {getAds} from "../../ApiService/ad.api";

const columns: IColumn[] = addGroupColumn;
const Ad = () => {
    document.title = "Google Ad Group Manager";
    const [ads, setAds] = React.useState([]);
    const [ad, setAd] = React.useState(null as any);
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

    }

    const openConfirmDelete = (id: number) => {

    }

    const openCreateDialog = () => {
        setAd(null);
        setOpen(true);
        setIsEdit(false);
    }

    const { isLoading, refetch } = useQuery({
        queryKey: ["getAds"],
        queryFn: () => getAds({ params: { } }),
        onSuccess: (data) => {
            setAds(data.data);
        },
    });
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
            {/*{open && (*/}
            {/*    <CreateCampaign*/}
            {/*        open={open}*/}
            {/*        onclose={() => setOpen(false)}*/}
            {/*        onCreate={onCreate}*/}
            {/*        loading={isLoading}*/}
            {/*        data={campaign}*/}
            {/*        isEdit={isEdit}*/}
            {/*    />*/}
            {/*)}*/}


            {/*<ConfirmDialogComponent*/}
            {/*    open={isConfirmDelete}*/}
            {/*    title={"Bạn chắc chắn muốn xóa?"}*/}
            {/*    onClose={() => setConfirmDelete(false)}*/}
            {/*    onConfirm={handleDelete}*/}
            {/*/>*/}
        </>
    );
};

export default Ad;