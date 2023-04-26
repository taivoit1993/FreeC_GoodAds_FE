import React from 'react';
import {Card, CardContent, Grid} from "@mui/material";
import FilterComponent from "../../components/filter.component";
import WrapperTableComponent from "../../components/wrapper-table.component";
import {useQuery} from "react-query";
import {getAdGroups} from "../../ApiService/adGroup.api";
import {IColumn} from "../../interfaces/wrapper-table.interface";
import {addGroupColumn} from "./properties/properties";

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

    }

    const openConfirmDelete = (id: number) => {

    }

    const openCreateDialog = () => {
        setAdGroup(null);
        setOpen(true);
        setIsEdit(false);
    }

    const { isLoading, refetch } = useQuery({
        queryKey: ["getAdGroups"],
        queryFn: () => getAdGroups({ params: { } }),
        onSuccess: (data) => {
            setAdGroups(data.data);
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

export default AdGroup;