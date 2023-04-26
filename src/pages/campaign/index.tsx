import {Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import WrapperTableComponent from '../../components/wrapper-table.component';
import {useQuery} from "react-query";
import {getCampaign} from "../../ApiService/campaign.api";
import {campaignColumn} from "./properties/properties";
import {IColumn} from "../../interfaces/wrapper-table.interface";
import FilterComponent from "../../components/filter.component";
import CreateCampaign from "./create";

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

    }

    const handleSearch = (name: string) => {

    }

    const openCreateDialog = () => {
        setCampaign(null);
        setOpen(true);
        setIsEdit(false);
    }

    const openConfirmDelete = (id: number) => {

    }

    const onCreate = (data: any) => {
        if (isEdit) {
            // update(data);
        } else {
            // mutate(data);
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


            {/*<ConfirmDialogComponent*/}
            {/*    open={isConfirmDelete}*/}
            {/*    title={"Bạn chắc chắn muốn xóa?"}*/}
            {/*    onClose={() => setConfirmDelete(false)}*/}
            {/*    onConfirm={handleDelete}*/}
            {/*/>*/}
        </>
    );
};

export default Campaigns;